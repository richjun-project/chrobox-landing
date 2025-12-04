import { motion } from 'framer-motion';
import { Text } from '@mantine/core';
import { tokens } from '../theme';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'light' | 'dark';
}

const sizes = {
  sm: { icon: 32, text: 18, gap: 8 },
  md: { icon: 40, text: 22, gap: 10 },
  lg: { icon: 56, text: 32, gap: 12 },
};

export function Logo({ size = 'md', showText = true, variant = 'dark' }: LogoProps) {
  const s = sizes[size];
  const textColor = variant === 'dark' ? tokens.colors.gray900 : '#FFFFFF';

  return (
    <motion.div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: s.gap,
        cursor: 'pointer',
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Logo Image */}
      <img
        src="/logo.png"
        alt="Chrobox Logo"
        style={{
          width: s.icon,
          height: s.icon,
          objectFit: 'contain',
        }}
      />

      {/* Logo Text */}
      {showText && (
        <Text
          style={{
            fontSize: s.text,
            fontWeight: 700,
            color: textColor,
            letterSpacing: '-0.02em',
            fontFamily: '"Outfit", sans-serif',
          }}
        >
          Chrobox
        </Text>
      )}
    </motion.div>
  );
}
