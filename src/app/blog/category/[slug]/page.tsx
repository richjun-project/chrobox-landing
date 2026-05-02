import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogCategory } from '../../../../screens/BlogCategory';
import { JsonLd } from '../../../../components/JsonLd';
import { getBlogPostsByCluster } from '../../../../data/blogPosts';
import { blogCategorySlugParams, type SlugParam } from '../../../_route-helpers';
import { pageMetadata } from '../../../../lib/next-seo';
import {
  absoluteUrl,
  blogCategorySeo,
  htmlLangForLocale,
  localizedPath,
  seoCopy,
} from '../../../../lib/seo';
import { getClusterByCategorySlug } from '../../../../lib/blogTaxonomy';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return blogCategorySlugParams();
}

export async function generateMetadata({ params }: { params: SlugParam }): Promise<Metadata> {
  const { slug } = await params;
  const cluster = getClusterByCategorySlug(slug);

  if (!cluster) {
    notFound();
  }

  const seo = blogCategorySeo('en', cluster.name.en, cluster.description.en);

  return pageMetadata({
    locale: 'en',
    englishPath: `/blog/category/${cluster.slug}`,
    title: seo.title,
    description: seo.description,
  });
}

export default async function Page({ params }: { params: SlugParam }) {
  const { slug } = await params;
  const cluster = getClusterByCategorySlug(slug);

  if (!cluster) {
    notFound();
  }

  const copy = seoCopy('en');
  const categoryUrl = absoluteUrl(localizedPath('en', `/blog/category/${cluster.slug}`));
  const posts = getBlogPostsByCluster(cluster.slug, 'en');

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: cluster.name.en,
          description: cluster.description.en,
          inLanguage: htmlLangForLocale('en'),
          url: categoryUrl,
          isPartOf: {
            '@type': 'Blog',
            name: 'Chrobox Blog',
            url: absoluteUrl(localizedPath('en', '/blog')),
          },
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: posts.length,
            itemListElement: posts.map((post, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: absoluteUrl(localizedPath('en', `/blog/${post.slug}`)),
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
            { '@type': 'ListItem', position: 1, name: copy.homeLabel, item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: copy.blogLabel, item: absoluteUrl(localizedPath('en', '/blog')) },
            { '@type': 'ListItem', position: 3, name: cluster.name.en, item: categoryUrl },
          ],
        }}
      />
      <BlogCategory cluster={cluster} locale="en" />
    </>
  );
}
