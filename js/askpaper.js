/* The one question the page has to ask — "are you sure you want to wipe this?"
 * — asked in the paper's own voice: a late edition spins in off the press with
 * the headline, and you answer it yes or no.
 *
 *   AskPaper.open({ headline, question, yes, no, danger }, onYes, onNo)
 *
 * onNo is optional and fires for every way of saying no — the button, Escape,
 * or a click off the paper. A question that only acts on yes can leave it out
 * and nothing changes; a question that has to record the refusal needs it.
 */
(function (global) {
  'use strict';

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function open(options, onYes, onNo) {
    var opts = options || {};
    var opener = document.activeElement;

    var back = el('div', 'paperbox');
    var sheet = el('div', 'paperbox__sheet');
    sheet.setAttribute('role', 'alertdialog');
    sheet.setAttribute('aria-modal', 'true');

    var headId = 'paperbox-head';
    var askId = 'paperbox-ask';
    sheet.setAttribute('aria-labelledby', headId);
    sheet.setAttribute('aria-describedby', askId);

    sheet.appendChild(el('p', 'paperbox__brand', opts.brand || 'Crossword'));

    var headline = el('h2', 'paperbox__head', opts.headline || 'Wipe the grid!');
    headline.id = headId;
    sheet.appendChild(headline);

    var question = el('p', 'paperbox__ask', opts.question || '');
    question.id = askId;
    sheet.appendChild(question);

    var acts = el('div', 'paperbox__acts');
    var yes = el('button', 'paperbox__btn', opts.yes || 'Yes');
    yes.type = 'button';
    // Red marks the answer you cannot take back. Wiping a grid is one; being
    // counted is not, and dressing it in the warning colour would also make
    // agreeing louder than declining, which is the one thing a question about
    // consent must not do.
    if (opts.danger !== false) yes.classList.add('paperbox__btn--yes');
    var no = el('button', 'paperbox__btn', opts.no || 'No');
    no.type = 'button';
    acts.appendChild(yes);
    acts.appendChild(no);
    sheet.appendChild(acts);

    back.appendChild(sheet);
    document.body.appendChild(back);

    // Every exit runs through one place, so no answer can be given twice and
    // none can be given without being reported.
    var answered = false;
    function answer(said) {
      if (answered) return;
      answered = true;
      document.removeEventListener('keydown', onKey, true);
      if (back.parentNode) back.parentNode.removeChild(back);
      if (opener && opener.focus) opener.focus();
      if (said && onYes) onYes();
      if (!said && onNo) onNo();
    }

    function onKey(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        answer(false);
        return;
      }
      if (event.key !== 'Tab') return;
      // Two buttons and nothing else, so the trap is a two-step cycle.
      var first = yes;
      var last = no;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    yes.addEventListener('click', function () {
      answer(true);
    });
    no.addEventListener('click', function () {
      answer(false);
    });
    // Clicking off the paper is the same as saying no.
    back.addEventListener('mousedown', function (event) {
      if (event.target === back) answer(false);
    });
    document.addEventListener('keydown', onKey, true);

    // The destructive answer is never the one waiting under the finger.
    no.focus();
  }

  global.AskPaper = { open: open };
})(window);
