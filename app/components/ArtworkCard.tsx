import Link from "next/link";
import { type Artwork, dimensionLabel, formatEur } from "../data/artworks";

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const meta = [
    artwork.year === null ? null : String(artwork.year),
    dimensionLabel(artwork),
    artwork.available ? "Available" : "Sold",
  ].filter(Boolean);

  return (
    <Link className="art-card" href={`/works/${artwork.slug}`}>
      <div className="art-card-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={artwork.images[0]} alt={artwork.title} loading="lazy" />
      </div>
      <div className="art-meta">
        <div>
          <div className="art-title">{artwork.title}</div>
          <div className="art-sub">{meta.join(" · ")}</div>
        </div>
        <div className="price">{formatEur(artwork.websitePriceEur)}</div>
      </div>
    </Link>
  );
}
