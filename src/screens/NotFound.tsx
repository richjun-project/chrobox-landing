'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Button, Container, Text } from '@mantine/core';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { tokens } from '../theme';
import { contentLanguageForLocale, localeFromPathname, localizedPath } from '../lib/seo';

export function NotFound() {
  const pathname = usePathname() ?? '/';
  const locale = localeFromPathname(pathname);
  const lang = contentLanguageForLocale(locale);
  const homePath = localizedPath(locale, '/');

  return (
    <Box style={{ minHeight: '100vh', background: tokens.colors.background }}>
      <Navbar />
      <Container size="sm" pt={180} pb={120} style={{ textAlign: 'center' }}>
        <Text component="h1" style={{ fontSize: '48px', fontWeight: 800, color: tokens.colors.gray900 }}>
          404
        </Text>
        <Text size="xl" mt={12} style={{ color: tokens.colors.gray600 }}>
          {lang === 'ko' ? '요청한 페이지를 찾을 수 없습니다.' : 'The page you requested could not be found.'}
        </Text>
        <Button component={Link} href={homePath} mt={32} style={{ background: tokens.colors.gray900 }}>
          {lang === 'ko' ? '홈으로 이동' : 'Go Home'}
        </Button>
      </Container>
      <Footer />
    </Box>
  );
}
