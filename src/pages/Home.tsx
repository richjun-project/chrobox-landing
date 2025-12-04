import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { Navbar, Hero, Features, HowItWorks, Pricing, Download, Footer } from '../components';
import { BlogSection } from '../components/BlogSection';

export function Home() {
  return (
    <Box style={{ minHeight: '100vh' }}>
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