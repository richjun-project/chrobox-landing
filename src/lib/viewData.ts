/**
 * Server-side view data for the client screens.
 *
 * The screens are client components; if they call the data helpers themselves,
 * every localized content pack (≈4 MB of JS for 20 locales) ships to the browser
 * on every page. Route files resolve exactly what one page needs here and pass it
 * down as props. Client code may only `import type` from this module.
 */
import { getBlogPost, getBlogPosts, getBlogPostsByCluster } from '../data/blogPosts';
import { getComparisons } from '../data/comparisons';
import {
  getScheduleTemplate,
  localizeScheduleTemplate,
  scheduleTemplates,
  type LocalizedScheduleTemplate,
  type TimeBlock,
} from '../data/scheduleTemplates';
import { categoryLabel } from '../data/templateCategories';
import type { BlogFaq, BlogPostMeta } from '../types/blog';
import { BLOG_CLUSTERS, clusterCopy, getClusterBySlug } from './blogTaxonomy';
import { htmlLangForLocale, type ContentLanguage } from './seo';

// The home page is the page Google crawls most often, so its links are how new pages
// get discovered. Curated: the first-party data post, pages that already earn
// non-brand impressions in Search Console (app blocking, time blocking vs boxing),
// and the 2026-09-30 guides that URL Inspection still reported as unknown on 10-07.
const HOME_FEATURED_SLUGS = [
  'does-timeboxing-work',
  'how-to-block-distracting-apps',
  'how-to-lock-apps-on-iphone',
  'time-blocking-vs-time-boxing',
  'best-time-boxing-apps',
  'reduce-phone-addiction',
];

export function homeBlogPosts(lang: ContentLanguage): BlogPostMeta[] {
  const allPosts = getBlogPosts(lang);
  const featured = HOME_FEATURED_SLUGS
    .map((slug) => allPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogPostMeta => Boolean(post));

  return featured.length ? featured : allPosts.slice(0, HOME_FEATURED_SLUGS.length);
}

// Direct competitors first (the 2026-09-30 comparisons), then the general tools people
// compare Chrobox with. Templates ordered by Search Console demand (product manager
// and executive schedules lead non-brand impressions).
const HOME_COMPARISONS = [
  'chrobox-vs-structured',
  'chrobox-vs-tiimo',
  'chrobox-vs-sunsama',
  'chrobox-vs-opal',
  'chrobox-vs-forest',
  'chrobox-vs-todoist',
  'chrobox-vs-google-calendar',
  'chrobox-vs-notion',
];
const HOME_TEMPLATES = [
  'product-manager',
  'executive',
  'software-developer',
  'startup-founder',
  'college-student',
  'remote-worker',
  'nurse',
  'teacher',
];

export interface HomeExploreData {
  comparisons: ComparisonLink[];
  templates: TemplateLink[];
}

export function homeExplore(lang: ContentLanguage): HomeExploreData {
  const comparisons = comparisonLinks(lang);
  return {
    comparisons: HOME_COMPARISONS
      .map((slug) => comparisons.find((item) => item.slug === slug))
      .filter((item): item is ComparisonLink => Boolean(item)),
    templates: HOME_TEMPLATES
      .map((slug) => getScheduleTemplate(slug))
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
      .map((item) => {
        const localized = localizeScheduleTemplate(item, lang);
        return { slug: localized.slug, profession: localized.profession };
      }),
  };
}

export interface ClusterLink {
  id: string;
  slug: string;
  name: string;
}

export function clusterLinks(lang: ContentLanguage): ClusterLink[] {
  return BLOG_CLUSTERS.map((cluster) => ({
    id: cluster.id,
    slug: cluster.slug,
    name: clusterCopy(cluster, lang).name,
  }));
}

export interface RelatedPostsData {
  clusterSlug: string;
  clusterName: string;
  hub?: BlogPostMeta;
  siblings: BlogPostMeta[];
}

