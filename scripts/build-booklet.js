/* Builds print/booklet.html — the whole page as an A5 booklet, generated from
 * the same data files the site is built from, so it cannot drift from what is
 * on screen.
 *
 * The grids print empty and numbered, because a crossword you cannot fill in is
 * not a crossword. Answers and footnotes go at the back, where a puzzle book
 * puts them.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
global.window = {};
require(path.join(ROOT, 'data', 'gazette.js'));
require(path.join(ROOT, 'data', 'puzzles.js'));
const GAZETTE = global.window.GAZETTE;
const PUZZLES = global.window.PUZZLES;

/* Text going into markup, where the data holds plain text rather than HTML. */
const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ------------------------------------------------------------------ grids */

/* An empty grid, numbered the way js/grid.js numbers it — same rules, so the
 * printed numbers and the screen's agree. */
function gridHtml(rows) {
  const h = rows.length, w = rows[0].length;
  const at = (r, c) =>
    (r < 0 || c < 0 || r >= h || c >= w || rows[r][c] === '.') ? null : rows[r][c];

  let n = 0;
  const cells = [];
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (!at(r, c)) { cells.push('<i class="blk"></i>'); continue; }
      const starts = (!at(r, c - 1) && at(r, c + 1)) || (!at(r - 1, c) && at(r + 1, c));
      if (starts) n += 1;
      cells.push('<i>' + (starts ? '<u>' + n + '</u>' : '') + '</i>');
    }
  }
  return '<div class="grid" style="--c:' + w + '">' + cells.join('') + '</div>';
}

/* ------------------------------------------------------------------ pieces */

function clueList(puzzle, direction) {
  const side = puzzle.clues[direction] || {};
  const nums = Object.keys(side).sort((a, b) => Number(a) - Number(b));
  if (!nums.length) return '';
  return '<h4 class="dir">' + direction + '</h4><ol class="clues">' +
    nums.map((num) =>
      '<li><b>' + num + '</b> ' + esc(side[num].clue) +
      ' <span class="len">(' + side[num].answer.length + ')</span></li>').join('') +
    '</ol>';
}

function answersFor(puzzle) {
  const out = [];
  ['across', 'down'].forEach((direction) => {
    const side = puzzle.clues[direction] || {};
    Object.keys(side).sort((a, b) => Number(a) - Number(b)).forEach((num) => {
      const c = side[num];
      out.push({ num, direction, entry: c });
    });
  });
  return out;
}

function noteHtml(c) {
  const note = c.note || {};
  let s = '<div class="note">';
  if (note.what) s += '<p>' + esc(note.what) + '</p>';
  if (note.sounds) s += '<p class="pair"><span>Sounds like</span> ' + esc(note.sounds) + '</p>';
  if (note.human) s += '<p class="pair"><span>Instead of</span> ' + esc(note.human) + '</p>';
  return s + '</div>';
}

/* -------------------------------------------------------------- the pages */

const parts = [];
const add = (s) => parts.push(s);

/* Cover. */
add('<section class="leaf cover">' +
  '<img class="mark" src="../img/dgc-logo.webp" alt="">' +
  '<h1>' + (GAZETTE.titleLines || [GAZETTE.title]).map((l) => '<span>' + esc(l) + '</span>').join('') + '</h1>' +
  '<p class="standfirst">' + esc(GAZETTE.standfirst) + '</p>' +
  '<p class="issue">Saturday Edition</p>' +
  '</section>');

/* The article. */
add('<section class="leaf"><h2>' + esc(GAZETTE.title) + '</h2>');
(GAZETTE.brief.blocks || []).forEach((block) => {
  if (block.type === 'video') {
    // A film cannot play on paper, so it prints as where to find it.
    add('<p class="aside"><b>' + esc(block.title) + '</b><br>' +
      'youtube.com/watch?v=' + esc(block.id) + '</p>');
  } else if (block.type === 'quote') {
    add('<p class="aside">' + block.html + '</p>');
  } else if (block.type === 'link') {
    add('<p>' + block.html + '</p>');
  } else {
    add('<p>' + block.html + '</p>');
  }
});
add('</section>');

/* The callout, with its specimens. */
const c = GAZETTE.callout;
// The callout's own strings carry markup and the site inserts them as HTML —
// its points, its sub-points and its specimens all italicise and embolden
// mid-sentence. Escaping them here printed the tags as words.
add('<section class="leaf"><h2>' + esc(c.heading) + '</h2><p>' + c.intro + '</p>');
(c.groups || []).forEach((group) => {
  add('<h3>' + esc(group.name) + '</h3><ul class="pts">');
  (group.points || []).forEach((point) => {
    if (typeof point === 'string') {
      add('<li>' + point + '</li>');
    } else {
      add('<li>' + point.text +
        ((point.sub || []).length
          ? '<ul>' + point.sub.map((s) => '<li>' + s + '</li>').join('') + '</ul>'
          : '') + '</li>');
    }
  });
  add('</ul>');
  if ((group.example || []).length) {
    add('<div class="specimen">' +
      group.example.map((p) => '<p>' + p + '</p>').join('') + '</div>');
  }
});
add('</section>');

/* Each puzzle is a spread: the grid on the left-hand page and its clues on the
 * right-hand one, so you can read a clue and fill it in without turning
 * anything. The grid page is forced onto a verso, which is what makes the pair
 * face each other once the booklet is folded; the blurb moves across to the
 * clue page, because the grid needs the height more than the prose does. */
