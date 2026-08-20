/* "Easy Eyes" — the readable-theme switch from The Dead Good Club, ported from
 * the React component in vendor/easy-eyes to the plain JavaScript this page is
 * written in. Same class names, same aria, same localStorage key, so the switch
 * looks and behaves the way it does on the parent site and vendor/easy-eyes.css
 * can be re-synced without touching this file.
 *
 *   EasyEyes.build()  -> the switch, for the page to place where it belongs
 *
 * The one thing that is not shared: the preference itself. localStorage is
 * per-origin, so a reader who turned Easy Eyes on at deadgoodclub.com starts
 * off here. A cookie scoped to .deadgoodclub.com would join them up.
 */
(function (global) {
  'use strict';

  var KEY = 'easy-eyes';

  function saved() {
    try {
      return global.localStorage.getItem(KEY) === '1';
    } catch (e) {
      return false;
    }
  }

  function apply(on) {
    document.documentElement.classList.toggle('easy-eyes', on);
    try {
      global.localStorage.setItem(KEY, on ? '1' : '0');
    } catch (e) {
      // A reader with storage turned off still gets the switch, just not the
      // memory of it.
    }
  }

  function build() {
    var on = saved();
    // The inline script in <head> has already set the class, but not if
    // storage threw or the script was left out.
    document.documentElement.classList.toggle('easy-eyes', on);

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'easy-eyes-switch';
    button.setAttribute('role', 'switch');
    button.setAttribute('aria-checked', on ? 'true' : 'false');
    button.setAttribute('aria-label', 'Toggle Easy Eyes readable mode');
    button.title = 'Easy Eyes — an easier-to-read version of this page';

    var state = document.createElement('span');
    state.className = 'easy-eyes-state';
    state.setAttribute('aria-hidden', 'true');
    state.textContent = on ? 'On' : 'Off';

    var knob = document.createElement('span');
    knob.className = 'easy-eyes-knob';
    knob.textContent = 'Easy Eyes';

    button.appendChild(state);
    button.appendChild(knob);

    button.addEventListener('click', function () {
      on = !on;
      apply(on);
      button.setAttribute('aria-checked', on ? 'true' : 'false');
      state.textContent = on ? 'On' : 'Off';
    });

    return button;
  }

  global.EasyEyes = { build: build };
})(window);
