import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ColorSchemeScript } from '@mantine/core';
import '../index.css';
import { AppProviders } from '../components/AppProviders';
import { DEFAULT_LOCALE, SITE_URL, htmlLangForLocale, localeFromPathSegment, seoCopy } from '../lib/seo';

const copy = seoCopy('en');

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Chrobox',
  title: {
    default: copy.homeTitle,
    template: '%s',
  },
  description: copy.homeDescription,
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/site.webmanifest',
  category: 'productivity',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#20C997',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ locale?: string }> }>) {
  const { locale: localeSegment } = await params;
  const locale = localeFromPathSegment(localeSegment) ?? DEFAULT_LOCALE;

  return (
    <html lang={htmlLangForLocale(locale)} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <AppProviders>
          {children}
          <Analytics />
        </AppProviders>
      </body>
    </html>
  );
}
