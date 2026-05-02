'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Box, Card, Group, Image, SimpleGrid, Text, Badge } from '@mantine/core';
import { IconArrowRight, IconClock, IconStar } from '@tabler/icons-react';
import { tokens } from '../theme';
import {
  contentLanguageForLocale,
  localizedPath,
  type SiteLocale,
} from '../lib/seo';
import { getBlogPost, getBlogPostsByCluster } from '../data/blogPosts';
import { getClusterBySlug } from '../lib/blogTaxonomy';

interface RelatedPostsProps {
  slug: string;
  locale: SiteLocale;
  limit?: number;
}

export function RelatedPosts({ slug, locale, limit = 4 }: RelatedPostsProps) {
  const lang = contentLanguageForLocale(locale);
  const cluster = getClusterBySlug(slug);

  if (!cluster) {
    return null;
  }

  const allInCluster = getBlogPostsByCluster(cluster.slug, lang);
  const hub = cluster.hubSlug !== slug ? getBlogPost(cluster.hubSlug, lang) : undefined;
  const siblings = allInCluster
    .filter((post) => post.slug !== slug && post.slug !== cluster.hubSlug)
    .slice(0, limit);

  if (!hub && siblings.length === 0) {
    return null;
  }

  const categoryHref = localizedPath(locale, `/blog/category/${cluster.slug}`);

  return (
    <Box mt={64}>
      <Group justify="space-between" align="end" mb={24} wrap="nowrap">
        <Box>
          <Text
            component="h2"
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: tokens.colors.gray900,
              marginBottom: '8px',
            }}
          >
            {lang === 'ko' ? '같은 시리즈의 다른 글' : 'More from this series'}
          </Text>
          <Box
            component={Link}
            href={categoryHref}
            style={{
              textDecoration: 'none',
              color: tokens.colors.accent,
              fontSize: '14px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {cluster.name[lang]}
            <IconArrowRight size={14} />
          </Box>
        </Box>
      </Group>

      {hub && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Box
            component={Link}
            href={localizedPath(locale, `/blog/${hub.slug}`)}
            style={{
              display: 'block',
              textDecoration: 'none',
              padding: '24px',
              borderRadius: '16px',
              background: tokens.colors.backgroundAlt,
              border: `2px solid ${tokens.colors.accent}`,
              marginBottom: '24px',
            }}
          >
            <Group gap={8} mb={12}>
              <IconStar size={16} style={{ color: tokens.colors.accent }} />
              <Badge
                size="sm"
                style={{
                  background: tokens.colors.accent,
                  color: 'white',
                }}
              >
                {lang === 'ko' ? '핵심 가이드' : 'Pillar Guide'}
              </Badge>
            </Group>
            <Text
              component="h3"
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: tokens.colors.gray900,
                marginBottom: '8px',
                lineHeight: 1.4,
              }}
            >
              {hub.title}
            </Text>
            <Text
              size="sm"
              style={{
                color: tokens.colors.gray600,
                lineHeight: 1.6,
              }}
            >
              {hub.excerpt}
            </Text>
          </Box>
        </motion.div>
      )}

      {siblings.length > 0 && (
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={16}>
          {siblings.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                component={Link}
                href={localizedPath(locale, `/blog/${post.slug}`)}
                padding={20}
                radius="md"
                style={{
                  background: 'white',
                  border: `1px solid ${tokens.colors.border}`,
                  textDecoration: 'none',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tokens.colors.accent;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = tokens.colors.border;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Group gap={12} wrap="nowrap" align="start">
                  <Box
                    style={{
                      width: '64px',
                      height: '64px',
                      flexShrink: 0,
                      borderRadius: '8px',
                      overflow: 'hidden',
                      background: tokens.colors.gray100,
                    }}
                  >
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
                  <Box style={{ minWidth: 0, flex: 1 }}>
                    <Text
                      component="h3"
                      style={{
                        fontSize: '15px',
                        fontWeight: 600,
                        color: tokens.colors.gray900,
                        lineHeight: 1.4,
                        marginBottom: '6px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.title}
                    </Text>
                    <Group gap={6}>
                      <IconClock size={12} style={{ color: tokens.colors.gray400 }} />
                      <Text size="xs" style={{ color: tokens.colors.gray500 }}>
                        {post.readTime} {lang === 'ko' ? '분' : 'min'}
                      </Text>
                    </Group>
                  </Box>
                </Group>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
