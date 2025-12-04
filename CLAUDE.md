# Chrobox Landing Page 프로젝트 가이드

## 프로젝트 개요
React/TypeScript 기반 Chrobox 앱 소개 랜딩페이지

## 기술 스택
- React 18 + TypeScript
- Vite (빌드 도구)
- Mantine UI (컴포넌트 라이브러리)
- Framer Motion (애니메이션)
- react-i18next (다국어 지원)
- Tabler Icons (아이콘)

---

# 디자인 시스템 가이드

## 1. 타이포그래피

### 폰트 패밀리
```tsx
// 메인 폰트: Outfit (Google Fonts)
fontFamily: '"Outfit", sans-serif'

// 모노스페이스 (코드/숫자 강조): Space Mono
fontFamily: '"Space Mono", monospace'
```

### 폰트 크기 체계
| 용도 | 크기 | Weight | 사용 예시 |
|------|------|--------|----------|
| Hero Title | 56px | 800 | 메인 헤드라인 |
| Section Title | 42px | 700 | 섹션 제목 |
| Card Title | 28px | 700 | 카드/피처 제목 |
| Subtitle | 22px | 600 | 부제목 |
| Body Large | 18px | 500 | 본문 강조 |
| Body | 16px | 400 | 일반 본문 |
| Body Small | 14px | 400 | 보조 텍스트 |
| Caption | 13px | 500 | 레이블, 캡션 |
| Small | 11px | 500 | 배지, 작은 텍스트 |

### 줄간격
- 헤딩: lineHeight 1.1 ~ 1.3
- 본문: lineHeight 1.5 ~ 1.6

---

## 2. 색상 시스템

### 브랜드 컬러
```tsx
import { tokens } from '@/theme';

// Primary
tokens.colors.primary      // #1A1F36 (Deep Navy)
tokens.colors.accent       // #20C997 (Mint Green)
tokens.colors.accentLight  // rgba(32, 201, 151, 0.1)

// Secondary
tokens.colors.secondary    // #FF6B6B (Coral)
tokens.colors.tertiary     // #FFB347 (Amber)
tokens.colors.skyBlue      // #4DABF7
tokens.colors.lavender     // #9775FA

// Text
tokens.colors.textPrimary   // #1A1F36
tokens.colors.textSecondary // #5A6178
tokens.colors.textTertiary  // #9CA3AF

// Background
tokens.colors.background    // #FFFFFF
tokens.colors.backgroundAlt // #F8FAFC
tokens.colors.backgroundDark // #1A1F36

// Border
tokens.colors.border       // #E5E7EB
tokens.colors.borderLight  // #F3F4F6
```

### 그라데이션
```tsx
tokens.gradients.primary   // Mint → Sky Blue
tokens.gradients.secondary // Coral → Amber
tokens.gradients.dark      // Navy gradient
tokens.gradients.glass     // Glass morphism
tokens.gradients.mesh      // Background mesh
```

---

## 3. 여백 시스템 (8의 배수)

### Spacing Tokens
```tsx
// Mantine spacing
xs: '4px'
sm: '8px'
md: '16px'
lg: '24px'
xl: '32px'

// 확장 값
'2xl': '48px'
'3xl': '64px'
'4xl': '80px'
'5xl': '120px'
```

### 섹션 패딩
- 섹션 상하: 80px ~ 120px
- 컨테이너 좌우: 16px (모바일) ~ 48px (데스크탑)

---

## 4. 컴포넌트 크기

### 버튼
| 타입 | 높이 | Padding | Border Radius |
|------|------|---------|---------------|
| Large (CTA) | 56px | 32px | 16px |
| Medium | 48px | 24px | 12px |
| Small | 40px | 16px | 10px |

### 카드
```tsx
// Feature Card
{
  padding: '32px',
  borderRadius: '24px',
  background: tokens.colors.background,
  boxShadow: tokens.shadows.card,
}
```

