/**
 * navigation.ts — liens du menu principal (Navbar).
 * Export nommé (avec accolades), car Navbar.tsx l'importe ainsi :
 * import { navItems } from "../../data/navigation";
 */

export interface NavItem {
  id: number;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: 1, label: "Accueil", href: "/" },
  { id: 2, label: "Mission", href: "/mission" },
  { id: 3, label: "Actions", href: "/actions" },
  { id: 5, label: "Exécutifs", href: "/executifs" },
  { id: 6, label: "Coordinateurs", href: "/coordinators" },
  { id: 7, label: "Contact", href: "/contact" },
];