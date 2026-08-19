import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-8 md:px-16 py-4 transition-all duration-500",
        isScrolled 
          ? "bg-background/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-primary/[0.04] dark:border-white/10 py-5" 
          : "bg-transparent py-8"
      )}
    >
      <div className="flex-1 flex items-center">
        <a href="#" className="text-xl tracking-tight text-primary dark:text-white font-medium flex items-center gap-3">
          <span className="w-4 h-4 bg-primary dark:bg-white rounded-full transition-colors duration-500" />
          Tripline
        </a>
      </div>

      <div className="hidden md:flex flex-1 items-center justify-center space-x-10">
        {['Journey', 'How it works', 'Explore'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, '-')}`}
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-primary/40 dark:text-white/40 hover:text-primary dark:hover:text-white transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary dark:bg-white transition-all duration-500 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex-1 flex items-center justify-end space-x-6">
        
        <button 
          onClick={() => setIsDark(!isDark)}
          className="relative w-12 h-6 rounded-full bg-primary/10 dark:bg-white/10 border border-primary/20 dark:border-white/20 flex items-center px-1 transition-colors duration-300 focus:outline-none"
          aria-label="Toggle dark mode"
        >
          <motion.div 
            className="w-4 h-4 rounded-full bg-primary dark:bg-white shadow-sm"
            animate={{ x: isDark ? 22 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>

        <button className="hidden md:block text-[11px] uppercase tracking-[0.2em] font-semibold text-primary/40 dark:text-white/40 hover:text-primary dark:hover:text-white transition-colors">
          Sign in
        </button>
        <button className="px-6 py-3 bg-primary dark:bg-white text-background dark:text-[#0a0a0a] text-[11px] uppercase tracking-[0.1em] font-semibold rounded-full hover:bg-accent dark:hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-lg shadow-primary/10">
          Plan trip
        </button>
      </div>
    </motion.nav>
  );
}
