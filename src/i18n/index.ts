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

const browserLanguage = typeof navigator !== 'undefined' && navigator.language.startsWith('ko') ? 'ko' : 'en';
const savedLanguage = typeof window !== 'undefined'
  ? localStorage.getItem('language') || browserLanguage
  : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
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
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
