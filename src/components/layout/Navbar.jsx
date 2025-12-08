import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { USER_DATA } from '../../data';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = ({ isDark, toggleTheme, isVisible }) => {
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
      else if(target) target.scrollIntoView({ behavior: 'smooth' });
  }

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/50 backdrop-blur-xl border-b border-black/5 dark:border-white/5 py-4' : 'bg-transparent py-6'}`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            <a href="#home" className="text-2xl font-display font-bold text-neutral-900 dark:text-white tracking-tighter z-[60]">
              {USER_DATA.name}<span className="text-purple-600 dark:text-purple-500">.</span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
                {/* Theme Toggle with ARIA */}
                <div role="button" aria-label="Toggle dark mode" onClick={toggleTheme} className="cursor-pointer">
                   <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                </div>
                <button onClick={() => scrollTo('#contact')} className="px-5 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-full hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white transition-colors shadow-lg dark:shadow-none">Let's Talk</button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-4 md:hidden z-[60]">
                <div role="button" aria-label="Toggle dark mode" onClick={toggleTheme}>
                  <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                </div>
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  aria-label="Toggle menu"
                  className="text-neutral-900 dark:text-white text-2xl focus:outline-none"
                >
                  {isOpen ? <X /> : <Menu />}
                </button>
            </div>
          </div>

          {/* Full Screen Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col justify-center items-center gap-8 md:hidden"
              >
                {['Home', 'About', 'Stack', 'Projects', 'Contact'].map((item, i) => (
                    <motion.button 
                      key={item} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      onClick={() => scrollTo(`#${item.toLowerCase() === 'stack' ? 'tech-stack' : item.toLowerCase()}`)} 
                      className="text-4xl font-display font-bold text-neutral-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {item}
                    </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;