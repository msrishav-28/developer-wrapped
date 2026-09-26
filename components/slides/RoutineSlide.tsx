'use client'

import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { TextReveal } from '../TextReveal';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export const RoutineSlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const fullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const maxVal = Math.max(...data.weekdayStats);
  const maxIndex = data.weekdayStats.indexOf(maxVal);
  const maxHeight = 180;

  return (
    <SlideLayout gradientStart="#1E293B" gradientEnd="#0F172A">
      <div className="flex-1 flex flex-col items-center justify-center">
        
        <div className="mb-10 text-center">
          <TextReveal 
            text="Your favorite day?" 
            className={`text-lg font-mono mb-4 uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`} 
          />
          <TextReveal 
            text={`${fullDays[maxIndex]}s.`} 
            className={`text-6xl md:text-8xl font-serif tracking-tighter ${isDark ? 'text-white' : 'text-neutral-800'}`} 
            delay={0.5}
          />
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className={`p-6 md:p-10 rounded-[2rem] border shadow-2xl backdrop-blur-xl ${isDark ? 'bg-neutral-900/40 border-white/10 shadow-black/50' : 'bg-white/60 border-black/10 shadow-black/10'}`}
        >
          <div className="flex items-end justify-center gap-4 md:gap-8 w-full max-w-xl">
          {data.weekdayStats.map((count, index) => {
            const heightPercentage = maxVal > 0 ? count / maxVal : 0;
            const barHeight = Math.max(heightPercentage * maxHeight, 30);
            const isMax = index === maxIndex;

            return (
              <div key={index} className="flex flex-col items-center gap-3 flex-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: barHeight }}
                  transition={{ 
                    delay: 0.8 + (index * 0.08), 
                    duration: 0.6, 
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className={`w-10 md:w-14 rounded-full relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isMax 
                      ? (isDark ? "bg-white" : "bg-neutral-900") 
                      : (isDark ? "bg-neutral-700/50 hover:bg-neutral-600" : "bg-neutral-300 hover:bg-neutral-400")
                  }`}
                  style={{
                    boxShadow: isMax 
                      ? (isDark ? '0 0 30px rgba(255,255,255,0.4), inset 0 0 10px rgba(0,0,0,0.5)' : '0 0 30px rgba(0,0,0,0.2), inset 0 0 10px rgba(255,255,255,0.5)') 
                      : 'none'
                  }}
                />
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + (index * 0.08) }}
                  className={`text-base md:text-lg font-medium ${
                    isMax 
                      ? (isDark ? "text-white" : "text-neutral-800") 
                      : (isDark ? "text-neutral-500" : "text-neutral-500")
                  }`}
                >
                  {days[index]}
                </motion.span>
              </div>
            );
          })}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className={`mt-10 text-lg md:text-xl font-light italic ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
        >
          You ship most on {fullDays[maxIndex]}s
        </motion.p>

      </div>
    </SlideLayout>
  );
};