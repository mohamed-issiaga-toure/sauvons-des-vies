import type { ReactNode } from "react";

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
      <div className="hero-overlay bg-neutral/70" />

      <div className="hero-content text-center text-primary-content">
        <div className="max-w-xl">
          {eyebrow && (
            <p className="text-xs tracking-widest uppercase text-secondary mb-3">
              {eyebrow}
            </p>
          )}

          <h1 className="text-3xl font-medium mb-4">{title}</h1>

          {text && <p className="text-sm opacity-90 mb-6">{text}</p>}

          {actions && (
            <div className="flex gap-3 justify-center">{actions}</div>
          )}
        </div>
      </div>
    </section>
  );
}