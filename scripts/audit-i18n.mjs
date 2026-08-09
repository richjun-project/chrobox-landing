/**
 * Reports localization coverage per locale: how much of the corpus is actually
 * translated versus falling back to English. Run after `npm run i18n:translate`.
 *
 *   node scripts/audit-i18n.mjs
 */
import { createJiti } from 'jiti';

const jiti = createJiti(import.meta.url, { interopDefault: true });
const ROOT = new URL('..', import.meta.url).pathname;

const { SEO_LOCALES } = await jiti.import(`${ROOT}src/lib/seo.ts`);
const { enBlogPosts, blogContents } = await jiti.import(`${ROOT}src/data/blogPosts.ts`);
const { comparisons } = await jiti.import(`${ROOT}src/data/comparisons.ts`);
const { scheduleTemplates } = await jiti.import(`${ROOT}src/data/scheduleTemplates.ts`);
const { BLOG_CLUSTERS } = await jiti.import(`${ROOT}src/lib/blogTaxonomy.ts`);
const { EN_UI_COPY } = await jiti.import(`${ROOT}src/lib/uiCopy.ts`);
const { LOCALIZED_CONTENT } = await jiti.import(`${ROOT}src/data/localized/index.ts`);
const { UI_COPY_TRANSLATIONS } = await jiti.import(`${ROOT}src/data/localized/uiCopy.ts`);

const totals = {
  comparisons: comparisons.length,
  blogPosts: enBlogPosts.length,
  blogContents: Object.keys(blogContents.en ?? {}).length,
  templates: scheduleTemplates.length,
  clusters: BLOG_CLUSTERS.length,
  ui: Object.keys(EN_UI_COPY).length,
};

const targets = SEO_LOCALES.map((locale) => locale.code).filter((code) => code !== 'en' && code !== 'ko');

const header = ['locale', 'cmp', 'meta', 'body', 'tpl', 'cat', 'ui', 'coverage'];
console.log(header.map((h, i) => (i ? h.padStart(8) : h.padEnd(7))).join(''));

let worst = [];
for (const locale of targets) {
  const pack = LOCALIZED_CONTENT[locale];
  const counts = {
    comparisons: Object.keys(pack?.comparisons ?? {}).length,
    blogPosts: Object.keys(pack?.blogPosts ?? {}).length,
    blogContents: Object.keys(pack?.blogContents ?? {}).length,
    templates: Object.keys(pack?.templates ?? {}).length,
    clusters: Object.keys(pack?.clusters ?? {}).length,
    ui: Object.keys(UI_COPY_TRANSLATIONS[locale] ?? {}).length,
  };

  const done = Object.values(counts).reduce((a, b) => a + b, 0);
  const total = Object.values(totals).reduce((a, b) => a + b, 0);
  const pct = Math.round((done / total) * 100);

  const cells = [
    `${counts.comparisons}/${totals.comparisons}`,
    `${counts.blogPosts}/${totals.blogPosts}`,
    `${counts.blogContents}/${totals.blogContents}`,
    `${counts.templates}/${totals.templates}`,
    `${counts.clusters}/${totals.clusters}`,
    `${counts.ui}/${totals.ui}`,
    `${pct}%`,
  ];
  console.log(locale.padEnd(7) + cells.map((c) => c.padStart(8)).join(''));

  if (pct < 100) worst.push({ locale, pct, counts });
}

console.log('');
if (!worst.length) {
  console.log('모든 로케일 100% 번역 완료');
} else {
  console.log(`미완료 로케일 ${worst.length}개:`);
  for (const { locale, pct, counts } of worst.sort((a, b) => a.pct - b.pct)) {
    const gaps = Object.entries(counts)
      .filter(([key, value]) => value < totals[key])
      .map(([key, value]) => `${key} ${value}/${totals[key]}`)
      .join(', ');
    console.log(`  ${locale} ${pct}% — ${gaps}`);
  }
  process.exitCode = 1;
}
