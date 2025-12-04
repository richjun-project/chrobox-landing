import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Box, Container, Text, Button, Group, Badge, Stack } from '@mantine/core';
import { IconPlayerPlay, IconArrowRight, IconUsers, IconCheck, IconStar } from '@tabler/icons-react';
import { tokens } from '../theme';

// Animated Time Block Component
function TimeBlock({
  title,
  time,
  delay,
  x,
  y
}: {
  title: string;
  time: string;
  delay: number;
  x: number;
  y: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: 'spring', stiffness: 100 }}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 4 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.1, rotate: 3 }}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '16px',
          padding: '16px 20px',
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.08)`,
          border: `1px solid ${tokens.colors.gray100}`,
          cursor: 'pointer',
          minWidth: '140px',
        }}
      >
        <Box
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: tokens.colors.accent,
            marginBottom: '8px',
          }}
        />
        <Text size="sm" fw={600} style={{ color: tokens.colors.gray900 }}>
          {title}
        </Text>
        <Text size="xs" style={{ color: tokens.colors.gray500, fontFamily: '"Space Mono", monospace' }}>
          {time}
        </Text>
      </motion.div>
    </motion.div>
  );
}

// Floating Particle
function FloatingParticle({ delay, size, x }: { delay: number; size: number; x: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: [0, 0.4, 0],
        y: [-50, -200],
        x: [0, Math.random() * 40 - 20],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
      style={{
        position: 'absolute',
        left: `${x}%`,
        bottom: '10%',
        width: size,
        height: size,
        borderRadius: '50%',
        background: tokens.colors.accent,
      }}
    />
  );
}

// App screenshots (language-independent) - Reordered: 2->1, 3->2, 1->3
const APP_SCREENSHOTS = [
  '/IMG_8137.PNG',
  '/IMG_8138.PNG',
  '/IMG_8136.PNG',
];

export function Hero() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const [counts, setCounts] = useState({ users: 0, tasks: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % APP_SCREENSHOTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetUsers = 25000;
    const targetTasks = 1200000;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCounts({
        users: Math.floor(targetUsers * easeOut),
        tasks: Math.floor(targetTasks * easeOut),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { title: 'Deep Work', time: '09:00 - 11:00', x: 75, y: 20, delay: 0.3 },
    { title: 'Meeting', time: '14:00 - 15:00', x: 85, y: 50, delay: 0.5 },
    { title: 'Review', time: '16:00 - 17:00', x: 70, y: 75, delay: 0.7 },
    { title: 'Planning', time: '08:00 - 08:30', x: 90, y: 85, delay: 0.9 },
  ];

  return (
    <Box
      component="section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: tokens.colors.background,
        paddingTop: '80px',
      }}
    >
      {/* Background Grid Pattern */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${tokens.colors.gray100} 1px, transparent 1px),
            linear-gradient(90deg, ${tokens.colors.gray100} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          mask: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Subtle Accent Glow */}
      <Box
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${tokens.colors.accent}08 0%, transparent 70%)`,
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 0.5}
          size={6 + Math.random() * 8}
          x={10 + i * 12}
        />
      ))}

      <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div style={{ y, opacity, scale }}>
          <Group align="flex-start" justify="space-between" wrap="wrap" gap={60}>
            {/* Left Content */}
            <Stack gap={32} style={{ maxWidth: '600px', flex: 1 }}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge
                  size="lg"
                  variant="light"
                  style={{
                    background: `${tokens.colors.accent}10`,
                    color: tokens.colors.accent,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontWeight: 600,
                    textTransform: 'none',
                  }}
                >
                  {t('hero.badge')}
                </Badge>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Text
                  component="h1"
                  style={{
                    fontSize: 'clamp(40px, 6vw, 64px)',
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: tokens.colors.gray900,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t('hero.title')}
                  <span style={{ color: tokens.colors.accent }}>{t('hero.titleHighlight')}</span>
                </Text>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Text
                  size="xl"
                  style={{
                    color: tokens.colors.gray500,
                    lineHeight: 1.7,
                    maxWidth: '520px',
                  }}
                >
                  {t('hero.subtitle')}
                </Text>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Group gap={16}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="xl"
                      rightSection={<IconArrowRight size={20} />}
                      style={{
                        background: tokens.colors.gray900,
                        border: 'none',
                        borderRadius: '16px',
                        height: '56px',
                        padding: '0 32px',
                        fontWeight: 600,
                        fontSize: '16px',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      {t('hero.cta')}
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="xl"
                      variant="outline"
                      leftSection={<IconPlayerPlay size={20} />}
                      style={{
                        borderRadius: '16px',
                        height: '56px',
                        padding: '0 28px',
                        fontWeight: 600,
                        fontSize: '16px',
                        borderColor: tokens.colors.gray200,
                        color: tokens.colors.gray700,
                        borderWidth: '2px',
                      }}
                    >
                      {t('hero.ctaSecondary')}
                    </Button>
                  </motion.div>
                </Group>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Group gap={40} mt={16}>
                  <Box>
                    <Group gap={8} align="center">
                      <IconUsers size={20} style={{ color: tokens.colors.accent }} />
                      <Text
                        style={{
                          fontSize: '28px',
                          fontWeight: 700,
                          fontFamily: '"Space Mono", monospace',
                          color: tokens.colors.gray900,
                        }}
                      >
                        {counts.users.toLocaleString()}+
                      </Text>
                    </Group>
                    <Text size="sm" style={{ color: tokens.colors.gray500 }}>
                      {t('hero.stats.users')}
                    </Text>
                  </Box>
                  <Box>
                    <Group gap={8} align="center">
                      <IconCheck size={20} style={{ color: tokens.colors.accent }} />
                      <Text
                        style={{
                          fontSize: '28px',
                          fontWeight: 700,
                          fontFamily: '"Space Mono", monospace',
                          color: tokens.colors.gray900,
                        }}
                      >
                        {(counts.tasks / 1000000).toFixed(1)}M+
                      </Text>
                    </Group>
                    <Text size="sm" style={{ color: tokens.colors.gray500 }}>
                      {t('hero.stats.tasks')}
                    </Text>
                  </Box>
                  <Box>
                    <Group gap={8} align="center">
                      <IconStar size={20} style={{ color: tokens.colors.accent, fill: tokens.colors.accent }} />
                      <Text
                        style={{
                          fontSize: '28px',
                          fontWeight: 700,
                          fontFamily: '"Space Mono", monospace',
                          color: tokens.colors.gray900,
                        }}
                      >
                        4.9
                      </Text>
                    </Group>
                    <Text size="sm" style={{ color: tokens.colors.gray500 }}>
                      {t('hero.stats.rating')}
                    </Text>
                  </Box>
                </Group>
              </motion.div>
            </Stack>

            {/* Right Side - Phone Mockup with Screenshots */}
            <Box
              style={{
                flex: 1,
                minWidth: '400px',
                height: '560px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              visibleFrom="md"
            >
              {/* Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
                style={{
                  position: 'relative',
                  width: '280px',
                  zIndex: 10,
                }}
              >
                {/* Phone Frame */}
                <Box
                  style={{
                    background: tokens.colors.gray900,
                    borderRadius: '44px',
                    padding: '12px',
                    boxShadow: `0 32px 64px rgba(0, 0, 0, 0.2), 0 0 0 1px ${tokens.colors.gray800}`,
                  }}
                >
                  {/* Screen */}
                  <Box
                    style={{
                      background: tokens.colors.gray900,
                      borderRadius: '36px',
                      overflow: 'hidden',
                      aspectRatio: '9 / 19.5',
                      position: 'relative',
                    }}
                  >
                    {/* Notch */}
                    <Box
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100px',
                        height: '28px',
                        background: tokens.colors.gray900,
                        borderRadius: '20px',
                        zIndex: 30,
                      }}
                    />

                    {/* Screenshot Carousel */}
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={APP_SCREENSHOTS[currentImageIndex]}
                        alt={`App Screenshot ${currentImageIndex + 1}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                        }}
                      />
                    </AnimatePresence>

                    {/* Carousel Indicators */}
                    <Box
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '6px',
                        zIndex: 25,
                      }}
                    >
                      {APP_SCREENSHOTS.map((_, idx) => (
                        <Box
                          key={idx}
                          style={{
                            width: idx === currentImageIndex ? '20px' : '6px',
                            height: '6px',
                            borderRadius: '3px',
                            background: idx === currentImageIndex ? tokens.colors.accent : 'rgba(255, 255, 255, 0.4)',
                            transition: 'all 0.3s ease',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Reflection/Glow Effect */}
                <Box
                  style={{
                    position: 'absolute',
                    bottom: '-60px',
                    left: '10%',
                    right: '10%',
                    height: '60px',
                    background: `linear-gradient(to bottom, ${tokens.colors.gray900}30 0%, transparent 100%)`,
                    filter: 'blur(20px)',
                    borderRadius: '50%',
                  }}
                />
              </motion.div>

              {/* Floating Time Blocks - Higher z-index to appear above phone */}
              <Box style={{ position: 'absolute', inset: 0, zIndex: 20 }}>
                {timeBlocks.map((block, index) => (
                  <TimeBlock key={index} {...block} />
                ))}
              </Box>
            </Box>
          </Group>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '28px',
            height: '44px',
            borderRadius: '14px',
            border: `2px solid ${tokens.colors.gray200}`,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '8px',
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              background: tokens.colors.accent,
            }}
          />
        </motion.div>
      </motion.div>
    </Box>
  );
}
