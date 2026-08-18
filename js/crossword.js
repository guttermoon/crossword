/* The crossword engine: grid rendering, cursor, keyboard, check/reveal,
 * timing and autosave. One instance per puzzle on the page.
 */
(function (global) {
  'use strict';

  var STORAGE_PREFIX = 'crossword/v1/';
  var SAVE_DELAY = 400;

  /* Identifies the grid a save belongs to, so replacing a puzzle's content while
   * keeping its id discards the old fill instead of restoring it into new squares. */
  function signature(rows) {
    var text = rows.join('|');
    var hash = 0;
    for (var i = 0; i < text.length; i++) {
      hash = (hash * 31 + text.charCodeAt(i)) | 0;
    }
    return String(hash);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function Crossword(options) {
    this.puzzle = options.puzzle;
    this.root = options.root;
    this.gridMount = options.gridMount;
    this.cluesMount = options.cluesMount;
    this.toolbarMount = options.toolbarMount;
    this.onActive = options.onActive || function () {};
    this.onClueChange = options.onClueChange || function () {};

    this.layout = global.CrosswordGrid.computeLayout(this.puzzle.grid);
    this.fill = this.layout.cells.map(function (cell) {
      return cell.block ? null : '';
    });
    this.revealed = {};
    this.wrong = {};
    this.read = {};
    this.activeIndex = null;
    this.direction = 'across';
    this.elapsed = 0;
    this.solved = false;
    this.ticking = false;
    this.saveTimer = null;

    this.cellNodes = [];
    this.clueNodes = {};
    this.noteNodes = {};

    this.restore();
    this.renderGrid();
    this.renderClues();
    this.renderToolbar();
    this.paint();
    // No note is opened on load. Solving an entry opens its note while you are
    // playing; reopening a half-finished puzzle should not greet you with one.

    var firstOpen = this.layout.cells.find(function (cell) {
      return !cell.block;
    });
    if (firstOpen) this.select(firstOpen.index, this.direction, { focus: false });
    if (this.solved) this.markSolved({ silent: true });
  }

  /* ---------------------------------------------------------------- rendering */

  Crossword.prototype.renderGrid = function () {
    var self = this;
    var layout = this.layout;

    var grid = el('div', 'grid');
    grid.style.setProperty('--cols', layout.width);
    grid.style.setProperty('--rows', layout.height);
    grid.setAttribute('role', 'grid');
    grid.setAttribute('aria-label', this.puzzle.title + ' crossword grid');

    layout.cells.forEach(function (cell) {
      var node;
      if (cell.block) {
        node = el('div', 'cell cell--block');
        node.setAttribute('role', 'presentation');
      } else {
        node = el('div', 'cell');
        node.setAttribute('role', 'gridcell');
        node.dataset.index = String(cell.index);
        if (cell.number) node.appendChild(el('span', 'cell__num', String(cell.number)));
        node.appendChild(el('span', 'cell__letter'));
      }
      self.cellNodes.push(node);
      grid.appendChild(node);
    });

    var input = el('input', 'grid__input');
    input.setAttribute('type', 'text');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('autocapitalize', 'characters');
    input.setAttribute('spellcheck', 'false');
    input.setAttribute('aria-label', 'Crossword letter entry');
    grid.appendChild(input);
    this.input = input;

    var stamp = el('div', 'grid__stamp', 'Solved');
    stamp.setAttribute('aria-hidden', 'true');
    grid.appendChild(stamp);

    grid.addEventListener('pointerdown', function (event) {
      var target = event.target.closest('.cell[data-index]');
      if (!target) return;
      event.preventDefault();
      var index = Number(target.dataset.index);
      var direction = self.direction;
      if (index === self.activeIndex) direction = self.flip(direction);
      self.select(index, direction);
    });

    input.addEventListener('focus', function () {
      self.root.classList.add('is-focused');
      self.onActive(self);
      self.startTimer();
    });
    input.addEventListener('blur', function () {
      self.root.classList.remove('is-focused');
      // Only the puzzle you are actually working on should be running a clock.
      self.stopTimer();
      self.save();
    });
    input.addEventListener('keydown', this.onKeyDown.bind(this));
    input.addEventListener('beforeinput', function (event) {
      if (event.inputType === 'deleteContentBackward') {
        event.preventDefault();
        self.backspace();
      }
    });
    input.addEventListener('input', function () {
      var value = input.value.replace(/[^a-zA-Z]/g, '');
      input.value = '';
      if (!value) return;
      self.typeLetter(value[value.length - 1].toUpperCase());
    });

    this.gridMount.appendChild(grid);
    this.gridNode = grid;

    this.announcer = el('p', 'sr-only');
    this.announcer.setAttribute('aria-live', 'polite');
    this.gridMount.appendChild(this.announcer);

    global.addEventListener('resize', function () {
      self.fitCell();
      self.claimWidth();
      self.positionInput();
    });
    global.addEventListener('pagehide', function () {
      self.save();
    });
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') self.save();
    });
    this.fitCell();
    this.claimWidth();
  };

  Crossword.prototype.renderClues = function () {
    var self = this;
    var wrap = el('div', 'clues');

    ['across', 'down'].forEach(function (direction) {
      var column = el('section', 'clues__col');
      column.appendChild(el('h4', 'clues__head', direction));
      var list = el('ol', 'clues__list');

      self.layout.entries
        .filter(function (entry) {
          return entry.direction === direction;
        })
        .sort(function (a, b) {
          return a.number - b.number;
        })
        .forEach(function (entry) {
          var item = el('li', 'clue');
          item.dataset.id = entry.id;
          item.id = self.clueId(entry);
          item.appendChild(el('b', 'clue__num', entry.number + '.'));

          var body = el('div', 'clue__body');
          var note = self.clueData(entry).note;
          var panel = note && note.what ? self.buildNote(entry, note) : null;

          // The clue is its own control: pressing it goes to the word in the
          // grid and opens the note under it. A span carrying the button role
          // rather than a real <button>, because a button is an atomic inline
          // box — it would take the whole line and drop Reveal beneath it,
          // where a span wraps like the sentence it is.
          var text = el('span', 'clue__text', self.clueText(entry));
          text.setAttribute('role', 'button');
          text.tabIndex = 0;
          if (panel) {
            text.setAttribute('aria-expanded', 'false');
            text.setAttribute('aria-controls', panel.id);
            self.noteNodes[entry.id] = { panel: panel, button: text };
          }
          // Opening the note is all a clue does. Which word you are in is the
          // grid's business, and it is set by pressing a square.
          var press = function () {
            if (panel) self.showNote(entry.id, { open: panel.hidden });
          };
          // The whole row answers, not just the words: it is the row that
          // lights up under the pointer, so the row is what you are aiming at —
          // the number, the space after the text, all of it. Reveal has its own
          // job, and a press inside an open note is someone reading it.
          item.addEventListener('click', function (event) {
            if (event.target.closest('.clue__btn') || event.target.closest('.note')) return;
            press();
          });
          text.addEventListener('keydown', function (event) {
            if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar') return;
            event.preventDefault();
            press();
          });
          body.appendChild(text);

          var actions = el('span', 'clue__actions');

          var reveal = el('button', 'clue__btn', 'Reveal');
          reveal.type = 'button';
          reveal.setAttribute('aria-label', 'Reveal ' + entry.number + ' ' + entry.direction);
          reveal.addEventListener('click', function () {
            self.revealCells(entry.cells);
          });
          actions.appendChild(reveal);

          body.appendChild(actions);
          if (panel) body.appendChild(panel);

          item.appendChild(body);
          list.appendChild(item);
          self.clueNodes[entry.id] = item;
        });

      column.appendChild(list);
      wrap.appendChild(column);
    });

    this.cluesMount.appendChild(wrap);
  };

  Crossword.prototype.renderToolbar = function () {
    var self = this;
    var bar = el('div', 'toolbar');

    function group(label, scopes, handler) {
      var box = el('div', 'toolbar__group');
      box.appendChild(el('span', 'toolbar__label', label));
      scopes.forEach(function (scope) {
        var button = el('button', 'stamp', scope[1]);
        button.type = 'button';
        // The visible text repeats across groups; spell it out for screen readers.
        button.setAttribute('aria-label', label + ' ' + scope[1].toLowerCase());
        button.addEventListener('click', function () {
          handler(scope[0]);
          self.input.focus();
        });
        box.appendChild(button);
      });
      return box;
    }

    bar.appendChild(
      group('Check', [['letter', 'Letter'], ['word', 'Word'], ['puzzle', 'Puzzle']],
        this.check.bind(this))
    );
    bar.appendChild(
      group('Reveal', [['letter', 'Letter'], ['word', 'Word'], ['puzzle', 'Puzzle']],
        this.reveal.bind(this))
    );

    var extras = el('div', 'toolbar__group');
    var clear = el('button', 'stamp stamp--warn', 'Start Over');
    clear.type = 'button';
    clear.addEventListener('click', function () {
      var ask = global.AskPaper ? global.AskPaper.open : null;
      function wipe() {
        self.clearAll();
        self.input.focus();
      }
      if (!ask) {
        if (global.confirm('Erase everything you have filled in for this puzzle?')) wipe();
        return;
      }
      ask({
        brand: (self.puzzle.issue ? self.puzzle.issue + ' · ' : '') + 'Crossword',
        headline: 'Wipe the grid!',
        question: 'Erase everything you have filled in for this puzzle?',
        yes: 'Yes, wipe it',
        no: 'No, leave it',
      }, wipe);
    });
    extras.appendChild(clear);
    bar.appendChild(extras);

    bar.appendChild(this.buildProgress());

    this.timerNode = el('span', 'timer', '00:00');
    this.timerNode.setAttribute('aria-label', 'Time spent on this puzzle');
    bar.appendChild(this.timerNode);

    this.toolbarMount.appendChild(bar);
    this.renderTimer();
    this.renderProgress();
  };

  /* How far through the puzzle you are. It rides on the end of the toolbar
   * rather than in a row of its own — one number does not need a row. */
  Crossword.prototype.buildProgress = function () {
    var count = el('p', 'progress__count');
    count.setAttribute('aria-live', 'polite');
    this.solvedNode = el('span', 'progress__n', '0');
    count.appendChild(this.solvedNode);
    count.appendChild(el('span', 'progress__of', '/' + this.layout.entries.length));
    count.appendChild(el('span', 'progress__word', 'solved'));
    return count;
  };

  Crossword.prototype.renderProgress = function () {
    if (!this.solvedNode) return;
    var self = this;
    var done = this.layout.entries.filter(function (entry) {
      return entry.cells.every(function (index) {
        return self.fill[index] === self.layout.cells[index].solution;
      });
    }).length;
    this.solvedNode.textContent = String(done);
  };

  /* A clue may be a plain string or a { clue, answer, note } record. */
  Crossword.prototype.clueData = function (entry) {
    var side = (this.puzzle.clues && this.puzzle.clues[entry.direction]) || {};
    var value = side[entry.number];
    if (typeof value === 'string') return { clue: value };
    return value || { clue: '(clue missing)' };
  };

  Crossword.prototype.clueText = function (entry) {
    return this.clueData(entry).clue || '(clue missing)';
  };

  Crossword.prototype.clueId = function (entry) {
    return 'clue-' + this.puzzle.id + '-' + entry.id;
  };

  Crossword.prototype.noteId = function (entry) {
    return 'note-' + this.puzzle.id + '-' + entry.id;
  };

  /* The note on a clue: what the habit is, how it sounds, what a person writes
   * instead, and the research where it exists. It opens directly under the
   * clue that references it. */
  Crossword.prototype.buildNote = function (entry, note) {
    var panel = el('div', 'note');
    panel.id = this.noteId(entry);
    panel.hidden = true;

    var body = el('div', 'note__body');
    panel.appendChild(body);

    body.appendChild(el('p', 'note__what', note.what));

    if (note.sounds) {
      var sounds = el('p', 'note__pair');
      sounds.appendChild(el('span', 'note__label', 'Sounds like'));
      sounds.appendChild(el('span', 'note__quote', note.sounds));
      body.appendChild(sounds);
    }
    if (note.human) {
      var human = el('p', 'note__pair');
      human.appendChild(el('span', 'note__label', 'Instead of'));
      human.appendChild(el('span', 'note__quote', note.human));
      body.appendChild(human);
    }
    // Two fields are deliberately not rendered: note.data, the trailing
    // paragraph of numbers and tests, and note.source/note.url, the citation.
    // Both are still in data/puzzles.js, and every study cited there is listed
    // under "Where the numbers come from" at the foot of the page.

    return panel;
  };

  /* Opening and closing happen where the clue is — nothing moves but the clue
   * list growing under the row you pressed. One note is open at a time, so the
   * list cannot fill up with them as you work down it. */
  Crossword.prototype.showNote = function (id, options) {
    var self = this;
    var opts = options || {};
    var pair = this.noteNodes[id];
    if (!pair) return;
    var open = opts.open !== false;

    if (open && !this.read[id]) {
      this.read[id] = true;
      this.renderProgress();
      this.save();
    }
    if (open) {
      Object.keys(this.noteNodes).forEach(function (other) {
        if (other !== id) self.setNoteOpen(other, false);
      });
    }
    this.setNoteOpen(id, open);
  };

  Crossword.prototype.setNoteOpen = function (id, open) {
    var pair = this.noteNodes[id];
    if (!pair || pair.panel.hidden === !open) return;
    pair.panel.hidden = !open;
    if (pair.button) pair.button.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  /* An entry you solved yourself earns its note without asking — and without
   * scrolling, so typing is never interrupted. An entry you were given does
   * not: Reveal puts the word in the grid, and nothing else. */
  Crossword.prototype.syncNotes = function () {
    var self = this;
    this.layout.entries.forEach(function (entry) {
      if (!self.noteNodes[entry.id] || !self.noteNodes[entry.id].panel.hidden) return;
      var earned = entry.cells.every(function (index) {
        return !self.revealed[index] && self.fill[index] === self.layout.cells[index].solution;
      });
      if (earned) self.showNote(entry.id, { open: true });
    });
  };

  /* ------------------------------------------------------------------ cursor */

  Crossword.prototype.flip = function (direction) {
    return direction === 'across' ? 'down' : 'across';
  };

  Crossword.prototype.cellAt = function (row, col) {
    if (row < 0 || col < 0 || row >= this.layout.height || col >= this.layout.width) return null;
    var cell = this.layout.cells[row * this.layout.width + col];
    return cell.block ? null : cell;
  };

  Crossword.prototype.activeEntry = function () {
    if (this.activeIndex == null) return null;
    var cell = this.layout.cells[this.activeIndex];
    var id = cell[this.direction];
    return id ? this.layout.byId[id] : null;
  };

  Crossword.prototype.select = function (index, direction, options) {
    var opts = options || {};
    var cell = this.layout.cells[index];
    if (!cell || cell.block) return;

    var wanted = direction || this.direction;
    if (!cell[wanted]) wanted = this.flip(wanted);
    if (!cell[wanted]) return;

    this.activeIndex = index;
    this.direction = wanted;
    this.paint();
    if (opts.focus !== false) this.input.focus({ preventScroll: true });
    this.positionInput();

    var entry = this.activeEntry();
    if (entry) {
      var text = entry.number + ' ' + entry.direction + ': ' + this.clueText(entry);
      this.announcer.textContent = text;
      this.onClueChange(this, entry, text);
    }
  };

  /* These grids run from 23 to 30 squares wide but sit in a column beside the
   * text, so the square size is measured rather than fixed. Below the floor the
   * wrapper scrolls sideways instead of shrinking the squares to nothing. */
  Crossword.prototype.fitCell = function () {
    var wrap = this.gridNode.parentNode;
    var pad = global.getComputedStyle(wrap);
    var frame = global.getComputedStyle(this.gridNode);
    var available = wrap.clientWidth
      - parseFloat(pad.paddingLeft) - parseFloat(pad.paddingRight)
      - parseFloat(frame.borderLeftWidth) - parseFloat(frame.borderRightWidth)
      - parseFloat(frame.paddingLeft) - parseFloat(frame.paddingRight);
    if (!(available > 0)) return;
    var size = Math.floor(available / this.layout.width);
    size = Math.max(17, Math.min(30, size));
    this.gridNode.style.setProperty('--cell', size + 'px');
  };

  /* The grid column asks for only the width its squares need, so the clues
   * beside it get everything left over. The wrapper's own frame is measured
   * rather than assumed, then the squares are re-fitted to the new column. */
  Crossword.prototype.claimWidth = function () {
    var play = this.gridMount.closest('.puzzle__play');
    if (!play) return;
    var wrap = this.gridMount.parentNode;
    var cell = parseFloat(global.getComputedStyle(this.gridNode).getPropertyValue('--cell'));
    if (!(cell > 0)) return;

    // The grid's own frame, plus the scrolling wrapper's — not the slack around
    // a centred grid, which is what the column is meant to give back.
    var frame = this.gridNode.getBoundingClientRect().width - this.layout.width * cell;
    var pad = global.getComputedStyle(wrap);
    var wrapper = parseFloat(pad.paddingLeft) + parseFloat(pad.paddingRight)
      + parseFloat(pad.borderLeftWidth) + parseFloat(pad.borderRightWidth);

    play.style.setProperty('--grid-w',
      Math.ceil(this.layout.width * 30 + frame + wrapper) + 'px');
    this.fitCell();
  };

  Crossword.prototype.positionInput = function () {
    if (this.activeIndex == null) return;
    var node = this.cellNodes[this.activeIndex];
    if (!node) return;
    this.input.style.left = node.offsetLeft + 'px';
    this.input.style.top = node.offsetTop + 'px';
    this.input.style.width = node.offsetWidth + 'px';
    this.input.style.height = node.offsetHeight + 'px';
  };

  Crossword.prototype.step = function (dRow, dCol) {
    var cell = this.layout.cells[this.activeIndex];
    var row = cell.row;
    var col = cell.col;
    for (var i = 0; i < Math.max(this.layout.width, this.layout.height); i++) {
      row += dRow;
      col += dCol;
      var next = this.cellAt(row, col);
      if (next) {
        this.select(next.index, this.direction);
        return true;
      }
      if (row < 0 || col < 0 || row >= this.layout.height || col >= this.layout.width) break;
    }
    return false;
  };

  Crossword.prototype.moveWithinEntry = function (delta) {
    var entry = this.activeEntry();
    if (!entry) return false;
    var position = entry.cells.indexOf(this.activeIndex);
    var target = position + delta;
    if (target < 0 || target >= entry.cells.length) return false;
    this.select(entry.cells[target], this.direction);
    return true;
  };

  Crossword.prototype.jumpEntry = function (delta) {
    var ordered = this.layout.entries.slice().sort(function (a, b) {
      if (a.direction !== b.direction) return a.direction === 'across' ? -1 : 1;
      return a.number - b.number;
    });
    var current = this.activeEntry();
    var at = current ? ordered.indexOf(current) : -1;
    var next = ordered[(at + delta + ordered.length) % ordered.length];
    if (next) this.select(next.cells[0], next.direction);
  };

  Crossword.prototype.onKeyDown = function (event) {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    var key = event.key;

    var arrows = {
      ArrowLeft: ['across', 0, -1],
      ArrowRight: ['across', 0, 1],
      ArrowUp: ['down', -1, 0],
      ArrowDown: ['down', 1, 0],
    };

    if (arrows[key]) {
      event.preventDefault();
      var axis = arrows[key][0];
      if (axis !== this.direction && this.layout.cells[this.activeIndex][axis]) {
        this.select(this.activeIndex, axis);
      } else {
        this.step(arrows[key][1], arrows[key][2]);
      }
      return;
    }

    if (key === 'Backspace') {
      event.preventDefault();
      this.backspace();
      return;
    }
    if (key === 'Delete') {
      event.preventDefault();
      this.setLetter(this.activeIndex, '');
      return;
    }
    if (key === ' ' || key === 'Enter') {
      event.preventDefault();
      this.select(this.activeIndex, this.flip(this.direction));
      return;
    }
    if (key === 'Tab') {
      event.preventDefault();
      this.jumpEntry(event.shiftKey ? -1 : 1);
      return;
    }
    if (key === 'Home' || key === 'End') {
      var entry = this.activeEntry();
      if (entry) {
        event.preventDefault();
        this.select(key === 'Home' ? entry.cells[0] : entry.cells[entry.cells.length - 1],
          this.direction);
      }
      return;
    }
    if (key === 'Escape') {
      this.input.blur();
    }
  };

  /* ------------------------------------------------------------------ filling */

  Crossword.prototype.setLetter = function (index, letter) {
    if (index == null || this.fill[index] == null) return;
    this.fill[index] = letter;
    delete this.wrong[index];
    if (letter === '') delete this.revealed[index];
    this.paint();
    this.syncNotes();
    this.renderProgress();
    this.scheduleSave();
    this.checkSolved();
  };

  Crossword.prototype.typeLetter = function (letter) {
    if (this.activeIndex == null) return;
    this.startTimer();
    this.setLetter(this.activeIndex, letter);
    this.moveWithinEntry(1);
  };

  Crossword.prototype.backspace = function () {
    if (this.activeIndex == null) return;
    if (this.fill[this.activeIndex]) {
      this.setLetter(this.activeIndex, '');
    } else if (this.moveWithinEntry(-1)) {
      this.setLetter(this.activeIndex, '');
    }
  };

  Crossword.prototype.scopeIndices = function (scope) {
    if (scope === 'letter') return this.activeIndex == null ? [] : [this.activeIndex];
    if (scope === 'word') {
      var entry = this.activeEntry();
      return entry ? entry.cells.slice() : [];
    }
    return this.layout.cells
      .filter(function (cell) {
        return !cell.block;
      })
      .map(function (cell) {
        return cell.index;
      });
  };

  Crossword.prototype.check = function (scope) {
    var self = this;
    this.scopeIndices(scope).forEach(function (index) {
      var entered = self.fill[index];
      if (!entered) return;
      if (entered !== self.layout.cells[index].solution) self.wrong[index] = true;
      else delete self.wrong[index];
    });
    this.paint();
    this.scheduleSave();
  };

  Crossword.prototype.reveal = function (scope) {
    this.revealCells(this.scopeIndices(scope));
  };

  /* Fills the given squares in and marks them as given away. It does not move
   * the cursor — the toolbar's Reveal acts on where you already are, and a
   * clue's Reveal acts on that clue, neither of which is a reason to jump.
   * No syncNotes either: revealing a word is not solving it, and the note that
   * explains the answer is not what was asked for. */
  Crossword.prototype.revealCells = function (indices) {
    var self = this;
    indices.forEach(function (index) {
      var solution = self.layout.cells[index].solution;
      if (self.fill[index] !== solution) {
        self.fill[index] = solution;
        self.revealed[index] = true;
      }
      delete self.wrong[index];
    });
    this.paint();
    this.renderProgress();
    this.scheduleSave();
    this.checkSolved();
  };

  Crossword.prototype.clearAll = function () {
    var self = this;
    this.layout.cells.forEach(function (cell) {
      if (!cell.block) self.fill[cell.index] = '';
    });
    this.revealed = {};
    this.wrong = {};
    this.read = {};
    this.solved = false;
    this.elapsed = 0;
    this.root.classList.remove('is-solved');
    this.renderTimer();
    this.paint();
    this.renderProgress();
    this.scheduleSave();
  };

  Crossword.prototype.checkSolved = function () {
    var self = this;
    var complete = this.layout.cells.every(function (cell) {
      return cell.block || self.fill[cell.index] === cell.solution;
    });
    if (complete && !this.solved) {
      this.solved = true;
      this.stopTimer();
      this.markSolved({});
      this.scheduleSave();
    } else if (!complete && this.solved) {
      this.solved = false;
      this.root.classList.remove('is-solved');
      if (document.activeElement === this.input) this.startTimer();
    }
  };

  Crossword.prototype.markSolved = function (options) {
    this.root.classList.add('is-solved');
    if (!options.silent && this.announcer) {
      this.announcer.textContent = 'Puzzle solved.';
    }
  };

  /* ------------------------------------------------------------------ painting */

  Crossword.prototype.paint = function () {
    var self = this;
    var entry = this.activeEntry();
    var inWord = {};
    if (entry) {
      entry.cells.forEach(function (index) {
        inWord[index] = true;
      });
    }

    this.layout.cells.forEach(function (cell) {
      if (cell.block) return;
      var node = self.cellNodes[cell.index];
      node.querySelector('.cell__letter').textContent = self.fill[cell.index] || '';
      node.classList.toggle('is-active', cell.index === self.activeIndex);
      node.classList.toggle('is-word', !!inWord[cell.index] && cell.index !== self.activeIndex);
      node.classList.toggle('is-wrong', !!self.wrong[cell.index]);
      node.classList.toggle('is-revealed', !!self.revealed[cell.index]);
      node.setAttribute('aria-label', self.describeCell(cell));
    });

    Object.keys(this.clueNodes).forEach(function (id) {
      self.clueNodes[id].classList.toggle('is-active', !!entry && entry.id === id);
      self.clueNodes[id].classList.toggle(
        'is-crossing',
        !!entry && !!self.crossingId(entry) && self.crossingId(entry) === id
      );
    });

    if (entry && this.clueNodes[entry.id]) {
      var node = this.clueNodes[entry.id];
      var list = node.parentNode;
      if (node.offsetTop < list.scrollTop ||
          node.offsetTop + node.offsetHeight > list.scrollTop + list.clientHeight) {
        list.scrollTop = node.offsetTop - list.clientHeight / 2 + node.offsetHeight / 2;
      }
    }
  };

  Crossword.prototype.crossingId = function () {
    if (this.activeIndex == null) return null;
    return this.layout.cells[this.activeIndex][this.flip(this.direction)];
  };

  Crossword.prototype.describeCell = function (cell) {
    var self = this;
    var parts = [];
    ['across', 'down'].forEach(function (direction) {
      var id = cell[direction];
      if (!id) return;
      var entry = self.layout.byId[id];
      var position = entry.cells.indexOf(cell.index) + 1;
      parts.push(
        entry.number + ' ' + direction + ', ' + self.clueText(entry) +
          ', letter ' + position + ' of ' + entry.cells.length
      );
    });
    var letter = this.fill[cell.index];
    parts.push(letter ? 'contains ' + letter : 'empty');
    if (this.wrong[cell.index]) parts.push('marked incorrect');
    return parts.join('. ');
  };

  /* -------------------------------------------------------------------- timer */

  Crossword.prototype.startTimer = function () {
    var self = this;
    if (this.ticking || this.solved) return;
    this.ticking = true;
    this.interval = global.setInterval(function () {
      self.elapsed += 1;
      self.renderTimer();
      if (self.elapsed % 15 === 0) self.save();
    }, 1000);
  };

  Crossword.prototype.stopTimer = function () {
    this.ticking = false;
    global.clearInterval(this.interval);
  };

  Crossword.prototype.renderTimer = function () {
    var minutes = Math.floor(this.elapsed / 60);
    var seconds = this.elapsed % 60;
    this.timerNode.textContent =
      String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
  };

  /* ------------------------------------------------------------------ storage */

  Crossword.prototype.storageKey = function () {
    return STORAGE_PREFIX + this.puzzle.id;
  };

  Crossword.prototype.scheduleSave = function () {
    var self = this;
    global.clearTimeout(this.saveTimer);
    this.saveTimer = global.setTimeout(function () {
      self.save();
    }, SAVE_DELAY);
  };

  Crossword.prototype.save = function () {
    try {
      global.localStorage.setItem(
        this.storageKey(),
        JSON.stringify({
          sig: signature(this.puzzle.grid),
          fill: this.fill.map(function (letter) {
            return letter == null ? '.' : letter || ' ';
          }).join(''),
          revealed: Object.keys(this.revealed).map(Number),
          read: Object.keys(this.read),
          elapsed: this.elapsed,
          solved: this.solved,
        })
      );
    } catch (error) {
      /* private browsing or a full quota — playing without a save is fine */
    }
  };

  Crossword.prototype.restore = function () {
    var raw;
    try {
      raw = global.localStorage.getItem(this.storageKey());
    } catch (error) {
      return;
    }
    if (!raw) return;

    var saved;
    try {
      saved = JSON.parse(raw);
    } catch (error) {
      return;
    }
    if (!saved || typeof saved.fill !== 'string' || saved.fill.length !== this.fill.length) return;
    if (saved.sig !== signature(this.puzzle.grid)) return;

    for (var i = 0; i < saved.fill.length; i++) {
      if (this.fill[i] == null) continue;
      var ch = saved.fill[i];
      this.fill[i] = /[A-Z]/.test(ch) ? ch : '';
    }
    (saved.revealed || []).forEach(function (index) {
      this.revealed[index] = true;
    }, this);
    (saved.read || []).forEach(function (id) {
      this.read[id] = true;
    }, this);
    this.elapsed = Number(saved.elapsed) || 0;
    this.solved = !!saved.solved;
  };

  global.Crossword = Crossword;
})(window);
