# -*- coding: utf-8 -*-
"""Every word on the page, pulled from the files that hold it."""
import json, re, io, os

def load(path, var):
    src = open(path, encoding='utf-8').read()
    start = src.index('=', src.index(var)) + 1
    body = src[start:].strip().rstrip(';').strip()
    return json.loads(body)

gaz = load('data/gazette.js', 'window.GAZETTE')
puz = load('data/puzzles.js', 'window.PUZZLES')

out = io.StringIO()
w = out.write

w("""# The Slop Gazette — every word on the page

Edit anything in this file and send it back. Keep the **labels** (`CLUE:`,
`WHAT:`, and the `###` headings) exactly as they are — that is how each line
finds its way home. Everything else is yours.

Three things to know before you start:

- **`ANSWER:` lines are marked _(fixed)_.** They are what the squares spell.
  Changing one means rebuilding that grid from scratch, and every crossing word
  with it, so tell me in a note rather than editing it here and I will do it
  properly.
- **Some lines carry HTML** — `<em>`, `<strong>`, `<a href="…">`. Leave the tags
  around the words if you want the emphasis or the link to survive.
- **Curly quotes and dashes are deliberate** (“ ” ‘ ’ — …). Your editor may swap
  them; I will put them back.

Each clue also carries two things this page does not show: a paragraph of
research (`data`) and a citation (`source`/`url`). They are still in the file
and the sources are all listed under "Where the numbers come from". Say the word
and I will add them to this doc too.

""")

# ---------------------------------------------------------------- front matter
w("## Front matter\n\n")
w("### Masthead\n\n")
w("TITLE: %s\n\n" % gaz['title'])
w("STANDFIRST: %s\n\n" % gaz['standfirst'])
w("_Not shown on the page, but used for the browser tab and the footer:_\n\n")
w("BRAND: %s\n\n" % gaz['brand'])
w("KICKER: %s\n\n" % gaz['kicker'])
w("FOOTER LEFT: Saturday Edition\n\n")
w("FOOTER RIGHT: Three puzzles &middot; 76 clues\n\n")

w("### The long intro panel\n\n")
w("HEADING: %s\n\n" % gaz['brief']['heading'])
for i, para in enumerate(gaz['brief']['paragraphs'], 1):
    w("PARA %d: %s\n\n" % (i, para))

w("### The boxed panel beside it\n\n")
w("HEADING: %s\n\n" % gaz['tells']['heading'])
for i, item in enumerate(gaz['tells']['items'], 1):
    w("ITEM %d: %s\n\n" % (i, item))
w("FOOTNOTE: %s\n\n" % gaz['tells']['footnote'])
w("ASIDE: %s\n\n" % gaz['tells']['selfaware'])

w("### The source list at the foot\n\n")
w("HEADING: %s\n\n" % gaz['sources']['heading'])
for i, item in enumerate(gaz['sources']['items'], 1):
    w("SOURCE %d: %s\n\n" % (i, item))
w("COLOPHON: %s\n\n" % gaz['sources']['colophon'])

# ------------------------------------------------------------------- interface
w("""## The words the interface uses

These are in the code rather than the content files, but they are words on a
page like any other — change them here and I will move them.

PICK A PUZZLE STRIP: Pick a puzzle
FOLD BUTTON: Hide / Show
HERO CAPTION: Famous ones in here
CLUE LIST HEADINGS: across / down
CHECK GROUP: Check — Letter, Word, Puzzle
REVEAL GROUP: Reveal — Letter, Word, Puzzle
START OVER BUTTON: Start Over
PROGRESS: 0/25 solved
NOTE LABEL 1: Sounds like
NOTE LABEL 2: Instead of
NOTE BUTTON: Show me the word
SOLVED STAMP: Solved
PHONE BAR, NOTHING SELECTED: Tap a square to begin
PHONE BAR BUTTON: Why?
PHONE SHEET BUTTONS: Show me the word / Close
PHONE CONTROL LABELS (spoken, not seen): Check this word / Show me this word / Start this puzzle over
START OVER PAPER, TOP LINE: No. 1 · Crossword
START OVER PAPER, HEADLINE: Wipe the grid!
START OVER PAPER, QUESTION: Erase everything you have filled in for this puzzle?
START OVER PAPER, ANSWERS: Yes, wipe it / No, leave it
SKIP LINK: Skip to the puzzles
LOGO LINK (spoken, not seen): The Dead Good Club

""")

# --------------------------------------------------------------------- puzzles
NAMES = {'across': 'across', 'down': 'down'}
for pz in puz:
    w("## %s — %s\n\n" % (pz['issue'], pz['title']))
    w("ISSUE: %s\n\n" % pz['issue'])
    w("TITLE: %s\n\n" % pz['title'])
    w("BLURB: %s\n\n" % pz['blurb'])
    w("FAMOUS ONES: %s\n\n" % ', '.join(pz['heroes']))
    for direction in ('across', 'down'):
        side = pz['clues'].get(direction) or {}
        w("### %s — %s\n\n" % (pz['title'], NAMES[direction]))
        for num in sorted(side, key=int):
            item = side[num]
            note = item.get('note') or {}
            w("#### %s · %s %s\n\n" % (pz['id'].upper(), num, direction))
            w("ANSWER _(fixed)_: %s%s\n\n" % (item['answer'],
              (' — also accepts ' + item['also']) if item.get('also') else ''))
            w("CLUE: %s\n\n" % item['clue'])
            if note.get('what'):
                w("WHAT: %s\n\n" % note['what'])
            if note.get('sounds'):
                w("SOUNDS: %s\n\n" % note['sounds'])
            if note.get('human'):
                w("INSTEAD: %s\n\n" % note['human'])

text = out.getvalue()
os.makedirs('/home/user/crossword/copy', exist_ok=True)
path = '/home/user/crossword/copy/the-slop-gazette-copy.md'
open(path, 'w', encoding='utf-8').write(text)

words = len(re.findall(r"[A-Za-z0-9'’-]+", text))
print('wrote', path)
print(len(text.splitlines()), 'lines,', words, 'words,', round(len(text)/1024, 1), 'KB')
