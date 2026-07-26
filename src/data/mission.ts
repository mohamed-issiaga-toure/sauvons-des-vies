/**
 * mission.ts — contenu de la section Mission.
 * Chaque valeur a maintenant une icône lucide-react, pour un affichage
 * en liste plutôt qu'en cartes (différenciation visuelle voulue avec
 * ActionsGrid et les sections à cartes-personnes).
 */

import type { icons } from "lucide-react";

export interface ValueItem {
  id: string;
  icon: keyof typeof icons;
  title: string;
  description: string;
}

export interface MissionContent {
  eyebrow: string;
  title: string;
  story: string;
  values: ValueItem[];
}

export const missionContent: MissionContent = {
  eyebrow: "Notre mission",
  title: "Pourquoi nous existons",
  story:
    "L'ONG Sauvons des Vies est née de la volonté commune de jeunes leaders guinéens face à la tragédie récurrente de l'immigration clandestine. Conscient de la perte tragique de nombreuses vies humaines en mer et au cours de traversées périlleuses, notre regroupement s'est donné pour mission prioritaire de redonner de l'espoir et de la confiance en soi à la jeunesse. Nous agissons au cœur des communautés et des milieux scolaires pour sensibiliser aux risques migratoires, tout en plaidant pour l'accès à la formation professionnelle, à l'emploi et au développement local sur l'ensemble du territoire guinéen.",
  values: [
    {
      id: "solidarite",
      icon: "HeartHandshake",
      title: "Solidarité",
      description:
        "Soutenir et accompagner les jeunes en situation de vulnérabilité pour prévenir l'exode et les risques migratoires.",
    },
    {
      id: "proximite",
      icon: "MapPin",
      title: "Proximité",
      description:
        "Être présent au plus près des réalités du terrain, notamment à Kankan, Siguiri et dans les zones à fort taux de départ.",
    },
    {
      id: "engagement",
      icon: "Flag",
      title: "Engagement",
      description:
        "Mobiliser la jeunesse autour de projets d'avenir collectifs pour bâtir une Guinée émergente et résiliente.",
    },
    {
      id: "sensibilisation",
      icon: "Megaphone",
      title: "Sensibilisation",
      description:
        "Informer les élèves, étudiants et familles sur les dangers de l'immigration clandestine et les alternatives locales.",
    },
    {
      id: "formation",
      icon: "GraduationCap",
      title: "Formation",
      description:
        "Encourager l'apprentissage technique et professionnel pour développer les compétences et l'employabilité des jeunes.",
    },
    {
      id: "encadrement",
      icon: "ShieldCheck",
      title: "Encadrement & Plaidoyer",
      description:
        "Défendre l'intérêt des jeunes auprès des autorités, des institutions et du secteur privé pour créer des opportunités concrètes.",
    },
  ],
};