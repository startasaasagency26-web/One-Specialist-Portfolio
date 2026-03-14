"use client";

import { motion } from "motion/react";
import { Phone, MessageSquare, Send } from "lucide-react";
import { contactDetails } from "@/content/site";

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-4 pb-8 md:hidden">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-surface/90 p-2 shadow-2xl backdrop-blur-2xl"
      >
        <a
          href={`tel:${contactDetails.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-[10px] font-black uppercase tracking-widest text-muted transition hover:bg-white/5 active:scale-95"
        >
          <Phone size={14} />
          Call
        </a>
        <a
          href={`https://wa.me/${contactDetails.whatsapp.replace(/\+/g, '')}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-[10px] font-black uppercase tracking-widest text-muted transition hover:bg-white/5 active:scale-95"
        >
          <MessageSquare size={14} />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gradient py-3.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-brand-red/20 active:scale-95"
        >
          <Send size={14} />
          Quote
        </a>
      </motion.div>
    </div>
  );
}
