import type { BlogPostMeta } from '../types/blog';

// English blog posts
export const enBlogPosts: BlogPostMeta[] = [
  {
    slug: 'what-is-time-boxing',
    title: 'What is Time-Boxing? The Ultimate Guide to Mastering Your Time',
    date: '2024-12-01',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['time-boxing', 'productivity', 'time-management', 'focus'],
    excerpt: 'Discover how time-boxing can transform your productivity. Learn the science behind this powerful technique and how to implement it effectively in your daily routine.',
    image: '/screenshots/en/1.png',
    readTime: 8,
    lang: 'en',
  },
  {
    slug: '5-time-boxing-strategies',
    title: '5 Time-Boxing Strategies Used by Top CEOs and Entrepreneurs',
    date: '2024-12-03',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['time-boxing', 'ceo', 'entrepreneur', 'productivity-tips', 'success'],
    excerpt: 'Learn the exact time-boxing strategies that Elon Musk, Bill Gates, and other successful leaders use to maximize their productivity and achieve extraordinary results.',
    image: '/screenshots/en/2.png',
    readTime: 6,
    lang: 'en',
  },
  {
    slug: 'time-boxing-vs-pomodoro',
    title: 'Time-Boxing vs Pomodoro: Which Technique is Right for You?',
    date: '2024-12-05',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['time-boxing', 'pomodoro', 'comparison', 'productivity', 'focus'],
    excerpt: 'A comprehensive comparison of time-boxing and the Pomodoro Technique. Discover which productivity method suits your work style and how to get the most from each approach.',
    image: '/screenshots/en/3.png',
    readTime: 7,
    lang: 'en',
  },
];

// Korean blog posts
export const koBlogPosts: BlogPostMeta[] = [
  {
    slug: 'what-is-time-boxing',
    title: '타임박싱이란? 시간을 마스터하는 완벽 가이드',
    date: '2024-12-01',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['타임박싱', '생산성', '시간관리', '집중력'],
    excerpt: '타임박싱이 어떻게 생산성을 혁신적으로 바꿀 수 있는지 알아보세요. 이 강력한 기법의 과학적 원리와 일상에서 효과적으로 적용하는 방법을 소개합니다.',
    image: '/screenshots/ko/1.png',
    readTime: 8,
    lang: 'ko',
  },
  {
    slug: '5-time-boxing-strategies',
    title: '세계적인 CEO들이 사용하는 5가지 타임박싱 전략',
    date: '2024-12-03',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['타임박싱', 'CEO', '기업가', '생산성팁', '성공'],
    excerpt: '일론 머스크, 빌 게이츠 등 성공한 리더들이 생산성을 극대화하고 놀라운 성과를 달성하기 위해 사용하는 정확한 타임박싱 전략을 배워보세요.',
    image: '/screenshots/ko/2.png',
    readTime: 6,
    lang: 'ko',
  },
  {
    slug: 'time-boxing-vs-pomodoro',
    title: '타임박싱 vs 뽀모도로: 어떤 기법이 나에게 맞을까?',
    date: '2024-12-05',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['타임박싱', '뽀모도로', '비교', '생산성', '집중력'],
    excerpt: '타임박싱과 뽀모도로 기법의 종합 비교. 어떤 생산성 방법이 당신의 업무 스타일에 맞는지 알아보고 각 접근법에서 최대 효과를 얻는 방법을 발견하세요.',
    image: '/screenshots/ko/3.png',
    readTime: 7,
    lang: 'ko',
  },
];

export const getBlogPosts = (lang: 'en' | 'ko'): BlogPostMeta[] => {
  return lang === 'en' ? enBlogPosts : koBlogPosts;
};

export const getBlogPost = (slug: string, lang: 'en' | 'ko'): BlogPostMeta | undefined => {
  const posts = getBlogPosts(lang);
  return posts.find(post => post.slug === slug);
};

