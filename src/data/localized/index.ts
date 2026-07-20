import type { ContentLanguage } from '../../lib/seo';
import type { LocalizedContentPack } from './types';
import { pack as ja } from './ja';
import { pack as de } from './de';
import { pack as es } from './es';
import { pack as ptBR } from './ptBR';

export const LOCALIZED_CONTENT: Partial<Record<ContentLanguage, LocalizedContentPack>> = {
  ja,
  de,
  es,
  'pt-BR': ptBR,
};
