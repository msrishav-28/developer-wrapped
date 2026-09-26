'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { TextReveal } from '../TextReveal';
import { useTheme } from '@/context/ThemeContext';

export const TitleSlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SlideLayout gradientStart="#2563EB" gradientEnd="#050505">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", damping: 20, stiffness: 100 }}
          className="mb-8 relative"
        >
          {/* Rotating glow */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-hero-blue via-hero-purple to-neon-cyan opacity-40 blur-2xl"
          ></motion.div>
          
          <div className={`relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl border-2 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
            <img 
              src={data.avatarUrl} 
              alt={data.username} 
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
        </motion.div>

        <TextReveal 
          text={`GitStory ${data.year}.`} 
          className={`text-6xl md:text-8xl font-serif mb-4 tracking-tighter ${isDark ? 'text-white' : 'text-black'}`} 
          delay={0.5} 
        />
        
        <TextReveal 
          text="The year you wrote history." 
          className={`text-xl md:text-2xl font-sans tracking-tight max-w-xs mx-auto ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`} 
          delay={1.5} 
        />
      </div>
    </SlideLayout>
  );
};
