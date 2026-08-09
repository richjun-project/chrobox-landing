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
import { clusterCopy, getClusterByCategorySlug } from '../../../../../lib/blogTaxonomy';
import { uiCopy } from '../../../../../lib/uiCopy';

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
  const category = clusterCopy(cluster, lang);
  const seo = blogCategorySeo(locale, category.name, category.description);

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
  const ui = uiCopy(lang);
  const category = clusterCopy(cluster, lang);
  const copy = seoCopy(locale);
  const categoryUrl = absoluteUrl(localizedPath(locale, `/blog/category/${cluster.slug}`));
  const posts = getBlogPostsByCluster(cluster.slug, lang);
  const blogName = ui.chroboxBlog;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: category.name,
          description: category.description,
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
            { '@type': 'ListItem', position: 3, name: category.name, item: categoryUrl },
          ],
        }}
      />
      <BlogCategory cluster={cluster} locale={locale} />
    </>
  );
}
