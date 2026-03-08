import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Text, Group, Badge, SimpleGrid, Card, Button, Breadcrumbs, Anchor } from '@mantine/core';
import { IconArrowLeft, IconArrowRight, IconBulb, IconChevronRight } from '@tabler/icons-react';
import { tokens } from '../theme';
import { getScheduleTemplate, scheduleTemplates, categoryColors, categoryLabels } from '../data/scheduleTemplates';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const APP_STORE_URL = 'https://apps.apple.com/kr/app/%ED%81%AC%EB%A1%9C%EB%B0%95%EC%8A%A4-%ED%83%80%EC%9E%84%EB%B0%95%EC%8A%A4-%ED%94%8C%EB%9E%98%EB%84%88/id6755880209';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.chrobox.app';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function ScheduleTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const lang = i18n.language === 'ko' ? 'ko' : 'en';

  const template = slug ? getScheduleTemplate(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!template) {
    return <Navigate to="/templates" replace />;
  }

  const profession = lang === 'ko' ? template.professionKo : template.profession;
  const description = lang === 'ko' ? template.descriptionKo : template.description;
  const tips = lang === 'ko' ? template.tipsKo : template.tips;

  const pageTitle = `${template.profession} Daily Schedule Template | Free Time-Boxing Plan | Chrobox`;
  const canonicalUrl = `https://chrobox.net/templates/${template.slug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chrobox.net/' },
      { '@type': 'ListItem', position: 2, name: 'Templates', item: 'https://chrobox.net/templates' },
      { '@type': 'ListItem', position: 3, name: `${template.profession} Daily Schedule`, item: canonicalUrl },
    ],
  };

  const relatedTemplates = template.relatedSlugs
    .map((s) => scheduleTemplates.find((t) => t.slug === s))
    .filter(Boolean)
    .slice(0, 4) as typeof scheduleTemplates;

  return (
    <Box style={{ minHeight: '100vh', background: tokens.colors.background }}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <Box
        style={{
          background: tokens.colors.gray900,
          paddingTop: '120px',
          paddingBottom: '64px',
        }}
      >
        <Container size="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.6 }}>
            {/* Breadcrumb */}
            <Breadcrumbs
              separator={<IconChevronRight size={14} style={{ color: tokens.colors.gray500 }} />}
              mb={32}
            >
              <Anchor component={Link} to="/" style={{ color: tokens.colors.gray400, fontSize: '14px' }}>
                Home
              </Anchor>
              <Anchor component={Link} to="/templates" style={{ color: tokens.colors.gray400, fontSize: '14px' }}>
                Templates
              </Anchor>
              <Text size="sm" style={{ color: tokens.colors.gray300 }}>
                {template.profession}
              </Text>
            </Breadcrumbs>

            <Link to="/templates" style={{ textDecoration: 'none' }}>
              <Button
                variant="subtle"
                leftSection={<IconArrowLeft size={16} />}
                style={{ color: tokens.colors.gray400, marginBottom: '24px', paddingLeft: 0 }}
              >
                {lang === 'ko' ? '모든 템플릿 보기' : 'All Templates'}
              </Button>
            </Link>

            <Badge
              size="lg"
              style={{ background: tokens.colors.accent, color: 'white', marginBottom: '16px' }}
            >
              {lang === 'ko' ? '무료 스케줄 템플릿' : 'Free Schedule Template'}
            </Badge>

            <Text
              component="h1"
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              {lang === 'ko'
                ? `${profession} 하루 일정 템플릿`
                : `${template.profession} Daily Schedule Template`}
            </Text>

            <Text
              style={{
                color: tokens.colors.gray400,
                fontSize: '18px',
                lineHeight: 1.6,
                maxWidth: '640px',
              }}
            >
              {description}
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* Timeline */}
      <Container size="lg" py={80}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <Text
              component="h2"
              style={{
                fontSize: '28px',
                fontWeight: 700,
                color: tokens.colors.gray900,
                marginBottom: '8px',
              }}
            >
              {lang === 'ko' ? '하루 타임라인' : 'Daily Timeline'}
            </Text>
            <Text style={{ color: tokens.colors.gray500, marginBottom: '40px' }}>
              {lang === 'ko'
                ? '최고의 생산성을 위한 시간별 계획'
                : 'Hour-by-hour plan for peak productivity'}
            </Text>
          </motion.div>

          <Box style={{ position: 'relative' }}>
            {/* Vertical line */}
            <Box
              style={{
                position: 'absolute',
                left: '112px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: tokens.colors.gray200,
              }}
              visibleFrom="sm"
            />

            <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {template.schedule.map((block, index) => {
                const color = categoryColors[block.category];
                const label = categoryLabels[block.category][lang];
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Group
                      align="flex-start"
                      gap={24}
                      style={{
                        flexWrap: 'wrap',
                      }}
                    >
                      {/* Time */}
                      <Box
                        style={{
                          minWidth: '96px',
                          textAlign: 'right',
                          paddingTop: '14px',
                          flexShrink: 0,
                        }}
                        visibleFrom="sm"
                      >
                        <Text
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: tokens.colors.gray500,
                            fontFamily: '"Space Mono", monospace',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {block.time.split(' - ')[0]}
                        </Text>
                      </Box>

                      {/* Dot */}
                      <Box
                        style={{
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          background: color,
                          marginTop: '17px',
                          flexShrink: 0,
                          boxShadow: `0 0 0 4px ${color}22`,
                        }}
                        visibleFrom="sm"
                      />

                      {/* Card */}
                      <Box style={{ flex: 1, minWidth: '200px' }}>
                        <Card
                          padding={20}
                          radius="md"
                          style={{
                            background: 'white',
                            border: `1px solid ${tokens.colors.gray100}`,
                            boxShadow: tokens.shadows.card,
                          }}
                        >
                          <Group justify="space-between" align="center" mb={8} wrap="wrap" gap={8}>
                            <Text
                              style={{
                                fontSize: '13px',
                                fontWeight: 600,
                                color: tokens.colors.gray500,
                                fontFamily: '"Space Mono", monospace',
                              }}
                              hiddenFrom="sm"
                            >
                              {block.time}
                            </Text>
                            <Text
                              style={{
                                fontSize: '13px',
                                fontWeight: 600,
                                color: tokens.colors.gray500,
                                fontFamily: '"Space Mono", monospace',
                              }}
                              visibleFrom="sm"
                            >
                              {block.time}
                            </Text>
                            <Badge
                              size="sm"
                              style={{
                                background: `${color}18`,
                                color,
                                fontWeight: 600,
                                border: `1px solid ${color}33`,
                              }}
                            >
                              {label}
                            </Badge>
                          </Group>
                          <Text style={{ fontWeight: 600, color: tokens.colors.gray900, fontSize: '16px' }}>
                            {block.task}
                          </Text>
                        </Card>
                      </Box>
                    </Group>
                  </motion.div>
                );
              })}
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* Tips */}
      <Box style={{ background: tokens.colors.backgroundAlt, paddingTop: '80px', paddingBottom: '80px' }}>
        <Container size="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <Group gap={12} mb={8}>
                <IconBulb size={28} style={{ color: tokens.colors.accent }} />
                <Text
                  component="h2"
                  style={{ fontSize: '28px', fontWeight: 700, color: tokens.colors.gray900 }}
                >
                  {lang === 'ko' ? '생산성 팁' : 'Productivity Tips'}
                </Text>
              </Group>
              <Text style={{ color: tokens.colors.gray500, marginBottom: '40px' }}>
                {lang === 'ko'
                  ? `${profession}를 위한 전문가 조언`
                  : `Expert advice for ${template.profession}s`}
              </Text>
            </motion.div>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={24}>
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card
                    padding={24}
                    radius="lg"
                    style={{
                      background: 'white',
                      border: `1px solid ${tokens.colors.gray100}`,
                      boxShadow: tokens.shadows.card,
                      height: '100%',
                    }}
                  >
                    <Box
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: tokens.colors.accentLight,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        flexShrink: 0,
                      }}
                    >
                      <Text style={{ fontWeight: 700, color: tokens.colors.accent, fontSize: '16px' }}>
                        {index + 1}
                      </Text>
                    </Box>
                    <Text style={{ color: tokens.colors.gray700, lineHeight: 1.6 }}>{tip}</Text>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>
          </motion.div>
        </Container>
      </Box>

      {/* CTA */}
      <Container size="lg" py={80}>
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
                ? `Chrobox로 ${profession} 스케줄을 시작하세요`
                : `Start your ${template.profession} schedule with Chrobox`}
            </Text>
            <Text style={{ color: tokens.colors.gray400, marginBottom: '32px', fontSize: '16px' }}>
              {lang === 'ko'
                ? '타임박싱으로 생산성을 혁신하세요. 무료로 시작하세요.'
                : 'Transform your productivity with intelligent time-boxing. Free to start.'}
            </Text>
            <Group justify="center" gap={16} wrap="wrap">
              <Button
                component="a"
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                style={{
                  background: tokens.colors.accent,
                  border: 'none',
                  borderRadius: '12px',
                  height: '52px',
                  padding: '0 32px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                {lang === 'ko' ? 'App Store 다운로드' : 'Download on App Store'}
              </Button>
              <Button
                component="a"
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="outline"
                style={{
                  borderColor: tokens.colors.gray600,
                  color: 'white',
                  borderRadius: '12px',
                  height: '52px',
                  padding: '0 32px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                {lang === 'ko' ? 'Google Play 다운로드' : 'Get it on Google Play'}
              </Button>
            </Group>
          </Box>
        </motion.div>
      </Container>

      {/* Related Templates */}
      {relatedTemplates.length > 0 && (
        <Box style={{ background: tokens.colors.backgroundAlt, paddingTop: '80px', paddingBottom: '80px' }}>
          <Container size="lg">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                <Text
                  component="h2"
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: tokens.colors.gray900,
                    marginBottom: '8px',
                  }}
                >
                  {lang === 'ko' ? '관련 템플릿' : 'Related Templates'}
                </Text>
                <Text style={{ color: tokens.colors.gray500, marginBottom: '40px' }}>
                  {lang === 'ko'
                    ? '비슷한 직업을 위한 스케줄 템플릿'
                    : 'Schedule templates for similar professions'}
                </Text>
              </motion.div>

              <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={24}>
                {relatedTemplates.map((related, index) => (
                  <motion.div
                    key={related.slug}
                    variants={fadeInUp}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Link to={`/templates/${related.slug}`} style={{ textDecoration: 'none' }}>
                      <Card
                        padding={24}
                        radius="lg"
                        style={{
                          background: 'white',
                          border: `1px solid ${tokens.colors.gray100}`,
                          boxShadow: tokens.shadows.card,
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          height: '100%',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = tokens.shadows.cardHover;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = tokens.shadows.card;
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            color: tokens.colors.gray900,
                            marginBottom: '8px',
                          }}
                        >
                          {lang === 'ko' ? related.professionKo : related.profession}
                        </Text>
                        <Text
                          size="sm"
                          style={{
                            color: tokens.colors.gray500,
                            lineHeight: 1.5,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            marginBottom: '16px',
                          }}
                        >
                          {lang === 'ko' ? related.descriptionKo : related.description}
                        </Text>
                        <Group gap={6} style={{ color: tokens.colors.accent }}>
                          <Text size="sm" fw={600}>
                            {lang === 'ko' ? '보기' : 'View'}
                          </Text>
                          <IconArrowRight size={14} />
                        </Group>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </SimpleGrid>
            </motion.div>
          </Container>
        </Box>
      )}

      <Footer />
    </Box>
  );
}
