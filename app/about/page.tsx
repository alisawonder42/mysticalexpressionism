import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Serbian painter Mladen Ilic and his long, intuitive painting process."
};

export default function AboutPage() {
  return (
    <main className="page">
      <div className="page-intro">
        <div className="eyebrow">About the artist</div>
        <h1>Mladen Ilic</h1>
      </div>
      <div className="split">
        <div className="content-narrow">
          <p>
            Mladen Ilic is a Serbian painter and literature professor. He began painting around the age of ten and continued for years before selling a work, building his practice outside the logic of trends, academic expectations or commercial production.
          </p>
          <p>
            Literature remains close to the way he thinks: images emerge as states rather than illustrations. Fear, love, exhaustion, consciousness, acceptance, desire and uncertainty appear through the human figure and through surfaces that are repeatedly built, erased and returned to.
          </p>
          <p className="quote">“Painting is the vibration of my hand following my inner dialogue.”</p>
          <p>
            He does not begin with a finished image in mind. A painting may take thirty to fifty hours, while some continue for one or two hundred. Others return to the studio after months or years and are worked again. Completion is not a deadline; it is the point at which the work no longer asks to be changed.
          </p>
          <p>
            Mladen has sold more than 150 original works to collectors internationally and has been selling through Artfinder since 2016, where his work has received 73 verified collector reviews.
          </p>
        </div>
        <div className="process-media">
          <img src="https://static.wixstatic.com/media/8ffb5c_d94e77cffeac4003b93555d87b6bca97~mv2.jpg" alt="Portrait of Mladen Ilic" />
        </div>
      </div>
    </main>
  );
}
