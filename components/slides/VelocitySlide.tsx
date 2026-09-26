'use client'

import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { TextReveal } from '../TextReveal';
import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export const VelocitySlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SlideLayout gradientStart="#8B5CF6" gradientEnd="#EAB308">
      <div className="flex-1 flex flex-col justify-center h-full">
        <div className="mb-8">
          <TextReveal 
            text="Your rhythm." 
            className={`text-5xl font-serif italic mb-2 ${isDark ? 'text-white' : 'text-black'}`} 
          />
          <TextReveal 
            text={`You pushed code on ${data.velocityData.filter(d => d.commits > 0).length} days.`} 
            className={`text-2xl font-sans tracking-tight ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
            delay={0.5}
            highlight={`${data.velocityData.filter(d => d.commits > 0).length}`}
          />
        </div>

        <motion.div 
          className="h-64 w-full my-8 relative"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
             <div className="absolute inset-0 bg-hero-purple/10 blur-xl"></div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.velocityData}>
                <defs>
                  <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <YAxis hide domain={['dataMin', 'dataMax']} />
                <Area 
                  type="monotone" 
                  dataKey="commits" 
                  stroke="#7C3AED" 
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorCommits)"
                  animationDuration={3000}
                />
              </AreaChart>
            </ResponsiveContainer>
        </motion.div>

        <div className="mt-auto">
          <TextReveal 
            text="Your longest streak?"
            className={`text-lg font-mono mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
            delay={2.0}
          />
           <TextReveal 
            text={`${data.longestStreak} days.`}
            className={`text-6xl md:text-8xl font-serif mb-2 tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}
            delay={2.5}
          />
          <TextReveal 
            text="Unstoppable."
            className={`text-2xl font-serif italic ${isDark ? 'text-neon-pink' : 'text-hero-purple'}`}
            delay={3.2}
          />
        </div>
      </div>
    </SlideLayout>
  );
};
