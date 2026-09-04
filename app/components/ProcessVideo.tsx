import { PROCESS_VIDEO_SRC } from "../data/copy";

// The studio film is added to public/ by the artist and may be absent in a
// given deploy. Nothing here depends on the file existing: if it is missing the
// browser renders an inert player and the surrounding page is unaffected.
export function ProcessVideo({ label = "Studio / Process" }: { label?: string }) {
  return (
    <figure className="process-video">
      <video controls muted playsInline preload="metadata">
        <source src={PROCESS_VIDEO_SRC} type="video/mp4" />
        Your browser cannot play this video.
      </video>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
