import PersonCard from "../molecules/PersonCard";
import FadeIn from "../atoms/FadeIn";
import { executives } from "../../data/executives";

export default function ExecutivesSection() {
  return (
    <section id="a-propos" className="py-16 px-6 bg-base-300">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <p className="text-xs tracking-widest uppercase text-secondary mb-2">
          À propos
        </p>
        <h2 className="text-2xl font-medium mb-2">Notre comité exécutif</h2>
        <p className="text-sm text-base-content/70">
          L'équipe qui porte la gouvernance de l'ONG au quotidien.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        { executives.map((exec, index: number) => (
          <FadeIn key={exec.id} delay={index * 0.08}>
            <PersonCard
              fullName={exec.fullName}
              title={exec.title}
              photoUrl={exec.photoUrl}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}