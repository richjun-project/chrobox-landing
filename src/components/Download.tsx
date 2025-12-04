import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Box, Container, Text, Group, Stack } from '@mantine/core';
import { IconBrandApple, IconBrandGooglePlay } from '@tabler/icons-react';
import { tokens } from '../theme';

// App screenshots (language-independent) - Reordered: 2->1, 3->2, 1->3
const APP_SCREENSHOTS = [
  '/IMG_8137.PNG',
  '/IMG_8138.PNG',
  '/IMG_8136.PNG',
];

const APP_STORE_URL = 'https://apps.apple.com/kr/app/%ED%81%AC%EB%A1%9C%EB%B0%95%EC%8A%A4-%ED%83%80%EC%9E%84%EB%B0%95%EC%8A%A4-%ED%94%8C%EB%9E%98%EB%84%88/id6755880209';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.richjunproject.chrobox';

function StoreButton({
  icon,
  label,
  sublabel,
  delay,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  delay: number;
  href: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Box
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          background: 'white',
          padding: '14px 28px',
          borderRadius: '16px',
          textDecoration: 'none',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          cursor: 'pointer',
          transition: 'box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.18)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
        }}
      >
        {icon}
        <Stack gap={0}>
          <Text size="xs" style={{ color: tokens.colors.gray500, lineHeight: 1.2 }}>
            {sublabel}
          </Text>
          <Text size="md" fw={700} style={{ color: tokens.colors.gray900, lineHeight: 1.3 }}>
            {label}
          </Text>
        </Stack>
      </Box>
    </motion.div>
  );
}

export function Download() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % APP_SCREENSHOTS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      id="download"
      ref={sectionRef}
      style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        background: tokens.colors.gray900,
      }}
    >
      {/* Animated Accent Circle */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
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
          background: `radial-gradient(circle, ${tokens.colors.accent} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${tokens.colors.gray600} 0%, transparent 70%)`,
        }}
      />

      {/* Grid Pattern */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <Container size="md" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          {/* Title */}
          <Text
            component="h2"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            {t('download.title')}
          </Text>

          {/* Subtitle */}
          <Text
            size="xl"
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '500px',
              margin: '0 auto 48px',
              lineHeight: 1.6,
            }}
          >
            {t('download.subtitle')}
          </Text>

          {/* Store Buttons */}
          <Group justify="center" gap={20} wrap="wrap">
            <StoreButton
              icon={<IconBrandApple size={32} color={tokens.colors.gray900} />}
              sublabel="Download on the"
              label="App Store"
              delay={0.2}
              href={APP_STORE_URL}
            />
            <StoreButton
              icon={<IconBrandGooglePlay size={28} color={tokens.colors.gray900} />}
              sublabel="Get it on"
              label="Google Play"
              delay={0.3}
              href={PLAY_STORE_URL}
            />
          </Group>

          {/* Phone Mockups with Real Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              marginTop: '64px',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Phone Mockups with Screenshots */}
            {APP_SCREENSHOTS.map((screenshot, index) => {
              const configs = [
                { rotate: -12, translateX: -80, scale: 0.85, zIndex: 1 },
                { rotate: 0, translateX: 0, scale: 1, zIndex: 3 },
                { rotate: 12, translateX: 80, scale: 0.85, zIndex: 1 },
              ];
              const config = configs[index];
              const isCenter = index === 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, rotate: config.rotate }}
                  animate={isInView ? {
                    opacity: 1,
                    y: 0,
                    rotate: config.rotate,
                  } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  style={{
                    position: index === 0 ? 'relative' : 'absolute',
                    transform: `translateX(${config.translateX}px) scale(${config.scale})`,
                    zIndex: config.zIndex,
                  }}
                >
                  {/* Phone Frame */}
                  <Box
                    style={{
                      width: '200px',
                      background: isCenter ? tokens.colors.gray800 : tokens.colors.gray700,
                      borderRadius: '32px',
                      padding: '8px',
                      boxShadow: isCenter
                        ? `0 32px 80px rgba(0, 0, 0, 0.6), 0 0 60px ${tokens.colors.accent}20`
                        : '0 20px 60px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    {/* Screen */}
                    <Box
                      style={{
                        background: tokens.colors.gray900,
                        borderRadius: '26px',
                        overflow: 'hidden',
                        aspectRatio: '9 / 19.5',
                        position: 'relative',
                      }}
                    >
                      {/* Notch */}
                      <Box
                        style={{
                          position: 'absolute',
                          top: '8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '70px',
                          height: '20px',
                          background: tokens.colors.gray900,
                          borderRadius: '12px',
                          zIndex: 10,
                        }}
                      />

                      {/* Screenshot */}
                      {isCenter ? (
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentIndex}
                            src={APP_SCREENSHOTS[currentIndex]}
                            alt={`App Screenshot ${currentIndex + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </AnimatePresence>
                      ) : (
                        <img
                          src={screenshot}
                          alt={`App Screenshot ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.9,
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
