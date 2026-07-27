import type { ReactNode } from "react";
import NavBar from "../sections/NavBar";
import Footer from "../sections/Footer";

/**
 * MainLayout — structure commune à toutes les pages : Navbar + contenu + Footer.
 * Utilisable dès maintenant en one-page, et directement réutilisable
 * plus tard si on passe au multi-page (children remplacé par <Outlet/>).
 */

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}