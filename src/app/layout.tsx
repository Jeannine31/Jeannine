import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-black antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}