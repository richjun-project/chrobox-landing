/**
 * Translates the English content corpus into every non-English site locale and
 * writes one localized content pack per locale.
 *
 * Usage:
 *   GEMINI_API_KEY=... node scripts/i18n-translate.mjs                # all locales
 *   GEMINI_API_KEY=... node scripts/i18n-translate.mjs fr it nl       # subset
 *   GEMINI_API_KEY=... node scripts/i18n-translate.mjs --kinds=ui     # subset of kinds
 *
 * Every translated unit is cached under scripts/.i18n-cache/<locale>/<kind>/<id>.json,
 * so re-running only fills gaps. Delete a cache file to force a retranslation.
 */
import { createJiti } from 'jiti';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CACHE_DIR = join(__dirname, '.i18n-cache');
const PACK_DIR = join(ROOT, 'src', 'data', 'localized');

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || 'gemini-3.5-flash';
const CONCURRENCY = Number(process.env.I18N_CONCURRENCY || 5);
const MAX_ATTEMPTS = 5;
const REQUEST_TIMEOUT_MS = Number(process.env.I18N_TIMEOUT_MS || 180000);

if (!API_KEY) {
  console.error('GEMINI_API_KEY is required.');
  process.exit(1);
}

const jiti = createJiti(import.meta.url, { interopDefault: true });

const { SEO_LOCALES } = await jiti.import(`${ROOT}/src/lib/seo.ts`);
const { enBlogPosts, blogContents } = await jiti.import(`${ROOT}/src/data/blogPosts.ts`);
const { comparisons } = await jiti.import(`${ROOT}/src/data/comparisons.ts`);
const { scheduleTemplates } = await jiti.import(`${ROOT}/src/data/scheduleTemplates.ts`);
const { BLOG_CLUSTERS } = await jiti.import(`${ROOT}/src/lib/blogTaxonomy.ts`);
const { EN_UI_COPY } = await jiti.import(`${ROOT}/src/lib/uiCopy.ts`);

const LANGUAGE_NAMES = {
  ja: 'Japanese',
  'zh-CN': 'Simplified Chinese (Mainland China)',
  'zh-TW': 'Traditional Chinese (Taiwan)',
  es: 'Spanish (Spain)',
  fr: 'French (France)',
  de: 'German (Germany)',
  'pt-BR': 'Brazilian Portuguese',
  it: 'Italian',
  nl: 'Dutch',
  pl: 'Polish',
  tr: 'Turkish',
  id: 'Indonesian',
  vi: 'Vietnamese',
  th: 'Thai',
  hi: 'Hindi',
  ar: 'Arabic (Modern Standard)',
  ru: 'Russian',
  ms: 'Malay',
};

const args = process.argv.slice(2);
const kindFilter = args
  .filter((arg) => arg.startsWith('--kinds='))
  .flatMap((arg) => arg.slice('--kinds='.length).split(','))
  .filter(Boolean);
const localeArgs = args.filter((arg) => !arg.startsWith('--'));

const ALL_TARGETS = SEO_LOCALES
  .map((locale) => locale.code)
  .filter((code) => code !== 'en' && code !== 'ko');
const targets = localeArgs.length ? localeArgs : ALL_TARGETS;

for (const target of targets) {
  if (!LANGUAGE_NAMES[target]) {
    console.error(`Unknown target locale: ${target}`);
    process.exit(1);
  }
}

/* ------------------------------------------------------------------ corpus */

const GLOSSARY = `
Brand and product names that must stay in Latin script exactly as written:
Chrobox, Todoist, Notion, TickTick, Google Calendar, Google Play, App Store,
Sunsama, Motion, Outlook, iOS, Android, Screen Time, Family Controls, GitHub.
Keep "AI" as-is unless the target language has a universally used equivalent.
`.trim();

