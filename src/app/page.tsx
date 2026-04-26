import type { Metadata } from 'next';
import { Home } from '../screens/Home';
import { JsonLd } from '../components/JsonLd';
import { organizationSchema, pageMetadata } from '../lib/next-seo';
import { absoluteUrl, seoCopy } from '../lib/seo';

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
