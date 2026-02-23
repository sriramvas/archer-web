import React from 'react';

const SolanaSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-black text-white relative overflow-hidden border-t border-border-gray">
      {/* Background Texture - grid on black */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          
          {/* Left: Sticky Header */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 flex flex-col items-center text-center lg:items-start lg:text-left">
             
             {/* Label Section - Styled like 'Learn' on mobile/tablet, distinctive on desktop */}
             <div className="flex items-center gap-3 mb-6 opacity-90 lg:opacity-100">
                <span className="w-4 h-[1px] lg:w-8 lg:h-[2px] bg-accent"></span>
                <span className="font-mono text-accent text-[10px] lg:text-xs font-medium tracking-[0.4em] lg:tracking-[0.3em] uppercase">
                  The Foundation
                </span>
                <span className="w-4 h-[1px] bg-accent lg:hidden"></span>
             </div>

             <h2 className="font-sans font-medium text-5xl sm:text-6xl tracking-tighter mb-8 text-white leading-none">
                {/* Single line for mobile/tablet */}
                <span className="lg:hidden">Built For Retail</span>
                {/* Multiline for desktop */}
                <span className="hidden lg:block">Built For<br/>Retail Users</span>
             </h2>
          </div>

          {/* Right: Features List in Minimalist Box Format */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
             
             {/* Box 1: FAIR FILLS */}
             <div className="group relative bg-[#050505] border border-white/5 hover:border-accent/30 transition-all duration-500 rounded-sm overflow-hidden">
                {/* Mild Orange Glow/Outline Indicator */}
                <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative z-10">
                    <div className="shrink-0 flex items-center gap-4 md:w-64">
                        <span className="font-mono text-[10px] text-accent/50 group-hover:text-accent transition-colors duration-300 tracking-widest uppercase">[ 01 ]</span>
                        <h3 className="font-mono font-normal text-2xl sm:text-3xl tracking-tighter text-white group-hover:text-accent transition-colors duration-300 uppercase whitespace-nowrap">
                          Fair Fills
                        </h3>
                    </div>
                    
                    <div className="hidden md:block h-12 w-px bg-white/10 group-hover:bg-accent/20 transition-colors duration-500" />

                    <div className="flex-1">
                        <p className="font-mono font-medium text-sm sm:text-base leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                           All trades are settled fully onchain to bring transparent execution.
                        </p>
                    </div>
                </div>
             </div>

             {/* Box 2: BEST PRICES */}
             <div className="group relative bg-[#050505] border border-white/5 hover:border-accent/30 transition-all duration-500 rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative z-10">
                    <div className="shrink-0 flex items-center gap-4 md:w-64">
                        <span className="font-mono text-[10px] text-accent/50 group-hover:text-accent transition-colors duration-300 tracking-widest uppercase">[ 02 ]</span>
                        <h3 className="font-mono font-normal text-2xl sm:text-3xl tracking-tighter text-white group-hover:text-accent transition-colors duration-300 uppercase whitespace-nowrap">
                          Best Prices
                        </h3>
                    </div>

                    <div className="hidden md:block h-12 w-px bg-white/10 group-hover:bg-accent/20 transition-colors duration-500" />

                    <div className="flex-1">
                        <p className="font-mono font-medium text-sm sm:text-base leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                           Market makers on Archer are guarded from toxic flow, enabling tighter spreads.
                        </p>
                    </div>
                </div>
             </div>
             
             {/* Box 3: LOW FEES */}
             <div className="group relative bg-[#050505] border border-white/5 hover:border-accent/30 transition-all duration-500 rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative z-10">
                    <div className="shrink-0 flex items-center gap-4 md:w-64">
                        <span className="font-mono text-[10px] text-accent/50 group-hover:text-accent transition-colors duration-300 tracking-widest uppercase">[ 03 ]</span>
                        <h3 className="font-mono font-normal text-2xl sm:text-3xl tracking-tighter text-white group-hover:text-accent transition-colors duration-300 uppercase whitespace-nowrap">
                          Low Fees
                        </h3>
                    </div>

                    <div className="hidden md:block h-12 w-px bg-white/10 group-hover:bg-accent/20 transition-colors duration-500" />

                    <div className="flex-1">
                        <p className="font-mono font-medium text-sm sm:text-base leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                           No middlemen. No hidden costs. No MEV.
                        </p>
                    </div>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SolanaSection;
