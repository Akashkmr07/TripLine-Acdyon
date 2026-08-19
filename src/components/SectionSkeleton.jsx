import React from 'react';

export default function SectionSkeleton() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background dark:bg-[#0a0a0a] min-h-[50vh] flex flex-col items-center justify-center transition-colors duration-500">
      <div className="w-full max-w-5xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="w-32 h-6 bg-primary/10 dark:bg-white/10 rounded-full animate-pulse" />
          <div className="w-3/4 md:w-1/2 h-16 md:h-20 bg-primary/10 dark:bg-white/10 rounded-3xl animate-pulse" />
          <div className="w-2/3 md:w-1/3 h-6 bg-primary/5 dark:bg-white/5 rounded-full animate-pulse" />
        </div>
        
        <div className="w-full aspect-video md:aspect-[21/9] bg-primary/5 dark:bg-white/5 rounded-3xl animate-pulse flex items-center justify-center overflow-hidden relative">
           <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-primary/5 dark:via-white/5 to-transparent" />
        </div>
      </div>
    </section>
  );
}
