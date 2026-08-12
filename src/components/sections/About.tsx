import { aboutContent } from "../../data/about";
import FadeIn from "../atoms/FadeIn";
import  ImageCarousel from "../atoms/ImageCarousel";
export default function About() {
  return (

    <section className="bg-base-300 p-8 mt-5 mb-5">
      <div>
        
       
         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-5xl  mx-auto mb-16">
          <FadeIn delay={0.15}>
              <ImageCarousel images={aboutContent.images} altPrefix="Sauvons Des-Vies"  />
              </FadeIn>

    <FadeIn delay={0.30}>
      <div className="p-5 border-none rounded-2xl bg-base-200">
        <p className="text-xl  uppercase text-primary font-bold mb-2 mr-4">
          {aboutContent.eyebrow}
        </p>
        <h2 className="text-2xl font-medium mb-4">{aboutContent.title}</h2>
        <p className="text-sm italic font-semibold text-base-content leading-relaxed">{aboutContent.paragraph}</p>
      </div>
      </FadeIn>
    </div>
     
      </div>
      
    </section>
    
  );
}