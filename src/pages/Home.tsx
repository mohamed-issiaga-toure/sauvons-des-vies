import NavBar from "../components/sections/NavBar";
import HeroSection from "../components/sections/HeroSection";
import Button from "../components/atoms/Button";
import { heroContent } from "../data/home";

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

      <section id="mission" className="min-h-screen flex items-center justify-center bg-base-200">
        <p>Mission (à remplir)</p>
      </section>

      <section id="actions" className="min-h-screen flex items-center justify-center bg-base-100">
        <p>Actions (à remplir)</p>
      </section>

      <section id="coordinateurs" className="min-h-screen flex items-center justify-center bg-base-200">
        <p>Coordinateurs (à remplir)</p>
      </section>
      <section id="a-propos" className="min-h-screen flex items-center justify-center bg-base-200">
  <p>À propos (à remplir)</p>
</section>

<section id="contact" className="min-h-screen flex items-center justify-center bg-base-100">
  <p>Contact (à remplir)</p>
</section>
    </>
  );
}