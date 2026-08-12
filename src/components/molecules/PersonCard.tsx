
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
    <div className="card w-full flex flex-col gap-2.5 h-5xl bg-base-200 p-4 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="w-20 h-20 rounded-lg border-2 border-primary overflow-hidden  shrink-0">
        
            <img src={photoUrl} alt={fullName} className="w-full h-full  object-cover" />
           
       
      </div>
      <div className="">
        {tag && (
          <span className="badge  bg-green-300 badge-md text- p-3 mb-2" translate="no">
            {tag}
          </span>
        )}
        <p className="text-sm font-bold mb-1.5">{fullName}</p>
        <p className="text-xs font-semibold text-base-content/60"> {title}</p>

      </div>
    </div>
  );
} 