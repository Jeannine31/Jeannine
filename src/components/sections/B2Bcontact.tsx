"use client";

// src/components/sections/B2Bcontact.tsx
import { useMemo, useState } from "react";

type FormState = {
  company: string;
  name: string;
  email: string;
  phone: string;
  people: string;
  address: string;
  date: string;
  notes: string;
};

export default function B2BContact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    company: "",
    name: "",
    email: "",
    phone: "",
    people: "",
    address: "",
    date: "",
    notes: "",
  });

  const canSubmit = useMemo(() => {
    return form.company && form.name && form.email && form.people;
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    // Projet de cours: “fake send” (remplace par API route si besoin)
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSent(true);
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <div className="rounded-3xl border border-black/10 p-6">
        <h2 className="mj-title text-3xl md:text-4xl font-bold">
          Demander un devis B2B
        </h2>
        <p className="text-black/70 mt-2">
          On te répond rapidement avec une proposition adaptée (Toulouse centre / Labège).
        </p>

        <div className="mt-5 rounded-2xl mj-gingham border border-black/10 p-5">
          <div className="mj-title text-xl font-semibold">Réponse attendue</div>
          <ul className="mt-2 text-sm text-black/70 space-y-1 list-disc pl-5">
            <li>Besoin identifié (effectif, lieu, date, contraintes).</li>
            <li>Confirmation prise en compte + prochain contact.</li>
            <li>Option : WhatsApp si tu veux aller vite.</li>
          </ul>
        </div>
      </div>

      <div className="rounded-3xl border border-black/10 p-6 bg-white">
        {sent ? (
          <div className="rounded-2xl border border-black/10 p-5">
            <div className="mj-title text-2xl font-bold">✅ Demande envoyée</div>
            <p className="text-black/70 mt-2">
              Nickel. Tu peux aussi nous écrire sur WhatsApp pour accélérer.
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <a className="px-5 py-3 rounded-full mj-btn-primary" href="#b2b">
                Revenir à l’offre
              </a>
              <a className="px-5 py-3 rounded-full mj-btn-ghost" href="https://wa.me/" target="_blank">
                WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Entreprise *">
                <input
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className="w-full rounded-xl border border-black/15 px-3 py-2"
                  placeholder="Nom de l’entreprise"
                />
              </Field>
              <Field label="Contact *">
                <input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-xl border border-black/15 px-3 py-2"
                  placeholder="Prénom Nom"
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Email *">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-black/15 px-3 py-2"
                  placeholder="contact@entreprise.fr"
                />
              </Field>
              <Field label="Téléphone">
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-xl border border-black/15 px-3 py-2"
                  placeholder="06…"
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Nombre de personnes *">
                <input
                  value={form.people}
                  onChange={(e) => update("people", e.target.value)}
                  className="w-full rounded-xl border border-black/15 px-3 py-2"
                  placeholder="ex: 12"
                />
              </Field>
              <Field label="Date / créneau souhaité">
                <input
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="w-full rounded-xl border border-black/15 px-3 py-2"
                  placeholder="ex: jeudi midi"
                />
              </Field>
            </div>

            <Field label="Adresse de livraison">
              <input
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                className="w-full rounded-xl border border-black/15 px-3 py-2"
                placeholder="Toulouse centre / Labège…"
              />
            </Field>

            <Field label="Notes (réchauffage, contraintes, etc.)">
              <textarea
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className="w-full rounded-xl border border-black/15 px-3 py-2 min-h-[96px]"
                placeholder="ex: micro-ondes dispo / régime végétarien…"
              />
            </Field>

            <div className="pt-2 flex items-center gap-2">
              <button
                type="submit"
                disabled={!canSubmit || loading}
                className="px-5 py-3 rounded-full mj-btn-primary disabled:opacity-60"
              >
                {loading ? "Envoi…" : "Envoyer la demande"}
              </button>
              <div className="text-xs text-black/55">
                * commandes pas le jour-même ni la veille
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-sm font-medium text-black/75 mb-1">{label}</div>
      {children}
    </label>
  );
}