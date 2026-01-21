import React from 'react';

const Partners: React.FC = () => {
  return (
    <div className="w-full border-t border-border-gray flex items-center justify-center py-12 bg-black/50 backdrop-blur-sm">
      {/* 
         Group Triggering (Point 4):
         The 'group' class on the parent allows child elements to react 
         simultaneously when any part of this container is hovered.
      */}
      <div className="flex flex-row items-center gap-6 group cursor-pointer">
        
        {/* 
           Color Transition (Point 2):
           Text set to "BACKED BY" with a transition from text-gray-500 to text-accent.
        */}
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-500 group-hover:text-accent transition-colors duration-300 pt-1 select-none">
            BACKED BY
        </span>
        
        {/* 
           Opacity Pop (Point 3):
           The logo container starts at 70% opacity and 'pops' to 100% 
           on hover with a smooth 300ms transition.
        */}
        <div 
          className="h-7 sm:h-9 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
          style={{ aspectRatio: '358.43 / 46.23' }}
        >
            {/* Logo Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center px-2">
                <img 
                  src="https://images2.imgbox.com/28/fa/UxE3hXYz_o.png" 
                  alt="Colosseum Logo" 
                  className="w-full h-auto object-contain max-h-full"
                  loading="eager"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;