import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ComparisonList } from '../../../screens/ComparisonList';
import { JsonLd } from '../../../components/JsonLd';
import { pageMetadata } from '../../../lib/next-seo';
import { absoluteUrl, localizedPath, seoCopy } from '../../../lib/seo';
import { type LocaleParam, localeFromParam, localizedLocaleParams } from '../../_route-helpers';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return localizedLocaleParams();
}

export async function generateMetadata({ params }: { params: LocaleParam }): Promise<Metadata> {
  const { locale: localeSegment } = await params;
  const locale = localeFromParam(localeSegment);

  if (!locale) {
    notFound();
  }

  const copy = seoCopy(locale);

  return pageMetadata({
    locale,
    englishPath: '/compare',
    title: copy.compareTitle,
    description: copy.compareDescription,
  });
}

export default async function Page({ params }: { params: LocaleParam }) {
  const { locale: localeSegment } = await params;
  const locale = localeFromParam(localeSegment);

  if (!locale) {
    notFound();
  }

  const copy = seoCopy(locale);
  const canonicalUrl = absoluteUrl(localizedPath(locale, '/compare'));

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: copy.homeLabel, item: absoluteUrl(localizedPath(locale, '/')) },
            { '@type': 'ListItem', position: 2, name: copy.compareLabel, item: canonicalUrl },
          ],
        }}
      />
      <ComparisonList locale={locale} />
    </>
  );
}
