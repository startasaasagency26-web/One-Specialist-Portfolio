"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { FileText, Shield, Sparkles, ChevronDown } from "lucide-react";
import { legalDocuments } from "@/content/legal";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

function LegalDashboard() {
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get("tab") as keyof typeof legalDocuments;
  const [activeTab, setActiveTab] = useState<keyof typeof legalDocuments>("privacy");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const ActiveIcon = tabIcons[activeTab] || FileText;

  return (
    <main className="min-h-[100dvh] bg-background pt-32 pb-16 md:pt-40 md:pb-32">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h1 className="font-display text-4xl font-black tracking-tight text-ink xs:text-5xl md:text-7xl lg:text-8xl">
              Legal <span className="text-gradient">&</span> Policies.
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-muted md:text-lg">
              Our commitment to safety, integrity, and transparency across all our mobile repair services.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 md:mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Navigation Tabs (Sticky Sidebar on Desktop, Dropdown on Mobile) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 relative z-20">
            {/* Mobile Dropdown Trigger */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex w-full items-center justify-between gap-3 rounded-[2rem] bg-surface p-4 ring-1 ring-line shadow-sm hover:cursor-pointer lg:hidden"
            >
              <div className="flex items-center gap-3">
                <ActiveIcon className="text-brand-orange" size={16} strokeWidth={1.8} />
                <span className="text-xs font-bold uppercase tracking-wider text-ink">
                  {doc.title}
                </span>
              </div>
              <ChevronDown
                size={16}
                className={cn(
                  "text-muted transition-transform duration-300",
                  isMenuOpen && "rotate-180"
                )}
              />
            </button>

            {/* Mobile Dropdown List */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute inset-x-0 top-full mt-2 flex flex-col gap-2 rounded-2xl bg-surface p-2 ring-1 ring-line shadow-xl z-30 lg:hidden"
                >
                  {Object.keys(legalDocuments).map((key) => {
                    const docKey = key as keyof typeof legalDocuments;
                    const tabItem = legalDocuments[docKey];
                    const Icon = tabIcons[docKey] || FileText;
                    const isActive = activeTab === docKey;

                    return (
                      <button
                        key={docKey}
                        type="button"
                        onClick={() => {
                          setActiveTab(docKey);
                          setIsMenuOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300",
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
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Navigation (Static list) */}
            <div className="hidden lg:flex lg:flex-col lg:gap-3 rounded-3xl bg-surface p-4 ring-1 ring-line shadow-sm">
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
                      "flex items-center gap-4 rounded-2xl px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300",
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
            <div className="rounded-[2.5rem] bg-surface p-6 md:p-12 ring-1 ring-line shadow-xl relative overflow-hidden">
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
