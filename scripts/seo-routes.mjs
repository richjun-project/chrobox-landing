import { existsSync, readFileSync, readdirSync, statSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const BASE_URL = 'https://chrobox.net';

const ALL_SEO_LOCALES = [
  { code: 'en', pathPrefix: '', htmlLang: 'en' },
  { code: 'ko', pathPrefix: '/ko', htmlLang: 'ko' },
  { code: 'ja', pathPrefix: '/ja', htmlLang: 'ja' },
  { code: 'zh-CN', pathPrefix: '/zh-cn', htmlLang: 'zh-CN' },
  { code: 'zh-TW', pathPrefix: '/zh-tw', htmlLang: 'zh-TW' },
  { code: 'es', pathPrefix: '/es', htmlLang: 'es' },
  { code: 'fr', pathPrefix: '/fr', htmlLang: 'fr' },
  { code: 'de', pathPrefix: '/de', htmlLang: 'de' },
  { code: 'pt-BR', pathPrefix: '/pt-br', htmlLang: 'pt-BR' },
  { code: 'it', pathPrefix: '/it', htmlLang: 'it' },
  { code: 'nl', pathPrefix: '/nl', htmlLang: 'nl' },
  { code: 'pl', pathPrefix: '/pl', htmlLang: 'pl' },
  { code: 'tr', pathPrefix: '/tr', htmlLang: 'tr' },
  { code: 'id', pathPrefix: '/id', htmlLang: 'id' },
  { code: 'vi', pathPrefix: '/vi', htmlLang: 'vi' },
  { code: 'th', pathPrefix: '/th', htmlLang: 'th' },
  { code: 'hi', pathPrefix: '/hi', htmlLang: 'hi' },
  { code: 'ar', pathPrefix: '/ar', htmlLang: 'ar' },
  { code: 'ru', pathPrefix: '/ru', htmlLang: 'ru' },
  { code: 'ms', pathPrefix: '/ms', htmlLang: 'ms' },
];

const INDEXABLE_LOCALE_CODES = new Set(['en', 'ko']);
export const SEO_LOCALES = ALL_SEO_LOCALES.filter((locale) => INDEXABLE_LOCALE_CODES.has(locale.code));

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

function discoverBlogSources() {
  const dataDir = join(PROJECT_ROOT, 'src', 'data');
  const blogBatchSources = readdirSync(dataDir)
    .filter((filename) => /^blogBatch\d+\.ts$/.test(filename))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((filename) => `src/data/${filename}`);

  return ['src/data/blogPosts.ts', ...blogBatchSources];
}

const BLOG_SOURCES = discoverBlogSources();

const TEMPLATE_SOURCE = 'src/data/scheduleTemplates.ts';
const COMPARISON_SOURCE = 'src/data/comparisons.ts';
const TAXONOMY_SOURCE = 'src/lib/blogTaxonomy.ts';

function readProjectFile(relativePath) {
  const absolutePath = join(PROJECT_ROOT, relativePath);
  if (!existsSync(absolutePath)) {
    throw new Error(`Missing SEO source file: ${relativePath}`);
  }
  return readFileSync(absolutePath, 'utf8');
}

function extractSlugs(relativePaths) {
  const slugs = new Set();

  for (const relativePath of relativePaths) {
    const source = readProjectFile(relativePath);
    const matches = source.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g);

    for (const match of matches) {
      slugs.add(match[1]);
    }
  }

  return [...slugs];
}

