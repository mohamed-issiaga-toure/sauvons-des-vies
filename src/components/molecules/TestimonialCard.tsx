
/**
 * PersonCard — fiche générique pour toute personne affichée sur le site
 * (coordinateur de préfecture, membre exécutif...).
 */

interface TestimonialsCardProps {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
}

export default function TestimonialsCard({ quote, authorName, authorRole }: TestimonialsCardProps) {
  return (
    <div className="w-full flex flex-col gap-2.5 items-center text-center border-b-2 border-primary bg-dark-card  p-4 hover:scale-105 transition-transform duration-300">
      
      
        <h2 className="italic  text-text-principal">" {quote}"</h2>

        <div className="text-xm  text-start text-secondaire font-semibold mt-5 flex flex-col gap-1.5">
        
        <p> {authorName}</p>
        <p>{authorRole}</p>
        </div>
       

    
    </div>
  );
} 