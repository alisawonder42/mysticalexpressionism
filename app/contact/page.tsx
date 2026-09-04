import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mladen Ilic about available paintings, private commissions and collector enquiries."
};

export default function ContactPage() {
  return (
    <main className="page">
      <div className="page-intro">
        <div className="eyebrow">Collector enquiries</div>
        <h1>Contact</h1>
        <p>
          For acquisition enquiries, shipping questions, private commissions or studio-list requests, contact Mladen directly.
        </p>
      </div>
      <div className="content-narrow">
        <p><strong>Email</strong><br />mysticalexpressionismpaintings@gmail.com</p>
        <p><strong>Instagram</strong><br />@mysticalexpressionism</p>
        <p>
          Worldwide shipping is available from Serbia. Shipping method, cost and delivery estimate are confirmed individually before payment.
        </p>
        <a className="button" href="mailto:mysticalexpressionismpaintings@gmail.com">Send an email</a>
      </div>
    </main>
  );
}
