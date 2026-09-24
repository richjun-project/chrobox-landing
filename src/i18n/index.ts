import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ko from './ko.json';
import ja from './ja.json';
import zhCN from './zh-CN.json';
import zhTW from './zh-TW.json';
import es from './es.json';
import fr from './fr.json';
import de from './de.json';
import ptBR from './pt-BR.json';
import it from './it.json';
import nl from './nl.json';
import pl from './pl.json';
import tr from './tr.json';
import id from './id.json';
import vi from './vi.json';
import th from './th.json';
import hi from './hi.json';
import ar from './ar.json';
import ru from './ru.json';
import ms from './ms.json';

const resources = {
  en: { translation: en },
  ko: { translation: ko },
  ja: { translation: ja },
  'zh-CN': { translation: zhCN },
  'zh-TW': { translation: zhTW },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
  'pt-BR': { translation: ptBR },
  it: { translation: it },
  nl: { translation: nl },
  pl: { translation: pl },
  tr: { translation: tr },
  id: { translation: id },
  vi: { translation: vi },
  th: { translation: th },
  hi: { translation: hi },
  ar: { translation: ar },
  ru: { translation: ru },
  ms: { translation: ms },
};

// The shared instance always starts in English on both server and client so the
// first client render matches the prerendered HTML. The default (unprefixed)
// route may switch it to the visitor's preference after hydration.
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    initAsync: false,
    interpolation: {
      escapeValue: false,
    },
  });

const localeInstances = new Map<string, typeof i18n>();

/**
 * Locale-prefixed routes get their own instance pinned to that language, so the
 * statically exported HTML is already translated. Crawlers don't run JS — a
 * language switch in an effect never reaches them.
 */
export function i18nForLocale(locale: string) {
  if (locale === 'en') {
    return i18n;
  }

  let instance = localeInstances.get(locale);

  if (!instance) {
    instance = i18n.createInstance();
    instance.init({
      resources,
      lng: locale,
      fallbackLng: 'en',
      initAsync: false,
      interpolation: {
        escapeValue: false,
      },
    });
    localeInstances.set(locale, instance);
  }

  return instance;
}

export default i18n;
