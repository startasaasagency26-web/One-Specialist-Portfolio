import {
  ArrowRight,
  Clock3,
  MapPinned,
  MessageCircleMore,
} from "lucide-react";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { contactActions } from "@/content/site";

const icons = [MapPinned, MessageCircleMore, Clock3];

export function ContactSection() {
  return (
    <section id="contact" className="container-shell py-24 md:py-32">
      <Reveal className="overflow-hidden rounded-[2.5rem] border border-black/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(250,250,250,0.92)_100%)] p-8 shadow-[0_30px_90px_-40px_rgba(17,17,17,0.18)] backdrop-blur-2xl md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full border border-black/8 bg-white/76 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-strong shadow-[0_10px_30px_-20px_rgba(17,17,17,0.16)]">
              Contact
            </span>
            <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-[-0.06em] text-ink md:text-5xl lg:text-6xl">
              Visit the store or start an enquiry.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-muted md:text-lg">
              Sunway Pyramid remains the anchor, with space for WhatsApp and live opening hours when final details are ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="https://www.google.com/maps/search/?api=1&query=Sunway+Pyramid+Mall,+Selangor,+Malaysia">
                Visit our store
                <ArrowRight className="ml-2" size={16} />
              </ButtonLink>
              <ButtonLink href="#services" variant="secondary">
                Explore services
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {contactActions.map((item, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-black/8 bg-white/76 p-5 shadow-[0_20px_60px_-34px_rgba(17,17,17,0.18)] backdrop-blur-2xl"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(225,6,0,0.12)_0%,rgba(255,77,26,0.14)_48%,rgba(255,179,71,0.18)_100%)] text-[var(--brand-red-orange)] ring-1 ring-black/6">
                    <Icon size={19} />
                  </div>
                  <h3 className="mt-5 text-balance font-display text-xl font-semibold tracking-[-0.04em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