function extractCategorySlugs() {
  const source = readProjectFile(TAXONOMY_SOURCE);
  const slugs = [];
  const clusterStartRegex = /\bid:\s*['"`][\w-]+['"`]/g;
  for (const match of source.matchAll(clusterStartRegex)) {
    const after = source.slice(match.index, match.index + 400);
    const slugMatch = after.match(/slug:\s*['"`]([^'"`]+)['"`]/);
    if (slugMatch) {
      slugs.push(slugMatch[1]);
    }
  }
  return [...new Set(slugs)];
}

function latestSourceDate(relativePaths) {
  const latestMs = Math.max(
    ...relativePaths.map((relativePath) => statSync(join(PROJECT_ROOT, relativePath)).mtimeMs),
  );

  return new Date(latestMs).toISOString().slice(0, 10);
}

function normalizedEnglishPath(path) {
  if (!path || path === '/') {
    return '/';
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized.length > 1 && normalized.endsWith('/')
    ? normalized.slice(0, -1)
    : normalized;
}

export function localizedPath(localeCode, englishPath) {
  const locale = SEO_LOCALES.find((item) => item.code === localeCode) ?? SEO_LOCALES[0];
  const path = normalizedEnglishPath(englishPath);

  if (!locale.pathPrefix) {
    return path;
  }

  return path === '/' ? locale.pathPrefix : `${locale.pathPrefix}${path}`;
}

function pathMap(enPath) {
  return Object.fromEntries(
    SEO_LOCALES.map((locale) => [locale.code, localizedPath(locale.code, enPath)]),
  );
}

function routeGroup(enPath, options = {}) {
  const paths = pathMap(enPath);

  return {
    enPath,
    koPath: paths.ko,
    paths,
    changefreq: options.changefreq ?? 'monthly',
    priority: options.priority ?? '0.8',
    lastmod: options.lastmod ?? latestSourceDate([
      ...BLOG_SOURCES,
      TEMPLATE_SOURCE,
      COMPARISON_SOURCE,
      'src/screens/Home.tsx',
    ]),
  };
}

export function urlForPath(path) {
  return path === '/' ? `${BASE_URL}/` : `${BASE_URL}${path}`;
}

export function localeForPath(path) {
  const normalized = normalizedEnglishPath(path);
  const segment = normalized.split('/').filter(Boolean)[0];

  return SEO_LOCALES.find((locale) => locale.pathPrefix.slice(1).toLowerCase() === segment?.toLowerCase())?.code ?? 'en';
}

export function htmlLangForLocale(localeCode) {
  return (SEO_LOCALES.find((locale) => locale.code === localeCode) ?? SEO_LOCALES[0]).htmlLang;
}

export function getSeoRouteGroups() {
  const blogLastmod = latestSourceDate(BLOG_SOURCES);
  const templateLastmod = latestSourceDate([TEMPLATE_SOURCE, 'src/screens/ScheduleTemplate.tsx']);
  const comparisonLastmod = latestSourceDate([COMPARISON_SOURCE, 'src/screens/ComparisonPage.tsx']);
  const siteLastmod = latestSourceDate([
    'src/screens/Home.tsx',
    'src/app/page.tsx',
    'src/app/[locale]/page.tsx',
    'src/components/Hero.tsx',
    'src/i18n/en.json',
    'src/i18n/ko.json',
  ]);

  const groups = [
    routeGroup('/', { changefreq: 'weekly', priority: '1.0', lastmod: siteLastmod }),
    routeGroup('/blog', { changefreq: 'weekly', priority: '0.9', lastmod: blogLastmod }),
    ...extractCategorySlugs().map((slug) => (
      routeGroup(`/blog/category/${slug}`, { changefreq: 'weekly', priority: '0.85', lastmod: blogLastmod })
    )),
    ...extractSlugs(BLOG_SOURCES).map((slug) => (
      routeGroup(`/blog/${slug}`, { changefreq: 'monthly', priority: '0.8', lastmod: blogLastmod })
    )),
    routeGroup('/templates', { changefreq: 'weekly', priority: '0.9', lastmod: templateLastmod }),
    ...extractSlugs([TEMPLATE_SOURCE]).map((slug) => (
      routeGroup(`/templates/${slug}`, { changefreq: 'monthly', priority: '0.8', lastmod: templateLastmod })
    )),
    routeGroup('/compare', { changefreq: 'monthly', priority: '0.85', lastmod: comparisonLastmod }),
    ...extractSlugs([COMPARISON_SOURCE]).map((slug) => (
      routeGroup(`/compare/${slug}`, { changefreq: 'monthly', priority: '0.8', lastmod: comparisonLastmod })
    )),
  ];

  const seen = new Set();
  return groups.filter((group) => {
    const key = `${group.enPath}|${group.koPath}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

export function getPrerenderRoutes() {
  return getSeoRouteGroups().flatMap((group) => Object.values(group.paths));
}
