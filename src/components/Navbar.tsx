import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Group, Text, Button, Container, ActionIcon, Menu } from '@mantine/core';
import { IconMenu2, IconX, IconLanguage, IconChevronDown } from '@tabler/icons-react';
import { Logo } from './Logo';
import { tokens } from '../theme';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = location.pathname === '/';

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
      navigate('/' + href);
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
      navigate('/');
    }
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
            <Box onClick={goHome} style={{ cursor: 'pointer' }}>
              <Logo size="md" />
            </Box>

            {/* Desktop Navigation */}
            <Group gap={40} visibleFrom="md">
              {navItems.map((item) => (
                <motion.div
                  key={item.key}
                  whileHover={{ y: -2 }}
                  style={{ cursor: 'pointer' }}
                  onClick={() => scrollToSection(item.href)}
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
                </motion.div>
              ))}
            </Group>

            {/* Right Section */}
            <Group gap={12}>
              {/* Language Switcher */}
              <Menu shadow="md" width={140}>
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
                      {i18n.language === 'ko' ? '한국어' : 'EN'}
                    </Button>
                  </motion.div>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    onClick={() => {
                      i18n.changeLanguage('en');
                      localStorage.setItem('language', 'en');
                    }}
                    style={{
                      fontWeight: i18n.language === 'en' ? 600 : 400,
                      color: i18n.language === 'en' ? tokens.colors.accent : undefined,
                    }}
                  >
                    English
                  </Menu.Item>
                  <Menu.Item
                    onClick={() => {
                      i18n.changeLanguage('ko');
                      localStorage.setItem('language', 'ko');
                    }}
                    style={{
                      fontWeight: i18n.language === 'ko' ? 600 : 400,
                      color: i18n.language === 'ko' ? tokens.colors.accent : undefined,
                    }}
                  >
                    한국어
                  </Menu.Item>
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
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  background: tokens.colors.gray50,
                }}
              >
                <Text size="lg" fw={600} style={{ color: tokens.colors.gray900 }}>
                  {t(`nav.${item.key}`)}
                </Text>
              </motion.div>
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
