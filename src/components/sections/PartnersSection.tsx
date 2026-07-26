import { partners } from "../../data/partners";

/**
 * PartnersSection — bandeau simple des partenaires (pas de cartes,
 * volontairement sobre : un simple alignement de noms/logos en niveaux
 * de gris, motif classique et distinct du reste du site).
 */

export default function PartnersSection() {
  return (
    <section className="py-12 px-6 border-y border-base-300">
      <p className="text-center text-xs tracking-widest uppercase text-base-content/50 mb-6">
        Nos partenaires
      </p>

      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 max-w-3xl mx-auto">
        {partners.map((partner) =>
          partner.logoUrl ? (
            <img
              key={partner.id}
              src={partner.logoUrl}
              alt={partner.name}
              className="h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ) : (
            <span key={partner.id} className="text-sm text-base-content/40 font-medium">
              {partner.name}
            </span>
          )
        )}
      </div>
    </section>
  );
}