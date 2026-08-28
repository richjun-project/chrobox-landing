import { absoluteUrl, localizedPath, type SiteLocale } from './seo';

import en from '../i18n/en.json';
import ko from '../i18n/ko.json';
import ja from '../i18n/ja.json';
import zhCN from '../i18n/zh-CN.json';
import zhTW from '../i18n/zh-TW.json';
import es from '../i18n/es.json';
import fr from '../i18n/fr.json';
import de from '../i18n/de.json';
import ptBR from '../i18n/pt-BR.json';
import it from '../i18n/it.json';
import nl from '../i18n/nl.json';
import pl from '../i18n/pl.json';
import tr from '../i18n/tr.json';
import id from '../i18n/id.json';
import vi from '../i18n/vi.json';
import th from '../i18n/th.json';
import hi from '../i18n/hi.json';
import ar from '../i18n/ar.json';
import ru from '../i18n/ru.json';
import ms from '../i18n/ms.json';

/**
 * Answer-engine optimization: the home page renders a visible FAQ (HomeFaq.tsx)
 * but shipped no FAQPage structured data, so answer engines had to infer the
 * Q&A pairs from layout alone.
 *
 * The schema is built from the *same* i18n JSON that HomeFaq renders, and from
 * the same key order, so the structured data can never drift from the visible
 * text. Mismatched LD is treated as spam by search engines, so generating both
 * from one source is the point — do not hand-write answers here.
 */
type FaqTranslations = {
  homeFaq: {
    items: Record<string, { question: string; answer: string }>;
  };
};

const TRANSLATIONS: Record<SiteLocale, FaqTranslations> = {
  en, ko, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, es, fr, de, 'pt-BR': ptBR, it,
  nl, pl, tr, id, vi, th, hi, ar, ru, ms,
} as unknown as Record<SiteLocale, FaqTranslations>;

// Mirrors FAQ_KEYS in components/HomeFaq.tsx — keep the two in sync.
const FAQ_KEYS = ['whatIsChrobox', 'isFree', 'vsTimeBlocking', 'appBlocking', 'platforms'] as const;

export function faqPageSchema(locale: SiteLocale) {
  const items = TRANSLATIONS[locale]?.homeFaq?.items ?? TRANSLATIONS.en.homeFaq.items;
  const fallback = TRANSLATIONS.en.homeFaq.items;

  const mainEntity = FAQ_KEYS.map((key) => {
    const entry = items[key] ?? fallback[key];
    if (!entry?.question || !entry?.answer) return null;
    return {
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: { '@type': 'Answer', text: entry.answer },
    };
  }).filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    // Anchors the LD to the section a reader actually sees.
    '@id': `${absoluteUrl(localizedPath(locale, '/'))}#faq`,
    inLanguage: locale,
    mainEntity,
  };
}
