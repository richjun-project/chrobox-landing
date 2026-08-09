import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync } from 'fs';
import { BASE_URL, SEO_LOCALES, getSeoRouteGroups, urlForPath } from './seo-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const SITEMAP_PATH = join(PROJECT_ROOT, 'public', 'sitemap.xml');

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function renderUrlEntry(path, group) {
  const alternates = [
    ...SEO_LOCALES.map((locale) => [locale.code, urlForPath(group.paths[locale.code])]),
    ['x-default', urlForPath(group.enPath)],
  ];

  return `  <url>
    <loc>${escapeXml(urlForPath(path))}</loc>
    <lastmod>${group.lastmod}</lastmod>
    <changefreq>${group.changefreq}</changefreq>
    <priority>${group.priority}</priority>
${alternates.map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(href)}"/>`).join('\n')}
  </url>`;
}

// One sitemap per section instead of a single 3.5 MB file. Each URL carries 21
// hreflang alternates, so a flat sitemap grows ~2.4 KB per URL; splitting keeps
// each file small enough for Search Console to report per-section coverage.
const SECTION_ORDER = ['pages', 'categories', 'blog', 'templates', 'compare'];

const groupsBySection = new Map(SECTION_ORDER.map((section) => [section, []]));
for (const group of getSeoRouteGroups()) {
  const section = groupsBySection.has(group.section) ? group.section : 'pages';
  groupsBySection.get(section).push(group);
}

function renderUrlset(groups) {
  const body = groups
    .flatMap((group) => Object.values(group.paths).map((path) => renderUrlEntry(path, group)))
    .join('\n\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${body}

</urlset>
`;
}

const sections = [];
for (const section of SECTION_ORDER) {
  const groups = groupsBySection.get(section);
  if (!groups.length) continue;

  const filename = `sitemap-${section}.xml`;
  const path = join(PROJECT_ROOT, 'public', filename);
  writeFileSync(path, renderUrlset(groups));

  const lastmod = groups.reduce((latest, group) => (group.lastmod > latest ? group.lastmod : latest), '0000-00-00');
  const urlCount = groups.reduce((sum, group) => sum + Object.keys(group.paths).length, 0);
  sections.push({ filename, lastmod, urlCount });
  console.log(`Generated public/${filename} (${urlCount} URLs)`);
}

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sections
  .map((section) => `  <sitemap>
    <loc>${escapeXml(`${BASE_URL}/${section.filename}`)}</loc>
    <lastmod>${section.lastmod}</lastmod>
  </sitemap>`)
  .join('\n')}
</sitemapindex>
`;

writeFileSync(SITEMAP_PATH, index);
console.log(`Generated ${SITEMAP_PATH} (index of ${sections.length} sitemaps, ${sections.reduce((sum, s) => sum + s.urlCount, 0)} URLs)`);
