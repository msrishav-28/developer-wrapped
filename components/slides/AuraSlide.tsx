'use client'

import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { TextReveal } from '../TextReveal';

export const AuraSlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const gradient = data.auraColors.length > 0 
    ? `radial-gradient(circle at 50% 50%, ${data.auraColors[0]}, transparent), 
       radial-gradient(circle at 80% 20%, ${data.auraColors[1] || data.auraColors[0]}, transparent),
       radial-gradient(circle at 20% 80%, ${data.auraColors[2] || data.auraColors[0]}, transparent)`
    : `radial-gradient(circle at 50% 50%, #ff0080, transparent), 
       radial-gradient(circle at 80% 20%, #7928ca, transparent)`;

  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full w-full relative overflow-hidden">
        {/* Mesh Gradient Background */}
        <motion.div 
          className="absolute inset-0 opacity-40 mix-blend-screen blur-3xl"
          style={{ backgroundImage: gradient }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="z-10 flex flex-col items-center text-center space-y-12">
          <div>
            <TextReveal 
              text="Your developer aura is..."
              className={`text-lg font-mono uppercase tracking-widest mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}
            />
            <motion.h2 
              className={`text-6xl md:text-8xl font-serif italic ${isDark ? 'text-white' : 'text-black'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {data.archetype}
            </motion.h2>
          </div>

          <motion.div 
            className="grid grid-cols-2 gap-6 w-full max-w-lg mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, type: "spring", damping: 20 }}
          >
            <div className={`flex flex-col items-center justify-center p-6 md:p-8 rounded-[2rem] border shadow-2xl backdrop-blur-xl transition-transform hover:scale-105 ${isDark ? 'bg-neutral-900/60 border-white/10 shadow-black/50' : 'bg-white/60 border-black/10 shadow-black/10'}`}>
              <div className={`text-4xl md:text-5xl font-bold font-mono mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {data.flowStateMinutes.toLocaleString()}
              </div>
              <div className={`text-xs uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Minutes in Flow
              </div>
            </div>
            
            <div className={`flex flex-col items-center justify-center p-6 md:p-8 rounded-[2rem] border shadow-2xl backdrop-blur-xl transition-transform hover:scale-105 ${isDark ? 'bg-neutral-900/60 border-white/10 shadow-black/50' : 'bg-white/60 border-black/10 shadow-black/10'}`}>
              <div className={`text-4xl md:text-5xl font-bold font-mono mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {data.vibeScore}%
              </div>
              <div className={`text-xs uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Vibe Match
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};