### Border Radius
| 요소 | 값 |
|------|-----|
| 버튼 Large | 16px |
| 버튼 Medium | 12px |
| 카드 Large | 24px |
| 카드 Medium | 16px |
| 배지 | 8px |
| Input | 12px |

---

## 5. 그림자 시스템

```tsx
tokens.shadows.glow       // 0 0 40px rgba(32, 201, 151, 0.3)
tokens.shadows.glowStrong // 0 0 60px rgba(32, 201, 151, 0.5)
tokens.shadows.card       // 0 4px 24px rgba(26, 31, 54, 0.08)
tokens.shadows.cardHover  // 0 12px 40px rgba(26, 31, 54, 0.15)
tokens.shadows.button     // 0 4px 16px rgba(32, 201, 151, 0.3)
```

---

## 6. 애니메이션

### Duration
```tsx
tokens.animation.fast   // 150ms
tokens.animation.normal // 250ms
tokens.animation.slow   // 400ms
tokens.animation.slower // 800ms
```

### Easing Curves
```tsx
tokens.animation.curve  // cubic-bezier(0.4, 0, 0.2, 1)
tokens.animation.bounce // cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Framer Motion Variants
```tsx
// Fade In Up
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Stagger Children
const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

// Scale on Hover
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

---

## 7. 반응형 브레이크포인트

```tsx
// Mantine breakpoints
xs: '36em'  // 576px
sm: '48em'  // 768px
md: '62em'  // 992px
lg: '75em'  // 1200px
xl: '88em'  // 1408px
```

---

## 8. 아이콘 사용

```tsx
import { IconClock, IconCalendar } from '@tabler/icons-react';

// 크기
size={24}  // 기본
size={20}  // 작은
size={32}  // 큰
size={48}  // 히어로

// Stroke
stroke={1.5}  // 기본
stroke={2}    // 강조
```

---

## 9. 코드 스타일 규칙

### Import 순서
```tsx
// 1. React
import { useState, useEffect } from 'react';

// 2. Third-party
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// 3. Mantine
import { Box, Text, Button } from '@mantine/core';

// 4. Icons
import { IconArrowRight } from '@tabler/icons-react';

// 5. Local
import { tokens } from '@/theme';
import { MyComponent } from '@/components';
```

### 컴포넌트 구조
```tsx
export function FeatureCard({ title, description, icon }: Props) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Box
        style={{
          padding: '32px',
          borderRadius: '24px',
          background: tokens.colors.background,
          boxShadow: tokens.shadows.card,
        }}
      >
        {/* Content */}
      </Box>
    </motion.div>
  );
}
```

---

## 10. 프로젝트 구조

```
src/
├── main.tsx              # 앱 진입점
├── App.tsx               # 라우터 설정
├── index.css             # 글로벌 스타일
├── theme/
│   └── index.ts          # Mantine 테마 & 토큰
├── i18n/
│   ├── index.ts          # i18n 설정
│   ├── en.json           # 영어 번역
│   └── ko.json           # 한국어 번역
├── components/
│   ├── Logo.tsx          # 로고 컴포넌트
│   ├── Navbar.tsx        # 네비게이션
│   ├── Hero.tsx          # 히어로 섹션
│   ├── Features.tsx      # 기능 섹션
│   ├── HowItWorks.tsx    # 사용 방법
│   ├── Pricing.tsx       # 요금제
│   ├── Download.tsx      # 다운로드
│   └── Footer.tsx        # 푸터
├── hooks/
│   └── useScrollAnimation.ts
└── assets/
    └── ...
```

---

## 11. 개발 체크리스트

코드 작성 시 확인:
- [ ] `tokens`에서 색상/그림자/애니메이션 값 사용
- [ ] 다국어 텍스트는 `useTranslation` 훅 사용
- [ ] 애니메이션은 Framer Motion 사용
- [ ] 모든 인터랙티브 요소에 hover/tap 효과 적용
- [ ] 반응형 디자인 적용 (모바일 우선)
- [ ] 접근성 고려 (alt, aria-label 등)
- [ ] 여백은 8의 배수 사용
