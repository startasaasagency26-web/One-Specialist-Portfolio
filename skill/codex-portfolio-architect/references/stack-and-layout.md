# Stack and Layout Guide

## Default stack choice

Use this by default for premium company portfolio builds:

- **Framework:** Next.js App Router + TypeScript
- **Styling:** Tailwind CSS
- **General motion:** Motion
- **Advanced scroll choreography:** GSAP
- **3d:** three + @react-three/fiber + @react-three/drei
- **Deployment:** Vercel

## Stack decision rules

### Use Motion when
- revealing sections on scroll
- animating text or cards into view
- creating layout transitions
- adding microinteraction polish
- building simple parallax or progress indicators

### Use GSAP when
- sections must scrub to scroll precisely
- timelines coordinate many elements at once
- pinning/sticky storytelling is central to the experience
- fine easing control matters

### Use React Three Fiber when
- the user explicitly wants 3d
- the 3d object is a signature part of the brand story
- depth, lighting, and camera motion matter more than static illustration

### Do not use WebGL when
- a video, image sequence, or layered DOM composition will do the job
- the device experience matters more than visual flexing
- the site content is thin and cannot justify cinematic treatment

## Layout system defaults

- container widths should feel premium, not cramped
- headlines should carry most of the visual weight
- section rhythm should alternate between release and compression
- every dense section should be followed by a cleaner, calmer section
- give hero sections room to breathe before introducing detail

## Portfolio page priorities

1. Hero
2. Service or capability explanation
3. Social proof or trust
4. Process or operating model
5. Strong closing CTA

## Common mistakes

- trying to make every section immersive
- stacking too many visual treatments in one viewport
- turning a company profile into an agency cliche page
- using long paragraphs where one sentence would be stronger
- picking a fancy stack before deciding what story the page tells
