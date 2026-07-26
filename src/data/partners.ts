/**
 * partners.ts — partenaires de l'ONG.
 * Placeholders : noms provisoires, pas encore de vrais logos.
 * logoUrl sera ajouté une fois les vraies images disponibles
 * (src/assets/partners/, même principe que hero et about).
 */

export interface Partner {
  id: string;
  name: string;
  logoUrl?: string;
}

export const partners: Partner[] = [
  { id: "partenaire-1", name: "Partenaire à venir" },
  { id: "partenaire-2", name: "Partenaire à venir" },
  { id: "partenaire-3", name: "Partenaire à venir" },
  { id: "partenaire-4", name: "Partenaire à venir" },
];