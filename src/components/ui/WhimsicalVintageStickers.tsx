import React from 'react';

/* Whimsical Vintage Storybook Stickers inspired by user reference sheets */

// 1. Two Cuddling Hugging Cats
export const StickerHuggingCats: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 120 120" fill="none" className={className}>
    {/* Shadow & Sticker border */}
    <ellipse cx="60" cy="65" rx="45" ry="40" fill="#ffffff" filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.12))" />
    
    {/* Cat 1: Brown Cat Left */}
    <ellipse cx="45" cy="75" rx="18" ry="24" fill="#a06040" />
    <circle cx="45" cy="50" r="18" fill="#a06040" />
    <polygon points="32,38 28,18 42,32" fill="#804828" />
    <polygon points="56,38 52,20 60,34" fill="#804828" />
    {/* Brown cat face details */}
    <ellipse cx="40" cy="52" rx="2" ry="3" fill="#2d1b0e" />
    <ellipse cx="50" cy="52" rx="2" ry="3" fill="#2d1b0e" />
    <polygon points="45,55 42,58 48,58" fill="#e89898" />

    {/* Cat 2: Orange Striped Cat Right Hugging */}
    <ellipse cx="72" cy="72" rx="20" ry="26" fill="#f49838" />
    <circle cx="70" cy="46" r="19" fill="#f49838" />
    <polygon points="62,32 60,14 74,28" fill="#d87820" />
    <polygon points="82,34 88,16 78,32" fill="#d87820" />
    {/* Hugging arm */}
    <path d="M 55 60 Q 40 62 48 72" stroke="#d87820" strokeWidth="5" fill="none" strokeLinecap="round" />
    {/* Stripes */}
    <path d="M 68 34 Q 70 40 76 34" stroke="#d87820" strokeWidth="3" fill="none" />
    <path d="M 80 48 Q 85 52 82 58" stroke="#d87820" strokeWidth="3" fill="none" />
    {/* Orange cat face */}
    <ellipse cx="64" cy="46" rx="2" ry="3" fill="#2d1b0e" />
    <ellipse cx="74" cy="46" rx="2" ry="3" fill="#2d1b0e" />
    <polygon points="69,50 67,53 71,53" fill="#e89898" />
    {/* Sweet blush */}
    <circle cx="59" cy="50" r="3" fill="#f48080" opacity="0.6" />
    <circle cx="78" cy="50" r="3" fill="#f48080" opacity="0.6" />
  </svg>
);

// 2. Vintage Sunflower with Cute Happy Face
export const StickerSunflowerFace: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 120 120" fill="none" className={className}>
    {/* Sticker white border */}
    <circle cx="60" cy="60" r="52" fill="#ffffff" filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.12))" />
    
    {/* Scalloped Sunflower Petals */}
    <g fill="#fbbf24" stroke="#d97706" strokeWidth="2">
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 60 + Math.cos(angle) * 35;
        const y = 60 + Math.sin(angle) * 35;
        return <circle key={i} cx={x} cy={y} r="15" />;
      })}
    </g>

    {/* Center Face */}
    <circle cx="60" cy="60" r="28" fill="#f59e0b" stroke="#b45309" strokeWidth="3" />
    {/* Cute eyes & smile */}
    <circle cx="50" cy="56" r="3" fill="#451a03" />
    <circle cx="70" cy="56" r="3" fill="#451a03" />
    <path d="M 52 66 Q 60 74 68 66" stroke="#451a03" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <circle cx="45" cy="62" r="3" fill="#ef4444" opacity="0.6" />
    <circle cx="75" cy="62" r="3" fill="#ef4444" opacity="0.6" />
  </svg>
);

// 3. Patchwork Green Sewn Star
export const StickerPatchworkStar: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    {/* Star shape with felt texture */}
    <path
      d="M 50 8 L 63 35 L 92 38 L 70 58 L 77 87 L 50 72 L 23 87 L 30 58 L 8 38 L 37 35 Z"
      fill="#65a30d"
      stroke="#3f6212"
      strokeWidth="4"
      strokeLinejoin="round"
      filter="drop-shadow(0px 3px 5px rgba(0,0,0,0.15))"
    />
    {/* Stitched Fabric Patches */}
    <rect x="42" y="38" width="16" height="16" fill="#eab308" stroke="#854d0e" strokeWidth="2" strokeDasharray="3 2" transform="rotate(12 50 46)" />
    <rect x="52" y="50" width="12" height="12" fill="#38bdf8" stroke="#0369a1" strokeWidth="2" strokeDasharray="3 2" transform="rotate(-8 58 56)" />
    {/* Sewing seam dashed lines */}
    <path
      d="M 50 14 L 61 36 L 86 39 L 67 56 L 73 81 L 50 68 L 27 81 L 33 56 L 14 39 L 39 36 Z"
      stroke="#ffffff"
      strokeWidth="2"
      strokeDasharray="4 3"
      fill="none"
    />
  </svg>
);

