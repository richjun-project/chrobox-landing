import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Home } from '../../screens/Home';
import { JsonLd } from '../../components/JsonLd';
import { organizationSchema, softwareApplicationSchema, pageMetadata, websiteSchema } from '../../lib/next-seo';
import { seoCopy } from '../../lib/seo';
import { faqPageSchema } from '../../lib/faq-schema';
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
      <JsonLd data={softwareApplicationSchema(copy.homeDescription)} />
      <JsonLd data={websiteSchema(locale, copy.homeDescription)} />
      <JsonLd data={faqPageSchema(locale)} />
      <Home />
    </>
  );
}
