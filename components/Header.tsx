import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50">
       <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-24 flex items-center justify-start">
          {/* 
            Logo Container 
            Responsive Heights:
            - Mobile: 36px (Increased by 50% from 24px)
            - Tablet (sm): 32px
            - Desktop (lg): 30px
          */}
          <a 
            href="/" 
            className="h-[36px] sm:h-[32px] lg:h-[30px] block group cursor-pointer transition-opacity hover:opacity-90"
          >
              {/* Mobile Logo */}
              <img 
                src="https://images2.imgbox.com/c9/3b/Ohq22Gp1_o.png" 
                alt="Archer Logo" 
                className="w-auto h-full object-contain sm:hidden"
                loading="eager"
              />
              {/* Tablet & Desktop Logo */}
              <img 
                src="https://images2.imgbox.com/a3/95/AlxoXhvB_o.png" 
                alt="Archer Logo" 
                className="hidden sm:block w-auto h-full object-contain"
                loading="eager"
              />
          </a>
       </div>
    </header>
  );
};

export default Header;