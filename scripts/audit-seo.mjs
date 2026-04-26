import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import {
  SEO_LOCALES,
  getSeoRouteGroups,
  getPrerenderRoutes,
  htmlLangForLocale,
  localeForPath,
  urlForPath,
} from './seo-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const EXPORT_DIR = join(PROJECT_ROOT, 'out');

const checks = [];

function record(name, passed, detail = '') {
  checks.push({ name, passed, detail });
}

function routeHtmlPath(route) {
  if (route === '/') {
    return join(EXPORT_DIR, 'index.html');
  }

  const normalized = route.replace(/^\/+/, '');
  const candidates = [
    join(EXPORT_DIR, `${normalized}.html`),
    join(EXPORT_DIR, normalized, 'index.html'),
  ];

  return candidates.find((candidate) => existsSync(candidate)) ?? candidates[0];
}

function attr(tag, name) {
  return tag.match(new RegExp(`${name}="([^"]*)"`, 'i'))?.[1] ?? '';
}

function findTags(html, selectorRegex) {
  return [...html.matchAll(selectorRegex)].map((match) => match[0]);
}

function routeLabel(route) {
  return route === '/' ? '/' : route;
}

function comparableUrl(url) {
  return url === 'https://chrobox.net/' ? 'https://chrobox.net' : url;
}

function sameUrl(actual, expected) {
  return comparableUrl(actual) === comparableUrl(expected);
}

const routeToGroup = new Map();
for (const group of getSeoRouteGroups()) {
  for (const path of Object.values(group.paths)) {
    routeToGroup.set(path, group);
  }
}

for (const route of getPrerenderRoutes()) {
  const htmlPath = routeHtmlPath(route);
  const exists = existsSync(htmlPath);
  record(`${routeLabel(route)} has prerendered HTML`, exists);
  if (!exists) {
    continue;
  }

  const html = readFileSync(htmlPath, 'utf8');
  const expectedUrl = urlForPath(route);
  const group = routeToGroup.get(route);
  const expectedLocale = localeForPath(route);
  const expectedLang = htmlLangForLocale(expectedLocale);
  const canonicalTags = findTags(html, /<link\s+[^>]*rel="canonical"[^>]*>/gi);
  const descTags = findTags(html, /<meta\s+[^>]*name="description"[^>]*>/gi);
  const titleTags = [...html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi)];
  const htmlLang = html.match(/<html[^>]*\slang="([^"]+)"/i)?.[1];

  record(`${routeLabel(route)} has one title`, titleTags.length === 1, `${titleTags.length} found`);
  record(`${routeLabel(route)} has one meta description`, descTags.length === 1, `${descTags.length} found`);
  record(`${routeLabel(route)} has one canonical`, canonicalTags.length === 1, `${canonicalTags.length} found`);
  record(`${routeLabel(route)} canonical matches route`, sameUrl(attr(canonicalTags[0] ?? '', 'href'), expectedUrl), attr(canonicalTags[0] ?? '', 'href'));
  record(`${routeLabel(route)} html lang matches route`, htmlLang === expectedLang, htmlLang ?? 'missing');

  const alternates = findTags(html, /<link\s+[^>]*rel="alternate"[^>]*hreflang="[^"]+"[^>]*>/gi);
  const alternateMap = new Map(alternates.map((tag) => [attr(tag, 'hreflang'), attr(tag, 'href')]));
  for (const locale of SEO_LOCALES) {
    record(
      `${routeLabel(route)} has ${locale.code} hreflang`,
      sameUrl(alternateMap.get(locale.code) ?? '', urlForPath(group.paths[locale.code])),
      alternateMap.get(locale.code) ?? 'missing',
    );
  }
  record(`${routeLabel(route)} has x-default hreflang`, sameUrl(alternateMap.get('x-default') ?? '', urlForPath(group.enPath)), alternateMap.get('x-default') ?? 'missing');

  for (const key of ['og:title', 'og:description', 'og:url', 'twitter:title', 'twitter:description']) {
    const metaTags = key.startsWith('og:')
      ? findTags(html, new RegExp(`<meta\\s+[^>]*property="${key}"[^>]*>`, 'gi'))
      : findTags(html, new RegExp(`<meta\\s+[^>]*name="${key}"[^>]*>`, 'gi'));
    record(`${routeLabel(route)} has one ${key}`, metaTags.length === 1, `${metaTags.length} found`);
  }

  const ogUrl = attr(findTags(html, /<meta\s+[^>]*property="og:url"[^>]*>/gi)[0] ?? '', 'content');
  record(`${routeLabel(route)} og:url matches route`, sameUrl(ogUrl, expectedUrl), ogUrl || 'missing');
  record(`${routeLabel(route)} has no meta keywords`, !/<meta\s+[^>]*name="keywords"[^>]*>/i.test(html));
  record(`${routeLabel(route)} has no localhost artifact`, !html.includes('localhost'));

  const imageTags = findTags(html, /<img\b[^>]*>/gi);
  const missingAlt = imageTags.filter((tag) => !/\salt=("|')/i.test(tag));
  record(`${routeLabel(route)} images have alt attributes`, missingAlt.length === 0, `${missingAlt.length} missing`);

  if (expectedLocale !== 'en') {
    const badLocalizedLinks = findTags(html, /<a\b[^>]*href="\/(blog|templates|compare)(\/|#|")/gi);
    record(`${routeLabel(route)} keeps internal links localized`, badLocalizedLinks.length === 0, `${badLocalizedLinks.length} unlocalized links`);
  }

  const jsonLdScripts = [...html.matchAll(/<script\s+[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  const invalidJsonLd = jsonLdScripts.filter((match) => {
    try {
      JSON.parse(match[1]);
      return false;
    } catch {
      return true;
    }
  });
  record(`${routeLabel(route)} JSON-LD is valid`, invalidJsonLd.length === 0, `${invalidJsonLd.length} invalid`);
}

const sitemapPath = join(EXPORT_DIR, 'sitemap.xml');
const sitemapExists = existsSync(sitemapPath);
record('static export sitemap exists', sitemapExists);
if (sitemapExists) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expectedUrls = getPrerenderRoutes().map(urlForPath);
  record('sitemap URL count matches route count', locs.length === expectedUrls.length, `${locs.length}/${expectedUrls.length}`);
  record('sitemap contains all canonical URLs', expectedUrls.every((url) => locs.some((loc) => sameUrl(loc, url))));
  record('sitemap has xhtml namespace', sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'));
  for (const locale of SEO_LOCALES) {
    record(`sitemap has ${locale.code} alternates`, sitemap.includes(`hreflang="${locale.code}"`));
  }
}

const robotsPath = join(EXPORT_DIR, 'robots.txt');
const robotsExists = existsSync(robotsPath);
record('robots.txt exists', robotsExists);
if (robotsExists) {
  const robots = readFileSync(robotsPath, 'utf8');
  record('robots.txt references sitemap', robots.includes('Sitemap: https://chrobox.net/sitemap.xml'));
}

const failed = checks.filter((check) => !check.passed);
const score = failed.length === 0 ? 10 : Math.max(0, Math.round(((checks.length - failed.length) / checks.length) * 10));

if (failed.length > 0) {
  console.error(`SEO audit score: ${score}/10`);
  for (const failure of failed) {
    console.error(`- ${failure.name}${failure.detail ? ` (${failure.detail})` : ''}`);
  }
  process.exit(1);
}

console.log(`SEO audit score: ${score}/10`);
console.log(`${checks.length} checks passed.`);
