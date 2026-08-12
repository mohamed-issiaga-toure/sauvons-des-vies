import { stats } from "../../data/stats";
import FadeIn from "../atoms/FadeIn";
import StatCounter from "../molecules/StatCounter";

/**
 * StatsSection — grille des chiffres clés, fond sombre (bg-neutral).
 */

export default function StatsSection() {
  return (
    <section className="py-16 px-6 bg-neutral  max-h-5xl">
      <h1 className="text-2xl text-center font-semibold uppercase text-primary-content mb-8">Les chiffres vous témoingnent notre engagement</h1>

      <FadeIn delay={0.1}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
        {/* Chaque StatCounter a SA PROPRE instance de useCountUp —
            les 4 chiffres s'animent donc indépendamment les uns des autres */}
        
        
        {stats.map((stat, index) => (
           <FadeIn key={stat.id} delay={index * 0.20}> 
          <StatCounter  
            icone={stat.icone}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
           /> 
           </FadeIn>
        ))}
      </div>
      </FadeIn>
    </section>
  );
}