import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Train, Hotel, Coffee, Navigation, Clock, CheckCircle2, Circle } from 'lucide-react';

export default function ProductPreview() {
  const containerRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 30, stiffness: 100 });
  const mouseRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 30, stiffness: 100 });

  function handleMouseMove(event) {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scrollRotateX = useSpring(useTransform(scrollYProgress, [0, 1], [30, 0]), { damping: 30, stiffness: 100 });
  const scrollScale = useSpring(useTransform(scrollYProgress, [0, 1], [0.85, 1]), { damping: 30, stiffness: 100 });
  const scrollY = useSpring(useTransform(scrollYProgress, [0, 1], [150, 0]), { damping: 30, stiffness: 100 });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <section className="py-32 md:py-48 px-6 md:px-16 bg-primary dark:bg-[#0a0a0a] relative overflow-hidden" ref={containerRef}>
      
      <div className="absolute inset-0 bg-primary z-0" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-24 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left max-w-xl"
          >
            <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-white/40" />
              The Interface
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
              A workspace designed with surgical precision.
            </h2>
            <p className="text-white/60 font-light text-lg">
              No clutter. No unnecessary gradients. Just your itinerary presented with absolute clarity.
            </p>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: scrollOpacity }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-accent/30 dark:bg-white/10 blur-[120px] rounded-[100%] pointer-events-none z-0" 
        />

        <div 
          className="relative perspective-[2000px] z-10"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div style={{ rotateX: scrollRotateX, scale: scrollScale, y: scrollY, opacity: scrollOpacity, transformStyle: "preserve-3d" }}>
            <motion.div 
              style={{ rotateX: mouseRotateX, rotateY: mouseRotateY, transformStyle: "preserve-3d" }}
              className="w-full bg-[#fcfcfc] rounded-lg md:rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)_inset] border border-white/20 overflow-hidden flex flex-col md:flex-row h-[700px] relative"
            >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none z-50 mix-blend-overlay" />

            <div className="hidden md:flex flex-col w-[280px] bg-[#f5f5f5] border-r border-black/[0.04] p-6 z-10">
              <div className="text-[11px] font-bold tracking-widest uppercase text-black mb-10 mt-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full" />
                Rajasthan Tour
              </div>
              
              <div className="space-y-8 flex-1">
                <div>
                  <div className="text-[10px] font-semibold text-black/40 uppercase tracking-[0.2em] mb-4 pl-3">Views</div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3 px-3 py-2 bg-black/[0.04] rounded-md text-[13px] font-medium text-black cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.02)] border border-black/[0.04]">
                      <Navigation className="w-4 h-4 opacity-70" />
                      <span>Journey</span>
                    </div>
                    <div className="flex items-center space-x-3 px-3 py-2 hover:bg-black/[0.02] rounded-md text-[13px] text-black/60 transition-colors cursor-pointer">
                      <Clock className="w-4 h-4 opacity-70" />
                      <span>Schedule</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-semibold text-black/40 uppercase tracking-[0.2em] mb-4 pl-3">Destinations</div>
                  <div className="space-y-1 relative pl-3">
                    <div className="absolute left-[19px] top-4 bottom-4 w-[1px] bg-black/10" />
                    
                    <div className="flex items-center space-x-3 px-2 py-1.5 text-[13px] text-black/60 cursor-pointer hover:text-black transition-colors relative z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                      <span>Delhi</span>
                    </div>
                    <div className="flex items-center space-x-3 px-2 py-1.5 text-[13px] font-medium text-black cursor-pointer relative z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#184F3D] shadow-[0_0_0_3px_rgba(24,79,61,0.1)]" />
                      <span>Jaipur</span>
                    </div>
                    <div className="flex items-center space-x-3 px-2 py-1.5 text-[13px] text-black/60 cursor-pointer hover:text-black transition-colors relative z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                      <span>Udaipur</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 p-8 md:p-16 bg-white overflow-y-auto no-scrollbar relative z-10">
              <div className="max-w-2xl">
                <div className="flex items-end justify-between mb-12 pb-6 border-b border-black/[0.04]">
                   <h3 className="text-3xl font-medium tracking-tight text-black leading-none">Jaipur</h3>
                   <span className="text-xs tracking-[0.1em] uppercase text-black/40 font-medium">Oct 12 – Oct 14</span>
                </div>

                <div className="space-y-16">
                  
                  <div>
                    <h4 className="text-[10px] font-semibold text-black/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
                      Day 1 • Morning
                      <span className="flex-1 h-[1px] bg-black/[0.04]" />
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start group cursor-pointer">
                        <div className="mt-1 mr-6">
                          <CheckCircle2 className="w-5 h-5 text-[#184F3D]/80" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 bg-white border border-black/[0.06] rounded-lg p-5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-black/[0.1]">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center space-x-3">
                              <Train className="w-4 h-4 text-black/40" />
                              <span className="text-[15px] font-medium text-black">Vande Bharat Express</span>
                            </div>
                            <span className="text-[13px] text-black/50 font-medium tracking-wide">08:30</span>
                          </div>
                          <p className="text-[13px] text-black/40 ml-7">Train 12009 • NDLS to JP</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-semibold text-black/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
                      Day 1 • Afternoon
                      <span className="flex-1 h-[1px] bg-black/[0.04]" />
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start group cursor-pointer">
                        <div className="mt-1 mr-6">
                          <Circle className="w-5 h-5 text-black/10 group-hover:text-black/30 transition-colors" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 bg-white border border-black/[0.06] rounded-lg p-5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-black/[0.1]">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center space-x-3">
                              <Hotel className="w-4 h-4 text-black/40" />
                              <span className="text-[15px] font-medium text-black">Check-in at The Raj Palace</span>
                            </div>
                            <span className="text-[13px] text-black/50 font-medium tracking-wide">14:00</span>
                          </div>
                          <p className="text-[13px] text-black/40 ml-7">Confirmation: #HTL-9923K</p>
                        </div>
                      </div>

                      <div className="flex items-start group cursor-pointer">
                        <div className="mt-1 mr-6">
                          <Circle className="w-5 h-5 text-black/10 group-hover:text-black/30 transition-colors" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 bg-white border border-black/[0.06] rounded-lg p-5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-black/[0.1]">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center space-x-3">
                              <Coffee className="w-4 h-4 text-black/40" />
                              <span className="text-[15px] font-medium text-black">Local Café & City Palace</span>
                            </div>
                            <span className="text-[13px] text-black/50 font-medium tracking-wide">16:00</span>
                          </div>
                          <p className="text-[13px] text-black/40 ml-7">Explore the old city markets</p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
  );
}
