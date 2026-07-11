import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { CoatCatalogSection } from "@/components/CoatCatalogSection";
import { CoatAdvantagesSection } from "@/components/CoatAdvantagesSection";
import { RemoteOrderSection } from "@/components/RemoteOrderSection";
import { AboutSection } from "@/components/AboutSection";
import { ConsultationSection } from "@/components/ConsultationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cream mx-auto w-[1280px] desktop:w-[1512px]">
      <Hero />
      <ServicesSection />
      <CoatCatalogSection />
      <CoatAdvantagesSection />
      <RemoteOrderSection />
      <AboutSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
}
