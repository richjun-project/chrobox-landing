'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Box, Container, Text, Group, Badge, Button, SimpleGrid, Card, Anchor } from '@mantine/core';
import { IconArrowLeft, IconCheck, IconX, IconChevronRight } from '@tabler/icons-react';
import { tokens } from '../theme';
import { getComparison } from '../data/comparisons';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {
  comparisonArticleSeo,
  contentLanguageForLocale,
  localizedPath,
  seoCopy,
  type SiteLocale,
} from '../lib/seo';
import { formatCopy, uiCopy } from '../lib/uiCopy';

const APP_STORE_URL = 'https://apps.apple.com/kr/app/%ED%81%AC%EB%A1%9C%EB%B0%95%EC%8A%A4-%ED%83%80%EC%9E%84%EB%B0%95%EC%8A%A4-%ED%94%8C%EB%9E%98%EB%84%88/id6755880209';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.richjunproject.chrobox';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: tokens.colors.accentLight,
        }}
      >
        <IconCheck size={16} style={{ color: tokens.colors.accent }} stroke={2.5} />
      </Box>
    );
  }
  if (value === false) {
    return (
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: tokens.colors.gray100,
        }}
      >
        <IconX size={14} style={{ color: tokens.colors.gray400 }} stroke={2} />
      </Box>
    );
  }
  return (
    <Text style={{ fontSize: '13px', color: tokens.colors.gray600, fontWeight: 500 }}>
      {value}
    </Text>
  );
}

