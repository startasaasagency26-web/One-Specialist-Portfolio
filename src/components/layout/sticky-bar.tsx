"use client";

import { motion } from "motion/react";
import { Phone, MessageSquare, Send } from "lucide-react";
import { contactDetails } from "@/content/site";

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-4 pb-6 md:hidden">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between gap-3 rounded-full border border-line bg-surface/90 p-2 shadow-2xl backdrop-blur-2xl"
      >
        <a
          href={`tel:${contactDetails.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-widest text-muted transition hover:bg-surface-strong"
        >
          <Phone size={16} />
          Call
        </a>
        <a
          href={`https://wa.me/${contactDetails.whatsapp.replace(/\+/g, '')}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-widest text-muted transition hover:bg-surface-strong"
        >
          <MessageSquare size={16} />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent py-3 text-xs font-bold uppercase tracking-widest text-background shadow-lg shadow-accent/20"
        >
          <Send size={16} />
          Quote
        </a>
      </motion.div>
    </div>
  );
}
