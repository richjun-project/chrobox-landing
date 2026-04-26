import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ScheduleTemplate } from '../../../screens/ScheduleTemplate';
import { JsonLd } from '../../../components/JsonLd';
import { getScheduleTemplate } from '../../../data/scheduleTemplates';
import { templateSlugParams, type SlugParam } from '../../_route-helpers';
import { pageMetadata } from '../../../lib/next-seo';
import { absoluteUrl, htmlLangForLocale, localizedPath, seoCopy, templateArticleSeo } from '../../../lib/seo';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return templateSlugParams();
}

export async function generateMetadata({ params }: { params: SlugParam }): Promise<Metadata> {
  const { slug } = await params;
  const template = getScheduleTemplate(slug);

  if (!template) {
    notFound();
  }

  const seo = templateArticleSeo('en', template.profession, template.description);

  return pageMetadata({
    locale: 'en',
    englishPath: `/templates/${template.slug}`,
    title: seo.title,
    description: seo.description,
    type: 'article',
  });
}

export default async function Page({ params }: { params: SlugParam }) {
  const { slug } = await params;
  const template = getScheduleTemplate(slug);

  if (!template) {
    notFound();
  }

  const copy = seoCopy('en');
  const seo = templateArticleSeo('en', template.profession, template.description);
  const canonicalUrl = absoluteUrl(localizedPath('en', `/templates/${template.slug}`));

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: copy.homeLabel, item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: copy.templatesLabel, item: absoluteUrl(localizedPath('en', '/templates')) },
            { '@type': 'ListItem', position: 3, name: `${template.profession} Daily Schedule`, item: canonicalUrl },
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
      <ScheduleTemplate slug={template.slug} locale="en" />
    </>
  );
}
