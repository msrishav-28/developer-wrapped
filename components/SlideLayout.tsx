'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface SlideLayoutProps {
  children: React.ReactNode;
  gradientStart?: string;
  gradientEnd?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, gradientStart = "#3B82F6", gradientEnd = "#8B5CF6" }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden transition-colors ${isDark ? 'bg-black text-white' : 'bg-neutral-50 text-black'}`}
      initial={{ x: "100%" }}
      animate={{ x: "0%", scale: 1, filter: "brightness(1)" }}
      exit={{ scale: 0.95, opacity: 0, filter: "brightness(0.3)", transition: { duration: 0.6 } }}
      transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.8 }}
    >
      <div className={`absolute inset-0 z-0 pointer-events-none ${isDark ? 'opacity-30' : 'opacity-20'}`}>
         <motion.div 
           animate={{ rotate: 360, scale: [1, 1.1, 1] }}
           transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
           className="w-[200%] h-[200%] -top-[50%] -left-[50%] absolute"
           style={{
             background: `radial-gradient(circle at 40% 40%, ${gradientStart}40 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${gradientEnd}40 0%, transparent 50%)`,
             filter: 'blur(80px)'
           }}
         />
      </div>
      <div className={`absolute inset-0 pointer-events-none z-0 ${isDark ? 'shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]' : 'shadow-[inset_0_0_120px_rgba(255,255,255,1)]'}`} />

      <div className="relative z-10 w-full h-full flex flex-col px-6 py-12">
        {children}
      </div>
    </motion.div>
  );
};
