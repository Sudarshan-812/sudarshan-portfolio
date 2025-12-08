import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Layout, User, Code2, Zap, Mail } from 'lucide-react';

const DockIcon = ({ mouseX, item, index, setHoveredIndex, hoveredIndex, onClick }) => {
    const ref = useRef(null);
    const distance = useTransform(mouseX, (val) => {
      const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return val - bounds.x - bounds.width / 2;
    });
    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
      <div className="relative flex flex-col items-center">
        <AnimatePresence>
            {hoveredIndex === index && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -15 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-12 px-3 py-1 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-lg text-xs font-medium text-neutral-900 dark:text-white whitespace-nowrap shadow-xl"
                >
                    {item.label}
                </motion.div>
            )}
        </AnimatePresence>

        <motion.button 
            ref={ref}
            onClick={onClick}
            onMouseEnter={() => setHoveredIndex(index)}
            style={{ width, height: width }} 
            className="aspect-square rounded-2xl bg-gray-100/50 dark:bg-white/10 border border-black/5 dark:border-white/20 backdrop-blur-md flex items-center justify-center hover:bg-gray-200/50 dark:hover:bg-white/20 transition-colors"
        >
            <item.icon size={24} className="text-neutral-700 dark:text-white" />
        </motion.button>
      </div>
    );
};

const FloatingDock = () => {
  const mouseX = useMotionValue(Infinity);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleScroll = (id) => {
    const target = document.querySelector(id);
    if (target && window.lenis) { window.lenis.scrollTo(target); }
  };

  const items = [
    { icon: Layout, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Code2, label: "Stack", href: "#tech-stack" },
    { icon: Zap, label: "Works", href: "#projects" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  return (
    <div 
        onMouseMove={(e) => mouseX.set(e.pageX)} 
        onMouseLeave={() => {
            mouseX.set(Infinity);
            setHoveredIndex(null);
        }} 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 h-16 gap-4 items-end rounded-2xl bg-white/80 dark:bg-neutral-900/50 backdrop-blur-xl border border-black/5 dark:border-white/10 px-4 pb-3 hidden md:flex shadow-2xl dark:shadow-none"
    >
      {items.map((item, i) => (
          <DockIcon 
            key={i} 
            mouseX={mouseX} 
            item={item} 
            index={i} 
            setHoveredIndex={setHoveredIndex} 
            hoveredIndex={hoveredIndex}
            onClick={() => handleScroll(item.href)}
          />
      ))}
    </div>
  );
};

export default FloatingDock;