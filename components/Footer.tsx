import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border-gray bg-black py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Links */}
        <div className="flex items-center gap-8 font-mono text-sm text-gray-400 uppercase tracking-wider">
            <a 
              href="https://x.com/ArcherExchange_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://t.me/mmdhrumil" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 font-mono text-xs uppercase tracking-widest">
            © 2026 ARCHER
        </div>
      </div>
    </footer>
  );
};

export default Footer;