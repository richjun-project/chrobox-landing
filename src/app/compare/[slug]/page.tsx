import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComparisonPage } from '../../../screens/ComparisonPage';
import { JsonLd } from '../../../components/JsonLd';
import { getComparison } from '../../../data/comparisons';
import { comparisonSlugParams, type SlugParam } from '../../_route-helpers';
import { pageMetadata } from '../../../lib/next-seo';
import { absoluteUrl, comparisonArticleSeo, htmlLangForLocale, localizedPath, seoCopy } from '../../../lib/seo';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return comparisonSlugParams();
}

export async function generateMetadata({ params }: { params: SlugParam }): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    notFound();
  }

  const seo = comparisonArticleSeo('en', comparison.competitor, comparison.description);

  return pageMetadata({
    locale: 'en',
    englishPath: `/compare/${comparison.slug}`,
    title: seo.title,
    description: seo.description,
    type: 'article',
  });
}

export default async function Page({ params }: { params: SlugParam }) {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    notFound();
  }

  const copy = seoCopy('en');
  const seo = comparisonArticleSeo('en', comparison.competitor, comparison.description);
  const canonicalUrl = absoluteUrl(localizedPath('en', `/compare/${comparison.slug}`));
  const faqSchema = comparison.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: comparison.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
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
            { '@type': 'ListItem', position: 1, name: copy.homeLabel, item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: copy.compareLabel, item: absoluteUrl(localizedPath('en', '/compare')) },
            { '@type': 'ListItem', position: 3, name: `Chrobox vs ${comparison.competitor}`, item: canonicalUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: seo.title,
          description: seo.description,
          inLanguage: htmlLangForLocale('en'),
          mainEntityOfPage: canonicalUrl,
          publisher: { '@type': 'Organization', name: 'Chrobox', url: absoluteUrl('/') },
        }}
      />
      {faqSchema && <JsonLd data={faqSchema} />}
      <ComparisonPage slug={comparison.slug} locale="en" />
    </>
  );
}
