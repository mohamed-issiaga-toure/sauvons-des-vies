import { events } from "../../data/events";
import FadeIn from "../atoms/FadeIn";

/**
 * EventsSection — galerie photo des rencontres et interventions.
 * Images en public/ plutôt qu'importées : cette galerie va grandir
 * souvent, donc ajouter une photo doit rester simple (déposer le
 * fichier + une ligne dans events.ts), sans toucher aux imports.
 */

export default function EventsSection() {
  return (
    <section className="py-16 px-6 bg-base-100">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <p className="text-xs tracking-widest uppercase text-secondary mb-2">
          Sur le terrain
        </p>
        <h2 className="text-2xl font-medium">Nos rencontres et interventions</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {/* index sert au délai en cascade de FadeIn, comme dans ActionsGrid */}
        {events.map((event, index) => (
          <FadeIn key={event.id} delay={index * 0.1}>
            <div className="card bg-base-200 border border-base-300 overflow-hidden">
              {/* <img
                src={event.imageUrl}
                alt={event.caption}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-4">
                <span className="badge badge-primary badge-sm mb-2">
                  {event.category}
                </span>
                <p className="text-sm text-base-content/80">{event.caption}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}