export type NavItem = {
  label: string;
  href: string;
};

export const nav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "Pourquoi Jeannine", href: "/pourquoi-jeannine" },
  { label: "Zone de livraison", href: "/zone-de-livraison" },
  { label: "Contact", href: "/contact" },
];