/**
 * executives.ts — comité exécutif de l'ONG (structure associative standard).
 * Placeholders en attente des vraies informations — mêmes principes que
 * coordinators.ts : à remplacer un par un sans toucher aux composants.
 */

export interface Executive {
  id: number;
  fullName: string;
  title: string;
  photoUrl?: string;
}

export const executives: Executive[] = [
  { id: 1, fullName: "Mathia Sagno", title: "Président" },
  { id: 2, fullName: "Fatoumata Sow", title: "Vice-Présidente" },
  { id: 3, fullName: "Mohamed Issiaga Touré", title: "Secrétaire Général" },
  { id: 4, fullName: "Ibrahim Touré", title: "Caissière" },
  { id: 5, fullName: "Moustapha Barry", title: "Chargé de Communication" },
  { id: 6, fullName: "Fodé Amar Soumah", title: "Conseiller" },
];