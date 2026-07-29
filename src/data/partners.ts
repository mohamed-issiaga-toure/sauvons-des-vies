/**
 * partners.ts — partenaires de l'ONG.
 * Placeholders : noms provisoires, pas encore de vrais logos.
 * logoUrl sera ajouté une fois les vraies images disponibles
 * (src/assets/partners/, même principe que hero et about).
 */

export interface Partner {
  id: number;
  name: string;
  logoUrl?: string;
}

export const partners: Partner[] = [
  { id: 1, name: "La Cité des apprentis" },
  { id: 2, name: "Pus Touré" },
  { id: 3, name: "Unicecef" },
  { id: 4, name: "Partenaire à venir" },
];