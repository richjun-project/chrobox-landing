import type { Metadata } from 'next';
import { BlogList } from '../../screens/BlogList';
import { JsonLd } from '../../components/JsonLd';
import { pageMetadata } from '../../lib/next-seo';
import { absoluteUrl, localizedPath, seoCopy } from '../../lib/seo';

export const dynamic = 'force-static';

export function generateMetadata(): Metadata {
  const copy = seoCopy('en');

  return pageMetadata({
    locale: 'en',
    englishPath: '/blog',
    title: copy.blogTitle,
    description: copy.blogDescription,
  });
}

export default function Page() {
  const copy = seoCopy('en');
  const canonicalUrl = absoluteUrl(localizedPath('en', '/blog'));

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: copy.homeLabel, item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: copy.blogLabel, item: canonicalUrl },
          ],
        }}
      />
      <BlogList locale="en" />
    </>
  );
}
