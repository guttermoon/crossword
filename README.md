# The Slop Gazette — How to Spot a Robot

Three interactive crosswords about the habits of machine-written English: the
words, the sentence shapes, and the chatbot manners it forgot to delete. 76
clues, each carrying a footnote — what the habit is, what it sounds like, what a
person would have written instead, and the research where it exists.

Laid out as a newspaper puzzle page: cream stock, a groovy red masthead, ruled
intro panels, freeform grids and dense clue columns.

Plain HTML, CSS and JavaScript — no build step, no dependencies, no network
calls. Open `index.html` directly, or serve the folder:

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

Each puzzle carries its own controls and progress at the head of the article:
how many entries are solved, a bar, and how many footnotes you have read. A
wrong letter found by **Check** gets a red pencil slash, which clears as soon as
you retype it. A letter given away by **Reveal** keeps a small red corner.
Filling a grid correctly stamps it SOLVED. Every clue also has its own
**Reveal** beside it.

A **Pick a puzzle** strip links down to each grid and marks whichever one you
are looking at.

**Notes** live in their own section below each puzzle, labelled by clue
reference and linked back to the clue. One opens by itself the moment its entry
is filled in correctly, so solving teaches as you go, and **Why?** opens one
early — without giving the answer away — and scrolls you to it. Notes
accumulate rather than toggling, so each puzzle builds into one continuous piece
you can read or print. Printing prints every note, opened or not.

Progress and elapsed time are saved to `localStorage` per puzzle, so a reload
picks up where you left off; **Start Over** clears that puzzle alone. Everything
works from the keyboard, cells carry screen-reader labels naming the clue and
the position within it, and narrow screens get a sticky clue bar above the
on-screen keyboard.

## Editing the content

Two data files, and nothing else needs touching.

**`data/puzzles.js`** — the puzzles. One object each:

```js
{
  id: 'p1',                             // unique; also the localStorage key
  issue: 'No. 1',
  title: 'The Words',
  blurb: 'The vocabulary machines cannot put down…',
  heroes: ['DELVE', 'LOADBEARING'],     // chips listed under the toolbar
  grid: [                               // equal-length rows, '.' = empty square
    '.B.U...',
    '.OASTS.',
  ],
  clues: {
    across: {
      6: {
        clue: "A glass display cabinet in a museum, drafted in as a verb… (8)",
        answer: 'SHOWCASE',             // checked against the grid on load
        note: {
          what:   'Why machines do this and why it reads as machine-written.',
          sounds: '“This report showcases our commitment to sustainability.”',
          human:  '“This report shows what we did about our emissions.”',
          data:   'Optional number, or a test the reader can apply.',
          source: 'Kobak et al., Science Advances',   // null if uncited
          url:    'https://…',                        // null if uncited
        },
      },
    },
    down: { /* … */ },
  },
}
```

Clue numbers are **derived from the grid**, never written by hand: `js/grid.js`
walks the rows, numbers every square that starts a word, and hands the app the
word spans. Renumbering after a grid edit is automatic.

On load each puzzle is validated, and problems are reported in a red box on the
page and logged to the console rather than rendering a broken grid. It catches
ragged rows, stray characters, an entry with no clue, a clue with no entry, and
— most usefully while editing squares — **an `answer` that no longer matches
what the grid spells**.

**`data/gazette.js`** — the masthead, standfirst, the two intro panels, the
"how to read these" explainer and the source list. These strings carry inline
markup (`<em>`, `<strong>`, `<a>`) and are inserted as HTML, so treat the file
as first-party copy: do not paste anything into it that you did not write.

## Layout

```
index.html          the sheet: skip link, puzzle mount, footer
css/fonts.css       @font-face for the self-hosted families
css/paper.css       paper, grain, masthead, intro panels, article, sources, print
css/puzzle.css      grid, cursor states, toolbar, clue lists, footnotes, clue bar
js/grid.js          numbering and word spans derived from the grid; validation
js/crossword.js     the engine: cursor, keyboard, check/reveal, footnotes, autosave
js/app.js           builds the page from GAZETTE and PUZZLES
data/puzzles.js     puzzle content — 3 puzzles, 76 clues, 76 footnotes
data/gazette.js     front matter and sources
fonts/              Shrikhand, Inter, Courier Prime (SIL OFL — see fonts/README.md)
```

Colours and fonts are CSS custom properties at the top of `css/paper.css`. The
body is set in a typewriter face and the instruction blocks and labels in a
grotesque, after the way the printed page set Helvetica Bold against typewriter
copy. Boxes are rounded and ruled; there are no drop shadows anywhere.

Each article runs its title, blurb and hero words full width, then sets the
clues beside the grid — and the grid changes sides puzzle to puzzle, the way a
magazine alternates a spread. `Crossword.claimWidth` gives the grid column only
the width its squares need and hands the rest to the clues; `Crossword.fitCell`
then measures that column and sets `--cell` to suit, capped at 30px and floored
at 17px, below which the wrapper scrolls sideways. Empty squares are drawn
black.

Entries are deliberately one-per-habit: a trope's sibling phrases live in that
entry's footnote rather than becoming entries of their own. Adding or removing a
word means rebuilding the grid, since the survivors lose the crossings that held
them.
