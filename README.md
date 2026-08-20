# Easy Eyes — portable extract

The readable-theme switch from **The Dead Good Club**, stripped of everything
magazine-specific so it drops into another project.

Flipping it on sets `easy-eyes` on `<html>`. The CSS then calms **body text
only** — running copy inside `<main>` becomes clean Helvetica, ragged-left, no
text-shadow, roomier line-height. Headlines, images and page chrome are left
alone. The choice persists in `localStorage`.

## Files

| File | What it is |
|---|---|
| `easy-eyes.css` | The theme rules **and** the switch's own styles. Plain CSS — no Tailwind, no build step. |
| `easy-eyes-toggle.tsx` | The React component. No dependencies beyond React. |
| `easy-eyes-init.html` | Optional `<head>` snippet that prevents a one-frame flash of the normal theme. |

## Install (Next.js app router)

1. Copy `easy-eyes.css` and `easy-eyes-toggle.tsx` into the project
   (e.g. `app/easy-eyes.css`, `components/easy-eyes-toggle.tsx`).

2. Import the CSS once — in `app/layout.tsx` or alongside `globals.css`:

   ```ts
   import "./easy-eyes.css"
   ```

3. Mount the component **once**, high in the tree — in the root layout, not
   per page:

   ```tsx
   import { EasyEyesToggle } from "@/components/easy-eyes-toggle"
   // ...
   <body>
     {children}
     <EasyEyesToggle />
   </body>
   ```

4. Make sure page content is inside a `<main>` element. The body-text rules are
   scoped to `main` on purpose, so headers and footers keep their own type. If
   the crossword app has no `<main>`, either add one or delete ` main` from the
   two selectors at the top of the CSS.

Pages Router or plain React: same, but import the CSS in `_app.tsx` / your root
and mount the component in the shell.

## Opt-in classes

Nothing below does anything until Easy Eyes is on. Add them where the type pass
alone isn't enough:

- `easy-cream` — repaint a panel's flat background colour to calm cream and drop
  any grain/mottle `::before`.
- `easy-panel` — for saturated coloured boxes: cream ground, dark text
  throughout. Use on anything that stays unreadable when only body copy changes.
- `easy-flat` — un-rotate and un-float a tilted card so it reads in order.
- `justified-text` — mark justified copy so Easy Eyes unjustifies it.

For a crossword specifically, the grid and clue numbers are the interesting
part: consider `easy-panel` on the clue list, and bumping clue font-size with
your own rule, e.g.

```css
html.easy-eyes .clue-list li { font-size: 1.15em !important; }
```

## Two things worth knowing

**The preference will not carry over from the main site.** `localStorage` is
per-origin, and `crossword.deadgoodclub.com` is a different origin from
`deadgoodclub.com`. A reader who turned Easy Eyes on there starts off here.
If you want one shared choice, swap `localStorage` for a cookie scoped to
`.deadgoodclub.com` — same logic, and both sites read it.

**First paint is always "off".** `localStorage` can't be read during SSR, so
the component corrects the class after mount. For a reader with the preference
on, that's one frame of the normal theme. `easy-eyes-init.html` removes it —
paste that inline script into `<head>` before any content.

## What was left behind

The parent site also has an "EYEBALLS!" popup that appears 13s after first
load, prompting readers to try the switch. It depends on `public/eyeballs.png`,
three custom fonts and Notion-fed copy, so it's not in this extract. Say the
word if you want it ported too.
