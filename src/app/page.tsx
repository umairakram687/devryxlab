import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectSection from "@/components/sections/ProjectSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <Hero />
      <MarqueeSection />
      
      {/* Placeholder for other sections to allow scrolling */}
      <ServiceSection />
      
      <ProjectSection />
      
      <TeamSection />
      <TestimonialSection />
      
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
