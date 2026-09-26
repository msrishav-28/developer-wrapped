'use client'

import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { TextReveal } from '../TextReveal';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export const GridSlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const displayData = data.velocityData.slice(-140);
  
  return (
    <SlideLayout gradientStart="#10b981" gradientEnd="#064e3b">
      <div className="flex-1 flex flex-col items-center justify-center">
        
        <div className="mb-8 text-center">
            <TextReveal 
                text="Every commit counts." 
                className={`text-4xl font-serif mb-2 ${isDark ? 'text-white' : 'text-black'}`} 
            />
            <TextReveal 
                text={`${data.totalCommits} contributions made.`} 
                className="text-2xl font-mono text-emerald-500" 
                highlight={`${data.totalCommits}`}
                delay={0.5}
            />
        </div>

        <motion.div 
            whileHover={{ scale: 1.02 }}
            className={`relative p-8 rounded-[2rem] border shadow-2xl backdrop-blur-xl overflow-hidden transition-transform ${isDark ? 'bg-neutral-900/40 border-white/10 shadow-black/50' : 'bg-white/60 border-black/10 shadow-black/10'}`}>
            <div className="flex gap-1.5">
                {Array.from({ length: 20 }).map((_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                        {Array.from({ length: 7 }).map((_, dayIndex) => {
                            const dataIndex = weekIndex * 7 + dayIndex;
                            const commitCount = displayData[dataIndex]?.commits || 0;
                            
                            let bgClass = isDark ? "bg-neutral-800" : "bg-neutral-200";
                            let opacity = 0.3;
                            
                            if (commitCount > 0) {
                                bgClass = "bg-emerald-500";
                                opacity = Math.min(0.5 + (commitCount / 10), 1);
                            }

                            return (
                                <motion.div
                                    key={dayIndex}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ 
                                        delay: 0.5 + (weekIndex * 0.05) + (dayIndex * 0.01),
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20
                                    }}
                                    className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-[4px] ${bgClass}`}
                                    style={{ opacity: commitCount > 0 ? opacity : 0.3, boxShadow: commitCount > 5 ? '0 0 10px #10b981' : 'none' }}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className={`absolute inset-0 pointer-events-none rounded-[2rem] ring-1 ring-inset ${isDark ? 'ring-white/10' : 'ring-black/5'}`}></div>
        </motion.div>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className={`mt-8 text-xs font-mono uppercase tracking-widest ${isDark ? 'text-neutral-500' : 'text-neutral-600'}`}
        >
            Visualizing recent activity
        </motion.p>

      </div>
    </SlideLayout>
  );
};