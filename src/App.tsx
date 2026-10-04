import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { Scene } from './components/canvas/Scene';
import { MusicPlayer } from './components/ui/MusicPlayer';
import { WhimsicalBackgroundStickers } from './components/ui/WhimsicalVintageStickers';
import { HeroPage } from './components/pages/HeroPage';
import { PhotoScrapbookPage } from './components/pages/PhotoScrapbookPage';
import { LoveLetterPage } from './components/pages/LoveLetterPage';
import { ConfessionStoryPage } from './components/pages/ConfessionStoryPage';
import { LyricsPage } from './components/pages/LyricsPage';
import { SpotifyPlaylistPage } from './components/pages/SpotifyPlaylistPage';
import { FinalQuestionPage } from './components/pages/FinalQuestionPage';
import { ResponseModal } from './components/ui/ResponseModal';
import { globalAudio } from './utils/audio';
import { APP_CONFIG } from './config/content';

export function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAudioStarted, setIsAudioStarted] = useState(false);
  const [isBloomed, setIsBloomed] = useState(false);
  const [responseType, setResponseType] = useState<'yes' | 'time' | null>(null);

  const totalPages = 7;

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleStart = () => {
    setIsAudioStarted(true);
    globalAudio.play(APP_CONFIG.music.audioPath);
    goToNextPage();
  };

  const handleSelectResponse = (type: 'yes' | 'time') => {
    setResponseType(type);
    if (type === 'yes') {
      setIsBloomed(true);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNextPage();
      if (e.key === 'ArrowLeft') goToPrevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  // 3D Scrapbook Book Page Flip variants
  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.92,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        rotateY: { type: 'spring', stiffness: 90, damping: 15 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.4 },
        x: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.92,
      x: direction < 0 ? 100 : -100,
      transition: {
        rotateY: { duration: 0.35, ease: 'easeInOut' },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <div className="scrapbook-bg min-h-screen text-neutral-800 font-sans relative overflow-x-hidden flex flex-col justify-between select-none">
      {/* Subtle WebGL Background Scene */}
      <Scene isBloomed={isBloomed} />

      {/* Decorative Whimsical Vintage Storybook Stickers Background */}
      <WhimsicalBackgroundStickers />

      {/* Top Bar Music Player */}
      <MusicPlayer isAudioStarted={isAudioStarted} />

      {/* Main Interactive Book Presentation Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center py-4 sm:py-6 px-0 [perspective:1200px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ transformStyle: 'preserve-3d' }}
            className="w-full flex justify-center"
          >
            {currentPage === 0 && <HeroPage onNext={handleStart} />}
            {currentPage === 1 && <PhotoScrapbookPage />}
            {currentPage === 2 && <LoveLetterPage />}
            {currentPage === 3 && <ConfessionStoryPage />}
            {currentPage === 4 && <SpotifyPlaylistPage />}
            {currentPage === 5 && <LyricsPage />}
            {currentPage === 6 && <FinalQuestionPage onSelectResponse={handleSelectResponse} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* High Contrast Page Navigation Bar at Bottom */}
      <nav className="relative z-30 pb-6 px-4">
        <div className="max-w-md mx-auto glass-panel px-6 py-3 rounded-full flex items-center justify-between shadow-2xl border border-rose-200/80 bg-white/95">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all ${
              currentPage === 0
                ? 'opacity-30 cursor-not-allowed text-neutral-400'
                : 'text-neutral-800 hover:bg-rose-100 hover:text-rose-600 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          {/* Page Dots & Numbers */}
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-rose-500 hidden sm:block" />
            <span className="text-xs text-neutral-700 font-bold tracking-widest uppercase">
              {currentPage + 1} / {totalPages}
            </span>
            <div className="flex items-center gap-1.5 ml-1">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentPage ? 1 : -1);
                    setCurrentPage(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentPage === idx ? 'w-6 bg-rose-500 shadow-sm' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all ${
              currentPage === totalPages - 1
                ? 'opacity-30 cursor-not-allowed text-neutral-400'
                : 'text-white bg-rose-500 hover:bg-rose-600 shadow-md hover:scale-105 active:scale-95'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Response Choice Modal */}
      <ResponseModal
        responseType={responseType}
        onClose={() => setResponseType(null)}
      />
    </div>
  );
}

export default App;
