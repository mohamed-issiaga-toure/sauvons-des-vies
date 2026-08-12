/**
 * events.ts — photos des rencontres et interventions de l'ONG.
 * imageUrl provisoires — chemins vers public/images/events/
 * (pas d'import ES, contrairement à hero.ts — voir explication
 * dans EventsSection.tsx).
 */

export interface EventPhoto {
  id: number;
  imageUrl?: string;
  category: string; // ex: "Lycée", "Encadrement", "Sensibilisation"
  caption: string;   // légende affichée sous la photo
}

export const events: EventPhoto[] = [
  { id: 1, imageUrl: "/images/events/placeholder-1.jpg", category: "Lycée", caption: "Intervention en milieu scolaire" },
  { id: 2, imageUrl: "/images/events/placeholder-2.jpg", category: "Encadrement", caption: "Séance d'encadrement de jeunes" },
  { id: 3, imageUrl: "/images/events/placeholder-3.jpg", category: "Sensibilisation", caption: "Campagne de sensibilisation locale" },
];