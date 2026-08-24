/* Asking before counting anyone, and counting them only if they say yes.
 *
 * The question is put the same way the page puts its only other one: a late
 * edition spins in off the press and you answer it. It is the same component,
 * so there is one dialogue on this page rather than two that nearly match.
 *
 * Nothing from PostHog is fetched until the answer is yes — not the library,
 * not a pixel. Refusing therefore costs nothing to honour, because there was
 * never anything to switch off. Until then the page still makes no third-party
 * request at all, which is how the rest of it is built: even the film sits
 * behind a poster drawn here rather than fetched from Google.
 *
 *   Consent.ask()   — put the question again, for a reader changing their mind
 */
(function (global) {
  'use strict';

  var KEY = 'dgc-analytics';
  var YES = 'yes';
  var NO = 'no';

  function config() {
    return global.DGC_ANALYTICS || {};
  }

  function saved() {
    try {
      return global.localStorage.getItem(KEY);
    } catch (e) {
      // Storage refused. The answer cannot be remembered, so it gets asked
      // again next time rather than assumed either way.
      return null;
    }
  }

  function remember(answer) {
    try {
      global.localStorage.setItem(KEY, answer);
    } catch (e) {}
  }

  /* Loads PostHog and starts it. Called once, and only after a yes. */
  var started = false;
  function start() {
    if (started) return;
    var cfg = config();
    if (!cfg.posthogKey) return;
    started = true;

    var script = document.createElement('script');
    script.async = true;
    script.src = cfg.assetHost + '/array/' + cfg.posthogKey + '/array.js';
    script.addEventListener('load', function () {
      if (!global.posthog || !global.posthog.init) return;
      global.posthog.init(cfg.posthogKey, {
        api_host: cfg.apiHost,
        // Nobody signs in, so there is no one to build a profile of.
        person_profiles: 'identified_only',
        // A recording of this page would be a recording of someone filling in
        // a crossword, letter by letter. Not worth having.
        disable_session_recording: true,
        // Autocapture logs every click, and most clicks here are on the 700-odd
        // squares of a grid. Page views are the question worth asking.
        autocapture: false,
      });
    });
    document.head.appendChild(script);
  }

  function ask() {
    if (!global.AskPaper) return;
    global.AskPaper.open(
      {
        brand: 'Notice',
        headline: 'Count me in?',
        question: 'May we count this visit? It tells us which puzzles people ' +
          'play and where they give up. Nothing is sold on, and no advertising ' +
          'follows you around afterwards.',
        yes: 'Yes, count me',
        danger: false,
        no: 'No thanks',
      },
      function () {
        remember(YES);
        start();
      },
      function () {
        // Every way of declining is the same answer, and it is remembered, so
        // the question is asked once rather than at every visit.
        remember(NO);
      }
    );
  }

  function boot() {
    // No key, nothing to consent to, so no question. A checkout with no key
    // configured is a page that never mentions cookies, which is correct: it
    // does not set any.
    if (!config().posthogKey) return;

    // The way back to the question, shown only where there is one to ask.
    var again = document.getElementById('cookie-choice');
    if (again) {
      again.hidden = false;
      again.addEventListener('click', ask);
    }

    var answer = saved();
    if (answer === YES) return start();
    if (answer === NO) return;
    ask();
  }

  global.Consent = { ask: ask, start: start };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(window);
