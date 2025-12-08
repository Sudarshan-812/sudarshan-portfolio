import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { codeSnippets } from '../../data';

const highlightCode = (code) => {
    let safeCode = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    safeCode = safeCode.replace(/(['"])(.*?)\1/g, '<span class="text-green-500">$1$2$1</span>');
    const keywords = /\b(const|return|export|import|from|function|var|let|if|else|for|while|class|override|fun|super)\b/g;
    safeCode = safeCode.replace(keywords, '<span class="text-purple-400">$1</span>');
    const functions = /\b(useState|useEffect|useMemo|useRef|fetch|json|convert|onCreate|setContent|Surface)\b/g;
    safeCode = safeCode.replace(functions, '<span class="text-yellow-400">$1</span>');
    return safeCode;
};

const AnimatedCodeWindow = () => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => { setActiveTab((prev) => (prev + 1) % codeSnippets.length); }, 5000); 
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full max-w-lg rounded-xl overflow-hidden bg-[#0a0a0a] border border-black/10 dark:border-white/10 shadow-2xl font-mono text-sm transform-gpu backface-hidden hidden md:block">
      <div className="bg-[#111] px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-2 mr-4"><div className="w-3 h-3 rounded-full bg-[#ff5f56]" /><div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /><div className="w-3 h-3 rounded-full bg-[#27c93f]" /></div>
        <div className="flex gap-1 overflow-hidden">
            {codeSnippets.map((snippet, index) => (
                <button key={index} onClick={() => setActiveTab(index)} className={`relative px-3 py-1 rounded-t-md text-xs flex items-center gap-2 transition-colors ${activeTab === index ? 'bg-[#1e1e1e] text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                    {snippet.icon} {snippet.filename}
                    {activeTab === index && (<motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500" />)}
                </button>
            ))}
        </div>
      </div>
      <div className="p-6 h-[320px] overflow-hidden bg-[#0a0a0a] relative">
        <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="absolute inset-0 p-6">
                <pre className="text-gray-300 font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
                    <code>{codeSnippets[activeTab].code.split('\n').map((line, i) => (
                        <div key={i} className="flex"><span className="text-gray-700 mr-4 w-6 text-right select-none inline-block">{i + 1}</span><span dangerouslySetInnerHTML={{ __html: highlightCode(line) }} /></div>
                    ))}</code>
                </pre>
            </motion.div>
        </AnimatePresence>
        <motion.div key={`progress-${activeTab}`} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 5, ease: "linear" }} className="absolute bottom-0 left-0 h-1 bg-purple-500/50 origin-left w-full" />
      </div>
    </div>
  );
};

export default AnimatedCodeWindow;