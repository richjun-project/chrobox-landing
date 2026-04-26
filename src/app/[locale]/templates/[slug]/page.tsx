import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ScheduleTemplate } from '../../../../screens/ScheduleTemplate';
import { JsonLd } from '../../../../components/JsonLd';
import { getScheduleTemplate } from '../../../../data/scheduleTemplates';
import { localizedTemplateSlugParams, localeFromParam, type LocalizedSlugParam } from '../../../_route-helpers';
import { pageMetadata } from '../../../../lib/next-seo';
import {
  absoluteUrl,
  contentLanguageForLocale,
  htmlLangForLocale,
  localizedPath,
  seoCopy,
  templateArticleSeo,
} from '../../../../lib/seo';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return localizedTemplateSlugParams();
}

export async function generateMetadata({ params }: { params: LocalizedSlugParam }): Promise<Metadata> {
  const { locale: localeSegment, slug } = await params;
  const locale = localeFromParam(localeSegment);
  const template = getScheduleTemplate(slug);

  if (!locale || !template) {
    notFound();
  }

  const lang = contentLanguageForLocale(locale);
  const profession = lang === 'ko' ? template.professionKo : template.profession;
  const description = lang === 'ko' ? template.descriptionKo : template.description;
  const seo = templateArticleSeo(locale, profession, description);

  return pageMetadata({
    locale,
    englishPath: `/templates/${template.slug}`,
    title: seo.title,
    description: seo.description,
    type: 'article',
  });
}

export default async function Page({ params }: { params: LocalizedSlugParam }) {
  const { locale: localeSegment, slug } = await params;
  const locale = localeFromParam(localeSegment);
  const template = getScheduleTemplate(slug);

  if (!locale || !template) {
    notFound();
  }

  const lang = contentLanguageForLocale(locale);
  const copy = seoCopy(locale);
  const profession = lang === 'ko' ? template.professionKo : template.profession;
  const description = lang === 'ko' ? template.descriptionKo : template.description;
  const seo = templateArticleSeo(locale, profession, description);
  const canonicalUrl = absoluteUrl(localizedPath(locale, `/templates/${template.slug}`));

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: copy.homeLabel, item: absoluteUrl(localizedPath(locale, '/')) },
            { '@type': 'ListItem', position: 2, name: copy.templatesLabel, item: absoluteUrl(localizedPath(locale, '/templates')) },
            {
              '@type': 'ListItem',
              position: 3,
              name: lang === 'ko' ? `${template.professionKo} 하루 일정` : `${template.profession} Daily Schedule`,
              item: canonicalUrl,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: seo.title,
          description: seo.description,
          inLanguage: htmlLangForLocale(locale),
          mainEntityOfPage: canonicalUrl,
          publisher: { '@type': 'Organization', name: 'Chrobox', url: absoluteUrl('/') },
        }}
      />
      <ScheduleTemplate slug={template.slug} locale={locale} />
    </>
  );
}
