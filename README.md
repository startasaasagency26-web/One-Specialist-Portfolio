# 1 Mobile Store Landing Page

Minimal premium landing page for **1 Mobile Store (One Specialist Mobile)**, built as an animation-led homepage with a warm white palette, restrained red-orange accents, and compact brand copy.

## Project overview

This version intentionally keeps the page quiet and focused:

- Hero-led first screen with the animation doing most of the visual work
- Minimal section structure: `Hero`, `About`, `Services`, `Why Us`, `Contact`
- Real business facts only
- Bright editorial layout instead of a brochure-style company page

## Video direction

Two uploaded videos informed the hero in different ways:

- **Video 1**: used as the motion and framing reference
  - stage presence
  - calm pacing
  - premium visual dominance
  - how much space the object should command
- **Video 2**: used as the product/object reference and final live hero asset
  - object presence
  - device feel
  - product integration cues
  - luxury-tech tone inside the hero stage

The live hero video is served from:

```text
public/media/one-mobile-store-hero.mp4
```

## Stack

- **Next.js 16 App Router**
- **TypeScript**
- **Tailwind CSS 4**
- **Motion**
- **HTML5 video**
- **Vercel-ready structure**

## Local development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

## Project structure

```text
src/
  app/
  components/
    layout/
    media/
    providers/
    sections/
    shared/
  content/
  lib/
public/
  media/
    one-mobile-store-hero.mp4
docs/
  animation-notes.md
  deployment.md
  qa-checklist.md
```

## Hero implementation

- Main layout: compact left copy block and larger right-side media stage
- Hero media: `src/components/media/hero-video-media.tsx`
- Hero section: `src/components/sections/hero-section.tsx`
- Video behavior:
  - `autoPlay`
  - `muted`
  - `loop`
  - `playsInline`
  - reduced-motion fallback
  - manual play fallback if autoplay is blocked

## Deployment

See [deployment guide](./docs/deployment.md).
