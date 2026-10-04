import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Smile } from 'lucide-react';
import { APP_CONFIG } from '../../config/content';
import { DoodleHeartCluster, DoodleSmiley } from './DoodleStickers';

interface ResponseModalProps {
  responseType: 'yes' | 'time' | null;
  onClose: () => void;
}

export const ResponseModal: React.FC<ResponseModalProps> = ({ responseType, onClose }) => {
  const { finalQuestion } = APP_CONFIG;

  useEffect(() => {
    if (responseType === 'yes') {
      // Fire petal confetti storm!
      const duration = 4 * 1000;
      const animationEnd = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 6,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#f4a2b9', '#ec4899', '#ffd166', '#ffffff'],
          shapes: ['circle'],
        });
        confetti({
          particleCount: 6,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#f4a2b9', '#ec4899', '#ffd166', '#ffffff'],
          shapes: ['circle'],
        });

        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [responseType]);

  if (!responseType) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-lg w-full bg-white p-8 sm:p-12 rounded-3xl text-center space-y-6 border-2 border-rose-300 shadow-2xl"
        >
          {responseType === 'yes' ? (
            <>
              {/* Icon Badge */}
              <div className="w-20 h-20 mx-auto rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-600 animate-bounce">
                <Heart className="w-10 h-10 fill-rose-500" />
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-serif text-neutral-900 font-bold">
                {finalQuestion.yesMessage.title}
              </h3>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-neutral-700 font-handwritten font-bold leading-relaxed">
                {finalQuestion.yesMessage.subtitle}
              </p>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-base shadow-lg shadow-rose-500/30 hover:scale-105 active:scale-95 transition-all"
                >
                  Close & Cherish ✨
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Icon Badge */}
              <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600">
                <Smile className="w-10 h-10" />
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-serif text-neutral-900 font-bold">
                {finalQuestion.timeMessage.title}
              </h3>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-neutral-700 font-handwritten font-bold leading-relaxed">
                {finalQuestion.timeMessage.subtitle}
              </p>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold transition-all border border-neutral-300"
                >
                  <span>Back</span>
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
