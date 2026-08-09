import { UI_COPY_TRANSLATIONS } from '../data/localized/uiCopy';
import type { ContentLanguage } from './seo';

/**
 * Chrome strings rendered inside statically exported pages (breadcrumbs,
 * section headings, CTA labels). These have to resolve on the server so every
 * locale's HTML ships in its own language — client-side i18next only swaps
 * copy after hydration, which left 18 locales with English chrome in the
 * indexed HTML.
 */
export interface UiCopy {
  home: string;
  blog: string;
  chroboxBlog: string;
  category: string;
  productivity: string;
  pillarGuide: string;
  relatedGuides: string;
  readTheGuide: string;
  readMore: string;
  backToBlog: string;
  min: string;
  minRead: string;
  article: string;
  articles: string;
  tableOfContents: string;
  frequentlyAskedQuestions: string;
  moreFromThisSeries: string;
  productivityInsights: string;
  viewAllPosts: string;
  appComparisons: string;
  allComparisons: string;
  compare: string;
  featureComparison: string;
  featuresCompared: string;
  featuresComparedCount: string;
  feature: string;
  prosAndCons: string;
  whyChooseChrobox: string;
  ourVerdict: string;
  unbiasedAnalysis: string;
  upToDate: string;
  view: string;
  allTemplates: string;
  freeScheduleTemplate: string;
  dailyTimeline: string;
  productivityTips: string;
  relatedTemplates: string;
  startFreeTrial: string;
  freeTemplates: string;
  professionTemplates: string;
  dailyTimeBlocks: string;
  customProductivityTips: string;
  freeToUse: string;
  timeBlocks: string;
  downloadOnAppStore: string;
  getItOnGooglePlay: string;
  notFoundMessage: string;
  goHome: string;
  blogSectionSubtitle: string;
  blogListSubtitle: string;
  blogPostCtaTitle: string;
  blogPostCtaSubtitle: string;
  comparisonListTitle: string;
  comparisonListSubtitle: string;
  comparisonListCtaTitle: string;
  comparisonListCtaSubtitle: string;
  strengthsAtAGlance: string;
  comparisonCtaTitle: string;
  comparisonCtaSubtitle: string;
  hourByHourPlan: string;
  similarProfessionTemplates: string;
  templatesListTitle: string;
  templatesListSubtitle: string;
  templatesCtaTitle: string;
  templatesCtaSubtitle: string;
  /** Contains a {competitor} placeholder. */
  comparisonSideBySide: string;
  /** Contains a {competitor} placeholder. */
  comparisonWhichChoose: string;
  /** Contains a {competitor} placeholder. */
  comparisonFaqSubtitle: string;
  /** Contains a {competitor} placeholder. */
  whyChooseCompetitor: string;
  /** Contains a {profession} placeholder. */
  templateHeroTitle: string;
  /** Contains a {profession} placeholder. */
  templateExpertAdvice: string;
  /** Contains a {profession} placeholder. */
  templateCtaTitle: string;
  /** Contains a {profession} placeholder. */
  professionDailySchedule: string;
}

