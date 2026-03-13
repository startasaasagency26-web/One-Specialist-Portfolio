# Deployment Guide

## Target host

Vercel

## Expected project settings

- Framework preset: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`
- Output setting: default Next.js output

## Environment variables

No environment variables are required for the current static portfolio build.

If you later add:

- WhatsApp deep links via config
- contact form providers
- analytics
- CMS-backed content

add the related environment variables in Vercel before enabling those features.

## Static media asset

- The hero animation is served from `public/media/one-mobile-store-hero.mp4`.
- Keep this file in the repository so Vercel deploys it as a static asset.
- If the asset is replaced later, keep the file path stable or update `src/components/media/hero-video-media.tsx`.

## Deploy steps

1. Import the Git repository into Vercel.
2. Keep the detected Next.js framework settings.
3. Trigger the first production deployment.
4. Open the deployed site and test the homepage on mobile and desktop.

## Post-deploy checks

- Confirm the sticky header is readable over the hero
- Confirm the hero animation loads without layout shift
- Confirm the hero video autoplays muted and inline
- Confirm the reduced-motion and manual-play fallbacks still work
- Confirm anchor navigation scrolls to the correct sections
- Confirm typography and spacing stay consistent after deployment
- Confirm the final contact placeholders are replaced before a public launch
