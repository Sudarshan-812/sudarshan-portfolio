import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Globe, Zap, Smartphone, Sparkles, TrendingUp, Rocket, Code, ArrowRight } from 'lucide-react';
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
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{desc}</p>
          </motion.div>
    )
}

const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="rgba(168,85,247,0.4)" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-4 font-display text-neutral-900 dark:text-white">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
              My Journey.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            From writing my first line of code in late 2024 to shipping production-ready AI SaaS products.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Large Journey Card */}
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
                <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Self-Taught. <span className="text-purple-600 dark:text-purple-400">Ship-First.</span>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                I don't just write tutorials; I build products. Since late 2024, I've fast-tracked my learning by shipping 4 complex applications:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <ArrowRight className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                    <span><strong>ResumAI:</strong> AI SaaS with Gemini 1.5 & Payments.</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <ArrowRight className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                    <span><strong>Orbital OS:</strong> A complex web-based Operating System simulation.</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <ArrowRight className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                    <span><strong>TiffinTales:</strong> Hyperlocal food marketplace logic.</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <ArrowRight className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                    <span><strong>This Portfolio:</strong> Advanced React animations & Dark mode.</span>
                </li>
              </ul>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 font-semibold text-sm">
                <Rocket size={16} />
                Now hunting Frontend roles.
              </div>
            </div>
          </motion.div>

          {/* Status Card */}
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
                <span className="text-green-600 dark:text-green-400 font-bold text-lg tracking-wide">OPEN TO WORK</span>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-6 h-6 text-purple-500 shrink-0" />
                  <div>
                    <span className="block font-bold text-neutral-900 dark:text-white">Vijayapura</span>
                    <span className="text-sm">Current Location</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-gray-600 dark:text-gray-300">
                  <Globe className="w-6 h-6 text-blue-500 shrink-0" />
                  <div>
                    <span className="block font-bold text-neutral-900 dark:text-white">Relocation Ready</span>
                    <span className="text-sm">Bangalore / Hyderabad</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-black/5 dark:border-white/10">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Notice Period</p>
                <p className="text-neutral-900 dark:text-white font-bold text-2xl">Immediate</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard 
            icon={<Rocket className="w-7 h-7 text-purple-600 dark:text-purple-400" />} 
            title="Ship Speed" 
            desc="MVP to production" 
            delay={0} 
            color="purple" 
          />
          <SkillCard 
            icon={<Smartphone className="w-7 h-7 text-blue-600 dark:text-blue-400" />} 
            title="Full-Stack Flex" 
            desc="React Native + Supabase + AI" 
            delay={0.1} 
            color="blue" 
          />
          <SkillCard 
            icon={<Sparkles className="w-7 h-7 text-pink-600 dark:text-pink-400" />} 
            title="Motion Magic" 
            desc="Framer + GSAP mastery" 
            delay={0.2} 
            color="pink" 
          />
          <SkillCard 
            icon={<TrendingUp className="w-7 h-7 text-green-600 dark:text-green-400" />} 
            title="Self-Taught Grind" 
            desc="Zero to Shipped in 90 days" 
            delay={0.3} 
            color="green" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;