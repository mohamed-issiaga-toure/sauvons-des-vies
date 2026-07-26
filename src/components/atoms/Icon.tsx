import { icons } from "lucide-react";
import type { LucideProps } from "lucide-react";

/**
 * Icon — wrapper unique autour de la bibliothèque d'icônes (lucide-react).
 */

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof icons;
}

export default function Icon({ name, size = 20, ...rest }: IconProps) {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" introuvable`);
    return null;
  }

  return <LucideIcon size={size} {...rest} />;
}