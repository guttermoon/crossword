# Mini Mysteries

Three interactive crosswords on one page, designed to look like a March 1972
classroom-magazine puzzle spread: cream stock, a groovy red masthead, a
mini-mystery story column beside each grid, dense clue columns, and a riddle with
a scrambled answer at the foot of every puzzle.

Plain HTML, CSS and JavaScript — no build step, no dependencies, no network calls.
Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000    # then open http://localhost:8000
```

## Playing

| | |
| --- | --- |
| Select a square | Click, or arrow-key to it |
| Switch Across / Down | Click the selected square again, or press Space or Enter |
| Move | Arrow keys — a perpendicular arrow flips direction instead of moving |
| Next / previous clue | Tab / Shift-Tab |
| Ends of the word | Home / End |
| Erase | Backspace (steps back through the word) or Delete |

A wrong letter found by **Check** gets a red pencil slash, which clears as soon as
you retype it. A letter given away by **Reveal** keeps a small red corner. Filling
a grid correctly stamps it SOLVED and uncovers the riddle's answer. Progress and
elapsed time are saved to `localStorage` per puzzle, so a reload picks up where you
left off; **Start Over** clears that puzzle alone.

Everything works from the keyboard, cells carry screen-reader labels naming the
clue and the position within it, and narrow screens get a sticky clue bar above the
on-screen keyboard. `Ctrl`/`Cmd`+`P` prints each puzzle on its own page with the
toolbars and answers hidden.

## Adding or replacing a puzzle

**The three puzzles here are placeholders.** Edit `data/puzzles.js` — nothing else
needs to change, and the page renders however many puzzles the array holds.

```js
{
  id: 'sc-ps',                          // unique; also the localStorage key
  title: 'Mini Mystery',                // masthead of the story column
  heading: 'SC and PS Combinations',    // red section heading
  note: 'When "s" is combined with…',   // instruction box under the heading
  credit: 'By L. Zabo — Puzzle No. 1',  // rotated line beside the grid
  story: ['paragraph one', 'paragraph two'],
  riddle: { question: '…', scramble: 'EHT TNUOC', answer: 'THE COUNT' },
  grid: [                               // equal-length rows, '.' = black square
    '.SUSPECT......E',
    '.H.C..O....S..S',
  ],
  clues: {
    across: { 1: 'The one the police watch' },
    down:   { 1: 'It follows you at noon' },
  },
}
```

Clue numbers are **derived from the grid**, never written by hand: `js/grid.js`
walks the rows, numbers every square that starts a word, and hands the app the word
spans. So renumbering after a grid edit is automatic, and clues cannot silently
drift out of step with the squares.

On load, each puzzle is validated. Ragged rows, stray characters, an entry with no
clue, or a clue with no entry are reported in a red box on the page and logged to
the console instead of rendering a broken grid.

## Layout

```
index.html          the sheet: masthead, puzzle mount, footer
css/fonts.css       @font-face for the self-hosted families
css/paper.css       paper, grain, masthead, article layout, story, riddle, print
css/puzzle.css      grid, cursor states, toolbar, clue lists, sticky clue bar
js/grid.js          numbering and word spans derived from the grid; validation
js/crossword.js     the engine: cursor, keyboard, check/reveal, timer, autosave
js/app.js           builds one article per puzzle; wires the shared clue bar
data/puzzles.js     puzzle content — the only file you edit to change puzzles
fonts/              Shrikhand, Oswald, Zilla Slab (SIL OFL — see fonts/README.md)
```

Colours, fonts and paper tone are CSS custom properties at the top of
`css/paper.css`.
