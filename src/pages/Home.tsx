import HeroSection from "../components/sections/HeroSection";
import Button from "../components/atoms/Button";
import About from "../components/sections/About";
import { heroContent } from "../data/home";
import StatsSection from "../components/sections/StatsSection";

export default function Home() {
  return (
    <>
      

      <HeroSection
        imageUrl={heroContent.imageUrl}
        eyebrow={heroContent.eyebrow}
        title={heroContent.title}
        text={heroContent.text}
        actions={

          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              const element = document.getElementById("don");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {heroContent.ctaLabel}
          </Button>

        }
      />
      <StatsSection />
      <About />
      
      



     

     

      
      

      

     

      

    

    </>
  );
}