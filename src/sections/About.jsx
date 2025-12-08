import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Globe, Zap, Layers, PenTool, Terminal } from 'lucide-react';
import { USER_DATA } from '../data';
import Spotlight from '../components/ui/Spotlight';

const SkillCard = ({ icon, title, desc, delay, color }) => {
    const borderColors = {
        purple: "hover:border-purple-500/50",
        blue: "hover:border-blue-500/50",
        pink: "hover:border-pink-500/50",
        green: "hover:border-green-500/50",
    }
    const bgColors = {
        purple: "bg-purple-100 dark:bg-purple-500/10",
        blue: "bg-blue-100 dark:bg-blue-500/10",
        pink: "bg-pink-100 dark:bg-pink-500/10",
        green: "bg-green-100 dark:bg-green-500/10",
    }
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: delay }} 
            viewport={{ once: true }} 
            className={`bg-white dark:bg-neutral-900/50 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-6 ${borderColors[color]} transition-all duration-300 hover:-translate-y-2 group shadow-lg dark:shadow-none`}
          >
            <div className={`w-14 h-14 rounded-2xl ${bgColors[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              {icon}
            </div>
            <h4 className="text-neutral-900 dark:text-white font-bold text-xl mb-2">{title}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{desc}</p>
          </motion.div>
    )
}

const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="rgba(168,85,247,0.4)" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-4 font-display text-neutral-900 dark:text-white">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
              Beyond Code.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Engineering experiences that bridge the gap between design and functionality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* RESPONSIVE PADDING FIX: p-6 on mobile, p-10 on desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="lg:col-span-2 bg-white dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950 border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-10 relative overflow-hidden group shadow-xl dark:shadow-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <User className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Data-Driven Engineering.<br/>
                <span className="text-gray-400 dark:text-gray-500">User-Centric Design.</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                I craft digital experiences that don't just look good—they perform exceptionally. 
                Every line of code is written with purpose, every interface designed with empathy.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                My approach combines technical excellence with design thinking, creating solutions that are both powerful and intuitive.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            viewport={{ once: true }} 
            className="bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl dark:shadow-none"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-green-600 dark:text-green-400 font-bold text-lg">AVAILABLE</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <span>{USER_DATA.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <span>Remote Friendly</span>
                </div>
              </div>
              
              <div className="pt-6 border-t border-black/5 dark:border-white/10">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Response Time</p>
                <p className="text-neutral-900 dark:text-white font-bold text-2xl">~ 24 Hours</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard icon={<Zap className="w-7 h-7 text-purple-600 dark:text-purple-400" />} title="Performance" desc="Optimized for speed with 60fps animations." delay={0} color="purple" />
          <SkillCard icon={<Layers className="w-7 h-7 text-blue-600 dark:text-blue-400" />} title="Scalability" desc="Robust architecture designed to grow." delay={0.1} color="blue" />
          <SkillCard icon={<PenTool className="w-7 h-7 text-pink-600 dark:text-pink-400" />} title="UX / UI" desc="Pixel-perfect interfaces with intuitive interactions." delay={0.2} color="pink" />
          <SkillCard icon={<Terminal className="w-7 h-7 text-green-600 dark:text-green-400" />} title="Clean Code" desc="Maintainable, documented, and reusable code." delay={0.3} color="green" />
        </div>
      </div>
    </section>
  );
};

export default About;