import { testimonials } from "../../data/testimonials";
import FadeIn from "../atoms/FadeIn";
import TestimonialsCard from "../molecules/TestimonialCard";
export interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  photoUrl?: string;
}
/**
 * TestimonialsSection — une seule citation affichée à la fois,
 * avec navigation précédent/suivant (useState sur l'index actif).
 */

export default function TestimonialsSection() {

  return (
    <section className="py-16 px-6 bg-info text-neutral-content">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl justify-around mx-auto items-center">
      {testimonials.map((testimonial, index) => (

    <FadeIn key={testimonial.id} delay={index * 0.25}>

      <TestimonialsCard 
      id={testimonial.id}
      quote={testimonial.quote}
      authorRole={testimonial.authorRole}
      authorName={testimonial.authorName}
      
      />
      </FadeIn>

  )
 )}

      
        
       
      

        
      </div>
    </section>
  ); 

}
