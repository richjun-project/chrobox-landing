'use client';

import { usePathname } from 'next/navigation';
import { Box, Container } from '@mantine/core';
import { tokens } from '../theme';
import { localeFromPathname, localizedPath } from '../lib/seo';
import type { UiCopy } from '../lib/uiCopy';
import type { HomeExploreData } from '../lib/viewData';
import { LinkPills } from './LinkPills';

/**
 * Crawlable links from the home page (the page search engines revisit most) to the
 * comparison and template pages people actually search for. Resolved on the server
 * (lib/viewData.ts homeExplore) — no content packs in the client bundle.
 */
export function HomeExplore({ explore, ui }: { explore: HomeExploreData; ui: UiCopy }) {
  const pathname = usePathname() ?? '/';
  const locale = localeFromPathname(pathname);

  return (
    <Box component="section" py={64} style={{ background: tokens.colors.background }}>
      <Container size="lg">
        <LinkPills
          title={ui.appComparisons}
          links={explore.comparisons.map((item) => ({
            href: localizedPath(locale, `/compare/${item.slug}`),
            label: `Chrobox vs ${item.competitor}`,
          }))}
        />
        <LinkPills
          title={ui.professionTemplates}
          links={explore.templates.map((item) => ({
            href: localizedPath(locale, `/templates/${item.slug}`),
            label: item.profession,
          }))}
        />
      </Container>
    </Box>
  );
}
