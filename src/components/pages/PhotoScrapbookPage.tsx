import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight, Heart, X, Maximize2 } from 'lucide-react';
import { APP_CONFIG, MemoryItem } from '../../config/content';
import { StickerSunflowerFace, StickerVintageButton, StickerPatchworkStar } from '../ui/WhimsicalVintageStickers';

export const PhotoScrapbookPage: React.FC = () => {
  const memories = APP_CONFIG.memories;
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedModalImage, setSelectedModalImage] = useState<MemoryItem | null>(null);

  const nextPhoto = () => {
    setActiveIdx((prev) => (prev + 1) % memories.length);
  };

  const prevPhoto = () => {
    setActiveIdx((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      {/* Main Scrapbook Page Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="scrapbook-card relative p-6 sm:p-10 space-y-6 shadow-2xl"
      >
        {/* Washi Tapes */}
        <div className="washi-tape washi-tape-left" />
        <div className="washi-tape washi-tape-right" />

        {/* Floating Cute Whimsical Stickers */}
        <div className="absolute top-4 right-8 rotate-12 hidden sm:block">
          <StickerPatchworkStar className="w-12 h-12" />
        </div>
        <div className="absolute bottom-6 left-6 rotate-[-12deg] hidden sm:block">
          <StickerSunflowerFace className="w-12 h-12" />
        </div>

        {/* Page Title */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 font-handwritten text-base border border-rose-300 font-bold">
            <Camera className="w-4 h-4 text-rose-600" />
            <span>Our Moments • Page 2</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-neutral-900 font-bold">
            Memories Together
          </h2>
        </div>

        {/* Featured Polaroid Scrapbook Frame */}
        <div className="relative max-w-2xl mx-auto pt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, rotate: memories[activeIdx].rotation * 2, scale: 0.9 }}
              animate={{ opacity: 1, rotate: memories[activeIdx].rotation, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="polaroid relative group cursor-pointer mx-auto max-w-lg shadow-xl"
              onClick={() => setSelectedModalImage(memories[activeIdx])}
            >
              {/* Polaroid Top Tape Decor */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <StickerSunflowerFace className="w-8 h-8" />
              </div>

              {/* Image Box */}
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-neutral-900">
                <img
                  src={memories[activeIdx].url}
                  alt={memories[activeIdx].caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Polaroid Caption */}
              <div className="pt-4 pb-1 text-center space-y-1">
                <p className="font-handwritten text-2xl sm:text-3xl text-neutral-900 font-bold leading-snug">
                  "{memories[activeIdx].caption}"
                </p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-rose-600 font-sans font-bold">
                  <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                  <span className="uppercase tracking-widest text-[11px]">
                    {memories[activeIdx].tag}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Arrows */}
          <button
            onClick={prevPhoto}
            aria-label="Previous memory"
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white hover:bg-rose-500 text-neutral-800 hover:text-white shadow-xl transition-all border border-rose-200 z-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextPhoto}
            aria-label="Next memory"
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white hover:bg-rose-500 text-neutral-800 hover:text-white shadow-xl transition-all border border-rose-200 z-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Selector Pills */}
        <div className="flex justify-center gap-3 pt-2">
          {memories.map((mem, idx) => (
            <button
              key={mem.id}
              onClick={() => setActiveIdx(idx)}
              className={`relative rounded-xl overflow-hidden border-2 transition-all w-16 h-12 ${
                activeIdx === idx ? 'border-rose-500 scale-110 shadow-lg ring-2 ring-rose-300' : 'border-neutral-200 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={mem.url} alt={mem.caption} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModalImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full polaroid p-4 cursor-default"
            >
              <button
                onClick={() => setSelectedModalImage(null)}
                className="absolute -top-4 -right-4 p-2 rounded-full bg-rose-500 text-white shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] rounded overflow-hidden mb-3 bg-neutral-900">
                <img src={selectedModalImage.url} alt={selectedModalImage.caption} className="w-full h-full object-cover" />
              </div>

              <div className="text-center">
                <p className="font-handwritten text-2xl text-neutral-800 font-bold">
                  "{selectedModalImage.caption}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
