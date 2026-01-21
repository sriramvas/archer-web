import React from 'react';
import { LabelPointProps } from '../types';

const TechLabel: React.FC<LabelPointProps> = ({ textLeft, textRight, top, left, right, align = 'left' }) => {
  return (
    <div 
      className="absolute hidden md:flex items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-300 tracking-widest uppercase z-10 pointer-events-none mix-blend-difference"
      style={{ top, left, right }}
    >
        <span className="text-gray-500">//</span>
        <span className="text-white">{textLeft}</span>
        
        <div className="flex items-center mx-2 opacity-50">
            <span className="mx-1">»</span>
            <span className="mx-1">»</span>
        </div>

        <span className="text-white">{textRight}</span>
        
        {/* Decorative dotted line extending based on alignment */}
        <div 
            className={`absolute border-b border-dotted border-gray-600 w-24 sm:w-32 -z-10 ${
                align === 'left' ? 'left-full ml-4' : 'right-full mr-4'
            }`} 
        />
    </div>
  );
};

export default TechLabel;