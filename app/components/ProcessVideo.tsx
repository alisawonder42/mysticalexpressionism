import { PROCESS_VIDEO_SRC } from "../data/copy";

export function ProcessVideo({ label = "Process" }: { label?: string }) {
  return (
    <figure className="process-video">
      <video autoPlay loop muted playsInline controls preload="auto">
        <source src={PROCESS_VIDEO_SRC} type="video/mp4" />
        Your browser cannot play this video.
      </video>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
