import { useCountUp } from "../../hooks/useCountUp";
import { icons } from "lucide-react";
import Icon from "../atoms/Icon"

/**
 * StatCounter — un chiffre clé individuel, animé.
 */

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  icone: keyof typeof icons;
}

export default function StatCounter({ value, suffix = "", label, icone }: StatCounterProps) {
  // On récupère les deux valeurs du hook : count (le nombre en cours
  // d'animation) et ref (à poser sur l'élément qui doit être surveillé)
  const { count, ref } = useCountUp(value);

  return (
    <div className="text-center flex flex-col items-center gap-2 p-3.5 bg-base-200 rounded-2xl border hover:scale-105 transition-transform duration-300 ">
      {/* ref={ref} — c'est CET élément précis que useCountUp observe
          pour savoir quand déclencher l'animation */}
      <Icon name={icone} size={15} className="text-accent bg-base-300 w-9 h-auto  p-2 rounded-lg" />
        
      <p ref={ref} className="text-4xl font-semibold text-info" translate="no">
        {count}
        {suffix}
      </p>
      <p className="text-xs text-info font-semibold mt-2" translate="no">
        {label}
      </p>
    </div>
  );
}