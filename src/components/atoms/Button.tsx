import type { ReactNode } from "react";
/**
 * Button — seul composant bouton du site.
 * Toute action cliquable (don, contact, navigation...) doit passer par lui,
 * jamais par une balise <button> ou <a> stylée à la main dans une page.
 *
 * Usage courant (2 props qu'on précise presque toujours) :
 *   <Button variant="primary">Envoyer</Button>
 *
 * Usage avec les options (précisées seulement quand ce cas en a besoin) :
 *   <Button variant="secondary" size="sm" href="#don">Faire un don</Button>
 */

// Les 3 couleurs possibles, définies par notre thème DaisyUI (theme.css)
type ButtonVariant = "primary" | "secondary" | "ghost";

// Les 3 tailles possibles
type ButtonSize = "sm" | "md" | "lg" |"xl";

interface ButtonProps {
  // children = tout ce qui est écrit ENTRE <Button> et </Button>.
  // ReactNode = type qui accepte du texte, mais aussi un icône, plusieurs
  // éléments, etc. — plus permissif que "string" pour un composant générique.
  children: ReactNode;

  // Le "?" rend chaque propriété suivante FACULTATIVE : on peut l'omettre,
  // auquel cas la valeur par défaut (définie plus bas dans la fonction) s'applique.
  variant?: ButtonVariant;
  size?: ButtonSize;

  // Si href est fourni, le bouton devient un lien <a> au lieu d'un <button>
 

  // Action à exécuter au clic 
  onClick?: () => void;

  // "submit" utile pour les boutons de formulaire (ContactForm par ex.)
  type?: "button" | "submit";
}

// Record<ButtonVariant, string> = objet qui doit avoir EXACTEMENT une clé
// pour chaque valeur possible de ButtonVariant, ni plus ni moins.
const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
 
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md", 
  lg: "btn-lg",
  xl: "btn-xl",
};

export default function Button({
  children,
  variant = "primary", // valeur par défaut si non précisée à l'usage
  size = "md",
  onClick,
  type = "button",
}: ButtonProps) {
  // On construit la liste de classes une seule fois, réutilisée
  // pour les deux cas de rendu possibles (lien ou bouton) juste après.
  const classes = `btn ${variantClasses[variant]} ${sizeClasses[size]}`;

  // Cas 1 : href fourni → on rend un lien <a>, stylé comme un bouton


  // Cas 2 : pas de href → vrai <button> HTML, avec onClick et type
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}