'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Box, Container, Text, Group, Badge, Button, Image } from '@mantine/core';
import { IconClock, IconCalendar, IconArrowLeft, IconUser, IconChevronRight } from '@tabler/icons-react';
import { tokens } from '../theme';
import { getBlogPost, getBlogContent } from '../data/blogPosts';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TableOfContents } from '../components/TableOfContents';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import {
  contentLanguageForLocale,
  localizedPath,
  type SiteLocale,
} from '../lib/seo';

const APP_STORE_URL = 'https://apps.apple.com/kr/app/%ED%81%AC%EB%A1%9C%EB%B0%95%EC%8A%A4-%ED%83%80%EC%9E%84%EB%B0%95%EC%8A%A4-%ED%94%8C%EB%9E%98%EB%84%88/id6755880209';

export function BlogPost({ slug, locale = 'en' }: { slug: string; locale?: SiteLocale }) {
  const lang = contentLanguageForLocale(locale);

  const post = getBlogPost(slug, lang);
  const content = getBlogContent(slug, lang);
  const blogLink = localizedPath(locale, '/blog');
  const homePath = localizedPath(locale, '/');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return null;
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
                    {lang === 'ko' ? '홈' : 'Home'}
                  </Box>
                </Box>
                <Box component="li" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
                  <IconChevronRight size={12} style={{ color: tokens.colors.gray600 }} />
                </Box>
                <Box component="li">
                  <Box
                    component={Link}
                    href={blogLink}
                    style={{
                      fontSize: '13px',
                      color: tokens.colors.gray400,
                      textDecoration: 'none',
                    }}
                  >
                    {lang === 'ko' ? '블로그' : 'Blog'}
                  </Box>
                </Box>
                <Box component="li" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
                  <IconChevronRight size={12} style={{ color: tokens.colors.gray600 }} />
                </Box>
                <Box component="li" aria-current="page">
                  <Text
                    style={{
                      fontSize: '13px',
                      color: tokens.colors.gray500,
                      maxWidth: '240px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {post.title}
                  </Text>
                </Box>
              </Box>
            </Box>

            <Link href={blogLink} style={{ textDecoration: 'none' }}>
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
      <Container size="lg" py={60}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '48px',
              alignItems: 'start',
              maxWidth: '100%',
            }}
            className="blog-post-layout"
          >
            {/* Main article column */}
            <Box style={{ minWidth: 0 }}>
              {/* Mobile TOC (shown only on mobile via CSS) */}
              <Box className="blog-toc-mobile">
                <TableOfContents content={content} lang={lang} />
              </Box>

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
                    h2: ({ children }) => {
                      const text = Array.isArray(children)
                        ? children.map((c) => (typeof c === 'string' ? c : '')).join('')
                        : typeof children === 'string' ? children : '';
                      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').trim();
                      return (
                        <Text
                          id={id}
                          component="h2"
                          style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            color: tokens.colors.gray900,
                            marginTop: '40px',
                            marginBottom: '16px',
                            scrollMarginTop: '96px',
                          }}
                        >
                          {children}
                        </Text>
                      );
                    },
                    h3: ({ children }) => {
                      const text = Array.isArray(children)
                        ? children.map((c) => (typeof c === 'string' ? c : '')).join('')
                        : typeof children === 'string' ? children : '';
                      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').trim();
                      return (
                        <Text
                          id={id}
                          component="h3"
                          style={{
                            fontSize: '20px',
                            fontWeight: 600,
                            color: tokens.colors.gray900,
                            marginTop: '32px',
                            marginBottom: '12px',
                            scrollMarginTop: '96px',
                          }}
                        >
                          {children}
                        </Text>
                      );
                    },
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

              {/* FAQ Section */}
              {post.faqs && post.faqs.length > 0 && (
                <Box mt={60}>
                  <Text
                    component="h2"
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: tokens.colors.gray900,
                      marginBottom: '24px',
                    }}
                  >
                    {lang === 'ko' ? '자주 묻는 질문' : 'Frequently Asked Questions'}
                  </Text>
                  <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {post.faqs.map((faq, idx) => {
                      const question = lang === 'ko' && faq.questionKo ? faq.questionKo : faq.question;
                      const answer = lang === 'ko' && faq.answerKo ? faq.answerKo : faq.answer;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.08 }}
                        >
                          <Box
                            style={{
                              padding: '24px',
                              borderRadius: '16px',
                              background: tokens.colors.backgroundAlt,
                              border: `1px solid ${tokens.colors.border}`,
                            }}
                          >
                            <Text
                              component="h3"
                              style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: tokens.colors.gray900,
                                marginBottom: '10px',
                              }}
                            >
                              {question}
                            </Text>
                            <Text
                              style={{
                                fontSize: '15px',
                                color: tokens.colors.gray600,
                                lineHeight: 1.7,
                              }}
                            >
                              {answer}
                            </Text>
                          </Box>
                        </motion.div>
                      );
                    })}
                  </Box>
                </Box>
              )}

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
                  component="a"
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  style={{
                    background: tokens.colors.accent,
                    border: 'none',
                    borderRadius: '12px',
                    textDecoration: 'none',
                  }}
                >
                  {lang === 'ko' ? '무료 체험 시작하기' : 'Start Free Trial'}
                </Button>
              </Box>
            </Box>

            {/* Desktop TOC sidebar (shown only on wide screens via CSS) */}
            <Box className="blog-toc-desktop">
              <TableOfContents content={content} lang={lang} />
            </Box>
          </Box>
        </motion.div>
      </Container>

      <style>{`
        .blog-toc-desktop { display: none; }
        .blog-toc-mobile .toc-desktop { display: none !important; }
        @media (min-width: 1100px) {
          .blog-post-layout {
            grid-template-columns: 1fr 260px !important;
          }
          .blog-toc-desktop { display: block; }
          .blog-toc-mobile { display: none; }
          .blog-toc-desktop .toc-mobile { display: none !important; }
          .blog-toc-desktop .toc-desktop { display: block !important; }
        }
      `}</style>

      <Footer />
    </Box>
  );
}
