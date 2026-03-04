import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Newsletter from "@/components/sections/Newsletter";

export default function PourquoiJeanninePage() {
  return (
    <div className="pt-10">
      <Container>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Pourquoi Jeannine</h1>
          <p className="text-sm leading-relaxed text-neutral-600">
            Une page “manifeste” : valeurs, démarche, qualité, local.
          </p>
        </div>

        <div className="mt-8">
          <Card>
            <CardContent className="space-y-3">
              <p className="text-sm leading-relaxed text-neutral-600">
                Ici : histoire, vision, promesse. (On ajustera après pour coller encore plus au texte réel.)
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                Ce template est fait pour être fidèle dans la structure et très facile à modifier.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>

      <FeatureGrid />
      <Newsletter />
    </div>
  );
}