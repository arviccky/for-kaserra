import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { APP_CONFIG } from '../../config/content';
import { StickerLemonBranch, StickerBananaCat, StickerSunflowerFace, StickerPatchworkStar } from '../ui/WhimsicalVintageStickers';

export const LoveLetterPage: React.FC = () => {
  const { loveLetter } = APP_CONFIG;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="scrapbook-card relative p-6 sm:p-10 space-y-6 shadow-2xl overflow-hidden"
      >
        {/* Washi Tapes */}
        <div className="washi-tape washi-tape-top-center" />
        <div className="washi-tape washi-tape-left" />
        <div className="washi-tape washi-tape-right" />

        {/* Decorative Corner Whimsical Stickers */}
        <div className="absolute top-4 left-6 rotate-[-15deg] hidden sm:block">
          <StickerLemonBranch className="w-14 h-12" />
        </div>
        <div className="absolute bottom-6 right-6 rotate-[12deg] hidden sm:block">
          <StickerBananaCat className="w-12 h-16" />
        </div>

        {/* Header Tag */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-handwritten text-base border border-rose-300 font-bold">
            <Heart className="w-4 h-4 fill-current text-rose-600" />
            <span>Love Letter • Page 3</span>
          </div>
        </div>

        {/* User's Uploaded Scrapbook Art Image Feature */}
        <div className="relative max-w-2xl mx-auto p-3 sm:p-4 bg-white rounded-2xl shadow-xl border border-rose-200">
          {/* Top Stamp / Tape Decor */}
          <div className="absolute -top-4 -right-2 z-30 bg-amber-100 text-rose-600 font-handwritten px-3.5 py-1 rounded-lg border border-amber-300 text-xs rotate-6 shadow-md font-bold flex items-center gap-1">
            <StickerPatchworkStar className="w-4 h-4 inline" />
            <span>For Kaserra ♡</span>
          </div>

          <div className="rounded-xl overflow-hidden shadow-inner border border-rose-100">
            <img
              src={loveLetter.imagePath}
              alt="Scrapbook Art"
              className="w-full h-auto object-cover rounded-xl hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
