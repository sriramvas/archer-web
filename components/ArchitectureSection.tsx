import React from 'react';

const ArchitectureSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-black text-white relative overflow-hidden border-t border-border-gray">
       {/* Background Grid - Subtle white pattern on Black */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header - Converted to Geist Sans (font-sans) and updated to full white */}
        <div className="text-center mb-16 sm:mb-24">
            <h2 className="font-sans font-medium text-5xl sm:text-6xl lg:text-7xl tracking-tighter mb-6 text-white">
              The Mechanism
            </h2>
            <p className="max-w-2xl mx-auto font-mono text-sm sm:text-base leading-relaxed text-gray-400 font-medium uppercase tracking-widest">
              Dual Batch Flow Auctions segregate flow to maximize efficiency and fairness.
            </p>
        </div>

        {/* Sleek Diagram Container - Dark Box with Accent Shadow */}
        <div className="w-full max-w-5xl mx-auto relative group">
            
            {/* Subtle glow shadow for depth on dark bg */}
            <div className="absolute top-4 left-4 w-full h-full bg-accent/5 rounded-3xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

            <div className="relative bg-[#050505] text-white rounded-3xl p-8 sm:p-16 overflow-hidden shadow-2xl ring-1 ring-white/10">
                
                {/* Subtle Inner Grid inside the box */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                <svg viewBox="0 0 800 700" className="w-full h-auto select-none relative z-10">
                  <defs>
                    <linearGradient id="gradient-flow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#333" />
                        <stop offset="50%" stopColor="#FF7834" />
                        <stop offset="100%" stopColor="#333" />
                    </linearGradient>
                  </defs>

                  <style>{`
                    .flow-dash {
                      stroke-dasharray: 6 6;
                      animation: flowMove 30s linear infinite;
                      opacity: 0.5;
                    }
                    @keyframes flowMove {
                      to { stroke-dashoffset: -1000; }
                    }
                  `}</style>

                  {/* 1. INPUT STREAM */}
                  <g transform="translate(400, 40)">
                      <text y="-20" textAnchor="middle" className="font-mono text-[9px] tracking-[0.2em] fill-gray-500 uppercase">Incoming</text>
                      <rect x="-100" y="-10" width="200" height="40" rx="20" fill="#111" stroke="#333" />
                      <text y="15" textAnchor="middle" className="font-sans font-bold text-sm fill-white tracking-wider">ORDER FLOW</text>
                  </g>

                  {/* Paths Splitting */}
                  <path d="M400 80 V 120" stroke="#333" strokeWidth="1" />
                  <path d="M400 120 H 250 V 160" stroke="#333" strokeWidth="1" />
                  <path d="M400 120 H 550 V 160" stroke="#333" strokeWidth="1" />

                  {/* 2. CLASSIFICATION */}
                  <g transform="translate(250, 200)">
                      <rect x="-80" y="-40" width="160" height="80" rx="4" fill="#0A0A0A" stroke="#222" />
                      <line x1="-80" y1="-36" x2="80" y2="-36" stroke="#10B981" strokeWidth="2" />
                      <text y="5" textAnchor="middle" className="font-display text-xl fill-white tracking-wider">MAKERS</text>
                      <text y="25" textAnchor="middle" className="font-mono text-[9px] fill-gray-500 uppercase">Liquidity Providers</text>
                  </g>

                  <g transform="translate(550, 200)">
                      <rect x="-80" y="-40" width="160" height="80" rx="4" fill="#0A0A0A" stroke="#222" />
                      <line x1="-80" y1="-36" x2="80" y2="-36" stroke="#FF7834" strokeWidth="2" />
                      <text y="5" textAnchor="middle" className="font-display text-xl fill-white tracking-wider">TAKERS</text>
                      <text y="25" textAnchor="middle" className="font-mono text-[9px] fill-gray-500 uppercase">Aggregators</text>
                  </g>

                  {/* Paths Merging to Core */}
                  <path d="M250 240 V 280 H 400" stroke="#333" strokeWidth="1" />
                  <path d="M550 240 V 280 H 400" stroke="#333" strokeWidth="1" />
                  <path d="M400 280 V 320" stroke="#333" strokeWidth="1" />

                  {/* 3. CORE ENGINE */}
                  <g transform="translate(400, 420)">
                      <circle cx="0" cy="0" r="110" fill="none" stroke="#222" strokeWidth="1" />
                      <circle cx="0" cy="0" r="100" fill="#080808" stroke="#333" strokeWidth="1" />
                      <circle cx="0" cy="0" r="70" fill="none" stroke="#222" strokeWidth="20" strokeDasharray="2 4" opacity="0.5" />
                      <text y="-10" textAnchor="middle" className="font-display text-2xl fill-white tracking-widest">BATCH</text>
                      <text y="15" textAnchor="middle" className="font-mono text-xs fill-gray-400 tracking-wider">AUCTION</text>
                      
                      <circle cx="0" cy="-100" r="3" fill="#FF7834">
                          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="10s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="100" r="3" fill="#10B981">
                          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="10s" repeatCount="indefinite" begin="5s" />
                      </circle>
                  </g>

                  {/* 4. SETTLEMENT */}
                  <path d="M400 520 V 580" stroke="url(#gradient-flow)" strokeWidth="2" className="flow-dash" />
                  
                  <g transform="translate(400, 620)">
                       <path d="M-120 0 L-110 -20 H 110 L 120 0 L 110 20 H -110 Z" fill="#111" stroke="#333" />
                       <text y="5" textAnchor="middle" className="font-mono text-xs fill-white tracking-[0.4em] uppercase">Settlement</text>
                       <circle cx="-130" cy="0" r="2" fill="#333" />
                       <circle cx="130" cy="0" r="2" fill="#333" />
                  </g>
                </svg>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
