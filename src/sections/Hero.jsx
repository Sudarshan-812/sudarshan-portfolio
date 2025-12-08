import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { USER_DATA } from '../data';
import useTypewriter from '../hooks/useTypewriter';
import Spotlight from '../components/ui/Spotlight';
import AnimatedCodeWindow from '../components/ui/CodeWindow';

const Hero = () => {
  const words = useMemo(() => USER_DATA.subRoles, []);
  const typedText = useTypewriter(words);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-6 relative overflow-hidden bg-white dark:bg-black/[0.96] antialiased">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60 hidden dark:block" fill="white" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-500 animate-pulse"></span> Online & Ready
          </div>
          {/* RESPONSIVE FONT SIZE FIX */}
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-display font-bold text-neutral-900 dark:text-white mb-6 leading-[1.1] md:leading-[0.9] tracking-tighter">
            Building <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500 dark:from-purple-400 dark:to-purple-600">Digital Reality</span>
          </h1>
          <h3 className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-8 font-light h-[30px] md:h-[40px]">
              I am a <span className="text-neutral-900 dark:text-white font-medium">{typedText}</span><span className="animate-blink text-purple-500">|</span>
          </h3>
          <div className="flex gap-4 items-center">
            <motion.a href={USER_DATA.resumeLink} download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 md:px-8 md:py-4 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold rounded-full inline-flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-gray-200 transition-colors shadow-lg dark:shadow-none text-sm md:text-base">
              Download CV <Download size={18} />
            </motion.a>
          </div>
        </motion.div>
        
        {/* Hidden on very small screens, visible on tablets/desktops */}
        <div className="relative flex justify-center items-center hidden md:flex">
            <motion.div initial={{ opacity: 0, y: 50, rotate: -5 }} animate={{ opacity: 1, y: 0, rotate: -2 }} transition={{ delay: 0.5, duration: 0.8 }} className="relative z-20 w-full max-w-[500px] transform-gpu">
                <AnimatedCodeWindow />
            </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;