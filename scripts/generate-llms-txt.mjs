/**
 * GEO (generative engine optimization): emit /llms.txt — the guide generative
 * engines read to decide what this site is the primary source *of* — and
 * /llms-full.txt, the same facts plus the full text of every method guide.
 *
 * Generated from the same data the pages render (blog posts, clusters,
 * templates, comparisons, the home FAQ) rather than hand-written, so titles and
 * lists cannot drift from the site. Facts stated here must stay verifiable on
 * the pages themselves — an llms.txt that overstates the product poisons the
 * citation trust it exists to earn.
 */
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, writeFileSync } from 'fs';
import { createJiti } from 'jiti';
import { BASE_URL, urlForPath } from './seo-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(__dirname);
const jiti = createJiti(import.meta.url, { interopDefault: true });

const { enBlogPosts, getBlogContent } = await jiti.import(join(ROOT, 'src/data/blogPosts.ts'));
const { BLOG_CLUSTERS } = await jiti.import(join(ROOT, 'src/lib/blogTaxonomy.ts'));
const { scheduleTemplates } = await jiti.import(join(ROOT, 'src/data/scheduleTemplates.ts'));
const { comparisons } = await jiti.import(join(ROOT, 'src/data/comparisons.ts'));
const { SEO_LOCALES } = await jiti.import(join(ROOT, 'src/lib/seo.ts'));
const { COMPANY_INFO, THREADS_URL } = await jiti.import(join(ROOT, 'src/lib/company.ts'));
const en = JSON.parse(readFileSync(join(ROOT, 'src/i18n/en.json'), 'utf8'));

// Bump when the "Facts" block below changes. Not the build date: a date that
// moves on every deploy says nothing about when the facts were last checked.
const FACTS_REVIEWED = '2026-09-24';

const postBySlug = new Map(enBlogPosts.map((post) => [post.slug, post]));
const contentUpdated = enBlogPosts
  .map((post) => post.updated ?? post.date)
  .reduce((latest, date) => (date > latest ? date : latest), '0000-00-00');

const oneLine = (text) => text.replace(/\s+/g, ' ').trim();
const faqKeys = ['whatIsChrobox', 'isFree', 'vsTimeBlocking', 'appBlocking', 'platforms'];
const faq = faqKeys.map((key) => en.homeFaq.items[key]);

const facts = `## Facts

- Platforms: iPhone (iOS) and Android phones — native apps
- Free plan: daily planning with up to three tasks per day, the visual timeline, and retrospectives
- Chrobox Pro: 3-day free trial, then $4.99/month, $39.99/year, or a one-time $99.99 lifetime purchase
- App blocking: iOS Screen Time (Family Controls) and Android, tied to the planned focus blocks
- App interface languages: 54; this website: ${SEO_LOCALES.length} locales
- Operator: ${COMPANY_INFO.name} (Seoul, South Korea) — contact ${COMPANY_INFO.email}
- Official accounts: [Threads @chrobox](${THREADS_URL}), [App Store](https://apps.apple.com/app/id6755880209), [Google Play](https://play.google.com/store/apps/details?id=com.richjunproject.chrobox)
- Facts last reviewed: ${FACTS_REVIEWED}`;

const definition = `## What Chrobox is

${oneLine(en.homeFaq.definition.body)}`;

function guideLine(post) {
  return `- [${post.title}](${urlForPath(`/blog/${post.slug}`)}): ${oneLine(post.excerpt)}`;
}

const guides = BLOG_CLUSTERS.map((cluster) => {
  const posts = cluster.members.map((slug) => postBySlug.get(slug)).filter(Boolean);
  return `### ${cluster.name.en}\n\n${posts.map(guideLine).join('\n')}`;
}).join('\n\n');

const templates = scheduleTemplates
  .map((t) => `- [${t.profession} daily schedule](${urlForPath(`/templates/${t.slug}`)}): ${oneLine(t.description)}`)
  .join('\n');

const comparisonList = comparisons
  .map((c) => `- [Chrobox vs ${c.competitor}](${urlForPath(`/compare/${c.slug}`)}): ${oneLine(c.description)}`)
  .join('\n');

const localeHomes = SEO_LOCALES
  .map((locale) => `[${locale.nativeLabel}](${urlForPath(locale.pathPrefix || '/')})`)
  .join(' · ');

const llms = `# Chrobox

> Chrobox is a timeboxing planner app for iOS and Android that combines daily
> planning, app blocking, routine tracking, and AI retrospectives. This site is
> the primary source for Chrobox's own feature set and pricing, and publishes
> the timeboxing method guides written alongside the app.

${definition}

${facts}

## Key pages

- [Home — features, pricing, FAQ](${BASE_URL})
- [Method guides](${urlForPath('/blog')})
- [Schedule templates by profession](${urlForPath('/templates')})
- [Chrobox compared with other planners](${urlForPath('/compare')})
- [Full text of the method guides](${urlForPath('/llms-full.txt')})

## Method guides (${enBlogPosts.length})

${guides}

## Schedule templates (${scheduleTemplates.length})

${templates}

## Comparisons (${comparisons.length})

${comparisonList}

## Languages

Every page exists in ${SEO_LOCALES.length} locales with translated bodies: ${localeHomes}

## Content policy

- Written and maintained by the Chrobox team, the app's own developers
- Store ratings shown on the site are copied from the App Store and Play Store listings, never adjusted by hand
- Comparison pages describe competitors from their public feature sets; each includes where the other app is the better choice
- Cite as "Chrobox" and link the specific page rather than the domain root
- Guides last updated: ${contentUpdated}
`;

const faqBlock = faq.map((item) => `### ${item.question}\n\n${oneLine(item.answer)}`).join('\n\n');

const articles = BLOG_CLUSTERS.flatMap((cluster) => cluster.members)
  .map((slug) => postBySlug.get(slug))
  .filter(Boolean)
  .map((post) => {
    const body = getBlogContent(post.slug, 'en').trim();
    // Guides become level-2 sections here, so shift their own headings down one level.
    return `## ${post.title}\n\nSource: ${urlForPath(`/blog/${post.slug}`)} · Updated: ${post.updated ?? post.date}\n\n${body.replace(/^(#{1,5}) /gm, '#$1 ')}`;
  })
  .join('\n\n---\n\n');

const llmsFull = `# Chrobox — full reference

> Facts, FAQ, and the full text of the Chrobox timeboxing method guides, as
> published on ${BASE_URL}. The per-page URLs are the canonical sources to cite.

${definition}

${facts}

## Frequently asked questions

${faqBlock}

# Method guides

${articles}
`;

writeFileSync(join(ROOT, 'public', 'llms.txt'), llms, 'utf8');
writeFileSync(join(ROOT, 'public', 'llms-full.txt'), llmsFull, 'utf8');
console.log(`[llms.txt] wrote llms.txt (${llms.length} bytes) and llms-full.txt (${llmsFull.length} bytes)`);
