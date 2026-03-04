import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { site } from "@/data/site";

export default function ContactCard() {
  return (
    <section className="pt-10">
      <Container>
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Nous contacter</h2>
            <p className="text-sm leading-relaxed text-neutral-600">
              Pour toute question (commande, livraison, infos), écrivez-nous :
            </p>
            <a
              className="inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
              href={`mailto:${site.contactEmail}`}
            >
              {site.contactEmail}
            </a>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}