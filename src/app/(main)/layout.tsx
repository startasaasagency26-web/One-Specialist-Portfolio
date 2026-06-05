import type { PropsWithChildren } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyBar } from "@/components/layout/sticky-bar";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <StickyBar />
    </>
  );
}
