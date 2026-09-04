import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { NotifyForm } from "../components/NotifyForm";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "../data/copy";
import { ARTIST_PORTRAIT, PORTRAIT_OG_IMAGE, contactPageJsonLd } from "../lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mladen Ilic (Mladen Ilić), painter in Novi Sad, about available original paintings and collector enquiries. Also on Artfinder and Instagram.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Mladen Ilic (Mladen Ilić)",
    description:
      "Collector enquiries for original paintings by Mladen Ilic, painter in Novi Sad. Known on Artfinder as Mladen Ilić.",
    url: "/contact",
    type: "website",
    images: [PORTRAIT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mladen Ilic (Mladen Ilić)",
    description:
      "Collector enquiries for original paintings by Mladen Ilic, painter in Novi Sad. Known on Artfinder as Mladen Ilić.",
    images: [ARTIST_PORTRAIT],
  },
};

export default function ContactPage() {
  return (
    <main className="page">
      <JsonLd data={contactPageJsonLd()} />
      <div className="page-intro">
        <div className="section-label">Collector enquiries</div>
        <h1>Contact</h1>
        <p>
          For acquisition enquiries, shipping questions or to be notified when new
          paintings and exhibitions become available, contact Mladen directly.
        </p>
      </div>
      <div className="content-narrow">
        <p>
          <strong>Email</strong>
          <br />
          {CONTACT_EMAIL}
        </p>
        <p>
          <strong>Instagram</strong>
          <br />
          <a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer me">
            @mysticalexpressionism
          </a>
        </p>
        <p>
          Worldwide shipping is available from Serbia. Shipping method, cost and delivery
          estimate are confirmed individually before payment.
        </p>
        <div className="actions">
          <a className="button" href={`mailto:${CONTACT_EMAIL}`}>
            Send an email
          </a>
        </div>
        <div className="notify-block">
          <div className="section-label">New work</div>
          <p>Leave your email to be notified when new paintings and exhibitions become available.</p>
          <NotifyForm />
        </div>
      </div>
    </main>
  );
}
