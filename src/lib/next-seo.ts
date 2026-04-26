import type { Metadata } from 'next';
import {
  SITE_URL,
  absoluteUrl,
  hreflangAlternates,
  localizedPath,
  ogAlternateLocales,
  ogLocale,
  type SiteLocale,
} from './seo';

type PageMetadataInput = {
  locale: SiteLocale;
  englishPath: string;
  title: string;
  description: string;
  type?: 'website' | 'article';
  image?: string;
};

function absoluteAssetUrl(url: string) {
  return /^https?:\/\//.test(url) ? url : absoluteUrl(url);
}

export function languageAlternates(englishPath: string) {
  return Object.fromEntries(
    hreflangAlternates(englishPath).map((alternate) => [alternate.hrefLang, alternate.href]),
  );
}

export function pageMetadata({
  locale,
  englishPath,
  title,
  description,
  type = 'website',
  image = '/og-image.png',
}: PageMetadataInput): Metadata {
  const canonicalPath = localizedPath(locale, englishPath);
  const canonicalUrl = absoluteUrl(canonicalPath);
  const imageUrl = absoluteAssetUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates(englishPath),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Chrobox',
      type,
      locale: ogLocale(locale),
      alternateLocale: ogAlternateLocales(locale),
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chrobox',
    url: SITE_URL,
    logo: absoluteUrl('/logo.png'),
    sameAs: [
      'https://apps.apple.com/kr/app/%ED%81%AC%EB%A1%9C%EB%B0%95%EC%8A%A4-%ED%83%80%EC%9E%84%EB%B0%95%EC%8A%A4-%ED%94%8C%EB%9E%98%EB%84%88/id6755880209',
      'https://play.google.com/store/apps/details?id=com.richjunproject.chrobox',
    ],
  };
}
