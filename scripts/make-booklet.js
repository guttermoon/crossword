/* Turns print/booklet.html into a saddle-stitch booklet: print/booklet.pdf.
 *
 *   node scripts/build-booklet.js && node scripts/make-booklet.js
 *
 * Two steps. Chromium prints the page at A5 and paginates it. Then those A5
 * pages are laid two-up on A4 landscape sheets in the order that reads
 * correctly once the stack is folded down the middle and stapled.
 *
 * The imposition, for N pages and sheet i counting from nought:
 *
 *   front of sheet i:   N - 2i   on the left,   2i + 1   on the right
 *   back  of sheet i:   2i + 2   on the left,   N - 2i - 1 on the right
 *
 * Fold a sheet and the right half of its front becomes the front of that leaf,
 * with the left half of its back directly behind it — so page 1 faces you and
 * page 2 is on the other side of the same piece of paper. The count is padded
 * to a multiple of four, because a folded sheet makes four pages and there is
 * no such thing as three quarters of one.
 *
 * Print double-sided, flipping on the SHORT edge. The sheets are landscape, so
 * their short edges are the left and right sides: flipping there puts the back
 * of a leaf behind its own front. Flipping on the long edge turns every second
 * page upside down.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const { PDFDocument, degrees } = require(
  '/tmp/claude-0/-home-user-crossword/c3341319-e84c-5557-acec-a651ed84e61b/scratchpad/pdfwork/node_modules/pdf-lib');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'print');
const PAGES_PDF = path.join(OUT_DIR, 'booklet-pages.pdf');
const BOOKLET_PDF = path.join(OUT_DIR, 'booklet.pdf');

// A4 landscape, in PDF points (1pt = 1/72in). A5 is exactly half of it.
const A4_LONG = 841.89;
const A4_SHORT = 595.28;

const url = process.argv[2] || 'http://localhost:8010/print/booklet.html';

(async () => {
  /* ---- 1. the pages, in reading order, at A5 ---- */
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const problems = [];
  page.on('pageerror', (e) => problems.push(String(e)));
  await page.goto(url, { waitUntil: 'networkidle' });
  // Web fonts have to be in before anything is measured for pagination.
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: PAGES_PDF,
    format: 'A5',
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
  if (problems.length) console.warn('page errors:', problems);

  /* ---- 2. impose them onto A4 landscape sheets ---- */
  const pagesPdf = await PDFDocument.load(fs.readFileSync(PAGES_PDF));
  const count = pagesPdf.getPageCount();
  const padded = Math.ceil(count / 4) * 4;
  const sheets = padded / 4;

  const book = await PDFDocument.create();
  // Embed every source page once, then stamp them where they belong.
  const embedded = await book.embedPages(pagesPdf.getPages());
  const halfW = A4_LONG / 2;

  // Where each of the padded positions gets its content from. The blanks go
  // immediately before the last page rather than after it, so the back cover
  // stays on the outside of the folded stack where it was designed to be —
  // padding at the end would leave the booklet closing on an empty sheet.
  const order = [];
  for (let n = 1; n < count; n++) order.push(n);
  while (order.length < padded - 1) order.push(0);
  order.push(count);

  function side(pairs) {
    const sheet = book.addPage([A4_LONG, A4_SHORT]);
    pairs.forEach((position, slot) => {
      const num = order[position - 1] || 0;
      if (!num) return;                            // a padded blank
      const p = embedded[num - 1];
      // Each A5 page is scaled to exactly half the sheet; the source is already
      // A5, so this is 1:1 and only ever nudges by a rounding hair.
      const scale = Math.min(halfW / p.width, A4_SHORT / p.height);
      sheet.drawPage(p, {
        x: slot * halfW + (halfW - p.width * scale) / 2,
        y: (A4_SHORT - p.height * scale) / 2,
        xScale: scale,
        yScale: scale,
      });
    });
  }

  const plan = [];
  for (let i = 0; i < sheets; i++) {
    plan.push(['front', padded - 2 * i, 2 * i + 1]);
    plan.push(['back', 2 * i + 2, padded - 2 * i - 1]);
  }
  plan.forEach(([, left, right]) => side([left, right]));

  const bytes = await book.save();
  fs.writeFileSync(BOOKLET_PDF, bytes);

  console.log('booklet: ' + count + ' A5 pages' +
    (padded !== count ? ' (padded to ' + padded + ' with ' + (padded - count) + ' blank)' : '') +
    ' -> ' + sheets + ' A4 sheets, ' + (sheets * 2) + ' sides');
  console.log('  ' + path.relative(ROOT, BOOKLET_PDF) + '  ' +
    (bytes.length / 1024).toFixed(0) + ' KB');
  console.log('  imposition (source page in each half):');
  plan.forEach(([face, l, r], i) => {
    const show = (position) => order[position - 1] || '·';
    console.log('    sheet ' + (Math.floor(i / 2) + 1) + ' ' + face.padEnd(5) +
      '  [' + show(l) + ' | ' + show(r) + ']');
  });
})();