function unitsFor(kind) {
  switch (kind) {
    case 'ui':
      return [{ id: 'ui', payload: EN_UI_COPY }];
    case 'clusters':
      return BLOG_CLUSTERS.map((cluster) => ({
        id: cluster.slug,
        payload: {
          name: cluster.name.en,
          description: cluster.description.en,
          intro: cluster.intro.en,
        },
      }));
    case 'templates':
      return scheduleTemplates.map((template) => ({
        id: template.slug,
        payload: {
          profession: template.profession,
          description: template.description,
          tips: template.tips,
          scheduleTasks: template.schedule.map((block) => block.task),
        },
      }));
    case 'comparisons':
      return comparisons.map((comparison) => ({
        id: comparison.slug,
        payload: {
          competitor: comparison.competitor,
          tagline: comparison.tagline,
          description: comparison.description,
          metaDescription: comparison.metaDescription ?? comparison.description,
          featureNames: comparison.features.map((feature) => feature.name),
          chroboxPros: comparison.chroboxPros,
          competitorPros: comparison.competitorPros,
          verdict: comparison.verdict,
          faqs: (comparison.faqs ?? []).map((faq) => ({ question: faq.question, answer: faq.answer })),
        },
      }));
    case 'blogMeta':
      return enBlogPosts.map((post) => ({
        id: post.slug,
        payload: {
          title: post.title,
          excerpt: post.excerpt,
          faqs: (post.faqs ?? []).map((faq) => ({ question: faq.question, answer: faq.answer })),
        },
      }));
    case 'blogBodies':
      return Object.entries(blogContents.en ?? {}).map(([slug, markdown]) => ({
        id: slug,
        payload: { markdown },
      }));
    default:
      throw new Error(`Unknown kind: ${kind}`);
  }
}

const ALL_KINDS = ['ui', 'clusters', 'templates', 'comparisons', 'blogMeta', 'blogBodies'];
const kinds = kindFilter.length ? kindFilter : ALL_KINDS;

const KIND_INSTRUCTIONS = {
  ui: 'These are short UI labels for a productivity web app (breadcrumbs, buttons, section headings). Keep them short enough to fit a button or badge — never translate into a full sentence. "min" and "min read" are duration abbreviations shown next to a number. "article"/"articles" are singular/plural nouns shown after a count; if the language has no plural distinction use the same word for both.',
  clusters: 'This is a blog category page: a short name, a one-line description, and an array of long introduction paragraphs. Preserve the paragraph count and order exactly. Write the intro as a native marketing writer would — natural, specific, and not a word-for-word calque.',
  templates: 'This is a daily schedule template for one profession. `scheduleTasks` are calendar block labels shown in a timeline; keep them terse (2-8 words), imperative or noun phrases, never full sentences. Preserve array order and length exactly.',
  comparisons: 'This is a product comparison page. `featureNames` are table row labels: keep them short noun phrases. Preserve every array order and length exactly. Stay factual and neutral about the competitor.',
  blogMeta: 'This is blog post metadata. The title is an SEO headline — make it read like a native headline in the target language, keep it under roughly 60 half-width characters (about 30 characters for CJK), and keep the main keyword near the front. The excerpt is a meta description.',
  blogBodies: 'This is a full blog article in Markdown. Preserve the Markdown structure exactly: heading levels, list markers, bold/italic, tables, blockquotes, code spans and link syntax. Translate link text but never the URLs. Keep numbers, times and units. Do not add or remove sections. Localize idioms rather than translating them literally.',
};

/* -------------------------------------------------------------- gemini call */

const ENDPOINT = (model) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * The model occasionally wraps the object in a code fence or appends a stray
 * sentence after it, which makes a plain JSON.parse fail on otherwise good
 * translations. Extract the first balanced top-level object and parse that.
 */
