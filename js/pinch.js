/* Keeps the clue bar, and the sheets that open over it, where you can see them
 * while the grid is pinched.
 *
 * A phone has two viewports. The layout viewport is the page's idea of the
 * window and does not change; the visual viewport is the part of it you are
 * actually looking at, and a pinch shrinks that one and lets you pan it about.
 * `position: fixed` is fixed to the first of the two — so zooming into a corner
 * of a grid leaves the clue bar dutifully pinned to the bottom of a window that
 * is now several hundred pixels off the bottom of the screen. Measured at 1.8x
 * on a 390px phone: 347px below the last row you can see.
 *
 * So while the page is zoomed, the bar is put at the foot of the visual
 * viewport instead, and scaled by the reciprocal of the zoom so it stays the
 * size it always was rather than swelling with the squares. A transform is
 * only paint: the space the page reserves at its foot, the height the bar
 * reports, where taps land — all of it carries on as before, and letting go of
 * the pinch puts everything back by itself.
 */
(function (global) {
  'use strict';

  var vv = global.visualViewport;
  if (!vv) return;      // older than Chrome 61 or Safari 13: leave the page be

  // The bar sits on the bottom edge. The sheets cover everything — and one of
  // them opens from the bar's own Why?, so it has to come along or that button
  // would open something off-screen.
  var FOOT = '.cluebar';
  var FILL = '.notesheet, .paperbox';

  // A hair over 1: a pinch that goes nowhere still reports 1.0000001, and
  // there is nothing to correct at that.
  var ZOOMED = 1.01;

  var pending = false;
  var moved = [];

  function place() {
    pending = false;
    var scale = vv.scale;

    // Everything is measured untransformed, so last time's work comes off
    // first — in a pass of its own, so the reads after it cost one reflow
    // between them rather than one apiece.
    for (var i = 0; i < moved.length; i++) moved[i].style.transform = '';
    moved.length = 0;
    if (scale <= ZOOMED) return;

    var nodes = [].slice.call(document.querySelectorAll(FOOT + ',' + FILL));
    var boxes = nodes.map(function (node) { return node.getBoundingClientRect(); });

    nodes.forEach(function (node, i) {
      var box = boxes[i];
      if (!box.width || !box.height) return;   // the bar is hidden on a wide screen

      /* Both of these span the layout viewport, which is `scale` times as wide
       * as the visual one — so scaling by 1/scale lands them at exactly the
       * width of what you can see, and only the corner has to be aimed. */
      var foot = node.matches(FOOT);
      var x = vv.offsetLeft - box.left;
      var y = foot ? vv.offsetTop + vv.height - box.bottom : vv.offsetTop - box.top;

      node.style.transformOrigin = foot ? 'left bottom' : 'left top';
      node.style.transform =
        'translate(' + x + 'px,' + y + 'px) scale(' + (1 / scale) + ')';
      moved.push(node);
    });
  }

  function schedule() {
    if (pending) return;
    pending = true;
    // A pinch fires these faster than the screen redraws, and the work is
    // pure layout, so once a frame is both enough and all there is room for.
    if (global.requestAnimationFrame) global.requestAnimationFrame(place);
    else setTimeout(place, 16);
  }

  function watch() {
    vv.addEventListener('resize', schedule);
    vv.addEventListener('scroll', schedule);
    global.addEventListener('orientationchange', schedule);

    // A sheet that opens while the page is already zoomed arrives with no
    // viewport event behind it, and would be placed for a zoom of 1.
    if (global.MutationObserver) {
      new global.MutationObserver(function () {
        if (vv.scale > ZOOMED) schedule();
      }).observe(document.body, { childList: true });
    }

    schedule();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watch);
  } else {
    watch();
  }
})(window);
