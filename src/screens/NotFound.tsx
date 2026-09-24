'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Button, Container, Text } from '@mantine/core';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { tokens } from '../theme';
import { contentLanguageForLocale, localeFromPathname, localizedPath, type ContentLanguage } from '../lib/seo';

export type NotFoundMessages = Record<ContentLanguage, { notFoundMessage: string; goHome: string }>;

/**
 * One static 404.html serves every locale, so the locale is only known on the
 * client. The route passes just these two strings per locale (not the whole UI
 * copy table, which would ride along on every page's bundle).
 */
export function NotFound({ messages }: { messages: NotFoundMessages }) {
  const pathname = usePathname() ?? '/';
  const locale = localeFromPathname(pathname);
  const ui = messages[contentLanguageForLocale(locale)] ?? messages.en;
  const homePath = localizedPath(locale, '/');

  return (
    <Box style={{ minHeight: '100vh', background: tokens.colors.background }}>
      <Navbar />
      <Container size="sm" pt={180} pb={120} style={{ textAlign: 'center' }}>
        <Text component="h1" style={{ fontSize: '48px', fontWeight: 800, color: tokens.colors.gray900 }}>
          404
        </Text>
        <Text size="xl" mt={12} style={{ color: tokens.colors.gray600 }}>
          {ui.notFoundMessage}
        </Text>
        <Button component={Link} href={homePath} mt={32} style={{ background: tokens.colors.gray900 }}>
          {ui.goHome}
        </Button>
      </Container>
      <Footer />
    </Box>
  );
}
