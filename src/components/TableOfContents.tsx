import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Text, UnstyledButton } from '@mantine/core';
import { IconList, IconChevronDown } from '@tabler/icons-react';
import { tokens } from '../theme';

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  content: string;
  lang?: 'en' | 'ko';
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractHeadings(markdown: string): Heading[] {
  const lines = markdown.split('\n');
  const headings: Heading[] = [];
  const idCount: Record<string, number> = {};

  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)$/);
    const h3Match = line.match(/^###\s+(.+)$/);

    if (h2Match) {
      const text = h2Match[1].trim();
      const baseId = slugify(text);
      const count = idCount[baseId] ?? 0;
      const id = count === 0 ? baseId : `${baseId}-${count}`;
      idCount[baseId] = count + 1;
      headings.push({ id, text, level: 2 });
    } else if (h3Match) {
      const text = h3Match[1].trim();
      const baseId = slugify(text);
      const count = idCount[baseId] ?? 0;
      const id = count === 0 ? baseId : `${baseId}-${count}`;
      idCount[baseId] = count + 1;
      headings.push({ id, text, level: 3 });
    }
  }

  return headings;
}

export function TableOfContents({ content, lang = 'en' }: TableOfContentsProps) {
  const headings = extractHeadings(content);
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 120;
    let current = '';

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el && el.offsetTop <= scrollY) {
        current = heading.id;
      }
    }

    setActiveId(current);
  }, [headings]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  if (headings.length === 0) return null;

  const label = lang === 'ko' ? '목차' : 'Table of Contents';

  const tocItems = (
    <Box component="ol" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {headings.map((heading) => {
        const isActive = activeId === heading.id;
        return (
          <Box
            key={heading.id}
            component="li"
            style={{
              paddingLeft: heading.level === 3 ? '16px' : '0',
              marginBottom: '4px',
            }}
          >
            <UnstyledButton
              onClick={() => handleClick(heading.id)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '6px 10px',
                borderRadius: '8px',
                fontSize: heading.level === 2 ? '13px' : '12px',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? tokens.colors.accent : tokens.colors.textSecondary,
                background: isActive ? tokens.colors.accentLight : 'transparent',
                borderLeft: isActive
                  ? `2px solid ${tokens.colors.accent}`
                  : '2px solid transparent',
                transition: `all ${tokens.animation.fast} ${tokens.animation.curve}`,
                lineHeight: 1.4,
                cursor: 'pointer',
              }}
            >
              {heading.text}
            </UnstyledButton>
          </Box>
        );
      })}
    </Box>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <Box
        style={{
          display: 'none',
          '@media (min-width: 1200px)': { display: 'block' },
        }}
        className="toc-desktop"
      >
        <Box
          style={{
            position: 'sticky',
            top: '96px',
            padding: '20px',
            background: tokens.colors.backgroundAlt,
            borderRadius: '16px',
            border: `1px solid ${tokens.colors.border}`,
            maxHeight: 'calc(100vh - 140px)',
            overflowY: 'auto',
          }}
        >
          <Text
            style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: tokens.colors.textTertiary,
              marginBottom: '12px',
            }}
          >
            {label}
          </Text>
          {tocItems}
        </Box>
      </Box>

      {/* Mobile: collapsible */}
      <Box
        className="toc-mobile"
        style={{
          marginBottom: '32px',
          border: `1px solid ${tokens.colors.border}`,
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <UnstyledButton
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '14px 16px',
            background: tokens.colors.backgroundAlt,
            cursor: 'pointer',
          }}
        >
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconList size={16} style={{ color: tokens.colors.textSecondary }} />
            <Text
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: tokens.colors.textPrimary,
              }}
            >
              {label}
            </Text>
          </Box>
          <motion.div
            animate={{ rotate: mobileOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconChevronDown size={16} style={{ color: tokens.colors.textSecondary }} />
          </motion.div>
        </UnstyledButton>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden' }}
            >
              <Box style={{ padding: '12px 16px' }}>{tocItems}</Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
}
