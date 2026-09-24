import type { Metadata } from 'next';
import { ScheduleTemplateList } from '../../screens/ScheduleTemplateList';
import { JsonLd } from '../../components/JsonLd';
import { pageMetadata, organizationRef } from '../../lib/next-seo';
import { absoluteUrl, localizedPath, seoCopy } from '../../lib/seo';
import { uiCopy } from '../../lib/uiCopy';
import { localizedTemplates } from '../../lib/viewData';

export const dynamic = 'force-static';

export function generateMetadata(): Metadata {
  const copy = seoCopy('en');

  return pageMetadata({
    locale: 'en',
    englishPath: '/templates',
    title: copy.templatesTitle,
    description: copy.templatesDescription,
  });
}

export default function Page() {
  const copy = seoCopy('en');
  const canonicalUrl = absoluteUrl(localizedPath('en', '/templates'));

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: copy.templatesLabel,
          description: copy.templatesDescription,
          url: canonicalUrl,
          publisher: organizationRef(),
        }}
      />
      <ScheduleTemplateList templates={localizedTemplates('en')} ui={uiCopy('en')} locale="en" />
    </>
  );
}
