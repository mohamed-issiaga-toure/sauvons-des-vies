import { useState } from "react";
import  useScrollSpy  from "../../hooks/useScrollSpy";
import { navItems } from "../../data/navigation";
import Button from "../atoms/Button";

/**
 * Navbar — en-tête du site.
 * Grille 3 colonnes (logo | liens centrés | action) pour un centrage
 * réel des liens, peu importe la largeur du logo ou du bouton.
 */

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] sticky top-0 z-50 items-center bg-base-100 border-b border-base-300 px-6 py-3">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-primary" />
        <span className="font-medium">Sauvons Des-Vies</span>
      </div>

      {/* Liens centrés */}
      <ul className="menu font-bold menu-horizontal hidden md:flex gap-1">
        {navItems.map((item) => (
          <li key={item.id}>
            
              <a href={item.href}
              className={activeSection === item.id ? "active text-primary" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA don + hamburger mobile */}
      <div className="flex items-center justify-end gap-2">
        <div className="hidden md:block">
          <Button variant="primary" size="md"  children="Faire un don" />
           
         
        </div>

        <button
          className="btn btn-ghost btn-square md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Ouvrir le menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <ul className="menu bg-base-100 border-b border-base-300 absolute top-full left-0 w-full md:hidden z-10 col-span-3">
          {navItems.map((item) => (
            <li key={item.id}>
              
               <a  href={item.href}
                className={activeSection === item.id ? "active text-primary" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button variant="primary" size="md" >
              Faire un don
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
}