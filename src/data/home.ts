import heroImage from "../assets/hero/hero.jpeg";

export interface HeroContent {
  imageUrl: string;
  eyebrow: string;
  title: string;
  text: string;
  ctaLabel: string;
}

export const heroContent: HeroContent = {
  imageUrl: heroImage,
  eyebrow: "ONG humanitaire · Présente dans les 33 préfectures de Guinée",
  title:
    "Ensemble, redonnons de l'espoir et la confiance en soin à la jeunesse guinéenne",
  text: "Sauver des vies, préserver la dignité, être présents au côté de la couche juvenille.",
  ctaLabel: "Découvrez nos actions",
};