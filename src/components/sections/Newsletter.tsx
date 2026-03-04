"use client";

export default function Newsletter() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // demo projet de cours
    alert("Inscription envoyée (démo)");
  }

  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold tracking-tight">
              Newsletter
            </h2>
            <p className="text-sm text-neutral-600">
              Recevez les actus et disponibilités (démo).
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <input
              type="email"
              required
              placeholder="Votre email"
              className="h-11 w-full rounded-xl border border-neutral-200 px-4 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10"
            />

            <button
              type="submit"
              className="h-11 rounded-xl bg-black px-5 text-sm font-medium text-white hover:opacity-90"
            >
              S’inscrire
            </button>
          </form>

          <p className="mt-2 text-xs text-neutral-500">
            Aucun spam. Désinscription possible.
          </p>
        </div>
      </div>
    </section>
  );
}