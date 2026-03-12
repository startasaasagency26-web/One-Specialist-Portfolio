---
name: codex-apple-motion
description: motion direction, scroll choreography, and selective 3d planning for premium websites with apple-style restraint. use when chatgpt needs to design or implement cinematic section reveals, sticky storytelling, parallax, timeline sequencing, device-like polish, subtle depth, performance budgets, reduced-motion fallbacks, or interaction specs for modern react and next.js sites.
---

# Codex Apple Motion

Premium motion is controlled, deliberate, and expensive-looking.

## Motion philosophy

Use motion to do one of four jobs:

- guide attention
- explain spatial relationships
- increase perceived craftsmanship
- support conversion

If an animation does none of those, cut it.

## Motion stack split

Default ownership:

- **CSS/Tailwind transitions** for hover, focus, opacity, color, blur, and simple transforms
- **Motion** for in-view reveals, layout transitions, progress indicators, text staggers, and lightweight parallax
- **GSAP** for scrubbed sequences, pinned sections, overlapping timelines, and exact sequencing
- **React Three Fiber** for real-time 3d scenes only when depth or camera movement is central to the story

Do not solve every animation problem with GSAP. Do not use WebGL for decoration.

## Workflow

1. Build a motion map
   For each section decide:
   - entry behavior
   - scroll-linked behavior
   - idle behavior
   - exit behavior
   - fallback behavior

2. Assign the correct engine
   - simple reveal → Motion or CSS
   - synchronized timeline → GSAP
   - real 3d lighting/camera/object motion → React Three Fiber

3. Decide whether the section deserves pinning
   Pin only when the section is carrying narrative weight. Too much pinning makes the site feel trapped.

4. Reduce before adding
   Remove at least one idea from every motion-heavy section.

5. Add accessibility and fallback rules
   Every animation system must degrade cleanly for reduced-motion users and slower devices.

## Apple-style motion rules

- Favor easing that feels precise and calm, not springy and playful.
- Use longer section pacing with fewer simultaneous moves.
- Let opacity, scale, blur, translation, and masking do most of the work.
- Keep rotations minimal unless the object itself justifies it.
- Use parallax as depth, not as a party trick.
- A single polished transition is worth more than five clever ones.

## 3d rules

Default limit for a company portfolio site:

- one hero 3d scene
- one secondary depth moment only if justified

Prefer:
- product-like objects
- floating panels with subtle camera motion
- reflective materials used sparingly
- slow, deliberate movement

Avoid:
- heavy particle fields
- endless object rotation
- noisy shaders
- permanent motion in every viewport
- multiple canvases fighting for attention

## Performance rules

- Lazy load 3d sections.
- Keep WebGL off pages that do not need it.
- Use compressed models and textures.
- Kill timelines and listeners on unmount.
- Prefer transform and opacity over layout-thrashing properties.
- Mobile experience matters more than desktop flexing.
- When performance is questionable, replace the 3d idea with video, image sequences, or layered DOM.

## Accessibility rules

Always provide:

- `prefers-reduced-motion` handling
- readable content without relying on animation to reveal meaning
- keyboard-safe interactions
- fallbacks when WebGL is unsupported

Do not hide critical copy inside animation-only states.

## Output format

# Motion direction

## 1. experience summary
- how motion should feel
- what the page is trying to communicate

## 2. section motion map
For each section:
- goal
- motion type
- engine choice
- trigger
- fallback

## 3. 3d usage plan
- where 3d appears
- what object or scene exists
- why it deserves WebGL
- lazy-loading or fallback notes

## 4. performance guardrails
- likely heavy areas
- simplification strategies

## 5. implementation notes
- where CSS is enough
- where Motion is enough
- where GSAP is required
- where client components are required

## 6. reduced-motion plan
- what changes or turns off

## Bundled references

- `references/motion-rules.md` — motion patterns and anti-patterns
- `references/performance-budget.md` — practical limits for premium but sane implementations
