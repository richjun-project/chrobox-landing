import type { BlogPostMeta } from '../types/blog';

// Daily posts (2026-11-04 onward), appended one per day by the publishing pipeline
// that lives outside this public repo. Each post is written in one language (or in
// both en and ko) and is never shown in the 18 translated locales: an untranslated
// copy there would only be a noindexed English duplicate that spends crawl budget.
// Insert new entries above the `@daily-*` markers; the publisher looks for them.

export const enDaily: BlogPostMeta[] = [
  // @daily-en
];

export const koDaily: BlogPostMeta[] = [
  // @daily-ko
];

export const contentDaily: { en: Record<string, string>; ko: Record<string, string> } = {
  en: {
    // @daily-en-content
  },
  ko: {
    // @daily-ko-content
  },
};

export const DAILY_SLUGS: ReadonlySet<string> = new Set([...enDaily, ...koDaily].map((post) => post.slug));
