# Fonts

Latin-subset WOFF2 files, self-hosted so the page renders identically offline and
makes no third-party requests. All four families are licensed under the
[SIL Open Font License 1.1](https://openfontlicense.org/).

| File | Family | Designer / source |
| --- | --- | --- |
| `shrikhand-400.woff2` | Shrikhand | Jonny Pinhorn — https://fonts.google.com/specimen/Shrikhand |
| `courierprime-400.woff2`, `-700`, `-400i` | Courier Prime (body) | Quote-Unquote Apps — https://fonts.google.com/specimen/Courier+Prime |
| `inter-var.woff2` | Inter (variable, 100–900; labels and instruction blocks) | Rasmus Andersson — https://fonts.google.com/specimen/Inter |
| `librefranklin-var.woff2` | Libre Franklin (variable, 100–900; the headline on the Start Over paper) | Impallari Type — https://fonts.google.com/specimen/Libre+Franklin |

Declared in `css/fonts.css`. To swap a family, drop the new WOFF2 here, update the
`@font-face` block, and change the matching `--font-*` variable in `css/paper.css`.
