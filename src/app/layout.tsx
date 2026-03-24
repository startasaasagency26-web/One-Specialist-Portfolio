import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyBar } from "@/components/layout/sticky-bar";
import { MotionProvider } from "@/components/providers/motion-provider";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "One Specialist Mobile | Trusted Repairs & Devices Since 2007",
  description:
    "A premium company profile for 1 Mobile Store at Sunway Pyramid Mall, highlighting flagship devices, repairs, trade-ins, and long-standing mobile expertise since 2007.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-canvas font-sans text-ink antialiased">
        <MotionProvider>
          <div className="relative min-h-screen">
            <SiteHeader />
            {children}
            <SiteFooter />
            <StickyBar />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
