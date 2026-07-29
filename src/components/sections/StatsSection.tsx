import { stats } from "../../data/stats";
import StatCounter from "../molecules/StatCounter";

/**
 * StatsSection — grille des chiffres clés, fond sombre (bg-neutral).
 */

export default function StatsSection() {
  return (
    <section className="py-16 px-6 bg-neutral text-neutral-content max-h-5xl">
      <h1 className="text-2xl text-center font-bold text-primary mb-8">Nos statistiques</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
        {/* Chaque StatCounter a SA PROPRE instance de useCountUp —
            les 4 chiffres s'animent donc indépendamment les uns des autres */}
        
        
        {stats.map((stat) => (
            
          <StatCounter   
            key={stat.id}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          /> 
        ))}
      </div>
    </section>
  );
}