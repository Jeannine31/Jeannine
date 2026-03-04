import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ZoneDeLivraisonPage() {
  return (
    <div className="pt-10">
      <Container>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Zone de livraison</h1>
          <p className="text-sm leading-relaxed text-neutral-600">
            Indique ici la zone desservie, les créneaux et les modalités.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Card>
            <CardContent className="space-y-3">
              <div className="text-base font-semibold">Zone</div>
              <p className="text-sm text-neutral-600">
                Placeholder : description de la zone + quartiers / villes.
              </p>
              <div className="rounded-xl bg-neutral-50 p-4 text-sm text-neutral-700 ring-1 ring-black/5">
                À remplacer par une carte (image) ou un embed plus tard.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3">
              <div className="text-base font-semibold">Créneaux</div>
              <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1">
                <li>Jours de livraison : …</li>
                <li>Créneaux : …</li>
                <li>Conditions : …</li>
              </ul>
              <Button href="/contact" className="w-fit">
                Une question ? Contact
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}