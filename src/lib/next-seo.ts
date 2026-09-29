import type { Metadata } from 'next';
import {
  SITE_URL,
  absoluteUrl,
  fitDescription,
  fitTitle,
  hreflangAlternates,
  htmlLangForLocale,
  localizedPath,
  ogAlternateLocales,
  ogLocale,
  type SiteLocale,
} from './seo';
import { COMPANY_INFO, PRO_PRICES_USD, STORE_RATING, THREADS_URL } from './company';

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
    description: fitDescription(description),
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates(englishPath, locales),
      // Per-locale blog feed (scripts/generate-feeds.mjs) — feed discovery for
      // readers, AI crawlers, and Naver Search Advisor.
      types: {
        'application/rss+xml': absoluteUrl(localizedPath(locale, '/rss.xml')),
      },
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
// Entity ids: every page points at the same Organization / WebSite / app nodes,
// so parsers merge them into one entity instead of one "Chrobox" per page.
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const APP_ID = `${SITE_URL}/#app`;

// Store-verified ratings — update alongside the stores, never hand-edit upward.
// Store rating lives in ./company (shared with the hero stats row).
export { STORE_RATING };

/** Compact Organization node for `publisher` — same @id as organizationSchema(). */
export function organizationRef() {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Chrobox',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo.png'),
      width: 512,
      height: 512,
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    ...organizationRef(),
    // Operator details are the ones printed in the footer (lib/company.ts).
    legalName: COMPANY_INFO.name,
    email: COMPANY_INFO.email,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: COMPANY_INFO.email,
    },
    // LLMO entity linking: sameAs declares "these surfaces are the same entity".
    // Only official, verified accounts belong here.
    sameAs: [APP_STORE_URL, PLAY_STORE_URL, THREADS_URL],
  };
}

export function websiteSchema(locale: SiteLocale, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Chrobox',
    url: absoluteUrl('/'),
    description,
    inLanguage: htmlLangForLocale(locale),
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function softwareApplicationSchema(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': APP_ID,
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
    // No free offer: without Pro the app stops at the paywall. Monthly and yearly
    // start with a store free trial; prices are the US App Store's.
    offers: [
      { '@type': 'Offer', name: 'Pro Monthly', price: PRO_PRICES_USD.monthly, priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Pro Yearly', price: PRO_PRICES_USD.yearly, priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Pro Lifetime', price: PRO_PRICES_USD.lifetime, priceCurrency: 'USD' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: STORE_RATING.value,
      ratingCount: STORE_RATING.count,
      bestRating: '5',
      worstRating: '1',
    },
    publisher: organizationRef(),
  };
}
