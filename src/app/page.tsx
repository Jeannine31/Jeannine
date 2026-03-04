// src/app/page.tsx
import Container from "@/components/layout/Container";
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import DeliveryZone from "@/components/sections/DeliveryZone";
import Newsletter from "@/components/sections/Newsletter";
import B2BOffer from "@/components/sections/B2BOffer";
import B2BContact from "@/components/sections/B2Bcontact";
import PartnerCTA from "@/components/sections/PartnerCTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="py-10">
        <Container className="space-y-10">
          <FeatureGrid />

          {/* B2B focus (MISSION: Défi #1) */}
          <section id="b2b" className="scroll-mt-28">
            <B2BOffer />
          </section>

          {/* Contact visible (MISSION: permettre de contacter) */}
          <section id="contact" className="scroll-mt-28">
            <B2BContact />
          </section>

          {/* Restaurateurs (MISSION: Défi #2) */}
          <section id="restaurants" className="scroll-mt-28">
            <PartnerCTA />
          </section>

          <DeliveryZone />
          <Newsletter />
        </Container>
      </div>
    </>
  );
}