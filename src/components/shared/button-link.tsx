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
  const baseClasses = "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-widest transition duration-500";
  
  const variants = {
    primary: "bg-brand-gradient text-white shadow-lg shadow-brand-red/20 hover:scale-[1.02] hover:shadow-brand-red/30",
    secondary: "group relative p-[1px] bg-brand-gradient hover:scale-[1.02]",
    ghost: "text-muted hover:text-white hover:bg-white/5",
  };

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(variants.secondary, "rounded-full", className)}
      >
        <span className="flex h-full w-full items-center justify-center rounded-full bg-background px-7 py-3 transition-colors group-hover:bg-background/80">
          {children}
        </span>
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
