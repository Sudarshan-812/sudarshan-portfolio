import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import TechMarquee from './sections/TechStack';
import ExpandableProjects from './sections/Projects';
import Contact from './sections/Contact';
import FloatingDock from './components/ui/FloatingDock';
import useSmoothScroll from './hooks/useSmoothScroll';

const App = () => {
  useSmoothScroll();
  
  // 1. New State to track if a project modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Theme Logic
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <main className="selection:bg-purple-500/30 selection:text-purple-500 pb-20 relative overflow-x-hidden transition-colors duration-500 bg-gray-50 dark:bg-black text-neutral-900 dark:text-white">
      {/* 2. Pass visibility prop to Navbar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} isVisible={!isModalOpen} />
      
      <Hero />
      
      <div className="relative w-full z-30 bg-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(#00000020_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 dark:from-black to-transparent z-10" />

          <About />
          <TechMarquee />
          
          {/* 3. Pass the setter to Projects so it can tell App when modal opens */}
          <ExpandableProjects setIsModalOpen={setIsModalOpen} />
          
          <Contact />
          <Footer />
      </div>

      {/* 4. Pass visibility prop to Dock */}
      <FloatingDock isVisible={!isModalOpen} />
    </main>
  );
};

export default App;