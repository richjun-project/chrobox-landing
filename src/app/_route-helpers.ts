import { comparisons } from '../data/comparisons';
import { getBlogPosts } from '../data/blogPosts';
import { scheduleTemplates } from '../data/scheduleTemplates';
import {
  DEFAULT_LOCALE,
  SEO_LOCALES,
  contentLanguageForLocale,
  localeFromPathSegment,
  type SiteLocale,
} from '../lib/seo';

export type LocaleParam = Promise<{ locale: string }>;
export type SlugParam = Promise<{ slug: string }>;
export type LocalizedSlugParam = Promise<{ locale: string; slug: string }>;

export function localizedLocaleParams() {
  return SEO_LOCALES
    .filter((locale) => locale.code !== DEFAULT_LOCALE && localeFromPathSegment(locale.pathPrefix.slice(1)))
    .map((locale) => ({ locale: locale.pathPrefix.slice(1) }));
}

export function localeFromParam(segment: string): SiteLocale | undefined {
  return localeFromPathSegment(segment);
}

export function blogSlugParams(locale: SiteLocale = DEFAULT_LOCALE) {
  const lang = contentLanguageForLocale(locale);
  return getBlogPosts(lang).map((post) => ({ slug: post.slug }));
}

export function localizedBlogSlugParams() {
  return localizedLocaleParams().flatMap(({ locale }) => {
    const siteLocale = localeFromParam(locale);

    if (!siteLocale) {
      return [];
    }

    return blogSlugParams(siteLocale).map(({ slug }) => ({ locale, slug }));
  });
}

export function templateSlugParams() {
  return scheduleTemplates.map((template) => ({ slug: template.slug }));
}

export function localizedTemplateSlugParams() {
  return localizedLocaleParams().flatMap(({ locale }) => (
    templateSlugParams().map(({ slug }) => ({ locale, slug }))
  ));
}

export function comparisonSlugParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export function localizedComparisonSlugParams() {
  return localizedLocaleParams().flatMap(({ locale }) => (
    comparisonSlugParams().map(({ slug }) => ({ locale, slug }))
  ));
}
