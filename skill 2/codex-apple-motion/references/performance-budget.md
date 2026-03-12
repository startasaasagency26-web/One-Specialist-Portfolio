# Performance Budget

## Default assumptions

Build for mid-range mobile first, not just high-end desktop demos.

## Practical limits

- one active WebGL canvas on screen at a time
- one hero-quality 3d scene by default
- one pinned sequence at a time
- avoid stacking heavy blur, video, WebGL, and scroll scrubbing in the same viewport

## Simplification ladder

If performance drops, remove in this order:

1. decorative layers
2. non-essential blur and shadow intensity
3. continuous idle animations
4. secondary 3d sections
5. scrub complexity
6. replace real-time 3d with prerecorded media

## Mobile-first compromises

- shorter timelines
- reduced parallax distance
- fewer simultaneous animated elements
- simpler lights and materials
- reduced texture sizes

## Fallback hierarchy

Best: simplified live effect
Good: video or image sequence
Acceptable: static premium image

A stable experience beats a clever one that stutters.
