# Animation Notes

## Reference roles

The hero was designed using the two uploaded videos with different responsibilities:

- **Video 1** defines the motion mood:
  - calmer pacing
  - premium framing
  - stage presence
  - how dominant the hero media should feel
- **Video 2** defines the product feel:
  - object presence
  - device styling
  - how the phone sits inside the hero chamber
  - the final live hero asset used on the page

## Live asset

- Runtime file: `public/media/one-mobile-store-hero.mp4`
- Integration component: `src/components/media/hero-video-media.tsx`

## Motion system

- **Motion** handles:
  - subtle hero entrance
  - light hero parallax split
  - section reveal-ins
  - mobile nav transitions
- **GSAP**:
  - not used

## Hero intent

The hero is designed to feel:

- minimal
- premium
- editorial
- visually quiet
- animation-led

The copy is intentionally short so the media does more of the emotional work.

## Video behavior

- `autoPlay`
- `muted`
- `loop`
- `playsInline`
- reduced-motion pause behavior
- manual play fallback when autoplay is blocked
- graceful error fallback if the asset fails to load
