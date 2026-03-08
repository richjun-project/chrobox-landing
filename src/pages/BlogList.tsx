import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Box, Container, Text, Group, Badge, SimpleGrid, Card, Image } from '@mantine/core';
import { IconClock, IconCalendar, IconArrowRight, IconChevronRight } from '@tabler/icons-react';
import { tokens } from '../theme';
import { getBlogPosts } from '../data/blogPosts';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function BlogList() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'ko' ? 'ko' : 'en';
  const posts = getBlogPosts(lang);

  return (
    <Box style={{ minHeight: '100vh', background: tokens.colors.background }}>
      <Helmet>
        <title>{lang === 'ko' ? '블로그 - 타임박싱과 생산성 팁 | Chrobox' : 'Blog - Time-Boxing & Productivity Tips | Chrobox'}</title>
        <meta name="description" content={lang === 'ko' ? '타임박싱과 생산성에 대한 인사이트, 팁, 전략을 공유합니다. Chrobox로 더 효율적인 하루를 만드세요.' : 'Insights, tips, and strategies on time-boxing and productivity. Master your day with Chrobox.'} />
        <link rel="canonical" href={lang === 'ko' ? 'https://chrobox.net/ko/blog' : 'https://chrobox.net/blog'} />
        <link rel="alternate" hrefLang="en" href="https://chrobox.net/blog" />
        <link rel="alternate" hrefLang="ko" href="https://chrobox.net/ko/blog" />
        <link rel="alternate" hrefLang="x-default" href="https://chrobox.net/blog" />
        <meta property="og:title" content={lang === 'ko' ? '블로그 | Chrobox' : 'Blog | Chrobox'} />
        <meta property="og:description" content={lang === 'ko' ? '타임박싱과 생산성에 대한 인사이트와 전략' : 'Insights and strategies on time-boxing and productivity'} />
        <meta property="og:url" content={lang === 'ko' ? 'https://chrobox.net/ko/blog' : 'https://chrobox.net/blog'} />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <Box
        style={{
          background: tokens.colors.gray900,
          paddingTop: '140px',
          paddingBottom: '80px',
        }}
      >
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Visual breadcrumb navigation */}
            <Box component="nav" aria-label="breadcrumb" style={{ marginBottom: '20px' }}>
              <Box
                component="ol"
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                }}
              >
                <Box component="li">
                  <Box
                    component="a"
                    href="/"
                    style={{
                      fontSize: '13px',
                      color: tokens.colors.gray400,
                      textDecoration: 'none',
                    }}
                  >
                    {lang === 'ko' ? '홈' : 'Home'}
                  </Box>
                </Box>
                <Box component="li" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
                  <IconChevronRight size={12} style={{ color: tokens.colors.gray600 }} />
                </Box>
                <Box component="li" aria-current="page">
                  <Text style={{ fontSize: '13px', color: tokens.colors.gray500 }}>
                    {lang === 'ko' ? '블로그' : 'Blog'}
                  </Text>
                </Box>
              </Box>
            </Box>

            <Text
              component="h1"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 800,
                color: 'white',
                marginBottom: '16px',
              }}
            >
              {lang === 'ko' ? '블로그' : 'Blog'}
            </Text>
            <Text
              size="xl"
              style={{
                color: tokens.colors.gray400,
                maxWidth: '600px',
              }}
            >
              {lang === 'ko'
                ? '타임박싱과 생산성에 대한 인사이트, 팁, 전략을 공유합니다.'
                : 'Insights, tips, and strategies on time-boxing and productivity.'}
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* Blog Posts Grid */}
      <Container size="lg" py={80}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={32}>
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`${lang === 'ko' ? '/ko' : ''}/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <Card
                  padding={0}
                  radius="lg"
                  style={{
                    background: 'white',
                    border: `1px solid ${tokens.colors.gray100}`,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Image */}
                  <Box style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Badge
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        background: tokens.colors.accent,
                        color: 'white',
                      }}
                    >
                      {post.category}
                    </Badge>
                  </Box>

                  {/* Content */}
                  <Box p={24}>
                    <Group gap={16} mb={12}>
                      <Group gap={6}>
                        <IconCalendar size={14} style={{ color: tokens.colors.gray400 }} />
                        <Text size="xs" style={{ color: tokens.colors.gray500 }}>
                          {new Date(post.date).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </Text>
                      </Group>
                      <Group gap={6}>
                        <IconClock size={14} style={{ color: tokens.colors.gray400 }} />
                        <Text size="xs" style={{ color: tokens.colors.gray500 }}>
                          {post.readTime} {lang === 'ko' ? '분' : 'min'}
                        </Text>
                      </Group>
                    </Group>

                    <Text
                      component="h2"
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: tokens.colors.gray900,
                        marginBottom: '12px',
                        lineHeight: 1.4,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.title}
                    </Text>

                    <Text
                      size="sm"
                      style={{
                        color: tokens.colors.gray500,
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        marginBottom: '16px',
                      }}
                    >
                      {post.excerpt}
                    </Text>

                    <Group gap={8} style={{ color: tokens.colors.accent }}>
                      <Text size="sm" fw={600}>
                        {lang === 'ko' ? '읽기' : 'Read more'}
                      </Text>
                      <IconArrowRight size={16} />
                    </Group>
                  </Box>
                </Card>
              </Link>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>

      <Footer />
    </Box>
  );
}
