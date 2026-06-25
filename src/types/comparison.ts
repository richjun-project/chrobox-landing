import type { BlogFaq } from './blog';

export interface ComparisonFeature {
  name: string;
  nameKo: string;
  chrobox: boolean | string;
  competitor: boolean | string;
}

export interface ComparisonData {
  slug: string;
  competitor: string;
  competitorKo: string;
  tagline: string;
  taglineKo: string;
  description: string;
  descriptionKo: string;
  /** 검색엔진 메타 전용 짧은 설명(구글 ~155자, 네이버 앞 80자 키워드). 없으면 description 사용. */
  metaDescription?: string;
  metaDescriptionKo?: string;
  features: ComparisonFeature[];
  chroboxPros: string[];
  chroboxProsKo: string[];
  competitorPros: string[];
  competitorProsKo: string[];
  verdict: string;
  verdictKo: string;
  faqs: BlogFaq[];
}
