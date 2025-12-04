import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Box, Container, Text, Group, Stack, Anchor } from '@mantine/core';
import { Logo } from './Logo';
import { tokens } from '../theme';

const COMPANY_INFO = {
  name: 'silverithm',
  ceo: '김준형',
  businessNumber: '107-21-26475',
  address: '서울특별시 신림동 1547-10',
  email: 'ggprgrkjh@naver.com',
  phone: '010-4549-2094',
};

const LEGAL_LINKS = {
  privacy: 'https://relic-baboon-412.notion.site/2bc766a8bb4680839471f31909f3958c',
  terms: 'https://relic-baboon-412.notion.site/2bc766a8bb46804daf77d521e89435ac',
};

export function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      style={{
        background: tokens.colors.gray50,
        borderTop: `1px solid ${tokens.colors.gray100}`,
      }}
    >
      <Container size="xl" py={60}>
        <Group align="flex-start" justify="space-between" wrap="wrap" gap={48}>
          {/* Brand & Tagline */}
          <Stack gap={16} style={{ maxWidth: '280px' }}>
            <Logo size="md" />
            <Text size="md" style={{ color: tokens.colors.gray500, lineHeight: 1.7 }}>
              {t('footer.tagline')}
            </Text>
          </Stack>

          {/* Company Info */}
          <Stack gap={12}>
            <Text
              size="sm"
              fw={700}
              style={{
                color: tokens.colors.gray900,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '4px',
              }}
            >
              회사 정보
            </Text>
            <Text size="sm" style={{ color: tokens.colors.gray500 }}>
              회사명: {COMPANY_INFO.name}
            </Text>
            <Text size="sm" style={{ color: tokens.colors.gray500 }}>
              대표자: {COMPANY_INFO.ceo}
            </Text>
            <Text size="sm" style={{ color: tokens.colors.gray500 }}>
              사업자등록번호: {COMPANY_INFO.businessNumber}
            </Text>
            <Text size="sm" style={{ color: tokens.colors.gray500 }}>
              주소: {COMPANY_INFO.address}
            </Text>
          </Stack>

          {/* Contact */}
          <Stack gap={12}>
            <Text
              size="sm"
              fw={700}
              style={{
                color: tokens.colors.gray900,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '4px',
              }}
            >
              연락처
            </Text>
            <Text size="sm" style={{ color: tokens.colors.gray500 }}>
              이메일: {COMPANY_INFO.email}
            </Text>
            <Text size="sm" style={{ color: tokens.colors.gray500 }}>
              전화번호: {COMPANY_INFO.phone}
            </Text>
          </Stack>

          {/* Legal Links */}
          <Stack gap={12}>
            <Text
              size="sm"
              fw={700}
              style={{
                color: tokens.colors.gray900,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '4px',
              }}
            >
              법적 고지
            </Text>
            <motion.div whileHover={{ x: 4 }}>
              <Anchor
                href={LEGAL_LINKS.privacy}
                target="_blank"
                rel="noopener noreferrer"
                underline="never"
                style={{
                  color: tokens.colors.gray500,
                  fontSize: '14px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = tokens.colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = tokens.colors.gray500;
                }}
              >
                개인정보 처리방침
              </Anchor>
            </motion.div>
            <motion.div whileHover={{ x: 4 }}>
              <Anchor
                href={LEGAL_LINKS.terms}
                target="_blank"
                rel="noopener noreferrer"
                underline="never"
                style={{
                  color: tokens.colors.gray500,
                  fontSize: '14px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = tokens.colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = tokens.colors.gray500;
                }}
              >
                서비스 이용약관
              </Anchor>
            </motion.div>
          </Stack>
        </Group>
      </Container>

      {/* Bottom Bar */}
      <Box
        style={{
          borderTop: `1px solid ${tokens.colors.gray100}`,
          padding: '20px 0',
        }}
      >
        <Container size="xl">
          <Text size="sm" style={{ color: tokens.colors.gray400, textAlign: 'center' }}>
            © 2024 {COMPANY_INFO.name}. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
