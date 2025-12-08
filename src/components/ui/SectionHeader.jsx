import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="relative flex flex-col items-center justify-center pb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border rounded-full border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
                <Sparkles size={14} className="text-purple-600 dark:text-purple-400 mr-2" />
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-widest">{subtitle}</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-display font-bold text-center tracking-tighter text-neutral-900 dark:text-white">{title}</motion.h2>
            <div className="w-[20rem] md:w-[40rem] h-10 relative mt-4">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm opacity-50 dark:opacity-100" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[5px] w-1/4 blur-sm opacity-50 dark:opacity-100" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-1/4" />
            </div>
        </div>
    )
}

export default SectionHeader;