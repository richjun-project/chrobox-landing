import type { ContentLanguage } from '../lib/seo';
import type { TimeBlock } from './scheduleTemplates';

// Kept apart from scheduleTemplates.ts so client components can use the colors
// and labels without bundling the localized content packs.
export const categoryColors: Record<TimeBlock['category'], string> = {
  focus: '#20C997',
  meeting: '#4DABF7',
  break: '#FFB347',
  admin: '#9775FA',
  creative: '#FF6B6B',
  learning: '#51CF66',
};

export const categoryLabels: Record<
  TimeBlock['category'],
  Partial<Record<ContentLanguage, string>> & { en: string }
> = {
  focus: {
    en: 'Focus', ko: '집중', ja: '集中', 'zh-CN': '专注', 'zh-TW': '專注',
    es: 'Enfoque', fr: 'Concentration', de: 'Fokus', 'pt-BR': 'Foco',
    it: 'Concentrazione', nl: 'Focus', pl: 'Skupienie', tr: 'Odak',
    id: 'Fokus', vi: 'Tập trung', th: 'โฟกัส', hi: 'फोकस',
    ar: 'تركيز', ru: 'Фокус', ms: 'Fokus',
  },
  meeting: {
    en: 'Meeting', ko: '미팅', ja: '会議', 'zh-CN': '会议', 'zh-TW': '會議',
    es: 'Reunión', fr: 'Réunion', de: 'Meeting', 'pt-BR': 'Reunião',
    it: 'Riunione', nl: 'Vergadering', pl: 'Spotkanie', tr: 'Toplantı',
    id: 'Rapat', vi: 'Họp', th: 'ประชุม', hi: 'मीटिंग',
    ar: 'اجتماع', ru: 'Встреча', ms: 'Mesyuarat',
  },
  break: {
    en: 'Break', ko: '휴식', ja: '休憩', 'zh-CN': '休息', 'zh-TW': '休息',
    es: 'Descanso', fr: 'Pause', de: 'Pause', 'pt-BR': 'Pausa',
    it: 'Pausa', nl: 'Pauze', pl: 'Przerwa', tr: 'Mola',
    id: 'Istirahat', vi: 'Nghỉ', th: 'พัก', hi: 'ब्रेक',
    ar: 'راحة', ru: 'Перерыв', ms: 'Rehat',
  },
  admin: {
    en: 'Admin', ko: '행정', ja: '事務', 'zh-CN': '事务', 'zh-TW': '事務',
    es: 'Gestión', fr: 'Administratif', de: 'Verwaltung', 'pt-BR': 'Gestão',
    it: 'Gestione', nl: 'Beheer', pl: 'Administracja', tr: 'İdari',
    id: 'Administrasi', vi: 'Hành chính', th: 'ธุรการ', hi: 'प्रशासन',
    ar: 'إداري', ru: 'Админ', ms: 'Pentadbiran',
  },
  creative: {
    en: 'Creative', ko: '창의', ja: '創作', 'zh-CN': '创意', 'zh-TW': '創意',
    es: 'Creativo', fr: 'Créatif', de: 'Kreativ', 'pt-BR': 'Criativo',
    it: 'Creativo', nl: 'Creatief', pl: 'Kreatywne', tr: 'Yaratıcı',
    id: 'Kreatif', vi: 'Sáng tạo', th: 'สร้างสรรค์', hi: 'रचनात्मक',
    ar: 'إبداعي', ru: 'Творчество', ms: 'Kreatif',
  },
  learning: {
    en: 'Learning', ko: '학습', ja: '学習', 'zh-CN': '学习', 'zh-TW': '學習',
    es: 'Aprendizaje', fr: 'Apprentissage', de: 'Lernen', 'pt-BR': 'Aprendizado',
    it: 'Apprendimento', nl: 'Leren', pl: 'Nauka', tr: 'Öğrenme',
    id: 'Belajar', vi: 'Học tập', th: 'เรียนรู้', hi: 'सीखना',
    ar: 'تعلّم', ru: 'Обучение', ms: 'Pembelajaran',
  },
};

export function categoryLabel(category: TimeBlock['category'], lang: ContentLanguage): string {
  const labels = categoryLabels[category];
  return labels[lang] ?? labels.en;
}
