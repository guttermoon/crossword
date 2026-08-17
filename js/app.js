/* Builds the page: the masthead and the two intro panels from window.GAZETTE,
 * one article per entry in window.PUZZLES, the source list, and the shared clue
 * bar that follows whichever grid you are typing in.
 */
(function (global) {
  'use strict';

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /* GAZETTE strings are first-party copy carrying inline <em>/<strong>/<a>. */
  function rich(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    node.innerHTML = html || '';
    return node;
  }

  function buildMasthead(g) {
    var head = el('header', 'masthead');
    head.appendChild(el('p', 'masthead__brand', g.brand));
    head.appendChild(rich('p', 'masthead__kicker', g.kicker));
    head.appendChild(el('h1', 'masthead__title', g.title));
    head.appendChild(rich('p', 'masthead__sub', g.standfirst));
    return head;
  }

  function buildBrief(g) {
    var wrap = el('section', 'brief');

    var col = el('div', 'brief__col');
    col.appendChild(el('h2', 'brief__head', g.brief.heading));
    g.brief.paragraphs.forEach(function (paragraph) {
      col.appendChild(rich('p', null, paragraph));
    });
    wrap.appendChild(col);

    var card = el('aside', 'tells');
    card.appendChild(el('h3', 'tells__head', g.tells.heading));
    var list = el('ol', 'tells__list');
    g.tells.items.forEach(function (item) {
      list.appendChild(rich('li', null, item));
    });
    card.appendChild(list);
    if (g.tells.footnote) card.appendChild(rich('p', 'tells__note', g.tells.footnote));
    if (g.tells.selfaware) card.appendChild(rich('p', 'tells__aside', g.tells.selfaware));
    wrap.appendChild(card);

    return wrap;
  }

  function buildSources(g) {
    var section = el('section', 'sources');
    var head = el('h2', 'section-head');
    head.appendChild(el('span', null, g.sources.heading));
    section.appendChild(head);

    var list = el('ul', 'sources__list');
    g.sources.items.forEach(function (item) {
      list.appendChild(rich('li', null, item));
    });
    section.appendChild(list);
    if (g.sources.colophon) section.appendChild(rich('p', 'sources__colophon', g.sources.colophon));
    return section;
  }

  function buildArticle(puzzle, position, total, explainer) {
    var article = el('article', 'puzzle');
    article.id = 'puzzle-' + puzzle.id;

    var body = el('div', 'puzzle__body');

    var head = el('header', 'puzzle__head');
    head.appendChild(el('p', 'puzzle__issue', puzzle.issue || ''));
    var title = el('h2', 'puzzle__title');
    title.appendChild(el('span', 'puzzle__title-line', puzzle.title));
    head.appendChild(title);
    if (puzzle.blurb) head.appendChild(rich('p', 'puzzle__blurb', puzzle.blurb));

    if (puzzle.heroes && puzzle.heroes.length) {
      var heroes = el('div', 'heroes');
      heroes.appendChild(el('p', 'heroes__label', 'Famous ones in here'));
      var chips = el('p', 'heroes__chips');
      puzzle.heroes.forEach(function (word) {
        chips.appendChild(el('span', 'heroes__chip', word));
      });
      heroes.appendChild(chips);
      head.appendChild(heroes);
    }

    body.appendChild(head);

    var gridwrap = el('div', 'puzzle__gridwrap');
    gridwrap.appendChild(el('div', 'credit', (puzzle.issue || '') + ' — ' + puzzle.title));
    var scroll = el('div', 'grid-scroll');
    var gridMount = el('div', 'grid-mount');
    scroll.appendChild(gridMount);
    gridwrap.appendChild(scroll);
    body.appendChild(gridwrap);

    article.appendChild(body);

    var toolbarMount = el('div', 'toolbar-mount');
    article.appendChild(toolbarMount);

    var sectionHead = el('h3', 'section-head');
    sectionHead.appendChild(el('span', null, 'Clues and footnotes'));
    article.appendChild(sectionHead);

    if (explainer) {
      var note = el('div', 'notebox');
      note.appendChild(rich('p', null, explainer));
      article.appendChild(note);
    }

    var cluesMount = el('div', 'clues-mount');
    article.appendChild(cluesMount);

    article.appendChild(el('div', 'dinkus', position < total - 1 ? '❖' : ''));

    return {
      article: article,
      gridMount: gridMount,
      cluesMount: cluesMount,
      toolbarMount: toolbarMount,
    };
  }

  function buildClueBar(getActive) {
    var bar = el('div', 'cluebar');
    bar.setAttribute('aria-hidden', 'true');

    var prev = el('button', 'cluebar__nav', '◀');
    prev.type = 'button';
    var next = el('button', 'cluebar__nav', '▶');
    next.type = 'button';
    var label = el('div', 'cluebar__text', 'Tap a square to begin');

    prev.addEventListener('click', function () {
      var active = getActive();
      if (active) {
        active.jumpEntry(-1);
        active.input.focus();
      }
    });
    next.addEventListener('click', function () {
      var active = getActive();
      if (active) {
        active.jumpEntry(1);
        active.input.focus();
      }
    });

    bar.appendChild(prev);
    bar.appendChild(label);
    bar.appendChild(next);
    document.body.appendChild(bar);

    return {
      set: function (text) {
        label.textContent = text;
      },
    };
  }

  function reportProblems(mount, problems) {
    var box = el('div', 'errorbox');
    box.appendChild(el('strong', null, 'This puzzle could not be built:'));
    var list = el('ul');
    problems.forEach(function (problem) {
      list.appendChild(el('li', null, problem));
      global.console.error(problem);
    });
    box.appendChild(list);
    mount.appendChild(box);
  }

  function init() {
    var gazette = global.GAZETTE || null;
    var puzzles = global.PUZZLES || [];
    var sheet = document.querySelector('.sheet');
    var mount = document.getElementById('puzzles');
    var active = null;

    if (gazette) {
      sheet.insertBefore(buildMasthead(gazette), mount);
      sheet.insertBefore(buildBrief(gazette), mount);
      document.title = gazette.brand + ' — ' + gazette.title;
    }

    var clueBar = buildClueBar(function () {
      return active;
    });

    puzzles.forEach(function (puzzle, position) {
      var problems = global.CrosswordGrid.validatePuzzle(puzzle);
      if (problems.length) {
        reportProblems(mount, problems);
        return;
      }

      var parts = buildArticle(puzzle, position, puzzles.length,
        gazette && position === 0 ? gazette.explainer : '');
      mount.appendChild(parts.article);

      new global.Crossword({
        puzzle: puzzle,
        root: parts.article,
        gridMount: parts.gridMount,
        cluesMount: parts.cluesMount,
        toolbarMount: parts.toolbarMount,
        onActive: function (instance) {
          active = instance;
        },
        onClueChange: function (instance, entry, text) {
          if (active === instance) clueBar.set(text);
        },
      });
    });

    if (gazette) {
      var colophon = sheet.querySelector('.colophon');
      sheet.insertBefore(buildSources(gazette), colophon);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
