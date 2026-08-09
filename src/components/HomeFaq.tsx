import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Box, Container, Text, Title } from '@mantine/core';
import { tokens } from '../theme';

const FAQ_KEYS = ['whatIsChrobox', 'isFree', 'vsTimeBlocking', 'appBlocking', 'platforms'] as const;

export function HomeFaq() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <Box
      component="section"
      id="faq"
      ref={sectionRef}
      style={{
        padding: '120px 0',
        position: 'relative',
        background: tokens.colors.background,
      }}
    >
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Title
            order={2}
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              textAlign: 'center',
              marginBottom: 16,
              color: tokens.colors.textPrimary,
            }}
          >
            {t('homeFaq.title')}
          </Title>

          {/* Self-contained definition paragraph sized for AI citation (≈140 words in en) */}
          <Box
            style={{
              background: tokens.colors.gray100,
              borderRadius: 16,
              padding: '32px',
              margin: '40px 0 56px',
            }}
          >
            <Title order={3} style={{ fontSize: '1.3rem', marginBottom: 12, color: tokens.colors.textPrimary }}>
              {t('homeFaq.definition.title')}
            </Title>
            <Text style={{ lineHeight: 1.7, color: tokens.colors.textSecondary }}>
              {t('homeFaq.definition.body')}
            </Text>
          </Box>

          {FAQ_KEYS.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Box style={{ padding: '24px 0', borderTop: `1px solid ${tokens.colors.gray200}` }}>
                <Title order={3} style={{ fontSize: '1.1rem', marginBottom: 8, color: tokens.colors.textPrimary }}>
                  {t(`homeFaq.items.${key}.question`)}
                </Title>
                <Text style={{ lineHeight: 1.7, color: tokens.colors.textSecondary }}>
                  {t(`homeFaq.items.${key}.answer`)}
                </Text>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
}
