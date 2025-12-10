import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Download, MapPin, ChevronDown, ArrowRight, Zap, Terminal, Sparkles } from 'lucide-react';
// 👇 Ensure path is correct
import { USER_DATA } from '../data/index.jsx'; 
import Spotlight from '../components/ui/Spotlight';

// --- Internal Typewriter Component ---
const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const currentWord = words[index % words.length];
    
    const updateText = () => {
      setText((prev) => 
        isDeleting 
          ? currentWord.substring(0, prev.length - 1) 
          : currentWord.substring(0, prev.length + 1)
      );
    };

    const timer = setTimeout(updateText, speed);

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 2000); 
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
      setSpeed(100);
    } else if (isDeleting) {
      setSpeed(50);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words, speed]);

  return (
    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
      {text}
      <span className="text-purple-400 animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black selection:bg-purple-500/30">
      
      {/* --- 1. Background Magic (Grid + Spotlight) --- */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      {/* Grid Pattern with Fade Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

          {/* --- 2. Top Badge (Pill) --- */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-300 tracking-wide">
                Available to Join Immediately
              </span>
            </div>
          </motion.div>

          {/* --- 3. Name (Fixed Size & Gradient) --- */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 relative z-20"
          >
            {USER_DATA.name}
          </motion.h1>

          {/* --- 4. Sub-Headline (Typewriter) --- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-3xl text-zinc-400 font-medium mb-8 h-10 flex items-center gap-2"
          >
            <span className="hidden sm:inline">Building</span>
            <Typewriter words={USER_DATA.subRoles} />
          </motion.div>

          {/* --- 5. Location --- */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-zinc-500 mb-10 text-sm md:text-base"
          >
            <MapPin size={16} className="text-purple-500" />
            {USER_DATA.location}
          </motion.p>

          {/* --- 6. Buttons (Glassmorphism & Glow) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <a
              href={`mailto:${USER_DATA.email}`}
              className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black text-base font-bold rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                <Mail size={18} /> Hire Me
              </span>
            </a>

            {/* Resume Button */}
            <a
              href={USER_DATA.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white text-base font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Download size={18} /> Download CV
            </a>

            {/* LinkedIn (Minimal) */}
            <a
              href={USER_DATA.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 text-zinc-400 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin size={18} /> <span className="sm:hidden">LinkedIn</span>
            </a>
          </motion.div>

        </div>
        
        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} className="text-zinc-600" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;