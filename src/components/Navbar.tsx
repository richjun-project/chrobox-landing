'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';
import { Box, Group, Text, Button, Container, ActionIcon, Menu } from '@mantine/core';
import { IconMenu2, IconX, IconLanguage, IconChevronDown } from '@tabler/icons-react';
import { Logo } from './Logo';
import { tokens } from '../theme';
import {
  SEO_LOCALES,
  englishPathFromLocalizedPath,
  localeFromPathSegment,
  localeFromPathname,
  localizedPath,
  type SiteLocale,
} from '../lib/seo';

const NAV_LOCALES = SEO_LOCALES.filter((item) => item.code === 'en' || localeFromPathSegment(item.pathPrefix.slice(1)));

export function Navbar() {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const locale = localeFromPathname(pathname);
  const homePath = localizedPath(locale, '/');
  const isHome = pathname === homePath;

  const switchLanguage = (targetLocale: SiteLocale) => {
    const englishPath = englishPathFromLocalizedPath(pathname);
    const search = typeof window === 'undefined' ? '' : window.location.search;
    const hash = typeof window === 'undefined' ? '' : window.location.hash;
    const nextPath = `${localizedPath(targetLocale, englishPath)}${search}${hash}`;
    router.push(nextPath);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'features', href: '#features' },
    { key: 'howItWorks', href: '#how-it-works' },
    { key: 'pricing', href: '#pricing' },
  ];

  const scrollToSection = (href: string) => {
    if (!isHome) {
      router.push(`${homePath}${href}`);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const goHome = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push(homePath);
    }
  };

  const sectionHref = (href: string) => {
    if (isHome) {
      return href;
    }

    return `${homePath}${href}`;
  };

  return (
    <>
      <motion.header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '16px 0',
          background: scrolled
            ? 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid ${tokens.colors.gray100}` : 'none',
          transition: 'all 0.3s ease',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Container size="xl">
          <Group justify="space-between" align="center">
            {/* Logo */}
            <Box
              component="a"
              href={homePath}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                goHome();
              }}
              style={{ cursor: 'pointer', textDecoration: 'none' }}
              aria-label="Chrobox Home"
            >
              <Logo size="md" />
            </Box>

            {/* Desktop Navigation */}
            <Group gap={40} component="nav" visibleFrom="md" aria-label="Main navigation">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={sectionHref(item.href)}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  whileHover={{ y: -2 }}
                  style={{ cursor: 'pointer', textDecoration: 'none' }}
                >
                  <Text
                    size="sm"
                    fw={500}
                    style={{
                      color: tokens.colors.gray600,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = tokens.colors.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = tokens.colors.gray600;
                    }}
                  >
                    {t(`nav.${item.key}`)}
                  </Text>
                </motion.a>
              ))}
            </Group>

            {/* Right Section */}
            <Group gap={12}>
              {/* Language Switcher */}
              <Menu shadow="md" width={220}>
                <Menu.Target>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="subtle"
                      size="sm"
                      leftSection={<IconLanguage size={18} />}
                      rightSection={<IconChevronDown size={14} />}
                      style={{
                        color: tokens.colors.gray600,
                        fontWeight: 500,
                      }}
                    >
                      {locale.toUpperCase()}
                    </Button>
                  </motion.div>
                </Menu.Target>
                <Menu.Dropdown style={{ maxHeight: '360px', overflowY: 'auto' }}>
                  {NAV_LOCALES.map((item) => (
                    <Menu.Item
                      key={item.code}
                      onClick={() => switchLanguage(item.code)}
                      style={{
                        fontWeight: locale === item.code ? 600 : 400,
                        color: locale === item.code ? tokens.colors.accent : undefined,
                      }}
                    >
                      {item.nativeLabel} ({item.code})
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>

              {/* Download Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'none' }}
                data-visible-from="sm"
              >
                <Button
                  onClick={() => scrollToSection('#download')}
                  style={{
                    background: tokens.colors.gray900,
                    border: 'none',
                    borderRadius: '12px',
                    height: '44px',
                    padding: '0 24px',
                    fontWeight: 600,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                  visibleFrom="sm"
                >
                  {t('nav.download')}
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <ActionIcon
                variant="subtle"
                size="lg"
                hiddenFrom="md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ color: tokens.colors.gray900 }}
              >
                {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
              </ActionIcon>
            </Group>
          </Group>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 72,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(12px)',
              zIndex: 999,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={sectionHref(item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  background: tokens.colors.gray50,
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <Text size="lg" fw={600} style={{ color: tokens.colors.gray900 }}>
                  {t(`nav.${item.key}`)}
                </Text>
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                fullWidth
                size="lg"
                onClick={() => scrollToSection('#download')}
                style={{
                  background: tokens.colors.gray900,
                  border: 'none',
                  borderRadius: '12px',
                  height: '56px',
                  fontWeight: 600,
                  marginTop: '16px',
                }}
              >
                {t('nav.download')}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
