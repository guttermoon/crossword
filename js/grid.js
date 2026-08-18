/* Derives everything structural from a puzzle's `grid` rows: clue numbers,
 * word spans, and the maps that tie a cell to the entries it belongs to.
 *
 * Nothing else in the app is allowed to hand-number a grid — swap the rows in
 * data/puzzles.js and the numbering follows automatically.
 */
(function (global) {
  'use strict';

  var BLOCK = '.';

  /**
   * @param {string[]} rows equal-length strings of A-Z and '.'
   * @returns {{height:number,width:number,cells:Array,entries:Array,byId:Object}}
   */
  function computeLayout(rows) {
    var height = rows.length;
    var width = rows[0].length;

    var cells = [];
    for (var r = 0; r < height; r++) {
      for (var c = 0; c < width; c++) {
        var ch = rows[r][c];
        cells.push({
          index: r * width + c,
          row: r,
          col: c,
          block: ch === BLOCK,
          solution: ch === BLOCK ? null : ch,
          number: null,
          across: null,
          down: null,
        });
      }
    }

    var at = function (r, c) {
      if (r < 0 || c < 0 || r >= height || c >= width) return null;
      var cell = cells[r * width + c];
      return cell.block ? null : cell;
    };

    var entries = [];
    var byId = {};
    var number = 0;

    for (var row = 0; row < height; row++) {
      for (var col = 0; col < width; col++) {
        var cell = at(row, col);
        if (!cell) continue;

        var startsAcross = !at(row, col - 1) && !!at(row, col + 1);
        var startsDown = !at(row - 1, col) && !!at(row + 1, col);
        if (!startsAcross && !startsDown) continue;

        number += 1;
        cell.number = number;

        if (startsAcross) entries.push(makeEntry('across', number, cell, at));
        if (startsDown) entries.push(makeEntry('down', number, cell, at));
      }
    }

    entries.forEach(function (entry) {
      byId[entry.id] = entry;
      entry.cells.forEach(function (idx) {
        cells[idx][entry.direction] = entry.id;
      });
    });

    return { height: height, width: width, cells: cells, entries: entries, byId: byId };
  }

  function makeEntry(direction, number, startCell, at) {
    var dr = direction === 'down' ? 1 : 0;
    var dc = direction === 'across' ? 1 : 0;
    var indices = [];
    var answer = '';
    var cell = startCell;
    while (cell) {
      indices.push(cell.index);
      answer += cell.solution;
      cell = at(cell.row + dr, cell.col + dc);
    }
    return {
      id: (direction === 'across' ? 'A' : 'D') + number,
      direction: direction,
      number: number,
      answer: answer,
      cells: indices,
    };
  }

  /**
   * Reports authoring mistakes instead of rendering a broken grid.
   * @returns {string[]} human-readable problems; empty means the puzzle is sound.
   */
  function validatePuzzle(puzzle) {
    var problems = [];
    var label = 'puzzle "' + (puzzle && puzzle.id) + '"';

    if (!puzzle || !Array.isArray(puzzle.grid) || puzzle.grid.length === 0) {
      return [label + ': `grid` must be a non-empty array of rows'];
    }

    var width = puzzle.grid[0].length;
    puzzle.grid.forEach(function (row, i) {
      if (typeof row !== 'string' || row.length !== width) {
        problems.push(label + ': row ' + i + ' is not ' + width + ' characters wide');
      } else if (!/^[A-Z.]+$/.test(row)) {
        problems.push(label + ': row ' + i + ' has characters outside A-Z and "."');
      }
    });
    if (problems.length) return problems;

    var layout = computeLayout(puzzle.grid);
    var clues = puzzle.clues || {};

    layout.entries.forEach(function (entry) {
      var side = clues[entry.direction] || {};
      var clue = side[entry.number];
      if (!clue) {
        problems.push(
          label + ': no ' + entry.direction + ' clue for ' + entry.number +
            ' (' + entry.answer + ')'
        );
        return;
      }
      if (typeof clue === 'object' && !clue.clue) {
        problems.push(
          label + ': ' + entry.direction + ' ' + entry.number + ' has no clue text'
        );
      }
      // The stored answer is only a convenience copy, so it is the thing most
      // likely to go stale when squares are edited. Catch that here.
      if (typeof clue === 'object' && clue.answer && clue.answer !== entry.answer) {
        problems.push(
          label + ': ' + entry.direction + ' ' + entry.number + ' is written as "' +
            clue.answer + '" but the grid spells "' + entry.answer + '"'
        );
      }
      // A second accepted spelling has to fit the same squares, or the letters
      // it would add fall off the end of the word and are silently ignored.
      if (typeof clue === 'object' && clue.also) {
        var also = String(clue.also).toUpperCase();
        if (!/^[A-Z]+$/.test(also)) {
          problems.push(
            label + ': ' + entry.direction + ' ' + entry.number +
              ' has a second spelling with characters outside A-Z'
          );
        } else if (also.length !== entry.answer.length) {
          problems.push(
            label + ': ' + entry.direction + ' ' + entry.number + ' also accepts "' +
              also + '" (' + also.length + ') but the grid holds ' +
              entry.answer.length + ' squares'
          );
        } else if (also === entry.answer) {
          problems.push(
            label + ': ' + entry.direction + ' ' + entry.number +
              ' lists "' + also + '" as a second spelling of itself'
          );
        }
      }
    });

    ['across', 'down'].forEach(function (direction) {
      Object.keys(clues[direction] || {}).forEach(function (num) {
        var id = (direction === 'across' ? 'A' : 'D') + num;
        if (!layout.byId[id]) {
          problems.push(
            label + ': ' + direction + ' clue ' + num + ' has no matching entry in the grid'
          );
        }
      });
    });

    return problems;
  }

  global.CrosswordGrid = { computeLayout: computeLayout, validatePuzzle: validatePuzzle };
})(window);
