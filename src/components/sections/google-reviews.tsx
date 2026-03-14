"use client";

import { useMemo } from "react";
import { Star, Quote, ChevronRight, Pin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

interface GoogleReview {
  id: string;
  name: string;
  photo?: string;
  rating: number;
  comment: string;
  date: string;
}

const PLACEHOLDER_REVIEWS: GoogleReview[] = [
  {
    id: "1",
    name: "Alex Tan",
    rating: 5,
    comment: "Best mobile repair shop in Sunway Pyramid. Fast, professional, and transparent about the parts being used. Highly recommended for any iPhone issues!",
    date: "2 days ago",
  },
  {
    id: "2",
    name: "Siti Rahayu",
    rating: 5,
    comment: "I was worried about my data when my Samsung screen died. One Specialist saved everything and the new screen looks perfect. Grateful for their expertise.",
    date: "1 week ago",
  },
  {
    id: "3",
    name: "Kevin Wong",
    rating: 5,
    comment: "The trade-in process was so smooth. Got a fair price for my old iPad and upgraded to a newer model the same day. Very honest and helpful staff.",
    date: "2 weeks ago",
  },
  {
    id: "4",
    name: "Sarah Jenkins",
    rating: 5,
    comment: "Exceptional board-level repair. No one else could fix my charging port issue without a full motherboard replacement, but they did it at a fraction of the cost.",
    date: "1 month ago",
  },
  {
    id: "5",
    name: "Muhammad Faiz",
    rating: 5,
    comment: "Solid service. They even gave me a temporary phone while mine was being repaired. The 4.9-star rating is definitely well-deserved.",
    date: "1 month ago",
  },
];

export function GoogleReviewsSection() {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30 
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.21, 0.45, 0.32, 0.9] as any,
      },
    }),
  };

  return (
    <div className="mt-32">
      {/* SVG Definitions for Generic Gradient Use */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E4221D" />
            <stop offset="100%" stopColor="#F7762D" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col items-center mb-16">
        {/* Rating Badge */}
        <div className="inline-flex items-center rounded-full bg-surface-strong p-1 ring-1 ring-white/10 shadow-lg mb-6">
          <div className="flex items-center gap-1.5 rounded-full bg-background px-4 py-2 border border-white/5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="url(#star-gradient)" className="text-transparent" />
            ))}
          </div>
          <span className="px-4 text-[11px] sm:text-xs font-bold bg-brand-gradient bg-clip-text text-transparent uppercase tracking-wider">
            4.9 Rated on Google
          </span>
        </div>

        <h3 className="font-display text-3xl md:text-4xl font-extrabold text-white text-center">
          Our Five-Star Google Reviews
        </h3>
        
        <a 
          href="#" 
          className="mt-4 text-xs font-bold text-muted hover:text-brand-orange transition-colors flex items-center gap-1 group border-b border-white/10 hover:border-brand-orange/40 pb-0.5"
        >
          See all reviews on Google Maps
          <ChevronRight size={14} className="text-brand-orange transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLACEHOLDER_REVIEWS.map((review, i) => (
          <motion.div
            key={review.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            className="w-full flex"
          >
            <div className="group h-full p-[1px] rounded-[2.5rem] bg-white/5 bg-gradient-to-br from-white/10 to-transparent hover:from-brand-red hover:to-brand-orange transition-all duration-500 shadow-xl flex-grow">
              <div className="h-full rounded-[2.45rem] bg-background p-8 relative flex flex-col justify-between">
                <Quote className="absolute top-8 right-8 h-8 w-8 text-brand-orange/5 transition-colors group-hover:text-brand-orange/10" />
                
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    {/* Avatar */}
                    <div className="h-12 w-12 rounded-full bg-surface-strong border border-white/10 flex items-center justify-center text-brand-orange font-bold overflow-hidden ring-2 ring-transparent transition-all group-hover:ring-brand-orange/20 flex-shrink-0">
                      {review.photo ? (
                        <img src={review.photo} alt={`Photo of ${review.name}`} className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-lg">{review.name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <div className="flex flex-col">
                        <h4 className="font-bold text-white text-base leading-tight">
                          {review.name}
                        </h4>
                        <span className="text-[7px] font-black uppercase tracking-wider text-muted/60 mt-0.5">
                          Verified Google Review
                        </span>
                      </div>
                      <div className="flex gap-0.5 mt-1.5">
                        {[...Array(5)].map((_, starIdx) => (
                          <Star key={starIdx} size={11} fill="url(#star-gradient)" className="text-transparent" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed italic text-sm md:text-base line-clamp-4">
                    "{review.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <Pin size={11} className="text-brand-orange" fill="url(#star-gradient)" />
                    <span className="text-[9px] font-bold text-muted-strong uppercase tracking-widest">
                      Google Maps
                    </span>
                  </div>
                  <span className="text-[9px] font-medium text-muted-strong">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
