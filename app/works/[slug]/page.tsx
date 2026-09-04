import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { artworks, dimensionLabel, formatEur, getArtwork } from "../../data/artworks";
import { CONTACT_EMAIL } from "../../data/copy";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  if (!artwork) return {};

  const facts = [artwork.year, artwork.medium, dimensionLabel(artwork)]
    .filter(Boolean)
    .join(". ");

  return {
    title: artwork.title,
    description: `${artwork.title}. ${facts}. Original painting by Mladen Ilic.`,
    alternates: { canonical: `/works/${artwork.slug}` },
  };
}

export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  if (!artwork) notFound();

  const subject = encodeURIComponent(`Acquisition enquiry — ${artwork.title}`);
  const body = encodeURIComponent(
    `Hello Mladen,\n\nI am interested in acquiring ${artwork.title}. Please confirm availability and shipping to my location.\n\nThank you.`,
  );
  const question = encodeURIComponent(`Question about ${artwork.title}`);

  const details: [string, string][] = [
    ...(artwork.year === null ? [] : ([["Year", String(artwork.year)]] as [string, string][])),
    ["Medium", artwork.medium],
    ...(artwork.materials ? ([["Materials", artwork.materials]] as [string, string][]) : []),
    ...(artwork.substrate ? ([["Surface", artwork.substrate]] as [string, string][]) : []),
    ...(artwork.dimensions
      ? ([["Dimensions", artwork.dimensions]] as [string, string][])
      : []),
    ...(artwork.framing ? ([["Presentation", artwork.framing]] as [string, string][]) : []),
    ...(artwork.signature ? ([["Authenticity", artwork.signature]] as [string, string][]) : []),
    ...(artwork.unique ? ([["Edition", "Unique original"]] as [string, string][]) : []),
  ];

  return (
    <main className="artwork-page">
      <div className="artwork-layout">
        <div className="artwork-images">
          {artwork.images.map((image, index) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={image}
              src={image}
              alt={index === 0 ? artwork.title : `${artwork.title}, detail ${index}`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        <aside className="artwork-info">
          <div className="section-label">
            {artwork.available ? "Available" : "Sold"} · Original painting
          </div>
          <h1>{artwork.title}</h1>
          <div className="artwork-price">{formatEur(artwork.websitePriceEur)}</div>
          <dl className="artwork-details">
            {details.map(([term, value]) => (
              <div className="detail" key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="artwork-description">
            {artwork.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="actions">
            <a
              className="button"
              href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}
            >
              Acquire this work
            </a>
            <a className="button" href={`mailto:${CONTACT_EMAIL}?subject=${question}`}>
              Ask about this work
            </a>
          </div>
          <p className="art-sub artwork-note">
            Worldwide shipping from Serbia is arranged individually and confirmed before
            payment. PayPal or bank transfer can be arranged once availability is
            confirmed.
          </p>
        </aside>
      </div>
    </main>
  );
}
