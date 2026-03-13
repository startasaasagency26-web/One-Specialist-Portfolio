import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import type { PropsWithChildren } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/providers/motion-provider";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "1 Mobile Store | Premium Mobile Portfolio",
  description:
    "A premium company profile for 1 Mobile Store at Sunway Pyramid Mall, highlighting flagship devices, repairs, trade-ins, telco plans, and long-standing mobile expertise since 2007.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body className="bg-canvas font-sans text-ink antialiased">
        <MotionProvider>
          <div className="relative min-h-screen overflow-x-clip">
            <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(255,179,71,0.14),transparent_24%),radial-gradient(circle_at_top_right,rgba(225,6,0,0.1),transparent_26%),linear-gradient(180deg,#fbfaf8_0%,#f7f7f5_42%,#f3f0eb_100%)]" />
            <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.28] [background-image:linear-gradient(rgba(17,17,17,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.04)_1px,transparent_1px)] [background-size:144px_144px]" />
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
