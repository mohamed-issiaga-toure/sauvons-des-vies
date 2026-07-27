import { createContext } from "react";
import type { LocalizedText } from "../data/types/i18n";

/**
 * LanguageContext — définit le contrat du contexte de langue.
 * L'état réel est géré par LanguageProvider, pas ici.
 */

export type Lang = "fr" | "en";

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: LocalizedText) => string;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);