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
    // The publication line lives in the browser title and the colophon; up here
    // a rule opens the page instead.
    head.appendChild(el('div', 'masthead__rule'));
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

  function countClues(puzzle) {
    var clues = puzzle.clues || {};
    return Object.keys(clues.across || {}).length + Object.keys(clues.down || {}).length;
  }

  /* Anchor links down to each puzzle. The current card is marked as you scroll,
   * so the strip doubles as a place marker on a long page. */
  function buildPicker(puzzles) {
    var nav = el('nav', 'picker');
    nav.setAttribute('aria-label', 'Pick a puzzle');
    nav.appendChild(el('p', 'picker__label', 'Pick a puzzle'));

    var row = el('div', 'picker__row');
    puzzles.forEach(function (puzzle) {
      var card = el('a', 'picker__card');
      card.href = '#puzzle-' + puzzle.id;
      card.dataset.for = 'puzzle-' + puzzle.id;
      card.appendChild(el('span', 'picker__issue', puzzle.issue || ''));
      card.appendChild(el('span', 'picker__title', puzzle.title));
      card.appendChild(el('span', 'picker__count', countClues(puzzle) + ' clues'));
      row.appendChild(card);
    });
    nav.appendChild(row);
    return nav;
  }

  /* Once the strip scrolls off the top it pins itself, shrunk to a row of
   * chips, so the three puzzles stay reachable from anywhere on the page. */
  function stickWhenPassed(nav) {
    if (!global.IntersectionObserver) return;
    var sentinel = el('div', 'picker__sentinel');
    nav.parentNode.insertBefore(sentinel, nav);
    new global.IntersectionObserver(function (entries) {
      var entry = entries[0];
      // Out of view above means scrolled past; out of view below just means we
      // have not reached it yet, which is not the same thing.
      nav.classList.toggle('is-stuck',
        !entry.isIntersecting && entry.boundingClientRect.top < 0);
    }, { threshold: 0 }).observe(sentinel);
  }

  function trackCurrent(nav) {
    var cards = {};
    nav.querySelectorAll('.picker__card').forEach(function (card) {
      cards[card.dataset.for] = card;
    });

    if (!global.IntersectionObserver) return;

    var seen = {};
    var observer = new global.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        seen[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });
      var best = null;
      Object.keys(seen).forEach(function (id) {
        if (seen[id] > 0 && (!best || seen[id] > seen[best])) best = id;
      });
      Object.keys(cards).forEach(function (id) {
        cards[id].classList.toggle('is-current', id === best);
        if (id === best) cards[id].setAttribute('aria-current', 'true');
        else cards[id].removeAttribute('aria-current');
      });
    }, { threshold: [0, 0.15, 0.4, 0.75] });

    Object.keys(cards).forEach(function (id) {
      var article = document.getElementById(id);
      if (article) observer.observe(article);
    });
  }

  /* The head of an article folds away, so a solver who has read it once can
   * put the grid and its clues back at the top of the screen. */
  function makeCollapsible(head, label) {
    var button = el('button', 'puzzle__toggle', 'Hide');
    button.type = 'button';
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Hide the introduction to ' + label);
    head.appendChild(button);

    button.addEventListener('click', function () {
      var collapsed = head.classList.toggle('is-collapsed');
      button.textContent = collapsed ? 'Show' : 'Hide';
      button.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      button.setAttribute('aria-label',
        (collapsed ? 'Show' : 'Hide') + ' the introduction to ' + label);
    });
  }

  function buildArticle(puzzle, position, total) {
    var article = el('article', 'puzzle');
    article.id = 'puzzle-' + puzzle.id;

    // Controls and progress sit at the top of the article, not below the grid.
    var toolbarMount = el('div', 'toolbar-mount');
    article.appendChild(toolbarMount);

    // The grid changes sides puzzle to puzzle, the way a magazine alternates a
    // spread so two facing pages do not repeat the same block of type.
    article.classList.add(position % 2 ? 'puzzle--grid-left' : 'puzzle--grid-right');

    // Full width above the puzzle: the title, the blurb and the hero words.
    var head = el('header', 'puzzle__head');

    var headline = el('div', 'puzzle__headline');
    headline.appendChild(el('p', 'puzzle__issue', puzzle.issue || ''));
    var title = el('h2', 'puzzle__title');
    title.appendChild(el('span', 'puzzle__title-line', puzzle.title));
    headline.appendChild(title);
    head.appendChild(headline);
    makeCollapsible(head, puzzle.title);

    var intro = el('div', 'puzzle__intro');
    if (puzzle.blurb) intro.appendChild(rich('p', 'puzzle__blurb', puzzle.blurb));
    head.appendChild(intro);

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
    article.appendChild(head);

    // Clues beside the grid; which side depends on the puzzle.
    var play = el('div', 'puzzle__play');

    var cluesCol = el('div', 'puzzle__clues');
    var cluesHead = el('h3', 'section-head');
    cluesHead.appendChild(el('span', null, 'Clues'));
    cluesCol.appendChild(cluesHead);
    var cluesMount = el('div', 'clues-mount');
    cluesCol.appendChild(cluesMount);
    play.appendChild(cluesCol);

    var gridwrap = el('div', 'puzzle__gridwrap');
    gridwrap.appendChild(el('div', 'credit', (puzzle.issue || '') + ' — ' + puzzle.title));
    var scroll = el('div', 'grid-scroll');
    var gridMount = el('div', 'grid-mount');
    scroll.appendChild(gridMount);
    gridwrap.appendChild(scroll);
    play.appendChild(gridwrap);

    article.appendChild(play);

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

    var picker = null;
    if (puzzles.length > 1) {
      picker = buildPicker(puzzles);
      sheet.insertBefore(picker, mount);
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

      var parts = buildArticle(puzzle, position, puzzles.length);
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

    if (picker) {
      trackCurrent(picker);
      stickWhenPassed(picker);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
