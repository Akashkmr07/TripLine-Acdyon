import React from 'react';
import { motion } from 'framer-motion';
import JourneyTimeline from './JourneyTimeline';

export default function Hero() {
  const headlineLines = [
    "See your whole",
    "journey before",
    "you take it."
  ];

  return (
    <section className="relative pt-48 pb-20 px-8 md:px-16 min-h-[90vh] flex flex-col justify-center overflow-hidden transition-colors duration-500">
      
      <div className="absolute top-0 left-16 bottom-0 w-[1px] bg-primary/[0.04] dark:bg-white/[0.04] hidden md:block" />
      <div className="absolute top-0 right-16 bottom-0 w-[1px] bg-primary/[0.04] dark:bg-white/[0.04] hidden md:block" />
      <div className="absolute top-48 left-0 right-0 h-[1px] bg-primary/[0.04] dark:bg-white/[0.04]" />

      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center relative z-10">
        
        <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary/40 dark:text-white/40 mb-12 flex items-center justify-center gap-4 w-full">
          <span className="w-12 h-[1px] bg-primary/40 dark:bg-white/40" />
          Visual Travel Planner
          <span className="w-12 h-[1px] bg-primary/40 dark:bg-white/40" />
        </div>

        <h1 className="text-6xl md:text-[6rem] lg:text-[7.5rem] font-medium tracking-tighter text-primary dark:text-white leading-[0.9] mb-12 text-center w-full flex flex-col items-center">
          {headlineLines.map((line, i) => (
            <div key={i} className="overflow-hidden pb-2 clip-text-mask flex justify-center w-full">
              <motion.div
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {line === "you take it." ? (
                  <span className="text-primary/40 dark:text-white/40">{line}</span>
                ) : (
                  line
                )}
              </motion.div>
            </div>
          ))}
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-primary/60 dark:text-white/60 font-light leading-relaxed mb-10 max-w-xl mx-auto text-center"
        >
          Tripline turns scattered bookings, flights, and daily itineraries into one beautiful, connected timeline.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-4 bg-primary dark:bg-white text-background dark:text-[#0a0a0a] text-sm tracking-wide font-medium rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
            Plan your journey
          </button>
          <button className="px-6 py-4 bg-transparent text-primary/60 dark:text-white/60 text-sm tracking-wide font-medium hover:text-primary dark:hover:text-white transition-colors flex items-center justify-center gap-2 group">
            <span className="w-6 h-[1px] bg-primary/20 dark:bg-white/20 group-hover:bg-primary dark:group-hover:bg-white transition-colors" />
            Explore example
            <span className="w-6 h-[1px] bg-primary/20 dark:bg-white/20 group-hover:bg-primary dark:group-hover:bg-white transition-colors" />
          </button>
        </motion.div>
      </div>

      <div className="mt-32 md:mt-40 w-full relative z-10 border-t border-primary/[0.04] dark:border-white/[0.04] pt-12">
        <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary/30 dark:text-white/30 mb-8 text-center">
          Live Preview
        </div>
        <JourneyTimeline />
      </div>

    </section>
  );
}
