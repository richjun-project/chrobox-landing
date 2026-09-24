'use client';

import { type ReactNode, useEffect, useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MantineProvider } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { theme } from '../theme';
import i18n, { i18nForLocale } from '../i18n';
import { DEFAULT_LOCALE, htmlLangForLocale, localeFromPathname } from '../lib/seo';

export function AppProviders({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/';
  const locale = localeFromPathname(pathname);
  // Resolved during render (not in an effect) so the prerendered HTML of
  // /ko, /ja, … is written in that language.
  const i18nInstance = useMemo(() => i18nForLocale(locale), [locale]);

  useEffect(() => {
    // The default (en) route keeps the visitor's saved/browser preference.
    if (locale === DEFAULT_LOCALE) {
      const preferred = localStorage.getItem('language') || (navigator.language.startsWith('ko') ? 'ko' : 'en');

      if (i18n.language !== preferred) {
        i18n.changeLanguage(preferred);
      }
    }

    document.documentElement.lang = htmlLangForLocale(locale);
  }, [locale]);

  return (
    <I18nextProvider i18n={i18nInstance}>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </I18nextProvider>
  );
}
