"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function VideoPlayer({ stream }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !stream) return;

    let hls;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = stream;
    } else if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(stream);
      hls.attachMedia(video);
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [stream]);

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      playsInline
      className="aspect-video w-full rounded-2xl bg-black"
    />
  );
}