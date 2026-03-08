import type { BlogPostMeta } from '../types/blog';
import { enBatch1, koBatch1, contentBatch1 } from './blogBatch1';
import { enBatch2, koBatch2, contentBatch2 } from './blogBatch2';
import { enBatch3, koBatch3, contentBatch3 } from './blogBatch3';
import { enBatch4, koBatch4, contentBatch4 } from './blogBatch4';
import { enBatch5, koBatch5, contentBatch5 } from './blogBatch5';

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
    image: '/screenshots/en/1.webp',
    readTime: 8,
    lang: 'en',
    faqs: [
      {
        question: 'What is time-boxing and how does it differ from a to-do list?',
        questionKo: '타임박싱이란 무엇이며 일반 할 일 목록과 어떻게 다른가요?',
        answer: 'Time-boxing assigns a fixed duration to each task before you start, so you work within a defined time limit rather than working until a task is "done." A to-do list tells you what to do; time-boxing tells you when and for how long, which eliminates open-ended work and reduces procrastination.',
        answerKo: '타임박싱은 시작 전에 각 작업에 고정된 시간을 할당하여, 작업이 "완료"될 때까지 작업하는 것이 아니라 정해진 시간 내에서 작업합니다. 할 일 목록은 무엇을 해야 하는지 알려주고, 타임박싱은 언제, 얼마나 오래 해야 하는지 알려줘 끝없이 이어지는 작업을 없애고 미루기를 줄입니다.',
      },
      {
        question: 'How long should a time box be?',
        questionKo: '타임박스는 얼마나 길어야 하나요?',
        answer: 'There is no single correct length. Most people find 25–90 minutes effective for focused work. Shorter boxes (15–30 min) work well for administrative tasks, while longer boxes (60–90 min) suit deep creative or analytical work. Start with 30-minute boxes and adjust based on your concentration span.',
        answerKo: '정해진 정답은 없습니다. 대부분의 사람들은 집중 작업에 25~90분이 효과적임을 발견합니다. 짧은 박스(15~30분)는 행정 업무에 잘 맞고, 긴 박스(60~90분)는 심층적인 창의적 또는 분석적 작업에 적합합니다. 30분 박스로 시작하고 집중 가능한 시간에 따라 조정하세요.',
      },
      {
        question: 'What should I do if a task is not finished when the time box ends?',
        questionKo: '타임박스가 끝날 때 작업이 완료되지 않으면 어떻게 해야 하나요?',
        answer: 'Stop working, record where you are, and schedule a new time box for the remaining work. This practice trains you to estimate task durations accurately over time and prevents one task from consuming your entire day.',
        answerKo: '작업을 중단하고 현재 상태를 기록한 다음 남은 작업을 위한 새 타임박스를 예약하세요. 이 방식은 시간이 지남에 따라 작업 기간을 정확하게 추정하는 능력을 키우고 한 작업이 하루 전체를 차지하는 것을 방지합니다.',
      },
    ],
  },
  {
    slug: '5-time-boxing-strategies',
    title: '5 Time-Boxing Strategies Used by Top CEOs and Entrepreneurs',
    date: '2024-12-03',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['time-boxing', 'ceo', 'entrepreneur', 'productivity-tips', 'success'],
    excerpt: 'Learn the exact time-boxing strategies that Elon Musk, Bill Gates, and other successful leaders use to maximize their productivity and achieve extraordinary results.',
    image: '/screenshots/en/2.webp',
    readTime: 6,
    lang: 'en',
    faqs: [
      {
        question: 'Does Elon Musk really schedule his day in 5-minute blocks?',
        questionKo: '일론 머스크는 정말 하루를 5분 단위로 예약하나요?',
        answer: 'Yes. Musk has publicly discussed scheduling meetings and tasks in 5-minute slots to maximize density and minimize wasted time. While this granularity works for him, most people benefit from slightly longer blocks (15–30 minutes) adapted to their own rhythm.',
        answerKo: '네. 머스크는 밀도를 극대화하고 낭비되는 시간을 최소화하기 위해 5분 단위로 회의와 업무를 예약한다고 공개적으로 이야기한 바 있습니다. 이 세밀한 방식이 그에게는 효과적이지만, 대부분의 사람들은 자신의 리듬에 맞게 조금 더 긴 블록(15~30분)을 사용하는 것이 좋습니다.',
      },
      {
        question: 'Can I combine theme days with time-boxing?',
        questionKo: '테마 데이와 타임박싱을 결합할 수 있나요?',
        answer: 'Absolutely. Assigning themes to each day (e.g., Monday for planning, Tuesday for deep work) limits context-switching at the macro level, while time-boxing within each day handles micro-level focus. The combination is one of the most effective productivity systems available.',
        answerKo: '물론입니다. 각 요일에 테마를 할당하면(예: 월요일은 계획, 화요일은 딥워크) 거시적 수준에서 컨텍스트 전환을 줄이고, 하루 내 타임박싱이 미시적 수준의 집중을 처리합니다. 이 조합은 가장 효과적인 생산성 시스템 중 하나입니다.',
      },
      {
        question: 'How many focus blocks should I schedule per day?',
        questionKo: '하루에 몇 개의 집중 블록을 예약해야 하나요?',
        answer: 'Research on cognitive performance suggests 3–5 deep-work blocks of 60–90 minutes per day is a sustainable ceiling for most people. Beyond that, decision fatigue and diminishing returns set in. Schedule your most demanding tasks in the first two blocks when mental energy is highest.',
        answerKo: '인지 수행에 관한 연구에 따르면 대부분의 사람들에게 하루 60~90분짜리 딥워크 블록 3~5개가 지속 가능한 상한선입니다. 그 이상이 되면 의사결정 피로와 수확 체감이 발생합니다. 정신 에너지가 가장 높은 처음 두 블록에 가장 요구하는 작업을 예약하세요.',
      },
    ],
  },
  {
    slug: 'time-boxing-vs-pomodoro',
    title: 'Time-Boxing vs Pomodoro: Which Technique is Right for You?',
    date: '2024-12-05',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['time-boxing', 'pomodoro', 'comparison', 'productivity', 'focus'],
    excerpt: 'A comprehensive comparison of time-boxing and the Pomodoro Technique. Discover which productivity method suits your work style and how to get the most from each approach.',
    image: '/screenshots/en/3.webp',
    readTime: 7,
    lang: 'en',
    faqs: [
      {
        question: 'Is the Pomodoro Technique the same as time-boxing?',
        questionKo: '뽀모도로 기법은 타임박싱과 같은 건가요?',
        answer: 'No. The Pomodoro Technique is a specific implementation of time-boxing with fixed 25-minute intervals and mandatory breaks. Time-boxing is the broader concept of allocating a fixed time to a task — the duration and break structure are entirely up to you, making it more flexible for complex or variable workloads.',
        answerKo: '아닙니다. 뽀모도로 기법은 고정된 25분 간격과 의무적인 휴식이 있는 타임박싱의 특정 구현 방식입니다. 타임박싱은 작업에 고정된 시간을 할당하는 더 넓은 개념으로, 시간과 휴식 구조는 전적으로 본인이 결정하므로 복잡하거나 가변적인 업무에 더 유연합니다.',
      },
      {
        question: 'Which technique is better for creative work?',
        questionKo: '창의적인 작업에는 어떤 기법이 더 좋은가요?',
        answer: 'Time-boxing generally suits creative work better because creative tasks rarely conform to a rigid 25-minute structure. A 60–90 minute time box gives you enough runway to reach a flow state without interruption, while still imposing a boundary that prevents open-ended sessions.',
        answerKo: '타임박싱은 창의적 작업이 고정된 25분 구조를 따르는 경우가 드물기 때문에 일반적으로 창의적 작업에 더 적합합니다. 60~90분 타임박스는 방해 없이 몰입 상태에 도달하기에 충분한 여유를 제공하면서도 끝없이 이어지는 세션을 방지하는 경계를 부여합니다.',
      },
      {
        question: 'Can I use both techniques together?',
        questionKo: '두 기법을 함께 사용할 수 있나요?',
        answer: 'Yes, and many professionals do. A common hybrid approach is to set a 2-hour time box for a project and use Pomodoro intervals (25 min work + 5 min break) within that block. The outer time box maintains schedule integrity while Pomodoros manage momentum and prevent mental fatigue.',
        answerKo: '네, 많은 전문가들이 그렇게 합니다. 일반적인 하이브리드 방식은 프로젝트에 2시간 타임박스를 설정하고 그 블록 내에서 뽀모도로 간격(25분 작업 + 5분 휴식)을 사용하는 것입니다. 외부 타임박스는 일정 무결성을 유지하는 반면 뽀모도로는 추진력을 관리하고 정신적 피로를 방지합니다.',
      },
    ],
  },
  ...enBatch1, ...enBatch2, ...enBatch3, ...enBatch4, ...enBatch5,
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
    image: '/screenshots/ko/1.webp',
    readTime: 8,
    lang: 'ko',
    faqs: [
      {
        question: 'What is time-boxing and how does it differ from a to-do list?',
        questionKo: '타임박싱이란 무엇이며 일반 할 일 목록과 어떻게 다른가요?',
        answer: 'Time-boxing assigns a fixed duration to each task before you start, so you work within a defined time limit rather than working until a task is "done."',
        answerKo: '타임박싱은 시작 전에 각 작업에 고정된 시간을 할당하여, 작업이 "완료"될 때까지 작업하는 것이 아니라 정해진 시간 내에서 작업합니다. 할 일 목록은 무엇을 해야 하는지 알려주고, 타임박싱은 언제, 얼마나 오래 해야 하는지 알려줘 끝없이 이어지는 작업을 없애고 미루기를 줄입니다.',
      },
      {
        question: 'How long should a time box be?',
        questionKo: '타임박스는 얼마나 길어야 하나요?',
        answer: 'Most people find 25–90 minutes effective for focused work.',
        answerKo: '대부분의 사람들은 집중 작업에 25~90분이 효과적임을 발견합니다. 짧은 박스(15~30분)는 행정 업무에 잘 맞고, 긴 박스(60~90분)는 심층적인 창의적 또는 분석적 작업에 적합합니다. 30분 박스로 시작하고 집중 가능한 시간에 따라 조정하세요.',
      },
      {
        question: 'What should I do if a task is not finished when the time box ends?',
        questionKo: '타임박스가 끝날 때 작업이 완료되지 않으면 어떻게 해야 하나요?',
        answer: 'Stop working, record where you are, and schedule a new time box for the remaining work.',
        answerKo: '작업을 중단하고 현재 상태를 기록한 다음 남은 작업을 위한 새 타임박스를 예약하세요. 이 방식은 시간이 지남에 따라 작업 기간을 정확하게 추정하는 능력을 키우고 한 작업이 하루 전체를 차지하는 것을 방지합니다.',
      },
    ],
  },
  {
    slug: '5-time-boxing-strategies',
    title: '세계적인 CEO들이 사용하는 5가지 타임박싱 전략',
    date: '2024-12-03',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['타임박싱', 'CEO', '기업가', '생산성팁', '성공'],
    excerpt: '일론 머스크, 빌 게이츠 등 성공한 리더들이 생산성을 극대화하고 놀라운 성과를 달성하기 위해 사용하는 정확한 타임박싱 전략을 배워보세요.',
    image: '/screenshots/ko/2.webp',
    readTime: 6,
    lang: 'ko',
    faqs: [
      {
        question: 'Does Elon Musk really schedule his day in 5-minute blocks?',
        questionKo: '일론 머스크는 정말 하루를 5분 단위로 예약하나요?',
        answer: 'Yes. Musk has publicly discussed scheduling meetings and tasks in 5-minute slots.',
        answerKo: '네. 머스크는 밀도를 극대화하고 낭비되는 시간을 최소화하기 위해 5분 단위로 회의와 업무를 예약한다고 공개적으로 이야기한 바 있습니다.',
      },
      {
        question: 'Can I combine theme days with time-boxing?',
        questionKo: '테마 데이와 타임박싱을 결합할 수 있나요?',
        answer: 'Absolutely. Theme days reduce context-switching at the macro level, while time-boxing handles micro-level focus.',
        answerKo: '물론입니다. 테마 데이는 거시적 수준에서 컨텍스트 전환을 줄이고, 타임박싱이 미시적 수준의 집중을 처리합니다. 이 조합은 가장 효과적인 생산성 시스템 중 하나입니다.',
      },
      {
        question: 'How many focus blocks should I schedule per day?',
        questionKo: '하루에 몇 개의 집중 블록을 예약해야 하나요?',
        answer: '3–5 deep-work blocks of 60–90 minutes per day is a sustainable ceiling for most people.',
        answerKo: '대부분의 사람들에게 하루 60~90분짜리 딥워크 블록 3~5개가 지속 가능한 상한선입니다. 정신 에너지가 가장 높은 처음 두 블록에 가장 요구하는 작업을 예약하세요.',
      },
    ],
  },
  {
    slug: 'time-boxing-vs-pomodoro',
    title: '타임박싱 vs 뽀모도로: 어떤 기법이 나에게 맞을까?',
    date: '2024-12-05',
    author: 'Chrobox Team',
    category: '생산성',
    tags: ['타임박싱', '뽀모도로', '비교', '생산성', '집중력'],
    excerpt: '타임박싱과 뽀모도로 기법의 종합 비교. 어떤 생산성 방법이 당신의 업무 스타일에 맞는지 알아보고 각 접근법에서 최대 효과를 얻는 방법을 발견하세요.',
    image: '/screenshots/ko/3.webp',
    readTime: 7,
    lang: 'ko',
    faqs: [
      {
        question: 'Is the Pomodoro Technique the same as time-boxing?',
        questionKo: '뽀모도로 기법은 타임박싱과 같은 건가요?',
        answer: 'No. Pomodoro is a specific implementation of time-boxing with fixed 25-minute intervals.',
        answerKo: '아닙니다. 뽀모도로 기법은 고정된 25분 간격과 의무적인 휴식이 있는 타임박싱의 특정 구현 방식입니다. 타임박싱은 더 넓은 개념으로 복잡하거나 가변적인 업무에 더 유연합니다.',
      },
      {
        question: 'Which technique is better for creative work?',
        questionKo: '창의적인 작업에는 어떤 기법이 더 좋은가요?',
        answer: 'Time-boxing generally suits creative work better because creative tasks rarely conform to a rigid 25-minute structure.',
        answerKo: '타임박싱은 창의적 작업이 고정된 25분 구조를 따르는 경우가 드물기 때문에 일반적으로 창의적 작업에 더 적합합니다. 60~90분 타임박스는 방해 없이 몰입 상태에 도달하기에 충분한 여유를 제공합니다.',
      },
      {
        question: 'Can I use both techniques together?',
        questionKo: '두 기법을 함께 사용할 수 있나요?',
        answer: 'Yes. Set a 2-hour time box for a project and use Pomodoro intervals within that block.',
        answerKo: '네. 프로젝트에 2시간 타임박스를 설정하고 그 블록 내에서 뽀모도로 간격(25분 작업 + 5분 휴식)을 사용하는 것이 일반적인 하이브리드 방식입니다.',
      },
    ],
  },
  ...koBatch1, ...koBatch2, ...koBatch3, ...koBatch4, ...koBatch5,
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
    ...contentBatch1.en, ...contentBatch2.en, ...contentBatch3.en, ...contentBatch4.en, ...contentBatch5.en,
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
    ...contentBatch1.ko, ...contentBatch2.ko, ...contentBatch3.ko, ...contentBatch4.ko, ...contentBatch5.ko,
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
