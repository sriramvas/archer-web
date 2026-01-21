import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import MatchingSection from './components/MatchingSection';
import SolanaSection from './components/SolanaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans overflow-x-hidden">
      <Header />

      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col w-full relative">
        <Hero />
        <Partners />
        <SolanaSection />
        <MatchingSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;