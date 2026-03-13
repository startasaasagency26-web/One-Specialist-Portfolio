"use client";

import { AlertCircle, Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type HeroVideoMediaProps = {
  className?: string;
};

export function HeroVideoMedia({ className = "" }: HeroVideoMediaProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !canPlay) {
      return;
    }

    if (reduceMotion) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    const playPromise = video.play();

    if (!playPromise) {
      return;
    }

    playPromise
      .then(() => setAutoplayBlocked(false))
      .catch(() => setAutoplayBlocked(true));
  }, [canPlay, reduceMotion]);

  async function handleManualPlay() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    try {
      await video.play();
      setAutoplayBlocked(false);
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }

  return (
    <div
      className={[
        "absolute flex items-center justify-center overflow-hidden pointer-events-none",
        className,
      ].join(" ")}
    >
      {/* Extremely Subtle Brand Glow - Expanded */}
      <div className="absolute inset-x-0 top-1/2 h-[60%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,179,71,0.06),transparent_65%)]" />
      
      {/* Centered Atmospheric Masking - Wider and Clearer */}
      <div className="absolute inset-0 [mask-image:radial-gradient(140%_100%_at_50%_50%,black_40%,transparent_85%)] [-webkit-mask-image:radial-gradient(140%_100%_at_50%_50%,black_40%,transparent_85%)]">
        <motion.div
          animate={reduceMotion ? {} : {
            y: [0, -12, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full w-full"
        >
          <video
            ref={videoRef}
            className="h-full w-full translate-x-[2%] translate-y-[1%] scale-[1.3] object-contain opacity-[0.78] [filter:saturate(0.6)_contrast(0.98)_brightness(0.98)_blur(0.8px)] md:scale-[1.4] lg:translate-x-[5%] lg:scale-[1.62]"
            src="/media/one-mobile-store-hero.mp4"
            autoPlay={!reduceMotion}
            muted
            loop={!reduceMotion}
            playsInline
            preload="metadata"
            onCanPlay={() => setCanPlay(true)}
            onLoadedData={() => setCanPlay(true)}
            onError={() => setFailed(true)}
          />
        </motion.div>
      </div>
      
      {/* Cinematic Blending Overlays - Side-to-Side Focus */}
      <div className="absolute inset-y-0 left-0 w-[30%] bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.7)_50%,transparent_100%)] z-10" />
      <div className="absolute inset-y-0 right-0 w-[20%] bg-[linear-gradient(270deg,#ffffff_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] z-10" />
      <div className="absolute inset-x-0 top-0 h-[25%] bg-[linear-gradient(180deg,#ffffff_0%,transparent_100%)] z-10" />
      <div className="absolute inset-x-0 bottom-0 h-[25%] bg-[linear-gradient(0deg,#ffffff_0%,transparent_100%)] z-10" />
      
      {/* Luminous Core Glow */}
      <div className="absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2 h-[50%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_70%)] blur-[120px] z-10 pointer-events-none" />

      {(autoplayBlocked || failed || reduceMotion) && (
        <div className="pointer-events-auto absolute bottom-6 left-6 z-20 flex">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xs rounded-[1.5rem] border border-black/8 bg-white/78 p-4 shadow-[0_18px_50px_-24px_rgba(17,17,17,0.18)] backdrop-blur-2xl"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(225,6,0,0.12)_0%,rgba(255,77,26,0.14)_48%,rgba(255,179,71,0.18)_100%)] text-[var(--brand-red-orange)]">
              {failed ? <AlertCircle size={18} /> : <Play size={18} />}
            </div>
            <p className="mt-4 font-display text-lg font-semibold tracking-[-0.03em] text-ink">
              {failed
                ? "Hero video unavailable"
                : reduceMotion
                  ? "Motion paused for accessibility"
                  : "Tap to play the hero video"}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              {failed
                ? "The hero stays composed even if the asset cannot load."
                : reduceMotion
                  ? "Reduced motion keeps the hero calmer, with manual playback still available."
                  : "Autoplay was blocked, so manual playback is available."}
            </p>
            {!failed && (
              <button
                type="button"
                onClick={handleManualPlay}
                className="mt-4 inline-flex items-center rounded-full bg-[linear-gradient(135deg,var(--brand-red)_0%,var(--brand-red-orange)_48%,var(--brand-amber)_100%)] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_44px_-24px_rgba(225,6,0,0.45)]"
              >
                Play video
              </button>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
