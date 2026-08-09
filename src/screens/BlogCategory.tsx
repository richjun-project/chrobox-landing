'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Box, Container, Text, Group, Badge, SimpleGrid, Card, Image } from '@mantine/core';
import { IconClock, IconCalendar, IconArrowRight, IconChevronRight, IconStar } from '@tabler/icons-react';
import { tokens } from '../theme';
import { getBlogPostsByCluster } from '../data/blogPosts';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {
  contentLanguageForLocale,
  localizedPath,
  type SiteLocale,
  htmlLangForLocale,
} from '../lib/seo';
import { clusterCopy, type BlogClusterDefinition } from '../lib/blogTaxonomy';
import { articleCountLabel, uiCopy } from '../lib/uiCopy';

interface BlogCategoryProps {
  cluster: BlogClusterDefinition;
  locale?: SiteLocale;
}

export function BlogCategory({ cluster, locale = 'en' }: BlogCategoryProps) {
  const lang = contentLanguageForLocale(locale);
  const ui = uiCopy(lang);
  const category = clusterCopy(cluster, lang);
  const posts = getBlogPostsByCluster(cluster.slug, lang);
  const homePath = localizedPath(locale, '/');
  const blogPath = localizedPath(locale, '/blog');

  const hubPost = posts.find((post) => post.slug === cluster.hubSlug);
  const spokePosts = posts.filter((post) => post.slug !== cluster.hubSlug);

  return (
    <Box style={{ minHeight: '100vh', background: tokens.colors.background }}>
      <Navbar />

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
            <Box component="nav" aria-label="breadcrumb" style={{ marginBottom: '20px' }}>
              <Box
                component="ol"
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '2px',
                }}
              >
                <Box component="li">
                  <Box
                    component="a"
                    href={homePath}
                    style={{
                      fontSize: '13px',
                      color: tokens.colors.gray400,
                      textDecoration: 'none',
                    }}
                  >
                    {ui.home}
                  </Box>
                </Box>
                <Box component="li" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
                  <IconChevronRight size={12} style={{ color: tokens.colors.gray600 }} />
                </Box>
                <Box component="li">
                  <Box
                    component={Link}
                    href={blogPath}
                    style={{
                      fontSize: '13px',
                      color: tokens.colors.gray400,
                      textDecoration: 'none',
                    }}
                  >
                    {ui.blog}
                  </Box>
                </Box>
                <Box component="li" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
                  <IconChevronRight size={12} style={{ color: tokens.colors.gray600 }} />
                </Box>
                <Box component="li" aria-current="page">
                  <Text style={{ fontSize: '13px', color: tokens.colors.gray500 }}>
                    {category.name}
                  </Text>
                </Box>
              </Box>
            </Box>

            <Badge
              size="lg"
              style={{
                background: tokens.colors.accent,
                color: 'white',
                marginBottom: '16px',
              }}
            >
              {ui.category}
            </Badge>

            <Text
              component="h1"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 800,
                color: 'white',
                marginBottom: '16px',
              }}
            >
              {category.name}
            </Text>
            <Text
              size="xl"
              style={{
                color: tokens.colors.gray400,
                maxWidth: '720px',
                lineHeight: 1.6,
              }}
            >
              {category.description}
            </Text>
            <Text
              size="sm"
              style={{
                color: tokens.colors.gray500,
                marginTop: '16px',
              }}
            >
              {posts.length} {articleCountLabel(posts.length, lang)}
            </Text>
          </motion.div>
        </Container>
      </Box>

      <Container size="lg" py={80}>
        {/* Long-form category primer. Listing pages were otherwise ~150 words
            of post titles, which read as thin content to search engines. */}
        {category.intro.length > 0 && (
          <Box
            component="section"
            mb={64}
            style={{
              maxWidth: '760px',
              borderLeft: `3px solid ${tokens.colors.accent}`,
              paddingLeft: '24px',
            }}
          >
            {category.intro.map((paragraph, index) => (
              <Text
                key={index}
                component="p"
                style={{
                  fontSize: '16px',
                  lineHeight: 1.75,
                  color: tokens.colors.gray600,
                  margin: index === 0 ? '0 0 16px' : '0 0 16px',
                }}
              >
                {paragraph}
              </Text>
            ))}
          </Box>
        )}

        {hubPost && (
          <Box mb={64}>
            <Group gap={8} mb={24}>
              <IconStar size={20} style={{ color: tokens.colors.accent }} />
              <Text
                component="h2"
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: tokens.colors.gray900,
                  margin: 0,
                }}
              >
                {ui.pillarGuide}
              </Text>
            </Group>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={localizedPath(locale, `/blog/${hubPost.slug}`)} style={{ textDecoration: 'none' }}>
                <Card
                  padding={0}
                  radius="lg"
                  style={{
                    background: 'white',
                    border: `2px solid ${tokens.colors.accent}`,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr)',
                  }}
                  className="hub-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Box style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
                    <Box style={{ position: 'relative', aspectRatio: '21/9', overflow: 'hidden' }}>
                      <Image
                        src={hubPost.image}
                        alt={hubPost.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                    <Box p={32}>
                      <Text
                        component="h3"
                        style={{
                          fontSize: '24px',
                          fontWeight: 700,
                          color: tokens.colors.gray900,
                          marginBottom: '12px',
                          lineHeight: 1.3,
                        }}
                      >
                        {hubPost.title}
                      </Text>
                      <Text
                        size="md"
                        style={{
                          color: tokens.colors.gray500,
                          lineHeight: 1.6,
                          marginBottom: '20px',
                        }}
                      >
                        {hubPost.excerpt}
                      </Text>
                      <Group gap={8} style={{ color: tokens.colors.accent }}>
                        <Text size="sm" fw={600}>
                          {ui.readTheGuide}
                        </Text>
                        <IconArrowRight size={16} />
                      </Group>
                    </Box>
                  </Box>
                </Card>
              </Link>
            </motion.div>
          </Box>
        )}

        {spokePosts.length > 0 && (
          <Box>
            <Text
              component="h2"
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: tokens.colors.gray900,
                marginBottom: '24px',
              }}
            >
              {ui.relatedGuides}
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={32}>
              {spokePosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link href={localizedPath(locale, `/blog/${post.slug}`)} style={{ textDecoration: 'none' }}>
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

                      <Box p={24}>
                        <Group gap={16} mb={12}>
                          <Group gap={6}>
                            <IconCalendar size={14} style={{ color: tokens.colors.gray400 }} />
                            <Text size="xs" style={{ color: tokens.colors.gray500 }}>
                              {new Date(post.date).toLocaleDateString(htmlLangForLocale(locale), {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </Text>
                          </Group>
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
                            {ui.readMore}
                          </Text>
                          <IconArrowRight size={16} />
                        </Group>
                      </Box>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Container>

      <Footer />
    </Box>
  );
}
