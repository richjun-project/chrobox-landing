import type { BlogFaq } from './blog';

export interface ComparisonFeature {
  name: string;
  nameKo: string;
  chrobox: boolean | string;
  competitor: boolean | string;
}

export interface ComparisonData {
  slug: string;
  /**
   * 이 비교 페이지 내용(영어·한국어 원문과 18개 언어 번역)이 마지막으로 실제 바뀐 날, YYYY-MM-DD.
   * 사이트맵 lastmod = max(updated, ComparisonPage.tsx 커밋 날짜). 한 비교만 고쳐도 15개 전부의
   * 날짜가 오르던 것을 막는다. 내용을 고치면 그 비교의 updated 를 올리고, 공용 표기
   * (FEATURE_VALUE_LABELS)를 고치면 그 값을 쓰는 비교들의 updated 도 올린다.
   */
  updated: string;
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
