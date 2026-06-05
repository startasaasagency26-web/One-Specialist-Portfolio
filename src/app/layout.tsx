import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";
import Script from "next/script";

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
      <head>
        <meta name="facebook-domain-verification" content="PENDING" />
      </head>
      <body className="bg-canvas font-sans text-ink antialiased">
        <MotionProvider>
          <div className="relative min-h-screen">
            <SiteHeader />
            {children}
            <SiteFooter />
            <StickyBar />
          </div>
        </MotionProvider>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2867757610236500');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
