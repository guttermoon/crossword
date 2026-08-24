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
  '<p class="issue">' + GAZETTE.kicker + '</p>' +
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

/* One puzzle per section: the grid, then the clues. */
PUZZLES.forEach((puzzle) => {
  add('<section class="leaf puzzle">' +
    '<h2><span class="no">' + esc(puzzle.issue) + '</span> ' + esc(puzzle.title) + '</h2>' +
    '<p class="blurb">' + puzzle.blurb + '</p>' +
    gridHtml(puzzle.grid) +
    '<p class="heroes"><span>Famous ones in here</span> ' +
      esc((puzzle.heroes || []).join(', ').toLowerCase()) + '</p>' +
    clueList(puzzle, 'across') + clueList(puzzle, 'down') +
    '</section>');
});

/* The answers, and the footnote each one carries. */
add('<section class="leaf"><h2>The answers, and why</h2>' +
  '<p>Every entry, with the note the website shows once you solve it.</p></section>');
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
  '<p class="fold">Print double-sided, flip on the <b>short edge</b>. ' +
  'Fold the stack in half and staple twice along the fold.</p>' +
  '</section>');

/* ------------------------------------------------------------------- write */

const html = `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>${esc(GAZETTE.brand)} — booklet</title>
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
console.log('wrote print/booklet.html');
