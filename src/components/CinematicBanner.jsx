import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CinematicBanner() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0 origin-bottom"
        style={{ y, scale }}
      >
        <div className="absolute inset-0 bg-primary/40 z-10 mix-blend-multiply" />
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Cinematic Travel" 
          className="w-full h-[150%] object-cover object-center absolute -top-[25%]"
        />
      </motion.div>

      <div className="relative z-20 max-w-5xl mx-auto text-center px-8">
        <div className="overflow-hidden pb-4">
          <motion.h2 
            initial={{ y: "120%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-medium tracking-tighter text-white mb-6 leading-[1.1]"
          >
            Every great journey starts<br className="hidden md:block" /> with seeing the path.
          </motion.h2>
        </div>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.8 }}
           className="w-[1px] h-24 bg-white/30 mx-auto mt-12"
        />
      </div>
    </section>
  );
}
