import React from 'react';

// Hand-drawn SVG Doodle Stickers inspired by marker drawings

export const DoodleSmiley: React.FC<{ className?: string; color?: string }> = ({
  className = "w-8 h-8",
  color = "#ec4899",
}) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <circle cx="50" cy="50" r="42" stroke={color} strokeWidth="6" strokeLinecap="round" strokeDasharray="2 0.5" />
    <circle cx="34" cy="40" r="5" fill={color} />
    <circle cx="66" cy="40" r="5" fill={color} />
    <path d="M 30 60 Q 50 78 70 60" stroke={color} strokeWidth="6" strokeLinecap="round" fill="none" />
  </svg>
);

export const DoodleHeartCluster: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path
      d="M 35 25 C 25 10 10 25 25 40 L 45 60 L 65 40 C 80 25 65 10 55 25 Q 45 35 35 25 Z"
      stroke="#ef4444"
      strokeWidth="5"
      strokeLinecap="round"
      fill="#fee2e2"
    />
    <path
      d="M 65 55 C 58 45 48 55 58 65 L 70 78 L 82 65 C 92 55 82 45 75 55 Z"
      stroke="#ec4899"
      strokeWidth="4"
      strokeLinecap="round"
      fill="#fce7f3"
    />
    <path
      d="M 20 65 C 15 57 7 65 15 73 L 23 82 L 31 73 C 39 65 31 57 26 65 Z"
      stroke="#06b6d4"
      strokeWidth="4"
      strokeLinecap="round"
      fill="#cff4fc"
    />
  </svg>
);

export const DoodleStarCluster: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    {/* Big Pink Star */}
    <path
      d="M 40 10 L 48 30 L 70 32 L 53 46 L 58 68 L 40 55 L 22 68 L 27 46 L 10 32 L 32 30 Z"
      stroke="#ec4899"
      strokeWidth="5"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="#fdf2f8"
    />
    {/* Blue Star */}
    <path
      d="M 75 55 L 80 67 L 93 68 L 83 77 L 86 90 L 75 82 L 64 90 L 67 77 L 57 68 L 70 67 Z"
      stroke="#0284c7"
      strokeWidth="4"
      strokeLinejoin="round"
      fill="#e0f2fe"
    />
  </svg>
);

export const DoodleFlower: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    {/* Petals */}
    <circle cx="50" cy="28" r="14" fill="#fce7f3" stroke="#ec4899" strokeWidth="4" />
    <circle cx="72" cy="50" r="14" fill="#fce7f3" stroke="#ec4899" strokeWidth="4" />
    <circle cx="50" cy="72" r="14" fill="#fce7f3" stroke="#ec4899" strokeWidth="4" />
    <circle cx="28" cy="50" r="14" fill="#fce7f3" stroke="#ec4899" strokeWidth="4" />
    <circle cx="35" cy="35" r="14" fill="#fce7f3" stroke="#ec4899" strokeWidth="4" />
    <circle cx="65" cy="35" r="14" fill="#fce7f3" stroke="#ec4899" strokeWidth="4" />
    <circle cx="35" cy="65" r="14" fill="#fce7f3" stroke="#ec4899" strokeWidth="4" />
    <circle cx="65" cy="65" r="14" fill="#fce7f3" stroke="#ec4899" strokeWidth="4" />
    {/* Center */}
    <circle cx="50" cy="50" r="15" fill="#fde047" stroke="#eab308" strokeWidth="4" />
  </svg>
);

export const DoodleCat: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    {/* Cat Ears */}
    <path d="M 22 35 L 12 10 L 38 22 Z" stroke="#ec4899" strokeWidth="5" fill="#fdf2f8" strokeLinejoin="round" />
    <path d="M 78 35 L 88 10 L 62 22 Z" stroke="#ec4899" strokeWidth="5" fill="#fdf2f8" strokeLinejoin="round" />
    {/* Cat Head */}
    <ellipse cx="50" cy="52" rx="40" ry="32" stroke="#ec4899" strokeWidth="5" fill="#ffffff" />
    {/* Eyes */}
    <ellipse cx="36" cy="48" rx="4" ry="6" fill="#334155" />
    <ellipse cx="64" cy="48" rx="4" ry="6" fill="#334155" />
    {/* Nose & Mouth */}
    <path d="M 50 56 L 47 60 L 53 60 Z" fill="#ec4899" />
    <path d="M 44 64 Q 50 70 56 64" stroke="#ec4899" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Whiskers */}
    <line x1="12" y1="48" x2="26" y2="50" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
    <line x1="10" y1="56" x2="26" y2="55" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
    <line x1="88" y1="48" x2="74" y2="50" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
    <line x1="90" y1="56" x2="74" y2="55" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
    {/* Bowtie */}
    <path d="M 40 85 L 50 89 L 60 85 L 50 93 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="3" />
  </svg>
);