// 4. Whimsical Star Costume Kid (Chibi Character)
export const StickerStarKid: React.FC<{ className?: string }> = ({ className = "w-16 h-18" }) => (
  <svg viewBox="0 0 100 120" fill="none" className={className}>
    {/* Sticker white border */}
    <path
      d="M 50 5 L 75 30 L 95 60 L 80 110 L 20 110 L 5 60 L 25 30 Z"
      fill="#ffffff"
      filter="drop-shadow(0px 4px 8px rgba(0,0,0,0.15))"
    />

    {/* Giant Yellow Star Hat */}
    <path
      d="M 50 10 L 63 35 L 90 38 L 70 60 L 76 86 L 50 72 L 24 86 L 30 60 L 10 38 L 37 35 Z"
      fill="#facc15"
      stroke="#ca8a04"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />

    {/* Chibi Face inside Star Center */}
    <circle cx="50" cy="55" r="18" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
    <ellipse cx="50" cy="57" rx="14" ry="12" fill="#ffedd5" />
    {/* Cute Chibi Face Details */}
    <circle cx="43" cy="56" r="2.5" fill="#331800" />
    <circle cx="57" cy="56" r="2.5" fill="#331800" />
    <ellipse cx="50" cy="62" rx="3" ry="2" fill="#f43f5e" />
    <circle cx="40" cy="60" r="2.5" fill="#fb7185" opacity="0.6" />
    <circle cx="60" cy="60" r="2.5" fill="#fb7185" opacity="0.6" />

    {/* Little Body in Dress/Tunic */}
    <path d="M 36 72 L 28 102 L 72 102 L 64 72 Z" fill="#86efac" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
    {/* Little Red Boots */}
    <ellipse cx="36" cy="105" rx="7" ry="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
    <ellipse cx="64" cy="105" rx="7" ry="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
  </svg>
);

// 5. Black Cat inside a Gold Star
export const StickerBlackCatStar: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    {/* Star Frame */}
    <path
      d="M 50 8 L 63 35 L 92 38 L 70 58 L 77 87 L 50 72 L 23 87 L 30 58 L 8 38 L 37 35 Z"
      fill="#eab308"
      stroke="#854d0e"
      strokeWidth="4"
      strokeLinejoin="round"
      filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.18))"
    />
    {/* Black Cat Head inside Star */}
    <circle cx="50" cy="54" r="18" fill="#18181b" />
    <polygon points="36,44 32,26 44,38" fill="#18181b" />
    <polygon points="64,44 68,26 56,38" fill="#18181b" />
    {/* Big Cute White Eyes */}
    <circle cx="43" cy="52" r="5" fill="#ffffff" />
    <circle cx="57" cy="52" r="5" fill="#ffffff" />
    <circle cx="44" cy="52" r="2.5" fill="#000000" />
    <circle cx="56" cy="52" r="2.5" fill="#000000" />
    <circle cx="45" cy="50" r="1" fill="#ffffff" />
    <circle cx="57" cy="50" r="1" fill="#ffffff" />
  </svg>
);

// 6. Cowboy Duck in Hat
export const StickerCowboyDuck: React.FC<{ className?: string }> = ({ className = "w-14 h-16" }) => (
  <svg viewBox="0 0 100 110" fill="none" className={className}>
    <ellipse cx="50" cy="65" rx="35" ry="38" fill="#ffffff" filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.12))" />
    {/* Duck Body */}
    <ellipse cx="50" cy="72" rx="22" ry="26" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
    {/* Duck Head */}
    <circle cx="50" cy="45" r="17" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" />
    {/* Beak */}
    <path d="M 42 48 Q 50 56 58 48 Z" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
    {/* Eyes */}
    <circle cx="44" cy="40" r="2.5" fill="#1e293b" />
    <circle cx="56" cy="40" r="2.5" fill="#1e293b" />
    {/* Brown Cowboy Hat */}
    <path d="M 25 32 Q 50 20 75 32 L 68 18 Q 50 12 32 18 Z" fill="#92400e" stroke="#451a03" strokeWidth="3" strokeLinejoin="round" />
    <ellipse cx="50" cy="31" rx="28" ry="6" fill="#78350f" stroke="#451a03" strokeWidth="2" />
  </svg>
);

