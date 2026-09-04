import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { artworks } from "../../data/artworks";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = artworks.find((item) => item.slug === slug);
  if (!artwork) return {};
  return {
    title: artwork.title,
    description: `${artwork.title}, ${artwork.year}. ${artwork.medium}. ${artwork.size}. Original painting by Mladen Ilic.`
  };
}

export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params;
  const artwork = artworks.find((item) => item.slug === slug);
  if (!artwork) notFound();

  const subject = encodeURIComponent(`Acquisition enquiry — ${artwork.title}`);
  const body = encodeURIComponent(`Hello Mladen,\n\nI am interested in acquiring ${artwork.title} (${artwork.year}). Please confirm availability and shipping to my location.\n\nThank you.`);

  return (
    <main className="artwork-page">
      <div className="artwork-layout">
        <div className="artwork-image">
          <img src={artwork.image} alt={artwork.title} />
        </div>
        <aside className="artwork-info">
          <div className="eyebrow">{artwork.status} · Original painting</div>
          <h1>{artwork.title}</h1>
          <div className="price" style={{ fontSize: "1.2rem" }}>{artwork.price}</div>
          <div className="artwork-details">
            <div className="detail"><span>Year</span><span>{artwork.year}</span></div>
            <div className="detail"><span>Medium</span><span>{artwork.medium}</span></div>
            <div className="detail"><span>Dimensions</span><span>{artwork.size}</span></div>
            <div className="detail"><span>Presentation</span><span>Stretched canvas · ready to hang</span></div>
            <div className="detail"><span>Authenticity</span><span>Signed · COA included</span></div>
          </div>
          <p className="artwork-description">{artwork.description}</p>
          <div className="actions">
            <a className="button" href={`mailto:mysticalexpressionismpaintings@gmail.com?subject=${subject}&body=${body}`}>Acquire this work</a>
            <a className="button" href={`mailto:mysticalexpressionismpaintings@gmail.com?subject=${encodeURIComponent(`Question about ${artwork.title}`)}`}>Ask about this work</a>
          </div>
          <p className="art-sub" style={{ marginTop: 22 }}>
            Worldwide shipping from Serbia is arranged individually and confirmed before payment. PayPal or bank transfer can be arranged after availability is confirmed.
          </p>
        </aside>
      </div>
    </main>
  );
}
