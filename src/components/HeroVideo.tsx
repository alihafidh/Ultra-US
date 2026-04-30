"use client";

import { useRef, useEffect, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setLoaded(true);
    video.addEventListener("canplay", handleCanPlay);

    // Attempt to play (browsers may block autoplay)
    video.play().catch(() => {});

    return () => video.removeEventListener("canplay", handleCanPlay);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      <source
        src="https://videos.pexels.com/video-files/4292902/4292902-hd_1920_1080_25fps.mp4"
        type="video/mp4"
      />
    </video>
  );
}
