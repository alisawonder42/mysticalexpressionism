import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Commissions",
  description: "Discuss a privately commissioned original work by Mladen Ilic."
};

export default function PrivateCommissionsPage() {
  return (
    <main className="page">
      <div className="page-intro">
        <div className="eyebrow">Private work</div>
        <h1>Private Commissions</h1>
        <p>
          Mladen accepts a limited number of private commissions. A commission is not a reproduction of an existing image or a tightly prescribed illustration; it is an original work developed through his own process in conversation with the collector.
        </p>
      </div>
      <div className="split">
        <div className="content-narrow">
          <h2 style={{ fontSize: "2.4rem" }}>How it begins</h2>
          <p>
            The conversation can start with dimensions, the space where the work will live, a state or idea that matters to you, or simply an affinity with a particular body of Mladen’s work.
          </p>
          <p>
            Once the direction, scale, timing and price are agreed, Mladen begins the painting without fixing its final image in advance. The work is allowed to develop through the same slow, intuitive process as the rest of his practice.
          </p>
          <p>
            Progress can be shared selectively, but the painting remains an authored work rather than a design executed to specification.
          </p>
          <a className="button" href="mailto:mysticalexpressionismpaintings@gmail.com?subject=Private%20commission%20enquiry">Discuss a commissioned work</a>
        </div>
        <div className="process-media">
          <img src="https://static.wixstatic.com/media/8ffb5c_5bf024e614d24878ac8763840c393bab~mv2.jpg" alt="Mladen Ilic in the studio" />
        </div>
      </div>
    </main>
  );
}
