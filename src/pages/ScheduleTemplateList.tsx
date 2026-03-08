import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Box, Container, Text, SimpleGrid, Card, Group, Badge } from '@mantine/core';
import { IconArrowRight, IconClock } from '@tabler/icons-react';
import { tokens } from '../theme';
import { scheduleTemplates, categoryColors } from '../data/scheduleTemplates';
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

export function ScheduleTemplateList() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'ko' ? 'ko' : 'en';

  const title = lang === 'ko'
    ? '직업별 하루 일정 템플릿 | Chrobox'
    : 'Daily Schedule Templates for Every Profession | Chrobox';
  const metaDesc = lang === 'ko'
    ? '20가지 직업별 맞춤 하루 일정 템플릿. 소프트웨어 개발자, 간호사, 교사 등을 위한 무료 타임박싱 플랜.'
    : 'Free daily schedule templates for 20+ professions. Proven time-boxing plans for developers, nurses, teachers, and more.';

  return (
    <Box style={{ minHeight: '100vh', background: tokens.colors.background }}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href="https://chrobox.net/templates" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content="https://chrobox.net/templates" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Daily Schedule Templates',
          description: metaDesc,
          url: 'https://chrobox.net/templates',
          publisher: { '@type': 'Organization', name: 'Chrobox', url: 'https://chrobox.net' },
        })}</script>
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
            <Badge
              size="lg"
              style={{ background: tokens.colors.accent, color: 'white', marginBottom: '20px' }}
            >
              {lang === 'ko' ? '무료 템플릿' : 'Free Templates'}
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
                ? '모든 직업을 위한 하루 일정 템플릿'
                : 'Daily Schedule Templates for Every Profession'}
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
                ? '전문가들이 검증한 타임박싱 플랜으로 당신의 하루를 최적화하세요.'
                : 'Optimize your day with proven time-boxing plans crafted for your specific role.'}
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* Stats bar */}
      <Box style={{ background: tokens.colors.gray800, padding: '20px 0' }}>
        <Container size="lg">
          <Group gap={40} wrap="wrap">
            {[
              { value: `${scheduleTemplates.length}`, label: lang === 'ko' ? '직업 템플릿' : 'Profession Templates' },
              { value: '8–12', label: lang === 'ko' ? '일일 타임블록' : 'Daily Time Blocks' },
              { value: '3–5', label: lang === 'ko' ? '맞춤 생산성 팁' : 'Custom Productivity Tips' },
              { value: '100%', label: lang === 'ko' ? '무료' : 'Free to Use' },
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
            {scheduleTemplates.map((template, index) => {
              const categories = [...new Set(template.schedule.map((b) => b.category))].slice(0, 3);
              return (
                <motion.div key={template.slug} variants={fadeInUp} transition={{ duration: 0.45, delay: index * 0.04 }}>
                  <Link to={`/templates/${template.slug}`} style={{ textDecoration: 'none' }}>
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
                      {/* Color strip with category dots */}
                      <Box
                        style={{
                          height: '6px',
                          background: `linear-gradient(90deg, ${categories.map((c) => categoryColors[c]).join(', ')})`,
                        }}
                      />

                      <Box p={24} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <Text
                          component="h2"
                          style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: tokens.colors.gray900,
                            marginBottom: '8px',
                            lineHeight: 1.3,
                          }}
                        >
                          {lang === 'ko' ? template.professionKo : template.profession}
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
                          {lang === 'ko' ? template.descriptionKo : template.description}
                        </Text>

                        <Box>
                          <Group gap={8} mb={16} wrap="wrap">
                            <Group gap={6}>
                              <IconClock size={14} style={{ color: tokens.colors.gray400 }} />
                              <Text size="xs" style={{ color: tokens.colors.gray500 }}>
                                {template.schedule.length} {lang === 'ko' ? '타임블록' : 'time blocks'}
                              </Text>
                            </Group>
                          </Group>

                          <Group justify="space-between" align="center">
                            <Group gap={6} wrap="wrap">
                              {categories.map((cat) => (
                                <Box
                                  key={cat}
                                  style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: categoryColors[cat],
                                  }}
                                />
                              ))}
                            </Group>
                            <Group gap={6} style={{ color: tokens.colors.accent }}>
                              <Text size="sm" fw={600}>
                                {lang === 'ko' ? '보기' : 'View'}
                              </Text>
                              <IconArrowRight size={16} />
                            </Group>
                          </Group>
                        </Box>
                      </Box>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
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
                  ? 'Chrobox로 이 템플릿을 실제로 사용해보세요'
                  : 'Put These Templates to Work with Chrobox'}
              </Text>
              <Text style={{ color: tokens.colors.gray400, marginBottom: '32px', fontSize: '16px' }}>
                {lang === 'ko'
                  ? '타임박싱 앱으로 오늘부터 시작하세요. 무료 체험.'
                  : 'The time-boxing app that turns plans into results. Free to start.'}
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
                  {lang === 'ko' ? 'App Store' : 'App Store'}
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
                  {lang === 'ko' ? 'Google Play' : 'Google Play'}
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
