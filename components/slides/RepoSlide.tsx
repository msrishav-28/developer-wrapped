'use client'

import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { TextReveal } from '../TextReveal';
import { motion } from 'framer-motion';
import { Star, GitCommit } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const RepoSlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SlideLayout gradientStart="#1e293b" gradientEnd="#0f172a">
      <div className="flex-1 flex flex-col items-center justify-center perspective-1000">
        
        <div className="mb-10 text-center">
          <TextReveal 
            text="But one project defined your year." 
            className={`text-3xl font-serif ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`} 
          />
        </div>

        <motion.div
          initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
          animate={{ rotateY: 10, opacity: 1, scale: 1 }}
          whileHover={{ rotateY: 0, scale: 1.05 }}
          transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
          className={`w-72 md:w-80 aspect-[3/4] rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group border backdrop-blur-xl cursor-pointer ${isDark ? 'bg-neutral-900/60 border-white/20 shadow-[0_20px_50px_-10px_rgba(255,255,255,0.1)]' : 'bg-white/60 border-black/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)]'}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={`absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay ${isDark ? 'from-hero-blue/40 via-transparent to-hero-purple/40' : 'from-hero-blue/20 via-transparent to-hero-purple/20'}`} />
          
          <div>
            <div className="text-xs font-mono tracking-widest uppercase mb-4 text-hero-blue font-bold">TOP REPOSITORY</div>
            <h2 className={`text-4xl font-sans font-bold tracking-tight leading-none break-words mb-4 line-clamp-3 ${isDark ? 'text-white' : 'text-black'}`}>{data.topRepo.name}</h2>
            <p className={`text-sm leading-relaxed font-sans line-clamp-4 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{data.topRepo.description}</p>
          </div>

          <div className="space-y-3">
             <div className="flex items-center gap-2 text-code-yellow">
                <Star size={18} fill="currentColor" />
                <span className="font-mono text-lg">{data.topRepo.stars.toLocaleString()} Stars</span>
             </div>
             <div className={`flex items-center gap-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <GitCommit size={18} />
                <span className="font-mono text-sm">{data.topRepo.language}</span>
             </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
