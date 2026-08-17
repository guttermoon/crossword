# Fonts

Latin-subset WOFF2 files, self-hosted so the page renders identically offline and
makes no third-party requests. All three families are licensed under the
[SIL Open Font License 1.1](https://openfontlicense.org/).

| File | Family | Designer / source |
| --- | --- | --- |
| `shrikhand-400.woff2` | Shrikhand | Jonny Pinhorn — https://fonts.google.com/specimen/Shrikhand |
| `oswald-var.woff2` | Oswald (variable, 200–700) | Vernon Adams et al. — https://fonts.google.com/specimen/Oswald |
| `zillaslab-400.woff2`, `-700`, `-400i`, `-700i` | Zilla Slab | Typotheque / Mozilla — https://fonts.google.com/specimen/Zilla+Slab |

Declared in `css/fonts.css`. To swap a family, drop the new WOFF2 here, update the
`@font-face` block, and change the matching `--font-*` variable in `css/paper.css`.
