import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "./data/copy";
import "./globals.css";

const editorial = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-editorial",
});

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mladenilic.art"),
  title: {
    default: "Mladen Ilic — Painter",
    template: "%s — Mladen Ilic",
  },
  description:
    "Mladen Ilic is a Serbian painter and professor of Serbian language and literature, based in Novi Sad. Original paintings, private commissions and collector enquiries.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mladen Ilic — Painter",
    description:
      "An independent painting practice rooted in intuition, emotional experience and the relationship between gesture and material.",
    url: "https://mladenilic.art",
    siteName: "Mladen Ilic",
    type: "website",
  },
};

const nav = [
  ["Works", "/works"],
  ["About", "/about"],
  ["Process", "/process"],
  ["Private Commissions", "/private-commissions"],
  ["Contact", "/contact"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
        <html lang="en" className={`${editorial.variable} ${sans.variable}`}>
      <body className={sans.className}>
        <header className="site-header">
          <Link className="brand" href="/">
            Mladen Ilic
          </Link>
          <nav className="nav" aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <div className="brand">Mladen Ilic</div>
            <p>Novi Sad, Serbia · Original paintings · Worldwide enquiries</p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a
              href="https://www.artfinder.com/en-GB/artist/mladen-ilic/"
              target="_blank"
              rel="noreferrer"
            >
              Artfinder
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
