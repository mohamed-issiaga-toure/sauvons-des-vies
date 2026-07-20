/**
 * Avatar — photo de personne réutilisable (coordinateur, témoignage).
 * Isole la gestion de l'image (forme, fallback) du reste du composant parent.
 */

interface AvatarProps {
  src: string;
  alt: string;
  shape?: "circle" | "square";
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "w-10 h-10",
  md: "w-16 h-16",
  lg: "w-24 h-24",
};

export default function Avatar({
  src,
  alt,
  shape = "circle",
  size = "md",
}: AvatarProps) {
  return (
    <div className="avatar">
      <div
        className={`${sizeClasses[size]} ${
          shape === "circle" ? "rounded-full" : "rounded-lg"
        }`}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
