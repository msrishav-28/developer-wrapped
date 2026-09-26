'use client'

import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { TextReveal } from '../TextReveal';
import { motion } from 'framer-motion';
import { Users, Star } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const CommunitySlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { community } = data;

  return (
    <SlideLayout gradientStart="#be123c" gradientEnd="#881337">
      <div className="flex-1 flex flex-col items-center justify-center">
        
        <div className="mb-12 text-center">
            <TextReveal 
                text="The Impact." 
                className={`text-xl font-mono mb-4 uppercase tracking-widest ${isDark ? 'text-rose-300' : 'text-rose-700'}`} 
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-4">
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", delay: 0.5 }}
                className={`flex flex-col items-center justify-center p-8 rounded-[2rem] border shadow-2xl backdrop-blur-xl ${isDark ? 'bg-neutral-900/60 border-white/10 shadow-black/50' : 'bg-white/60 border-black/10 shadow-black/10'}`}
            >
                <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-inner ${isDark ? 'bg-white/10' : 'bg-black/5'}`}>
                    <Users size={32} className="text-rose-400" />
                </div>
                <span className={`text-6xl font-serif mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{community.followers.toLocaleString()}</span>
                <span className={`font-mono tracking-widest uppercase text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Followers inspired</span>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", delay: 0.8 }}
                className={`flex flex-col items-center justify-center p-8 rounded-[2rem] border shadow-2xl backdrop-blur-xl ${isDark ? 'bg-neutral-900/60 border-white/10 shadow-black/50' : 'bg-white/60 border-black/10 shadow-black/10'}`}
            >
                <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-inner ${isDark ? 'bg-white/10' : 'bg-black/5'}`}>
                    <Star size={32} className="text-yellow-400" />
                </div>
                <span className={`text-6xl font-serif mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{community.totalStars.toLocaleString()}</span>
                <span className={`font-mono tracking-widest uppercase text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Stars Earned</span>
            </motion.div>

        </div>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
            className={`mt-16 backdrop-blur-md rounded-full px-8 py-4 flex items-center gap-4 border ${isDark ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}
        >
            <div className="flex -space-x-3">
                <div className={`w-8 h-8 rounded-full bg-blue-500 border-2 ${isDark ? 'border-black' : 'border-white'}`} />
                <div className={`w-8 h-8 rounded-full bg-green-500 border-2 ${isDark ? 'border-black' : 'border-white'}`} />
                <div className={`w-8 h-8 rounded-full bg-purple-500 border-2 ${isDark ? 'border-black' : 'border-white'}`} />
            </div>
            <span className={`text-sm font-sans ${isDark ? 'text-white' : 'text-black'}`}>
                You're building more than code.
            </span>
        </motion.div>

      </div>
    </SlideLayout>
  );
};