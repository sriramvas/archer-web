import React from 'react';
import Button from './ui/Button';
import OrderBook from './OrderBook';

const Hero: React.FC = () => {
  return (
    <div className="flex-1 w-full min-h-[calc(100vh-5rem)] relative flex flex-col lg:flex-row items-center justify-center overflow-hidden py-12 lg:py-0">
      
      {/* Grid Pattern Overlay - Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none z-0 mix-blend-overlay" />

      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left w-full lg:w-3/5 pt-32 sm:pt-40 lg:pt-20 selection:bg-accent selection:text-black">
          
          {/* Systems Online Label - Uses font-mono (Geist Mono) */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-accent animate-pulse rounded-full" />
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">SYSTEMS ONLINE</span>
          </div>

          {/* Main Headline - Set to exactly 97px on desktop (lg) with explicit line breaks */}
          <h1 className="font-sans font-medium text-6xl sm:text-7xl md:text-8xl lg:text-[97px] leading-[1.05] lg:leading-[0.95] tracking-tighter text-white mb-8 sm:mb-10 mix-blend-screen drop-shadow-2xl w-full">
              <span className="block whitespace-nowrap">The Onchain</span>
              <span className="block whitespace-nowrap">Spot Exchange</span>
          </h1>
          
          {/* Subtitle & CTA - Uses font-sans (Geist Sans) */}
          <div className="flex flex-col items-start gap-8 sm:gap-10 max-w-xl">
              <p className="font-sans text-base sm:text-lg text-gray-400 leading-relaxed text-left text-balance drop-shadow-md pr-0 lg:pr-8">
                <span className="font-medium uppercase tracking-tight text-white">Archer Protocol</span> enables onchain spot trading with the best fees & spreads across all of Solana.
              </p>
              
              <div className="w-full sm:w-auto min-w-[180px] group">
                <a href="https://tally.so/r/XxxNQV" target="_blank" rel="noopener noreferrer">
                  <Button className="!bg-accent !text-black hover:!bg-white !px-8 !py-4 transition-transform duration-300 hover:scale-105">
                    Join Waitlist
                  </Button>
                </a>
              </div>
          </div>
        </div>

        {/* Right Column: OrderBook Visual */}
        <div className="hidden lg:flex w-full lg:w-2/5 items-center justify-center lg:justify-end h-[450px] lg:h-[510px] relative mt-8 lg:mt-0">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
            
            {/* OrderBook Container */}
            <div className="w-full h-full max-w-sm border border-white/10 bg-black/40 backdrop-blur-sm relative overflow-hidden shadow-2xl shadow-black/50 rounded-sm">
               <OrderBook />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;