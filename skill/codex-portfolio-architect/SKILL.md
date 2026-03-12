---
name: codex-portfolio-architect
description: architecture and implementation planning for premium company portfolio websites with apple-style restraint, cinematic section flow, and selective 3d. use when chatgpt needs to turn a brief, image reference, company profile, or rough idea into a build-ready sitemap, section blueprint, stack decision, component architecture, file structure, and codex-ready execution prompt for a modern react or next.js website.
---

# Codex Portfolio Architect

Turn vague direction into a buildable site plan.

## Default build standard

Unless the user explicitly overrides it, treat this as the default stack for premium portfolio work:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for viewport, layout, and simple scroll-linked UI motion
- GSAP for tightly choreographed timelines and scrubbed sequences
- React Three Fiber with Drei for selective 3d scenes
- Vercel-first deployment assumptions

Do not add more libraries just to sound advanced.

## Design interpretation rules

When a user says "apple-style", interpret it as:

- restrained, not flashy
- large typography with strong hierarchy
- heavy whitespace and clear alignment
- cinematic section pacing
- polished transitions with minimal clutter
- selective 3d or depth, not a theme park
- premium materials, shadows, blur, gradients, and reflections used sparingly

Do **not** imitate Apple's exact layouts, copy, product renders, or compositions. Extract principles, not clones.

## Workflow

Follow this sequence.

1. Extract the raw brief
   - Business type
   - Audience
   - Core offer
   - Trust signals
   - Desired mood
   - Provided references
   - Missing facts that must not be invented

2. Decide the site scope
   Default company portfolio structure:
   - Home
   - About
   - Services
   - Work or capability showcase
   - Process
   - FAQ or trust section
   - Contact

   Collapse to a single-page experience when the brief is thin or the brand is early-stage.

3. Build the narrative spine
   The page should move in this order:
   - Attention
   - Credibility
   - Capability
   - Differentiation
   - Conversion

   Every section must earn its place. Delete filler sections.

4. Choose the interaction model
   - **Mostly static premium site** → prioritize typography, spacing, media, and subtle motion
   - **Narrative scrolling showcase** → use sticky sections, progressive reveals, and a stronger motion system
   - **3d-led hero experience** → restrict 3d to the hero or one marquee section unless the brief clearly supports more

5. Lock the architecture
   Produce:
   - sitemap or page list
   - section-by-section blueprint
   - reusable component list
   - app folder structure
   - content model
   - animation ownership per section
   - implementation order

6. Write the codex build brief
   End with a single implementation brief that another coding agent can execute without guessing.

## Hard constraints

- Prefer one exceptional hero over many average effects.
- Default to one 3d hero scene and one secondary depth moment at most.
- Use DOM/CSS for anything that does not need WebGL.
- Avoid fake complexity: sliders, carousels, random blobs, overuse of glassmorphism, endless gradients, and decorative motion with no narrative purpose.
- Avoid smooth-scroll libraries by default. Only add one when the storytelling depends on it and accessibility is preserved.
- Do not invent business facts, statistics, customer names, awards, or years of experience.
- If the user provides only image references, separate **visual assumptions** from **business facts**.

## Output format

Use this structure unless the user asks for a different one.

# Website architecture

## 1. positioning summary
- who the company is
- what it offers
- what the site must make visitors feel and do

## 2. recommended stack
- framework
- styling
- motion
- 3d
- deployment
- why this stack fits the brief

## 3. sitemap
- page list or single-page section list

## 4. section blueprint
For each section include:
- purpose
- core message
- suggested layout
- media needs
- motion behavior
- cta

## 5. component architecture
- reusable components
- section-specific components
- likely client components vs server components

## 6. suggested app structure
- app routes
- component folders
- data/content locations

## 7. build order
- highest leverage implementation sequence

## 8. codex execution brief
A direct handoff prompt that tells Codex exactly what to build.

## Bundled references

- `references/stack-and-layout.md` — default stack decisions and when to escalate complexity
- `references/portfolio-structure.md` — section patterns for company portfolio websites
- `references/codex-handoff-template.md` — reusable handoff format for implementation agents
