import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    { num: '1', title: 'Choose your destinations', desc: 'Add cities, flights, and dates.' },
    { num: '2', title: 'Arrange your journey', desc: 'Drop in your hotels and activities.' },
    { num: '3', title: 'See everything on one line', desc: 'Your entire trip, perfectly visual.' },
  ];

  return (
    <section ref={containerRef} id="how-it-works" className="py-24 md:py-32 px-6 md:px-12 bg-background dark:bg-[#0a0a0a] relative transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-medium tracking-tight text-primary dark:text-white mb-16 text-center transition-colors duration-500"
        >
          How it works
        </motion.h2>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-primary/10 dark:bg-white/10 z-0 transition-colors duration-500" />
          <motion.div 
             className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-accent dark:bg-white z-0 origin-left transition-colors duration-500"
             style={{ scaleX: scrollYProgress }}
          />

          <div className="block md:hidden absolute left-6 top-[10%] bottom-[10%] w-[1px] bg-primary/10 dark:bg-white/10 z-0 transition-colors duration-500" />
          <motion.div 
             className="block md:hidden absolute left-6 top-[10%] bottom-[10%] w-[1px] bg-accent dark:bg-white z-0 origin-top transition-colors duration-500"
             style={{ scaleY: scrollYProgress }}
          />

          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10 flex flex-row md:flex-col items-center md:text-center group w-full md:w-1/3"
            >
              <div className="w-12 h-12 bg-background dark:bg-[#111111] border border-primary/10 dark:border-white/10 rounded-full flex items-center justify-center text-lg font-medium text-primary dark:text-white shadow-sm group-hover:border-accent dark:group-hover:border-white transition-colors duration-300 flex-shrink-0">
                {step.num}
              </div>
              <div className="ml-6 md:ml-0 md:mt-6">
                <h3 className="text-lg font-medium text-primary dark:text-white mb-2 transition-colors duration-500">{step.title}</h3>
                <p className="text-sm text-primary/60 dark:text-white/60 font-light transition-colors duration-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
