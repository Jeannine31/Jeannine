import Container from "./Container";
import Link from "next/link";
import { nav } from "@/data/nav";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-lg font-semibold">{site.name}</div>
            <p className="text-sm text-neutral-600">
              {site.tagline} — {site.city}
            </p>
            <p className="text-sm text-neutral-600">
              <span className="font-medium text-neutral-800">Email :</span>{" "}
              <a className="underline underline-offset-4" href={`mailto:${site.contactEmail}`}>
                {site.contactEmail}
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Pages</div>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link className="text-sm text-neutral-600 hover:text-black" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Infos</div>
            <p className="text-sm text-neutral-600">
              Site de démonstration pour un travail de cours (structure fidèle, contenu adaptable).
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</div>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-black">Contact</Link>
            <Link href="/zone-de-livraison" className="hover:text-black">Zone de livraison</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}