export const EN_UI_COPY: UiCopy = {
  home: 'Home',
  blog: 'Blog',
  chroboxBlog: 'Chrobox Blog',
  category: 'Category',
  productivity: 'Productivity',
  pillarGuide: 'Pillar Guide',
  relatedGuides: 'Related Guides',
  readTheGuide: 'Read the guide',
  readMore: 'Read more',
  backToBlog: 'Back to Blog',
  min: 'min',
  minRead: 'min read',
  article: 'article',
  articles: 'articles',
  tableOfContents: 'Table of Contents',
  frequentlyAskedQuestions: 'Frequently Asked Questions',
  moreFromThisSeries: 'More from this series',
  productivityInsights: 'Productivity Insights',
  viewAllPosts: 'View All Posts',
  appComparisons: 'App Comparisons',
  allComparisons: 'All Comparisons',
  compare: 'Compare',
  featureComparison: 'Feature Comparison',
  featuresCompared: 'Features Compared',
  featuresComparedCount: 'features compared',
  feature: 'Feature',
  prosAndCons: 'Pros & Cons',
  whyChooseChrobox: 'Why Choose Chrobox',
  ourVerdict: 'Our Verdict',
  unbiasedAnalysis: 'Unbiased Analysis',
  upToDate: 'Up to Date',
  view: 'View',
  allTemplates: 'All Templates',
  freeScheduleTemplate: 'Free Schedule Template',
  dailyTimeline: 'Daily Timeline',
  productivityTips: 'Productivity Tips',
  relatedTemplates: 'Related Templates',
  startFreeTrial: 'Start Free Trial',
  freeTemplates: 'Free Templates',
  professionTemplates: 'Profession Templates',
  dailyTimeBlocks: 'Daily Time Blocks',
  customProductivityTips: 'Custom Productivity Tips',
  freeToUse: 'Free to Use',
  timeBlocks: 'time blocks',
  downloadOnAppStore: 'Download on App Store',
  getItOnGooglePlay: 'Get it on Google Play',
  notFoundMessage: 'The page you requested could not be found.',
  goHome: 'Go Home',
  blogSectionSubtitle: 'Tips and strategies for time-boxing and effective time management.',
  blogListSubtitle: 'Insights, tips, and strategies on time-boxing and productivity.',
  blogPostCtaTitle: 'Start Time-Boxing with Chrobox Today',
  blogPostCtaSubtitle: 'Transform your productivity with a 3-day free trial.',
  comparisonListTitle: 'Chrobox vs Popular Productivity Apps',
  comparisonListSubtitle: 'See how time-boxing stacks up against other task management apps. Find the right tool for your workflow.',
  comparisonListCtaTitle: 'Try Chrobox for Yourself',
  comparisonListCtaSubtitle: 'Experience time-boxing and transform your productivity. Free to start.',
  strengthsAtAGlance: 'The strengths of each app at a glance',
  comparisonCtaTitle: 'Ready to Try Chrobox?',
  comparisonCtaSubtitle: 'Transform your productivity with intelligent time-boxing. Free to start.',
  hourByHourPlan: 'Hour-by-hour plan for peak productivity',
  similarProfessionTemplates: 'Schedule templates for similar professions',
  templatesListTitle: 'Daily Schedule Templates for Every Profession',
  templatesListSubtitle: 'Optimize your day with proven time-boxing plans crafted for your specific role.',
  templatesCtaTitle: 'Put These Templates to Work with Chrobox',
  templatesCtaSubtitle: 'The time-boxing app that turns plans into results. Free to start.',
  comparisonSideBySide: 'Side-by-side comparison of Chrobox and {competitor}',
  comparisonWhichChoose: 'Chrobox vs {competitor}: Which Should You Choose?',
  comparisonFaqSubtitle: 'Common questions about Chrobox vs {competitor}',
  whyChooseCompetitor: 'Why Choose {competitor}',
  templateHeroTitle: '{profession} Daily Schedule Template',
  templateExpertAdvice: 'Expert advice for {profession}',
  templateCtaTitle: 'Start your {profession} schedule with Chrobox',
  professionDailySchedule: '{profession} Daily Schedule',
};

