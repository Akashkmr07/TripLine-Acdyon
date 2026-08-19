import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-32 pb-12 px-6 md:px-16 bg-background dark:bg-[#0a0a0a] border-t border-primary/5 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-8 mb-32">
          
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-6 h-6 rounded-full bg-primary dark:bg-white flex items-center justify-center transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-background dark:bg-[#0a0a0a] transition-colors duration-500" />
                </div>
                <span className="text-2xl font-semibold tracking-tight text-primary dark:text-white transition-colors duration-500">Tripline</span>
              </div>
              <p className="text-primary/60 dark:text-white/60 text-lg font-light max-w-sm leading-relaxed mb-10 transition-colors duration-500">
                The visual travel planner that turns scattered bookings into one beautiful, connected timeline.
              </p>
            </div>
            
            <div className="w-full max-w-md">
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary/40 dark:text-white/40 mb-4 transition-colors duration-500">Stay Updated</h4>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-primary/[0.02] dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-primary dark:text-white outline-none focus:border-primary/30 dark:focus:border-white/30 transition-all duration-300 placeholder:text-primary/30 dark:placeholder:text-white/30"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary dark:bg-white text-background dark:text-[#0a0a0a] rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary/40 dark:text-white/40 mb-8 transition-colors duration-500">Product</h4>
              <ul className="space-y-4">
                {['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-primary/60 dark:text-white/60 hover:text-primary dark:hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary/40 dark:text-white/40 mb-8 transition-colors duration-500">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Blog', 'Contact', 'Partners'].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-primary/60 dark:text-white/60 hover:text-primary dark:hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary/40 dark:text-white/40 mb-8 transition-colors duration-500">Legal</h4>
              <ul className="space-y-4">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-medium text-primary/60 dark:text-white/60 hover:text-primary dark:hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 dark:border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 transition-colors duration-500">
          <div className="flex items-center space-x-6">
            {['Twitter', 'Instagram', 'LinkedIn'].map((platform, i) => (
              <a key={i} href="#" className="text-sm font-medium text-primary/40 dark:text-white/40 hover:text-primary dark:hover:text-white transition-colors duration-300">
                {platform}
              </a>
            ))}
          </div>
          <div className="text-sm text-primary/40 dark:text-white/40 font-medium transition-colors duration-500">
            © {currentYear} Tripline Inc. All rights reserved.
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center translate-y-1/3">
        <h1 className="text-[15vw] font-bold tracking-tighter text-primary/[0.02] dark:text-white/[0.02] leading-none transition-colors duration-500">
          TRIPLINE
        </h1>
      </div>
    </footer>
  );
}
