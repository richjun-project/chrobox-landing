import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';

// Chrobox Brand Colors - Black/Gray based with mint accent
const neutral: MantineColorsTuple = [
  '#fafafa',
  '#f5f5f5',
  '#e5e5e5',
  '#d4d4d4',
  '#a3a3a3',
  '#737373',
  '#525252',
  '#404040',
  '#262626',
  '#171717',
];

const mint: MantineColorsTuple = [
  '#e6fbf5',
  '#c0f5e5',
  '#8fedd1',
  '#5ce5bc',
  '#2edea9',
  '#20C997', // Primary Accent
  '#1ab688',
  '#149e75',
  '#0e8662',
  '#086e4f',
];

export const theme = createTheme({
  primaryColor: 'mint',
  colors: {
    neutral,
    mint,
  },
  fontFamily: '"Outfit", sans-serif',
  headings: {
    fontFamily: '"Outfit", sans-serif',
    fontWeight: '700',
    sizes: {
      h1: { fontSize: '56px', lineHeight: '1.1' },
      h2: { fontSize: '42px', lineHeight: '1.2' },
      h3: { fontSize: '28px', lineHeight: '1.3' },
      h4: { fontSize: '22px', lineHeight: '1.4' },
      h5: { fontSize: '18px', lineHeight: '1.4' },
      h6: { fontSize: '16px', lineHeight: '1.5' },
    },
  },
  fontSizes: {
    xs: '11px',
    sm: '13px',
    md: '14px',
    lg: '16px',
    xl: '18px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.04)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.06)',
    md: '0 4px 12px rgba(0, 0, 0, 0.08)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.1)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.12)',
  },
  other: {
    transitionFast: '150ms ease-out',
    transitionNormal: '250ms ease-out',
    transitionSlow: '400ms ease-out',
  },
});

// Design tokens for custom styling - Black/Gray based
export const tokens = {
  colors: {
    // Primary colors
    primary: '#0a0a0a',       // Almost black
    foreground: '#0a0a0a',
    background: '#ffffff',
    backgroundAlt: '#fafafa',

    // Gray scale
    gray50: '#fafafa',
    gray100: '#f5f5f5',
    gray200: '#e5e5e5',
    gray300: '#d4d4d4',
    gray400: '#a3a3a3',
    gray500: '#737373',
    gray600: '#525252',
    gray700: '#404040',
    gray800: '#262626',
    gray900: '#171717',

    // Accent - Mint green (from logo)
    accent: '#20C997',
    accentLight: 'rgba(32, 201, 151, 0.1)',
    accentDark: '#1ab688',

    // Semantic
    muted: '#f5f5f5',
    mutedForeground: '#737373',
    border: '#e5e5e5',
    borderLight: '#f5f5f5',

    // Text hierarchy
    textPrimary: '#0a0a0a',
    textSecondary: '#525252',
    textTertiary: '#737373',
    textMuted: '#a3a3a3',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #20C997 0%, #4DABF7 100%)',
    dark: 'linear-gradient(180deg, #171717 0%, #0a0a0a 100%)',
    subtle: 'linear-gradient(135deg, rgba(32, 201, 151, 0.05) 0%, rgba(77, 171, 247, 0.03) 100%)',
  },
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.04)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.06)',
    md: '0 4px 12px rgba(0, 0, 0, 0.08)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.1)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.12)',
    glow: '0 0 40px rgba(32, 201, 151, 0.2)',
    card: '0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
    cardHover: '0 4px 16px rgba(0, 0, 0, 0.12)',
    button: '0 2px 8px rgba(32, 201, 151, 0.25)',
  },
  animation: {
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
    slower: '800ms',
    curve: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};
