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

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  image: string;
  readTime: number;
  lang: 'en' | 'ko';
}