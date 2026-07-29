import { actions } from "../../data/actions";
import ActionCard from "../molecules/ActionCard";
import FadeIn from "../atoms/FadeIn";
/**
 * ActionsGrid — grille des domaines d'action, lit data/actions.ts.
 */

export default function ActionsGrid() {
  return (
    <section id="actions" className="py-16 px-6 bg-base-300">
      <div className="max-w-2xl mx-auto text-center mb-10 ">
        <p className="text-xs tracking-widest uppercase text-secondary mb-2">
          Ce que nous faisons
        </p>
        <h2 className="text-2xl font-medium">Nos domaines d'action</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl justify-around items-center mx-auto">
        {actions.map((action, index) => (
          <FadeIn key={action.id} delay={index * 0.15}>
            <ActionCard
              icon={action.icon}
              title={action.title}
              description={action.description}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}