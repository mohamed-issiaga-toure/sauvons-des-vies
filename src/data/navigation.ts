/**
 * navigation.ts — liens du menu principal (Navbar).
 * Export nommé (avec accolades), car Navbar.tsx l'importe ainsi :
 * import { navItems } from "../../data/navigation";
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: "hero", label: "Accueil", href: "#hero" },
  { id: "mission", label: "Mission", href: "#mission" },
  { id: "actions", label: "Actions", href: "#actions" },
  { id: "a propos", label: "À propos", href: "#a-propos" },
  { id: "contact", label: "Contact", href: "#contact" },
  { id: "coordinateurs", label: "Coordinateurs", href: "#coordinateurs" },
];