export function ComparisonPage({ slug, locale = 'en' }: { slug: string; locale?: SiteLocale }) {
  const lang = contentLanguageForLocale(locale);
  const ui = uiCopy(lang);
  const copy = seoCopy(locale);

  const comparison = getComparison(slug, lang);
  const comparePath = localizedPath(locale, '/compare');
  const homePath = localizedPath(locale, '/');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!comparison) {
    return null;
  }

  const competitor = comparison.competitor;
  const description = comparison.description;
  const verdict = comparison.verdict;
  const chroboxPros = comparison.chroboxPros;
  const competitorPros = comparison.competitorPros;

  const pageSeo = comparisonArticleSeo(locale, competitor, description);

  return (
    <Box style={{ minHeight: '100vh', background: tokens.colors.background }}>
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
                    href={homePath}
                    style={{ fontSize: '13px', color: tokens.colors.gray400, textDecoration: 'none' }}
                  >
                    {copy.homeLabel}
                  </Anchor>
                </Box>
                <Box component="li" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
                  <IconChevronRight size={12} style={{ color: tokens.colors.gray600 }} />
                </Box>
                <Box component="li">
                  <Anchor
                    component={Link}
                    href={comparePath}
                    style={{ fontSize: '13px', color: tokens.colors.gray400, textDecoration: 'none' }}
                  >
                    {copy.compareLabel}
                  </Anchor>
                </Box>
                <Box component="li" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
                  <IconChevronRight size={12} style={{ color: tokens.colors.gray600 }} />
                </Box>
                <Box component="li" aria-current="page">
                  <Text
                    style={{
                      fontSize: '13px',
                      color: tokens.colors.gray500,
                      maxWidth: '200px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {`Chrobox vs ${comparison.competitor}`}
                  </Text>
                </Box>
              </Box>
            </Box>

            <Link href={comparePath} style={{ textDecoration: 'none' }}>
              <Button
                variant="subtle"
                leftSection={<IconArrowLeft size={16} />}
                style={{ color: tokens.colors.gray400, marginBottom: '24px', paddingLeft: 0 }}
              >
                {ui.allComparisons}
              </Button>
            </Link>

            <Group gap={12} mb={20} wrap="wrap">
              <Badge size="lg" style={{ background: tokens.colors.accent, color: 'white' }}>
                Chrobox
              </Badge>
              <Text style={{ color: tokens.colors.gray400, fontSize: '18px', fontWeight: 600 }}>vs</Text>
              <Badge size="lg" style={{ background: tokens.colors.gray700, color: 'white' }}>
                {comparison.competitor}
              </Badge>
            </Group>

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
              {pageSeo.title}
            </Text>

            <Text
              style={{
                color: tokens.colors.gray400,
                fontSize: '18px',
                lineHeight: 1.6,
                maxWidth: '720px',
              }}
            >
              {description}
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* Feature Comparison Table */}
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
              {ui.featureComparison}
            </Text>
            <Text style={{ color: tokens.colors.gray500, marginBottom: '40px' }}>
              {formatCopy(ui.comparisonSideBySide, { competitor })}
            </Text>
          </motion.div>

          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <Box
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: `1px solid ${tokens.colors.gray200}`,
                boxShadow: tokens.shadows.card,
              }}
            >
              {/* Table header */}
              <Box
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 120px 120px',
                  background: tokens.colors.gray900,
                  padding: '16px 24px',
                  gap: '16px',
                }}
              >
                <Text style={{ fontSize: '13px', fontWeight: 600, color: tokens.colors.gray400 }}>
                  {ui.feature}
                </Text>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                  <Text style={{ fontSize: '14px', fontWeight: 700, color: tokens.colors.accent }}>
                    Chrobox
                  </Text>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                  <Text style={{ fontSize: '14px', fontWeight: 700, color: 'white' }}>
                    {comparison.competitor}
                  </Text>
                </Box>
              </Box>

              {/* Table rows */}
              {comparison.features.map((feature, index) => (
                <Box
                  key={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 120px 120px',
                    padding: '16px 24px',
                    gap: '16px',
                    alignItems: 'center',
                    background: index % 2 === 0 ? 'white' : tokens.colors.gray50,
                    borderBottom: index < comparison.features.length - 1
                      ? `1px solid ${tokens.colors.gray100}`
                      : 'none',
                  }}
                >
                  <Text style={{ fontSize: '15px', color: tokens.colors.gray800, fontWeight: 500 }}>
                    {feature.name}
                  </Text>
                  <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <FeatureValue value={feature.chrobox} />
                  </Box>
                  <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <FeatureValue value={feature.competitor} />
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>
        </motion.div>
      </Container>

      {/* Pros & Cons */}
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
                {ui.prosAndCons}
              </Text>
              <Text style={{ color: tokens.colors.gray500, marginBottom: '40px' }}>
                {ui.strengthsAtAGlance}
              </Text>
            </motion.div>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={28}>
              {/* Chrobox Pros */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.45 }}>
                <Card
                  padding={32}
                  radius="xl"
                  style={{
                    background: 'white',
                    border: `2px solid ${tokens.colors.accent}`,
                    height: '100%',
                  }}
                >
                  <Group gap={10} mb={24}>
                    <Box
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: tokens.colors.accent,
                      }}
                    />
                    <Text style={{ fontSize: '18px', fontWeight: 700, color: tokens.colors.gray900 }}>
                      {ui.whyChooseChrobox}
                    </Text>
                  </Group>
                  <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {chroboxPros.map((pro, idx) => (
                      <Group key={idx} gap={12} align="flex-start">
                        <Box
                          style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            background: tokens.colors.accentLight,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <IconCheck size={13} style={{ color: tokens.colors.accent }} stroke={2.5} />
                        </Box>
                        <Text style={{ fontSize: '15px', color: tokens.colors.gray700, lineHeight: 1.5 }}>
                          {pro}
                        </Text>
                      </Group>
                    ))}
                  </Box>
                </Card>
              </motion.div>

              {/* Competitor Pros */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.45, delay: 0.08 }}>
                <Card
                  padding={32}
                  radius="xl"
                  style={{
                    background: 'white',
                    border: `1px solid ${tokens.colors.gray200}`,
                    height: '100%',
                  }}
                >
                  <Group gap={10} mb={24}>
                    <Box
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: tokens.colors.gray400,
                      }}
                    />
                    <Text style={{ fontSize: '18px', fontWeight: 700, color: tokens.colors.gray900 }}>
                      {formatCopy(ui.whyChooseCompetitor, { competitor })}
                    </Text>
                  </Group>
                  <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {competitorPros.map((pro, idx) => (
                      <Group key={idx} gap={12} align="flex-start">
                        <Box
                          style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            background: tokens.colors.gray100,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <IconCheck size={13} style={{ color: tokens.colors.gray500 }} stroke={2.5} />
                        </Box>
                        <Text style={{ fontSize: '15px', color: tokens.colors.gray700, lineHeight: 1.5 }}>
                          {pro}
                        </Text>
                      </Group>
                    ))}
                  </Box>
                </Card>
              </motion.div>
            </SimpleGrid>
          </motion.div>
        </Container>
      </Box>

      {/* Verdict */}
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
            }}
          >
            <Badge
              size="lg"
              style={{ background: tokens.colors.accent, color: 'white', marginBottom: '20px' }}
            >
              {ui.ourVerdict}
            </Badge>
            <Text
              component="h2"
              style={{
                fontSize: 'clamp(22px, 3vw, 30px)',
                fontWeight: 800,
                color: 'white',
                marginBottom: '16px',
                lineHeight: 1.3,
              }}
            >
              {formatCopy(ui.comparisonWhichChoose, { competitor })}
            </Text>
            <Text
              style={{
                color: tokens.colors.gray300,
                fontSize: '17px',
                lineHeight: 1.7,
                maxWidth: '760px',
              }}
            >
              {verdict}
            </Text>
          </Box>
        </motion.div>
      </Container>

      {/* FAQ */}
      {comparison.faqs.length > 0 && (
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
                  {ui.frequentlyAskedQuestions}
                </Text>
                <Text style={{ color: tokens.colors.gray500, marginBottom: '40px' }}>
                  {formatCopy(ui.comparisonFaqSubtitle, { competitor })}
                </Text>
              </motion.div>

              <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {comparison.faqs.map((faq, idx) => {
                  const question = faq.question;
                  const answer = faq.answer;
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                    >
                      <Box
                        style={{
                          padding: '24px',
                          borderRadius: '16px',
                          background: 'white',
                          border: `1px solid ${tokens.colors.border}`,
                          boxShadow: tokens.shadows.card,
                        }}
                      >
                        <Text
                          component="h3"
                          style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: tokens.colors.gray900,
                            marginBottom: '10px',
                          }}
                        >
                          {question}
                        </Text>
                        <Text
                          style={{
                            fontSize: '15px',
                            color: tokens.colors.gray600,
                            lineHeight: 1.7,
                          }}
                        >
                          {answer}
                        </Text>
                      </Box>
                    </motion.div>
                  );
                })}
              </Box>
            </motion.div>
          </Container>
        </Box>
      )}

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
              {ui.comparisonCtaTitle}
            </Text>
            <Text style={{ color: tokens.colors.gray400, marginBottom: '32px', fontSize: '16px' }}>
              {ui.comparisonCtaSubtitle}
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
                {ui.downloadOnAppStore}
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
                {ui.getItOnGooglePlay}
              </Button>
            </Group>
          </Box>
        </motion.div>
      </Container>

      <Footer />
    </Box>
  );
}
