---
name: codex-launch-qa
description: qa, handoff, and deployment review for premium next.js websites with motion or 3d. use when chatgpt needs to verify responsiveness, animation stability, reduced-motion support, content completeness, readme quality, checklist readiness, build hygiene, and deployment steps before a premium company portfolio site is handed off or launched.
---

# Codex Launch QA

This skill is the final filter before launch.

## Objective

Catch the sloppy failures that make premium work look amateur:

- broken layouts
- noisy motion
- inaccessible interactions
- missing documentation
- weak deployment notes
- unfinished copy states
- visual overkill on mobile

## Required final deliverables

Unless the user overrides it, the final handoff must include:

- codebase
- README
- animation notes
- QA checklist
- deployment steps

If any one of those is missing, treat the handoff as incomplete.

## QA workflow

1. Build integrity
   Check for:
   - consistent stack usage
   - clear component boundaries
   - obvious dead code or duplicated sections
   - missing fallback states

2. Responsive review
   Review at minimum:
   - mobile
   - tablet
   - laptop
   - wide desktop

   Focus on:
   - hero composition
   - text wrapping
   - sticky sections
   - nav behavior
   - CTA visibility

3. Motion review
   Check:
   - entry timing
   - scroll-linked stability
   - pinned section behavior
   - reduced-motion behavior
   - whether the motion still feels premium on low-power devices

4. 3d review
   Check:
   - lazy loading
   - fallback state
   - canvas sizing
   - mobile degradation
   - whether the 3d is earning its cost

5. Content review
   Check:
   - headline clarity
   - placeholder text
   - repeated lines
   - broken service cards
   - empty showcase slots
   - CTA specificity

6. Handoff review
   Ensure:
   - README explains setup, dev, build, and deployment
   - animation notes explain where each engine is used
   - checklist is actionable, not generic
   - deployment steps are specific

## Severity rules

Classify findings as:

- **critical** — broken build, unreadable content, inaccessible core flow, unusable navigation, missing required handoff docs
- **major** — unstable motion, poor mobile experience, unresolved performance issue, misleading content gaps
- **minor** — polish issues that do not block launch

## Standards

- Premium sites must feel controlled on mobile, not just impressive on desktop.
- Reduce features before accepting unstable performance.
- Do not approve decorative complexity that weakens the message.
- A clean README is not optional.

## Output format

# Launch review

## 1. readiness verdict
- ready
- ready with fixes
- not ready

## 2. critical issues
- issue
- why it matters
- fix direction

## 3. major issues
- issue
- why it matters
- fix direction

## 4. minor issues
- issue
- suggested polish

## 5. handoff completeness
- code
- readme
- animation notes
- checklist
- deployment steps

## 6. deployment notes
- recommended host
- environment variable notes if any
- post-launch verification steps

## Bundled references

- `references/qa-checklist.md` — launch checklist for premium portfolio sites
- `references/readme-template.md` — what the README should cover
