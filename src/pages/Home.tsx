import NavBar from "../components/sections/NavBar";
import HeroSection from "../components/sections/HeroSection";
import Button from "../components/atoms/Button";
import ActionsGrid from "../components/sections/ActionsGrid"
import About from "../components/sections/About";
import { heroContent } from "../data/home";
import CoordinatorsGrid from "../components/sections/CoordinatorsGrid";
import  ExecutivesSection from "../components/sections/ExecutivesSection";
import ContactSection from "../components/ContactSection";
import MissionSection from "../components/sections/MissionSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import PartnersSection from "../components/sections/PartnersSection";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <NavBar />

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

      <ActionsGrid />

      <ContactSection />

      <About />
      <ExecutivesSection />

      <MissionSection />
     <TestimonialsSection />

     <PartnersSection />
     

      <CoordinatorsGrid />

     <Footer />

    </>
  );
}