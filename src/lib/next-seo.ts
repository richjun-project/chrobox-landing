import type { Metadata } from 'next';
import {
  SITE_URL,
  absoluteUrl,
  fitTitle,
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
  /** Restrict the hreflang cluster to locales that actually have translated content. */
  locales?: readonly SiteLocale[];
};

function absoluteAssetUrl(url: string) {
  return /^https?:\/\//.test(url) ? url : absoluteUrl(url);
}

export function languageAlternates(englishPath: string, locales?: readonly SiteLocale[]) {
  return Object.fromEntries(
    hreflangAlternates(englishPath, locales).map((alternate) => [alternate.hrefLang, alternate.href]),
  );
}

export function pageMetadata({
  locale,
  englishPath,
  title,
  description,
  type = 'website',
  image = '/og-image.png',
  locales,
}: PageMetadataInput): Metadata {
  const canonicalPath = localizedPath(locale, englishPath);
  const canonicalUrl = absoluteUrl(canonicalPath);
  const imageUrl = absoluteAssetUrl(image);
  // `<title>` is width-constrained so it survives SERP truncation intact;
  // OG/Twitter cards keep the full descriptive title.
  const serpTitle = fitTitle(title);

  return {
    title: serpTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates(englishPath, locales),
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

// Store-verified ratings — update alongside the stores, never hand-edit upward.
// 2026-08-09: App Store KR 4.0★ × 9 ratings (iTunes lookup API), Play 5.0★ × 5 ratings
// (Play page JSON-LD). Combined weighted: (4.0×9 + 5.0×5) / 14 = 4.36 → 4.4.
export const STORE_RATING = { value: '4.4', count: 14 };

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chrobox',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo.png'),
      width: 512,
      height: 512,
    },
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
    featureList: [
      'AI-powered timeboxing and daily planning',
      'App blocking and distraction-free focus mode',
      'Routine tracking with streak grid',
      'Daily retrospective with AI feedback',
      'Lock screen and home screen widgets',
      'Weekly AI productivity analysis and titles',
      'Visual hourly timeline',
      'Cross-platform sync (iOS, Android)',
    ],
    screenshot: [
      absoluteUrl('/screenshots/en/1.webp'),
      absoluteUrl('/screenshots/en/8.webp'),
      absoluteUrl('/screenshots/en/6.webp'),
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'Free',
        price: '0',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'Pro Monthly',
        price: '4.99',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'Pro Yearly',
        price: '39.99',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'Pro Lifetime',
        price: '99.99',
        priceCurrency: 'USD',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: STORE_RATING.value,
      ratingCount: STORE_RATING.count,
      bestRating: '5',
      worstRating: '1',
    },
    publisher: { '@type': 'Organization', name: 'Chrobox', url: SITE_URL },
  };
}
