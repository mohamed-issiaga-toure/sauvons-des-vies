/**
 * testimonials.ts — témoignages (bénéficiaires, bénévoles, partenaires).
 * Placeholders en attente des vrais témoignages.
 */

export interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  photoUrl?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Grâce aux séances de sensibilisation de l'ONG dans notre établissement, j'ai compris qu'il est possible de réussir ici en Guinée. Ils m'ont orienté vers une formation professionnelle qui a totalement changé ma vision de l'avenir.",
    authorName: "Mamadou Diallo",
    authorRole: "Jeune bénéficiaire (Siguiri)",
  },
  {
    id: 2,
    quote:
      "S'engager aux côtés de Sauvons des Vies, c'est agir concrètement pour préserver des vies humaines. Voir la prise de conscience des jeunes lors de nos échanges sur le terrain à Kankan est notre plus grande fierté.",
    authorName: "Aïssatou Camara",
    authorRole: "Bénévole & Leader jeunesse",
  },
  {
    id: 3,
    quote:
      "L'implication de l'ONG auprès des collectifs de jeunes et des autorités locales est exemplaire. Leur plaidoyer en faveur de l'emploi local apporte une réponse concrète aux défis migratoires de notre région.",
    authorName: "Ousmane Traoré",
    authorRole: "Acteur communautaire (Kankan)",
  },
];