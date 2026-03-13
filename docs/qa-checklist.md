# QA Checklist

## Build integrity

- Run `npm run lint`
- Run `npm run build`
- Confirm there are no TypeScript errors

## Responsive review

Check these breakpoints:

- mobile
- tablet
- laptop
- wide desktop

Review:

- hero composition and text wrapping
- sticky header spacing
- card grid stacking
- showcase panel cropping
- CTA spacing and readability

## Motion review

- Confirm section reveals feel consistent
- Confirm hover motion is subtle and not noisy
- Confirm the hero scroll cue is not distracting
- Confirm reduced-motion preference removes unnecessary movement

## Hero media review

- Confirm the uploaded `.mp4` plays correctly in the hero
- Confirm autoplay works while muted and inline
- Confirm manual play fallback appears if autoplay is blocked
- Confirm reduced-motion keeps the hero calmer
- Confirm the video scales cleanly on mobile and desktop

## Content review

- Confirm no fake testimonials, awards, or statistics are introduced
- Confirm the 2007 founding, Sunway Pyramid location, 4.9-star rating, and service details are all present
- Confirm only the missing business details remain placeholders, such as WhatsApp number or opening hours
- Confirm section headlines remain concise and premium

## Launch handoff

- README included
- animation notes included
- QA checklist included
- deployment guide included
