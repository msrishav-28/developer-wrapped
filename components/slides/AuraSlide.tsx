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
              className={`text-xl font-mono uppercase tracking-widest mb-4 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}
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
            className="flex gap-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div>
              <div className={`text-4xl font-bold font-mono mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {data.flowStateMinutes.toLocaleString()}
              </div>
              <div className={`text-sm uppercase tracking-wider ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Minutes in Flow
              </div>
            </div>
            
            <div className={`w-px h-16 ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`} />

            <div>
              <div className={`text-4xl font-bold font-mono mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {data.vibeScore}%
              </div>
              <div className={`text-sm uppercase tracking-wider ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Vibe Match
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};
