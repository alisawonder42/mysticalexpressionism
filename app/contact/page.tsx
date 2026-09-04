import type { Metadata } from "next";
import { NotifyForm } from "../components/NotifyForm";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "../data/copy";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mladen Ilic about available paintings and collector enquiries.",
};

export default function ContactPage() {
  return (
    <main className="page">
      <div className="page-intro">
        <div className="section-label">Collector enquiries</div>
        <h1>Contact</h1>
        <p>
          For acquisition enquiries, shipping questions or to be notified when new
          paintings become available, contact Mladen directly.
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
          <a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
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
          <p>Leave your email to be notified when new paintings become available. The notice is sent to mysticalexpressionismpaintings@gmail.com.</p>
          <NotifyForm />
        </div>
      </div>
    </main>
  );
}
