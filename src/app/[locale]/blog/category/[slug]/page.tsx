import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogCategory } from '../../../../../screens/BlogCategory';
import { JsonLd } from '../../../../../components/JsonLd';
import { getBlogPostsByCluster } from '../../../../../data/blogPosts';
import {
  localizedBlogCategorySlugParams,
  localeFromParam,
  type LocalizedSlugParam,
} from '../../../../_route-helpers';
import { pageMetadata } from '../../../../../lib/next-seo';
import {
  absoluteUrl,
  blogCategorySeo,
  contentLanguageForLocale,
  htmlLangForLocale,
  localizedPath,
  seoCopy,
} from '../../../../../lib/seo';
import { getClusterByCategorySlug } from '../../../../../lib/blogTaxonomy';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return localizedBlogCategorySlugParams();
}

export async function generateMetadata({ params }: { params: LocalizedSlugParam }): Promise<Metadata> {
  const { locale: localeSegment, slug } = await params;
  const locale = localeFromParam(localeSegment);

  if (!locale) {
    notFound();
  }

  const cluster = getClusterByCategorySlug(slug);

  if (!cluster) {
    notFound();
  }

  const lang = contentLanguageForLocale(locale);
  const seo = blogCategorySeo(locale, cluster.name[lang], cluster.description[lang]);

  return pageMetadata({
    locale,
    englishPath: `/blog/category/${cluster.slug}`,
    title: seo.title,
    description: seo.description,
  });
}

export default async function Page({ params }: { params: LocalizedSlugParam }) {
  const { locale: localeSegment, slug } = await params;
  const locale = localeFromParam(localeSegment);

  if (!locale) {
    notFound();
  }

  const cluster = getClusterByCategorySlug(slug);

  if (!cluster) {
    notFound();
  }

  const lang = contentLanguageForLocale(locale);
  const copy = seoCopy(locale);
  const categoryUrl = absoluteUrl(localizedPath(locale, `/blog/category/${cluster.slug}`));
  const posts = getBlogPostsByCluster(cluster.slug, lang);
  const blogName = lang === 'ko' ? 'Chrobox 블로그' : 'Chrobox Blog';

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: cluster.name[lang],
          description: cluster.description[lang],
          inLanguage: htmlLangForLocale(locale),
          url: categoryUrl,
          isPartOf: {
            '@type': 'Blog',
            name: blogName,
            url: absoluteUrl(localizedPath(locale, '/blog')),
          },
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: posts.length,
            itemListElement: posts.map((post, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: absoluteUrl(localizedPath(locale, `/blog/${post.slug}`)),
              name: post.title,
            })),
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: copy.homeLabel, item: absoluteUrl(localizedPath(locale, '/')) },
            { '@type': 'ListItem', position: 2, name: copy.blogLabel, item: absoluteUrl(localizedPath(locale, '/blog')) },
            { '@type': 'ListItem', position: 3, name: cluster.name[lang], item: categoryUrl },
          ],
        }}
      />
      <BlogCategory cluster={cluster} locale={locale} />
    </>
  );
}
