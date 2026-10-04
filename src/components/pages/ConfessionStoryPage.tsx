import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { APP_CONFIG } from '../../config/content';
import { StickerDachshundParty, StickerHuggingCats, StickerSunflowerFace } from '../ui/WhimsicalVintageStickers';

export const ConfessionStoryPage: React.FC = () => {
  const story = APP_CONFIG.confessionStory;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="scrapbook-card relative p-8 sm:p-12 space-y-8 text-center shadow-2xl overflow-hidden"
      >
        <div className="washi-tape washi-tape-right" />
        <div className="washi-tape washi-tape-left" />

        {/* Cute Whimsical Corner Decor */}
        <div className="absolute top-5 left-6 rotate-[-10deg] hidden sm:block">
          <StickerSunflowerFace className="w-12 h-12" />
        </div>
        <div className="absolute bottom-6 right-6 rotate-[15deg] hidden sm:block">
          <StickerDachshundParty className="w-16 h-12" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-handwritten text-base border border-rose-300 font-bold">
          <Heart className="w-4 h-4 fill-current text-rose-600" />
          <span>My Feelings • Page 4</span>
        </div>

        <div className="space-y-6 max-w-xl mx-auto">
          <p className="font-serif text-2xl sm:text-3xl text-neutral-900 font-bold italic leading-snug">
            "{story[0]}"
          </p>

          <p className="font-sans text-lg sm:text-xl text-neutral-800 leading-relaxed font-medium">
            {story[1]}
          </p>

          <p className="font-serif text-xl sm:text-2xl text-rose-700 font-bold">
            {story[2]}
          </p>

          <div className="py-2 flex justify-center">
            <StickerHuggingCats className="w-12 h-12" />
          </div>

          <p className="font-sans text-lg sm:text-xl text-neutral-800 leading-relaxed font-medium">
            {story[4]}
          </p>

          {/* Confession Highlight */}
          <div className="pt-5 bg-amber-50 p-6 rounded-2xl border-2 border-dashed border-rose-300 shadow-sm relative">
            <h3 className="font-serif text-3xl sm:text-5xl text-rose-700 font-bold tracking-wide">
              "{story[7]}"
            </h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
