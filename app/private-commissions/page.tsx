import type { Metadata } from "next";
import { ARTIST_IN_STUDIO, CONTACT_EMAIL } from "../data/copy";

export const metadata: Metadata = {
  title: "Private Commissions",
  description: "Discuss a privately commissioned original work by Mladen Ilic.",
};

export default function PrivateCommissionsPage() {
  return (
    <main className="page">
      <div className="page-intro">
        <div className="section-label">Private work</div>
        <h1>Private Commissions</h1>
        <p>
          Mladen accepts a limited number of private commissions. A commission is not a
          reproduction of an existing image or a tightly prescribed illustration; it is an
          original work developed through his own process in conversation with the collector.
        </p>
      </div>
      <div className="split">
        <div className="content-narrow">
          <h2>How it begins</h2>
          <p>
            The conversation can start with dimensions, the space where the work will live, a
            state or idea that matters to you, or simply an affinity with a particular body of
            Mladen’s work.
          </p>
          <p>
            Once the direction, scale, timing and price are agreed, Mladen begins the painting
            without fixing its final image in advance. The work is allowed to develop through
            the same intuitive process as the rest of his practice.
          </p>
          <p>
            Progress can be shared selectively, but the painting remains an authored work rather
            than a design executed to specification.
          </p>
          <a
            className="button"
            href={`mailto:${CONTACT_EMAIL}?subject=Private%20commission%20enquiry`}
          >
            Discuss a commissioned work
          </a>
        </div>
        <figure className="portrait-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ARTIST_IN_STUDIO} alt="Mladen Ilic in the studio" />
        </figure>
      </div>
    </main>
  );
}
