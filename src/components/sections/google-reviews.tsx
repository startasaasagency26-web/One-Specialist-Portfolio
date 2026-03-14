"use client";

import { useMemo } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
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
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5 text-brand-orange">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm font-bold text-white uppercase tracking-widest">
            4.9 Rated on Google
          </span>
        </div>
        <h3 className="font-display text-3xl font-extrabold text-white">
          Our Five-Star <span className="text-gradient">Google Reviews</span>
        </h3>
      </div>

      {/* Responsive Slider / Scroll Area */}
      <div className="relative group">
        <div 
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar @container"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PLACEHOLDER_REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="flex-shrink-0 w-full md:w-[400px] snap-center"
            >
              <div className="h-full rounded-[2.5rem] bg-background p-8 border border-white/5 transition-all hover:bg-white/[0.02] hover:border-brand-orange/20 relative group/card">
                <Quote className="absolute top-8 right-8 h-8 w-8 text-brand-orange/5 transition-colors group-hover/card:text-brand-orange/10" />
                
                <div className="flex items-center gap-4 mb-6">
                  {/* Avatar Placeholder */}
                  <div className="h-12 w-12 rounded-full bg-surface-strong border border-white/10 flex items-center justify-center text-brand-orange font-bold overflow-hidden ring-2 ring-transparent transition-all group-hover/card:ring-brand-orange/20">
                    {review.photo ? (
                      <img src={review.photo} alt={`Photo of ${review.name}`} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-lg">{review.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">
                      {review.name}
                    </h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange/70">
                      Verified Google Review
                    </p>
                  </div>
                </div>

                <div className="flex gap-0.5 text-brand-orange mb-4">
                  {[...Array(review.rating)].map((_, starIdx) => (
                    <Star key={starIdx} size={12} fill="currentColor" />
                  ))}
                </div>

                <p className="text-muted leading-relaxed italic text-sm md:text-base">
                  "{review.comment}"
                </p>

                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-muted-strong uppercase tracking-widest">
                    Google Maps
                  </span>
                  <span className="text-[10px] font-medium text-muted-strong">
                    {review.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Indicators / Hints */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {PLACEHOLDER_REVIEWS.map((_, i) => (
            <div key={i} className="h-1 w-4 rounded-full bg-white/10 transition-colors" />
          ))}
        </div>
      </div>
    </div>
  );
}
