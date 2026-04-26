import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Home } from '../../screens/Home';
import { JsonLd } from '../../components/JsonLd';
import { organizationSchema, pageMetadata } from '../../lib/next-seo';
import { absoluteUrl, seoCopy } from '../../lib/seo';
import { type LocaleParam, localeFromParam, localizedLocaleParams } from '../_route-helpers';

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
    englishPath: '/',
    title: copy.homeTitle,
    description: copy.homeDescription,
  });
}

export default async function Page({ params }: { params: LocaleParam }) {
  const { locale: localeSegment } = await params;
  const locale = localeFromParam(localeSegment);

  if (!locale) {
    notFound();
  }

  const copy = seoCopy(locale);

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Chrobox',
          url: absoluteUrl('/'),
          description: copy.homeDescription,
          publisher: { '@type': 'Organization', name: 'Chrobox' },
        }}
      />
      <Home />
    </>
  );
}