function parseJsonObject(text) {
  const unfenced = text.replace(/^\s*```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();

  try {
    return JSON.parse(unfenced);
  } catch (error) {
    const start = unfenced.indexOf('{');
    if (start === -1) throw error;

    let depth = 0;
    let inString = false;
    let escaped = false;

    for (let index = start; index < unfenced.length; index += 1) {
      const char = unfenced[index];

      if (escaped) { escaped = false; continue; }
      if (char === '\\') { escaped = true; continue; }
      if (char === '"') { inString = !inString; continue; }
      if (inString) continue;

      if (char === '{') depth += 1;
      else if (char === '}') {
        depth -= 1;
        if (depth === 0) return JSON.parse(unfenced.slice(start, index + 1));
      }
    }

    throw error;
  }
}

async function callGemini(prompt) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(ENDPOINT(MODEL), {
        method: 'POST',
        // Without a deadline a stalled connection hangs the whole worker slot.
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        headers: { 'x-goog-api-key': API_KEY, 'content-type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 32768,
            responseMimeType: 'application/json',
          },
        }),
      });

      if (response.status === 429 || response.status === 503 || response.status >= 500) {
        throw new Error(`retryable HTTP ${response.status}`);
      }

      const json = await response.json();

      if (json.error) {
        throw new Error(`${json.error.status}: ${json.error.message}`);
      }

      const candidate = json.candidates?.[0];
      const text = (candidate?.content?.parts ?? [])
        .map((part) => part.text ?? '')
        .join('')
        .trim();

      if (!text) {
        throw new Error(`empty response (finishReason=${candidate?.finishReason})`);
      }

      return parseJsonObject(text);
    } catch (error) {
      lastError = error;
      if (attempt < MAX_ATTEMPTS) {
        await sleep(1500 * attempt * attempt);
      }
    }
  }

  throw lastError;
}

function buildPrompt(kind, locale, payload) {
  return [
    `You are a professional localizer translating marketing and editorial content for Chrobox, an AI timeboxing planner and app blocker, from English into ${LANGUAGE_NAMES[locale]}.`,
    '',
    KIND_INSTRUCTIONS[kind],
    '',
    GLOSSARY,
    '',
    'Rules:',
    '- Return ONLY a JSON object with exactly the same keys and array lengths as the input.',
    '- Translate every string value. Never leave English text in a value unless it is a brand name from the glossary.',
    '- Do not add keys, comments, or explanations.',
    '- Write for a native reader: idiomatic, specific, and free of translationese.',
    '',
    'Input JSON:',
    JSON.stringify(payload, null, 2),
  ].join('\n');
}

/* ------------------------------------------------------------ shape checking */

function sameShape(source, translated) {
  if (Array.isArray(source)) {
    return Array.isArray(translated)
      && source.length === translated.length
      && source.every((item, index) => sameShape(item, translated[index]));
  }

  if (source && typeof source === 'object') {
    if (!translated || typeof translated !== 'object' || Array.isArray(translated)) return false;
    return Object.keys(source).every((key) => key in translated && sameShape(source[key], translated[key]));
  }

  if (typeof source === 'string') return typeof translated === 'string' && translated.trim().length > 0;
  return true;
}

/* ------------------------------------------------------------------ runner */

function cachePath(locale, kind, id) {
  return join(CACHE_DIR, locale, kind, `${id}.json`);
}

function readCache(locale, kind, id) {
  const path = cachePath(locale, kind, id);
  if (!existsSync(path)) return undefined;
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return undefined;
  }
}

function writeCache(locale, kind, id, value) {
  const path = cachePath(locale, kind, id);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(value, null, 2));
}

/**
 * ja/de/es/pt-BR shipped hand-reviewed packs before this pipeline existed.
 * Seed the cache from them so those units are neither retranslated nor lost
 * when the generated pack file replaces the hand-written one.
 */
const { LOCALIZED_CONTENT: EXISTING_PACKS } = await jiti.import(`${ROOT}/src/data/localized/index.ts`);
let seeded = 0;

for (const [locale, pack] of Object.entries(EXISTING_PACKS ?? {})) {
  if (!LANGUAGE_NAMES[locale]) continue;

  const sections = [
    ['comparisons', pack.comparisons, (value) => value],
    ['blogMeta', pack.blogPosts, (value) => value],
    ['blogBodies', pack.blogContents, (value) => ({ markdown: value })],
    ['templates', pack.templates, (value) => value],
    ['clusters', pack.clusters, (value) => value],
  ];

  for (const [kind, section, wrap] of sections) {
    if (!section) continue;
    const byId = new Map(unitsFor(kind).map((unit) => [unit.id, unit.payload]));

    for (const [id, value] of Object.entries(section)) {
      const payload = byId.get(id);
      if (!payload || readCache(locale, kind, id)) continue;

      const candidate = wrap(value);
      if (!sameShape(payload, candidate)) continue;

      // A pack value identical to the English source is an untranslated
      // fallback, not a translation. Seeding it would lock the English text in
      // and make "delete the cache file to retranslate" a no-op.
      if (JSON.stringify(candidate) === JSON.stringify(payload)) continue;

      writeCache(locale, kind, id, candidate);
      seeded += 1;
    }
  }
}

if (seeded) console.log(`seeded ${seeded} units from existing hand-written packs`);

const jobs = [];
for (const locale of targets) {
  for (const kind of kinds) {
    for (const unit of unitsFor(kind)) {
      if (readCache(locale, kind, unit.id)) continue;
      jobs.push({ locale, kind, unit });
    }
  }
}

const totalUnits = targets.length * kinds.reduce((sum, kind) => sum + unitsFor(kind).length, 0);
console.log(`locales: ${targets.join(', ')}`);
console.log(`kinds: ${kinds.join(', ')}`);
console.log(`units: ${totalUnits} total, ${jobs.length} to translate, ${totalUnits - jobs.length} cached`);

let done = 0;
let failed = 0;
const failures = [];

async function worker(workerId) {
  while (jobs.length) {
    const job = jobs.shift();
    if (!job) return;

    const { locale, kind, unit } = job;

    try {
      const translated = await callGemini(buildPrompt(kind, locale, unit.payload));

      if (!sameShape(unit.payload, translated)) {
        throw new Error('shape mismatch');
      }

      writeCache(locale, kind, unit.id, translated);
      done += 1;
    } catch (error) {
      failed += 1;
      failures.push(`${locale}/${kind}/${unit.id}: ${error.message}`);
    }

    if ((done + failed) % 20 === 0 || !jobs.length) {
      const pending = jobs.length;
      console.log(`[w${workerId}] ${done} ok / ${failed} failed / ${pending} pending`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, (_, index) => worker(index + 1)));

console.log(`\ntranslated ${done}, failed ${failed}`);
if (failures.length) {
  console.log('failures:');
  for (const failure of failures.slice(0, 40)) console.log(`  ${failure}`);
}

/* -------------------------------------------------------------- pack output */

function tsLiteral(value, indent = 0) {
  const pad = ' '.repeat(indent);
  const padInner = ' '.repeat(indent + 2);

  if (typeof value === 'string') {
    if (value.includes('\n')) {
      return `\`${value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\``;
    }
    return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
  }

  if (Array.isArray(value)) {
    if (!value.length) return '[]';
    const items = value.map((item) => `${padInner}${tsLiteral(item, indent + 2)}`).join(',\n');
    return `[\n${items},\n${pad}]`;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value);
    if (!entries.length) return '{}';
    const body = entries
      .map(([key, item]) => {
        const safeKey = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : `'${key}'`;
        return `${padInner}${safeKey}: ${tsLiteral(item, indent + 2)}`;
      })
      .join(',\n');
    return `{\n${body},\n${pad}}`;
  }

  return JSON.stringify(value);
}

