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
  const baseClasses = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold uppercase tracking-widest transition duration-300";
  
  const variants = {
    primary: "bg-accent text-background shadow-lg shadow-accent/20 hover:scale-[1.02] hover:bg-accent-hover",
    secondary: "border border-line bg-surface/50 text-ink backdrop-blur-md hover:bg-surface hover:border-accent/40",
    ghost: "text-muted hover:text-accent hover:bg-white/5",
  };

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
