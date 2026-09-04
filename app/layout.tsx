import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mladenilic.art"),
  title: {
    default: "Mladen Ilic — Contemporary Painter",
    template: "%s — Mladen Ilic"
  },
  description:
    "Official website of Serbian painter Mladen Ilic. Original paintings, private commissions, studio notes and collector inquiries.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mladen Ilic — Contemporary Painter",
    description:
      "Original paintings shaped through long, intuitive and deeply physical processes.",
    url: "https://mladenilic.art",
    siteName: "Mladen Ilic",
    type: "website"
  }
};

const nav = [
  ["Works", "/works"],
  ["About", "/about"],
  ["Private Commissions", "/private-commissions"],
  ["Contact", "/contact"]
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a className="brand" href="/">Mladen Ilic</a>
          <nav className="nav" aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <div className="brand">Mladen Ilic</div>
            <p>Serbia · Original paintings · Worldwide enquiries</p>
          </div>
          <div className="footer-links">
            <a href="mailto:mysticalexpressionismpaintings@gmail.com">Email</a>
            <a href="https://www.instagram.com/mysticalexpressionism/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.artfinder.com/en-GB/artist/mladen-ilic/" target="_blank" rel="noreferrer">Artfinder</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
