/**
 * stats.ts — chiffres clés animés au scroll.
 * Valeurs PROVISOIRES — à remplacer par les vrais chiffres de l'ONG.
 */

export interface StatItem {
  id: number;
  value: number;      // la valeur finale vers laquelle le compteur monte
  suffix?: string;     // ex: "+", facultatif — ajouté après le nombre
  label: string;       // le texte sous le chiffre
}

export const stats: StatItem[] = [
  { id: 1, value: 100, suffix: "+", label: "Aides apportées aux sinistrés" },
  { id: 2, value: 1200, suffix: "+", label: "Jeunes formés" },
  { id: 3, value: 340, suffix: "+", label: "Jeunes employés" },
  { id: 4, value: 58, suffix:"+", label: "Établissements fréquentés" },
  { id: 5, value: 24,suffix:"+", label: "Séminaires organisés" },
  { id: 6, value: 10,suffix:"+", label: "jeunes sensibilisés" },
  { id: 7, value: 30,suffix:"+", label: "Familles accompagnées " },
  { id: 8, value: 24,suffix:"+", label: "33 préfectures parcourues" },

];