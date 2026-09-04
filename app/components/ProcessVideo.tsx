import { PROCESS_VIDEO_SRC } from "../data/copy";

export function ProcessVideo({ label = "Process" }: { label?: string }) {
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
