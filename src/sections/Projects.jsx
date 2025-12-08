import React, { useState, useRef, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ExternalLink, X } from 'lucide-react';
import { cn } from '../utils/cn';
import { USER_DATA } from '../data';
import useOutsideClick from '../hooks/useOutsideClick';
import SectionHeader from '../components/ui/SectionHeader';

// 1. Accept setIsModalOpen prop
const ExpandableProjects = ({ setIsModalOpen }) => {
  const [active, setActive] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref = useRef(null);
  const id = useId();
  
  // 2. Sync local 'active' state with parent 'isModalOpen' state
  useEffect(() => {
    if (active) {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = "auto"; // Unlock scroll
    }
    
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, setIsModalOpen]);
  
  useOutsideClick(ref, () => setActive(null));
  
  return (
    <section id="projects" className="py-24 md:py-32 relative z-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader title="Featured Projects" subtitle="Case Studies" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-16 pb-12 border-b border-black/5 dark:border-white/5"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-1">{USER_DATA.projects.length}+</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-1">50K+</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Lines of Code</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-1">100%</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Client Satisfaction</p>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {USER_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`card-${project.title}-${id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActive(project)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "group relative overflow-hidden rounded-3xl cursor-pointer",
                "bg-white dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950",
                "border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20",
                "shadow-lg dark:shadow-none transition-all duration-500",
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 3 && "lg:col-span-2"
              )}
            >
              <motion.div 
                layoutId={`image-${project.title}-${id}`}
                className="absolute inset-0 z-0"
                animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                transition={{ duration: 0.6 }}
              >
                <img loading="lazy" src={project.src} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-black dark:via-black/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              </motion.div>

              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                <motion.div className="self-start" whileHover={{ scale: 1.1, rotate: 5 }}>
                  <div className="p-3 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-black/10 dark:border-white/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                    {project.icon}
                  </div>
                </motion.div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                  </div>
                  <motion.h3 layoutId={`title-${project.title}-${id}`} className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white font-display group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </motion.h3>
                  <motion.p layoutId={`description-${project.description}-${id}`} className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {project.description}
                  </motion.p>
                  <motion.div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-4 transition-all">
                    <span>Explore Project</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 dark:bg-black/90 backdrop-blur-xl h-full w-full z-[60]" />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[70] p-4">
            <motion.button
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 p-3 bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 rounded-full backdrop-blur-md border border-black/10 dark:border-white/10 transition-colors z-[80]"
            >
              <X className="w-6 h-6 text-black dark:text-white" />
            </motion.button>

            <motion.div layoutId={`card-${active.title}-${id}`} ref={ref} className="w-full max-w-4xl h-full md:h-fit md:max-h-[85vh] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-black/10 dark:border-white/20 shadow-2xl">
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-48 md:h-96 overflow-hidden">
                <img loading="lazy" src={active.src} alt={active.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 dark:from-neutral-900 dark:via-neutral-900/50 to-transparent"></div>
                <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.2, type: "spring" }} className="absolute bottom-6 left-6 p-4 bg-white/50 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-black/10 dark:border-white/20 shadow-lg">
                  {active.icon}
                </motion.div>
              </motion.div>

              <div className="flex-1 overflow-y-auto">
                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-3 font-display">{active.title}</motion.h3>
                    <motion.p layoutId={`description-${active.description}-${id}`} className="text-gray-600 dark:text-gray-400 text-lg">{active.description}</motion.p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"></div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                  <motion.a layoutId={`button-${active.title}-${id}`} href={active.ctaLink} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white font-bold rounded-full transition-colors">
                    {active.ctaText} <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default ExpandableProjects;