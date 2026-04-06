"use client";

import { useEffect, useRef } from "react";

export function HeroVideoMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    };

    playVideo();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#FFFFFF]">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.4)_70%,#FFFFFF_100%)]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#FFFFFF] via-transparent to-[#FFFFFF]" />
      <div className="absolute inset-0 z-10 bg-[#FFFFFF]/40" />

      {/* Brand Glow Overlay */}
      <div className="absolute inset-0 z-10 bg-brand-gradient opacity-5 mix-blend-overlay" />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover opacity-50 contrast-125 brightness-75 grayscale-[0.5] transition-opacity duration-1000"
        src="/media/one-mobile-store-hero.mp4"
      />
    </div>
  );
}
