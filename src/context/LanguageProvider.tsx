import { useState } from "react";
import type { ReactNode } from "react";
import { LanguageContext } from "./LanguageContext";
import type { Lang } from "./LanguageContext";
import type { LocalizedText } from "../data/types/i18n";

/**
 * LanguageProvider — porte l'état réel de la langue (useState),
 * et enveloppe toute l'application pour que useLanguage fonctionne
 * n'importe où dans l'arbre de composants.
 */

interface LanguageProviderProps {
  children: ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  // La langue active, "fr" par défaut. C'est la SEULE source de vérité
  // pour la langue de tout le site.
  const [lang, setLang] = useState<Lang>("fr");

  // t() prend un objet { fr, en } et renvoie juste la bonne valeur,
  // selon la langue actuellement active.
  const t = (text: LocalizedText): string => text[lang];

  // .Provider rend { lang, setLang, t } disponible à TOUS les
  // composants descendants, peu importe leur profondeur dans l'arbre.
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}