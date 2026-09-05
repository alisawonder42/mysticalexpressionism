"use client";

import { useEffect, useRef } from "react";
import { PROCESS_VIDEO_SRC } from "../data/copy";

// Vinext SSR emits React prop names (autoPlay / playsInline). iOS Safari
// requires the real HTML attributes at parse time for muted inline autoplay.
const PROCESS_VIDEO_HTML = `<video autoplay muted loop playsinline webkit-playsinline preload="auto" disablepictureinpicture>
<source src="${PROCESS_VIDEO_SRC}" type="video/mp4" />
Your browser cannot play this video.
</video>`;

function prepareInlineAutoplay(video: HTMLVideoElement) {
  video.defaultMuted = true;
  video.muted = true;
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.controls = false;
  video.setAttribute("autoplay", "");
  video.setAttribute("muted", "");
  video.setAttribute("loop", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.removeAttribute("controls");
}

export function ProcessVideo({ label = "Process" }: { label?: string }) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = frameRef.current?.querySelector("video");
    if (!video) return;

    prepareInlineAutoplay(video);

    const tryPlay = () => {
      prepareInlineAutoplay(video);
      void video.play().catch(() => undefined);
    };

    tryPlay();
    video.addEventListener("loadedmetadata", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) tryPlay();
      },
      { threshold: 0.15 },
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      observer.disconnect();
    };
  }, []);

  return (
    <figure className="process-video">
      <div
        className="process-video-frame"
        ref={frameRef}
        dangerouslySetInnerHTML={{ __html: PROCESS_VIDEO_HTML }}
      />
      <figcaption>{label}</figcaption>
    </figure>
  );
}
