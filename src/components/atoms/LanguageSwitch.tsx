/**
 * LanguageSwitch — bascule FR / EN.
 * Ne gère aucune logique de traduction lui-même : il se contente d'afficher
 * l'état courant et de déclencher onChange. La logique vit dans LanguageContext.
 */

type Lang = "fr" | "en";

interface LanguageSwitchProps {
  current: Lang;
  onChange: (lang: Lang) => void;
}

export default function LanguageSwitch({
  current,
  onChange,
}: LanguageSwitchProps) {
  return (
    <div className="flex gap-1 text-sm font-medium">
      <button
        onClick={() => onChange("fr")}
        className={current === "fr" ? "text-primary" : "text-base-content/50"}
      >
        FR
      </button>
      <span className="text-base-content/30">/</span>
      <button
        onClick={() => onChange("en")}
        className={current === "en" ? "text-primary" : "text-base-content/50"}
      >
        EN
      </button>
    </div>
  );
}
