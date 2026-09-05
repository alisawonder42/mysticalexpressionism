import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { JsonLd } from "./components/JsonLd";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "./data/copy";
import {
  ARTFINDER_PROFILE_URL,
  ARTIST_PORTRAIT_URL,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_DESCRIPTION,
  PORTRAIT_OG_IMAGE,
  SITE_KEYWORDS,
  SITE_NAME,
  TITLE_TEMPLATE,
  siteGraphJsonLd,
} from "./lib/seo";
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
    default: DEFAULT_TITLE,
    template: TITLE_TEMPLATE,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: "https://mladenilic.art" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: SITE_KEYWORDS,
  category: "art",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: DEFAULT_TITLE,
    description: OG_DESCRIPTION,
    url: "https://mladenilic.art",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_GB",
    images: [PORTRAIT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: OG_DESCRIPTION,
    images: [ARTIST_PORTRAIT_URL],
  },
};

const nav = [
  ["Works", "/works"],
  ["About", "/#about"],
  ["Process", "/#process"],
  ["Contact", "/contact"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
        <html lang="en" className={`${editorial.variable} ${sans.variable}`}>
      <body className={sans.className}>
        <link rel="me" href={ARTFINDER_PROFILE_URL} />
        <link rel="me" href={INSTAGRAM_URL} />
        <JsonLd data={siteGraphJsonLd()} />
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
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer me">
              Instagram
            </a>
            <a
              href={ARTFINDER_PROFILE_URL}
              target="_blank"
              rel="noreferrer me"
            >
              Artfinder
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
