import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e907fa0a586?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const Column = ({ images, y, className }) => (
  <motion.div style={{ y }} className={`flex flex-col gap-6 w-full ${className}`}>
    {images.map((src, i) => (
      <div key={i} className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={src} 
          alt="Previous Trip" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    ))}
  </motion.div>
);

export default function DriftWall() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Duplicate arrays to make long columns
  const col1 = [...images.slice(0, 3), ...images.slice(0, 3)];
  const col2 = [...images.slice(3, 6), ...images.slice(3, 6)];
  const col3 = [...images.slice(5, 8), ...images.slice(5, 8)];

  return (
    <section 
      ref={containerRef} 
      className="py-32 px-6 md:px-16 bg-background dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-500 border-t border-primary/[0.04] dark:border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto relative z-20 mb-20 text-center">
        <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary/40 dark:text-white/40 mb-6 flex items-center justify-center gap-4">
          <span className="w-12 h-[1px] bg-primary/40 dark:bg-white/40" />
          Previous Trips
          <span className="w-12 h-[1px] bg-primary/40 dark:bg-white/40" />
        </div>
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-primary dark:text-white leading-[0.9]">
          Memories,<br/>beautifully preserved.
        </h2>
      </div>

      <div className="relative h-[80vh] w-full overflow-hidden flex justify-center items-center perspective-1000">
        
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1400px] -rotate-6 scale-110">
          <Column images={col1} y={y1} />
          <Column images={col2} y={y2} className="hidden md:flex -mt-[200px]" />
          <Column images={col3} y={y3} className="hidden md:flex" />
        </div>
      </div>
    </section>
  );
}
