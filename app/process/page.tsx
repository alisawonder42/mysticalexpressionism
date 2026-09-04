import type { Metadata } from "next";
import Link from "next/link";
import { ProcessVideo } from "../components/ProcessVideo";
import { PROCESS_PARAGRAPHS } from "../data/copy";

export const metadata: Metadata = {
  title: "Process",
  description:
    "An intuitive, material-driven practice: oil on canvas combined with oil pastel, gesso and, at times, rice, earth and other found elements.",
};

export default function ProcessPage() {
  return (
    <main className="page">
      <div className="page-intro">
        <div className="section-label">Studio / Process</div>
        <h1>Process</h1>
      </div>
      <ProcessVideo />
      <div className="content-narrow process-copy">
        {PROCESS_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <Link className="text-link" href="/works">
            View available works
          </Link>
        </p>
      </div>
    </main>
  );
}
