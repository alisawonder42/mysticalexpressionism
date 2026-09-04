import type { Metadata } from "next";
import Link from "next/link";
import { artworks } from "../data/artworks";

export const metadata: Metadata = {
  title: "Works",
  description: "Available original paintings by Mladen Ilic."
};

export default function WorksPage() {
  return (
    <main className="page">
      <div className="page-intro">
        <div className="eyebrow">Original paintings</div>
        <h1>Works</h1>
        <p>
          A selection of recent work. Every painting is one of a kind, signed, ready to hang on stretched canvas unless noted otherwise, and accompanied by a certificate of authenticity.
        </p>
      </div>
      <div className="works-grid">
        {artworks.map((artwork) => (
          <Link className="art-card" href={`/works/${artwork.slug}`} key={artwork.slug}>
            <div className="art-card-image"><img src={artwork.image} alt={artwork.title} /></div>
            <div className="art-meta">
              <div>
                <div className="art-title">{artwork.title}</div>
                <div className="art-sub">{artwork.year} · {artwork.size} · {artwork.status}</div>
              </div>
              <div className="price">{artwork.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
