"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export function HeroVideoMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Autoplay blocked:", err);
        setIsPlaying(false);
      }
    };

    playVideo();
  }, []);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasInteracted(true);
    }
  };

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

      {/* Fallback Play Button if Autoplay fails */}
      {!isPlaying && !hasInteracted && (
        <button
          onClick={handleManualPlay}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-sm transition hover:bg-black/30"
        >
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-full border border-white/20 bg-brand-gradient text-white shadow-2xl">
            <Play size={24} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-widest">Preview</span>
          </div>
        </button>
      )}
    </div>
  );
}
