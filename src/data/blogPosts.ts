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
    title: '5 Time-Boxing Strategies Used by Top CEOs and Entrepreneurs',
    date: '2024-12-03',
    author: 'Chrobox Team',
    category: 'Productivity',
    tags: ['time-boxing', 'ceo', 'entrepreneur', 'productivity-tips', 'success'],
    excerpt: 'Learn the exact time-boxing strategies Elon Musk, Bill Gates, and other top leaders use to maximize productivity and achieve extraordinary results.',
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
