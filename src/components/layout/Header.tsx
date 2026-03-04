import Link from "next/link";
import Container from "./Container";
import { nav } from "@/data/nav";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md ring-1 ring-black/5">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-lg font-semibold tracking-tight">{site.name}</span>
            <span className="hidden text-xs text-neutral-500 sm:inline">
              {site.tagline}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-700 hover:text-black transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="secondary" href="/comment-ca-marche" className="hidden sm:inline-flex">
              Découvrir
            </Button>
            <Button href="#commander">Commander</Button>
          </div>
        </div>

        {/* Mobile nav (simple) */}
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-neutral-700 hover:text-black transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
}