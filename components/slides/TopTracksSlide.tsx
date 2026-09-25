'use client'

import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { TextReveal } from '../TextReveal';
import { Play } from 'lucide-react';

export const TopTracksSlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center w-full max-w-2xl mx-auto">
        <div className="mb-12">
          <TextReveal 
            text="Top Tracks of the Year" 
            className={`text-3xl font-serif italic mb-2 ${isDark ? 'text-white' : 'text-black'}`} 
          />
          <TextReveal 
            text={`The repos you played the most in ${data.year}.`} 
            className={`text-sm font-sans uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
            delay={0.3}
          />
        </div>

        <div className="space-y-4">
          {data.topRepos.slice(0, 5).map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className={`group flex items-center gap-4 p-4 rounded-xl transition-all ${isDark ? 'hover:bg-neutral-900' : 'hover:bg-neutral-100'}`}
            >
              <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-md font-mono text-xl ${isDark ? 'bg-neutral-800 text-neutral-400 group-hover:text-hero-blue group-hover:bg-hero-blue/10' : 'bg-neutral-200 text-neutral-600 group-hover:text-hero-blue group-hover:bg-hero-blue/10'}`}>
                <span className="group-hover:hidden">{i + 1}</span>
                <Play size={20} className="hidden group-hover:block ml-1" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className={`font-bold truncate text-lg ${isDark ? 'text-white' : 'text-black'}`}>
                  {repo.name}
                </h3>
                <p className={`truncate text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {repo.description || (repo.language ? `Written in ${repo.language}` : "No description")}
                </p>
              </div>
              
              <div className="text-right flex-shrink-0 font-mono text-sm">
                <div className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                  {repo.stars.toLocaleString()} ★
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};
