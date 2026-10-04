import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../../config/content';
import { StickerHuggingCats, StickerSunflowerFace, StickerStarKid, StickerCowboyDuck, StickerBlackCatStar } from '../ui/WhimsicalVintageStickers';

interface HeroPageProps {
  onNext: () => void;
}

export const HeroPage: React.FC<HeroPageProps> = ({ onNext }) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      {/* Scrapbook Album Cover Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="scrapbook-card relative p-8 sm:p-14 text-center space-y-8 overflow-hidden shadow-2xl"
      >
        {/* Washi Tape Decor */}
        <div className="washi-tape washi-tape-top-center" />
        <div className="washi-tape washi-tape-left" />
        <div className="washi-tape washi-tape-right" />

        {/* Decorative Stamps & Doodle Badges */}
        <div className="absolute top-4 right-6 bg-amber-100 text-rose-600 font-handwritten px-3.5 py-1 rounded-lg border border-amber-300 text-sm rotate-6 shadow-sm font-bold">
          Volume #1 • For Kaserra ♡
        </div>

        {/* Cute Corner Whimsical Sticker */}
        <div className="absolute top-5 left-6 rotate-[-10deg] hidden sm:block">
          <StickerBlackCatStar className="w-12 h-12" />
        </div>

        <div className="space-y-4 pt-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-handwritten text-lg border border-rose-300 font-bold"
          >
            <Heart className="w-4 h-4 fill-current text-rose-500" />
            <span>A Special Message</span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl font-serif text-neutral-900 font-bold tracking-tight leading-tight">
            {APP_CONFIG.hero.greeting}
          </h1>

          <p className="text-xl sm:text-2xl font-handwritten text-neutral-800 font-bold max-w-lg mx-auto leading-relaxed">
            "{APP_CONFIG.hero.subheading}"
          </p>
        </div>

        {/* Whimsical Vintage Sticker Showcase Row Container */}
        <div className="my-6 bg-amber-50/90 p-6 rounded-2xl border-2 border-dashed border-rose-300 max-w-md mx-auto space-y-3 relative shadow-sm">
          <div className="flex justify-center items-center gap-3 sm:gap-5">
            <StickerHuggingCats className="w-14 h-14 hover:scale-110 transition-transform" />
            <StickerSunflowerFace className="w-12 h-12 hover:scale-110 transition-transform" />
            <StickerStarKid className="w-14 h-16 hover:scale-110 transition-transform" />
            <StickerCowboyDuck className="w-12 h-14 hover:scale-110 transition-transform" />
          </div>
          <p className="font-handwritten text-xl text-neutral-800 font-bold">
            A small interactive scrapbook made just for you.
          </p>
        </div>

        {/* Next Button */}
        <div className="pt-2">
          <button
            onClick={onNext}
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-lg shadow-xl shadow-rose-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>{APP_CONFIG.hero.startButton}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
