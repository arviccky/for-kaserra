import React from 'react';
import { motion } from 'framer-motion';
import { Music, ExternalLink, Radio } from 'lucide-react';
import { APP_CONFIG } from '../../config/content';
import { StickerHuggingCats, StickerCowboyDuck } from '../ui/WhimsicalVintageStickers';

export const SpotifyPlaylistPage: React.FC = () => {
  const { spotifyPlaylist } = APP_CONFIG;

  const openSpotifyPlaylist = () => {
    window.open(spotifyPlaylist.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="scrapbook-card relative p-6 sm:p-12 shadow-2xl overflow-hidden"
      >
        {/* Washi Tapes */}
        <div className="washi-tape washi-tape-top-center" />
        <div className="washi-tape washi-tape-left" />
        <div className="washi-tape washi-tape-right" />

        {/* Floating Whimsical Corner Stickers */}
        <div className="absolute top-4 left-6 rotate-[-12deg] hidden sm:block">
          <StickerHuggingCats className="w-14 h-14" />
        </div>
        <div className="absolute top-4 right-6 rotate-[15deg] hidden sm:block">
          <StickerCowboyDuck className="w-14 h-14" />
        </div>

        {/* Page Badge Tag */}
        <div className="text-center space-y-3 pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-800 font-handwritten text-base border border-green-300 font-bold shadow-sm">
            <Radio className="w-4 h-4 text-green-600 animate-pulse" />
            <span>Spotify Playlist • Page 5</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 font-bold">
            {spotifyPlaylist.title}
          </h2>

          <p className="font-handwritten text-lg sm:text-2xl text-neutral-700 font-bold max-w-lg mx-auto leading-relaxed">
            "{spotifyPlaylist.subtitle}"
          </p>
        </div>

        {/* Main Interactive Spotify Playlist Player Container */}
        <div className="relative max-w-2xl mx-auto mt-6 p-3 sm:p-5 bg-gradient-to-b from-green-50 to-emerald-100/60 rounded-3xl border-2 border-green-300 shadow-xl">
          {/* Top Tape Badge */}
          <div className="flex items-center justify-between px-3 py-1 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <span className="text-xs font-bold text-neutral-700 ml-1">For Kaserra • Spotify Mix</span>
            </div>
            <div className="flex items-end gap-1 h-4">
              <span className="w-1 bg-green-600 rounded-full" style={{ height: '14px', animation: 'bounce 0.8s infinite' }}></span>
              <span className="w-1 bg-green-600 rounded-full" style={{ height: '16px', animation: 'bounce 0.8s 0.1s infinite' }}></span>
              <span className="w-1 bg-green-600 rounded-full" style={{ height: '10px', animation: 'bounce 0.8s 0.2s infinite' }}></span>
              <span className="w-1 bg-green-600 rounded-full" style={{ height: '16px', animation: 'bounce 0.8s 0.3s infinite' }}></span>
            </div>
          </div>

          {/* Embedded Official Spotify Playlist Iframe Player */}
          <div className="rounded-2xl overflow-hidden border border-green-300 shadow-md bg-black">
            <iframe
              style={{ borderRadius: '12px' }}
              src={spotifyPlaylist.embedUrl}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist for Kaserra"
            ></iframe>
          </div>

          {/* Direct Link Spotify CTA Button */}
          <div className="pt-4 flex items-center justify-center">
            <button
              onClick={openSpotifyPlaylist}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-base shadow-xl shadow-green-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 border border-green-400 cursor-pointer"
            >
              <Music className="w-5 h-5 fill-current" />
              <span>Buka Playlist di Spotify</span>
              <ExternalLink className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
