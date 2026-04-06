import Link from "next/link";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = PropsWithChildren<{
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}>;

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
  onClick,
}: ButtonLinkProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[13px] font-bold uppercase tracking-widest transition-all duration-300";
  
  const variants = {
    primary: "bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-ink hover:bg-white/60 hover:border-brand-orange/40 hover:shadow-[0_8px_30px_rgb(255,87,34,0.15)] hover:scale-[1.02]",
    secondary: "bg-surface/40 backdrop-blur-xl border border-line shadow-sm text-ink hover:bg-white/50 hover:border-brand-orange/30 hover:scale-[1.02]",
    ghost: "text-muted hover:text-ink hover:bg-white/30 backdrop-blur-md",
  };

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(baseClasses, variants.secondary, className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(baseClasses, variants[variant], className)}
    >
      {children}
    </Link>
  );
}
