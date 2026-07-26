import { useState } from "react";
import { testimonials } from "../../data/testimonials";
import Icon from "../atoms/Icon";

/**
 * TestimonialsSection — une seule citation affichée à la fois,
 * avec navigation précédent/suivant (useState sur l'index actif).
 */

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 px-6 bg-neutral text-neutral-content">
      <div className="max-w-xl mx-auto text-center">
        <Icon name="Quote" size={28} className="text-secondary mx-auto mb-4" />

        <p className="text-lg italic mb-6">"{current.quote}"</p>

        <p className="text-sm font-medium">{current.authorName}</p>
        <p className="text-xs opacity-70 mb-8">{current.authorRole}</p>

        <div className="flex justify-center gap-3">
          <button onClick={goPrev} className="btn btn-circle btn-sm btn-ghost">❮</button>
          <span className="text-xs opacity-60 self-center">
            {index + 1} / {testimonials.length}
          </span>
          <button onClick={goNext} className="btn btn-circle btn-sm btn-ghost">❯</button>
        </div>
      </div>
    </section>
  );
}