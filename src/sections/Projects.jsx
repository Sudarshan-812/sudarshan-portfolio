import React, { useState, useRef, useEffect, useId } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ExternalLink, X, Maximize2, Terminal, Hand } from 'lucide-react';
import { cn } from '../utils/cn';
import { USER_DATA } from '../data';
import useOutsideClick from '../hooks/useOutsideClick';
import SectionHeader from '../components/ui/SectionHeader';

const MacWindow = ({ project, index, setActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={() => setActive(project)}
      className="relative flex-shrink-0 w-[85vw] md:w-[600px] group cursor-pointer snap-center"
    >
      {/* MAC WINDOW CONTAINER */}
      <div className="bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 ring-1 ring-black/5 dark:ring-white/5">
        
        {/* WINDOW HEADER (Traffic Lights) */}
        <div className="h-10 bg-gray-100 dark:bg-[#2d2d2d] border-b border-black/5 dark:border-black/20 flex items-center px-4 gap-2 select-none">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black/10 shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/10 shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-black/10 shadow-inner" />
          </div>
          {/* Terminal Title */}
          <div className="flex-1 text-center pr-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/5 dark:bg-black/20 text-[10px] font-mono text-gray-500 dark:text-gray-400">
              <Terminal size={10} />
              <span>~/projects/{project.title.toLowerCase().replace(/\s/g, '-')}</span>
            </div>
          </div>
        </div>

        {/* WINDOW BODY */}
        <div className="relative h-[350px] md:h-[400px] overflow-hidden bg-black">
          {/* Image */}
          <img 
            src={project.src} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" 
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Content (Bottom) */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
            <div className="flex items-end justify-between">
              <div>
                 <div className="flex gap-2 mb-3">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] font-mono text-white border border-white/10">
                        npm start
                    </span>
                 </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm max-w-sm line-clamp-1 font-mono">
                  {project.description}
                </p>
              </div>
              
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-colors text-white">
                <Maximize2 size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExpandableProjects = ({ setIsModalOpen }) => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const containerRef = useRef(null);
  const id = useId();

  // --- PROGRESS BAR LOGIC ---
  const { scrollXProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // --- MODAL SYNC LOGIC ---
  useEffect(() => {
    if (active) {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = "auto";
    }
    const onKeyDown = (event) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, setIsModalOpen]);
  
  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects" className="py-24 relative z-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <SectionHeader title="Selected Works" subtitle="Terminal Access" />
      </div>

      <div className="relative w-full">
        
        {/* --- SCROLLABLE CONTAINER --- */}
        <div 
            ref={containerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-4 md:px-12 pb-12 w-full scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {USER_DATA.projects.map((project, index) => (
            <MacWindow 
              key={index} 
              project={project} 
              index={index} 
              setActive={setActive} 
            />
          ))}
          {/* Spacer to allow scrolling past last item */}
          <div className="w-1 flex-shrink-0" />
        </div>

        {/* --- CUSTOM MINIMAL PROGRESS BAR --- */}
        <div className="container mx-auto px-4 md:px-12 mt-4">
            <div className="h-[2px] w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    style={{ scaleX }} 
                    className="h-full bg-purple-600 dark:bg-purple-500 origin-left"
                />
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                <span>001</span>
                <span>Scroll / Swipe</span>
                <span>00{USER_DATA.projects.length}</span>
            </div>
        </div>

      </div>

      {/* --- MODAL (Standardized) --- */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md h-full w-full z-[60]" 
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[70] p-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 p-2 bg-gray-200 dark:bg-neutral-800 rounded-full shadow-xl border border-black/5 dark:border-white/10 z-[80] hover:scale-110 transition-transform"
            >
              <X className="w-6 h-6 text-neutral-900 dark:text-white" />
            </motion.button>

            <motion.div 
              layoutId={`card-${active.title}-${id}`} 
              ref={ref} 
              className="w-full max-w-5xl h-[85vh] flex flex-col md:flex-row bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl relative ring-1 ring-black/5"
            >
              {/* Modal Header (Mac Style) */}
              <div className="absolute top-0 left-0 w-full h-10 bg-white/90 dark:bg-[#2d2d2d]/90 backdrop-blur z-20 border-b border-black/5 dark:border-black/20 flex items-center px-4 gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex-1 text-center text-xs font-mono text-gray-500">~/view/{active.title.toLowerCase().replace(/\s/g, '-')}</div>
              </div>

              {/* Modal Image */}
              <motion.div className="relative w-full md:w-1/2 h-64 md:h-full mt-10 md:mt-0">
                <img src={active.src} alt={active.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                    <h3 className="text-4xl font-bold text-white mb-2 font-display">{active.title}</h3>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 rounded bg-white/20 text-white text-xs font-mono backdrop-blur-md border border-white/10">v1.0.0</span>
                        <span className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-xs font-mono backdrop-blur-md border border-green-500/20">Production</span>
                    </div>
                </div>
              </motion.div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 mt-0 md:mt-10 bg-white dark:bg-[#1e1e1e]">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-2 font-mono">README.md</h4>
                    <p className="text-xl md:text-2xl text-neutral-900 dark:text-white font-medium leading-relaxed">
                      {active.description}
                    </p>
                  </div>

                  <div className="h-px w-full bg-gray-200 dark:bg-white/5 border-t border-dashed border-gray-300 dark:border-white/10"></div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.2 }} 
                    className="text-gray-600 dark:text-gray-400 leading-loose text-lg font-sans"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>

                  <div className="pt-4 flex gap-4">
                    <a href={active.ctaLink} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold rounded-lg hover:opacity-90 transition-opacity font-mono text-sm">
                      <ExternalLink size={16} /> Open Live
                    </a>
                  </div>
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