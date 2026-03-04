import Link from "next/link";
import Container from "@/components/layout/Container";
import { NAV_ITEMS } from "@/data/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      {/* top notice (simple, B2B angle) */}
      <div className="border-b border-black/5 bg-neutral-900 text-white">
        <Container className="py-2">
          <p className="text-center text-xs sm:text-sm">
            Déjeuners d’équipe, plateaux repas & livraisons au bureau — demande de devis en 1 minute.
          </p>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-neutral-900 text-white">
              <span className="text-sm font-bold">MJ</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Merci</p>
              <p className="text-base font-black tracking-tight">Jeannine</p>
            </div>
          </Link>

          <div className="hidden lg:block pl-4">
            <p className="text-xs text-neutral-500">
              Cuisine maison • Livraison
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <Link
            href="/#b2b"
            className="hidden sm:inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            Découvrir B2B
          </Link>
          <Link
            href="/#b2b"
            className="inline-flex rounded-full bg-[#E4573D] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-95"
          >
            Demander un devis
          </Link>

          {/* Mobile minimal */}
          <Link
            href="/#b2b"
            className="md:hidden inline-flex rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-neutral-900"
            aria-label="Aller à l’offre B2B"
          >
            B2B
          </Link>
        </div>
      </Container>
    </header>
  );
}