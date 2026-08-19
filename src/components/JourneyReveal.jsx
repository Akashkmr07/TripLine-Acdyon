import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, Hotel, MapPin, CalendarDays } from 'lucide-react';

const items = [
  { id: 1, icon: Plane, label: 'Flight', desc: 'DEL to JAI', time: '08:30', color: 'bg-primary/5' },
  { id: 2, icon: Hotel, label: 'Stay', desc: 'The Raj Palace', time: '14:00', color: 'bg-primary/5' },
  { id: 3, icon: MapPin, label: 'Activity', desc: 'City Palace Tour', time: '10:00', color: 'bg-primary/5' },
  { id: 4, icon: CalendarDays, label: 'Plan', desc: 'Local Markets', time: '16:30', color: 'bg-primary/5' },
];

export default function JourneyReveal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const headlineLines = [
    "One trip.",
    "One continuous story."
  ];

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-8 md:px-16 bg-background-alt dark:bg-[#111111] relative overflow-hidden border-t border-primary/5 dark:border-white/5 transition-colors duration-500">
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-primary/[0.04] dark:bg-white/[0.04] hidden lg:block -translate-x-1/2 transition-colors duration-500" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-12 relative z-10">
        
        <div className="flex flex-col justify-center">
          <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary/40 dark:text-white/40 mb-12 flex items-center gap-4 transition-colors duration-500">
            <span className="w-8 h-[1px] bg-primary/40 dark:bg-white/40 transition-colors duration-500" />
            The Problem
          </div>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-primary dark:text-white mb-8 leading-[1.1] transition-colors duration-500">
            {headlineLines.map((line, i) => (
              <div key={i} className="overflow-hidden pb-1">
                <motion.div
                  initial={{ y: "120%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-primary/60 dark:text-white/60 max-w-md font-light leading-relaxed transition-colors duration-500"
          >
            Normally, your journey is scattered across a dozen emails, PDFs, and calendar invites. Tripline pulls them together seamlessly, transforming chaos into clarity.
          </motion.p>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          
          <div className="relative w-full max-w-sm">
            <motion.div 
              className="absolute left-[39px] md:left-[47px] top-[20px] bottom-[20px] w-[1px] bg-primary/20 dark:bg-white/20 origin-top transition-colors duration-500"
              style={{ scaleY: scrollYProgress }}
            />

            <div className="space-y-10 relative z-10">
              {items.map((item, index) => {
                const Icon = item.icon;
                const itemStart = index * 0.15;
                const itemEnd = itemStart + 0.3;
                
                const opacity = useTransform(scrollYProgress, [itemStart, itemEnd], [0, 1]);
                const y = useTransform(scrollYProgress, [itemStart, itemEnd], [30, 0]);
                const isEven = index % 2 === 0;
                const initialX = isEven ? -60 : 60;
                const x = useTransform(scrollYProgress, [itemStart, itemEnd], [initialX, 0]);

                return (
                  <motion.div 
                    key={item.id}
                    style={{ opacity, y, x }}
                    className="flex items-start group"
                  >
                    <div className="relative flex-shrink-0 w-20 md:w-24 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-background-alt dark:bg-[#111111] border border-primary/10 dark:border-white/10 flex items-center justify-center group-hover:border-accent dark:group-hover:border-white transition-colors duration-500 shadow-sm z-10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/[0.02] dark:bg-white/[0.05] -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <Icon className="w-4 h-4 text-primary/60 dark:text-white/60 group-hover:text-accent dark:group-hover:text-white transition-colors duration-500 relative z-10" />
                      </div>
                    </div>
                    
                    <div className="ml-2 md:ml-4 pt-1.5 flex-1 border-b border-primary/[0.04] dark:border-white/[0.04] pb-6 transition-colors duration-500">
                      <h3 className="text-lg font-medium text-primary dark:text-white mb-1.5 tracking-tight transition-colors duration-500">{item.label}</h3>
                      <div className="flex items-center text-[13px] text-primary/50 dark:text-white/50 space-x-3 uppercase tracking-widest font-semibold transition-colors duration-500">
                        <span>{item.desc}</span>
                        <span className="w-1 h-1 rounded-full bg-primary/20 dark:bg-white/20 transition-colors duration-500" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
