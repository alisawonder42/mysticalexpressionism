import type { Metadata } from "next";
import Link from "next/link";
import { ABOUT_PARAGRAPHS, ARTIST_PORTRAIT } from "../data/copy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mladen Ilic is a Serbian painter and professor of Serbian language and literature, based in Novi Sad, Serbia.",
};

export default function AboutPage() {
  return (
    <main className="page">
      <div className="page-intro">
        <div className="section-label">About the artist</div>
        <h1>Mladen Ilic</h1>
      </div>
      <div className="split">
        <div className="content-narrow">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <Link className="text-link" href="/process">
              Read about the process
            </Link>
          </p>
        </div>
        <figure className="portrait-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ARTIST_PORTRAIT} alt="Mladen Ilic in his studio" />
        </figure>
      </div>
    </main>
  );
}
