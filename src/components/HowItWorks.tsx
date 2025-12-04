import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Box, Container, Text } from '@mantine/core';
import { tokens } from '../theme';

// Get screenshot path based on language
const getScreenshotPath = (lang: string, num: number) => {
  const folder = lang.startsWith('ko') ? 'ko' : 'en';
  return `/screenshots/${folder}/${num}.png`;
};

export function HowItWorks() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [currentSet, setCurrentSet] = useState(0); // 0 = 1,2,3 / 1 = 4,5,6

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const screenshotSets = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  return (
    <Box
      component="section"
      id="how-it-works"
      ref={sectionRef}
      style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        background: tokens.colors.background,
      }}
    >
      {/* Subtle Background Pattern */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${tokens.colors.gray200} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.4,
        }}
      />

      {/* Animated Background Glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${tokens.colors.accent}06 0%, transparent 70%)`,
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
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
            {t('howItWorks.title')}
          </Text>
          <Text
            size="xl"
            style={{
              color: tokens.colors.gray500,
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            {t('howItWorks.subtitle')}
          </Text>
        </motion.div>

        {/* Screenshots Carousel - 3 at a time */}
        <Box style={{ position: 'relative', overflow: 'hidden', maxWidth: '900px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSet}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '40px',
              }}
            >
              {screenshotSets[currentSet].map((num, index) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Box
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.1)',
                      background: tokens.colors.gray900,
                    }}
                  >
                    <img
                      src={getScreenshotPath(i18n.language, num)}
                      alt={`App screenshot ${num}`}
                      style={{
                        width: '100%',
                        display: 'block',
                        aspectRatio: '9 / 19.5',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '32px',
            }}
          >
            {[0, 1].map((index) => (
              <Box
                key={index}
                onClick={() => setCurrentSet(index)}
                style={{
                  width: index === currentSet ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: index === currentSet ? tokens.colors.accent : tokens.colors.gray300,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}