export const KO_UI_COPY: UiCopy = {
  home: '홈',
  blog: '블로그',
  chroboxBlog: 'Chrobox 블로그',
  category: '카테고리',
  productivity: '생산성',
  pillarGuide: '핵심 가이드',
  relatedGuides: '관련 가이드',
  readTheGuide: '가이드 읽기',
  readMore: '읽기',
  backToBlog: '블로그로 돌아가기',
  min: '분',
  minRead: '분 읽기',
  article: '개의 글',
  articles: '개의 글',
  tableOfContents: '목차',
  frequentlyAskedQuestions: '자주 묻는 질문',
  moreFromThisSeries: '같은 시리즈의 다른 글',
  productivityInsights: '생산성 인사이트',
  viewAllPosts: '모든 글 보기',
  appComparisons: '앱 비교',
  allComparisons: '모든 비교 보기',
  compare: '비교 보기',
  featureComparison: '기능 비교',
  featuresCompared: '기능별 비교',
  featuresComparedCount: '기능 비교',
  feature: '기능',
  prosAndCons: '장단점 비교',
  whyChooseChrobox: 'Chrobox의 장점',
  ourVerdict: '최종 평가',
  unbiasedAnalysis: '편향 없는 분석',
  upToDate: '최신 정보',
  view: '보기',
  allTemplates: '모든 템플릿 보기',
  freeScheduleTemplate: '무료 스케줄 템플릿',
  dailyTimeline: '하루 타임라인',
  productivityTips: '생산성 팁',
  relatedTemplates: '관련 템플릿',
  startFreeTrial: '무료 체험 시작하기',
  freeTemplates: '무료 템플릿',
  professionTemplates: '직업 템플릿',
  dailyTimeBlocks: '일일 타임블록',
  customProductivityTips: '맞춤 생산성 팁',
  freeToUse: '무료',
  timeBlocks: '타임블록',
  downloadOnAppStore: 'App Store 다운로드',
  getItOnGooglePlay: 'Google Play 다운로드',
  notFoundMessage: '요청한 페이지를 찾을 수 없습니다.',
  goHome: '홈으로 이동',
  blogSectionSubtitle: '타임박싱과 효과적인 시간 관리에 대한 팁과 전략을 공유합니다.',
  blogListSubtitle: '타임박싱과 생산성에 대한 인사이트, 팁, 전략을 공유합니다.',
  blogPostCtaTitle: '지금 Chrobox로 타임박싱을 시작하세요',
  blogPostCtaSubtitle: '3일 무료 체험으로 생산성을 혁신하세요.',
  comparisonListTitle: 'Chrobox vs 다른 생산성 앱',
  comparisonListSubtitle: '타임박싱이 다른 작업 관리 앱과 어떻게 다른지 비교해보세요. 당신의 워크플로우에 맞는 앱을 찾으세요.',
  comparisonListCtaTitle: 'Chrobox를 직접 사용해보세요',
  comparisonListCtaSubtitle: '타임박싱으로 생산성을 혁신하세요. 무료 체험으로 시작하세요.',
  strengthsAtAGlance: '각 앱의 강점을 살펴보세요',
  comparisonCtaTitle: 'Chrobox로 타임박싱을 시작하세요',
  comparisonCtaSubtitle: '타임박싱 앱으로 생산성을 혁신하세요. 무료로 시작하세요.',
  hourByHourPlan: '최고의 생산성을 위한 시간별 계획',
  similarProfessionTemplates: '비슷한 직업을 위한 스케줄 템플릿',
  templatesListTitle: '모든 직업을 위한 하루 일정 템플릿',
  templatesListSubtitle: '전문가들이 검증한 타임박싱 플랜으로 당신의 하루를 최적화하세요.',
  templatesCtaTitle: 'Chrobox로 이 템플릿을 실제로 사용해보세요',
  templatesCtaSubtitle: '타임박싱 앱으로 오늘부터 시작하세요. 무료 체험.',
  comparisonSideBySide: 'Chrobox와 {competitor}의 핵심 기능을 비교해보세요',
  comparisonWhichChoose: 'Chrobox vs {competitor}: 어떤 앱을 선택해야 할까요?',
  comparisonFaqSubtitle: 'Chrobox와 {competitor} 비교에 대한 주요 질문',
  whyChooseCompetitor: '{competitor}의 장점',
  templateHeroTitle: '{profession} 하루 일정 템플릿',
  templateExpertAdvice: '{profession}를 위한 전문가 조언',
  templateCtaTitle: 'Chrobox로 {profession} 스케줄을 시작하세요',
  professionDailySchedule: '{profession} 하루 일정',
};

const uiCopyCache = new Map<ContentLanguage, UiCopy>();

export function uiCopy(lang: ContentLanguage): UiCopy {
  if (lang === 'en') return EN_UI_COPY;
  if (lang === 'ko') return KO_UI_COPY;

  const cached = uiCopyCache.get(lang);
  if (cached) return cached;

  const translations = UI_COPY_TRANSLATIONS[lang];
  const resolved: UiCopy = translations
    ? (Object.fromEntries(
      Object.entries(EN_UI_COPY).map(([key, fallback]) => [
        key,
        translations[key as keyof UiCopy] || fallback,
      ]),
    ) as UiCopy)
    : EN_UI_COPY;

  uiCopyCache.set(lang, resolved);
  return resolved;
}

/**
 * Pluralizes the article counter. Languages without a plural distinction reuse
 * the same noun for both counts, which is what the pack supplies.
 */
export function articleCountLabel(count: number, lang: ContentLanguage) {
  const copy = uiCopy(lang);
  return count === 1 ? copy.article : copy.articles;
}

/** Fills `{placeholder}` slots in a UI string. */
export function formatCopy(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.split(`{${key}}`).join(value),
    template,
  );
}