export const DoodleRainbow: React.FC<{ className?: string }> = ({ className = "w-12 h-10" }) => (
  <svg viewBox="0 0 100 80" fill="none" className={className}>
    {/* Outer Arc Red/Pink */}
    <path d="M 15 60 A 35 35 0 0 1 85 60" stroke="#ef4444" strokeWidth="7" strokeLinecap="round" fill="none" />
    {/* Middle Arc Yellow */}
    <path d="M 23 60 A 27 27 0 0 1 77 60" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" fill="none" />
    {/* Inner Arc Teal */}
    <path d="M 31 60 A 19 19 0 0 1 69 60" stroke="#06b6d4" strokeWidth="7" strokeLinecap="round" fill="none" />
    {/* Clouds */}
    <circle cx="15" cy="62" r="10" fill="#ffffff" stroke="#0284c7" strokeWidth="4" />
    <circle cx="23" cy="65" r="8" fill="#ffffff" stroke="#0284c7" strokeWidth="4" />
    <circle cx="85" cy="62" r="10" fill="#ffffff" stroke="#0284c7" strokeWidth="4" />
    <circle cx="77" cy="65" r="8" fill="#ffffff" stroke="#0284c7" strokeWidth="4" />
  </svg>
);

export const DoodleCoffee: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    {/* Cup Base */}
    <path d="M 28 35 L 34 85 Q 50 90 66 85 L 72 35 Z" stroke="#78350f" strokeWidth="5" fill="#fffbebe6" strokeLinejoin="round" />
    {/* Cup Lid */}
    <rect x="24" y="24" width="52" height="12" rx="4" fill="#f59e0b" stroke="#b45309" strokeWidth="4" />
    {/* Heart Logo */}
    <circle cx="50" cy="60" r="14" fill="#22c55e" />
    <path d="M 45 57 C 42 53 38 57 43 62 L 50 67 L 57 62 C 62 57 58 53 55 57 Z" fill="#ffffff" />
    {/* Steam */}
    <path d="M 42 16 Q 46 10 42 4" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M 58 16 Q 62 10 58 4" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

export const DoodleCake: React.FC<{ className?: string }> = ({ className = "w-12 h-10" }) => (
  <svg viewBox="0 0 100 80" fill="none" className={className}>
    {/* Cake slice body */}
    <path d="M 15 35 L 75 20 L 90 40 L 30 55 Z" stroke="#334155" strokeWidth="4" fill="#ffffff" strokeLinejoin="round" />
    <path d="M 30 55 L 90 40 L 90 65 L 30 80 Z" stroke="#334155" strokeWidth="4" fill="#fce7f3" strokeLinejoin="round" />
    {/* Layer lines */}
    <path d="M 30 67 L 90 52" stroke="#ef4444" strokeWidth="4" />
    {/* Strawberry on top */}
    <path d="M 68 18 C 62 10 74 2 80 12 L 78 24 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="3" />
    <circle cx="73" cy="14" r="1" fill="#ffffff" />
    <circle cx="76" cy="18" r="1" fill="#ffffff" />
  </svg>
);

export const DoodleEnvelope: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 80" fill="none" className={className}>
    <rect x="10" y="15" width="80" height="55" rx="6" stroke="#0284c7" strokeWidth="5" fill="#f0f9ff" />
    <path d="M 10 18 L 50 48 L 90 18" stroke="#0284c7" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Red Heart Seal */}
    <path d="M 45 42 C 40 37 34 42 42 49 L 50 55 L 58 49 C 66 42 60 37 55 42 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
  </svg>
);

export const DoodleSun: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <circle cx="50" cy="50" r="22" stroke="#ef4444" strokeWidth="5" fill="#fef08a" />
    {/* Sun Rays */}
    <line x1="50" y1="12" x2="50" y2="20" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
    <line x1="50" y1="80" x2="50" y2="88" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
    <line x1="12" y1="50" x2="20" y2="50" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
    <line x1="80" y1="50" x2="88" y2="50" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
    <line x1="23" y1="23" x2="29" y2="29" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
    <line x1="71" y1="71" x2="77" y2="77" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
    <line x1="23" y1="77" x2="29" y2="71" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
    <line x1="71" y1="29" x2="77" y2="23" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

