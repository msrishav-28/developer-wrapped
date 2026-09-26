'use client'

import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { GitStoryData } from '../../types';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { TextReveal } from '../TextReveal';
import { Music, Film, Tv } from 'lucide-react';

export const BingeSlide: React.FC<{ data: GitStoryData }> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const media = data.mediaStory;

  if (!media) return null;

  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center w-full max-w-2xl mx-auto space-y-12">
        <div className="text-center">
          <TextReveal 
            text="The Binge Coder" 
            className={`text-4xl md:text-5xl font-serif italic mb-2 ${isDark ? 'text-white' : 'text-black'}`} 
          />
          <TextReveal 
            text="What fueled your flow state" 
            className={`text-sm font-sans uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
            delay={0.3}
          />
        </div>

        {/* Spotify Section */}
        {media.topSpotifyTracks && media.topSpotifyTracks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.6, type: "spring", damping: 20 }}
            className={`p-6 md:p-8 rounded-[2rem] border shadow-2xl backdrop-blur-xl transition-transform cursor-pointer ${isDark ? 'bg-neutral-900/60 border-white/10 shadow-black/50 hover:bg-neutral-800/80 hover:border-green-500/50' : 'bg-white/60 border-black/10 shadow-black/10 hover:bg-white/80 hover:border-green-500/50'}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Music className={isDark ? 'text-green-400' : 'text-green-600'} size={20} />
              <h3 className={`font-mono uppercase tracking-widest text-sm font-bold ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>Top Tracks</h3>
            </div>
            <div className="space-y-4">
              {media.topSpotifyTracks.map((track, i) => (
                <div key={i} className="flex items-center gap-4">
                  {track.albumArt && (
                    <img src={track.albumArt} alt="Album Art" className="w-12 h-12 rounded-md object-cover shadow-sm" />
                  )}
                  <div>
                    <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-black'}`}>{track.name}</div>
                    <div className={`text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{track.artist}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {/* Anime Section */}
          {media.topAnime && media.topAnime.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 0.8, type: "spring", damping: 20 }}
              className={`p-6 md:p-8 rounded-[2rem] border shadow-2xl backdrop-blur-xl transition-transform cursor-pointer ${isDark ? 'bg-neutral-900/60 border-white/10 shadow-black/50 hover:bg-neutral-800/80 hover:border-blue-500/50' : 'bg-white/60 border-black/10 shadow-black/10 hover:bg-white/80 hover:border-blue-500/50'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Tv className={isDark ? 'text-blue-400' : 'text-blue-600'} size={20} />
                <h3 className={`font-mono uppercase tracking-widest text-sm font-bold ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>Anime</h3>
              </div>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {media.topAnime.map((a, i) => (
                  <li key={i} className="truncate">• {a}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Movies Section */}
          {media.topMovies && media.topMovies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 1.0, type: "spring", damping: 20 }}
              className={`p-6 md:p-8 rounded-[2rem] border shadow-2xl backdrop-blur-xl transition-transform cursor-pointer ${isDark ? 'bg-neutral-900/60 border-white/10 shadow-black/50 hover:bg-neutral-800/80 hover:border-orange-500/50' : 'bg-white/60 border-black/10 shadow-black/10 hover:bg-white/80 hover:border-orange-500/50'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Film className={isDark ? 'text-orange-400' : 'text-orange-600'} size={20} />
                <h3 className={`font-mono uppercase tracking-widest text-sm font-bold ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>Movies</h3>
              </div>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {media.topMovies.map((m, i) => (
                  <li key={i} className="truncate">• {m}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </SlideLayout>
  );
};
