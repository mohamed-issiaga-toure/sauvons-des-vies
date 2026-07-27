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
  { id: "home", label: "Accueil", href: "/" },
  { id: "mission", label: "Mission", href: "/mission" },
  { id: "actions", label: "Actions", href: "/actions" },
  { id: "executifs", label: "Exécutifs", href: "/executifs" },
  { id: "coordinateurs", label: "Coordinateurs", href: "/coordinators" },
  { id: "contact", label: "Contact", href: "/contact" },
];