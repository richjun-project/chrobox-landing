'use client';

import { Box } from '@mantine/core';
import { Navbar, Hero, Features, HowItWorks, Pricing, Download, Footer, HomeFaq } from '../components';
import { BlogSection } from '../components/BlogSection';
import { HomeExplore } from '../components/HomeExplore';
import type { UiCopy } from '../lib/uiCopy';
import type { BlogPostMeta } from '../types/blog';
import type { HomeExploreData } from '../lib/viewData';

export function Home({ blogPosts, explore, ui }: { blogPosts: BlogPostMeta[]; explore: HomeExploreData; ui: UiCopy }) {
  return (
    <Box style={{ minHeight: '100vh' }}>
      {/* Noise Overlay for texture */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main content renders visible in the prerendered HTML (no JS fade — it held LCP until hydration) */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <HomeFaq />

        {/* Blog Section */}
        <BlogSection posts={blogPosts} ui={ui} />

        {/* Comparisons & templates people search for */}
        <HomeExplore explore={explore} ui={ui} />

        {/* Download CTA Section */}
        <Download />
      </main>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
