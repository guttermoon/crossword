# The Slop Gazette — How to puzzle out AI writing

An article on how writing habits differ by generation and by machine, and three
interactive crosswords under it: the words, the sentence shapes, and the chatbot
manners it forgot to delete. 76 clues, each carrying a footnote — what the habit
is, what it sounds like, and what a person writes instead. The studies behind
them are listed at the foot of the page.

Laid out as a newspaper puzzle page: cream stock, a groovy red masthead, ruled
intro panels, freeform grids and dense clue columns, under the Dead Good Club
mark. The mark is served from `img/dgc-logo.webp`, resampled to 900px (12KB)
from the supplied art in the repository root, which is 10,630px and 644KB. It
is black on white rather than on transparency, so it is multiplied into the
paper rather than sitting on a white patch a shade brighter than the page.

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
| Give up on a word | **Show me the word**, at the foot of its note |

Each puzzle carries its own controls under its title, against the squares they
act on: Check, Reveal, Start Over, and on the end of the same line the count of
entries solved and the clock. The bar pins itself under the picker strip, so
those controls are still there twenty clues down the column when the grid is out
of reach. A wrong letter found by **Check** gets a red
pencil slash, which clears as soon as you retype it. A letter given away by **Reveal** keeps a small red corner.
Filling a grid correctly stamps it SOLVED. Every note ends with **Show me the
word**, under the rule below the rewrite: read what the habit is, then give up
on the word if you want to. It is there because the toolbar's Reveal acts on the
word you are in and pressing a clue no longer moves the cursor, so without it
you would have to find the word in the grid before you could give up on it. **Start Over** sends a late edition spinning off the press
— WIPE THE GRID! — and waits for a yes or a no; Escape, or a click off the
paper, means no. The paper is a plain white sheet: a headline set in Libre
Franklin, kept to one line at any width, then the question and the two answers.

A **Pick a puzzle** strip links down to each grid and marks whichever one you
are looking at.

**Notes** open directly under the clue that references them, each one saying
what the habit is, what it **sounds like**, and what a person writes **instead
of** it, and then **Show me the word**. Pressing a clue opens its note; press it
again and it closes. That is all a clue does — which word you are in is the
grid's business, set by pressing a square — and the line at the foot of a note
fills that clue's word in without moving the cursor either. One is open at a time, so the list cannot fill up
with them as you work down it. A note also opens by itself the moment its entry
is solved, so solving teaches as you go — but only when you solved it: an entry
filled in by **Reveal** was given to you, and Reveal puts the word in the grid
and does nothing else. Nothing else on the page
moves — the clue stays put and the list grows under it. Printing prints every
note, opened or not.

Progress and elapsed time are saved to `localStorage` per puzzle, so a reload
picks up where you left off; **Start Over** clears that puzzle alone. Everything
works from the keyboard, cells carry screen-reader labels naming the clue and
the position within it.

## On a phone

A phone gets a different page rather than a squeezed one.

Both strips pin to the top, flush against each other — each measures its own
height into the custom property the one below it pins at, because a guess at
those heights left a sliver of the page showing through between them, and the
guess was wrong by a different amount on every screen. The three puzzles go
three across in a single line, names only, and under them the controls as three
drawings — check this word,
show me this word, start over — with the count of entries solved on the end.
Eight labelled buttons do not fit a small screen, and a row that has to be
swiped sideways is a row whose right-hand half nobody finds. They act on the
word you are in, which is the scope that matters with the grid under your thumb;
letter and puzzle stay on the wider layout.

The clue list stands down. Fifty-odd clues under a grid is a wall of type to be
scrolled past rather than read. Instead a bar sits at the foot of the window
carrying the clue for the word you are in, all of it, however many lines that
takes — 138px for the longest of the 76, and the page reserves exactly the
height the bar is currently using rather than a guess. Chevrons step through the
entries. **Why?**, or the clue itself, opens a sheet with the clue whole,
its note, and **Show me the word**, which is the clue list's job brought to
where your thumb is. Escape, or a tap off the sheet, closes it, and reading one
there counts as read the same as opening it in the list.

The phone rules are `@media screen and (max-width: 860px)` rather than plain
`max-width`: a printed page is about 816px wide and would otherwise match, and
print the puzzles with no clues at all.

## Editing the content

Two data files, and nothing else needs touching.

**`data/puzzles.js`** — the puzzles. One object each:

```js
{
  id: 'p1',                             // unique; also the localStorage key
  issue: 'No. 1',
  title: 'The Words',
  blurb: 'The vocabulary AI cannot put down…',
  heroes: ['DELVE', 'LOADBEARING'],     // named in a caption under the blurb
  grid: [                               // equal-length rows, '.' = empty square
    '.B.U...',
    '.OASTS.',
  ],
  clues: {
    across: {
      6: {
        clue: "A glass display cabinet in a museum, drafted in as a verb…",
        answer: 'SHOWCASE',             // checked against the grid on load
     // also: 'SHOWCAZE',             // optional second accepted spelling
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
what the grid spells**, and an `also` that would not fit the squares.

`also` is a second accepted spelling of the same answer, letter for letter: the
squares where it differs from `answer` take either letter, and the entry counts
as solved with either. `UTILISE` carries `also: 'UTILIZE'` — it is the word the
research counted, but an American solver typing the Z is not wrong, and without
this Check would paint a red slash through a square they had right. **Reveal**
always writes the answer as set, never the variant. It is the only one of the 76
answers where British and American English part company.

**`data/gazette.js`** — the masthead, the article that opens the page, the
callout beside it and the source list. These strings carry inline markup
(`<em>`, `<strong>`, `<a>`) and are inserted as HTML, so treat the file as
first-party copy: do not paste anything into it that you did not write.

The article is a list of blocks rather than a list of paragraphs, so things can
sit between them in a fixed order:

```js
brief: { blocks: [
  { type: 'p',     html: 'A paragraph, with <em>markup</em> if it needs it.' },
  { type: 'link',  href: 'https://…', html: 'A source on its own line' },
  { type: 'quote', html: 'An aside, set apart from the argument.' },
  { type: 'video', id: 'GyV_UG60dD4', title: '…', caption: '…' },
] }
```

`video` is a YouTube film that does not put YouTube on the page. The still is
drawn in CSS rather than fetched from Google, and the player is only built when
someone presses it — verified: the page makes **no off-site request at all**
until that click, and the one it then makes is to `youtube-nocookie.com`. On
paper the poster is a black rectangle that does nothing, so it prints as the
video's address instead.

The callout beside the article is `callout.groups`: a name, a list of points —
each of which may carry a `sub` list — and an `example`, given as an array of
paragraphs.

## Layout

```
index.html          the sheet: skip link, club mark, puzzle mount, footer
img/dgc-logo.webp   the Dead Good Club mark, 900px wide, linking to the club
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
dgc penguin official.png/.svg   the mark as supplied, kept as the source art
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
then sets `--cell` to the smaller of what the column allows and what the window
does, capped at 30px and floored at 17px, below which the wrapper scrolls
sideways. The second constraint is the one that matters: these grids are 28 rows
deep, which is 850px at the cap, so sized to the column alone the bottom third
of every grid sat below the fold while the clues beside it scrolled past. At
1440x780 the squares come out at 24px and the whole grid stands in view. Empty
squares are drawn black.

Entries are deliberately one-per-habit: a trope's sibling phrases live in that
entry's footnote rather than becoming entries of their own. Adding or removing a
word means rebuilding the grid, since the survivors lose the crossings that held
them.
