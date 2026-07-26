/**
 * siteConfig.ts — informations générales du site.
 */

export interface SocialLinkData {
  id: "facebook" | "instagram" | "whatsapp";
  url: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  socialLinks: SocialLinkData[];
}

export const siteConfig: SiteConfig = {
  name: "Sauvons Des-Vies",
  tagline: "Ensemble, redonnons de l'espoir et la confiance en soin à la jeunesse guinéenne.",
  email: "sauvonsdesvies@gmail.com",
  phone: "+224 622 79 24 41",
  socialLinks: [
    { id: "facebook", url: "https://facebook.com/sauvonsdesviesofficiel", label: "Sauvons des vies officiel" },
    { id: "instagram", url: "https://instagram.com/...", label: "Sauvons des vies" },
    { id: "whatsapp", url: "https://wa.me/224622792441", label: "WhatsApp" },
  ],
};