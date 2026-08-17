/* Builds one magazine "article" per puzzle in window.PUZZLES and wires up the
 * shared clue bar that follows whichever grid you are typing in.
 */
(function (global) {
  'use strict';

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function buildArticle(puzzle, position) {
    var article = el('article', 'puzzle');
    article.id = 'puzzle-' + puzzle.id;

    var head = el('div', 'puzzle__head');

    var storyCol = el('div', 'puzzle__story');
    var title = el('h2', 'puzzle__title');
    title.appendChild(el('span', 'puzzle__title-line', puzzle.title));
    storyCol.appendChild(title);
    var story = el('div', 'story');
    (puzzle.story || []).forEach(function (paragraph) {
      story.appendChild(el('p', null, paragraph));
    });
    storyCol.appendChild(story);

    var gridCol = el('div', 'puzzle__gridwrap');
    gridCol.appendChild(el('div', 'credit', puzzle.credit || ''));
    var gridMount = el('div', 'grid-mount');
    gridCol.appendChild(gridMount);

    head.appendChild(storyCol);
    head.appendChild(gridCol);
    article.appendChild(head);

    var sectionHead = el('h3', 'section-head');
    sectionHead.appendChild(el('span', null, puzzle.heading || puzzle.title));
    article.appendChild(sectionHead);

    var note = el('div', 'notebox');
    note.appendChild(el('p', null, puzzle.note || ''));
    article.appendChild(note);

    var toolbarMount = el('div', 'toolbar-mount');
    article.appendChild(toolbarMount);

    var cluesMount = el('div', 'clues-mount');
    article.appendChild(cluesMount);

    var riddleMount = null;
    if (puzzle.riddle) {
      var riddle = el('div', 'riddle');
      riddle.appendChild(el('p', 'riddle__q', puzzle.riddle.question));
      var scramble = el('p', 'riddle__scramble');
      scramble.appendChild(document.createTextNode('For an extra clue, unscramble these words: '));
      scramble.appendChild(el('b', null, puzzle.riddle.scramble));
      riddle.appendChild(scramble);

      var answer = el('p', 'riddle__answer');
      answer.appendChild(el('span', null, puzzle.riddle.answer));
      riddle.appendChild(answer);

      var peek = el('button', 'riddle__peek', 'Show the solution');
      peek.type = 'button';
      peek.addEventListener('click', function () {
        var shown = article.classList.toggle('is-peeking');
        peek.textContent = shown ? 'Hide the solution' : 'Show the solution';
      });
      riddle.appendChild(peek);
      riddle.appendChild(el('p', 'riddle__note', '(Solution in Teacher’s Edition.)'));
      article.appendChild(riddle);
      riddleMount = riddle;
    }

    article.appendChild(el('div', 'dinkus', position < global.PUZZLES.length - 1 ? '❖' : ''));

    return {
      article: article,
      gridMount: gridMount,
      cluesMount: cluesMount,
      toolbarMount: toolbarMount,
      riddleMount: riddleMount,
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
      node: bar,
      set: function (text) {
        label.textContent = text;
        bar.classList.add('is-live');
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
    var mount = document.getElementById('puzzles');
    var puzzles = global.PUZZLES || [];
    var active = null;

    var clueBar = buildClueBar(function () {
      return active;
    });

    puzzles.forEach(function (puzzle, position) {
      var problems = global.CrosswordGrid.validatePuzzle(puzzle);
      if (problems.length) {
        reportProblems(mount, problems);
        return;
      }

      var parts = buildArticle(puzzle, position);
      mount.appendChild(parts.article);

      new global.Crossword({
        puzzle: puzzle,
        root: parts.article,
        gridMount: parts.gridMount,
        cluesMount: parts.cluesMount,
        toolbarMount: parts.toolbarMount,
        riddleMount: parts.riddleMount,
        onActive: function (instance) {
          active = instance;
        },
        onClueChange: function (instance, entry, text) {
          if (active === instance) clueBar.set(text);
        },
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
