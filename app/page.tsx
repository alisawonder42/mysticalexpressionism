import Link from "next/link";
import { ArtworkCard } from "./components/ArtworkCard";
import { ProcessVideo } from "./components/ProcessVideo";
import { homepageArtworks } from "./data/artworks";
import { NotifyForm } from "./components/NotifyForm";
import {
  ABOUT_PARAGRAPHS,
  ARTIST_PORTRAIT,
  CONTACT_EMAIL,
  PROCESS_PARAGRAPHS,
} from "./data/copy";

export default function HomePage() {
  return (
    <main>
      <section className="hero-artist">
        <div className="hero-artist-head">
          <div className="eyebrow">Painter · Novi Sad, Serbia</div>
          <h1>Mladen Ilic</h1>
        </div>
        <figure className="hero-portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ARTIST_PORTRAIT} alt="Portrait of Mladen Ilic" />
        </figure>
      </section>

      <section className="home-section" id="about">
        <div className="section-label">About</div>
        <div className="about-lede">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-head">
          <div>
            <div className="section-label">Paintings</div>
            <h2>Latest works</h2>
          </div>
          <p>
            Each painting is a unique work, signed and accompanied by a certificate of
            authenticity. Surfaces are often more physical and layered than a screen can
            reproduce.
          </p>
        </div>
        <div className="art-grid">
          {homepageArtworks.map((artwork) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>
        <Link className="text-link" href="/works">
          View all works
        </Link>
      </section>

      <section className="home-section" id="process">
        <div className="section-label">Process</div>
        <h2>Process</h2>
        <ProcessVideo />
        <div className="content-narrow process-copy">
          {PROCESS_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="closing">
        <div className="section-label">Enquiries</div>
        <h2>Acquire a work directly.</h2>
        <p>
          Available paintings are acquired through a direct enquiry. Availability and
          shipping are confirmed personally before any payment. Worldwide shipping is
          arranged from Serbia.
        </p>
        <div className="actions">
          <Link className="button" href="/works">
            Explore available works
          </Link>
          <a className="button" href={`mailto:${CONTACT_EMAIL}`}>
            Contact Mladen
          </a>
        </div>
        <div className="notify-block">
          <div className="section-label">New work</div>
          <p>Leave your email to be notified when new paintings become available.</p>
          <NotifyForm />
        </div>
      </section>
    </main>
  );
}
