import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Box, Container, Text, SimpleGrid, Card, Group, Badge, Anchor } from '@mantine/core';
import { IconArrowRight, IconChevronRight } from '@tabler/icons-react';
import { tokens } from '../theme';
import { comparisons } from '../data/comparisons';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export function ComparisonList() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'ko' ? 'ko' : 'en';

  const title = lang === 'ko'
    ? 'Chrobox 대안 & 비교 | 타임박싱 앱'
    : 'Chrobox Alternatives & Comparisons | Time-Boxing App';
  const metaDesc = lang === 'ko'
    ? 'Chrobox를 Todoist, Notion, TickTick, Google 캘린더 등 인기 앱과 비교해보세요. 당신에게 맞는 생산성 앱을 찾아보세요.'
    : 'Compare Chrobox to Todoist, Notion, TickTick, Google Calendar, and more. Find the best productivity app for your workflow.';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chrobox.net/' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://chrobox.net/compare' },
    ],
  };

  return (
    <Box style={{ minHeight: '100vh', background: tokens.colors.background }}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href="https://chrobox.net/compare" />
        <link rel="alternate" hrefLang="en" href="https://chrobox.net/compare" />
        <link rel="alternate" hrefLang="ko" href="https://chrobox.net/ko/compare" />
        <link rel="alternate" hrefLang="x-default" href="https://chrobox.net/compare" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content="https://chrobox.net/compare" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <Box
        style={{
          background: tokens.colors.gray900,
          paddingTop: '140px',
          paddingBottom: '80px',
        }}
      >
        <Container size="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.6 }}>
            {/* Breadcrumb */}
            <Box component="nav" aria-label="breadcrumb" mb={32}>
              <Box
                component="ol"
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '2px',
                }}
              >
                <Box component="li">
                  <Anchor
                    component={Link}
                    to="/"
                    style={{ fontSize: '13px', color: tokens.colors.gray400, textDecoration: 'none' }}
                  >
                    {lang === 'ko' ? '홈' : 'Home'}
                  </Anchor>
                </Box>
                <Box component="li" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
                  <IconChevronRight size={12} style={{ color: tokens.colors.gray600 }} />
                </Box>
                <Box component="li" aria-current="page">
                  <Text style={{ fontSize: '13px', color: tokens.colors.gray500 }}>
                    {lang === 'ko' ? '비교' : 'Compare'}
                  </Text>
                </Box>
              </Box>
            </Box>

            <Badge
              size="lg"
              style={{ background: tokens.colors.accent, color: 'white', marginBottom: '20px' }}
            >
              {lang === 'ko' ? '앱 비교' : 'App Comparisons'}
            </Badge>

            <Text
              component="h1"
              style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.15,
                marginBottom: '20px',
                maxWidth: '800px',
              }}
            >
              {lang === 'ko'
                ? 'Chrobox vs 다른 생산성 앱'
                : 'Chrobox vs Popular Productivity Apps'}
            </Text>

            <Text
              style={{
                color: tokens.colors.gray400,
                fontSize: '18px',
                lineHeight: 1.6,
                maxWidth: '600px',
              }}
            >
              {lang === 'ko'
                ? '타임박싱이 다른 작업 관리 앱과 어떻게 다른지 비교해보세요. 당신의 워크플로우에 맞는 앱을 찾으세요.'
                : 'See how time-boxing stacks up against other task management apps. Find the right tool for your workflow.'}
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* Stats bar */}
      <Box style={{ background: tokens.colors.gray800, padding: '20px 0' }}>
        <Container size="lg">
          <Group gap={40} wrap="wrap">
            {[
              { value: `${comparisons.length}`, label: lang === 'ko' ? '앱 비교' : 'App Comparisons' },
              { value: '6+', label: lang === 'ko' ? '기능별 비교' : 'Features Compared' },
              { value: '100%', label: lang === 'ko' ? '편향 없는 분석' : 'Unbiased Analysis' },
              { value: '2025', label: lang === 'ko' ? '최신 정보' : 'Up to Date' },
            ].map((stat) => (
              <Box key={stat.label}>
                <Text style={{ fontSize: '22px', fontWeight: 800, color: 'white' }}>{stat.value}</Text>
                <Text style={{ fontSize: '13px', color: tokens.colors.gray400 }}>{stat.label}</Text>
              </Box>
            ))}
          </Group>
        </Container>
      </Box>

      {/* Grid */}
      <Container size="lg" py={80}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger}>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={28}>
            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.slug}
                variants={fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <Link to={`/compare/${comparison.slug}`} style={{ textDecoration: 'none' }}>
                  <Card
                    padding={0}
                    radius="lg"
                    style={{
                      background: 'white',
                      border: `1px solid ${tokens.colors.gray100}`,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Accent strip */}
                    <Box
                      style={{
                        height: '6px',
                        background: `linear-gradient(90deg, ${tokens.colors.accent}, ${tokens.colors.accentDark})`,
                      }}
                    />

                    <Box p={24} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Group gap={8} mb={12}>
                        <Badge
                          size="sm"
                          style={{
                            background: tokens.colors.accentLight,
                            color: tokens.colors.accent,
                            fontWeight: 600,
                          }}
                        >
                          Chrobox
                        </Badge>
                        <Text style={{ fontSize: '13px', color: tokens.colors.gray400 }}>vs</Text>
                        <Badge
                          size="sm"
                          style={{
                            background: tokens.colors.gray100,
                            color: tokens.colors.gray600,
                            fontWeight: 600,
                          }}
                        >
                          {comparison.competitor}
                        </Badge>
                      </Group>

                      <Text
                        component="h2"
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: tokens.colors.gray900,
                          marginBottom: '10px',
                          lineHeight: 1.3,
                        }}
                      >
                        {lang === 'ko' ? comparison.taglineKo : comparison.tagline}
                      </Text>

                      <Text
                        size="sm"
                        style={{
                          color: tokens.colors.gray500,
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          marginBottom: '20px',
                          flex: 1,
                        }}
                      >
                        {lang === 'ko' ? comparison.descriptionKo : comparison.description}
                      </Text>

                      <Group justify="space-between" align="center">
                        <Text size="xs" style={{ color: tokens.colors.gray400 }}>
                          {comparison.features.length} {lang === 'ko' ? '기능 비교' : 'features compared'}
                        </Text>
                        <Group gap={6} style={{ color: tokens.colors.accent }}>
                          <Text size="sm" fw={600}>
                            {lang === 'ko' ? '비교 보기' : 'Compare'}
                          </Text>
                          <IconArrowRight size={16} />
                        </Group>
                      </Group>
                    </Box>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>

      {/* Bottom CTA */}
      <Box style={{ background: tokens.colors.backgroundAlt, paddingTop: '80px', paddingBottom: '80px' }}>
        <Container size="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <Box
              p={{ base: 32, sm: 48 }}
              style={{
                background: `linear-gradient(135deg, ${tokens.colors.gray900} 0%, ${tokens.colors.gray800} 100%)`,
                borderRadius: '24px',
                textAlign: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 'clamp(22px, 3vw, 32px)',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '12px',
                }}
              >
                {lang === 'ko'
                  ? 'Chrobox를 직접 사용해보세요'
                  : 'Try Chrobox for Yourself'}
              </Text>
              <Text style={{ color: tokens.colors.gray400, marginBottom: '32px', fontSize: '16px' }}>
                {lang === 'ko'
                  ? '타임박싱으로 생산성을 혁신하세요. 무료 체험으로 시작하세요.'
                  : 'Experience time-boxing and transform your productivity. Free to start.'}
              </Text>
              <Group justify="center" gap={16} wrap="wrap">
                <Box
                  component="a"
                  href="https://apps.apple.com/kr/app/%ED%81%AC%EB%A1%9C%EB%B0%95%EC%8A%A4-%ED%83%80%EC%9E%84%EB%B0%95%EC%8A%A4-%ED%94%8C%EB%9E%98%EB%84%88/id6755880209"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: tokens.colors.accent,
                    color: 'white',
                    borderRadius: '12px',
                    height: '52px',
                    padding: '0 32px',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '52px',
                    textDecoration: 'none',
                  }}
                >
                  {lang === 'ko' ? 'App Store 다운로드' : 'Download on App Store'}
                </Box>
                <Box
                  component="a"
                  href="https://play.google.com/store/apps/details?id=com.chrobox.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: 'transparent',
                    color: 'white',
                    borderRadius: '12px',
                    height: '52px',
                    padding: '0 32px',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '50px',
                    textDecoration: 'none',
                    border: `1px solid ${tokens.colors.gray600}`,
                  }}
                >
                  {lang === 'ko' ? 'Google Play 다운로드' : 'Get it on Google Play'}
                </Box>
              </Group>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
