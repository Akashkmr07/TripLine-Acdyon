import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const destinations = [
  { id: 1, name: 'DELHI', desc: 'Departure' },
  { id: 2, name: 'JAIPUR', desc: '2 Days', mode: 'Train' },
  { id: 3, name: 'UDAIPUR', desc: '3 Days', mode: 'Car' }
];

export default function JourneyTimeline() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto mt-20 h-32 flex items-center">
      <div className="absolute left-0 right-0 h-[2px] bg-primary/10 top-1/2 -translate-y-1/2" />
      
      <motion.div 
        className="absolute left-0 h-[2px] bg-accent top-1/2 -translate-y-1/2 z-10"
        style={{ width: lineWidth }}
      />
      
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-accent z-20 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_0_4px_rgba(31,94,74,0.2)]"
        style={{ left: lineWidth }}
      />

      <div className="absolute inset-0 flex justify-between items-center z-10">
        {destinations.map((dest, index) => {
          const threshold = index / (destinations.length - 1);
          
          return (
            <div key={dest.id} className="relative flex flex-col items-center group">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-3 h-3 rounded-full bg-background border-2 border-primary dark:border-white/50 group-hover:border-accent transition-colors duration-300"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                className="absolute top-6 flex flex-col items-center w-32 text-center"
              >
                <span className="text-xs font-semibold tracking-widest text-primary dark:text-white mb-1">{dest.name}</span>
                <span className="text-[10px] text-primary/60 dark:text-white/60">{dest.desc}</span>
              </motion.div>

              {index < destinations.length - 1 && (
                 <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.2 + 0.3 }}
                   className="absolute -top-8 left-full w-full text-center text-[10px] text-primary/40 dark:text-white/40 tracking-widest font-medium"
                   style={{ transform: 'translateX(-50%)' }}
                 >
                   {destinations[index + 1].mode}
                 </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
