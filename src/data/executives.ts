/**
 * executives.ts — comité exécutif de l'ONG (structure associative standard).
 * Placeholders en attente des vraies informations — mêmes principes que
 * coordinators.ts : à remplacer un par un sans toucher aux composants.
 */

export interface Executive {
  id: string;
  fullName: string;
  title: string;
  photoUrl?: string;
}

export const executives: Executive[] = [
  { id: "president", fullName: "À définir", title: "Président(e)" },
  { id: "vice-president", fullName: "À définir", title: "Vice-Président(e)" },
  { id: "secretaire-general", fullName: "À définir", title: "Secrétaire Général(e)" },
  { id: "tresorier", fullName: "À définir", title: "Trésorier(ère) Général(e)" },
  { id: "charge-communication", fullName: "À définir", title: "Chargé(e) de Communication" },
  { id: "conseiller", fullName: "À définir", title: "Conseiller(ère)" },
];