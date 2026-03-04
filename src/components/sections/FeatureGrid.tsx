import Container from "@/components/layout/Container";
import { homeContent } from "@/data/home";
import { Card, CardContent } from "@/components/ui/Card";

export default function FeatureGrid() {
  const { features } = homeContent;

  return (
    <section className="pt-14 sm:pt-20">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">{features.title}</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((f) => (
            <Card key={f.title}>
              <CardContent className="space-y-2">
                <div className="text-base font-semibold">{f.title}</div>
                <p className="text-sm leading-relaxed text-neutral-600">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}