import { aboutContent } from "../../data/about";
import  ImageCarousel from "../atoms/ImageCarousel";
export default function About() {
  return (

    <section className="bg-base-300 p-8 mt-5 mb-5">
      <div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-5xl  mx-auto mb-16">
      <ImageCarousel images={aboutContent.images} altPrefix="Sauvons Des-Vies" />

      <div>
        <p className="text-xl  uppercase text-primary font-bold mb-2 mr-4">
          {aboutContent.eyebrow}
        </p>
        <h2 className="text-2xl font-medium mb-4">{aboutContent.title}</h2>
        <p className="text-sm text-base-content/70 leading-relaxed">{aboutContent.paragraph}</p>
      </div>
    </div>
      </div>
      
    </section>
    
  );
}