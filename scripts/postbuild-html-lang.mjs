import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, relative } from 'path';
import { SEO_LOCALES } from './seo-routes.mjs';

const OUT_DIR = join(process.cwd(), 'out');

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function localeForOutputFile(filePath) {
  const relativePath = relative(OUT_DIR, filePath).replaceAll('\\', '/');

  for (const locale of SEO_LOCALES) {
    const segment = locale.pathPrefix.slice(1);

    if (!segment) {
      continue;
    }

    if (relativePath === `${segment}.html` || relativePath.startsWith(`${segment}/`)) {
      return locale;
    }
  }

  return SEO_LOCALES[0];
}

if (!existsSync(OUT_DIR)) {
  throw new Error(`Missing static export directory: ${OUT_DIR}`);
}

let updated = 0;

for (const filePath of walk(OUT_DIR)) {
  if (!filePath.endsWith('.html')) {
    continue;
  }

  const locale = localeForOutputFile(filePath);
  const html = readFileSync(filePath, 'utf8');
  const nextHtml = html.replace(/<html lang="[^"]*"/, `<html lang="${locale.htmlLang}"`);

  if (nextHtml !== html) {
    writeFileSync(filePath, nextHtml);
    updated += 1;
  }
}

console.log(`Updated html lang on ${updated} exported HTML files.`);
