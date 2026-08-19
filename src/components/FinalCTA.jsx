import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const destinations = ["Goa", "Jaipur", "Kerala", "Ladakh", "Varanasi"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % destinations.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 md:py-56 px-6 md:px-16 bg-black flex flex-col items-center justify-center text-center relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1502444330042-d1a1ddf971b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Night sky travel" 
          className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110 ease-out opacity-80"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-10 leading-[1.1]">
          <span className="block overflow-hidden pb-1">
            <motion.span 
              initial={{ y: "100%" }} whileInView={{ y: "0%" }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} 
              className="block"
            >
              Your journey to
            </motion.span>
          </span>
          <span className="block h-[1.2em] relative overflow-hidden text-white/90 italic font-light tracking-tight pb-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex justify-center"
              >
                {destinations[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="block overflow-hidden pt-1">
            <motion.span 
              initial={{ y: "100%" }} whileInView={{ y: "0%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
              className="block"
            >
              starts here.
            </motion.span>
          </span>
        </h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 font-light mb-16 max-w-xl mx-auto"
        >
          Stop managing tabs and emails. Start seeing your travel plans as one beautiful, connected story.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <button className="px-10 py-5 bg-white text-black text-sm tracking-[0.1em] uppercase font-bold rounded-full hover:scale-105 hover:bg-white/90 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-3">
            Start Planning For Free
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
