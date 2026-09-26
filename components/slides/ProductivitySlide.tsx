'use client'

import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { TextReveal } from '../TextReveal';
import { motion } from 'framer-motion';
import { Sun, Moon, Sunrise, Sunset, Clock } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const ProductivitySlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { productivity, archetype } = data;
  
  const getIcon = () => {
    // We will replace this with a clock visual, but keep function for gradient reference if needed
  };

  const gradientStart = productivity.timeOfDay === "Morning" ? "#fdba74" : 
                        productivity.timeOfDay === "Afternoon" ? "#facc15" : 
                        productivity.timeOfDay === "Evening" ? "#818cf8" : "#1e3a8a";

  const gradientEnd = productivity.timeOfDay === "Morning" ? "#f97316" : 
                      productivity.timeOfDay === "Afternoon" ? "#ea580c" : 
                      productivity.timeOfDay === "Evening" ? "#4f46e5" : "#000000";

  return (
    <SlideLayout gradientStart={gradientStart} gradientEnd={gradientEnd}>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        
        <div className="mb-12">
            <TextReveal 
                text="The Zone." 
                className={`text-xl font-mono mb-8 uppercase tracking-widest justify-center ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`} 
            />
        </div>

        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
            className={`mb-12 relative w-48 h-48 flex items-center justify-center rounded-full border-2 shadow-2xl backdrop-blur-xl ${isDark ? 'border-white/10 bg-white/5' : 'border-black/5 bg-black/5'}`}
        >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className={`absolute inset-0 blur-3xl rounded-full ${isDark ? 'bg-white/20' : 'bg-black/10'}`} 
            />
            
            {/* Clock ticks */}
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className={`absolute w-0.5 rounded-full ${isDark ? 'bg-white/30' : 'bg-black/20'}`}
                style={{ 
                  height: i % 3 === 0 ? '12px' : '6px',
                  top: '12px',
                  transformOrigin: '50% 84px',
                  transform: `rotate(${i * 30}deg)`
                }}
              />
            ))}

            {/* Hour hand */}
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 * 3 + (productivity.peakHour % 12) * 30 }}
              transition={{ duration: 3, type: "spring", damping: 15, stiffness: 60 }}
              className={`absolute w-1.5 h-14 origin-bottom rounded-full shadow-lg z-10 ${isDark ? 'bg-white' : 'bg-black'}`}
              style={{ bottom: '50%' }}
            />
            
            {/* Minute hand */}
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 * 12 }}
              transition={{ duration: 3, type: "spring", damping: 15, stiffness: 60 }}
              className={`absolute w-1 h-20 origin-bottom rounded-full z-0 ${isDark ? 'bg-neutral-500' : 'bg-neutral-400'}`}
              style={{ bottom: '50%' }}
            />
            
            {/* Center dot */}
            <div className={`absolute w-4 h-4 rounded-full z-20 ${isDark ? 'bg-white shadow-[0_0_15px_white]' : 'bg-black shadow-[0_0_15px_black]'}`} />
        </motion.div>

        <TextReveal 
          text={`You were most active in the ${productivity.timeOfDay.toLowerCase()}.`} 
          className={`text-4xl font-serif mb-6 justify-center ${isDark ? 'text-white' : 'text-black'}`} 
          highlight={productivity.timeOfDay.toLowerCase()}
          delay={0.5}
        />

        <div className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
            <Clock size={20} className={isDark ? 'text-white/70' : 'text-black/70'} />
            <span className={`text-xl font-mono ${isDark ? 'text-white' : 'text-black'}`}>Peak: {productivity.peakHour}:00</span>
        </div>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="mt-16 w-full max-w-lg"
        >
            <div className={`p-8 rounded-[2rem] border shadow-2xl backdrop-blur-xl ${isDark ? 'bg-neutral-900/60 border-white/10 shadow-black/50' : 'bg-white/60 border-black/10 shadow-black/10'}`}>
                <p className={`text-xs font-mono mb-4 tracking-widest uppercase ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Your Developer Archetype</p>
                <h2 className={`text-5xl md:text-6xl font-bold font-serif tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${isDark ? 'from-white via-white/90 to-white/30' : 'from-black via-black/90 to-black/30'}`}>
                    {archetype}.
                </h2>
            </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};