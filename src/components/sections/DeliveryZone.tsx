import Container from "@/components/layout/Container";
import { homeContent } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function DeliveryZone() {
  const { delivery } = homeContent;

  return (
    <section className="pt-14 sm:pt-20">
      <Container>
        <Card>
          <CardContent className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">{delivery.title}</h2>
              <p className="text-sm leading-relaxed text-neutral-600">{delivery.subtitle}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" href="/zone-de-livraison">
                {delivery.cta.label}
              </Button>
              <Button href="#commander">Commander</Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}