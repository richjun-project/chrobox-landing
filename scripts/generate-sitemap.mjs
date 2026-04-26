import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync } from 'fs';
import { SEO_LOCALES, getSeoRouteGroups, urlForPath } from './seo-routes.mjs';

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

const body = getSeoRouteGroups()
  .flatMap((group) => Object.values(group.paths).map((path) => renderUrlEntry(path, group)))
  .join('\n\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${body}

</urlset>
`;

writeFileSync(SITEMAP_PATH, sitemap);
console.log(`Generated ${SITEMAP_PATH}`);
