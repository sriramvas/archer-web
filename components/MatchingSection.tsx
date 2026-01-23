import React from 'react';

const FeatureBox: React.FC<{ 
  text: string; 
  icon: React.ReactNode;
  href: string;
}> = ({ text, icon, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-col items-start justify-between p-6 sm:p-10 border border-white/5 bg-[#050505] hover:bg-[#080808] transition-all duration-500 w-full min-h-[350px] lg:min-h-[520px] overflow-hidden cursor-pointer text-[#d5d5d5] block"
  >
    
    {/* Background Grid Effect (Subtle blueprint pattern) */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

    {/* Top Section: Padding replacement for removed index */}
    <div className="w-full flex items-center justify-between mb-4 h-4">
    </div>

    {/* Icon Area: Significantly larger illustrations */}
    <div className="mb-8 text-[#d5d5d5]/30 group-hover:text-[#d5d5d5] transition-all duration-700 flex items-center justify-center w-full flex-1">
        <div className="transform scale-100 sm:scale-125 lg:scale-150">
          {icon}
        </div>
    </div>
    
    {/* Bottom Section: Text and Arrow */}
    <div className="w-full flex items-end justify-between gap-4 relative z-10">
      <h3 className="font-sans font-medium text-2xl sm:text-3xl leading-[1.1] tracking-tighter text-white max-w-[80%]">
        {text}
      </h3>
      
      {/* Interactive Arrow Cue */}
      <div className="mb-1 text-accent transform group-hover:translate-x-1 transition-transform duration-300">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>

    {/* Subtle Corner Accents */}
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/0 group-hover:border-accent/50 transition-all duration-500" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/0 group-hover:border-accent/50 transition-all duration-500" />
  </a>
);

const MatchingSection: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-20 lg:py-24 relative bg-black border-t border-border-gray">
      {/* Background Pattern for Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-4 opacity-90">
              <span className="w-4 h-[1px] bg-accent"></span>
              <span className="font-mono text-accent text-[10px] tracking-[0.4em] uppercase">
                LEARN
              </span>
              <span className="w-4 h-[1px] bg-accent"></span>
            </div>
            <h2 className="font-sans font-medium text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-white">
              Tech Explainers
            </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          
          {/* Box 1: Introducing Archer */}
          <FeatureBox 
            text="Introducing Archer"
            href="https://x.com/mmdhrumil/status/1983161517617926514"
            icon={
              <div className="relative w-32 h-32 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <img 
                  src="/img/blog1.png" 
                  alt="Archer Logo"
                  className="w-full h-full object-contain brightness-110"
                />
              </div>
            }
          />

          {/* Box 2: No CLOBs for Solana! */}
          <FeatureBox 
            text="No CLOBs for Solana!"
            href="https://x.com/mmdhrumil/status/1996237930030158071"
            icon={
              <svg width="220" height="220" viewBox="0 0 200 200" className="overflow-visible">
                <defs>
                  <filter id="block-glow-minimal" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="0.6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.2">
                  <line x1="100" y1="85" x2="55" y2="60" />
                  <line x1="100" y1="85" x2="145" y2="60" />
                  <line x1="100" y1="85" x2="100" y2="140" strokeOpacity="0.3" />
                  <line x1="55" y1="60" x2="20" y2="85" strokeDasharray="3 3" />
                  <line x1="145" y1="60" x2="180" y2="85" strokeDasharray="3 3" />
                  <line x1="100" y1="140" x2="55" y2="165" strokeOpacity="0.1" />
                  <line x1="100" y1="140" x2="145" y2="165" strokeOpacity="0.1" />
                </g>

                <g className="text-accent" opacity="0.6">
                   <g transform="translate(77.5, 72.5)">
                      <circle r="4" fill="black" stroke="currentColor" strokeWidth="1" />
                      <path d="M-1.5 -1.5 L1.5 1.5 M1.5 -1.5 L-1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                   </g>
                   <g transform="translate(122.5, 72.5)">
                      <circle r="4" fill="black" stroke="currentColor" strokeWidth="1" />
                      <path d="M-1.5 -1.5 L1.5 1.5 M1.5 -1.5 L-1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                   </g>
                   <g transform="translate(100, 118)">
                      <circle r="4" fill="black" stroke="currentColor" strokeWidth="1" />
                      <path d="M-1.5 -1.5 L1.5 1.5 M1.5 -1.5 L-1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                   </g>
                </g>

                <g transform="translate(100, 85) scale(1.15)" className="text-accent" filter="url(#block-glow-minimal)">
                  <path d="M0 -15 L17.32 -5 L17.32 15 L0 25 L-17.32 15 L-17.32 -5 Z" fill="currentColor" fillOpacity="0.12" />
                  <path d="M0 -15 L17.32 -5 L17.32 15 L0 25 L-17.32 15 L-17.32 -5 Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />
                  <path d="M0 -15 L17.32 -5 L0 5 L-17.32 -5 Z" fill="currentColor" fillOpacity="0.18" />
                  <line x1="0" y1="5" x2="0" y2="25" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />
                  <line x1="17.32" y1="-5" x2="0" y2="5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />
                  <line x1="-17.32" y1="-5" x2="0" y2="5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />
                </g>

                {[
                  { x: 55, y: 60 }, { x: 145, y: 60 }, { x: 100, y: 140 }, { x: 20, y: 85 }, { x: 180, y: 85 }, { x: 55, y: 165 }, { x: 145, y: 165 }
                ].map((pos, i) => (
                  <g key={i} transform={`translate(${pos.x}, ${pos.y}) scale(0.7)`} className="text-[#d5d5d5]/20">
                    <path d="M0 -15 L17.32 -5 L17.32 15 L0 25 L-17.32 15 L-17.32 -5 Z" fill="currentColor" fillOpacity="0.1" />
                    <path d="M0 -15 L17.32 -5 L17.32 15 L0 25 L-17.32 15 L-17.32 -5 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                    <line x1="0" y1="5" x2="0" y2="25" stroke="currentColor" strokeWidth="1" />
                  </g>
                ))}
              </svg>
            }
          />

          {/* Box 3: The Archer Manifesto */}
          <FeatureBox 
            text="The Archer Manifesto"
            href="https://x.com/mmdhrumil/status/2000931670225265123"
            icon={
              <svg width="180" height="180" viewBox="0 0 160 160" className="opacity-70">
                <rect x="25" y="15" width="110" height="130" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                <rect x="25" y="15" width="110" height="16" fill="currentColor" opacity="0.1" />
                <circle cx="34" cy="23" r="1.5" fill="currentColor" opacity="0.4" />
                <circle cx="41" cy="23" r="1.5" fill="currentColor" opacity="0.4" />
                <text x="130" y="25" textAnchor="end" fontFamily="Geist Mono" fontSize="6" fill="currentColor" opacity="0.4">v1.0.RC</text>
                <rect x="25" y="31" width="18" height="114" fill="currentColor" opacity="0.05" />
                <g transform="translate(50, 45)">
                   <rect x="0" y="0" width="70" height="5" fill="currentColor" className="text-accent" />
                   <rect x="0" y="12" width="85" height="3" fill="currentColor" opacity="0.4" />
                   <rect x="0" y="22" width="60" height="3" fill="currentColor" opacity="0.4" />
                   <rect x="0" y="40" width="80" height="4" fill="currentColor" opacity="0.6" />
                   <rect x="0" y="50" width="45" height="4" fill="currentColor" opacity="0.6" />
                   <rect x="0" y="68" width="75" height="4" fill="currentColor" opacity="0.6" />
                   <rect x="0" y="78" width="65" height="4" fill="currentColor" opacity="0.6" />
                </g>
              </svg>
            }
          />

        </div>
      </div>
    </div>
  );
};

export default MatchingSection;
