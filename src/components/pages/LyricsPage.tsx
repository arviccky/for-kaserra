import React from 'react';
import { motion } from 'framer-motion';
import { Disc } from 'lucide-react';
import { APP_CONFIG } from '../../config/content';
import { StickerDragonKid, StickerVintageButton, StickerPatchworkStar } from '../ui/WhimsicalVintageStickers';

export const LyricsPage: React.FC = () => {
  const lyrics = APP_CONFIG.wonderwallLyrics;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="scrapbook-card relative p-8 sm:p-14 space-y-8 text-center shadow-2xl overflow-hidden"
      >
        <div className="washi-tape washi-tape-left" />
        <div className="washi-tape washi-tape-right" />

        {/* Cute Whimsical Corner Decor */}
        <div className="absolute top-5 left-6 rotate-[-12deg] hidden sm:block">
          <StickerDragonKid className="w-12 h-16" />
        </div>
        <div className="absolute top-5 right-6 rotate-[15deg] hidden sm:block">
          <StickerPatchworkStar className="w-12 h-12" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-800 font-handwritten text-base border border-green-300 font-bold">
          <Disc className="w-4 h-4 text-green-700" />
          <span>Oasis • Wonderwall • Page 6</span>
        </div>

        {/* Vinyl Record Visual */}
        <div className="relative w-28 h-28 mx-auto rounded-full bg-neutral-900 border-4 border-amber-200 shadow-xl flex items-center justify-center animate-spin-slow">
          <div className="w-10 h-10 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
            OASIS
          </div>
        </div>

        {/* Exact Requested Lyrics */}
        <div className="space-y-4 max-w-xl mx-auto py-2">
          <p className="font-serif text-2xl sm:text-3xl text-neutral-700 font-medium italic">
            "{lyrics.quote1}"
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl text-neutral-900 font-bold leading-tight">
            "{lyrics.quote2}"
          </h2>

          <p className="font-serif text-2xl sm:text-3xl text-neutral-700 font-medium italic pt-2">
            "{lyrics.quote3}"
          </p>

          <div className="pt-2">
            <h1 className="font-serif text-4xl sm:text-6xl text-rose-600 font-bold tracking-tight drop-shadow-sm">
              "{lyrics.quote4}"
            </h1>
          </div>
        </div>

        {/* Sentiment Note */}
        <div className="bg-amber-50 p-5 rounded-2xl border-2 border-dashed border-amber-300 max-w-md mx-auto shadow-sm">
          <p className="font-handwritten text-xl sm:text-2xl text-neutral-900 font-bold leading-relaxed">
            "{lyrics.meaningNote}"
          </p>
        </div>
      </motion.div>
    </div>
  );
};
