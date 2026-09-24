import Link from 'next/link';
import { Box, Text } from '@mantine/core';
import { tokens } from '../theme';

export interface PillLink {
  href: string;
  label: string;
}

/** A titled list of crawlable text links, styled like the blog category pills. */
export function LinkPills({ title, links }: { title: string; links: PillLink[] }) {
  if (!links.length) {
    return null;
  }

  return (
    <Box component="nav" aria-label={title} mt={48}>
      <Text
        component="h2"
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: tokens.colors.gray900,
          marginBottom: '16px',
        }}
      >
        {title}
      </Text>
      <Box
        component="ul"
        style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Box
              component={Link}
              href={link.href}
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                borderRadius: '999px',
                border: `1px solid ${tokens.colors.border}`,
                background: tokens.colors.background,
                fontSize: '14px',
                fontWeight: 500,
                color: tokens.colors.gray700,
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Box>
          </li>
        ))}
      </Box>
    </Box>
  );
}
