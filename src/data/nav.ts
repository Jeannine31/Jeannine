export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Offre B2B", href: "/#b2b" },
  { label: "Zone", href: "/zone-de-livraison" },
  { label: "Contact", href: "/contact" },
];

// (optionnel) compat si tu utilises aussi NAV_ITEMS ailleurs
export const NAV_ITEMS = nav;