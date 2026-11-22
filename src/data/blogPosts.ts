import type { BlogPostMeta } from '../types/blog';
import { localizedPath, type ContentLanguage } from '../lib/seo';
import { LOCALIZED_CONTENT } from './localized';
import { DATA_SECTIONS, DATA_SECTION_SOURCE } from './dataSections';
import { enBatch1, koBatch1, contentBatch1 } from './blogBatch1';
import { enBatch2, koBatch2, contentBatch2 } from './blogBatch2';
import { enBatch3, koBatch3, contentBatch3 } from './blogBatch3';
import { enBatch4, koBatch4, contentBatch4 } from './blogBatch4';
import { enBatch5, koBatch5, contentBatch5 } from './blogBatch5';
import { enBatch6, koBatch6, contentBatch6 } from './blogBatch6';
import { enBatch7, koBatch7, contentBatch7 } from './blogBatch7';
import { enBatch8, koBatch8, contentBatch8 } from './blogBatch8';
import { enBatch9, koBatch9, contentBatch9 } from './blogBatch9';
import { enDaily, koDaily, contentDaily, DAILY_SLUGS } from './blogDaily';
import {
  getClusterBySlug,
  clusterCategoryName,
} from '../lib/blogTaxonomy';

// English blog posts
export const enBlogPosts: BlogPostMeta[] = [
  {
    slug: 'what-is-time-boxing',
    title: "What Is Timeboxing? Definition, Example Day and How to Start",
    date: '2024-12-01',
    updated: '2026-11-13',
    author: 'Chrobox Team',
    category: "Productivity",
    tags: ["time-boxing", "productivity", "time-management", "focus"],
    excerpt: "Timeboxing means giving a task a fixed start time and length on your calendar and stopping when the box ends. An example day, the evidence, and how to start.",
    image: "/screenshots/en/1.webp",
    readTime: 7,
    lang: 'en',
    faqs: [
      {
        question: "What is timeboxing in simple terms?",
        questionKo: "타임박싱을 쉽게 말하면 무엇인가요?",
        answer: "Timeboxing means giving a task a fixed time slot, with a start time and an end time, and stopping when the slot ends. Instead of working on something until it feels finished, you decide in advance how much time it gets and when.",
        answerKo: "할 일마다 시작 시각과 끝 시각이 있는 시간 칸을 정하고, 그 칸이 끝나면 멈추는 방법입니다. 다 끝났다고 느낄 때까지 붙잡는 대신, 언제 얼마나 쓸지를 미리 정해 둡니다.",
      },
      {
        question: "What is the difference between timeboxing and time blocking?",
        questionKo: "타임박싱과 타임블로킹은 어떻게 다른가요?",
        answer: "Time blocking reserves time on your calendar for a kind of work, such as writing every morning. Timeboxing sets a start and a hard end for one specific task. Many people use both: blocks shape the day, and boxes limit each task inside them.",
        answerKo: "타임블로킹은 매일 아침 글쓰기처럼 어떤 종류의 일에 달력의 시간대를 잡아 두는 것이고, 타임박싱은 할 일 하나에 시작과 끝을 정하고 끝나면 멈추는 것입니다. 구역으로 하루의 틀을 잡고 그 안의 일마다 박스로 한도를 두면 둘을 함께 쓸 수 있습니다.",
      },
      {
        question: "How long should a time box be?",
        questionKo: "타임박스는 몇 분으로 잡는 게 좋나요?",
        answer: "Start with 60 minutes for focused work and 15 to 30 minutes for email and admin. In Chrobox data the median box was 60 minutes, and completion rates were close to each other for boxes between 15 and 90 minutes, so pick a length you can protect rather than a perfect number.",
        answerKo: "집중하는 일은 60분, 메일과 잡무는 15~30분으로 시작해 보세요. 크로박스 자료에서 박스 길이 중앙값은 60분이었고, 15분부터 90분까지는 길이가 달라도 완료율이 서로 비슷했습니다. 완벽한 길이보다 지킬 수 있는 길이를 고르는 게 낫습니다.",
      },
    ],
  },
  {
    slug: '5-time-boxing-strategies',
    title: "5 Timeboxing Strategies, With Data From 5,077 Real Tasks",
    date: '2024-12-03',
    updated: '2026-11-22',
    author: 'Chrobox Team',
    category: "Productivity",
    tags: ["time-boxing", "productivity-tips", "ceo", "entrepreneur", "time-management"],
    excerpt: "Five timeboxing strategies worth starting with: a start time for every must-do, priority first, 60-minute boxes, meetings apart from focus work, and a buffer.",
    image: "/screenshots/en/2.webp",
    readTime: 7,
    lang: 'en',
    faqs: [
      {
        question: "What is the best timeboxing strategy to start with?",
        questionKo: "타임박싱은 어떤 전략부터 시작하는 게 좋나요?",
        answer: "Start by giving every must-do task a start time. In Chrobox data, tasks with a time slot were completed 48.1% of the time, against 17.6% for tasks left on a list. Once that is a habit, add the other strategies one at a time.",
        answerKo: "꼭 할 일마다 시작 시각을 주는 것부터 시작하세요. 크로박스 데이터에서 시간 칸이 있는 할 일은 48.1%가 완료됐고, 목록에만 있던 할 일은 17.6%였습니다. 이것이 습관이 되면 나머지 전략을 하나씩 더하면 됩니다.",
      },
      {
        question: "Should focused work and meetings go on the same day?",
        questionKo: "집중하는 일과 회의를 같은 날에 잡아도 되나요?",
        answer: "They can, but keep them apart within the day. In his 2009 essay \"Maker's Schedule, Manager's Schedule\", Paul Graham argued that a single meeting can break an afternoon into pieces too small for hard work, so stack meetings together and protect a half-day block for focused work.",
        answerKo: "같은 날이어도 괜찮지만, 하루 안에서는 떼어 놓으세요. 폴 그레이엄은 2009년 글 「메이커의 일정, 매니저의 일정」에서 회의 하나가 오후를 어려운 일을 하기엔 너무 짧은 조각으로 쪼갤 수 있다고 썼습니다. 회의는 몰아서 잡고, 집중하는 일에는 반나절을 지켜 주세요.",
      },
      {
        question: "How many time boxes should I plan per day?",
        questionKo: "하루에 타임박스를 몇 개나 계획해야 하나요?",
        answer: "Start with about five tasks plus one empty buffer box. The median planned day in Chrobox data had 5 tasks. Plan fewer on days with many meetings, and adjust after a week.",
        answerKo: "할 일 다섯 개 정도와 비워 둔 여유 칸 하나로 시작하세요. 크로박스 데이터에서 계획한 하루의 할 일 수 중앙값은 5개였습니다. 회의가 많은 날은 더 줄이고, 일주일 써 본 뒤 조정하세요.",
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
    excerpt: 'A comprehensive comparison of time-boxing and the Pomodoro Technique. Discover which method suits your work style and how to get the most from each.',
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
  ...enBatch1, ...enBatch2, ...enBatch3, ...enBatch4, ...enBatch5, ...enBatch6, ...enBatch7, ...enBatch8, ...enBatch9,
  ...enDaily,
];

// Korean blog posts
export const koBlogPosts: BlogPostMeta[] = [
  {
    slug: 'what-is-time-boxing',
    title: "타임박싱이란? 뜻과 하루 예시, 오늘 시작하는 법",
    date: '2024-12-01',
    updated: '2026-11-13',
    author: 'Chrobox Team',
    category: "생산성",
    tags: ["타임박싱", "생산성", "시간관리", "집중력"],
    excerpt: "타임박싱은 할 일마다 시작 시각과 길이를 정해 달력에 넣고, 칸이 끝나면 멈추는 시간 관리법입니다. 하루 예시 표, 비슷한 방법과의 차이, 할 일 5,077개 자료로 정리했습니다.",
    image: "/screenshots/ko/1.webp",
    readTime: 7,
    lang: 'ko',
    faqs: [
      {
        question: "What is timeboxing in simple terms?",
        questionKo: "타임박싱을 쉽게 말하면 무엇인가요?",
        answer: "Timeboxing means giving a task a fixed time slot, with a start time and an end time, and stopping when the slot ends. Instead of working on something until it feels finished, you decide in advance how much time it gets and when.",
        answerKo: "할 일마다 시작 시각과 끝 시각이 있는 시간 칸을 정하고, 그 칸이 끝나면 멈추는 방법입니다. 다 끝났다고 느낄 때까지 붙잡는 대신, 언제 얼마나 쓸지를 미리 정해 둡니다.",
      },
      {
        question: "What is the difference between timeboxing and time blocking?",
        questionKo: "타임박싱과 타임블로킹은 어떻게 다른가요?",
        answer: "Time blocking reserves time on your calendar for a kind of work, such as writing every morning. Timeboxing sets a start and a hard end for one specific task. Many people use both: blocks shape the day, and boxes limit each task inside them.",
        answerKo: "타임블로킹은 매일 아침 글쓰기처럼 어떤 종류의 일에 달력의 시간대를 잡아 두는 것이고, 타임박싱은 할 일 하나에 시작과 끝을 정하고 끝나면 멈추는 것입니다. 구역으로 하루의 틀을 잡고 그 안의 일마다 박스로 한도를 두면 둘을 함께 쓸 수 있습니다.",
      },
      {
        question: "How long should a time box be?",
        questionKo: "타임박스는 몇 분으로 잡는 게 좋나요?",
        answer: "Start with 60 minutes for focused work and 15 to 30 minutes for email and admin. In Chrobox data the median box was 60 minutes, and completion rates were close to each other for boxes between 15 and 90 minutes, so pick a length you can protect rather than a perfect number.",
        answerKo: "집중하는 일은 60분, 메일과 잡무는 15~30분으로 시작해 보세요. 크로박스 자료에서 박스 길이 중앙값은 60분이었고, 15분부터 90분까지는 길이가 달라도 완료율이 서로 비슷했습니다. 완벽한 길이보다 지킬 수 있는 길이를 고르는 게 낫습니다.",
      },
    ],
  },
  {
    slug: '5-time-boxing-strategies',
    title: "타임박싱 전략 5가지: 할 일 5,077개 데이터로 고른 방법",
    date: '2024-12-03',
    updated: '2026-11-22',
    author: 'Chrobox Team',
    category: "생산성",
    tags: ["타임박싱", "생산성팁", "CEO", "기업가", "시간관리"],
    excerpt: "먼저 써 볼 만한 타임박싱 전략 5가지: 꼭 할 일마다 시작 시각, 우선순위는 아침 첫 칸, 칸은 60분 기본, 회의와 집중 시간 분리, 하루 할 일 다섯 개와 여유 칸 하나.",
    image: "/screenshots/ko/2.webp",
    readTime: 7,
    lang: 'ko',
    faqs: [
      {
        question: "What is the best timeboxing strategy to start with?",
        questionKo: "타임박싱은 어떤 전략부터 시작하는 게 좋나요?",
        answer: "Start by giving every must-do task a start time. In Chrobox data, tasks with a time slot were completed 48.1% of the time, against 17.6% for tasks left on a list. Once that is a habit, add the other strategies one at a time.",
        answerKo: "꼭 할 일마다 시작 시각을 주는 것부터 시작하세요. 크로박스 데이터에서 시간 칸이 있는 할 일은 48.1%가 완료됐고, 목록에만 있던 할 일은 17.6%였습니다. 이것이 습관이 되면 나머지 전략을 하나씩 더하면 됩니다.",
      },
      {
        question: "Should focused work and meetings go on the same day?",
        questionKo: "집중하는 일과 회의를 같은 날에 잡아도 되나요?",
        answer: "They can, but keep them apart within the day. In his 2009 essay \"Maker's Schedule, Manager's Schedule\", Paul Graham argued that a single meeting can break an afternoon into pieces too small for hard work, so stack meetings together and protect a half-day block for focused work.",
        answerKo: "같은 날이어도 괜찮지만, 하루 안에서는 떼어 놓으세요. 폴 그레이엄은 2009년 글 「메이커의 일정, 매니저의 일정」에서 회의 하나가 오후를 어려운 일을 하기엔 너무 짧은 조각으로 쪼갤 수 있다고 썼습니다. 회의는 몰아서 잡고, 집중하는 일에는 반나절을 지켜 주세요.",
      },
      {
        question: "How many time boxes should I plan per day?",
        questionKo: "하루에 타임박스를 몇 개나 계획해야 하나요?",
        answer: "Start with about five tasks plus one empty buffer box. The median planned day in Chrobox data had 5 tasks. Plan fewer on days with many meetings, and adjust after a week.",
        answerKo: "할 일 다섯 개 정도와 비워 둔 여유 칸 하나로 시작하세요. 크로박스 데이터에서 계획한 하루의 할 일 수 중앙값은 5개였습니다. 회의가 많은 날은 더 줄이고, 일주일 써 본 뒤 조정하세요.",
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
  ...koBatch1, ...koBatch2, ...koBatch3, ...koBatch4, ...koBatch5, ...koBatch6, ...koBatch7, ...koBatch8, ...koBatch9,
  ...koDaily,
];

function enrichWithCluster(post: BlogPostMeta): BlogPostMeta {
  const cluster = getClusterBySlug(post.slug);
  if (!cluster) {
    return post;
  }
  return {
    ...post,
    category: clusterCategoryName(post.slug, post.lang),
    clusterId: cluster.id,
    clusterSlug: cluster.slug,
    hubSlug: cluster.hubSlug,
    isHub: cluster.hubSlug === post.slug,
  };
}

/**
 * Korean posts reuse the English FAQ objects, which carry the Korean copy in
 * `questionKo`/`answerKo`. Resolving those into the primary fields here means
 * consumers read one shape for every locale.
 */
function resolveKoreanFaqs(post: BlogPostMeta): BlogPostMeta {
  if (!post.faqs?.length) return post;

  return {
    ...post,
    faqs: post.faqs.map((faq) => ({
      ...faq,
      question: faq.questionKo || faq.question,
      answer: faq.answerKo || faq.answer,
    })),
  };
}

const enBlogPostsEnriched = enBlogPosts.map(enrichWithCluster);
const koBlogPostsEnriched = koBlogPosts.map((post) => resolveKoreanFaqs(enrichWithCluster(post)));

const localizedBlogPostsCache = new Map<ContentLanguage, BlogPostMeta[]>();

export const getBlogPosts = (lang: ContentLanguage): BlogPostMeta[] => {
  if (lang === 'en') return enBlogPostsEnriched;
  if (lang === 'ko') return koBlogPostsEnriched;

  const cached = localizedBlogPostsCache.get(lang);
  if (cached) return cached;

  const pack = LOCALIZED_CONTENT[lang];
  // Daily posts exist only in the language they were written in (see blogDaily.ts).
  const sourcePosts = enBlogPostsEnriched.filter((post) => !DAILY_SLUGS.has(post.slug) || pack?.blogContents[post.slug]);
  const posts = !pack
    ? sourcePosts
    : sourcePosts.map((post) => {
      const copy = pack.blogPosts[post.slug];
      if (!copy) return post;

      return {
        ...post,
        updated: [post.updated, post.localesUpdated].filter(Boolean).sort().pop(),
        title: copy.title,
        excerpt: copy.excerpt,
        faqs: post.faqs?.map((faq, index) => (copy.faqs?.[index]
          ? { ...faq, question: copy.faqs[index].question, answer: copy.faqs[index].answer }
          : faq)),
      };
    });

  localizedBlogPostsCache.set(lang, posts);
  return posts;
};

// Blog index order: newest first, so each day's post sits at the top of /blog.
export const getBlogPostsNewestFirst = (lang: ContentLanguage): BlogPostMeta[] =>
  [...getBlogPosts(lang)].sort((a, b) => b.date.localeCompare(a.date));

export const getBlogPost = (slug: string, lang: ContentLanguage): BlogPostMeta | undefined => {
  return getBlogPosts(lang).find((post) => post.slug === slug);
};

export const getBlogPostsByCluster = (clusterSlug: string, lang: ContentLanguage): BlogPostMeta[] => {
  return getBlogPosts(lang).filter((post) => post.clusterSlug === clusterSlug);
};

// Content batches come in two shapes: lang-first ({en: {slug: body}}) and
// slug-first ({slug: {en: body}}). Both satisfy Record<string, Record<string, string>>,
// so spreading `.en` on a slug-first batch silently drops every post in it —
// normalize to lang-first before merging.
const asLangFirst = (
  batch: Record<string, Record<string, string>>,
): { en: Record<string, string>; ko: Record<string, string> } => {
  if (batch.en || batch.ko) {
    return { en: batch.en ?? {}, ko: batch.ko ?? {} };
  }
  const en: Record<string, string> = {};
  const ko: Record<string, string> = {};
  for (const [slug, byLang] of Object.entries(batch)) {
    if (byLang.en) en[slug] = byLang.en;
    if (byLang.ko) ko[slug] = byLang.ko;
  }
  return { en, ko };
};

const normalizedBatches = [
  contentBatch1, contentBatch2, contentBatch3, contentBatch4,
  contentBatch5, contentBatch6, contentBatch7, contentBatch8, contentBatch9, contentDaily,
].map(asLangFirst);

// Blog post content (markdown)
export const blogContents: Record<string, Record<string, string>> = {
  en: {
    ...Object.assign({}, ...normalizedBatches.map((batch) => batch.en)),
    'what-is-time-boxing': `
# What Is Timeboxing? Definition, Example Day and How to Start

**Timeboxing is a time management method in which you give a task a fixed slot on your calendar, with a start time and a length, and stop when the slot ends, whether or not the task is finished.** A to-do list tells you what to do. A timebox also tells you when and for how long. In a 2018 Harvard Business Review article, Marc Zao-Sanders described timeboxing as moving your to-do list into your calendar and reported that, in a survey of 100 productivity hacks, it was ranked the most useful. Below are an example day, how timeboxing differs from similar methods, what the evidence says, and how to start tomorrow.

## Timeboxing in one rule and one example day

The whole method fits in one rule: **every task you intend to do today gets a place on the clock.** Here is what a timeboxed workday can look like:

| Time | Box | Length |
|---|---|---|
| 08:30–08:45 | Plan the day | 15 min |
| 08:45–09:45 | Write the project proposal (priority) | 60 min |
| 09:45–10:00 | Break | 15 min |
| 10:00–11:00 | Review the budget sheet | 60 min |
| 11:00–11:30 | Email and messages | 30 min |
| 11:30–12:30 | Team meeting | 60 min |
| 12:30–13:30 | Lunch | 60 min |
| 13:30–14:30 | Revise and send the proposal | 60 min |
| 14:30–15:00 | Admin and small tasks | 30 min |
| 15:00–16:00 | Buffer for anything that ran over | 60 min |
| 16:00–16:30 | Email and tomorrow's plan | 30 min |

Three details matter more than the exact times. The most important task gets the first long box of the day. Email has two fixed boxes instead of leaking into every hour. And one hour stays empty on purpose, so a task that runs over does not push the rest of the day later.

## Timeboxing vs a to-do list, time blocking and Pomodoro

| | To-do list | Time blocking | Timeboxing | Pomodoro Technique |
|---|---|---|---|---|
| What you decide | What to do | When to do a kind of work | When and how long for one task | Work in 25-minute intervals with short breaks |
| Unit | Task | Calendar block, such as "writing" | One task with a start and an end | Interval |
| When the time is up | Nothing happens | The block is often extended or moved | You stop and decide what comes next | Short break, then the next interval |
| Most useful for | Capturing everything | Shaping the week | Finishing specific tasks | Getting started on a hard task |

People often use "time blocking" and "timeboxing" as synonyms, and the two work well together: blocks shape the day, and a box puts a limit on each task inside a block. [Time blocking vs time boxing](/blog/time-blocking-vs-time-boxing) covers the difference in detail, and [timeboxing vs Pomodoro](/blog/time-boxing-vs-pomodoro) explains when fixed intervals help more than task-sized boxes.

## Why timeboxing works

Two kinds of evidence point the same way.

**Deciding in advance when you will act.** Psychologists call a plan that names when and where you will do something an implementation intention. A meta-analysis by Gollwitzer and Sheeran (2006) of 94 independent tests found a medium-to-large effect on goal attainment (d = .65). A larger meta-analysis by Sheeran, Listrom and Gollwitzer (2025), covering 642 tests, found effects between d = .27 and d = .66, with larger effects when plans took an if-then form, when people were highly motivated, and when they rehearsed the plan. A timebox is an implementation intention for a single task: "at 08:45, I write the proposal."

**What happens to timeboxed tasks in practice.** We build a timeboxing app, so we can look at what people actually finish. Chrobox usage data covering 5,077 tasks planned by 250 people between December 2025 and September 2026 shows:

| Finding | Result |
|---|---|
| Tasks with a start time and length vs tasks left on the list | 48.1% vs 17.6% completed |
| Same person, both ways (41 people) | 35 finished more of their timeboxed tasks |
| Boxes starting 05:00–08:59 vs 21:00–23:59 | 62.3% vs 33.2% completed |
| Tasks marked as a priority vs unmarked | 44.5% vs 28.9% completed |
| Median box length | 60 minutes |
| Median tasks planned per day | 5 |

This is observational data, not an experiment. People may give time slots to the tasks they already meant to do, and a slot also works as a reminder. The same-person comparison makes the pattern harder to explain away, but it is still an association, not proof of cause. [Does timeboxing work?](/blog/does-timeboxing-work) has the full method, every exclusion, and the results that look less good.

## How long should a time box be?

There is no single right length. The median box in Chrobox data was 60 minutes, partly because a task dropped onto the timeline starts as a one-hour box, and completion rates were close to each other for boxes from 15 to 90 minutes. A length you can protect matters more than a perfect number. These are reasonable starting points:

| Kind of work | Starting length |
|---|---|
| Email, admin, small tasks | 15–30 minutes |
| Focused work such as writing, analysis or study | 60 minutes |
| Hard creative or technical work | 90 minutes, with a break after |
| Meetings and classes | Whatever the event takes |

## How to start timeboxing tomorrow

1. **Pick three tasks** you want done tomorrow and mark one as the priority.
2. **Estimate each one** in minutes and round up. First estimates are usually short.
3. **Put fixed events on the day first:** meetings, classes, travel.
4. **Place the priority in the first long gap,** ideally in the morning.
5. **Leave one empty buffer box** in the afternoon.
6. **When a box ends, stop and decide:** done, a new box later, or good enough.

Expect boxes to run over in the first week. That is useful: after a few days you know how long your tasks really take, and your estimates get better. To lay out a full day on a grid, see [how to time block your day](/blog/how-to-time-block-your-day). To plan a whole week, the [weekly planning guide](/blog/weekly-planning-guide) walks through it.

## When the box ends and the task is not done

Stop anyway. Write one line about where you are, then choose one of three options: give the task a new box later today, move it to tomorrow, or decide the current version is good enough. Stopping feels wrong the first few times, but it is what keeps one task from taking over the whole day, and it is how you learn your real task lengths.

## Common timeboxing mistakes

- **Boxing every minute.** A day with no empty box falls apart at the first overrun.
- **Boxes too big to finish.** "Thesis, 3 hours" is a block, not a box. Name the result instead: "draft section 2".
- **Leaving the hard task for last.** In the Chrobox data, boxes that started before 09:00 were completed far more often than late-evening boxes.
- **Never looking back.** A two-minute check at the end of the day shows which boxes slipped and why.

## Timeboxing in Chrobox

Chrobox is a timeboxing app for iPhone and Android. You add a task with a start time and a length, it appears on the day's timeline, and an alert tells you when the box begins. The focus timer counts down the length of the current box once, and a short reflection at the end of the day records what moved. Tasks, priorities, the timeline, the focus timer, alerts, routines and daily reflections are free; blocking distracting apps during a box, home and lock screen widgets, AI planning and detailed statistics are part of Pro.
    `,
    '5-time-boxing-strategies': `
# 5 Timeboxing Strategies, With Data From 5,077 Real Tasks

**Five timeboxing strategies are worth starting with: give every must-do task a start time, put your top priority in an early box, default to 60-minute boxes, keep focused work apart from meetings, and plan about five tasks a day with one empty box for overruns.** Each strategy below is backed either by Chrobox usage data (5,077 planned tasks from 250 people, December 2025 to September 2026) or by a source you can read yourself. Famous stories about how a particular CEO splits the day are left out on purpose: most are retold second-hand and are hard to check.

| # | Strategy | What to do | Basis |
|---|---|---|---|
| 1 | Give every must-do a start time | Move tasks from the list onto the clock | Time-boxed tasks were completed 48.1% of the time, list-only tasks 17.6% |
| 2 | Priority first, early | Give the one task that matters most the first box of the morning | Boxes starting 05:00–08:59 were completed 62.3% of the time, boxes starting 21:00–23:59 33.2% |
| 3 | Default to 60 minutes | Start every box at an hour and split longer work | The median box was 60 minutes |
| 4 | Keep focused work apart from meetings | Protect a half-day block and stack meetings together | Paul Graham, "Maker's Schedule, Manager's Schedule" (2009) |
| 5 | Plan about five tasks, plus a buffer | Leave one box empty for whatever runs over | The median planned day had 5 tasks |

## 1. Give every must-do task a start time

A to-do list tells you what to do. A time box also tells you when and for how long, and that turns out to matter more than any clever system on top. In Chrobox data, tasks that had both a start time and a length on the day timeline were checked off 48.1% of the time. Tasks that stayed on the list without a slot were checked off 17.6% of the time.

The gap is not just a few very organized people pulling up the average. Among the 41 people who planned enough tasks both ways to compare, 35 finished more of their time-boxed tasks than their unscheduled ones. This is observational data, not an experiment: people may give a time to tasks they already intend to do, and a slot also works as a reminder. The practical rule still follows. If a task has to happen today, it needs a time today. If it does not fit anywhere on the clock, it was never going to happen today, and it is better to move it now than at 22:00.

## 2. Put your top priority in the first box of the morning

Two numbers point the same way. Tasks marked as a priority were completed 44.5% of the time, against 28.9% for everything else. And boxes that started between 05:00 and 08:59 were completed 62.3% of the time, while boxes that started between 21:00 and 23:59 were completed 33.2% of the time.

Part of the morning effect is who plans early: someone who schedules a 06:30 task may simply be more consistent. The advice is the same either way. **Pick one priority the night before and give it the first long box of your working day**, before email, chat or meetings can claim that time. If your day starts at 10:00, the first box is at 10:00; the point is first, not early for its own sake.

## 3. Default to 60-minute boxes

The median time box in Chrobox was 60 minutes. Part of that is the app itself, because a task dropped onto an hour on the timeline starts as a 60-minute box and many people keep it. Still, an hour is a sensible default: long enough to get properly started on real work, short enough that you can protect it from interruptions.

Use shorter boxes of 15 to 30 minutes for email, messages and small admin tasks, and group them so they do not leak into every hour. When a task needs more than about 90 minutes, split it into two boxes with a short break between them instead of booking one long block. Our [completion data report](/blog/does-timeboxing-work) has the full breakdown of how box length related to completion.

## 4. Keep focused work and meetings apart

In a July 2009 essay, "Maker's Schedule, Manager's Schedule", Paul Graham described two ways of using time. On the manager's schedule, the day is cut into one-hour intervals and you change what you are doing every hour. People who make things, such as programmers and writers, generally prefer to use time in units of half a day at least. On that schedule, he wrote, a single meeting can blow a whole afternoon by breaking it into two pieces, each too small to do anything hard in. His own fix was office hours: he clustered meetings with founders at the end of his working day, so they never interrupted it.

Timeboxing makes this easy to apply. Fill one half of the day with focus boxes and put the meetings you control next to each other in the other half. Here is what that can look like:

| Time | Box | Mode |
|---|---|---|
| 08:30–08:45 | Plan the day | Manager |
| 08:45–09:45 | Priority: write the investor update | Maker |
| 09:45–10:00 | Break | Rest |
| 10:00–11:00 | Draft the product spec | Maker |
| 11:00–12:00 | Finish the product spec | Maker |
| 12:00–13:00 | Lunch | Rest |
| 13:00–15:00 | Meetings, back to back | Manager |
| 15:00–15:30 | Email and messages | Manager |
| 15:30–16:30 | Buffer for anything that ran over | Buffer |
| 16:30–17:00 | Review today and plan tomorrow | Manager |

The morning holds three focus boxes in a row with only a short break, and the afternoon absorbs every meeting. For more layouts by role, see the [executive schedule template](/templates/executive).

## 5. Plan about five tasks, and leave one box empty

The median planned day in Chrobox had 5 tasks. That is not a magic number, it is what people actually planned, but it is a useful starting point. A day with fifteen boxes looks productive at 08:00 and feels like failure at 18:00. Start with about five tasks, plan fewer on days with many meetings, and adjust after a week.

**Keep one box empty on purpose.** Something will run over, and a buffer hour stops one late task from pushing the rest of the day later. If you do not need the buffer, pull the next task forward or finish early. To spread bigger projects across several days, see our [weekly planning guide](/blog/weekly-planning-guide).

## How to start tomorrow

1. Tonight, write down tomorrow's must-do tasks and mark one as the priority.
2. Give the priority the first long box of your working day.
3. Put every other must-do task on the clock, 60 minutes by default.
4. Move the meetings you control next to each other.
5. Leave one box empty, and end the day by planning the next one.

## Using these strategies in Chrobox

Chrobox is a timeboxing app for iPhone and Android. You add tasks, mark priorities and drag each task onto the day timeline, where it becomes a box with a start time and a length. When a box starts, you get a notification, and you can start a focus timer that defaults to the length of the box. All of this is free. Blocking distracting apps during a box is part of Chrobox Pro.
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
    ...Object.assign({}, ...normalizedBatches.map((batch) => batch.ko)),
    'what-is-time-boxing': `
# 타임박싱이란? 뜻과 하루 예시, 오늘 시작하는 법

**타임박싱은 할 일마다 시작 시각과 길이를 정해 달력에 칸을 잡고, 그 칸이 끝나면 일이 끝났든 아니든 멈추는 시간 관리법입니다.** 할 일 목록은 무엇을 할지만 알려 줍니다. 타임박스는 언제, 얼마나 할지까지 정해 줍니다. 마크 자오샌더스는 2018년 하버드 비즈니스 리뷰 기고에서 타임박싱을 '할 일 목록을 달력으로 옮기는 것'이라고 설명하고, 생산성 요령 100가지를 조사했을 때 타임박싱이 가장 쓸모 있는 것으로 꼽혔다고 전했습니다. 아래에 하루 예시, 비슷한 방법과의 차이, 근거, 내일부터 시작하는 순서를 정리했습니다.

## 규칙 하나와 하루 예시

방법 전체가 규칙 하나에 들어갑니다. **오늘 하려는 일은 모두 시계 위에 자리가 있어야 합니다.** 타임박싱으로 짠 평일 하루는 이런 모습입니다.

| 시간 | 박스 | 길이 |
|---|---|---|
| 08:30–08:45 | 하루 계획 | 15분 |
| 08:45–09:45 | 사업 제안서 쓰기(우선순위) | 60분 |
| 09:45–10:00 | 쉬기 | 15분 |
| 10:00–11:00 | 예산표 검토 | 60분 |
| 11:00–11:30 | 메일·메신저 | 30분 |
| 11:30–12:30 | 팀 회의 | 60분 |
| 12:30–13:30 | 점심 | 60분 |
| 13:30–14:30 | 제안서 고쳐서 보내기 | 60분 |
| 14:30–15:00 | 잡무·작은 일 | 30분 |
| 15:00–16:00 | 밀린 일 받는 빈 칸 | 60분 |
| 16:00–16:30 | 메일·내일 계획 | 30분 |

정확한 시각보다 세 가지가 더 중요합니다. 가장 중요한 일이 하루의 첫 긴 칸을 차지합니다. 메일은 하루 내내 새어 들어오지 않도록 정해진 칸 두 개에서만 봅니다. 그리고 한 시간은 일부러 비워 둡니다. 한 일이 길어져도 나머지 하루가 줄줄이 밀리지 않게 하려는 것입니다.

## 할 일 목록, 타임블로킹, 뽀모도로와 무엇이 다른가

| | 할 일 목록 | 타임블로킹 | 타임박싱 | 뽀모도로 기법 |
|---|---|---|---|---|
| 정하는 것 | 무엇을 할지 | 어떤 종류의 일을 언제 할지 | 한 가지 일을 언제, 얼마나 할지 | 25분 일하고 짧게 쉬기를 되풀이 |
| 단위 | 할 일 | '글쓰기' 같은 달력 구역 | 시작과 끝이 있는 할 일 하나 | 25분 한 번 |
| 시간이 다 되면 | 아무 일도 없음 | 구역을 늘리거나 옮기기 쉬움 | 멈추고 다음을 정함 | 짧게 쉬고 다음 25분 |
| 잘 맞는 곳 | 해야 할 일 모으기 | 한 주의 틀 잡기 | 정한 일을 끝내기 | 어려운 일에 손대기 |

타임블로킹과 타임박싱은 같은 말처럼 쓰일 때가 많고, 함께 쓰면 잘 맞습니다. 구역으로 하루의 틀을 잡고, 그 안의 일마다 박스로 한도를 둡니다. 차이는 [타임블로킹 vs 타임박싱](/ko/blog/time-blocking-vs-time-boxing)에, 정해진 25분 간격이 더 나은 경우는 [타임박싱 vs 뽀모도로](/ko/blog/time-boxing-vs-pomodoro)에 자세히 있습니다.

## 타임박싱이 효과가 있는 이유

두 갈래 근거가 같은 쪽을 가리킵니다.

**언제 할지 미리 정하기.** 심리학에서는 무엇을 언제, 어디서 할지 정해 두는 계획을 실행 의도라고 부릅니다. 골위처와 쉬런(2006)이 독립 검사 94건을 모은 메타분석에서 실행 의도는 목표 달성에 중간~큰 효과(d = .65)를 보였습니다. 쉬런·리스트롬·골위처(2025)가 검사 642건으로 더 크게 다시 분석한 결과에서도 효과는 d = .27~.66이었고, '만약 ~이면 ~한다' 형식으로 세운 계획, 동기가 높은 사람, 계획을 되뇐 경우에 효과가 더 컸습니다. 타임박스는 할 일 하나에 대한 실행 의도입니다. '08:45에 제안서를 쓴다'처럼요.

**실제로 박스에 넣은 일은 어떻게 됐나.** 크로박스는 타임박싱 앱이라 사람들이 실제로 무엇을 끝냈는지 볼 수 있습니다. 2025년 12월부터 2026년 9월까지 250명이 계획한 할 일 5,077개를 보면 이렇습니다.

| 본 것 | 결과 |
|---|---|
| 시작 시각과 길이를 정한 할 일 vs 목록에만 둔 할 일 | 완료 48.1% vs 17.6% |
| 같은 사람이 두 방식을 다 쓴 경우(41명) | 35명이 박스에 넣은 일을 더 많이 끝냄 |
| 05:00–08:59에 시작한 박스 vs 21:00–23:59에 시작한 박스 | 완료 62.3% vs 33.2% |
| 우선순위로 표시한 할 일 vs 표시 안 한 할 일 | 완료 44.5% vs 28.9% |
| 박스 길이 중앙값 | 60분 |
| 하루에 계획한 할 일 수 중앙값 | 5개 |

이 자료는 실험이 아니라 관찰 자료입니다. 사람들이 원래 할 생각이던 일에 시간을 잡았을 수도 있고, 시간을 잡으면 그 자체가 알림 역할도 합니다. 같은 사람끼리 비교한 결과가 우연으로 보기 어렵게 만들어 주지만, 여전히 인과가 아니라 관련성입니다. 방법과 제외 기준, 좋지 않게 나온 결과까지 [타임박싱은 효과가 있을까?](/ko/blog/does-timeboxing-work)에 모두 있습니다.

## 타임박스는 몇 분이 좋은가

정답 하나는 없습니다. 크로박스 자료에서 박스 길이 중앙값은 60분이었습니다. 타임라인에 할 일을 놓으면 처음에 한 시간짜리 박스로 잡히는 영향도 있습니다. 15분부터 90분까지는 길이가 달라도 완료율이 서로 비슷했습니다. 완벽한 길이보다 지킬 수 있는 길이가 중요합니다. 처음에는 이 정도로 시작해 보세요.

| 일의 종류 | 처음 잡을 길이 |
|---|---|
| 메일, 잡무, 작은 일 | 15~30분 |
| 글쓰기, 분석, 공부처럼 집중하는 일 | 60분 |
| 어려운 창작·기술 작업 | 90분, 끝나고 쉬기 |
| 회의, 수업 | 일정이 정한 만큼 |

## 내일부터 타임박싱 시작하기

1. **내일 끝내고 싶은 일 세 가지**를 고르고, 하나를 우선순위로 표시합니다.
2. **각각 몇 분 걸릴지** 적고 넉넉하게 올려 잡습니다. 처음 어림은 대개 짧습니다.
3. **회의, 수업, 이동처럼 정해진 일정**을 먼저 하루에 넣습니다.
4. **우선순위 일을 첫 번째 긴 빈 시간**에 넣습니다. 되도록 오전이 좋습니다.
5. **오후에 빈 칸 하나**를 남겨 둡니다.
6. **박스가 끝나면 멈추고 정합니다.** 끝냄, 나중에 새 박스, 이 정도면 충분함 셋 중 하나입니다.

첫 주에는 박스가 넘치는 게 보통입니다. 오히려 도움이 됩니다. 며칠 지나면 내 일이 실제로 얼마나 걸리는지 알게 되고 어림이 정확해집니다. 하루를 30분 칸으로 나눠 짜는 법은 [30분 단위 하루 계획표](/ko/blog/daily-plan-template-30-minute)에, 한 주 전체를 짜는 법은 [주간 계획 가이드](/ko/blog/weekly-planning-guide)에 있습니다.

## 박스가 끝났는데 일이 덜 끝났다면

그래도 멈춥니다. 어디까지 했는지 한 줄 적고 셋 중 하나를 고릅니다. 오늘 뒤쪽에 새 박스를 잡거나, 내일로 옮기거나, 지금 상태로 충분하다고 정합니다. 처음 몇 번은 멈추는 게 어색하지만, 그래야 일 하나가 하루 전체를 먹어 버리지 않고, 내 일의 실제 길이도 알 수 있습니다.

## 타임박싱에서 자주 하는 실수

- **1분도 남기지 않고 박스로 채우기.** 빈 칸이 없는 하루는 처음 넘친 일 하나에 무너집니다.
- **끝낼 수 없을 만큼 큰 박스.** '논문, 3시간'은 박스가 아니라 구역입니다. '2장 초안 쓰기'처럼 결과로 적습니다.
- **어려운 일을 맨 뒤로 미루기.** 크로박스 자료에서 09시 전에 시작한 박스는 늦은 밤 박스보다 훨씬 자주 끝났습니다.
- **돌아보지 않기.** 하루 끝에 2분만 보면 어떤 박스가 왜 밀렸는지 보입니다.

## 크로박스로 타임박싱하기

크로박스는 아이폰과 안드로이드용 타임박싱 앱입니다. 할 일에 시작 시각과 길이를 넣으면 그날 타임라인에 박스로 놓이고, 박스가 시작될 때 알림이 옵니다. 집중 타이머는 지금 박스의 길이만큼 한 번 카운트다운하고, 하루 끝 회고에 무엇이 밀렸는지 짧게 남길 수 있습니다. 할 일, 우선순위, 타임라인, 집중 타이머, 알림, 루틴, 하루 회고는 무료이고, 박스 동안 방해되는 앱 차단, 홈·잠금 화면 위젯, AI 계획, 상세 통계는 Pro 기능입니다.
    `,
    '5-time-boxing-strategies': `
# 타임박싱 전략 5가지: 할 일 5,077개 데이터로 고른 방법

**먼저 써 볼 만한 타임박싱 전략은 다섯 가지입니다. 꼭 할 일에는 모두 시작 시각을 주고, 가장 중요한 일은 이른 칸에 넣고, 칸은 60분을 기본으로 잡고, 집중하는 일과 회의를 떼어 놓고, 하루에 할 일 다섯 개 정도와 넘친 일을 받을 빈 칸 하나를 계획하는 것입니다.** 아래 전략은 모두 크로박스 사용 데이터(250명이 계획한 할 일 5,077개, 2025년 12월~2026년 9월)나 직접 읽어 볼 수 있는 출처에 기대고 있습니다. 어느 유명 CEO가 하루를 어떻게 쪼갠다는 이야기는 일부러 뺐습니다. 대부분 건너 건너 전해진 것이라 확인하기 어렵기 때문입니다.

| # | 전략 | 할 일 | 근거 |
|---|---|---|---|
| 1 | 꼭 할 일에 시작 시각 주기 | 목록에 있는 할 일을 시간 위로 옮긴다 | 시간을 정한 할 일 완료율 48.1%, 목록에만 있던 할 일 17.6% |
| 2 | 우선순위는 이른 첫 칸에 | 가장 중요한 일 하나에 아침 첫 칸을 준다 | 05:00–08:59에 시작한 칸 완료율 62.3%, 21:00–23:59에 시작한 칸 33.2% |
| 3 | 칸 길이는 60분이 기본 | 칸은 한 시간으로 시작하고 긴 일은 나눈다 | 칸 길이 중앙값 60분 |
| 4 | 집중하는 일과 회의 떼어 놓기 | 반나절을 지키고 회의는 몰아서 잡는다 | 폴 그레이엄, 「메이커의 일정, 매니저의 일정」(2009) |
| 5 | 할 일 다섯 개 정도와 빈 칸 하나 | 넘친 일을 받을 칸 하나를 비워 둔다 | 계획한 하루의 할 일 수 중앙값 5개 |

## 1. 꼭 할 일에는 모두 시작 시각을 준다

할 일 목록은 무엇을 할지만 알려 줍니다. 타임박스는 언제, 얼마 동안 할지까지 정해 줍니다. 그 위에 어떤 요령을 얹느냐보다 이 차이가 더 큽니다. 크로박스 데이터에서 하루 타임라인에 시작 시각과 길이가 모두 정해진 할 일은 48.1%가 완료 표시됐습니다. 시간 칸 없이 목록에만 있던 할 일은 17.6%였습니다.

아주 꼼꼼한 몇 사람이 평균을 끌어올린 결과도 아닙니다. 두 방식을 비교할 수 있을 만큼 할 일을 계획한 41명 가운데 35명이 시간을 정하지 않은 할 일보다 시간을 정한 할 일을 더 많이 끝냈습니다. 다만 실험이 아니라 관찰한 데이터입니다. 어차피 할 생각인 일에 시간을 주는 사람이 많을 수 있고, 시간 칸 자체가 알림 역할도 합니다. 그래도 실천할 규칙은 분명합니다. 오늘 꼭 해야 하는 일이라면 오늘의 시각이 있어야 합니다. 시간표 어디에도 들어가지 않는 일은 처음부터 오늘 할 수 없던 일이니, 밤 22:00에 미루기보다 지금 다른 날로 옮기는 편이 낫습니다.

## 2. 가장 중요한 일은 아침 첫 칸에 넣는다

두 숫자가 같은 쪽을 가리킵니다. 우선순위로 표시한 할 일은 44.5%가 완료됐고, 나머지는 28.9%였습니다. 그리고 05:00에서 08:59 사이에 시작한 칸은 62.3%가 완료됐지만, 21:00에서 23:59 사이에 시작한 칸은 33.2%였습니다.

아침 칸이 잘 지켜지는 데에는 일찍 계획하는 사람의 성향도 섞여 있습니다. 06:30에 할 일을 잡는 사람이 원래 더 꾸준할 수 있습니다. 그래도 조언은 같습니다. **전날 밤 우선순위 하나를 고르고, 일하는 하루의 첫 긴 칸을 그 일에 주세요.** 메일, 메신저, 회의가 그 시간을 가져가기 전에 말입니다. 하루가 10:00에 시작한다면 첫 칸은 10:00입니다. 이른 시각보다 첫 칸이라는 순서가 중요합니다.

## 3. 칸 길이는 60분을 기본으로 한다

크로박스에서 칸 길이 중앙값은 60분이었습니다. 앱 설계의 영향도 있습니다. 할 일을 타임라인의 한 시간 칸에 끌어다 놓으면 60분짜리 칸으로 시작하고, 많은 사람이 그대로 둡니다. 그래도 한 시간은 좋은 기본값입니다. 제대로 된 일을 시작하기에 충분히 길고, 방해로부터 지켜 내기에 충분히 짧습니다.

메일, 메시지, 작은 잡무에는 15~30분짜리 짧은 칸을 쓰고, 이것들을 한데 모아 매시간 끼어들지 않게 합니다. 90분 넘게 걸리는 일은 긴 칸 하나로 잡지 말고, 사이에 짧은 휴식을 둔 칸 두 개로 나눕니다. 칸 길이와 완료율의 관계를 자세히 보려면 [완료율 데이터 보고서](/ko/blog/does-timeboxing-work)를 참고하세요.

## 4. 집중하는 일과 회의를 떼어 놓는다

폴 그레이엄은 2009년 7월에 쓴 글 「메이커의 일정, 매니저의 일정(Maker's Schedule, Manager's Schedule)」에서 시간을 쓰는 두 방식을 설명했습니다. 매니저의 일정에서는 하루가 한 시간 단위로 잘리고, 한 시간마다 하는 일이 바뀝니다. 프로그래머나 작가처럼 무언가를 만드는 사람은 보통 적어도 반나절 단위로 시간을 쓰고 싶어 합니다. 그런 일정에서는 회의 하나가 오후 전체를 날려 버릴 수 있다고 그는 썼습니다. 오후를 둘로 쪼개 어느 쪽도 어려운 일을 하기에 너무 짧아지기 때문입니다. 그가 찾은 해결책은 면담 시간이었습니다. 창업자들과의 만남을 일과가 끝날 무렵에 몰아서 잡아, 일하는 시간을 끊지 않게 했습니다.

타임박싱을 쓰면 이 방법을 그대로 적용하기 쉽습니다. 하루의 절반은 집중 칸으로 채우고, 내가 정할 수 있는 회의는 나머지 절반에 붙여서 잡습니다. 예를 들면 이렇습니다.

| 시각 | 칸 | 성격 |
|---|---|---|
| 08:30–08:45 | 하루 계획 | 매니저 |
| 08:45–09:45 | 우선순위: 투자자 업데이트 쓰기 | 메이커 |
| 09:45–10:00 | 휴식 | 쉼 |
| 10:00–11:00 | 제품 기획서 초안 | 메이커 |
| 11:00–12:00 | 제품 기획서 마무리 | 메이커 |
| 12:00–13:00 | 점심 | 쉼 |
| 13:00–15:00 | 회의 연달아 | 매니저 |
| 15:00–15:30 | 메일과 메시지 | 매니저 |
| 15:30–16:30 | 넘친 일을 받는 여유 칸 | 여유 |
| 16:30–17:00 | 오늘 돌아보기와 내일 계획 | 매니저 |

오전에는 짧은 휴식만 사이에 둔 집중 칸 세 개가 이어지고, 오후가 회의를 모두 받아 냅니다. 직무별 하루 배치를 더 보려면 [임원 일정 템플릿](/ko/templates/executive)을 참고하세요.

## 5. 할 일은 다섯 개 정도, 칸 하나는 비워 둔다

크로박스에서 계획한 하루의 할 일 수 중앙값은 5개였습니다. 마법의 숫자는 아니고 사람들이 실제로 계획한 양이지만, 출발점으로 쓰기 좋습니다. 칸이 열다섯 개인 하루는 아침 08:00에는 알차 보여도 저녁 18:00에는 실패처럼 느껴집니다. 할 일 다섯 개 정도로 시작하고, 회의가 많은 날은 더 줄이고, 일주일 써 본 뒤에 조정하세요.

**칸 하나는 일부러 비워 둡니다.** 무언가는 꼭 길어지기 마련이고, 여유 칸 한 시간이 있으면 늦어진 일 하나가 나머지 하루를 통째로 밀어내지 않습니다. 여유 칸이 필요 없으면 다음 일을 당겨 오거나 일찍 마치면 됩니다. 큰 프로젝트를 며칠에 나눠 배치하는 방법은 [주간 계획 가이드](/ko/blog/weekly-planning-guide)에 정리해 두었습니다.

## 내일 바로 시작하는 법

1. 오늘 밤, 내일 꼭 할 일을 적고 그중 하나를 우선순위로 표시합니다.
2. 우선순위에는 일하는 하루의 첫 긴 칸을 줍니다.
3. 나머지 꼭 할 일도 모두 시간 위에 놓습니다. 기본은 60분입니다.
4. 내가 정할 수 있는 회의는 서로 붙여서 잡습니다.
5. 칸 하나는 비워 두고, 하루의 끝에는 다음 날을 계획합니다.

## 크로박스로 이 전략 쓰기

크로박스는 아이폰과 안드로이드용 타임박싱 앱입니다. 할 일을 적고 우선순위를 표시한 뒤, 할 일을 하루 타임라인에 끌어다 놓으면 시작 시각과 길이가 있는 칸이 됩니다. 칸이 시작되면 알림이 오고, 칸 길이가 기본값인 집중 타이머를 켤 수 있습니다. 여기까지는 모두 무료입니다. 칸이 진행되는 동안 방해되는 앱을 막는 앱 차단은 크로박스 Pro 기능입니다.
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

// Locales whose blog body is genuinely translated (no English fallback). Keeps the
// on-page hreflang cluster consistent with the sitemap's translation gate.
export const translatedBlogLocales = (slug: string): ContentLanguage[] => {
  const locales: ContentLanguage[] = [];
  if (blogContents.en?.[slug]) locales.push('en');
  if (blogContents.ko?.[slug]) locales.push('ko');
  for (const [lang, pack] of Object.entries(LOCALIZED_CONTENT)) {
    if (pack?.blogContents[slug]) locales.push(lang as ContentLanguage);
  }
  return locales;
};

// The article page renders the post title as its only h1, so a body that opens
// with its own `# Title` line would put a second h1 on the page.
const withoutLeadingTitle = (markdown: string) => markdown.replace(/^\s*#[ \t]+[^\n]*\n+/, '');

// Puts a guide's first-party data section ahead of its Chrobox section, so the
// evidence comes before the tool; guides without one get it before their last section.
const withDataSection = (markdown: string, slug: string, lang: ContentLanguage, bodyLang: ContentLanguage): string => {
  const section = DATA_SECTIONS[slug]?.[bodyLang] ?? DATA_SECTIONS[slug]?.en;
  if (!section) return markdown;

  const source = getBlogPost(DATA_SECTION_SOURCE, bodyLang);
  const filled = section
    .replace('{dataPostTitle}', source?.title ?? DATA_SECTION_SOURCE)
    .replace('{dataPostPath}', localizedPath(lang, `/blog/${DATA_SECTION_SOURCE}`));
  const headings = [...markdown.matchAll(/^## .*$/gm)];
  const anchor = headings.find((heading) => heading[0].includes('Chrobox')) ?? headings.at(-1);
  if (anchor?.index === undefined) return `${markdown.trimEnd()}\n\n${filled}\n`;

  return `${markdown.slice(0, anchor.index)}${filled}\n\n${markdown.slice(anchor.index)}`;
};

export const getBlogContent = (slug: string, lang: ContentLanguage): string => {
  if (lang !== 'en' && lang !== 'ko') {
    const localized = LOCALIZED_CONTENT[lang]?.blogContents[slug];
    // An untranslated body falls back to English, and so does its data section.
    return withDataSection(withoutLeadingTitle(localized || blogContents.en?.[slug] || ''), slug, lang, localized ? lang : 'en');
  }

  return withDataSection(withoutLeadingTitle(blogContents[lang]?.[slug] || ''), slug, lang, lang);
};