function buildPack(locale) {
  // Start from whatever the locale already shipped so a partially filled cache
  // can never delete existing (possibly hand-reviewed) translations. Cache
  // entries then overlay on top, key by key.
  const existing = EXISTING_PACKS?.[locale];
  const pack = {
    comparisons: { ...(existing?.comparisons ?? {}) },
    blogPosts: { ...(existing?.blogPosts ?? {}) },
    blogContents: { ...(existing?.blogContents ?? {}) },
    templates: { ...(existing?.templates ?? {}) },
    clusters: { ...(existing?.clusters ?? {}) },
  };
  const missing = [];

  for (const unit of unitsFor('comparisons')) {
    const cached = readCache(locale, 'comparisons', unit.id);
    if (!cached) {
      if (!pack.comparisons[unit.id]) missing.push(`comparisons/${unit.id}`);
      continue;
    }
    pack.comparisons[unit.id] = cached;
  }

  for (const unit of unitsFor('blogMeta')) {
    const cached = readCache(locale, 'blogMeta', unit.id);
    if (!cached) {
      if (!pack.blogPosts[unit.id]) missing.push(`blogMeta/${unit.id}`);
      continue;
    }
    pack.blogPosts[unit.id] = cached;
  }

  for (const unit of unitsFor('blogBodies')) {
    const cached = readCache(locale, 'blogBodies', unit.id);
    if (!cached) {
      if (!pack.blogContents[unit.id]) missing.push(`blogBodies/${unit.id}`);
      continue;
    }
    pack.blogContents[unit.id] = cached.markdown;
  }

  for (const unit of unitsFor('templates')) {
    const cached = readCache(locale, 'templates', unit.id);
    if (!cached) {
      if (!pack.templates[unit.id]) missing.push(`templates/${unit.id}`);
      continue;
    }
    pack.templates[unit.id] = cached;
  }

  for (const unit of unitsFor('clusters')) {
    const cached = readCache(locale, 'clusters', unit.id);
    if (!cached) {
      if (!pack.clusters[unit.id]) missing.push(`clusters/${unit.id}`);
      continue;
    }
    pack.clusters[unit.id] = cached;
  }

  return { pack, missing };
}

