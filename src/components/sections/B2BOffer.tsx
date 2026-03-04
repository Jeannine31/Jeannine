// src/components/sections/B2BOffer.tsx
import Link from "next/link";

export default function B2BOffer() {
  return (
    <div className="rounded-3xl overflow-hidden border border-black/10">
      <div className="mj-gingham px-6 py-10 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-black/10 px-3 py-1 text-sm">
              Offre B2B • Toulouse centre & Labège
            </div>
            <h2 className="mj-title text-4xl md:text-5xl font-bold mt-4">
              Déjeuners d’équipe livrés au bureau, simplement.
            </h2>
            <p className="text-black/70 mt-3 max-w-2xl">
              Repas complets en bocaux en verre réutilisables, cuisinés par des restaurateurs toulousains.
              Demande de devis en 1 minute.
            </p>
          </div>

          <div className="flex gap-2">
            <Link href="#contact" className="px-5 py-3 rounded-full mj-btn-primary text-center">
              Demander un devis
            </Link>
            <Link href="/contact" className="px-5 py-3 rounded-full mj-btn-ghost text-center">
              Nous appeler
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="bg-white/90 rounded-2xl border border-black/10 p-5">
            <h3 className="mj-title text-2xl font-semibold">Tarifs (par personne)</h3>
            <ul className="mt-3 space-y-2 text-black/75">
              <li className="flex justify-between gap-4">
                <span>Repas complet (Entrée + Plat + Dessert + Boisson + Pain)</span>
                <strong className="text-black">22€</strong>
              </li>
              <li className="flex justify-between gap-4">
                <span>Formule (Plat + Dessert) + Boisson + Pain</span>
                <strong className="text-black">15€</strong>
              </li>
            </ul>

            <div className="mt-4 rounded-xl bg-black/5 p-4 text-sm text-black/70">
              Objectif (cours) : générer des leads entrants B2B et livrer 1 à 2 fois / semaine.
            </div>
          </div>

          <div className="bg-white/90 rounded-2xl border border-black/10 p-5">
            <h3 className="mj-title text-2xl font-semibold">Comment ça marche (B2B)</h3>
            <ol className="mt-3 space-y-3 text-black/75">
              <li><strong className="text-black">1.</strong> Tu demandes un devis (effectif, lieu, créneau).</li>
              <li><strong className="text-black">2.</strong> On confirme la dispo partenaires + logistique.</li>
              <li><strong className="text-black">3.</strong> Livraison au bureau + réchauffage sur place.</li>
            </ol>

            <div className="mt-4 text-sm text-black/70">
              <div className="font-semibold text-black">Contraintes (à afficher)</div>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Bocaux en verre réutilisables.</li>
                <li>Commandes <strong>pas le jour-même</strong> ni la veille.</li>
                <li>Besoin d’un moyen de réchauffage sur place.</li>
                <li>Contact possible via WhatsApp.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* fine bar accent */}
      <div className="h-2" style={{ background: "var(--mj-accent)" }} />
    </div>
  );
}