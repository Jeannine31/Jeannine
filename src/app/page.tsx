import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Steps from "@/components/sections/Steps";
import DeliveryZone from "@/components/sections/DeliveryZone";
import Newsletter from "@/components/sections/Newsletter";
import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <Steps />
      <DeliveryZone />
      <Newsletter />

      {/* Bloc "Commander" (ancre) */}
      <section id="commander" className="pt-14 sm:pt-20">
        <Container>
          <Card>
            <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">Commander</h2>
                <p className="text-sm text-neutral-600">
                  Ici tu brancheras plus tard un lien vers la plateforme de commande / formulaire.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" href="/comment-ca-marche">
                  Comment ça marche
                </Button>
                <Button href="/contact">Contact</Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}