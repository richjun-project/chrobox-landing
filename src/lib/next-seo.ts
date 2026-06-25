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
          width: 1200,
          height: 631,
          type: 'image/png',
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

const APP_STORE_URL =
  'https://apps.apple.com/kr/app/%ED%81%AC%EB%A1%9C%EB%B0%95%EC%8A%A4-%ED%83%80%EC%9E%84%EB%B0%95%EC%8A%A4-%ED%94%8C%EB%9E%98%EB%84%88/id6755880209';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.richjunproject.chrobox';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chrobox',
    url: SITE_URL,
    logo: absoluteUrl('/logo.png'),
    sameAs: [APP_STORE_URL, PLAY_STORE_URL],
  };
}

export function softwareApplicationSchema(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Chrobox',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'iOS, Android',
    url: SITE_URL,
    description,
    image: absoluteUrl('/og-image.png'),
    installUrl: [APP_STORE_URL, PLAY_STORE_URL],
    sameAs: [APP_STORE_URL, PLAY_STORE_URL],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: { '@type': 'Organization', name: 'Chrobox', url: SITE_URL },
  };
}
