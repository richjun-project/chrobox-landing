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
    title: "Timeboxing vs Pomodoro: Key Differences and When to Use Each",
    date: '2024-12-05',
    updated: '2026-11-23',
    author: 'Chrobox Team',
    category: "Productivity",
    tags: ["time-boxing", "pomodoro", "comparison", "productivity", "focus"],
    excerpt: "Pomodoro times one 25-minute focus stretch; timeboxing gives each task a start time and a length. When to use each, how to combine them, and real task data.",
    image: "/screenshots/en/3.webp",
    readTime: 7,
    lang: 'en',
    faqs: [
      {
        question: "Is the Pomodoro Technique a form of timeboxing?",
        questionKo: "뽀모도로 기법도 타임박싱의 한 종류인가요?",
        answer: "Both put a time limit on work, but on different things. A Pomodoro limits one stretch of focus on one activity, usually 25 minutes, followed by a break. Timeboxing gives each task a start time and a length on your day. Many people use Pomodoro intervals inside a longer time box.",
        answerKo: "둘 다 일에 시간 한도를 두지만 대상이 다릅니다. 뽀모도로는 한 가지 활동에 집중하는 한 번의 시간을 보통 25분으로 정하고 그 뒤에 쉽니다. 타임박싱은 할 일마다 하루 안에서 시작 시각과 길이를 줍니다. 긴 타임박스 안에서 뽀모도로 간격으로 일하는 사람도 많습니다.",
      },
      {
        question: "Are 25-minute sessions easier to finish than longer ones?",
        questionKo: "25분짜리가 더 긴 시간보다 끝내기 쉬운가요?",
        answer: "Not in Chrobox data. Boxes of 16–30 minutes and boxes of 46–60 minutes were both completed 48.7% of the time. Completion only fell for boxes longer than 90 minutes, to 45.0% for 91–120 minutes and 44.0% beyond that.",
        answerKo: "크로박스 데이터에서는 아니었습니다. 16–30분 칸과 46–60분 칸 모두 48.7%가 완료됐습니다. 완료율은 90분보다 긴 칸에서만 낮아져, 91–120분은 45.0%, 그보다 긴 칸은 44.0%였습니다.",
      },
      {
        question: "Does Chrobox have a Pomodoro timer?",
        questionKo: "크로박스에 뽀모도로 타이머가 있나요?",
        answer: "Chrobox has a focus timer that counts down once. Started from a task, it defaults to the length of the box, and the Focus tab has 25-, 50- and 90-minute timers. It does not repeat work and break intervals automatically, so you start it again after a break.",
        answerKo: "크로박스에는 한 번 카운트다운하는 집중 타이머가 있습니다. 할 일에서 켜면 칸 길이가 기본이고, 집중 탭에는 25분·50분·90분 타이머가 있습니다. 집중과 휴식을 자동으로 반복하지는 않으니, 쉬고 나서 다시 켜면 됩니다.",
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
    title: "타임박싱 vs 뽀모도로: 차이점과 언제 무엇을 쓸지",
    date: '2024-12-05',
    updated: '2026-11-23',
    author: 'Chrobox Team',
    category: "생산성",
    tags: ["타임박싱", "뽀모도로", "비교", "생산성", "집중력"],
    excerpt: "뽀모도로는 25분 집중 한 번에, 타임박싱은 할 일마다 시작 시각과 길이를 줍니다. 언제 무엇이 맞는지, 함께 쓰는 법, 할 일 5,077개의 칸 길이별 완료율까지 정리했습니다.",
    image: "/screenshots/ko/3.webp",
    readTime: 7,
    lang: 'ko',
    faqs: [
      {
        question: "Is the Pomodoro Technique a form of timeboxing?",
        questionKo: "뽀모도로 기법도 타임박싱의 한 종류인가요?",
        answer: "Both put a time limit on work, but on different things. A Pomodoro limits one stretch of focus on one activity, usually 25 minutes, followed by a break. Timeboxing gives each task a start time and a length on your day. Many people use Pomodoro intervals inside a longer time box.",
        answerKo: "둘 다 일에 시간 한도를 두지만 대상이 다릅니다. 뽀모도로는 한 가지 활동에 집중하는 한 번의 시간을 보통 25분으로 정하고 그 뒤에 쉽니다. 타임박싱은 할 일마다 하루 안에서 시작 시각과 길이를 줍니다. 긴 타임박스 안에서 뽀모도로 간격으로 일하는 사람도 많습니다.",
      },
      {
        question: "Are 25-minute sessions easier to finish than longer ones?",
        questionKo: "25분짜리가 더 긴 시간보다 끝내기 쉬운가요?",
        answer: "Not in Chrobox data. Boxes of 16–30 minutes and boxes of 46–60 minutes were both completed 48.7% of the time. Completion only fell for boxes longer than 90 minutes, to 45.0% for 91–120 minutes and 44.0% beyond that.",
        answerKo: "크로박스 데이터에서는 아니었습니다. 16–30분 칸과 46–60분 칸 모두 48.7%가 완료됐습니다. 완료율은 90분보다 긴 칸에서만 낮아져, 91–120분은 45.0%, 그보다 긴 칸은 44.0%였습니다.",
      },
      {
        question: "Does Chrobox have a Pomodoro timer?",
        questionKo: "크로박스에 뽀모도로 타이머가 있나요?",
        answer: "Chrobox has a focus timer that counts down once. Started from a task, it defaults to the length of the box, and the Focus tab has 25-, 50- and 90-minute timers. It does not repeat work and break intervals automatically, so you start it again after a break.",
        answerKo: "크로박스에는 한 번 카운트다운하는 집중 타이머가 있습니다. 할 일에서 켜면 칸 길이가 기본이고, 집중 탭에는 25분·50분·90분 타이머가 있습니다. 집중과 휴식을 자동으로 반복하지는 않으니, 쉬고 나서 다시 켜면 됩니다.",
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
# Timeboxing vs Pomodoro: Key Differences and When to Use Each

**The Pomodoro Technique limits one stretch of focused work, usually 25 minutes, followed by a break; timeboxing gives each task its own start time and length on your day. Use Pomodoro when the hard part is starting a task or staying on it, and timeboxing when the hard part is fitting the day's tasks into the hours you have. The two combine well: timebox the day, then work in Pomodoro intervals inside a long box.** This comparison uses the official Pomodoro Technique site and Francesco Cirillo's own writing for what Pomodoro is, and Chrobox usage data (5,077 planned tasks from 250 people, December 2025 to September 2026) for how long people actually make their boxes and how often they finish them.

| | Pomodoro Technique | Timeboxing |
|---|---|---|
| What gets a time limit | One stretch of focus on one activity | Each task on your day |
| Typical length | 25 minutes | Whatever the task needs; the median box in Chrobox was 60 minutes |
| Breaks | A break after every Pomodoro | Planned as their own boxes, or left between boxes |
| Question it answers | How do I keep working on this right now? | When will each of today's tasks happen? |
| Main tool | A timer, plus paper sheets for planning and records | A calendar or a day timeline |

## What the Pomodoro Technique is

Francesco Cirillo began developing the Pomodoro Technique in the 1980s while preparing for a university exam. His first challenge to himself was to concentrate for just two minutes, timed with a tomato-shaped kitchen timer; pomodoro is Italian for tomato. A Pomodoro, as he describes it, is a commitment to work on one activity for a defined period, followed by a break. The familiar length is 25 minutes.

Cirillo also writes that the technique was never meant to be just a way of dividing a day into 25-minute blocks. The official method includes planning your activities, estimating effort, recording what happens, handling interruptions and reviewing your work, with paper tools such as a To Do Today Sheet and a Records Sheet. If you only run a 25-minute timer, you are using the best-known part of the method, not all of it.

## What timeboxing is

A time box is a slot on your day with a start time and a length, given to one task. When the box ends, you stop or make a deliberate decision to continue. The length is chosen for the task: 15 minutes for email, an hour for a report draft, two hours for a workshop. Timeboxing is mainly a planning method. It answers whether the day's tasks fit into the hours you have, before the day starts.

In Chrobox data, 50.8% of boxes were exactly 60 minutes and 14.9% were 30 minutes. Part of that is the app itself, because a task dropped onto an hour on the timeline starts as a 60-minute box and many people keep it. Whether a task had a time slot at all made a much bigger difference than how long the slot was: tasks with a time slot were completed 48.1% of the time, against 17.6% for tasks left on a list.

## Are 25-minute sessions easier to finish?

A common reason to prefer short intervals is that they feel easier to finish. In Chrobox data, short boxes were not finished more often than hour-long ones:

| Box length | Tasks | Completed |
|---|---|---|
| 15 minutes or less | 35 | 48.6% |
| 16–30 minutes | 429 | 48.7% |
| 31–45 minutes | 56 | 53.6% |
| 46–60 minutes | 1,215 | 48.7% |
| 61–90 minutes | 135 | 50.4% |
| 91–120 minutes | 238 | 45.0% |
| More than 120 minutes | 209 | 44.0% |

Up to 90 minutes, length made almost no difference. Boxes longer than 90 minutes were completed less often, at 45.0% and 44.0%. This is observational data, not an experiment, and these are scheduled tasks rather than Pomodoro sessions. It still suggests a practical rule: **choose the length for the task, and split anything longer than 90 minutes into two boxes** instead of shrinking everything to 25 minutes. The full breakdown is in our [timeboxing data report](/blog/does-timeboxing-work).

## When Pomodoro works better

- You keep avoiding a task. Committing to one short interval is easier than committing to the whole job.
- The task has no natural end, such as clearing an inbox, memorizing or practice problems, and you want a rhythm of work and rest.
- You lose track of time and skip breaks during long stretches.
- You want to learn how long your work really takes. Recording the effort each task took gives you numbers for the next estimate.

## When timeboxing works better

- Many tasks compete for one day, and you need to see whether they fit.
- Your day has fixed appointments or meetings, and work has to go around them.
- The task needs a long, unbroken stretch, such as writing or coding. A 60- to 90-minute box keeps that stretch whole; see [scheduling deep work](/blog/deep-work-scheduling).
- You tend to plan more than a day can hold. A timeline makes that visible at 08:00 instead of 18:00.

## How to combine them

Timeboxing decides when a task happens, and Pomodoro decides how you work inside the box. A common way to use both:

1. Put each must-do task on your day as a box, with a start time and a length that fits the task.
2. Keep boxes at 90 minutes or less, and split longer work into two boxes with a break between them.
3. Inside a long box, work in 25-minute intervals with a short break after each one if that helps you keep going.
4. When the box ends, stop, or move the rest of the task to a new box instead of letting it run into the next one.
5. At the end of the day, note which boxes ran over, and adjust the lengths you choose tomorrow.

## Pomodoro and timeboxing in Chrobox

Chrobox is a timeboxing app for iPhone and Android. You drag a task onto the day timeline, where it becomes a box with a start time and a length; boxes can be as short as 5 minutes, so a 25-minute box works too. When a box starts, you get a notification. You can then start a focus timer, which counts down once and defaults to the length of the box. The Focus tab also has 25-, 50- and 90-minute timers that you can start without picking a task. **Chrobox does not run Pomodoro cycles**: it does not repeat work and break intervals or start breaks automatically, so after a break you start the timer again yourself. Planning, notifications and the focus timer are free. Blocking distracting apps while you focus is part of Chrobox Pro; see [how to block distracting apps](/blog/how-to-block-distracting-apps).
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
# 타임박싱 vs 뽀모도로: 차이점과 언제 무엇을 쓸지

**뽀모도로 기법은 한 번 집중하는 시간을 보통 25분으로 정하고 그 뒤에 쉬는 방법이고, 타임박싱은 할 일마다 하루 안에서 시작 시각과 길이를 정해 주는 방법입니다. 일을 시작하거나 붙잡고 있기가 어렵다면 뽀모도로를, 오늘 할 일이 가진 시간 안에 들어가는지가 문제라면 타임박싱을 쓰세요. 둘은 함께 쓰기 좋습니다. 하루는 타임박싱으로 짜고, 긴 칸 안에서는 뽀모도로 간격으로 일하면 됩니다.** 뽀모도로가 무엇인지는 공식 뽀모도로 기법 사이트와 프란체스코 시릴로가 직접 쓴 글을 기준으로 했고, 사람들이 칸을 실제로 몇 분으로 잡고 얼마나 끝내는지는 크로박스 사용 데이터(250명이 계획한 할 일 5,077개, 2025년 12월~2026년 9월)로 봤습니다.

| | 뽀모도로 기법 | 타임박싱 |
|---|---|---|
| 시간을 정하는 대상 | 한 가지 활동에 집중하는 한 번의 시간 | 하루에 놓는 할 일 하나하나 |
| 보통 길이 | 25분 | 할 일에 필요한 만큼. 크로박스의 칸 길이 중앙값은 60분 |
| 휴식 | 뽀모도로 한 번마다 휴식 | 따로 칸으로 잡거나 칸 사이에 둠 |
| 답하는 질문 | 지금 이 일을 어떻게 계속할까? | 오늘 할 일을 각각 언제 할까? |
| 주된 도구 | 타이머, 그리고 계획과 기록을 적는 종이 양식 | 캘린더나 하루 타임라인 |

## 뽀모도로 기법이란

프란체스코 시릴로는 1980년대에 대학 시험을 준비하면서 뽀모도로 기법을 만들기 시작했습니다. 처음 스스로에게 건 도전은 토마토 모양 주방 타이머로 딱 2분 동안 집중하는 것이었습니다. 뽀모도로는 이탈리아어로 토마토라는 뜻입니다. 그의 설명에 따르면 뽀모도로 한 번은 정해진 시간 동안 한 가지 활동에 집중하겠다는 약속이고, 그 뒤에는 휴식이 따릅니다. 흔히 아는 길이는 25분입니다.

시릴로는 이 기법이 하루를 25분 단위로 나누는 방법으로만 만들어진 것이 아니라고도 씁니다. 공식 방법에는 활동 계획, 노력 예상, 일어난 일 기록, 방해 다루기, 작업 돌아보기가 들어 있고, '오늘 할 일' 양식과 기록 양식 같은 종이 도구를 씁니다. 25분 타이머만 돌린다면 이 방법에서 가장 잘 알려진 부분만 쓰는 셈입니다.

## 타임박싱이란

타임박스는 하루 안에서 할 일 하나에 준 시작 시각과 길이가 있는 칸입니다. 칸이 끝나면 멈추거나, 계속할지를 일부러 정합니다. 길이는 할 일에 맞춰 고릅니다. 메일은 15분, 보고서 초안은 한 시간, 워크숍은 두 시간처럼요. 타임박싱은 무엇보다 계획 방법입니다. 오늘 할 일이 가진 시간 안에 들어가는지를 하루가 시작되기 전에 알려 줍니다.

크로박스 데이터에서 칸의 50.8%가 정확히 60분이었고, 14.9%가 30분이었습니다. 앱 설계의 영향도 있습니다. 할 일을 타임라인의 한 시간 칸에 끌어다 놓으면 60분짜리 칸으로 시작하고, 많은 사람이 그대로 둡니다. 칸의 길이보다 시간 칸이 있느냐 없느냐가 훨씬 큰 차이를 보였습니다. 시간 칸이 있는 할 일은 48.1%가 완료됐고, 목록에만 있던 할 일은 17.6%였습니다.

## 25분은 정말 끝내기 쉬울까

짧은 간격을 고르는 흔한 이유는 끝내기 쉽게 느껴진다는 것입니다. 크로박스 데이터에서는 짧은 칸이 한 시간짜리 칸보다 더 자주 끝나지 않았습니다.

| 칸 길이 | 할 일 수 | 완료율 |
|---|---|---|
| 15분 이하 | 35 | 48.6% |
| 16–30분 | 429 | 48.7% |
| 31–45분 | 56 | 53.6% |
| 46–60분 | 1,215 | 48.7% |
| 61–90분 | 135 | 50.4% |
| 91–120분 | 238 | 45.0% |
| 120분 초과 | 209 | 44.0% |

90분까지는 길이에 따른 차이가 거의 없었습니다. 90분보다 긴 칸은 45.0%와 44.0%로 덜 끝났습니다. 실험이 아니라 관찰한 데이터이고, 뽀모도로 세션이 아니라 시간을 정한 할 일입니다. 그래도 실천할 규칙은 나옵니다. **길이는 할 일에 맞춰 고르고, 90분보다 긴 일은 칸 두 개로 나누세요.** 모든 일을 25분으로 줄일 필요는 없습니다. 자세한 내용은 [타임박싱 데이터 보고서](/ko/blog/does-timeboxing-work)에 있습니다.

## 뽀모도로가 더 맞을 때

- 자꾸 미루는 일이 있을 때. 일 전체보다 짧은 한 번에 약속하기가 쉽습니다.
- 메일 정리, 암기, 문제 풀이처럼 끝이 분명하지 않은 일을 일과 휴식의 리듬으로 하고 싶을 때.
- 오래 하다 보면 시간 가는 줄 모르고 쉬는 것을 건너뛸 때.
- 내 일이 실제로 얼마나 걸리는지 알고 싶을 때. 할 일마다 든 노력을 기록해 두면 다음 예상에 쓸 숫자가 생깁니다.

## 타임박싱이 더 맞을 때

- 하루에 여러 할 일이 몰려서, 모두 들어가는지 봐야 할 때.
- 정해진 약속이나 회의가 있어서 일을 그 사이에 넣어야 할 때.
- 글쓰기나 코딩처럼 끊기지 않는 긴 시간이 필요할 때. 60~90분 칸이 그 시간을 통째로 지켜 줍니다. [딥워크 시간 잡는 법](/ko/blog/deep-work-scheduling)을 참고하세요.
- 하루가 감당할 수 있는 것보다 많이 계획하는 편일 때. 타임라인에 놓으면 저녁 18:00이 아니라 아침 08:00에 그게 보입니다.

## 둘을 함께 쓰는 법

타임박싱은 할 일을 언제 할지 정하고, 뽀모도로는 그 칸 안에서 어떻게 일할지 정합니다. 둘을 함께 쓰는 흔한 방법은 이렇습니다.

1. 꼭 할 일마다 시작 시각과 할 일에 맞는 길이를 정해 하루에 칸으로 놓습니다.
2. 칸은 90분 이하로 두고, 더 긴 일은 사이에 휴식을 둔 칸 두 개로 나눕니다.
3. 긴 칸 안에서는 도움이 된다면 25분씩 일하고 한 번마다 짧게 쉽니다.
4. 칸이 끝나면 멈추거나, 남은 일을 새 칸으로 옮깁니다. 다음 칸까지 끌고 가지 않습니다.
5. 하루를 마칠 때 넘친 칸을 적어 두고, 다음 날 고르는 길이를 고칩니다.

## 크로박스에서 뽀모도로와 타임박싱 쓰기

크로박스는 아이폰과 안드로이드용 타임박싱 앱입니다. 할 일을 하루 타임라인에 끌어다 놓으면 시작 시각과 길이가 있는 칸이 됩니다. 칸은 5분까지 짧게 잡을 수 있어 25분 칸도 됩니다. 칸이 시작되면 알림이 오고, 그때 집중 타이머를 켜면 칸 길이를 기본으로 한 번 카운트다운합니다. 집중 탭에는 할 일을 고르지 않고 바로 시작할 수 있는 25분·50분·90분 타이머도 있습니다. **크로박스는 뽀모도로 순환을 돌리지 않습니다.** 집중과 휴식을 자동으로 반복하거나 휴식을 저절로 시작하지 않으니, 쉬고 나면 타이머를 직접 다시 켜면 됩니다. 계획, 알림, 집중 타이머는 무료입니다. 집중하는 동안 방해되는 앱을 막는 앱 차단은 크로박스 Pro 기능입니다. [방해되는 앱 차단하는 법](/ko/blog/how-to-block-distracting-apps)도 참고하세요.
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
