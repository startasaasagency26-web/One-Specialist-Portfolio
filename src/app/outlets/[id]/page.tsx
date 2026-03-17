import { outlets } from "@/content/site";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Clock, Navigation, MessageSquare } from "lucide-react";

export function generateStaticParams() {
  return outlets.map((outlet) => ({
    id: outlet.id,
  }));
}

export default async function OutletDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const outlet = outlets.find((o) => o.id === resolvedParams.id);

  if (!outlet) {
    notFound();
  }

  return (
    <main className="min-h-[100dvh] bg-background pt-32 pb-16 md:pt-40 md:pb-32">
      <div className="container-shell">
        <Link 
          href="/outlets" 
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-ink transition"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Locations</span>
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Cover Image */}
          <div className="lg:col-span-7">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-surface ring-1 ring-line shadow-xl">
              <div className="absolute inset-0 bg-brand-gradient opacity-10 z-10" />
              {outlet.image ? (
                <Image
                  src={outlet.image}
                  alt={outlet.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-muted-strong">
                  No storefront image available
                </div>
              )}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5">
            <div className="rounded-[2.5rem] bg-surface p-6 md:p-10 ring-1 ring-line shadow-md relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute inset-0 bg-brand-gradient opacity-5" />
              
              <div className="relative z-10">
                <span className="inline-flex rounded-full bg-brand-orange/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-orange">
                  {outlet.type || "Store Location"}
                </span>
                
                <h1 className="mt-4 font-display text-3xl font-black tracking-tight text-ink md:text-4xl">
                  {outlet.name}
                </h1>
                
                <p className="mt-6 text-base font-medium leading-relaxed text-muted">
                  {outlet.address}
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 text-brand-orange">
                      <Clock size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted">Business Hours</p>
                      <p className="mt-1 font-display font-bold text-ink">{outlet.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 text-brand-orange">
                      <Phone size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted">Contact Line</p>
                      <p className="mt-1 font-display font-bold text-ink">{outlet.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-col gap-4">
                  <a
                    href={outlet.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-brand-orange/90 hover:-translate-y-0.5"
                  >
                    <Navigation size={16} className="transition-transform group-hover/btn:-translate-y-0.5" />
                    <span>Get Directions</span>
                  </a>
                  
                  <a
                    href={`https://wa.me/${outlet.whatsapp.replace(/\+/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-surface border border-line px-6 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-all hover:border-brand-orange/30 hover:bg-surface-strong"
                  >
                    <MessageSquare size={16} className="text-brand-orange" />
                    <span>WhatsApp Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
