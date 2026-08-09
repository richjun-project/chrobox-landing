export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  image: string;
  readTime: number;
  content: string;
  lang: 'en' | 'ko';
}

export interface BlogFaq {
  question: string;
  questionKo?: string;
  answer: string;
  answerKo?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  /** ISO date of the last substantive content revision; falls back to `date` in schema. */
  updated?: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  image: string;
  readTime: number;
  lang: 'en' | 'ko';
  faqs?: BlogFaq[];
  /** Ranked item names for listicle posts; emitted as ItemList JSON-LD. */
  itemList?: string[];
  clusterId?: string;
  clusterSlug?: string;
  hubSlug?: string;
  isHub?: boolean;
}