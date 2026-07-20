export interface LocalizedFaq {
  question: string;
  answer: string;
}

export interface LocalizedComparisonCopy {
  competitor?: string;
  tagline: string;
  description: string;
  metaDescription?: string;
  /** Must match the order and length of the comparison's `features` array. */
  featureNames: string[];
  chroboxPros: string[];
  competitorPros: string[];
  verdict: string;
  /** Must match the order and length of the comparison's `faqs` array. */
  faqs: LocalizedFaq[];
}

export interface LocalizedBlogPostCopy {
  title: string;
  excerpt: string;
  /** Must match the order and length of the post's `faqs` array. */
  faqs?: LocalizedFaq[];
}

export interface LocalizedContentPack {
  comparisons: Record<string, LocalizedComparisonCopy>;
  blogPosts: Record<string, LocalizedBlogPostCopy>;
  blogContents: Record<string, string>;
}
