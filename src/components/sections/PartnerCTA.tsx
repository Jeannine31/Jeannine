// src/components/sections/PartnerCTA.tsx
import Link from "next/link";

export default function PartnerCTA() {
  return (
    <div className="rounded-3xl border border-black/10 overflow-hidden">
      <div className="px-6 py-10 md:px-10 bg-white">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 border border-black/10 px-3 py-1 text-sm">
              Partenaires restaurateurs • Toulouse centre
            </div>
            <h2 className="mj-title text-3xl md:text-4xl font-bold mt-4">
              Restaurateur ? Deviens partenaire Jeannine.
            </h2>
            <p className="text-black/70 mt-2 max-w-2xl">
              Revenus supplémentaires + notoriété, sans sur-stock et sans effort commercial :
              tu cuisines, on s’occupe du reste.
            </p>
          </div>

          <div className="flex gap-2">
            <Link href="/contact" className="px-5 py-3 rounded-full mj-btn-primary">
              Postuler
            </Link>
            <Link href="#contact" className="px-5 py-3 rounded-full mj-btn-ghost">
              Nous contacter
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Card title="1) Pré-qualification">
            Formulaire simple pour vérifier les critères (capacité, horaires midi, qualité).
          </Card>
          <Card title="2) Échange & dégustation">
            RDV téléphonique, rencontre, dégustation au restaurant.
          </Card>
          <Card title="3) Charte & lancement">
            Signature de la charte de production, onboarding, puis 1 restaurant / jour en rotation.
          </Card>
        </div>
      </div>

      <div className="h-2" style={{ background: "var(--mj-ink)" }} />
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 p-5 bg-white">
      <div className="mj-title text-xl font-semibold">{title}</div>
      <div className="text-sm text-black/70 mt-2">{children}</div>
    </div>
  );
}