import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    num: '01',
    title: 'See Every Stop',
    desc: 'Visualize your entire route across cities, flights, and trains before you even pack a bag. Clarity from departure to arrival.',
    visual: (
      <div className="w-full h-full rounded-none md:rounded-3xl border border-primary/5 dark:border-white/5 flex items-center justify-center p-8 relative overflow-hidden group transition-colors duration-500">
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Epic travel journey" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/10 dark:bg-black/40 transition-colors duration-500" />
        
        <div className="w-full max-w-sm h-32 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-white/10 flex items-center px-8 relative z-10 shadow-2xl shadow-black/10">
          <div className="w-full h-[1px] bg-primary/20 dark:bg-white/20 relative transition-colors duration-500">
            <motion.div 
              initial={{ left: '10%' }}
              whileInView={{ left: '90%' }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent dark:bg-white shadow-[0_0_15px_rgba(24,79,61,0.3)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary dark:bg-white transition-colors duration-500" />
            <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary dark:bg-white transition-colors duration-500" />
            <div className="absolute left-[90%] top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary dark:bg-white transition-colors duration-500" />
          </div>
        </div>
      </div>
    )
  },
  {
    num: '02',
    title: 'Plan Day by Day',
    desc: 'Unfold any destination to reveal a beautifully structured daily itinerary. Morning, afternoon, and evening flows naturally.',
    visual: (
      <div className="w-full h-full rounded-none md:rounded-3xl border border-primary/5 dark:border-white/5 flex flex-col justify-center items-center p-12 relative overflow-hidden group transition-colors duration-500">
        <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Planning trip with coffee" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/10 dark:bg-black/40 transition-colors duration-500" />
        
        <div className="w-full max-w-sm space-y-4 relative z-10">
          {[0.4, 0.8, 0.5].map((width, i) => (
            <motion.div 
              key={i}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="h-12 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-xl origin-left flex items-center px-5 relative overflow-hidden group-hover:border-accent/30 dark:group-hover:border-white/30 transition-colors duration-500 shadow-xl shadow-black/10"
              style={{ width: `${width * 100}%` }}
            >
               <div className="absolute inset-0 bg-primary/[0.02] dark:bg-white/[0.02] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
               <div className="w-1.5 h-1.5 rounded-full bg-primary/20 dark:bg-white/20 mr-4 transition-colors duration-500" />
               <div className="h-[2px] rounded-full bg-primary/20 dark:bg-white/20 w-1/3 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    num: '03',
    title: 'Total Context',
    desc: 'When your train arrives, your hotel check-in is right there. Context is never lost. Travel with supreme confidence.',
    visual: (
      <div className="w-full h-full rounded-none md:rounded-3xl border border-primary/5 dark:border-white/5 flex items-center justify-center p-8 relative overflow-hidden group transition-colors duration-500">
        <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Grand train station" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/10 dark:bg-black/40 transition-colors duration-500" />

         <div className="flex flex-col items-center space-y-0 relative z-10">
            <motion.div 
               initial={{ y: -20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="px-6 py-3 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-full text-xs font-semibold tracking-wide text-primary/80 dark:text-white/80 shadow-2xl shadow-black/10 z-10 transition-colors duration-500"
            >
              Train arrives 14:00
            </motion.div>
            <motion.div 
               initial={{ scaleY: 0 }}
               whileInView={{ scaleY: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="w-[1px] h-16 bg-primary/30 dark:bg-white/30 origin-top transition-colors duration-500"
            />
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="px-6 py-3 bg-accent dark:bg-white border border-accent dark:border-white rounded-full text-xs font-semibold tracking-wide text-white dark:text-[#0a0a0a] shadow-2xl shadow-accent/20 dark:shadow-white/20 z-10 group-hover:scale-105 transition-all duration-500"
            >
              Check-in 15:00
            </motion.div>
         </div>
      </div>
    )
  }
];

export default function FeatureStory() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-16 bg-background dark:bg-[#0a0a0a] relative border-t border-primary/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-40 md:space-y-64 relative z-10">
        {features.map((feature, index) => (
          <div 
            key={feature.num} 
            className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 relative"
          >
            <div className={`absolute top-0 opacity-[0.03] dark:opacity-[0.05] text-[12rem] md:text-[20rem] font-bold tracking-tighter leading-none pointer-events-none select-none z-0 text-primary dark:text-white transition-colors duration-500 ${index % 2 === 1 ? 'right-0 lg:-right-20' : 'left-0 lg:-left-20'}`}>
              {feature.num}
            </div>

            <div className={`w-full lg:w-5/12 relative z-10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary/40 dark:text-white/40 mb-6 flex items-center gap-4 transition-colors duration-500">
                <span className="w-8 h-[1px] bg-primary/40 dark:bg-white/40 transition-colors duration-500" />
                Phase {feature.num}
              </div>
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl font-medium tracking-tight text-primary dark:text-white mb-8 leading-[1.1] transition-colors duration-500"
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-primary/60 dark:text-white/60 font-light leading-relaxed transition-colors duration-500"
              >
                {feature.desc}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full lg:w-7/12 h-[400px] md:h-[500px] bg-background-alt dark:bg-[#111111] relative z-10 transition-colors duration-500 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
            >
              {feature.visual}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