const packFileName = (locale) => `${locale.replace(/-([a-zA-Z])/g, (_, char) => char.toUpperCase())}.ts`;

const written = [];
for (const locale of ALL_TARGETS) {
  const { pack, missing } = buildPack(locale);
  const hasContent = Object.values(pack).some((section) => Object.keys(section).length > 0);
  if (!hasContent) continue;

  const file = `// GENERATED FILE — do not edit by hand.
// Regenerate with: npm run i18n:translate (scripts/i18n-translate.mjs)
import type { LocalizedContentPack } from './types';

export const pack: LocalizedContentPack = ${tsLiteral(pack, 0)};
`;
  writeFileSync(join(PACK_DIR, packFileName(locale)), file);
  written.push({ locale, missing: missing.length });
}

// UI copy lives in one generated file keyed by locale.
const uiTranslations = {};
for (const locale of ALL_TARGETS) {
  const cached = readCache(locale, 'ui', 'ui');
  if (cached) uiTranslations[locale] = cached;
}
if (Object.keys(uiTranslations).length) {
  writeFileSync(
    join(PACK_DIR, 'uiCopy.ts'),
    `// GENERATED FILE — do not edit by hand.
// Regenerate with: npm run i18n:translate (scripts/i18n-translate.mjs)
import type { ContentLanguage } from '../../lib/seo';
import type { UiCopy } from '../../lib/uiCopy';

export const UI_COPY_TRANSLATIONS: Partial<Record<ContentLanguage, Partial<UiCopy>>> = ${tsLiteral(uiTranslations, 0)};
`,
  );
}

// Barrel file re-exports every pack that exists.
const indexImports = written
  .map(({ locale }) => `import { pack as ${packVar(locale)} } from './${packFileName(locale).replace(/\.ts$/, '')}';`)
  .join('\n');
const indexEntries = written
  .map(({ locale }) => `  ${/-/.test(locale) ? `'${locale}'` : locale}: ${packVar(locale)},`)
  .join('\n');

function packVar(locale) {
  return locale.replace(/-([a-zA-Z])/g, (_, char) => char.toUpperCase());
}

writeFileSync(
  join(PACK_DIR, 'index.ts'),
  `// GENERATED FILE — do not edit by hand.
// Regenerate with: npm run i18n:translate (scripts/i18n-translate.mjs)
import type { ContentLanguage } from '../../lib/seo';
import type { LocalizedContentPack } from './types';
${indexImports}

export const LOCALIZED_CONTENT: Partial<Record<ContentLanguage, LocalizedContentPack>> = {
${indexEntries}
};
`,
);

console.log('\npacks written:');
for (const { locale, missing } of written) {
  console.log(`  ${locale}${missing ? ` (missing ${missing} units)` : ''}`);
}
