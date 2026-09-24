/**
 * Server-side view data for the client screens.
 *
 * The screens are client components; if they call the data helpers themselves,
 * every localized content pack (≈4 MB of JS for 20 locales) ships to the browser
 * on every page. Route files resolve exactly what one page needs here and pass it
 * down as props. Client code may only `import type` from this module.
 */
import { getBlogPost, getBlogPosts, getBlogPostsByCluster } from '../data/blogPosts';
import {
  getScheduleTemplate,
  localizeScheduleTemplate,
  scheduleTemplates,
  type LocalizedScheduleTemplate,
  type TimeBlock,
} from '../data/scheduleTemplates';
import { categoryLabel } from '../data/templateCategories';
import type { BlogPostMeta } from '../types/blog';
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
    categoryLabels: Object.fromEntries(
      categories.map((category) => [category, categoryLabel(category, lang)]),
    ) as Record<TimeBlock['category'], string>,
  };
}