// 7. Vintage Sewing Buttons (Red / Green / Orange)
export const StickerVintageButton: React.FC<{ className?: string; color?: string; stroke?: string }> = ({
  className = "w-10 h-10",
  color = "#dc2626",
  stroke = "#7f1d1d",
}) => (
  <svg viewBox="0 0 80 80" fill="none" className={className}>
    <circle cx="40" cy="40" r="36" fill="#ffffff" filter="drop-shadow(0px 3px 5px rgba(0,0,0,0.15))" />
    <circle cx="40" cy="40" r="32" fill={color} stroke={stroke} strokeWidth="4" />
    <circle cx="40" cy="40" r="22" stroke={stroke} strokeWidth="2.5" fill="none" opacity="0.6" />
    {/* 4 Thread Holes */}
    <circle cx="32" cy="32" r="3.5" fill="#451a03" />
    <circle cx="48" cy="32" r="3.5" fill="#451a03" />
    <circle cx="32" cy="48" r="3.5" fill="#451a03" />
    <circle cx="48" cy="48" r="3.5" fill="#451a03" />
    {/* X Thread Stitch */}
    <line x1="32" y1="32" x2="48" y2="48" stroke="#fef3c7" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="48" y1="32" x2="32" y2="48" stroke="#fef3c7" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 8. Branch of Yellow Lemons
export const StickerLemonBranch: React.FC<{ className?: string }> = ({ className = "w-16 h-14" }) => (
  <svg viewBox="0 0 120 100" fill="none" className={className}>
    {/* Branch / Twig */}
    <path d="M 20 50 Q 60 40 100 30" stroke="#4d7c0f" strokeWidth="4" strokeLinecap="round" />
    {/* Leaves */}
    <path d="M 45 42 C 35 25 55 15 65 32 Z" fill="#65a30d" stroke="#3f6212" strokeWidth="2" />
    <path d="M 75 35 C 80 15 100 20 90 38 Z" fill="#65a30d" stroke="#3f6212" strokeWidth="2" />
    {/* Lemon 1 */}
    <ellipse cx="40" cy="65" rx="18" ry="24" fill="#facc15" stroke="#ca8a04" strokeWidth="3" transform="rotate(-20 40 65)" />
    {/* Lemon 2 */}
    <ellipse cx="75" cy="60" rx="16" ry="22" fill="#facc15" stroke="#ca8a04" strokeWidth="3" transform="rotate(15 75 60)" />
  </svg>
);

// 9. Cat in Banana Suit
export const StickerBananaCat: React.FC<{ className?: string }> = ({ className = "w-12 h-16" }) => (
  <svg viewBox="0 0 90 120" fill="none" className={className}>
    {/* Yellow Banana Suit */}
    <path
      d="M 45 10 Q 75 40 70 100 Q 45 115 20 100 Q 15 40 45 10 Z"
      fill="#fde047"
      stroke="#eab308"
      strokeWidth="4"
      strokeLinejoin="round"
      filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.15))"
    />
    {/* Cat Face Window */}
    <ellipse cx="45" cy="50" rx="18" ry="16" fill="#ffffff" stroke="#eab308" strokeWidth="3" />
    <circle cx="38" cy="48" r="2.5" fill="#1e293b" />
    <circle cx="52" cy="48" r="2.5" fill="#1e293b" />
    <polygon points="45,52 43,55 47,55" fill="#f43f5e" />
    <path d="M 41 57 Q 45 60 49 57" stroke="#1e293b" strokeWidth="2" fill="none" />
    {/* Banana Stem Top */}
    <rect x="41" y="4" width="8" height="10" rx="3" fill="#65a30d" stroke="#3f6212" strokeWidth="2" />
  </svg>
);

