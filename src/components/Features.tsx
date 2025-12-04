import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Text, SimpleGrid } from '@mantine/core';
import {
  IconBrain,
  IconTimeline,
  IconChartBar,
  IconDevices,
  IconMoodSmile,
  IconLayout2,
} from '@tabler/icons-react';
import { tokens } from '../theme';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Box
          style={{
            background: tokens.colors.background,
            borderRadius: '16px',
            border: `1px solid ${tokens.colors.gray100}`,
            padding: '32px',
            height: '100%',
            boxShadow: tokens.shadows.card,
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
        >
          {/* Icon */}
          <Box
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: `${tokens.colors.accent}10`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              transition: 'all 0.3s ease',
            }}
          >
            <Box style={{ color: tokens.colors.accent }}>
              {icon}
            </Box>
          </Box>

          {/* Content */}
          <Text
            fw={700}
            style={{
              color: tokens.colors.gray900,
              marginBottom: '10px',
              fontSize: '18px',
              letterSpacing: '-0.01em',
              lineHeight: 1.3,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: tokens.colors.gray500,
              lineHeight: 1.6,
              fontSize: '15px',
            }}
          >
            {description}
          </Text>
        </Box>
      </motion.div>
    </motion.div>
  );
}

export function Features() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <IconBrain size={28} stroke={1.5} />,
      titleKey: 'planning',
    },
    {
      icon: <IconTimeline size={28} stroke={1.5} />,
      titleKey: 'timeline',
    },
    {
      icon: <IconChartBar size={28} stroke={1.5} />,
      titleKey: 'analytics',
    },
    {
      icon: <IconDevices size={28} stroke={1.5} />,
      titleKey: 'sync',
    },
    {
      icon: <IconMoodSmile size={28} stroke={1.5} />,
      titleKey: 'retrospective',
    },
    {
      icon: <IconLayout2 size={28} stroke={1.5} />,
      titleKey: 'widget',
    },
  ];

  return (
    <Box
      component="section"
      id="features"
      ref={sectionRef}
      style={{
        padding: '120px 0',
        background: tokens.colors.gray50,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decoration */}
      <Box
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${tokens.colors.accent}05 0%, transparent 70%)`,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${tokens.colors.gray200} 0%, transparent 70%)`,
        }}
      />

      <Container size="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <Text
            component="h2"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 800,
              color: tokens.colors.gray900,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            {t('features.title')}
          </Text>
          <Text
            size="xl"
            style={{
              color: tokens.colors.gray500,
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            {t('features.subtitle')}
          </Text>
        </motion.div>

        {/* Features Grid */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 20, md: 28 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.titleKey}
              icon={feature.icon}
              title={t(`features.${feature.titleKey}.title`)}
              description={t(`features.${feature.titleKey}.description`)}
              delay={index * 0.1}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
