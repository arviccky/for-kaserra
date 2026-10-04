import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { APP_CONFIG } from '../../config/content';
import { StickerHuggingCats, StickerCowboyDuck, StickerSunflowerFace } from '../ui/WhimsicalVintageStickers';

interface FinalQuestionPageProps {
  onSelectResponse: (type: 'yes' | 'time') => void;
}

export const FinalQuestionPage: React.FC<FinalQuestionPageProps> = ({ onSelectResponse }) => {
  const { finalQuestion } = APP_CONFIG;

  const [noPos, setNoPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);

  const playfulTexts = [
    finalQuestion.btnTime,
    "Eits gabisa! 😜",
    "Mana bisa klik No 😋",
    "Opss kabur! 🏃‍♂️",
    "No is disabled! 💕",
    "Pilih Yes aja! ✨",
    "Gamauu 🙈",
    "Tetep gaboleh! 🤪",
    "Yah tetep gabisa wkwk 💖",
  ];

  const handleDodgeNo = () => {
    // Generate random offset coordinates so the No button hops away dynamically
    const randomX = (Math.random() - 0.5) * 260;
    const randomY = (Math.random() - 0.5) * 160;
    setNoPos({ x: randomX, y: randomY });
    setDodgeCount((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="scrapbook-card relative p-8 sm:p-14 space-y-8 text-center overflow-visible shadow-2xl"
      >
        <div className="washi-tape washi-tape-top-center" />
        <div className="washi-tape washi-tape-left" />
        <div className="washi-tape washi-tape-right" />

        {/* Cute Corner Whimsical Stickers */}
        <div className="absolute top-5 left-6 rotate-[-12deg] hidden sm:block">
          <StickerHuggingCats className="w-14 h-14" />
        </div>
        <div className="absolute top-5 right-6 rotate-[15deg] hidden sm:block">
          <StickerCowboyDuck className="w-12 h-14" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-handwritten text-base border border-rose-300 font-bold">
          <Heart className="w-4 h-4 fill-current text-rose-600" />
          <span>The Final Page • Page 7</span>
        </div>

        <div className="space-y-4 max-w-xl mx-auto">
          <p className="font-handwritten text-2xl sm:text-3xl text-neutral-800 font-bold">
            {finalQuestion.prompt1}
          </p>
          <p className="font-sans text-lg sm:text-xl text-neutral-800 font-medium">
            {finalQuestion.prompt2}
          </p>
          <p className="font-serif text-xl sm:text-2xl text-neutral-900 font-bold italic">
            "{finalQuestion.prompt3}"
          </p>
        </div>

        {/* Big Main Question Box */}
        <div className="py-5 bg-amber-50 p-8 rounded-3xl border-2 border-rose-300 shadow-md">
          <h1 className="font-serif text-4xl sm:text-6xl text-rose-700 font-bold tracking-tight leading-tight">
            {finalQuestion.mainQuestion}
          </h1>
        </div>

        {/* Response Choice Buttons */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 pt-2 min-h-[90px]">
          {/* YES Button */}
          <button
            onClick={() => onSelectResponse('yes')}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-lg shadow-xl shadow-rose-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 z-20 cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-current" />
            <span>{finalQuestion.btnYes}</span>
          </button>

          {/* Dodging NO / Time Button */}
          <motion.button
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: 'spring', stiffness: 350, damping: 18 }}
            onMouseEnter={handleDodgeNo}
            onTouchStart={handleDodgeNo}
            onClick={handleDodgeNo}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-base border border-neutral-300 shadow-md cursor-pointer transition-colors z-30 select-none"
          >
            <span>{playfulTexts[dodgeCount % playfulTexts.length]}</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
