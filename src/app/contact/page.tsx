import Container from "@/components/layout/Container";
import ContactCard from "@/components/sections/ContactCard";
import Newsletter from "@/components/sections/Newsletter";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="pt-10">
      <Container>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="text-sm leading-relaxed text-neutral-600">
            Une page simple et claire pour contacter + infos pratiques.
          </p>
        </div>

        <div className="mt-8">
          <Card>
            <CardContent className="space-y-3">
              <p className="text-sm text-neutral-600">
                Option : ajouter un mini formulaire plus tard (nom/email/message).
              </p>
              <Button href="#newsletter" variant="secondary" className="w-fit">
                Recevoir les menus
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>

      <ContactCard />

      <div id="newsletter">
        <Newsletter />
      </div>
    </div>
  );
}