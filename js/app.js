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

    // The title breaks where the copy breaks it, not where the column runs out.
    var title = el('h1', 'masthead__title');
    (g.titleLines && g.titleLines.length ? g.titleLines : [g.title]).forEach(function (line) {
      title.appendChild(el('span', 'masthead__line', line));
    });
    head.appendChild(title);

    // Easy Eyes sits between the title and the standfirst, where a reader who
    // needs it meets it before the first line of running copy — not tucked in a
    // corner they would have to hunt for.
    if (global.EasyEyes) head.appendChild(global.EasyEyes.build());

    head.appendChild(rich('p', 'masthead__sub', g.standfirst));
    return head;
  }

  /* A YouTube film, without YouTube on the page until it is asked for. The
   * poster is drawn here rather than fetched from Google, so nothing at all
   * leaves the page on load; pressing it swaps in the player. */
  function buildVideo(block) {
    var figure = el('figure', 'video');
    var frame = el('div', 'video__frame');

    var poster = el('button', 'video__poster');
    poster.type = 'button';
    poster.setAttribute('aria-label', 'Play ' + block.title + ' on YouTube');

    var play = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    play.setAttribute('viewBox', '0 0 64 64');
    play.setAttribute('aria-hidden', 'true');
    play.classList.add('video__play');
    play.innerHTML = '<circle cx="32" cy="32" r="30"/><path d="M26 20l20 12-20 12z"/>';
    poster.appendChild(play);
    poster.appendChild(el('span', 'video__name', block.title));
    frame.appendChild(poster);

    poster.addEventListener('click', function () {
      var player = document.createElement('iframe');
      player.className = 'video__player';
      player.src = 'https://www.youtube-nocookie.com/embed/' + block.id +
        '?autoplay=1&rel=0&modestbranding=1';
      player.title = block.title;
      player.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
      player.referrerPolicy = 'strict-origin-when-cross-origin';
      player.allowFullscreen = true;
      frame.replaceChild(player, poster);
    });

    figure.appendChild(frame);
    if (block.caption) figure.appendChild(el('figcaption', 'video__caption', block.caption));

    // Paper cannot play anything, so it gets the address instead.
    var printed = el('p', 'video__url', 'youtube.com/watch?v=' + block.id);
    figure.appendChild(printed);

    return figure;
  }

  function buildBlock(block) {
    if (block.type === 'video') return buildVideo(block);
    if (block.type === 'quote') return rich('blockquote', 'brief__quote', block.html);
    if (block.type === 'link') {
      var wrap = el('p', 'brief__link');
      var link = rich('a', null, block.html);
      link.href = block.href;
      wrap.appendChild(link);
      return wrap;
    }
    return rich('p', null, block.html);
  }

  /* The article that opens the page, and the callout that runs beside it. */
  function buildBrief(g) {
    var wrap = el('section', 'brief');

    var col = el('div', 'brief__col');
    if (g.brief.heading) col.appendChild(el('h2', 'brief__head', g.brief.heading));
    (g.brief.blocks || []).forEach(function (block) {
      col.appendChild(buildBlock(block));
    });
    wrap.appendChild(col);

    if (g.callout) wrap.appendChild(buildCallout(g.callout));
    return wrap;
  }

  function buildCallout(c) {
    var card = el('aside', 'tells');
    card.appendChild(el('h3', 'tells__head', c.heading));
    if (c.intro) card.appendChild(rich('p', 'tells__intro', c.intro));

    (c.groups || []).forEach(function (group) {
      var section = el('section', 'gen');
      section.appendChild(el('h4', 'gen__name', group.name));

      var list = el('ul', 'gen__points');
      (group.points || []).forEach(function (point) {
        var item = el('li');
        if (typeof point === 'string') {
          item.innerHTML = point;
        } else {
          item.innerHTML = point.text;
          var sub = el('ul', 'gen__sub');
          (point.sub || []).forEach(function (line) {
            sub.appendChild(rich('li', null, line));
          });
          item.appendChild(sub);
        }
        list.appendChild(item);
      });
      section.appendChild(list);

      if (group.example && group.example.length) {
        var quote = el('div', 'gen__example');
        group.example.forEach(function (paragraph) {
          quote.appendChild(rich('p', null, paragraph));
        });
        section.appendChild(quote);
      }
      card.appendChild(section);
    });

    return card;
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
   * chips, so the three puzzles stay reachable from anywhere on the page.
   *
   * A 1px sentinel above the strip marks where it sits when it is not pinned,
   * and we compare that against the top of the viewport. This was an
   * IntersectionObserver, which is the usual way to do it and is wrong here:
   * the observer only reports when the sentinel crosses in or out of view, and
   * following a picker link from the top of the page jumps clean over it —
   * never intersecting, so never reported. You landed on puzzle 3 with the full
   * strip sitting across the page. Reading the position once a frame while
   * scrolling is one rect on one element and cannot miss a jump. */
  function stickWhenPassed(nav) {
    var sentinel = el('div', 'picker__sentinel');
    nav.parentNode.insertBefore(sentinel, nav);

    var waiting = false;

    function measure() {
      waiting = false;
      nav.classList.toggle('is-stuck', sentinel.getBoundingClientRect().top < 0);
      // What the pinned strip actually costs, so the toolbar under it can sit
      // flush. Guessing at it left a sliver of the page showing through between
      // the two, and the guess was wrong by a different amount on each screen.
      if (nav.classList.contains('is-stuck')) {
        // Rounded down, not up: a fraction of a pixel of overlap hides behind
        // the strip, where a fraction of a gap shows the page sliding through.
        document.documentElement.style.setProperty(
          '--pin-strip', Math.floor(nav.getBoundingClientRect().height) + 'px');
      }
    }

    function onScroll() {
      if (waiting) return;
      waiting = true;
      if (global.requestAnimationFrame) global.requestAnimationFrame(measure);
      else measure();
    }

    global.addEventListener('scroll', onScroll, { passive: true });
    global.addEventListener('resize', onScroll);
    measure();
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
   * put the grid and its clues back at the top of the screen. A mark rather
   * than a word: an asterisk while it is open, which turns as it folds down to
   * the single stroke of a minus.
   *
   * It is drawn as four identical spokes laid across each other rather than as
   * two states swapped over, because a swap cannot be animated — the mark has
   * to be one object throughout for the turn to read as one movement. Each
   * spoke is horizontal in the markup and rotated into place from the
   * stylesheet, so that the same rule can take three of them back to nothing
   * and leave the fourth lying flat. */
  var SPOKES = [0, 45, 90, 135];

  function mark() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('class', 'icon mark');

    var spin = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    spin.setAttribute('class', 'mark__spin');
    SPOKES.forEach(function (angle) {
      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', '3.5');
      line.setAttribute('y1', '12');
      line.setAttribute('x2', '20.5');
      line.setAttribute('y2', '12');
      // The flat spoke is the one the minus is made of; the rest fold away.
      line.setAttribute('class', 'mark__arm mark__arm--a' + angle);
      spin.appendChild(line);
    });

    svg.appendChild(spin);
    return svg;
  }

  function makeCollapsible(head, label) {
    var button = el('button', 'puzzle__toggle');
    button.type = 'button';
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Hide the introduction to ' + label);
    button.appendChild(mark());
    head.appendChild(button);

    button.addEventListener('click', function () {
      // The mark stays put and changes shape; the head's own class drives it.
      var collapsed = head.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      button.setAttribute('aria-label',
        (collapsed ? 'Show' : 'Hide') + ' the introduction to ' + label);
    });
  }

  function buildArticle(puzzle, position, total) {
    var article = el('article', 'puzzle');
    article.id = 'puzzle-' + puzzle.id;

    // Controls and progress go between the head and the grid — under the title
    // that names the puzzle and against the squares they act on.
    var toolbarMount = el('div', 'toolbar-mount');

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
      // A caption, not a row of chips: they are words in the puzzle, and the
      // boxes made them look like the controls they sit near.
      var heroes = el('div', 'heroes');
      heroes.appendChild(el('p', 'heroes__label', 'Famous ones in here'));
      heroes.appendChild(el('p', 'heroes__words', puzzle.heroes.join(', ')));
      head.appendChild(heroes);
    }
    article.appendChild(head);
    article.appendChild(toolbarMount);

    // Clues beside the grid; which side depends on the puzzle.
    var play = el('div', 'puzzle__play');

    // No "Clues" heading: the two lists say Across and Down themselves.
    var cluesCol = el('div', 'puzzle__clues');
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
    var showing = null;

    function chevron(back) {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 16 16');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      svg.classList.add('icon');
      svg.innerHTML = back ? '<path d="M10 2L4 8l6 6"/>' : '<path d="M6 2l6 6-6 6"/>';
      return svg;
    }

    var prev = el('button', 'cluebar__nav');
    prev.type = 'button';
    prev.setAttribute('aria-label', 'Previous clue');
    prev.appendChild(chevron(true));
    var next = el('button', 'cluebar__nav');
    next.type = 'button';
    next.setAttribute('aria-label', 'Next clue');
    next.appendChild(chevron(false));
    // The clamp lives on a span inside the button: a button's own box is atomic,
    // so -webkit-box on it is ignored and the clue runs to three cut lines.
    var label = el('button', 'cluebar__text');
    label.type = 'button';
    var line = el('span', 'cluebar__line', 'Tap a square to begin');
    label.appendChild(line);

    // The clue is cut to two lines in the bar; this opens the whole of it,
    // with the note and the way out, without going to find the clue list.
    var why = el('button', 'cluebar__why', 'Why?');
    why.type = 'button';
    function openSheet() {
      if (showing) showing.instance.openNoteSheet(showing.entry);
    }
    label.addEventListener('click', openSheet);
    why.addEventListener('click', openSheet);

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
    bar.appendChild(why);
    bar.appendChild(next);
    document.body.appendChild(bar);

    // The bar is as tall as the clue in it, so the page reserves exactly that
    // much at the foot rather than a guess that is wrong in both directions.
    function reserve() {
      document.documentElement.style.setProperty(
        '--cluebar-h', Math.ceil(bar.getBoundingClientRect().height) + 'px');
    }
    if (global.ResizeObserver) new global.ResizeObserver(reserve).observe(bar);
    else global.addEventListener('resize', reserve);
    reserve();

    return {
      set: function (text, instance, entry) {
        line.textContent = text;
        showing = instance && entry ? { instance: instance, entry: entry } : null;
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
          if (active === instance) clueBar.set(text, instance, entry);
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

    // The grid pins below both bars, so it needs the second one's height too.
    var toolbar = document.querySelector('.toolbar');
    if (toolbar) {
      var noteToolbar = function () {
        document.documentElement.style.setProperty(
          '--pin-toolbar', Math.ceil(toolbar.getBoundingClientRect().height) + 'px');
      };
      if (global.ResizeObserver) new global.ResizeObserver(noteToolbar).observe(toolbar);
      else global.addEventListener('resize', noteToolbar);
      noteToolbar();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
