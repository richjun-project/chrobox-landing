import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Box, Container, Text, Group, Badge, Button, Image } from '@mantine/core';
import { IconClock, IconCalendar, IconArrowLeft, IconUser } from '@tabler/icons-react';
import { tokens } from '../theme';
import { getBlogPost, getBlogContent } from '../data/blogPosts';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const lang = i18n.language === 'ko' ? 'ko' : 'en';

  const post = slug ? getBlogPost(slug, lang) : undefined;
  const content = slug ? getBlogContent(slug, lang) : '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Box style={{ minHeight: '100vh', background: tokens.colors.background }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        style={{
          background: tokens.colors.gray900,
          paddingTop: '120px',
          paddingBottom: '60px',
        }}
      >
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" style={{ textDecoration: 'none' }}>
              <Button
                variant="subtle"
                leftSection={<IconArrowLeft size={16} />}
                style={{
                  color: tokens.colors.gray400,
                  marginBottom: '24px',
                }}
              >
                {lang === 'ko' ? '블로그로 돌아가기' : 'Back to Blog'}
              </Button>
            </Link>

            <Badge
              size="lg"
              style={{
                background: tokens.colors.accent,
                color: 'white',
                marginBottom: '16px',
              }}
            >
              {post.category}
            </Badge>

            <Text
              component="h1"
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.3,
                marginBottom: '24px',
              }}
            >
              {post.title}
            </Text>

            <Group gap={24}>
              <Group gap={8}>
                <IconUser size={16} style={{ color: tokens.colors.gray400 }} />
                <Text size="sm" style={{ color: tokens.colors.gray400 }}>
                  {post.author}
                </Text>
              </Group>
              <Group gap={8}>
                <IconCalendar size={16} style={{ color: tokens.colors.gray400 }} />
                <Text size="sm" style={{ color: tokens.colors.gray400 }}>
                  {new Date(post.date).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Text>
              </Group>
              <Group gap={8}>
                <IconClock size={16} style={{ color: tokens.colors.gray400 }} />
                <Text size="sm" style={{ color: tokens.colors.gray400 }}>
                  {post.readTime} {lang === 'ko' ? '분 읽기' : 'min read'}
                </Text>
              </Group>
            </Group>
          </motion.div>
        </Container>
      </Box>

      {/* Featured Image */}
      <Container size="md" style={{ marginTop: '-20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              style={{
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'cover',
              }}
            />
          </Box>
        </motion.div>
      </Container>

      {/* Content */}
      <Container size="md" py={60}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            className="blog-content"
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: tokens.colors.gray700,
            }}
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <Text
                    component="h1"
                    style={{
                      fontSize: '32px',
                      fontWeight: 800,
                      color: tokens.colors.gray900,
                      marginTop: '48px',
                      marginBottom: '24px',
                    }}
                  >
                    {children}
                  </Text>
                ),
                h2: ({ children }) => (
                  <Text
                    component="h2"
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: tokens.colors.gray900,
                      marginTop: '40px',
                      marginBottom: '16px',
                    }}
                  >
                    {children}
                  </Text>
                ),
                h3: ({ children }) => (
                  <Text
                    component="h3"
                    style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: tokens.colors.gray900,
                      marginTop: '32px',
                      marginBottom: '12px',
                    }}
                  >
                    {children}
                  </Text>
                ),
                p: ({ children }) => (
                  <Text
                    component="p"
                    style={{
                      marginBottom: '20px',
                      lineHeight: 1.8,
                    }}
                  >
                    {children}
                  </Text>
                ),
                ul: ({ children }) => (
                  <Box
                    component="ul"
                    style={{
                      paddingLeft: '24px',
                      marginBottom: '20px',
                    }}
                  >
                    {children}
                  </Box>
                ),
                ol: ({ children }) => (
                  <Box
                    component="ol"
                    style={{
                      paddingLeft: '24px',
                      marginBottom: '20px',
                    }}
                  >
                    {children}
                  </Box>
                ),
                li: ({ children }) => (
                  <Box
                    component="li"
                    style={{
                      marginBottom: '8px',
                      lineHeight: 1.7,
                    }}
                  >
                    {children}
                  </Box>
                ),
                strong: ({ children }) => (
                  <Text component="strong" fw={600} style={{ color: tokens.colors.gray900 }}>
                    {children}
                  </Text>
                ),
                table: ({ children }) => (
                  <Box
                    component="table"
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      marginBottom: '24px',
                      fontSize: '15px',
                    }}
                  >
                    {children}
                  </Box>
                ),
                th: ({ children }) => (
                  <Box
                    component="th"
                    style={{
                      textAlign: 'left',
                      padding: '12px',
                      background: tokens.colors.gray100,
                      fontWeight: 600,
                      borderBottom: `2px solid ${tokens.colors.gray200}`,
                    }}
                  >
                    {children}
                  </Box>
                ),
                td: ({ children }) => (
                  <Box
                    component="td"
                    style={{
                      padding: '12px',
                      borderBottom: `1px solid ${tokens.colors.gray100}`,
                    }}
                  >
                    {children}
                  </Box>
                ),
                blockquote: ({ children }) => (
                  <Box
                    component="blockquote"
                    style={{
                      borderLeft: `4px solid ${tokens.colors.accent}`,
                      paddingLeft: '20px',
                      marginLeft: 0,
                      marginBottom: '24px',
                      fontStyle: 'italic',
                      color: tokens.colors.gray600,
                    }}
                  >
                    {children}
                  </Box>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </Box>

          {/* Tags */}
          <Group gap={8} mt={48}>
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="light"
                style={{
                  background: tokens.colors.gray100,
                  color: tokens.colors.gray600,
                }}
              >
                #{tag}
              </Badge>
            ))}
          </Group>

          {/* CTA */}
          <Box
            mt={60}
            p={32}
            style={{
              background: `linear-gradient(135deg, ${tokens.colors.gray900} 0%, ${tokens.colors.gray800} 100%)`,
              borderRadius: '16px',
              textAlign: 'center',
            }}
          >
            <Text
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: 'white',
                marginBottom: '12px',
              }}
            >
              {lang === 'ko'
                ? '지금 Chrobox로 타임박싱을 시작하세요'
                : 'Start Time-Boxing with Chrobox Today'}
            </Text>
            <Text style={{ color: tokens.colors.gray400, marginBottom: '24px' }}>
              {lang === 'ko'
                ? '3일 무료 체험으로 생산성을 혁신하세요.'
                : 'Transform your productivity with a 3-day free trial.'}
            </Text>
            <Button
              size="lg"
              style={{
                background: tokens.colors.accent,
                border: 'none',
                borderRadius: '12px',
              }}
            >
              {lang === 'ko' ? '무료 체험 시작하기' : 'Start Free Trial'}
            </Button>
          </Box>
        </motion.div>
      </Container>

      <Footer />
    </Box>
  );
}
