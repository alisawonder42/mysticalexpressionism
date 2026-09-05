import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { ArtworkCard } from "../components/ArtworkCard";
import { artworks } from "../data/artworks";
import { ARTIST_PORTRAIT_URL, PORTRAIT_OG_IMAGE, worksPageJsonLd } from "../lib/seo";

export const metadata: Metadata = {
  title: "Original Paintings",
  description:
    "Original paintings by Mladen Ilic (Mladen Ilić), painter in Novi Sad, Serbia. Unique oil works, newest first — the same artist known on Artfinder as Mladen Ilić. Dimensions, availability and prices.",
  alternates: { canonical: "/works" },
  openGraph: {
    title: "Original Paintings — Mladen Ilic (Mladen Ilić)",
    description:
      "Unique original paintings by Mladen Ilic, painter in Novi Sad. Also known on Artfinder as Mladen Ilić.",
    url: "/works",
    type: "website",
    images: [PORTRAIT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Original Paintings — Mladen Ilic (Mladen Ilić)",
    description:
      "Unique original paintings by Mladen Ilic, painter in Novi Sad. Also known on Artfinder as Mladen Ilić.",
    images: [ARTIST_PORTRAIT_URL],
  },
};

export default function WorksPage() {
  return (
    <main className="page">
      <JsonLd data={worksPageJsonLd()} />
      <div className="page-intro">
        <div className="section-label">Original paintings</div>
        <h1>Works</h1>
        <p>
          The most recent paintings, newest first. Every work is unique, signed and
          accompanied by a certificate of authenticity, and is ready to hang on stretched
          canvas unless noted otherwise.
        </p>
      </div>
      <div className="works-grid">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.slug} artwork={artwork} />
        ))}
      </div>
    </main>
  );
}
