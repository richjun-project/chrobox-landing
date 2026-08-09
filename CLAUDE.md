# Chrobox Landing Page 프로젝트 가이드

## 프로젝트 개요
Next.js(App Router) 정적 export 기반 Chrobox 앱 소개 랜딩페이지 (chrobox.net)

## 기술 스택
- Next.js 16 (App Router, `output: 'export'`) + React 19 + TypeScript
- Mantine UI (컴포넌트 라이브러리)
- Framer Motion (애니메이션)
- react-i18next (클라이언트 UI 번역)
- Tabler Icons (아이콘)
- Vercel 배포 (`vercel.json`, outputDirectory: `out`)

---

# 다국어(i18n) 아키텍처 — 필독

20개 로케일(en·ko 외 18개) 전부가 **본문까지 번역된** 콘텐츠를 SSG로 내보낸다.
`ContentLanguage === SiteLocale` 이므로 로케일이 곧 콘텐츠 언어다.

## 번역이 사는 곳

| 종류 | 원본(en/ko) | 나머지 18개 로케일 |
|---|---|---|
| 블로그 메타·본문 | `src/data/blogBatch*.ts` (en + `*Ko` 필드) | `src/data/localized/<locale>.ts` 의 `blogPosts`/`blogContents` |
| 비교 페이지 | `src/data/comparisons.ts` (`*Ko` 필드) | 같은 팩의 `comparisons` |
| 직업 템플릿 | `src/data/scheduleTemplates.ts` (`*Ko` 필드) | 같은 팩의 `templates` |
| 블로그 카테고리 인트로 | `src/lib/blogTaxonomy.ts` 의 `intro.en/ko` | 같은 팩의 `clusters` |
| UI 문자열(서버 렌더) | `src/lib/uiCopy.ts` 의 `EN_UI_COPY`/`KO_UI_COPY` | `src/data/localized/uiCopy.ts` |
| UI 문자열(클라이언트) | `src/i18n/*.json` | 동일 |

`src/data/localized/*.ts`, `index.ts`, `uiCopy.ts` 는 **생성 파일**이다. 직접 수정하지 말고
파이프라인을 다시 돌린다.

## 번역 추가/갱신

```bash
GEMINI_API_KEY=... npm run i18n:translate            # 전체 로케일
GEMINI_API_KEY=... npm run i18n:translate -- fr it   # 특정 로케일만
GEMINI_API_KEY=... npm run i18n:translate -- --kinds=ui   # 특정 종류만
```

- 결과는 `scripts/.i18n-cache/<locale>/<kind>/<id>.json` 에 캐시된다(gitignore).
  재실행 시 **빈 칸만** 채우므로 중복 과금이 없다. 특정 항목을 다시 번역하려면
  해당 캐시 파일을 지운다.
- 팩 생성은 **머지 방식**이다. 캐시가 비어 있어도 기존 팩 값은 지워지지 않는다.
- `EN_UI_COPY` 나 카테고리 인트로에 **키/문단을 추가하면** 해당 kind 캐시를 지우고
  다시 돌려야 한다(형태가 달라진 캐시는 그대로 재사용되어 새 키가 영문으로 남는다).

## 하드코딩 금지

`lang === 'ko' ? '한국어' : 'English'` 형태의 삼항은 **쓰지 않는다.** 18개 로케일이
영문으로 떨어진다. UI 문자열은 `uiCopy(lang).<key>`, 치환이 필요하면
`formatCopy(ui.someKey, { competitor })` 를 쓴다. 데이터는 로컬라이즈 헬퍼를 거친다:
`getBlogPosts(lang)` / `getComparison(slug, lang)` / `localizeScheduleTemplate(template, lang)` /
`clusterCopy(cluster, lang)` / `categoryLabel(category, lang)`.

## SEO 타이틀

`<title>` 은 `pageMetadata()` 안에서 `fitTitle()` 을 거쳐 **폭 60(반각 기준)** 으로 맞춰진다.
CJK는 글자당 2폭으로 계산한다. 꼬리 세그먼트(` | 브랜드`) → 괄호 수식어 → 절 경계 →
단어 경계 순으로 줄인다. OG/Twitter 타이틀은 원문 전체를 유지한다.

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
