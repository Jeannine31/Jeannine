import React from "react";

export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        "rounded-2xl bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/5 " +
        className
      }
    >
      {children}
    </div>
  );
}

export function CardContent({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={"p-6 " + className}>{children}</div>;
}