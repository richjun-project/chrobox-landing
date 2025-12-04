import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box, Container, Text, Group, Badge, SimpleGrid, Card, Image, Button } from '@mantine/core';
import { IconClock, IconArrowRight } from '@tabler/icons-react';
import { tokens } from '../theme';
import { getBlogPosts } from '../data/blogPosts';

export function BlogSection() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'ko' ? 'ko' : 'en';
  const posts = getBlogPosts(lang).slice(0, 3);

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
            {lang === 'ko' ? '블로그' : 'Blog'}
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
            {lang === 'ko' ? '생산성 인사이트' : 'Productivity Insights'}
          </Text>
          <Text
            size="lg"
            style={{
              color: tokens.colors.gray500,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            {lang === 'ko'
              ? '타임박싱과 효과적인 시간 관리에 대한 팁과 전략을 공유합니다.'
              : 'Tips and strategies for time-boxing and effective time management.'}
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
              <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
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
                          {post.readTime} {lang === 'ko' ? '분' : 'min'}
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
          <Link to="/blog" style={{ textDecoration: 'none' }}>
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
              {lang === 'ko' ? '모든 글 보기' : 'View All Posts'}
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Box>
  );
}