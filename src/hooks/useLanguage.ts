import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
/**
 * useLanguage — hook pour lire/changer la langue active,
 * et traduire un texte bilingue depuis n'importe quel composant.
 */

export function useLanguage() {
  const context = useContext(LanguageContext);

  // Si ce hook est utilisé HORS de LanguageProvider, context vaut
  // undefined — on préfère une erreur explicite ici plutôt qu'un bug
  // silencieux plus tard (ex: t is not a function).
  if (context === undefined) {
    throw new Error("useLanguage doit être utilisé à l'intérieur de LanguageProvider");
  }

  return context;
}