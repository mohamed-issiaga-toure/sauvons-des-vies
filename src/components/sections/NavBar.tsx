import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../data/navigation";
import Button from "../atoms/Button";
import logo from "../../assets/Logo/logo.png"

/**
 * Navbar — en-tête du site.
 * Grille 3 colonnes (logo | liens centrés | action) pour un centrage
 * réel des liens, peu importe la largeur du logo ou du bouton.
 */

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] sticky top-0 z-50 items-center text-white bg-base-100 border-b border-base-300 px-6 py-3">
      {/* Logo cliquable */}
      <Link to="/" className="flex items-center gap-6 w-fit">
        <div className=" rounded-full bg-transparent p-1">
          <img src={logo} alt="" className="w-18 text-2xl h-auto object-cover rounded-full"
          />
        </div>

        <h1 className="font-bold text-2xl text-accent">Sauvons  <span 
         className="font-bold text-2xl text-secondary">
         Des</span> <span
          className="font-bold text-2xl text-primary"
        >Vies</span>
        </h1>
      </Link>

      {/* Liens centrés */}
      <ul className="menu font-bold menu-horizontal hidden md:flex gap-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                isActive ? "active text-primary font-bold" : ""
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* CTA don + hamburger mobile */}
      <div className="flex items-center justify-end gap-2">
        <div className="hidden md:block">
          <Link to="/contact">
            <Button variant="primary" size="md">
              Faire un don
            </Button>
          </Link>
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
        <ul className="menu bg-base-100 border-b border-base-300 absolute top-full left-0 w-full md:hidden z-10 col-span-3 p-4 gap-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "active text-primary font-bold" : ""
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button variant="primary" size="md">
                Faire un don
              </Button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}