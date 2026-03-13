import Link from "next/link";

import { navItems } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/8 bg-white/55">
      <div className="container-shell flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
            1 Mobile Store
          </p>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted">
            Minimal landing page for 1 Mobile Store at Sunway Pyramid Mall,
            shaped around a premium hero animation and a cleaner mobile retail
            identity.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-strong">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
