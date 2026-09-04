import type { Metadata } from "next";
import { ArtworkCard } from "../components/ArtworkCard";
import { artworks } from "../data/artworks";

export const metadata: Metadata = {
  title: "Works",
  description:
    "The ten most recent original paintings by Mladen Ilic, with dimensions, availability and prices.",
};

export default function WorksPage() {
  return (
    <main className="page">
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
