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
import type { ContentLanguage } from './seo';

// Curated to pass homepage authority (priority 1.0) to the posts that already earn
// non-brand impressions in Search Console and the app-blocking hub we want ranked.
const HOME_FEATURED_SLUGS = [
  'how-to-block-distracting-apps',
  'time-blocking-vs-time-boxing',
  '5-time-boxing-strategies',
];

export function homeBlogPosts(lang: ContentLanguage): BlogPostMeta[] {
  const allPosts = getBlogPosts(lang);
  const featured = HOME_FEATURED_SLUGS
    .map((slug) => allPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogPostMeta => Boolean(post));

  return featured.length === 3 ? featured : allPosts.slice(0, 3);
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

export function relatedPostsData(slug: string, lang: ContentLanguage, limit = 4): RelatedPostsData | null {
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

export interface TemplateViewData {
  template: LocalizedScheduleTemplate;
  related: LocalizedScheduleTemplate[];
  categoryLabels: Record<TimeBlock['category'], string>;
  guides: BlogPostMeta[];
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

  return {
    template: localizeScheduleTemplate(template, lang),
    related,
    guides: templateGuides(slug, lang),
    categoryLabels: Object.fromEntries(
      categories.map((category) => [category, categoryLabel(category, lang)]),
    ) as Record<TimeBlock['category'], string>,
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
]);

export function postDirectAnswer(post: BlogPostMeta): BlogFaq | null {
  return DIRECT_ANSWER_SLUGS.has(post.slug) ? post.faqs?.[0] ?? null : null;
}