PUZZLES.forEach((puzzle) => {
  add('<section class="leaf gridPage">' +
    '<h2><span class="no">' + esc(puzzle.issue) + '</span> ' + esc(puzzle.title) + '</h2>' +
    gridHtml(puzzle.grid) +
    '<p class="heroes"><span>Famous ones in here</span> ' +
      esc((puzzle.heroes || []).join(', ').toLowerCase()) + '</p>' +
    '</section>');

  add('<section class="leaf cluePage">' +
    '<h3 class="cluesFor">' + esc(puzzle.issue) + ' &mdash; ' + esc(puzzle.title) + '</h3>' +
    '<p class="blurb">' + puzzle.blurb + '</p>' +
    '<div class="twocol">' +
    clueList(puzzle, 'across') + clueList(puzzle, 'down') +
    '</div></section>');
});

/* The answers, and the footnote each one carries. */
add('<section class="leaf"><h2>The answers, and why</h2>' +
  '<p>Every entry, with the note the website shows once you solve it &mdash; ' +
  'what the habit is, what it sounds like, and what someone would have ' +
  'written instead.</p></section>');
PUZZLES.forEach((puzzle) => {
  add('<section class="leaf"><h3 class="ansHead">' + esc(puzzle.issue) + ' &mdash; ' + esc(puzzle.title) + '</h3>');
  answersFor(puzzle).forEach(({ num, direction, entry }) => {
    add('<div class="ans"><h4>' + num + ' ' + direction + ' &middot; ' +
      esc(entry.answer) +
      (entry.also ? ' <span class="alt">(or ' + esc(entry.also) + ')</span>' : '') +
      '</h4>' + noteHtml(entry) + '</div>');
  });
  add('</section>');
});

/* Sources. */
add('<section class="leaf"><h2>' + esc(GAZETTE.sources.heading) + '</h2><ol class="src">' +
  GAZETTE.sources.items.map((i) => '<li>' + i + '</li>').join('') +
  '</ol></section>');

/* Back cover. */
add('<section class="leaf back">' +
  '<img class="mark" src="../img/dgc-logo.webp" alt="">' +
  '<p class="url">crosswords.deadgoodclub.com</p>' +
  '<p class="fold">Play them on screen, where every clue opens its footnote ' +
  'the moment you solve it.</p>' +
  '</section>');

/* ------------------------------------------------------------------- write */

const html = `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>Dead Good Club Crossword Puzzles</title>
<link rel="stylesheet" href="../css/fonts.css">
<link rel="stylesheet" href="booklet.css">
</head>
<body>
${parts.join('\n')}
</body>
</html>
`;

fs.mkdirSync(path.join(ROOT, 'print'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'print', 'booklet.html'), html);

/* The instructions are not a page of the booklet. They come first, and a page
 * in front of the cover would push it onto a left-hand page and put every
 * spread out by one. So they are their own A4 sheet, printed ahead of the
 * eight and thrown away once the thing is folded — which is why the sheet says
 * so, twice. Landscape, like the sheets that follow, so a printer is never
 * asked to change paper size halfway through a job. */
const instructions = `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>Dead Good Club Crossword Puzzles — how to print</title>
<link rel="stylesheet" href="../css/fonts.css">
<link rel="stylesheet" href="instructions.css">
</head>
<body>
<div class="sheet">
  <p class="bin">This sheet is not part of the booklet &mdash; recycle it once you have folded the rest</p>
  <h1>How to print and fold this</h1>
  <div class="cols">
    <ol class="steps">
      <li><b>Print every page after this one</b> &mdash; 16 sides onto 8 sheets
        of A4, double-sided, at 100% scale. Not &ldquo;fit to page&rdquo;, which
        shrinks the squares.</li>
      <li><b>Flip on the short edge.</b> The sheets are landscape, so their short
        edges are the left and right sides. Flip on the long edge instead and
        every other page comes out upside down. If your printer offers
        &ldquo;booklet&rdquo; or &ldquo;2-up&rdquo;, turn it off: these pages are
        already in the right order.</li>
      <li><b>Check the first sheet.</b> The cover belongs on the right-hand half,
        with page 2 on the back of it. If it is not there, the flip setting is
        the thing to change.</li>
      <li><b>Put this sheet in the recycling</b> and keep the other eight in the
        order they came out, stacked face up with sheet one on top.</li>
      <li><b>Fold all eight at once</b> down the middle, and crease the fold with
        something flat.</li>
      <li><b>Staple twice along the fold</b>, about a third of the way in from
        each end. A long-arm stapler reaches the middle; an ordinary one will if
        you open it flat and press down onto a rubber.</li>
    </ol>
    <div class="dia">
      <svg viewBox="0 0 210 148" aria-hidden="true">
        <rect x="1" y="1" width="208" height="146" fill="none"
          stroke="currentColor" stroke-width="1.4"/>
        <line x1="105" y1="1" x2="105" y2="147" stroke="currentColor"
          stroke-width="1" stroke-dasharray="5 4"/>
        <rect x="101" y="44" width="8" height="3" fill="currentColor"/>
        <rect x="101" y="101" width="8" height="3" fill="currentColor"/>
      </svg>
      <p>The fold runs down the middle of the landscape sheet. The two marks are
        where the staples go.</p>
      <p class="last">32 pages. Three crosswords, their clues on the facing page,
        and every answer with its footnote at the back.</p>
    </div>
  </div>
</div>
</body>
</html>
`;
fs.writeFileSync(path.join(ROOT, 'print', 'instructions.html'), instructions);
console.log('wrote print/booklet.html and print/instructions.html');
