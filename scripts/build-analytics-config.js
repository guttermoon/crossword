/* Writes js/analytics-config.js from the environment, so the PostHog key set on
 * the Vercel project reaches the browser.
 *
 * The page is plain files with no framework, so nothing was substituting the
 * variable in: NEXT_PUBLIC_ is a Next.js prefix and Next.js inlines it while
 * building, which is a step this site did not have. This is that step, and it
 * is the whole of it.
 *
 * It never fails the build. A deploy with no key set produces a config with no
 * key, and a page with no key asks for no consent and loads no analytics —
 * which is the right way for this to degrade.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'js', 'analytics-config.js');

// The Next.js name is the one already set on the project; the bare name is
// accepted too, for anyone setting this up without that convention in mind.
const key = (process.env.NEXT_PUBLIC_POSTHOG_KEY || process.env.POSTHOG_KEY || '').trim();

// EU by default. The host can be overridden for a US project without editing
// anything here.
const apiHost = (process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com').trim();
const assetHost = apiHost.replace('//eu.i.', '//eu-assets.i.').replace('//us.i.', '//us-assets.i.');

// A key is an opaque token from PostHog and goes into a JavaScript string, so
// it is checked rather than escaped: anything that is not a plain token is
// treated as unset rather than written into the file.
const clean = /^[A-Za-z0-9_-]+$/.test(key) ? key : '';
if (key && !clean) {
  console.warn('analytics: NEXT_PUBLIC_POSTHOG_KEY is not a plain token, ignoring it');
}

const file = `/* Generated at build time by scripts/build-analytics-config.js.
 * Edits here are overwritten on the next deploy.
 */
window.DGC_ANALYTICS = {
  posthogKey: ${JSON.stringify(clean)},
  apiHost: ${JSON.stringify(apiHost)},
  assetHost: ${JSON.stringify(assetHost)},
};
`;

fs.writeFileSync(OUT, file);
console.log(
  clean
    ? 'analytics: wrote js/analytics-config.js with a key, host ' + apiHost
    : 'analytics: wrote js/analytics-config.js with no key — the page will not ask for consent or load PostHog'
);
