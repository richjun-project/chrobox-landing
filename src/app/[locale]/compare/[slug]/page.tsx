import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComparisonPage } from '../../../../screens/ComparisonPage';
import { JsonLd } from '../../../../components/JsonLd';
import { getComparison } from '../../../../data/comparisons';
import { localizedComparisonSlugParams, localeFromParam, type LocalizedSlugParam } from '../../../_route-helpers';
import { pageMetadata } from '../../../../lib/next-seo';
import {
  absoluteUrl,
  comparisonArticleSeo,
  contentLanguageForLocale,
  htmlLangForLocale,
  localizedPath,
  seoCopy,
} from '../../../../lib/seo';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return localizedComparisonSlugParams();
}

export async function generateMetadata({ params }: { params: LocalizedSlugParam }): Promise<Metadata> {
  const { locale: localeSegment, slug } = await params;
  const locale = localeFromParam(localeSegment);
  const comparison = getComparison(slug);

  if (!locale || !comparison) {
    notFound();
  }

  const lang = contentLanguageForLocale(locale);
  const competitor = lang === 'ko' ? comparison.competitorKo : comparison.competitor;
  const description = lang === 'ko' ? comparison.descriptionKo : comparison.description;
  const seo = comparisonArticleSeo(locale, competitor, description);

  return pageMetadata({
    locale,
    englishPath: `/compare/${comparison.slug}`,
    title: seo.title,
    description: seo.description,
    type: 'article',
  });
}

export default async function Page({ params }: { params: LocalizedSlugParam }) {
  const { locale: localeSegment, slug } = await params;
  const locale = localeFromParam(localeSegment);
  const comparison = getComparison(slug);

  if (!locale || !comparison) {
    notFound();
  }

  const lang = contentLanguageForLocale(locale);
  const copy = seoCopy(locale);
  const competitor = lang === 'ko' ? comparison.competitorKo : comparison.competitor;
  const description = lang === 'ko' ? comparison.descriptionKo : comparison.description;
  const seo = comparisonArticleSeo(locale, competitor, description);
  const canonicalUrl = absoluteUrl(localizedPath(locale, `/compare/${comparison.slug}`));
  const faqSchema = comparison.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: comparison.faqs.map((faq) => ({
          '@type': 'Question',
          name: lang === 'ko' && faq.questionKo ? faq.questionKo : faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: lang === 'ko' && faq.answerKo ? faq.answerKo : faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: copy.homeLabel, item: absoluteUrl(localizedPath(locale, '/')) },
            { '@type': 'ListItem', position: 2, name: copy.compareLabel, item: absoluteUrl(localizedPath(locale, '/compare')) },
            { '@type': 'ListItem', position: 3, name: `Chrobox vs ${competitor}`, item: canonicalUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: seo.title,
          description: seo.description,
          inLanguage: htmlLangForLocale(locale),
          mainEntityOfPage: canonicalUrl,
          publisher: { '@type': 'Organization', name: 'Chrobox', url: absoluteUrl('/') },
        }}
      />
      {faqSchema && <JsonLd data={faqSchema} />}
      <ComparisonPage slug={comparison.slug} locale={locale} />
    </>
  );
}
