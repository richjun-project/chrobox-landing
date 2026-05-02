import type { ContentLanguage } from './seo';

export type BlogClusterId =
  | 'time-boxing-fundamentals'
  | 'scheduling-routines'
  | 'focus-productivity'
  | 'productivity-for-audiences'
  | 'tools-comparisons';

export interface BlogClusterDefinition {
  id: BlogClusterId;
  slug: string;
  hubSlug: string;
  name: { en: string; ko: string };
  description: { en: string; ko: string };
  members: string[];
}

export const BLOG_CLUSTERS: BlogClusterDefinition[] = [
  {
    id: 'time-boxing-fundamentals',
    slug: 'time-boxing-fundamentals',
    hubSlug: 'what-is-time-boxing',
    name: {
      en: 'Time-Boxing Fundamentals',
      ko: '타임박싱 기초',
    },
    description: {
      en: 'Core concepts, foundational techniques, and the science behind time-boxing.',
      ko: '타임박싱의 핵심 개념과 기초 기법, 과학적 원리를 다루는 글입니다.',
    },
    members: [
      'what-is-time-boxing',
      'time-boxing-vs-pomodoro',
      'time-blocking-vs-time-boxing',
      '5-time-boxing-strategies',
      'time-boxing-mistakes-to-avoid',
      'parkinsons-law-productivity',
      'eat-the-frog-time-boxing',
    ],
  },
  {
    id: 'scheduling-routines',
    slug: 'scheduling-routines',
    hubSlug: 'morning-routine-scheduling',
    name: {
      en: 'Scheduling & Routines',
      ko: '스케줄링과 루틴',
    },
    description: {
      en: 'Daily, weekly, and rhythmic scheduling patterns that build sustainable routines.',
      ko: '하루·일주일 단위의 스케줄링 패턴과 지속 가능한 루틴을 만드는 방법입니다.',
    },
    members: [
      'morning-routine-scheduling',
      'weekly-planning-guide',
      'deep-work-scheduling',
      'daily-review-ritual',
      'energy-management-scheduling',
      'digital-minimalism-scheduling',
      'work-life-balance-scheduling',
      'remote-work-scheduling',
    ],
  },
  {
    id: 'focus-productivity',
    slug: 'focus-productivity',
    hubSlug: 'focus-time-optimization',
    name: {
      en: 'Focus & Productivity',
      ko: '집중력과 생산성',
    },
    description: {
      en: 'Practical methods to improve focus, reduce friction, and ship more meaningful work.',
      ko: '집중력을 끌어올리고 마찰을 줄이며 의미 있는 결과를 만드는 실전 방법입니다.',
    },
    members: [
      'focus-time-optimization',
      'beat-procrastination-time-boxing',
      'beat-decision-fatigue',
      'task-batching-productivity',
      'productivity-for-beginners',
      'time-audit-guide',
      'meeting-management-time-boxing',
    ],
  },
  {
    id: 'productivity-for-audiences',
    slug: 'productivity-for-audiences',
    hubSlug: 'time-boxing-for-teams',
    name: {
      en: 'Productivity for Every Role',
      ko: '역할별 생산성',
    },
    description: {
      en: 'Time-boxing playbooks tailored to specific roles, life stages, and constraints.',
      ko: '특정 역할·라이프스테이지·환경에 맞춘 타임박싱 플레이북입니다.',
    },
    members: [
      'time-boxing-for-teams',
      'time-boxing-for-adhd',
      'time-boxing-for-students',
      'time-boxing-for-creative-professionals',
      'time-boxing-for-side-projects',
      'time-boxing-for-working-parents',
    ],
  },
  {
    id: 'tools-comparisons',
    slug: 'tools-comparisons',
    hubSlug: 'best-time-boxing-apps',
    name: {
      en: 'Tools & Comparisons',
      ko: '도구와 비교',
    },
    description: {
      en: 'Reviews, comparisons, and integration guides for time-boxing tools and calendar apps.',
      ko: '타임박싱 도구와 캘린더 앱에 대한 리뷰·비교·연동 가이드입니다.',
    },
    members: [
      'best-time-boxing-apps',
      'time-boxing-with-calendar-apps',
    ],
  },
];

const slugToCluster: Map<string, BlogClusterDefinition> = new Map();
for (const cluster of BLOG_CLUSTERS) {
  for (const slug of cluster.members) {
    slugToCluster.set(slug, cluster);
  }
}

export function getClusterBySlug(slug: string): BlogClusterDefinition | undefined {
  return slugToCluster.get(slug);
}

export function getClusterById(id: BlogClusterId): BlogClusterDefinition | undefined {
  return BLOG_CLUSTERS.find((cluster) => cluster.id === id);
}

export function getClusterByCategorySlug(categorySlug: string): BlogClusterDefinition | undefined {
  return BLOG_CLUSTERS.find((cluster) => cluster.slug === categorySlug);
}

export function clusterCategoryName(slug: string, lang: ContentLanguage): string {
  const cluster = getClusterBySlug(slug);
  return cluster ? cluster.name[lang] : (lang === 'ko' ? '생산성' : 'Productivity');
}

export function clusterHubSlug(slug: string): string | undefined {
  return getClusterBySlug(slug)?.hubSlug;
}

export function isHub(slug: string): boolean {
  const cluster = getClusterBySlug(slug);
  return Boolean(cluster && cluster.hubSlug === slug);
}

export function clusterMembers(clusterId: BlogClusterId): string[] {
  return getClusterById(clusterId)?.members ?? [];
}

export function siblingSlugs(slug: string, limit = 4): string[] {
  const cluster = getClusterBySlug(slug);
  if (!cluster) return [];
  return cluster.members.filter((member) => member !== slug).slice(0, limit);
}
