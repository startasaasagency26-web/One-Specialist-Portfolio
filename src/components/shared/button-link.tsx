import Link from "next/link";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = PropsWithChildren<{
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}>;

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition duration-300",
        variant === "primary" &&
          "bg-[linear-gradient(135deg,var(--brand-red)_0%,var(--brand-red-orange)_42%,var(--brand-orange)_82%,var(--brand-amber)_100%)] text-white shadow-[0_24px_60px_-28px_rgba(225,6,0,0.55)] hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-28px_rgba(241,106,17,0.6)]",
        variant === "secondary" &&
          "border border-black/10 bg-white/78 text-ink shadow-[0_18px_50px_-28px_rgba(17,17,17,0.18)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-black/15 hover:bg-white/90",
        variant === "ghost" &&
          "text-muted-strong hover:bg-black/4 hover:text-ink",
        className,
      )}
    >
      {children}
    </Link>
  );
}
