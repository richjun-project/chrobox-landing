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
  features: ComparisonFeature[];
  chroboxPros: string[];
  chroboxProsKo: string[];
  competitorPros: string[];
  competitorProsKo: string[];
  verdict: string;
  verdictKo: string;
  faqs: BlogFaq[];
}
