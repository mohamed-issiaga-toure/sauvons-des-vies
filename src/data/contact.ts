/**
 * contact.ts — contenu et options du formulaire de contact.
 */

export interface SelectOption {
  value: string;
  label: string;
}

export const motifOptions: SelectOption[] = [
  { value: "adherer", label: "Adhérer à l'ONG" },
  { value: "don", label: "Faire un don" },
  { value: "autre", label: "Autre" },
];

export const sexeOptions: SelectOption[] = [
  { value: "homme", label: "Homme" },
  { value: "femme", label: "Femme" },
];

export const contactIntro = {
  eyebrow: "Contact & Engagement",
  title: "Rejoignez l'action et contactez-nous",
  paragraph:
    "Que vous souhaitiez adhérer à l'ONG, devenir bénévole, proposer un partenariat ou obtenir des informations sur nos campagnes de sensibilisation, notre équipe est à votre écoute. Ensemble, nous pouvons offrir de nouvelles perspectives à la jeunesse et sauver des vies. Remplissez le formulaire ci-dessous ou joignez-nous directement par e-mail et téléphone ; nous vous répondrons dans les plus brefs délais.",
};