import React, { useState, useEffect } from 'react';
import { Music, Play, Pause, ExternalLink } from 'lucide-react';
import { APP_CONFIG } from '../../config/content';
import { globalAudio } from '../../utils/audio';

export const MusicPlayer: React.FC<{ isAudioStarted?: boolean }> = ({ isAudioStarted = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // User's exact Spotify Track link
  const spotifyTrackUrl = "https://open.spotify.com/intl-id/track/41tTCXOzxSWAoVrfeIIh8x?si=e7f5672578ea4ec3";

  useEffect(() => {
    if (isAudioStarted && !isPlaying) {
      const started = globalAudio.play(APP_CONFIG.music.audioPath);
      started.then((res) => setIsPlaying(res));
    }
  }, [isAudioStarted]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = globalAudio.toggle(APP_CONFIG.music.audioPath);
    setIsPlaying(nextState);
  };

  const openSpotify = () => {
    window.open(spotifyTrackUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      {/* Single Sleek Top Bar */}
      <div 
        onClick={openSpotify}
        title="Open Oasis — Wonderwall on Spotify"
        className="group flex items-center gap-3 glass-panel px-4 py-2 rounded-full border border-rose-200/80 bg-white/95 shadow-2xl transition-all duration-300 hover:border-green-500 hover:scale-105 cursor-pointer"
      >
        {/* Animated Spotify Green Icon */}
        <div className={`relative flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 border border-green-300 ${isPlaying ? 'animate-spin-slow' : ''}`}>
          <Music className="w-4 h-4" />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
          )}
        </div>

        {/* Track Title */}
        <div className="flex flex-col pr-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-neutral-800 tracking-wide">
              {APP_CONFIG.music.title}
            </span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-green-100 text-green-700 border border-green-300 font-sans tracking-wider font-bold">
              Spotify
            </span>
          </div>
          
          <div className="flex items-center gap-1 mt-0.5">
            <div className="flex items-end gap-0.5 h-2.5">
              <span className={`w-0.5 bg-green-600 rounded-full transition-all ${isPlaying ? 'animate-bounce h-2.5' : 'h-1'}`}></span>
              <span className={`w-0.5 bg-green-600 rounded-full transition-all ${isPlaying ? 'animate-bounce h-3 delay-100' : 'h-1.5'}`}></span>
              <span className={`w-0.5 bg-green-600 rounded-full transition-all ${isPlaying ? 'animate-bounce h-2 delay-200' : 'h-1'}`}></span>
            </div>
            <span className="text-[10px] text-neutral-600 font-semibold uppercase tracking-widest pl-1">
              {isPlaying ? 'Now Playing' : 'Click to Play'}
            </span>
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          aria-label="Toggle Audio"
          className="p-2 rounded-full bg-neutral-100 hover:bg-green-500 text-neutral-700 hover:text-white transition-all duration-200"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>

        {/* Spotify External Icon */}
        <div className="p-1 text-neutral-500 group-hover:text-green-600 transition-colors">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
