"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FileText, Shield, Sparkles } from "lucide-react";
import { legalDocuments } from "@/content/legal";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

function LegalDashboard() {
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get("tab") as keyof typeof legalDocuments;
  const [activeTab, setActiveTab] = useState<keyof typeof legalDocuments>("privacy");

  useEffect(() => {
    if (tabFromUrl && legalDocuments[tabFromUrl]) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const doc = legalDocuments[activeTab];

  const tabIcons = {
    privacy: Shield,
    terms: FileText,
    warranty: Sparkles,
  };

  return (
    <main className="min-h-[100dvh] bg-background pt-32 pb-16 md:pt-40 md:pb-32">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h1 className="font-display text-5xl font-black tracking-tight text-ink md:text-7xl lg:text-8xl">
              Legal <span className="text-gradient">&</span> Policies.
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-muted md:text-lg">
              Our commitment to safety, integrity, and transparency across all our mobile repair services.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 md:mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Navigation Tabs (Sticky Sidebar on Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="flex flex-row overflow-x-auto gap-2 rounded-3xl bg-surface p-2 ring-1 ring-line shadow-sm lg:flex-col lg:overflow-visible lg:gap-3 lg:p-4">
              {Object.keys(legalDocuments).map((key) => {
                const docKey = key as keyof typeof legalDocuments;
                const tabItem = legalDocuments[docKey];
                const Icon = tabIcons[docKey] || FileText;
                const isActive = activeTab === docKey;

                return (
                  <button
                    key={docKey}
                    type="button"
                    onClick={() => setActiveTab(docKey)}
                    className={cn(
                      "flex flex-1 items-center gap-3 rounded-2xl px-4 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 lg:flex-initial lg:px-5",
                      isActive
                        ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20"
                        : "text-muted hover:bg-black/5 dark:hover:bg-white/5 hover:text-ink"
                    )}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                    <span>{tabItem.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Pane */}
          <div className="lg:col-span-8">
            <div className="rounded-[2.5rem] bg-surface p-8 md:p-12 ring-1 ring-line shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-gradient opacity-5" />
              
              <div className="relative z-10">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h2 className="font-display text-2xl font-black text-ink md:text-3xl">
                    {doc.title}
                  </h2>
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-strong">
                    Last Updated: {doc.lastUpdated}
                  </span>
                </div>

                <div className="mt-8 h-px w-full bg-line" />

                <div className="mt-10 space-y-10">
                  {doc.content.map((section, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <h3 className="font-display text-lg font-bold text-ink">
                        {section.heading}
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-muted">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function LegalPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center text-muted text-sm uppercase font-bold tracking-widest">
        Loading Policies...
      </div>
    }>
      <LegalDashboard />
    </Suspense>
  );
}