export function relatedPostsData(slug: string, lang: ContentLanguage, limit = 8): RelatedPostsData | null {
  const cluster = getClusterBySlug(slug);

  if (!cluster) {
    return null;
  }

  const hub = cluster.hubSlug !== slug ? getBlogPost(cluster.hubSlug, lang) : undefined;
  const siblings = getBlogPostsByCluster(cluster.slug, lang)
    .filter((post) => post.slug !== slug && post.slug !== cluster.hubSlug)
    .slice(0, limit);

  if (!hub && siblings.length === 0) {
    return null;
  }

  return { clusterSlug: cluster.slug, clusterName: clusterCopy(cluster, lang).name, hub, siblings };
}

export function localizedTemplates(lang: ContentLanguage): LocalizedScheduleTemplate[] {
  return scheduleTemplates.map((template) => localizeScheduleTemplate(template, lang));
}

export interface TimeBudget {
  /** Number of blocks in the plan */
  blocks: number;
  /** First start – last end, e.g. "08:00–17:00" */
  span: string;
  /** Planned hours, formatted for the locale ("9 hr", "9시간", "9 Std.") */
  total: string;
  items: { category: TimeBlock['category']; label: string; hours: string; share: number }[];
}

export interface TemplateViewData {
  template: LocalizedScheduleTemplate;
  related: LocalizedScheduleTemplate[];
  categoryLabels: Record<TimeBlock['category'], string>;
  guides: BlogPostMeta[];
  budget: TimeBudget;
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.trim().split(':').map(Number);
  return h * 60 + m;
};

/**
 * Where the template's day goes, computed from its own schedule rows — category totals
 * are facts about the plan on the page, not claims. Formatted on the server so the
 * prerendered HTML and hydration agree.
 */
function timeBudget(
  schedule: TimeBlock[],
  labels: Record<TimeBlock['category'], string>,
  lang: ContentLanguage,
): TimeBudget {
  const ranges = schedule.map((block) => block.time.split('-').map(toMinutes));
  const minutes: Partial<Record<TimeBlock['category'], number>> = {};
  schedule.forEach((block, index) => {
    const [start, end] = ranges[index];
    minutes[block.category] = (minutes[block.category] ?? 0) + Math.max(0, end - start);
  });
  const totalMinutes = Object.values(minutes).reduce((sum, value) => sum + (value ?? 0), 0);
  const hours = new Intl.NumberFormat(htmlLangForLocale(lang), {
    style: 'unit',
    unit: 'hour',
    unitDisplay: 'short',
    maximumFractionDigits: 1,
  });
  const clock = (value: number) => `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`;
  return {
    blocks: schedule.length,
    span: `${clock(Math.min(...ranges.map((r) => r[0])))}–${clock(Math.max(...ranges.map((r) => r[1])))}`,
    total: hours.format(totalMinutes / 60),
    items: (Object.entries(minutes) as [TimeBlock['category'], number][])
      .sort((a, b) => b[1] - a[1])
      .map(([category, value]) => ({
        category,
        label: labels[category],
        hours: hours.format(value / 60),
        share: totalMinutes ? value / totalMinutes : 0,
      })),
  };
}

