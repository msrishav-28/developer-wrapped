'use client'

import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { TextReveal } from '../TextReveal';
import { Star, GitFork, Disc3 } from 'lucide-react';

export const VinylSlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const repo = data.topRepo;

  return (
    <SlideLayout>
      <div className="flex flex-col h-full w-full justify-center">
        <TextReveal 
          text="Your Platinum Record"
          className={`text-lg md:text-xl font-mono uppercase tracking-widest mb-8 md:mb-12 text-center ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}
        />

        <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto mb-8 md:mb-16 flex justify-center items-center">
          {/* Record Player Base */}
          <div className="absolute w-64 h-64 border-4 rounded-full border-neutral-800 opacity-20"></div>
          
          {/* Spinning Vinyl */}
          <motion.div 
            className={`w-48 h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center shadow-2xl overflow-hidden ${isDark ? 'bg-neutral-900 border-neutral-700' : 'bg-black border-neutral-800'} border-8 relative`}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            {/* Grooves */}
            <div className="absolute inset-0 rounded-full border border-neutral-500/20 m-2 md:m-4 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full border border-neutral-500/20 m-6 md:m-8 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full border border-neutral-500/20 m-10 md:m-12 pointer-events-none"></div>
            
            {/* Center Label */}
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full z-10 flex items-center justify-center border-2 border-neutral-800 shadow-inner`} style={{ backgroundColor: data.topLanguages[0]?.color || '#ff0080' }}>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full border-2 border-neutral-600"></div>
            </div>
            
            {/* Gloss reflection */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
          </motion.div>

          <motion.div 
            className="absolute -right-2 top-6 md:top-8 z-20 origin-right"
            initial={{ rotate: -45 }}
            animate={{ rotate: 15 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          >
            {/* The Arm */}
            <div className={`w-24 md:w-32 h-2 rounded-full shadow-lg ${isDark ? 'bg-neutral-300' : 'bg-neutral-400'}`}></div>
            {/* The Headshell/needle (at the left end) */}
            <div className={`w-3 h-5 md:w-4 md:h-6 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 rounded-sm shadow-md ${isDark ? 'bg-hero-blue' : 'bg-hero-blue'}`}></div>
            {/* The Pivot Base (at the right end) */}
            <div className={`w-6 h-6 md:w-8 md:h-8 absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 rounded-full shadow-xl border-4 ${isDark ? 'bg-neutral-800 border-neutral-600' : 'bg-neutral-300 border-neutral-400'}`}></div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className={`text-3xl md:text-5xl font-serif italic mb-4 truncate px-4 ${isDark ? 'text-white' : 'text-black'}`}>
            {repo.name}
          </h2>
          
          <p className={`text-lg md:text-xl font-sans mb-8 max-w-md mx-auto line-clamp-2 px-4 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {repo.description || 'A masterpiece of code.'}
          </p>

          <div className="flex justify-center gap-6">
            <div className={`flex items-center gap-2 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              <Star size={20} className={isDark ? 'text-yellow-400' : 'text-yellow-600'} />
              <span className="font-mono text-xl">{repo.stars}</span>
            </div>
            {repo.language && (
              <div className={`flex items-center gap-2 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: data.topLanguages.find(l => l.name === repo.language)?.color || '#ff0080' }}
                />
                <span className="font-mono text-xl">{repo.language}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
