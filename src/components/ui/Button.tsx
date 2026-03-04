import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: Variant;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

const styles: Record<Variant, string> = {
  primary:
    "bg-black text-white hover:bg-neutral-800 focus:ring-neutral-900",
  secondary:
    "bg-white text-black ring-1 ring-black/10 hover:bg-neutral-50 focus:ring-neutral-900",
  ghost:
    "bg-transparent text-black hover:bg-black/5 focus:ring-neutral-900",
};

export function Button({
  variant = "primary",
  className = "",
  href,
  type = "button",
  onClick,
  children,
  ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link aria-label={ariaLabel} href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button aria-label={ariaLabel} type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}