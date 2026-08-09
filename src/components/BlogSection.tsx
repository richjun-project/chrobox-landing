'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Container, Text, Group, Badge, SimpleGrid, Card, Image, Button } from '@mantine/core';
import { IconClock, IconArrowRight } from '@tabler/icons-react';
import { tokens } from '../theme';
import { getBlogPosts } from '../data/blogPosts';
import { contentLanguageForLocale, localeFromPathname, localizedPath } from '../lib/seo';
import { uiCopy } from '../lib/uiCopy';

// Curated to pass homepage authority (priority 1.0) to the posts that already earn
// non-brand impressions in Search Console and the app-blocking hub we want ranked.
const FEATURED_SLUGS = [
  'how-to-block-distracting-apps',
  'time-blocking-vs-time-boxing',
  '5-time-boxing-strategies',
];

export function BlogSection() {
  const pathname = usePathname() ?? '/';
  const locale = localeFromPathname(pathname);
  const lang = contentLanguageForLocale(locale);
  const ui = uiCopy(lang);
  const allPosts = getBlogPosts(lang);
  const featured = FEATURED_SLUGS
    .map((slug) => allPosts.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));
  const posts = (featured.length === 3 ? featured : allPosts.slice(0, 3));
  const blogPath = localizedPath(locale, '/blog');

  return (
    <Box
      component="section"
      id="blog"
      py={100}
      style={{
        background: tokens.colors.backgroundAlt,
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <Badge
            size="lg"
            variant="light"
            style={{
              background: `${tokens.colors.accent}10`,
              color: tokens.colors.accent,
              marginBottom: '16px',
            }}
          >
            {ui.blog}
          </Badge>
          <Text
            component="h2"
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: tokens.colors.gray900,
              marginBottom: '16px',
            }}
          >
            {ui.productivityInsights}
          </Text>
          <Text
            size="lg"
            style={{
              color: tokens.colors.gray500,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            {ui.blogSectionSubtitle}
          </Text>
        </motion.div>

        {/* Blog Posts */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={32}>
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`${blogPath}/${post.slug}`} style={{ textDecoration: 'none' }}>
                <Card
                  padding={0}
                  radius="lg"
                  style={{
                    background: 'white',
                    border: `1px solid ${tokens.colors.gray100}`,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%',
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
                  </Box>

                  {/* Content */}
                  <Box p={24}>
                    <Group gap={12} mb={12}>
                      <Badge
                        size="sm"
                        style={{
                          background: `${tokens.colors.accent}15`,
                          color: tokens.colors.accent,
                        }}
                      >
                        {post.category}
                      </Badge>
                      <Group gap={6}>
                        <IconClock size={14} style={{ color: tokens.colors.gray400 }} />
                        <Text size="xs" style={{ color: tokens.colors.gray500 }}>
                          {post.readTime} {ui.min}
                        </Text>
                      </Group>
                    </Group>

                    <Text
                      component="h3"
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
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.excerpt}
                    </Text>
                  </Box>
                </Card>
              </Link>
            </motion.div>
          ))}
        </SimpleGrid>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <Link href={blogPath} style={{ textDecoration: 'none' }}>
            <Button
              size="lg"
              variant="outline"
              rightSection={<IconArrowRight size={18} />}
              style={{
                borderColor: tokens.colors.gray300,
                color: tokens.colors.gray700,
                borderRadius: '12px',
              }}
            >
              {ui.viewAllPosts}
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Box>
  );
}
