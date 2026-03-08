import { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Analytics } from '@vercel/analytics/react';
import { theme } from './theme';
import { Home } from './pages/Home';
import { BlogList } from './pages/BlogList';
import { BlogPost } from './pages/BlogPost';
import { ScheduleTemplateList } from './pages/ScheduleTemplateList';
import { ScheduleTemplate } from './pages/ScheduleTemplate';
import { ComparisonList } from './pages/ComparisonList';
import { ComparisonPage } from './pages/ComparisonPage';
import './i18n';

function LangWrapper({ lang }: { lang: 'en' | 'ko' }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  return null;
}

function AppContent() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language === 'ko' ? 'ko' : 'en';
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          {/* English routes (default) */}
          <Route
            path="/"
            element={
              <>
                <LangWrapper lang="en" />
                <Home />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <LangWrapper lang="en" />
                <BlogList />
              </>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <>
                <LangWrapper lang="en" />
                <BlogPost />
              </>
            }
          />

          {/* Template routes */}
          <Route
            path="/templates"
            element={
              <>
                <LangWrapper lang="en" />
                <ScheduleTemplateList />
              </>
            }
          />
          <Route
            path="/templates/:slug"
            element={
              <>
                <LangWrapper lang="en" />
                <ScheduleTemplate />
              </>
            }
          />

          {/* Comparison routes (English) */}
          <Route path="/compare" element={<><LangWrapper lang="en" /><ComparisonList /></>} />
          <Route path="/compare/:slug" element={<><LangWrapper lang="en" /><ComparisonPage /></>} />

          {/* Korean routes */}
          <Route
            path="/ko"
            element={
              <>
                <LangWrapper lang="ko" />
                <Home />
              </>
            }
          />
          <Route
            path="/ko/blog"
            element={
              <>
                <LangWrapper lang="ko" />
                <BlogList />
              </>
            }
          />
          <Route
            path="/ko/blog/:slug"
            element={
              <>
                <LangWrapper lang="ko" />
                <BlogPost />
              </>
            }
          />
          <Route
            path="/ko/templates"
            element={
              <>
                <LangWrapper lang="ko" />
                <ScheduleTemplateList />
              </>
            }
          />
          <Route
            path="/ko/templates/:slug"
            element={
              <>
                <LangWrapper lang="ko" />
                <ScheduleTemplate />
              </>
            }
          />

          {/* Comparison routes (Korean) */}
          <Route path="/ko/compare" element={<><LangWrapper lang="ko" /><ComparisonList /></>} />
          <Route path="/ko/compare/:slug" element={<><LangWrapper lang="ko" /><ComparisonPage /></>} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

function App() {
  return (
    <HelmetProvider>
      <MantineProvider theme={theme}>
        <AppContent />
        <Analytics />
      </MantineProvider>
    </HelmetProvider>
  );
}

export default App;
