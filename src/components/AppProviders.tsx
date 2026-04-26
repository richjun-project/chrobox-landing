'use client';

import { type ReactNode, useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { theme } from '../theme';
import i18n from '../i18n';
import { contentLanguageForLocale, htmlLangForLocale, localeFromPathname } from '../lib/seo';

export function AppProviders({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    const locale = localeFromPathname(pathname);
    const contentLanguage = contentLanguageForLocale(locale);

    if (i18n.language !== contentLanguage) {
      i18n.changeLanguage(contentLanguage);
    }

    document.documentElement.lang = htmlLangForLocale(locale);
  }, [pathname]);

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
