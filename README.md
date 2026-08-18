# The Slop Gazette — How to Spot a Robot

Three interactive crosswords about the habits of AI-written English: the
words, the sentence shapes, and the chatbot manners it forgot to delete. 76
clues, each carrying a footnote — what the habit is, what it sounds like, and
what a person writes instead. The studies behind them are listed at the foot of
the page.

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
| Open a clue's note | Press the clue — again to close it |

Each puzzle carries its own controls under its title, against the squares they
act on: Check, Reveal, Start Over, and on the end of the same line the count of
entries solved and the clock. A wrong letter found by **Check** gets a red
pencil slash, which clears as soon as you retype it. A letter given away by **Reveal** keeps a small red corner.
Filling a grid correctly stamps it SOLVED. Every clue also has its own
**Reveal** beside it. **Start Over** sends a late edition spinning off the press
— WIPE THE GRID! — and waits for a yes or a no; Escape, or a click off the
paper, means no. The paper is a plain white sheet: a headline set in Libre
Franklin, kept to one line at any width, then the question and the two answers.

A **Pick a puzzle** strip links down to each grid and marks whichever one you
are looking at.

**Notes** open directly under the clue that references them, each one saying
what the habit is, what it **sounds like**, and what a person writes **instead
of** it. Pressing a clue opens its note; press it again and it closes. That is
all a clue does — which word you are in is the grid's business, set by pressing
a square — and a clue's **Reveal** fills that clue's word in without moving the
cursor either. One is open at a time, so the list cannot fill up
with them as you work down it. A note also opens by itself the moment its entry
is solved, so solving teaches as you go — but only when you solved it: an entry
filled in by **Reveal** was given to you, and Reveal puts the word in the grid
and does nothing else. Nothing else on the page
moves — the clue stays put and the list grows under it. Printing prints every
note, opened or not.

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
  blurb: 'The vocabulary AI cannot put down…',
  heroes: ['DELVE', 'LOADBEARING'],     // chips listed under the toolbar
  grid: [                               // equal-length rows, '.' = empty square
    '.B.U...',
    '.OASTS.',
  ],
  clues: {
    across: {
      6: {
        clue: "A glass display cabinet in a museum, drafted in as a verb…",
        answer: 'SHOWCASE',             // checked against the grid on load
        note: {
          what:   'Why AI does this and why it reads as AI-written.',
          sounds: '“This report showcases our commitment to sustainability.”',
          human:  '“This report shows what we did about our emissions.”',
          // kept in the file, not shown on the page — the sources are listed
          // together under "Where the numbers come from"
          data:   'A number, or a test the reader can apply.',
          source: 'Kobak et al., Science Advances',
          url:    'https://…',
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

**`data/gazette.js`** — the title, standfirst, the two intro panels and the
source list. These strings carry inline
markup (`<em>`, `<strong>`, `<a>`) and are inserted as HTML, so treat the file
as first-party copy: do not paste anything into it that you did not write.

## Layout

```
index.html          the sheet: skip link, puzzle mount, footer
css/fonts.css       @font-face for the self-hosted families
css/paper.css       paper, grain, masthead, intro panels, article, sources, print
css/puzzle.css      grid, cursor states, toolbar, clue lists, footnotes, clue bar
js/grid.js          numbering and word spans derived from the grid; validation
js/askpaper.js      the spinning-newspaper confirm used by Start Over
js/crossword.js     the engine: cursor, keyboard, check/reveal, footnotes, autosave
js/app.js           builds the page from GAZETTE and PUZZLES
data/puzzles.js     puzzle content — 3 puzzles, 76 clues, 76 footnotes
data/gazette.js     front matter and sources
fonts/              Shrikhand, Inter, Courier Prime, Libre Franklin (SIL OFL)
```

Colours and fonts are CSS custom properties at the top of `css/paper.css`. The
body is set in a typewriter face and the instruction blocks and labels in a
grotesque, after the way the printed page set Helvetica Bold against typewriter
copy. Boxes are rounded and ruled; there are no drop shadows anywhere.

The two standing panels — the puzzle heads and the intro card — sit on
`--newsprint` under a scan texture: a 64px greyscale tile inlined as a data URI
in `--scan`, scaled up 3× and drawn with `image-rendering: pixelated` so the
grain resolves into pixels. The tile is mostly per-pixel noise with a little
low-frequency drift under it — pixels spread evenly rather than clouds — held
inside a narrow dark band, so neighbours differ in tone without any one of them
standing out as a speck. It is laid over the panel's contents by a shared
`::after`, which is what makes it read as a scan; printing drops it and returns
the panels to white.

Everything else stays unfilled until it is doing something. A picker card is
transparent at rest, takes the light grey and the grain on hover, and turns dark
grey while it is the puzzle you are looking at — where multiplied grain would be
invisible, so that one lifts with `screen` instead. The toolbar and per-clue
buttons work the same way. The clue rows take the greys but never the grain: a
clue is a line of type, and pixels crawling under it make it harder to read
rather than older. A clue takes an edge whenever it is under the pointer or
under the cursor, and the pair read as a hierarchy: red with the wash for a row
you are passing over, ink with the grey for the one you are actually in, which
it keeps when the pointer comes over it, so the block never changes colour while
you are reading it. A note has no fill and no edge of its own; the clue above it
is already carrying both.

Every button — the toolbar's, the two on each clue, the fold control, the ones
on the spinning paper — takes `--radius-btn` rather than the `--radius` the
boxes use. They are shorter than twice the box radius, so the box radius would
round them into stadiums; a smaller one leaves them flat sides and reads as the
same cornering.

Each puzzle's head folds away behind a **Hide** button in its top right corner,
leaving a single bar of number and title, so a solver who has read the blurb
once can put the grid and its clues back at the top of the screen. It prints
open; paper has no buttons.

The **Pick a puzzle** strip pins itself to the top once you are past it, shrunk
to a row of chips. A 1px sentinel above it marks where it sits unpinned, and the
strip pins whenever that sentinel is above the top of the viewport — checked
once a frame while scrolling. It is deliberately not an IntersectionObserver:
an observer reports crossings rather than positions, so following a link in the
strip, which jumps clean over the sentinel, never reports at all.

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
