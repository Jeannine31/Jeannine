import Container from "@/components/layout/Container";
import { homeContent } from "@/data/home";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Newsletter() {
  const { newsletter } = homeContent;

  return (
    <section className="pt-14 sm:pt-20">
      <Container>
        <Card>
          <CardContent className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">{newsletter.title}</h2>
              <p className="text-sm leading-relaxed text-neutral-600">{newsletter.subtitle}</p>
            </div>

            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Votre email"
                className="h-11 w-full rounded-full border border-black/10 px-4 text-sm outline-none focus:border-black/30"
              />
              <Button type="submit" className="h-11">
                S’inscrire
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}