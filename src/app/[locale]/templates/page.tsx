import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ScheduleTemplateList } from '../../../screens/ScheduleTemplateList';
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
    englishPath: '/templates',
    title: copy.templatesTitle,
    description: copy.templatesDescription,
  });
}

export default async function Page({ params }: { params: LocaleParam }) {
  const { locale: localeSegment } = await params;
  const locale = localeFromParam(localeSegment);

  if (!locale) {
    notFound();
  }

  const copy = seoCopy(locale);
  const canonicalUrl = absoluteUrl(localizedPath(locale, '/templates'));

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: copy.templatesLabel,
          description: copy.templatesDescription,
          url: canonicalUrl,
          publisher: { '@type': 'Organization', name: 'Chrobox', url: absoluteUrl('/') },
        }}
      />
      <ScheduleTemplateList locale={locale} />
    </>
  );
}
