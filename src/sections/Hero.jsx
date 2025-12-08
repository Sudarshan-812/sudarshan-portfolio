import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, CheckCircle2, Download, MapPin } from 'lucide-react';
import { USER_DATA } from '../data';
import Spotlight from '../components/ui/Spotlight';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-32 pb-20 px-6 bg-white dark:bg-black">
      
      {/* 1. Background Elements (Spotlight + Gradient) */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(168,85,247,0.5)" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff10_1px,transparent_1px)] opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* 2. LEFT SIDE: The Hero Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-full p-2 border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                {/* Replaced with your USER_DATA.avatar if available, else high-quality dummy */}
                <img 
                  src={USER_DATA.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"} 
                  alt={`${USER_DATA.name} Profile`} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white dark:bg-neutral-800 py-2 px-4 rounded-full shadow-xl border border-black/5 dark:border-white/10 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Online</span>
              </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/20 rounded-full blur-[80px] -z-10"></div>
          </motion.div>

          {/* 3. RIGHT SIDE: High-Signal Text */}
          <div className="text-center md:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Name & Role */}
              <h1 className="text-5xl md:text-7xl font-black text-neutral-900 dark:text-white mb-4 tracking-tight font-display">
                {USER_DATA.name} <span className="text-purple-600 dark:text-purple-500">K.</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-500 dark:text-gray-400 mb-8" aria-live="polite">
                Frontend Engineer
              </h2>

              {/* Status & Location Stack */}
              <div className="mb-10 flex flex-col items-center md:items-start gap-4">
                
                {/* Immediate Joiner Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 font-bold text-lg border border-green-200 dark:border-green-500/20">
                    <CheckCircle2 size={20} />
                    <span>Immediate Joiner</span>
                </div>

                {/* Location & Relocation Info */}
                <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-300 font-medium">
                  <MapPin size={20} className="text-purple-600 dark:text-purple-400" />
                  <span>Vijayapura</span>
                  <span className="text-gray-300 dark:text-gray-600">|</span>
                  <span>Relocating to <span className="text-neutral-900 dark:text-white font-bold">BLR / HYD</span></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a 
                  href={`mailto:${USER_DATA.email}`}
                  className="w-full sm:w-auto px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Email Me
                </a>
                
                <a 
                  href={USER_DATA.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 border-2 border-gray-200 dark:border-white/20 text-neutral-900 dark:text-white text-lg font-bold rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>

                {/* Resume Download */}
                 <a 
                  href={USER_DATA.resumeLink}
                  download
                  className="sm:ml-4 text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 font-medium text-sm flex items-center gap-1 transition-colors"
                  aria-label="Download Resume"
                >
                  Download CV <Download size={16} />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;