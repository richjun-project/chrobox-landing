import type { Metadata } from 'next';
import { Home } from '../screens/Home';
import { JsonLd } from '../components/JsonLd';
import { organizationSchema, softwareApplicationSchema, pageMetadata, websiteSchema } from '../lib/next-seo';
import { contentLanguageForLocale, seoCopy } from '../lib/seo';
import { faqPageSchema } from '../lib/faq-schema';
import { homeBlogPosts } from '../lib/viewData';
import { uiCopy } from '../lib/uiCopy';

export const dynamic = 'force-static';

export function generateMetadata(): Metadata {
  const copy = seoCopy('en');

  return pageMetadata({
    locale: 'en',
    englishPath: '/',
    title: copy.homeTitle,
    description: copy.homeDescription,
  });
}

export default function Page() {
  const copy = seoCopy('en');

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema(copy.homeDescription)} />
      <JsonLd data={websiteSchema('en', copy.homeDescription)} />
      <JsonLd data={faqPageSchema('en')} />
      <Home blogPosts={homeBlogPosts(contentLanguageForLocale('en'))} ui={uiCopy(contentLanguageForLocale('en'))} />
    </>
  );
}
