/**
 * NEO/GEO: emit one RSS 2.0 feed of the method guides per locale
 * (/rss.xml, /ko/rss.xml, …). Naver Search Advisor accepts an RSS feed next to
 * the sitemap and uses it to pick up new posts; feed readers and AI crawlers
 * use it for discovery. Built from the same localized post data the pages
 * render, so titles and summaries match the pages.
 *
 * Dates are the posts' own dates (updated ?? date), never the build time — a
 * feed whose lastBuildDate moves on every deploy looks like churn.
 */
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createJiti } from 'jiti';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(__dirname);
const jiti = createJiti(import.meta.url, { interopDefault: true });

const { getBlogPosts } = await jiti.import(join(ROOT, 'src/data/blogPosts.ts'));
const { SEO_LOCALES, absoluteUrl, contentLanguageForLocale, localizedPath, seoCopy } = await jiti.import(
  join(ROOT, 'src/lib/seo.ts'),
);
const { clusterCategoryName } = await jiti.import(join(ROOT, 'src/lib/blogTaxonomy.ts'));

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const rfc822 = (isoDate) => new Date(`${isoDate}T00:00:00Z`).toUTCString();
const postDate = (post) => [post.date, post.updated].filter(Boolean).sort().pop();

let written = 0;

for (const locale of SEO_LOCALES) {
  const lang = contentLanguageForLocale(locale.code);
  const copy = seoCopy(locale.code);
  const posts = [...getBlogPosts(lang)].sort((a, b) => b.date.localeCompare(a.date));
  const feedPath = localizedPath(locale.code, '/rss.xml');
  const latest = posts.map(postDate).sort().pop();

  const items = posts
    .map((post) => {
      const url = absoluteUrl(localizedPath(locale.code, `/blog/${post.slug}`));
      // clusterCategoryName resolves by *post* slug (cluster membership).
      const category = clusterCategoryName(post.slug, lang);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(post.date)}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>${category ? `\n      <category>${escapeXml(category)}</category>` : ''}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(copy.blogTitle)}</title>
    <link>${absoluteUrl(localizedPath(locale.code, '/blog'))}</link>
    <description>${escapeXml(copy.blogDescription)}</description>
    <language>${locale.htmlLang}</language>
    <lastBuildDate>${rfc822(latest)}</lastBuildDate>
    <atom:link href="${absoluteUrl(feedPath)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  const outPath = join(ROOT, 'public', feedPath.replace(/^\//, ''));
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, xml, 'utf8');
  written += 1;
}

console.log(`[feeds] wrote ${written} RSS feeds (public/rss.xml, public/<locale>/rss.xml)`);
