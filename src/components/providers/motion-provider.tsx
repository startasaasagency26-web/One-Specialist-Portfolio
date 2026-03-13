"use client";

import { MotionConfig } from "motion/react";
import type { PropsWithChildren } from "react";

export function MotionProvider({ children }: PropsWithChildren) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionConfig>
  );
}
