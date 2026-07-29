import { missionContent } from "../../data/mission";
import Icon from "../atoms/Icon";
import FadeIn from "../atoms/FadeIn";

/**
 * MissionSection — histoire à gauche, liste éditoriale des valeurs à droite
 * (icône + titre + description, sans carte), pour se différencier
 * visuellement d'ActionsGrid et des sections à cartes-personnes.
 */

export default function MissionSection() {
  return (
    <section id="mission" className="py-16 px-6 bg-base-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 max-w-5xl mx-auto items-center">
        <div>
          <p className="text-xs tracking-widest uppercase text-secondary mb-2">
            {missionContent.eyebrow}
          </p>
          <h2 className="text-2xl font-medium mb-4">{missionContent.title}</h2>

          <p className="text-sm text-base-content/70 leading-loose">{missionContent.story}</p>
        </div>

        <div className="flex flex-col divide-y divide-base-300 ">
          {missionContent.values.map((value, index) => (
            <FadeIn key={value.id} delay={index * 0.08}>
              <div className="flex items-start gap-3 py-4 hover:scale-105 transition-transform duration-300">
                <Icon name={value.icon} size={20} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{value.title}</p>
                  <p className="text-xs text-base-content/60">{value.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}