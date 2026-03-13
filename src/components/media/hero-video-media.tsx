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
        "pointer-events-none absolute overflow-hidden",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 rounded-[3.6rem] bg-[radial-gradient(circle_at_62%_34%,rgba(255,255,255,0.28),transparent_24%),radial-gradient(circle_at_76%_56%,rgba(255,77,26,0.1),transparent_28%),radial-gradient(circle_at_46%_70%,rgba(255,179,71,0.1),transparent_30%)]" />
      <div className="absolute inset-y-0 left-0 w-[58%] bg-[linear-gradient(90deg,#f7f7f5_0%,rgba(247,247,245,0.98)_18%,rgba(247,247,245,0.92)_34%,rgba(247,247,245,0.74)_46%,rgba(247,247,245,0.36)_60%,transparent_100%)]" />
      <div className="absolute inset-y-0 right-0 w-[18%] bg-[linear-gradient(90deg,transparent_0%,rgba(247,247,245,0.18)_48%,#f7f7f5_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[20%] bg-[linear-gradient(180deg,#f7f7f5_0%,rgba(247,247,245,0.62)_74%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-[linear-gradient(180deg,transparent_0%,rgba(247,247,245,0.62)_58%,#f7f7f5_100%)]" />
      <div className="absolute inset-0 rounded-[3.6rem] [mask-image:radial-gradient(88%_84%_at_68%_50%,black_48%,transparent_100%)] [-webkit-mask-image:radial-gradient(88%_84%_at_68%_50%,black_48%,transparent_100%)]">
        <video
          ref={videoRef}
          className="h-full w-full translate-x-[8%] translate-y-[3%] scale-[1.18] object-contain opacity-[0.82] [filter:saturate(0.66)_contrast(0.88)_brightness(0.98)_blur(0.8px)] md:translate-x-[12%] md:scale-[1.22] lg:translate-x-[18%] lg:translate-y-[4%] lg:scale-[1.28]"
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
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(247,247,245,0.06)_0%,rgba(247,247,245,0.02)_34%,rgba(247,247,245,0.16)_58%,rgba(247,247,245,0.36)_100%)]" />
      <div className="absolute right-[14%] top-[8%] h-[24%] w-[20%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.44),transparent_74%)] blur-3xl" />
      <div className="absolute left-[44%] bottom-[12%] h-[14%] w-[28%] rounded-full bg-[radial-gradient(circle,rgba(225,6,0,0.1),rgba(255,179,71,0.06),transparent_72%)] blur-3xl" />

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
