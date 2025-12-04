import { MantineProvider, Box } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from './theme';
import { Navbar, Hero, Features, HowItWorks, Pricing, Download, Footer } from './components';
import './i18n';

function App() {
  return (
    <MantineProvider theme={theme}>
      <AnimatePresence mode="wait">
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

            {/* Download CTA Section */}
            <Download />
          </motion.main>

          {/* Footer */}
          <Footer />
        </Box>
      </AnimatePresence>
    </MantineProvider>
  );
}

export default App;