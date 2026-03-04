import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { homeContent } from "@/data/home";
import { Card, CardContent } from "@/components/ui/Card";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-neutral-200 blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-neutral-100 blur-3xl opacity-80" />
      </div>

      <Container className="pt-14 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs text-neutral-700">
              {hero.eyebrow}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              {hero.title}
            </h1>

            <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button variant="secondary" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Button>
            </div>

            <div className="text-xs text-neutral-500">
              * Démo de cours — contenu modifiable facilement.
            </div>
          </div>

          <Card className="lg:justify-self-end">
            <CardContent className="space-y-4">
              <div className="text-sm font-semibold">Aperçu</div>
              <div className="space-y-2 text-sm text-neutral-600">
                <p>• Menus de saison</p>
                <p>• Commande simple</p>
                <p>• Livraison locale</p>
              </div>
              <div className="rounded-xl bg-neutral-50 p-4 text-sm text-neutral-700 ring-1 ring-black/5">
                Astuce : tu peux remplacer ce bloc par une vraie photo / mockup plus tard.
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}