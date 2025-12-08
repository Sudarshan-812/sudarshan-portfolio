import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { USER_DATA } from '../../data';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
      setIsOpen(false);
      const target = document.querySelector(id);
      if(window.lenis && target) window.lenis.scrollTo(target);
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/50 backdrop-blur-xl border-b border-black/5 dark:border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold text-neutral-900 dark:text-white tracking-tighter">{USER_DATA.name}<span className="text-purple-600 dark:text-purple-500">.</span></a>
        
        <div className="hidden lg:flex items-center gap-8">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button onClick={() => scrollTo('#contact')} className="px-5 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-full hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white transition-colors shadow-lg dark:shadow-none">Let's Talk</button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-900 dark:text-white text-2xl focus:outline-none">{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden bg-white dark:bg-black/95 backdrop-blur-xl overflow-hidden border-b border-black/10 dark:border-white/10">
            <div className="flex flex-col items-center py-8 gap-6 font-display">
               {['Home', 'About', 'Stack', 'Projects'].map((item) => (
                   <button key={item} onClick={() => scrollTo(`#${item.toLowerCase() === 'stack' ? 'tech-stack' : item.toLowerCase()}`)} className="text-neutral-900 dark:text-white text-xl font-medium">{item}</button>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;