export function templateViewData(slug: string, lang: ContentLanguage): TemplateViewData | null {
  const template = getScheduleTemplate(slug);

  if (!template) {
    return null;
  }

  const related = template.relatedSlugs
    .map((relatedSlug) => getScheduleTemplate(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .slice(0, 4)
    .map((item) => localizeScheduleTemplate(item, lang));
  const categories: TimeBlock['category'][] = ['focus', 'meeting', 'break', 'admin', 'creative', 'learning'];
  const categoryLabels = Object.fromEntries(
    categories.map((category) => [category, categoryLabel(category, lang)]),
  ) as Record<TimeBlock['category'], string>;
  const localized = localizeScheduleTemplate(template, lang);

  return {
    template: localized,
    related,
    guides: templateGuides(slug, lang),
    budget: timeBudget(localized.schedule, categoryLabels, lang),
    categoryLabels,
  };
}

/* ---------------------------------------------------------- cross-links */

// Topical links between the three content types. Comparison and template pages
// were reachable only from their own hub (1 internal inbound link each), so they
// carried almost no internal authority. One map drives both directions.
const TEMPLATE_GUIDES: Record<string, string[]> = {
  'software-developer': ['deep-work-scheduling', 'focus-time-optimization', 'task-batching-productivity'],
  'product-manager': ['meeting-management-time-boxing', 'deep-work-scheduling', 'weekly-planning-guide'],
  'graphic-designer': ['time-boxing-for-creative-professionals', 'deep-work-scheduling', 'energy-management-scheduling'],
  'marketing-manager': ['task-batching-productivity', 'meeting-management-time-boxing', 'weekly-planning-guide'],
  'data-scientist': ['deep-work-scheduling', 'focus-time-optimization', 'energy-management-scheduling'],
  'freelance-writer': ['time-boxing-for-creative-professionals', 'beat-procrastination-time-boxing', 'morning-routine-scheduling'],
  teacher: ['weekly-planning-guide', 'work-life-balance-scheduling', 'daily-review-ritual'],
  nurse: ['energy-management-scheduling', 'work-life-balance-scheduling', 'daily-review-ritual'],
  'startup-founder': ['time-boxing-for-side-projects', 'beat-decision-fatigue', 'time-boxing-for-teams'],
  'college-student': ['time-boxing-for-students', 'beat-procrastination-time-boxing', 'how-to-block-distracting-apps'],
  'remote-worker': ['remote-work-scheduling', 'how-to-block-distracting-apps', 'work-life-balance-scheduling'],
  'project-manager': ['time-boxing-for-teams', 'meeting-management-time-boxing', 'weekly-planning-guide'],
  'ux-designer': ['time-boxing-for-creative-professionals', 'deep-work-scheduling', 'meeting-management-time-boxing'],
  'sales-representative': ['task-batching-productivity', 'energy-management-scheduling', 'time-audit-guide'],
  accountant: ['task-batching-productivity', 'deep-work-scheduling', 'parkinsons-law-productivity'],
  'content-creator': ['time-boxing-for-creative-professionals', 'task-batching-productivity', 'digital-detox-focus-routine'],
  lawyer: ['time-audit-guide', 'deep-work-scheduling', 'beat-decision-fatigue'],
  'real-estate-agent': ['time-audit-guide', 'task-batching-productivity', 'morning-routine-scheduling'],
  executive: ['beat-decision-fatigue', 'meeting-management-time-boxing', '5-time-boxing-strategies'],
  'parent-working-from-home': ['time-boxing-for-working-parents', 'remote-work-scheduling', 'work-life-balance-scheduling'],
};

const COMPARISON_GUIDES: Record<string, string[]> = {
  'chrobox-vs-google-calendar': ['time-boxing-with-calendar-apps', 'time-blocking-vs-time-boxing'],
  'chrobox-vs-apple-reminders': ['time-boxing-with-calendar-apps', 'productivity-for-beginners'],
  'chrobox-vs-microsoft-to-do': ['time-boxing-with-calendar-apps', 'productivity-for-beginners'],
  'chrobox-vs-notion': ['time-boxing-for-teams', 'deep-work-scheduling'],
  'chrobox-vs-clickup': ['time-boxing-for-teams', 'meeting-management-time-boxing'],
  'chrobox-vs-asana': ['time-boxing-for-teams', 'meeting-management-time-boxing'],
  'chrobox-vs-trello': ['time-boxing-for-teams', 'weekly-planning-guide'],
  'chrobox-vs-todoist': ['time-blocking-vs-time-boxing', 'productivity-for-beginners'],
  'chrobox-vs-ticktick': ['time-boxing-vs-pomodoro', 'time-blocking-vs-time-boxing'],
  'chrobox-vs-any-do': ['productivity-for-beginners', 'weekly-planning-guide'],
};

/** Every comparison page links from these app-choice articles. */
const COMPARISON_HUB_POSTS = new Set(['best-time-boxing-apps', 'time-boxing-with-calendar-apps', 'time-blocking-vs-time-boxing']);

export interface TemplateLink {
  slug: string;
  profession: string;
}

export interface ComparisonLink {
  slug: string;
  competitor: string;
}

export interface PostCrossLinks {
  templates: TemplateLink[];
  comparisons: ComparisonLink[];
}

function postsBySlug(slugs: string[], lang: ContentLanguage): BlogPostMeta[] {
  return slugs
    .map((slug) => getBlogPost(slug, lang))
    .filter((post): post is BlogPostMeta => Boolean(post));
}

export function comparisonLinks(lang: ContentLanguage, excludeSlug?: string): ComparisonLink[] {
  return getComparisons(lang)
    .filter((comparison) => comparison.slug !== excludeSlug)
    .map((comparison) => ({ slug: comparison.slug, competitor: comparison.competitor }));
}

export function comparisonGuides(slug: string, lang: ContentLanguage): BlogPostMeta[] {
  return postsBySlug(['best-time-boxing-apps', ...(COMPARISON_GUIDES[slug] ?? [])], lang);
}

export function templateGuides(slug: string, lang: ContentLanguage): BlogPostMeta[] {
  return postsBySlug(TEMPLATE_GUIDES[slug] ?? [], lang);
}

export function postCrossLinks(postSlug: string, lang: ContentLanguage): PostCrossLinks {
  const templates = Object.entries(TEMPLATE_GUIDES)
    .filter(([, guides]) => guides.includes(postSlug))
    .slice(0, 4)
    .map(([slug]) => getScheduleTemplate(slug))
    .filter((template): template is NonNullable<typeof template> => Boolean(template))
    .map((template) => {
      const localized = localizeScheduleTemplate(template, lang);
      return { slug: localized.slug, profession: localized.profession };
    });

  return {
    templates,
    comparisons: COMPARISON_HUB_POSTS.has(postSlug) ? comparisonLinks(lang) : [],
  };
}

/* ------------------------------------------------------ direct answers */

// AEO: answer engines extract the answer from the top of the page. Posts whose
// first FAQ answers the headline question show it as a lead box above the body
// (and drop it from the FAQ list below, so it is not printed twice). Curated —
// on the other posts the first FAQ is a side question.
const DIRECT_ANSWER_SLUGS = new Set([
  'what-is-time-boxing',
  'time-boxing-vs-pomodoro',
  'time-boxing-for-adhd',
  'energy-management-scheduling',
  'task-batching-productivity',
  'focus-time-optimization',
  'digital-minimalism-scheduling',
  'time-boxing-with-calendar-apps',
  'beat-procrastination-time-boxing',
  'time-boxing-for-creative-professionals',
  'time-audit-guide',
  'parkinsons-law-productivity',
  'eat-the-frog-time-boxing',
  'beat-decision-fatigue',
  'how-to-block-distracting-apps',
  'app-blocker-plus-timeboxing',
  'work-life-balance-scheduling',
  'time-boxing-for-teams',
  'time-boxing-mistakes-to-avoid',
  'digital-detox-focus-routine',
  'time-boxing-for-working-parents',
  'does-timeboxing-work',
  'how-to-lock-apps-on-iphone',
  'how-to-stop-checking-phone-while-studying',
  'reduce-phone-addiction',
  'daily-reflection-template',
]);

export function postDirectAnswer(post: BlogPostMeta): BlogFaq | null {
  return DIRECT_ANSWER_SLUGS.has(post.slug) ? post.faqs?.[0] ?? null : null;
}
