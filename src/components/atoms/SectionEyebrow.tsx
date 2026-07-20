/**
 * SectionEyebrow — petit texte en majuscules au-dessus d'un titre de section.
 * Exemple : "ONG HUMANITAIRE · 33 PRÉFECTURES DE GUINÉE"
 */

interface SectionEyebrowProps {
  text: string;
}

export default function SectionEyebrow({ text }: SectionEyebrowProps) {
  return (
    <p className="text-xs tracking-widest uppercase text-secondary font-medium mb-2">
      {text}
    </p>
  );
}