export const DoodleMusicNote: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <circle cx="30" cy="70" r="12" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="4" />
    <circle cx="70" cy="60" r="12" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="4" />
    <path d="M 40 70 L 40 25 L 80 15 L 80 60" stroke="#6d28d9" strokeWidth="6" strokeLinecap="round" fill="none" />
    <line x1="40" y1="35" x2="80" y2="25" stroke="#6d28d9" strokeWidth="6" />
  </svg>
);

export const DoodleBow: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 70" fill="none" className={className}>
    <path d="M 50 35 L 15 15 Q 10 35 15 55 Z" stroke="#ec4899" strokeWidth="5" fill="#fce7f3" strokeLinejoin="round" />
    <path d="M 50 35 L 85 15 Q 90 35 85 55 Z" stroke="#ec4899" strokeWidth="5" fill="#fce7f3" strokeLinejoin="round" />
    <circle cx="50" cy="35" r="8" fill="#ef4444" stroke="#dc2626" strokeWidth="4" />
    {/* Ribbon tails */}
    <path d="M 45 42 L 30 65 L 42 62 Z" fill="#ec4899" stroke="#be185d" strokeWidth="3" />
    <path d="M 55 42 L 70 65 L 58 62 Z" fill="#ec4899" stroke="#be185d" strokeWidth="3" />
  </svg>
);

export const DoodleSpeechBubble: React.FC<{ className?: string; text?: string }> = ({
  className = "w-16 h-12",
  text = "♡",
}) => (
  <svg viewBox="0 0 120 90" fill="none" className={className}>
    <path
      d="M 20 20 Q 20 10 35 10 L 85 10 Q 100 10 100 25 L 100 55 Q 100 70 85 70 L 45 70 L 25 85 L 30 70 L 20 70 Q 10 70 10 55 L 10 25 Q 10 20 20 20 Z"
      stroke="#ec4899"
      strokeWidth="5"
      fill="#ffffff"
      strokeLinejoin="round"
    />
    <text x="55" y="48" textAnchor="middle" fill="#ec4899" fontSize="26" fontWeight="bold" fontFamily="sans-serif">
      {text}
    </text>
  </svg>
);

// Floating Decorative Sticker Overlay for Scrapbook Background
export const BackgroundDoodleStickers: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden opacity-85 select-none">
    {/* Top Left */}
    <div className="absolute top-6 left-6 rotate-[-12deg]">
      <DoodleCat className="w-14 h-14 sm:w-20 sm:h-20 drop-shadow-md" />
    </div>
    <div className="absolute top-24 left-32 rotate-[15deg]">
      <DoodleRainbow className="w-12 h-10 sm:w-16 sm:h-14 drop-shadow-md" />
    </div>

    {/* Top Right */}
    <div className="absolute top-8 right-8 rotate-[8deg]">
      <DoodleStarCluster className="w-14 h-14 sm:w-20 sm:h-20 drop-shadow-md" />
    </div>
    <div className="absolute top-28 right-28 rotate-[-10deg]">
      <DoodleCoffee className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-md" />
    </div>

    {/* Middle Left */}
    <div className="absolute top-1/2 left-4 -translate-y-1/2 rotate-[-8deg]">
      <DoodleFlower className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-md" />
    </div>
    <div className="absolute top-[60%] left-24 rotate-[20deg]">
      <DoodleEnvelope className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-md" />
    </div>

    {/* Middle Right */}
    <div className="absolute top-1/2 right-6 -translate-y-1/2 rotate-[12deg]">
      <DoodleCake className="w-14 h-12 sm:w-18 sm:h-14 drop-shadow-md" />
    </div>
    <div className="absolute top-[42%] right-24 rotate-[-15deg]">
      <DoodleBow className="w-12 h-10 sm:w-16 sm:h-12 drop-shadow-md" />
    </div>

    {/* Bottom Left */}
    <div className="absolute bottom-16 left-8 rotate-[10deg]">
      <DoodleMusicNote className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-md" />
    </div>

    {/* Bottom Right */}
    <div className="absolute bottom-16 right-10 rotate-[-14deg]">
      <DoodleSmiley className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-md" />
    </div>
  </div>
);