// 10. Dachshund Dog in Party Hat
export const StickerDachshundParty: React.FC<{ className?: string }> = ({ className = "w-18 h-14" }) => (
  <svg viewBox="0 0 140 100" fill="none" className={className}>
    <ellipse cx="70" cy="55" rx="55" ry="35" fill="#ffffff" filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.12))" />
    {/* Long Dachshund Body */}
    <rect x="35" y="45" width="60" height="24" rx="12" fill="#a16207" stroke="#713f12" strokeWidth="3" />
    {/* Pink Sweater */}
    <rect x="42" y="44" width="40" height="26" rx="6" fill="#f472b6" stroke="#db2777" strokeWidth="2.5" />
    {/* Head */}
    <ellipse cx="100" cy="42" rx="16" ry="14" fill="#a16207" stroke="#713f12" strokeWidth="3" />
    {/* Snout */}
    <ellipse cx="114" cy="45" rx="12" ry="8" fill="#ca8a04" stroke="#713f12" strokeWidth="2" />
    <circle cx="122" cy="43" r="3" fill="#1e293b" />
    {/* Floppy Ear */}
    <ellipse cx="94" cy="44" rx="8" ry="16" fill="#713f12" transform="rotate(15 94 44)" />
    {/* Eye */}
    <circle cx="104" cy="38" r="2.5" fill="#1e293b" />
    {/* Party Hat */}
    <polygon points="100,28 92,6 108,12" fill="#ec4899" stroke="#be185d" strokeWidth="2" />
    <circle cx="92" cy="6" r="3" fill="#fde047" />
    {/* Tail */}
    <path d="M 35 52 Q 20 40 22 30" stroke="#713f12" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

// 11. Chibi Kid in Dragon Costume
export const StickerDragonKid: React.FC<{ className?: string }> = ({ className = "w-14 h-18" }) => (
  <svg viewBox="0 0 100 120" fill="none" className={className}>
    {/* Sticker Base */}
    <path d="M 50 8 L 85 30 L 80 110 L 20 110 L 15 30 Z" fill="#ffffff" filter="drop-shadow(0px 4px 8px rgba(0,0,0,0.15))" />
    {/* Green Dragon Hood */}
    <path d="M 20 45 C 20 15 80 15 80 45 L 80 85 L 20 85 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="3.5" />
    {/* Dragon Horns & Spikes */}
    <polygon points="30,20 22,2 38,15" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
    <polygon points="70,20 78,2 62,15" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
    {/* Face Opening */}
    <ellipse cx="50" cy="52" rx="20" ry="17" fill="#ffedd5" stroke="#16a34a" strokeWidth="2.5" />
    <circle cx="42" cy="50" r="2.5" fill="#331800" />
    <circle cx="58" cy="50" r="2.5" fill="#331800" />
    <path d="M 46 58 Q 50 62 54 58" stroke="#331800" strokeWidth="2" fill="none" />
    {/* Raincoat/Body */}
    <path d="M 30 82 L 24 108 L 76 108 L 70 82 Z" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
  </svg>
);

// Floating Decorative Vintage Whimsical Background Sticker Layout
export const WhimsicalBackgroundStickers: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden opacity-90 select-none">
    {/* Top Left */}
    <div className="absolute top-5 left-6 rotate-[-10deg]">
      <StickerHuggingCats className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" />
    </div>
    <div className="absolute top-28 left-28 rotate-[12deg]">
      <StickerSunflowerFace className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md" />
    </div>

    {/* Top Right */}
    <div className="absolute top-6 right-6 rotate-[8deg]">
      <StickerStarKid className="w-16 h-20 sm:w-20 sm:h-24 drop-shadow-md" />
    </div>
    <div className="absolute top-32 right-28 rotate-[-14deg]">
      <StickerBlackCatStar className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md" />
    </div>

    {/* Middle Left */}
    <div className="absolute top-[42%] left-5 rotate-[15deg]">
      <StickerCowboyDuck className="w-14 h-16 sm:w-18 sm:h-20 drop-shadow-md" />
    </div>
    <div className="absolute top-[60%] left-24 rotate-[-8deg]">
      <StickerBananaCat className="w-14 h-18 sm:w-16 sm:h-20 drop-shadow-md" />
    </div>

    {/* Middle Right */}
    <div className="absolute top-[40%] right-6 rotate-[-12deg]">
      <StickerDachshundParty className="w-18 h-14 sm:w-22 sm:h-18 drop-shadow-md" />
    </div>
    <div className="absolute top-[62%] right-24 rotate-[10deg]">
      <StickerLemonBranch className="w-16 h-14 sm:w-20 sm:h-16 drop-shadow-md" />
    </div>

    {/* Bottom Left */}
    <div className="absolute bottom-16 left-8 rotate-[6deg]">
      <StickerDragonKid className="w-14 h-18 sm:w-18 sm:h-22 drop-shadow-md" />
    </div>

    {/* Bottom Right */}
    <div className="absolute bottom-16 right-10 rotate-[-10deg]">
      <StickerPatchworkStar className="w-14 h-14 sm:w-18 sm:h-18 drop-shadow-md" />
    </div>
  </div>
);
