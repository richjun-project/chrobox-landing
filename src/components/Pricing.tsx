import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Box, Container, Text, Group, Stack, Badge } from '@mantine/core';
import { IconCheck, IconSparkles, IconCrown, IconInfinity, IconGift } from '@tabler/icons-react';
import { tokens } from '../theme';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  variant: 'monthly' | 'yearly' | 'lifetime';
  badge?: string;
  monthlyPrice?: string;
  delay: number;
}

function PricingCard({ name, price, period, features, variant, badge, monthlyPrice, delay }: PricingCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const isHighlighted = variant === 'yearly';
  const isLifetime = variant === 'lifetime';

  const getIcon = () => {
    if (isLifetime) return <IconInfinity size={20} color={tokens.colors.accent} />;
    if (isHighlighted) return <IconCrown size={20} color="white" />;
    return <IconSparkles size={20} color={tokens.colors.gray500} />;
  };

  const getCardStyle = () => {
    const baseStyle = {
      borderRadius: '20px',
      padding: '28px',
      height: '100%',
      position: 'relative' as const,
      transition: 'all 0.3s ease',
    };

    if (isHighlighted) {
      return {
        ...baseStyle,
        background: tokens.colors.gray900,
        border: `1px solid ${tokens.colors.gray800}`,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        transform: 'scale(1.05)',
      };
    }
    if (isLifetime) {
      return {
        ...baseStyle,
        background: `linear-gradient(to bottom right, ${tokens.colors.gray900}, ${tokens.colors.gray800})`,
        border: `1px solid ${tokens.colors.gray700}`,
      };
    }
    return {
      ...baseStyle,
      background: tokens.colors.background,
      border: `1px solid ${tokens.colors.gray100}`,
      boxShadow: tokens.shadows.card,
    };
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{ flex: 1, minWidth: '280px', maxWidth: '340px' }}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Box style={getCardStyle()}>
          {/* Badge */}
          {badge && (
            <Badge
              size="sm"
              style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '6px 16px',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                background: isLifetime
                  ? `linear-gradient(to right, ${tokens.colors.gray700}, ${tokens.colors.gray600})`
                  : tokens.colors.accent,
                color: 'white',
                border: 'none',
              }}
            >
              {badge}
            </Badge>
          )}

          <Stack gap={24}>
            {/* Plan Name */}
            <Group gap={8} align="center">
              {getIcon()}
              <Text
                size="lg"
                fw={600}
                style={{ color: isHighlighted || isLifetime ? 'rgba(255,255,255,0.7)' : tokens.colors.gray500 }}
              >
                {name}
              </Text>
            </Group>

            {/* Price */}
            <Box>
              <Text
                style={{
                  fontSize: '42px',
                  fontWeight: 800,
                  color: isHighlighted || isLifetime ? 'white' : tokens.colors.gray900,
                  fontFamily: '"Space Mono", monospace',
                  lineHeight: 1,
                }}
              >
                {price}
              </Text>
              <Text
                size="sm"
                style={{
                  color: isHighlighted || isLifetime ? 'rgba(255,255,255,0.6)' : tokens.colors.gray500,
                  marginTop: '4px'
                }}
              >
                {period}
              </Text>
              {monthlyPrice && (
                <Text
                  size="sm"
                  fw={600}
                  style={{ color: tokens.colors.accent, marginTop: '6px' }}
                >
                  {monthlyPrice}
                </Text>
              )}
            </Box>

            {/* Features */}
            <Stack gap={14}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: delay + 0.1 + index * 0.03 }}
                >
                  <Group gap={12} align="center" wrap="nowrap">
                    <Box
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: isHighlighted || isLifetime
                          ? tokens.colors.accent
                          : `${tokens.colors.accent}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconCheck
                        size={12}
                        color={isHighlighted || isLifetime ? 'white' : tokens.colors.accent}
                        stroke={2.5}
                      />
                    </Box>
                    <Text
                      size="md"
                      style={{
                        color: isHighlighted || isLifetime
                          ? 'rgba(255,255,255,0.85)'
                          : tokens.colors.gray600
                      }}
                    >
                      {feature}
                    </Text>
                  </Group>
                </motion.div>
              ))}
            </Stack>

          </Stack>
        </Box>
      </motion.div>
    </motion.div>
  );
}

export function Pricing() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const plans = [
    {
      variant: 'monthly' as const,
      name: t('pricing.monthly.name'),
      price: t('pricing.monthly.price'),
      period: t('pricing.monthly.period'),
      features: t('pricing.monthly.features', { returnObjects: true }) as string[],
    },
    {
      variant: 'yearly' as const,
      name: t('pricing.yearly.name'),
      price: t('pricing.yearly.price'),
      period: t('pricing.yearly.period'),
      badge: t('pricing.yearly.badge'),
      monthlyPrice: t('pricing.yearly.monthlyPrice'),
      features: t('pricing.yearly.features', { returnObjects: true }) as string[],
    },
    {
      variant: 'lifetime' as const,
      name: t('pricing.lifetime.name'),
      price: t('pricing.lifetime.price'),
      period: t('pricing.lifetime.period'),
      badge: t('pricing.lifetime.badge'),
      features: t('pricing.lifetime.features', { returnObjects: true }) as string[],
    },
  ];

  return (
    <Box
      component="section"
      id="pricing"
      ref={sectionRef}
      style={{
        padding: '120px 0',
        background: tokens.colors.gray50,
        position: 'relative',
      }}
    >
      {/* Background Decoration */}
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1000px',
          height: '1000px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${tokens.colors.accent}03 0%, transparent 70%)`,
        }}
      />

      <Container size="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
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
            {t('pricing.title')}
          </Text>
          <Text
            size="xl"
            style={{
              color: tokens.colors.gray500,
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            {t('pricing.subtitle')}
          </Text>
        </motion.div>

        {/* Free Trial Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '48px' }}
        >
          <Box
            style={{
              background: `${tokens.colors.accent}08`,
              borderRadius: '20px',
              padding: '24px 32px',
              border: `1.5px solid ${tokens.colors.accent}20`,
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <Group justify="center" gap={12} mb={8}>
              <IconGift size={24} color={tokens.colors.accent} />
              <Text size="lg" fw={700} style={{ color: tokens.colors.accent }}>
                {t('pricing.trialBadge')}
              </Text>
            </Group>
            <Text size="md" style={{ color: tokens.colors.gray500 }}>
              {t('pricing.trialDescription')}
            </Text>
          </Box>
        </motion.div>

        {/* Pricing Cards */}
        <Group
          justify="center"
          align="stretch"
          gap={28}
          wrap="wrap"
          style={{ position: 'relative', zIndex: 1, padding: '20px 0' }}
        >
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.variant}
              {...plan}
              delay={index * 0.1}
            />
          ))}
        </Group>
      </Container>
    </Box>
  );
}