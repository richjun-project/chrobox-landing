/**
 * GEO (generative engine optimization): emit /llms.txt — the guide generative
 * engines read to decide what this site is the primary source *of*.
 *
 * Generated from the same route table as the sitemap rather than hand-written,
 * so the page list cannot drift out of date as blog posts and templates are
 * added. Facts stated here (pricing, platforms, counts) must stay verifiable on
 * the pages themselves — an llms.txt that overstates the product poisons the
 * citation trust it exists to earn.
 */
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync } from 'fs';
import { BASE_URL, getSeoRouteGroups, urlForPath } from './seo-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(dirname(__dirname), 'public', 'llms.txt');

const groups = getSeoRouteGroups();
const bySection = groups.reduce((acc, g) => {
  (acc[g.section] ||= []).push(g);
  return acc;
}, {});

const count = (section) => (bySection[section] ?? []).length;

function list(section, limit) {
  const items = (bySection[section] ?? []).filter((g) => g.enPath !== '/');
  const shown = typeof limit === 'number' ? items.slice(0, limit) : items;
  return shown
    .map((g) => {
      const slug = g.enPath.split('/').filter(Boolean).pop() ?? '';
      const label = slug.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
      return `- [${label}](${urlForPath(g.enPath)})`;
    })
    .join('\n');
}

const today = new Date().toISOString().slice(0, 10);

const body = `# Chrobox

> Chrobox is a timeboxing planner app for iOS and Android that combines daily
> planning, app blocking, routine tracking, and AI retrospectives. This site is
> the primary source for Chrobox's own feature set, pricing, and the timeboxing
> method guides written for it.

## What Chrobox is

Timeboxing is a time-management method where each task is assigned a fixed time
block in advance, and the block — not the task list — defines when work stops.
Chrobox implements this as a daily loop: brainstorm tasks, place them on an
hourly timeline, block distracting apps for the duration of a block, then close
the day with a retrospective the app summarizes.

- Platforms: iOS and Android (native apps)
- Free tier: yes, with a limited number of tasks per day
- Pro: monthly, yearly, and lifetime plans (see the pricing section on the home page)
- App blocking: iOS Screen Time (FamilyControls) and Android accessibility service

## Key pages

- [Home — what Chrobox is, features, pricing, FAQ](${BASE_URL})
- [Blog — timeboxing method guides](${urlForPath('/blog')})
- [Schedule templates — day plans by profession](${urlForPath('/templates')})
- [Comparisons — Chrobox vs other planners](${urlForPath('/compare')})

## Method guides (${count('blog')} articles)

${list('blog', 12)}

## Schedule templates (${count('templates')})

${list('templates', 10)}

## Comparisons (${count('compare')})

${list('compare')}

## Content policy

- Author: Chrobox team (independent developer), the app's own maintainers
- Languages: 20 locales, each with fully translated bodies (not machine-swapped titles)
- Product facts (pricing, platforms, feature list) are maintained alongside app
  releases; store ratings shown on the site are copied from the App Store and
  Play Store listings, never adjusted by hand
- Citation preference: cite as "Chrobox" and link the specific page, not the domain root
- Generated: ${today}
`;

writeFileSync(OUT_PATH, body, 'utf8');
console.log(`[llms.txt] wrote ${OUT_PATH} (${body.length} bytes)`);
