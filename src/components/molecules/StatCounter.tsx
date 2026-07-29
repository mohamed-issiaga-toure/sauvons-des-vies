import { useCountUp } from "../../hooks/useCountUp";

/**
 * StatCounter — un chiffre clé individuel, animé.
 */

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  // On récupère les deux valeurs du hook : count (le nombre en cours
  // d'animation) et ref (à poser sur l'élément qui doit être surveillé)
  const { count, ref } = useCountUp(value);

  return (
    <div className="text-center">
      {/* ref={ref} — c'est CET élément précis que useCountUp observe
          pour savoir quand déclencher l'animation */}
      <p ref={ref} className="text-4xl font-semibold text-secondary">
        {count}
        {suffix}
      </p>
      <p className="text-xs text-neutral-content/70 mt-2">{label}</p>
    </div>
  );
}