import Icon from "../atoms/Icon";

/**
 * PersonCard — fiche générique pour toute personne affichée sur le site
 * (coordinateur de préfecture, membre exécutif...).
 */

interface PersonCardProps {
  fullName: string;
  title: string;
  tag?: string;
  photoUrl?: string;
}

export default function PersonCard({ fullName, title, tag, photoUrl }: PersonCardProps) {
  return (
    <div className="card w-full h-5xl bg-base-200 overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="h-32 bg-base-300 flex items-center justify-center">
        {photoUrl ? (
          <img src={photoUrl} alt={fullName} className="w-full h-full object-cover" />
        ) : (
          <Icon name="User" size={36} className="text-base-content/30" />
        )}
      </div>
      <div className="p-4">
        {tag && (
          <span className="badge badge-primary badge-sm mb-2" translate="no">
            {tag}
          </span>
        )}
        <p className="text-sm font-medium">{fullName}</p>
        <p className="text-xs text-base-content/60">{title}</p>
      </div>
    </div>
  );
}