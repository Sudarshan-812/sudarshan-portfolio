import React from 'react';
import { USER_DATA } from '../data';
import SectionHeader from '../components/ui/SectionHeader';

const TechMarquee = () => {
    const fullStack = [...USER_DATA.stack, ...USER_DATA.stack]; 
    return (
      <section id="tech-stack" className="py-32 overflow-hidden relative z-20">
        <div className="container mx-auto px-6 relative z-10 mb-12">
           <SectionHeader title="Tech Universe" subtitle="My Stack" />
        </div>
        <div className="relative flex flex-col gap-8">
            <div className="flex overflow-hidden group">
                <div className="flex animate-marquee whitespace-nowrap gap-8">
                    {fullStack.map((tech, i) => (
                        <div key={i} className="flex flex-col items-center justify-center gap-2 w-24 h-24 bg-white dark:bg-neutral-900/50 border border-black/5 dark:border-white/5 rounded-2xl hover:border-purple-500/50 hover:bg-gray-50 dark:hover:bg-neutral-800/80 transition-all duration-300 backdrop-blur-sm group-hover:blur-[2px] hover:!blur-0 z-10 shrink-0 shadow-sm dark:shadow-none">
                            <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                            <span className="text-gray-500 dark:text-gray-400 font-medium text-xs">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex overflow-hidden group">
                <div className="flex animate-marquee-reverse whitespace-nowrap gap-8">
                    {fullStack.map((tech, i) => (
                        <div key={i} className="flex flex-col items-center justify-center gap-2 w-24 h-24 bg-white dark:bg-neutral-900/50 border border-black/5 dark:border-white/5 rounded-2xl hover:border-purple-500/50 hover:bg-gray-50 dark:hover:bg-neutral-800/80 transition-all duration-300 backdrop-blur-sm group-hover:blur-[2px] hover:!blur-0 z-10 shrink-0 shadow-sm dark:shadow-none">
                            <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                            <span className="text-gray-500 dark:text-gray-400 font-medium text-xs">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-black to-transparent z-20"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-black to-transparent z-20"></div>
        </div>
      </section>
    );
};

export default TechMarquee;