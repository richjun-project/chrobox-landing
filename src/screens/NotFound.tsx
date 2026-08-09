'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Button, Container, Text } from '@mantine/core';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { tokens } from '../theme';
import { contentLanguageForLocale, localeFromPathname, localizedPath } from '../lib/seo';
import { uiCopy } from '../lib/uiCopy';

export function NotFound() {
  const pathname = usePathname() ?? '/';
  const locale = localeFromPathname(pathname);
  const lang = contentLanguageForLocale(locale);
  const ui = uiCopy(lang);
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
