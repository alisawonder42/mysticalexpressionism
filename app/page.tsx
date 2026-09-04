import Link from "next/link";
import { featuredArtworks } from "./data/artworks";

export default function HomePage() {
  const hero = featuredArtworks[0];

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Contemporary painter · Serbia</div>
          <h1>Mladen<br />Ilic</h1>
          <p>
            Paintings built slowly through intuition, revision and return — where the human figure becomes a carrier of inner states rather than a fixed portrait.
          </p>
          <p className="signature">“Painting is the vibration of my hand following my inner dialogue.”</p>
        </div>
        <Link className="hero-art" href={`/works/${hero.slug}`} aria-label={`View ${hero.title}`}>
          <img src={hero.image} alt={hero.title} />
        </Link>
      </section>

      <section className="home-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Selected works</div>
            <h2>Recent paintings</h2>
          </div>
          <p>
            Each work is one of a kind, signed and accompanied by a certificate of authenticity. The surface is often more physical and layered than a screen can reproduce.
          </p>
        </div>

        <div className="art-grid">
          {featuredArtworks.map((artwork) => (
            <Link className="art-card" href={`/works/${artwork.slug}`} key={artwork.slug}>
              <div className="art-card-image"><img src={artwork.image} alt={artwork.title} /></div>
              <div className="art-meta">
                <div>
                  <div className="art-title">{artwork.title}</div>
                  <div className="art-sub">{artwork.year} · {artwork.size}</div>
                </div>
                <div className="price">{artwork.price}</div>
              </div>
            </Link>
          ))}
        </div>
        <Link className="text-link" href="/works">View all works →</Link>
      </section>

      <section className="home-section split">
        <div className="split-copy">
          <div className="eyebrow">The practice</div>
          <h2>Paintings that are allowed to become.</h2>
          <p>
            Mladen Ilic has painted since childhood. Trained in literature and working as a literature professor, he approaches painting without a predetermined image. A work can take thirty, fifty, one hundred or more hours — and may be reopened years later when it still feels unfinished.
          </p>
          <p>
            Recent works have become more figurative, but the figure is never merely descriptive. It carries fatigue, acceptance, consciousness, desire, fear or release. Layers of oil, pastel and gesso accumulate until the image feels resolved rather than simply completed.
          </p>
          <div className="stat-row">
            <div className="stat"><strong>150+</strong><span>original works collected internationally</span></div>
            <div className="stat"><strong>73</strong><span>verified collector reviews on Artfinder</span></div>
            <div className="stat"><strong>2016</strong><span>selling internationally through Artfinder since</span></div>
          </div>
        </div>
        <div className="process-media">
          <img src="https://static.wixstatic.com/media/8ffb5c_7f413cb9c30d48ccb05d14870de75e48~mv2.jpg" alt="Mladen Ilic in the studio" />
        </div>
      </section>

      <section className="home-section split">
        <div>
          <div className="eyebrow">For collectors</div>
          <h2>Acquire a work directly.</h2>
        </div>
        <div className="split-copy">
          <p>
            Available paintings can be acquired through a direct enquiry. Mladen confirms availability and shipping personally before payment, with PayPal or bank transfer arranged afterwards. Worldwide shipping is available from Serbia.
          </p>
          <Link className="button" href="/works">Explore available works</Link>
        </div>
      </section>

      <section className="newsletter">
        <div className="eyebrow">Private Studio List</div>
        <h2>See new work before it becomes public.</h2>
        <p>
          Private previews of new paintings, studio notes and process material that is not posted elsewhere. New works are shared with the list before public release.
        </p>
        <a className="button" href="mailto:mysticalexpressionismpaintings@gmail.com?subject=Private%20Studio%20List">Join the studio list</a>
      </section>
    </main>
  );
}
