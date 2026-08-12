import type { ReactNode } from "react";
import FadeIn from "../atoms/FadeIn";

interface HeroSectionProps {
  imageUrl: string;
  eyebrow?: string;
  title: string;
  text?: string;
  actions?: ReactNode;
}

export default function HeroSection({
  imageUrl,
  eyebrow,
  title,
  text,
  actions,
}: HeroSectionProps) {
  return (

    <section 
    
      id="hero"
      className="hero min-h-[80vh]"
      
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="hero-overlay bg-neutral/50" />

    
        <div className="hero-content text-center text-primary-content">
          <div className="max-w-xl">

            <FadeIn delay={0.20}>
            {eyebrow && (
              <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-3">
                {eyebrow}
              </p>
            )}

            <h1 className="text-3xl font-bold mb-4">{title}</h1>
           </FadeIn>

           <FadeIn delay={0.30}>
            {text && <p className="text-sm text-base-300 font-semibold mb-6">"{text}"</p>}

            {actions && (
              <div className="flex gap-3 justify-center">{actions}</div>
            )}
            </FadeIn>
          </div>
        </div>
      
    </section>
  );
}