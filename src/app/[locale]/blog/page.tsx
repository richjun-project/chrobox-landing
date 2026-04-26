import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogList } from '../../../screens/BlogList';
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
    englishPath: '/blog',
    title: copy.blogTitle,
    description: copy.blogDescription,
  });
}

export default async function Page({ params }: { params: LocaleParam }) {
  const { locale: localeSegment } = await params;
  const locale = localeFromParam(localeSegment);

  if (!locale) {
    notFound();
  }

  const copy = seoCopy(locale);
  const canonicalUrl = absoluteUrl(localizedPath(locale, '/blog'));

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: copy.homeLabel, item: absoluteUrl(localizedPath(locale, '/')) },
            { '@type': 'ListItem', position: 2, name: copy.blogLabel, item: canonicalUrl },
          ],
        }}
      />
      <BlogList locale={locale} />
    </>
  );
}
