import type { icons } from "lucide-react";

/**
 * stats.ts — chiffres clés animés au scroll.
 * Valeurs PROVISOIRES — à remplacer par les vrais chiffres de l'ONG.
 */

export interface StatItem {
  id: number;
  value: number;      // la valeur finale vers laquelle le compteur monte
  suffix?: string;     // ex: "+", facultatif — ajouté après le nombre
  label: string;       // le texte sous le chiffre
  icone:keyof typeof icons;
}


export const stats: StatItem[] = [
  { id: 1, value: 100, suffix: "+", label: "Aides apportées aux sinistrés",icone:"HandHelping" },
  { id: 2, value: 1200, suffix: "+", label: "Jeunes formés", icone: "GraduationCap" },
  { id: 3, value: 340, suffix: "+", label: "Jeunes employés", icone: "Briefcase" },
  { id: 4, value: 58, suffix:"+", label: "Établissements fréquentés", icone: "School" },
  { id: 5, value: 24,suffix:"+", label: "Séminaires organisés", icone: "Sailboat" },
  { id: 6, value: 10,suffix:"+", label: "jeunes sensibilisés", icone: "Megaphone" },
  { id: 7, value: 30,suffix:"+", label: "Familles accompagnées ", icone: "HeartHandshake"},
  { id: 8, value: 24,suffix:"+", label: "33 préfectures parcourues", icone: "Signature" },

];