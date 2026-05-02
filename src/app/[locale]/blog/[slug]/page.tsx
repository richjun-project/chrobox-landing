import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPost } from '../../../../screens/BlogPost';
import { JsonLd } from '../../../../components/JsonLd';
import { getBlogContent, getBlogPost } from '../../../../data/blogPosts';
import { localizedBlogSlugParams, localeFromParam, type LocalizedSlugParam } from '../../../_route-helpers';
import { pageMetadata } from '../../../../lib/next-seo';
import {
  absoluteUrl,
  blogArticleSeo,
  contentLanguageForLocale,
  htmlLangForLocale,
  localizedPath,
  seoCopy,
} from '../../../../lib/seo';
import { getClusterBySlug } from '../../../../lib/blogTaxonomy';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return localizedBlogSlugParams();
}

export async function generateMetadata({ params }: { params: LocalizedSlugParam }): Promise<Metadata> {
  const { locale: localeSegment, slug } = await params;
  const locale = localeFromParam(localeSegment);

  if (!locale) {
    notFound();
  }

  const lang = contentLanguageForLocale(locale);
  const post = getBlogPost(slug, lang);

  if (!post) {
    notFound();
  }

  const seo = blogArticleSeo(locale, post.title, post.excerpt);
  const metadata = pageMetadata({
    locale,
    englishPath: `/blog/${post.slug}`,
    title: seo.title,
    description: seo.description,
    type: 'article',
    image: post.image,
  });
  const cluster = getClusterBySlug(post.slug);

  return {
    ...metadata,
    authors: [{ name: post.author }],
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      section: cluster ? cluster.name[lang] : post.category,
      tags: post.tags,
    },
  };
}

export default async function Page({ params }: { params: LocalizedSlugParam }) {
  const { locale: localeSegment, slug } = await params;
  const locale = localeFromParam(localeSegment);

  if (!locale) {
    notFound();
  }

  const lang = contentLanguageForLocale(locale);
  const post = getBlogPost(slug, lang);

  if (!post) {
    notFound();
  }

  const copy = seoCopy(locale);
  const seo = blogArticleSeo(locale, post.title, post.excerpt);
  const postUrl = absoluteUrl(localizedPath(locale, `/blog/${post.slug}`));
  const content = getBlogContent(post.slug, lang);
  const cluster = getClusterBySlug(post.slug);
  const articleSection = cluster ? cluster.name[lang] : post.category;
  const categoryUrl = cluster ? absoluteUrl(localizedPath(locale, `/blog/category/${cluster.slug}`)) : null;

  const breadcrumbItems: Array<Record<string, unknown>> = [
    { '@type': 'ListItem', position: 1, name: copy.homeLabel, item: absoluteUrl(localizedPath(locale, '/')) },
    { '@type': 'ListItem', position: 2, name: copy.blogLabel, item: absoluteUrl(localizedPath(locale, '/blog')) },
  ];
  if (cluster && categoryUrl) {
    breadcrumbItems.push({ '@type': 'ListItem', position: 3, name: cluster.name[lang], item: categoryUrl });
    breadcrumbItems.push({ '@type': 'ListItem', position: 4, name: post.title, item: postUrl });
  } else {
    breadcrumbItems.push({ '@type': 'ListItem', position: 3, name: post.title, item: postUrl });
  }

  const faqSchema = post.faqs && post.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: lang === 'ko' && faq.questionKo ? faq.questionKo : faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: lang === 'ko' && faq.answerKo ? faq.answerKo : faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: seo.description,
          inLanguage: htmlLangForLocale(locale),
          image: absoluteUrl(post.image),
          author: { '@type': 'Organization', name: post.author },
          publisher: {
            '@type': 'Organization',
            name: 'Chrobox',
            logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.png') },
          },
          datePublished: post.date,
          mainEntityOfPage: postUrl,
          articleSection,
          keywords: post.tags.join(', '),
          articleBody: content.slice(0, 5000),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems,
        }}
      />
      {faqSchema && <JsonLd data={faqSchema} />}
      <BlogPost slug={post.slug} locale={locale} />
    </>
  );
}
