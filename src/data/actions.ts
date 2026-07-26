import type { icons } from "lucide-react";

/**
 * actions.ts — domaines d'action de l'ONG.
 */

export interface ActionItem {
  id: string;
  icon: keyof typeof icons; // nom d'icône lucide-react, typé strictement
  title: string;
  description: string;
}

export const actions: ActionItem[] = [
  {
    id: "prevention-migration",
    icon: "ShieldAlert",
    title: "Prévention et Lutte contre l'Immigration Clandestine",
    description:
      "Informer et sensibiliser la jeunesse guinéenne sur les risques réels de l'immigration irrégulière pour limiter les pertes en vies humaines.",
  },
  {
    id: "insertion-professionnelle",
    icon: "Briefcase",
    title: "Éducation, Emploi et Entrepreneuriat Local",
    description:
      "Motiver les jeunes vers la formation professionnelle et promouvoir l'employabilité locale comme alternative durable à l'exode.",
  },
  {
    id: "plaidoyer-institutionnel",
    icon: "Megaphone",
    title: "Défense des Intérêts de la Jeunesse",
    description:
      "Mener des actions de plaidoyer auprès des autorités et des entreprises pour favoriser, faciliter et promouvoir l'insertion socio-économique des jeunes à travers des stages pratiques. ",
  },
  {
    id: "leadership-confiance",
    icon: "Sparkles",
    title: "Confiance en Soi et Culture de l'Espoir",
    description:
      "Redonner confiance et espoir à la jeunesse à travers des conférences de motivation, séminaire et l'encouragement du leadership engagé.",
  },
  {
    id: "action-regionale",
    icon: "MapPin",
    title: "Ancrage Communautaire à Kankan et Siguiri",
    description:
      "Déployer des antennes locales et des bureaux permanents dans les zones clés pour agir au plus près des communautés notamment des jeunes.",
  },
  {
    id: "sensibilisation-scolaire",
    icon: "GraduationCap",
    title: "Éducation et Prise de Conscience Scolaire",
    description:
      "Intervenir directement dans les établissements scolaires pour sensibiliser les élèves dès le plus jeune âge aux enjeux du développement local.",
  },
];