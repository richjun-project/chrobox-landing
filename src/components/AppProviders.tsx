'use client';

import { type ReactNode, useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { theme } from '../theme';
import i18n from '../i18n';
import { DEFAULT_LOCALE, htmlLangForLocale, localeFromPathname } from '../lib/seo';

export function AppProviders({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    const locale = localeFromPathname(pathname);
    // Locale-prefixed routes drive the UI language; the default (en) route
    // keeps the visitor's saved/browser preference.
    const uiLanguage = locale === DEFAULT_LOCALE
      ? (localStorage.getItem('language') || (navigator.language.startsWith('ko') ? 'ko' : 'en'))
      : locale;

    if (i18n.language !== uiLanguage) {
      i18n.changeLanguage(uiLanguage);
    }

    document.documentElement.lang = htmlLangForLocale(locale);
  }, [pathname]);

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
