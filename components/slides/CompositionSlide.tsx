'use client'

import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { TextReveal } from '../TextReveal';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useTheme } from '@/context/ThemeContext';

export const CompositionSlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { contributionBreakdown } = data;
  
  const chartData = [
    { name: 'Commits', value: contributionBreakdown.commits, color: '#3B82F6' },
    { name: 'PRs', value: contributionBreakdown.prs, color: '#8B5CF6' },
    { name: 'Issues', value: contributionBreakdown.issues, color: '#EAB308' },
    { name: 'Reviews', value: contributionBreakdown.reviews, color: '#EC4899' },
  ].filter(d => d.value > 0);

  return (
    <SlideLayout gradientStart="#1e1b4b" gradientEnd="#312e81">
      <div className="flex-1 flex flex-col items-center justify-center">
        
        <div className="mb-8 text-center">
            <TextReveal 
                text="The DNA." 
                className={`text-xl font-mono mb-2 uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`} 
            />
            <TextReveal 
                text="How you built it." 
                className={`text-5xl font-serif ${isDark ? 'text-white' : 'text-black'}`} 
            />
        </div>

        <motion.div 
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, type: "spring", damping: 20 }}
          className="w-full max-w-sm h-64 relative mb-8"
        >
             <div className="absolute inset-0 bg-hero-purple/20 blur-[60px] rounded-full pointer-events-none" />
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={6}
                    dataKey="value"
                    stroke="none"
                    isAnimationActive={false}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
             </ResponsiveContainer>
             
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className={`text-4xl font-serif ${isDark ? 'text-white' : 'text-black'}`}>100%</span>
             </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {chartData.map((item, index) => (
                <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ delay: 1 + (index * 0.1), type: "spring" }}
                    className={`flex items-center gap-4 rounded-[1.5rem] p-4 backdrop-blur-xl border shadow-lg ${isDark ? 'bg-neutral-900/60 border-white/10 shadow-black/50' : 'bg-white/60 border-black/10 shadow-black/10'}`}
                >
                    <div className="w-4 h-4 rounded-full flex-shrink-0 shadow-inner" style={{ backgroundColor: item.color }} />
                    <div className="flex flex-col">
                        <span className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{item.name}</span>
                        <span className={`text-2xl font-serif ${isDark ? 'text-white' : 'text-black'}`}>{item.value.toLocaleString()}</span>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </SlideLayout>
  );
};