// Blog post content (markdown)
export const blogContents: Record<string, Record<string, string>> = {
  en: {
    'what-is-time-boxing': `
# What is Time-Boxing? The Ultimate Guide to Mastering Your Time

Have you ever ended a workday feeling like you accomplished nothing despite being busy all day? You're not alone. In our hyper-connected world, distractions are everywhere, and staying focused on meaningful work is harder than ever.

Enter **time-boxing** — a simple yet powerful technique that has transformed how the world's most productive people manage their time.

## Understanding Time-Boxing

Time-boxing is a time management method where you allocate a fixed time period, called a "time box," to a planned activity. Instead of working on a task until it's complete, you work on it only for the designated time period.

### How It Works

1. **Choose a task** you want to work on
2. **Set a specific time limit** (e.g., 30 minutes, 1 hour, 2 hours)
3. **Work exclusively on that task** during the time box
4. **Stop when the time is up**, regardless of completion
5. **Assess your progress** and plan the next steps

## The Science Behind Time-Boxing

Time-boxing works because it leverages several psychological principles:

### Parkinson's Law

"Work expands to fill the time available for its completion." By setting strict time limits, you force yourself to focus on what truly matters and eliminate perfectionism.

### The Zeigarnik Effect

Uncompleted tasks create mental tension that keeps them in our active memory. Time-boxing helps you make progress on multiple fronts, reducing this cognitive load.

### Flow State Activation

Knowing you have limited time creates a healthy sense of urgency that can help you enter a flow state more quickly.

## Benefits of Time-Boxing

### 1. Increased Productivity

By limiting the time available for tasks, you naturally become more focused and efficient. Studies show that time constraints can increase productivity by up to 30%.

### 2. Better Work-Life Balance

When you know exactly when your work ends, you can fully disconnect and enjoy your personal time without guilt.

### 3. Reduced Procrastination

Starting a 30-minute task feels much less daunting than starting an undefined project. Time-boxing lowers the barrier to getting started.

## How to Start Time-Boxing Today

### Step 1: List Your Tasks

Write down everything you need to accomplish. Don't filter or prioritize yet—just get it all out.

### Step 2: Estimate Time Needed

For each task, estimate how much focused time it requires. Be realistic but slightly aggressive.

### Step 3: Assign Time Boxes

Distribute your tasks into your available time slots. Consider your energy levels throughout the day.

### Step 4: Execute and Adjust

Work through your time boxes one at a time. If a task isn't finished, schedule another time box for it.

## Time-Boxing with Chrobox

Chrobox makes time-boxing intuitive and enjoyable. With features like:

- **Smart Planning Flow** — 6-step guided workflow
- **Visual Timeline** — See your entire day at a glance
- **AI-Powered Insights** — Get personalized recommendations
- **Daily Retrospective** — Track your mood and productivity

Start your journey to better time management today with a 3-day free trial.

## Conclusion

Time-boxing is more than just a productivity hack—it's a philosophy of intentional living. By consciously deciding how to spend your time, you take control of your day and, ultimately, your life.

The best time to start time-boxing is now. Set a 30-minute time box and begin your first task. You might be surprised at how much you can accomplish.
    `,
    '5-time-boxing-strategies': `
# 5 Time-Boxing Strategies Used by Top CEOs and Entrepreneurs

Ever wondered how the world's most successful people manage to accomplish so much? While they have the same 24 hours as everyone else, their approach to time management sets them apart.

Many top executives rely on time-boxing as their secret weapon. Let's explore five proven strategies they use.

## Strategy 1: The 5-Minute Rule (Elon Musk's Approach)

Elon Musk, CEO of Tesla and SpaceX, famously divides his day into 5-minute blocks. While this might seem extreme, the principle is powerful.

### How to Apply It

- **Break large tasks into 5-minute increments** for estimation
- **Schedule meetings in 5-minute blocks** rather than defaulting to 30 or 60 minutes
- **Use micro time-boxes for quick decisions**

## Strategy 2: The Two-List System (Warren Buffett's Method)

Warren Buffett's approach focuses on ruthless prioritization before time-boxing.

### The Process

1. **Write down your top 25 goals or tasks**
2. **Circle the top 5 most important**
3. **Time-box ONLY the top 5**
4. **Actively avoid the other 20** — they're distractions in disguise

## Strategy 3: Theme Days (Jack Dorsey's System)

When Jack Dorsey was running both Twitter and Square simultaneously, he used themed days to manage his time.

| Day | Theme |
|-----|-------|
| Monday | Management & Operations |
| Tuesday | Product Development |
| Wednesday | Marketing & Growth |
| Thursday | Partnerships & Business Development |
| Friday | Company Culture & Hiring |

## Strategy 4: The 90-Minute Focus Block

Research shows that the human brain can maintain peak focus for about 90 minutes before needing rest.

### Implementation

1. **Schedule 90-minute focus blocks** for your most important work
2. **Take a 20-30 minute break** between blocks
3. **Limit to 4-5 focus blocks per day**

## Strategy 5: The Maker's Schedule (Paul Graham's Philosophy)

Paul Graham distinguishes between two types of schedules:

### Manager's Schedule
- Day divided into one-hour slots
- Meetings scattered throughout

### Maker's Schedule
- Day divided into half-day blocks
- Long, uninterrupted periods for creative work

## Implementing These Strategies with Chrobox

Chrobox is designed to support all these time-boxing strategies:

- **Flexible time-box durations** — From 5 minutes to full days
- **Priority-first planning** — Built-in prioritization workflow
- **Theme support** — Tag and categorize your time boxes
- **Focus mode** — Distraction-free execution

## Conclusion

The strategies used by top performers aren't magic—they're proven systems that anyone can adopt. Start with one approach, practice it consistently, and watch your productivity soar.
    `,
    'time-boxing-vs-pomodoro': `
# Time-Boxing vs Pomodoro: Which Technique is Right for You?

If you've explored productivity techniques, you've likely encountered both time-boxing and the Pomodoro Technique. While they share similarities, they serve different purposes and suit different work styles.

## Understanding the Techniques

### What is the Pomodoro Technique?

The Pomodoro Technique uses a timer to break work into 25-minute intervals called "pomodoros," separated by short breaks.

**Standard Pomodoro Structure:**
- 25 minutes of focused work
- 5-minute short break
- After 4 pomodoros, take a 15-30 minute long break

### What is Time-Boxing?

Time-boxing allocates a fixed time period to a planned activity. Unlike Pomodoro's rigid structure, time-boxing is flexible—you set the duration based on the task at hand.

## Key Differences

| Aspect | Pomodoro | Time-Boxing |
|--------|----------|-------------|
| **Duration** | Fixed 25 minutes | Variable (you decide) |
| **Break Structure** | Mandatory, scheduled | Flexible |
| **Best For** | Sustained focus | Complex projects |
| **Flexibility** | Low | High |

## When to Use Pomodoro

1. **Fighting Procrastination** — Committing to just 25 minutes feels manageable
2. **Repetitive Tasks** — Data entry, email processing
3. **When You're New to Time Management** — Rigid structure builds habits

## When to Use Time-Boxing

1. **Deep Work Sessions** — Creative tasks, coding, writing
2. **Project Planning** — Estimate and allocate time across tasks
3. **Variable Task Types** — Different tasks need different amounts of time

## Combining Both Techniques

### Hybrid Approach: Pomodoros Within Time-Boxes

Set a 2-hour time-box for a project, then use Pomodoro intervals within it:
- 25 min work → 5 min break → 25 min work → 5 min break → 25 min work

## How Chrobox Supports Both Methods

**For Pomodoro Users:**
- Set 25-minute default time boxes
- Automatic break reminders

**For Time-Boxing Users:**
- Custom duration for each task
- Visual timeline view

## Conclusion

There's no universally "better" technique—only what works better for you. Experiment and settle on what feels sustainable and productive.
    `,
  },
  ko: {
    'what-is-time-boxing': `
# 타임박싱이란? 시간을 마스터하는 완벽 가이드

하루 종일 바빴는데도 퇴근할 때 아무것도 이루지 못한 느낌이 든 적 있으신가요? 당신만 그런 것이 아닙니다.

**타임박싱**을 소개합니다 — 세계에서 가장 생산적인 사람들의 시간 관리 방식을 바꾼 간단하지만 강력한 기법입니다.

## 타임박싱 이해하기

타임박싱은 계획된 활동에 "타임박스"라고 불리는 고정된 시간을 할당하는 시간 관리 방법입니다.

### 작동 방식

1. 작업할 **태스크 선택**
2. **구체적인 시간 제한 설정** (예: 30분, 1시간)
3. 타임박스 동안 **해당 작업에만 집중**
4. 완료 여부와 관계없이 **시간이 되면 중단**
5. **진행 상황 평가** 및 다음 단계 계획

## 타임박싱의 과학적 원리

### 파킨슨의 법칙

"일은 주어진 시간을 다 채울 때까지 늘어난다."

### 몰입 상태 활성화

시간이 제한되어 있다는 것을 알면 건강한 긴박감이 생겨 더 빨리 몰입 상태에 들어갈 수 있습니다.

## 타임박싱의 장점

1. **생산성 향상** — 시간 제약은 생산성을 최대 30%까지 높일 수 있습니다
2. **더 나은 워라밸** — 일이 언제 끝나는지 정확히 알 수 있습니다
3. **미루기 감소** — 30분짜리 작업은 시작하기 훨씬 덜 부담스럽습니다

## Chrobox로 타임박싱하기

Chrobox는 타임박싱을 직관적이고 즐겁게 만듭니다:

- **스마트 플래닝 플로우** — 6단계 가이드 워크플로우
- **비주얼 타임라인** — 하루 전체를 한눈에
- **AI 기반 인사이트** — 맞춤형 추천

오늘 3일 무료 체험으로 더 나은 시간 관리 여정을 시작하세요.
    `,
    '5-time-boxing-strategies': `
# 세계적인 CEO들이 사용하는 5가지 타임박싱 전략

세계에서 가장 성공한 사람들이 어떻게 그렇게 많은 것을 성취하는지 궁금하신 적 있으신가요?

## 전략 1: 5분 규칙 (일론 머스크의 접근법)

테슬라와 스페이스X의 CEO 일론 머스크는 하루를 5분 단위로 나누는 것으로 유명합니다.

- **큰 작업을 5분 단위로 나누어** 추정하기
- 기본 30분이나 60분 대신 **5분 단위로 회의 예약**

## 전략 2: 두 개의 리스트 시스템 (워렌 버핏)

1. **상위 25개 목표나 작업을 적으세요**
2. **가장 중요한 5개에 동그라미 치세요**
3. **상위 5개만 타임박싱하세요**

## 전략 3: 테마 데이 (잭 도시)

| 요일 | 테마 |
|------|------|
| 월요일 | 관리 & 운영 |
| 화요일 | 제품 개발 |
| 수요일 | 마케팅 & 성장 |

## 전략 4: 90분 집중 블록

연구에 따르면 인간의 뇌는 약 90분 동안 최고 집중을 유지할 수 있습니다.

## 전략 5: 메이커의 스케줄 (폴 그레이엄)

- **오전**: 딥워크를 위한 메이커 시간
- **오후**: 회의와 커뮤니케이션을 위한 매니저 시간

## Chrobox로 전략 구현하기

Chrobox는 이러한 모든 타임박싱 전략을 지원합니다.
    `,
    'time-boxing-vs-pomodoro': `
# 타임박싱 vs 뽀모도로: 어떤 기법이 나에게 맞을까?

생산성 기법을 탐색해 보셨다면 타임박싱과 뽀모도로 기법을 모두 접하셨을 것입니다.

## 기법 이해하기

### 뽀모도로 기법

- 25분 집중 작업
- 5분 짧은 휴식
- 4개의 뽀모도로 후 긴 휴식

### 타임박싱

- 가변 기간 (30분에서 3시간 이상)
- 작업별 시간 할당
- 유연한 휴식 스케줄링

## 주요 차이점

| 측면 | 뽀모도로 | 타임박싱 |
|------|----------|----------|
| **기간** | 고정 25분 | 가변 |
| **유연성** | 낮음 | 높음 |

## 두 기법 결합하기

2시간 타임박스를 설정한 다음 그 안에서 뽀모도로 사용:
- 25분 작업 → 5분 휴식 → 25분 작업 → 5분 휴식

## Chrobox로 두 방법 모두 지원

선호하는 기법과 함께 작동하도록 설계되었습니다.
    `,
  },
};

export const getBlogContent = (slug: string, lang: 'en' | 'ko'): string => {
  return blogContents[lang]?.[slug] || '';
};
