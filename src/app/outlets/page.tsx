import { MapPin, MessageSquare, Navigation, Phone, Clock } from "lucide-react";
import { outlets } from "@/content/site";
import { Reveal } from "@/components/shared/reveal";

export default function OutletsPage() {
  return (
    <main className="min-h-[100dvh] bg-background pt-32 pb-16 md:pt-40 md:pb-32">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h1 className="font-display text-5xl font-black tracking-tight text-ink md:text-7xl lg:text-8xl">
              Our <span className="text-gradient">Locations</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-muted md:text-xl">
              Visit our premium stores for certified repairs, exclusive devices, and tailored connectivity solutions.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {outlets.map((outlet, index) => (
            <Reveal key={outlet.id} delay={index * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-surface p-8 ring-1 ring-line transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:ring-brand-orange/20">
                <div className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
                
                <div className="relative z-10 flex flex-1 flex-col">
                  {/* Status / Type Badge */}
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 text-brand-orange">
                      <MapPin size={20} strokeWidth={1.8} />
                    </div>
                    {outlet.type && (
                      <span className="inline-flex rounded-full bg-brand-orange/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-orange">
                        {outlet.type}
                      </span>
                    )}
                  </div>

                  {/* Store Details */}
                  <h2 className="font-display text-2xl font-bold text-ink">{outlet.name}</h2>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-muted flex-1">
                    {outlet.address}
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 text-sm font-medium text-muted">
                      <Clock size={16} className="text-brand-orange/70" />
                      <span>{outlet.hours}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-muted">
                      <Phone size={16} className="text-brand-orange/70" />
                      <span>{outlet.phone}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-10 flex flex-col gap-3">
                    <a
                      href={outlet.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange/5 border border-brand-orange/20 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-ink transition-all hover:bg-brand-orange hover:border-brand-orange hover:text-white"
                    >
                      <Navigation size={16} className="transition-transform group-hover/btn:-translate-y-0.5" />
                      <span>Get Directions</span>
                    </a>
                    
                    <a
                      href={`https://wa.me/${outlet.whatsapp.replace(/\+/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-surface-strong border border-line px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-ink transition-all hover:border-brand-orange/30 hover:bg-surface"
                    >
                      <MessageSquare size={16} className="text-brand-orange transition-transform duration-300 group-hover/btn:scale-110" />
                      <span>WhatsApp Store</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
