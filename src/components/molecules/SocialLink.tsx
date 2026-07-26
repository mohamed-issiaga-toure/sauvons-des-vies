import type { ReactNode } from "react";

/**
 * SocialLink — icône cliquable vers un réseau social.
 * Accepte n'importe quelle icône en children (lucide via <Icon />,
 * ou un SVG personnalisé comme <FacebookIcon />) — nécessaire depuis
 * que lucide-react a retiré ses icônes de marque.
 */

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

export default function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    
      <a href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="btn btn-circle btn-sm btn-ghost hover:text-secondary hover:bg-neutral-content/10"
    >
      {children}
    </a>
  );
}