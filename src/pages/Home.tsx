import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navbar, Hero, Features, HowItWorks, Pricing, Download, Footer } from '../components';
import { BlogSection } from '../components/BlogSection';

export function Home() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'ko' ? 'ko' : 'en';

  return (
    <Box style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>{lang === 'ko' ? 'Chrobox - 지능형 타임박싱으로 시간을 마스터하세요 | 생산성 앱' : 'Chrobox - Master Your Time with Intelligent Time-Boxing | Productivity App'}</title>
        <meta name="description" content={lang === 'ko' ? 'Chrobox는 지능형 타임박싱 방법론으로 시간을 마스터하도록 도와줍니다. AI 기반 인사이트로 일일 작업을 계획, 우선순위 설정, 추적하세요. iOS, Android에서 사용 가능.' : 'Chrobox helps you master your time with intelligent time-boxing methodology. Plan, prioritize, and track your daily tasks with AI-powered insights. Available for iOS and Android.'} />
        <link rel="canonical" href={lang === 'ko' ? 'https://chrobox.net/ko' : 'https://chrobox.net/'} />
        <link rel="alternate" hrefLang="en" href="https://chrobox.net/" />
        <link rel="alternate" hrefLang="ko" href="https://chrobox.net/ko" />
        <link rel="alternate" hrefLang="x-default" href="https://chrobox.net/" />
      </Helmet>

      {/* Noise Overlay for texture */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content with Page Transitions */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Pricing Section */}
        <Pricing />

        {/* Blog Section */}
        <BlogSection />

        {/* Download CTA Section */}
        <Download />
      </motion.main>

      {/* Footer */}
      <Footer />
    </Box>
  );
}