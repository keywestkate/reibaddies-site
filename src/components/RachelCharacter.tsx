interface RachelCharacterProps {
  size?: number;
  className?: string;
}

export default function RachelCharacter({ size = 160, className = "" }: RachelCharacterProps) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 160 224" fill="none" className={className}>
      {/* Bunny ears */}
      <path d="M62 28 C58 10 54 2 56 0 C60 -2 66 6 68 24" fill="#EC99AF" stroke="#0D0D0D" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M62 28 C60 18 62 8 64 6 C65 10 66 18 68 24" fill="#FADADD" stroke="#0D0D0D" strokeWidth="1"/>
      <path d="M98 28 C102 10 106 2 104 0 C100 -2 94 6 92 24" fill="#EC99AF" stroke="#0D0D0D" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M98 28 C100 18 98 8 96 6 C95 10 94 18 92 24" fill="#FADADD" stroke="#0D0D0D" strokeWidth="1"/>
      {/* Hair — short military-chic */}
      <path d="M54 56 C50 38 56 22 80 20 C104 22 110 38 106 56 C104 42 100 32 80 30 C60 32 56 42 54 56 Z" fill="#3D2B1F" stroke="#0D0D0D" strokeWidth="1.5"/>
      {/* Head */}
      <ellipse cx="80" cy="56" rx="26" ry="30" fill="#D4956A" stroke="#0D0D0D" strokeWidth="2"/>
      {/* Eyes — strong brows */}
      <path d="M64 46 Q70 43 74 46" stroke="#3D2B1F" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M86 46 Q92 43 96 46" stroke="#3D2B1F" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="69" cy="52" r="2.5" fill="#0D0D0D"/>
      <circle cx="91" cy="52" r="2.5" fill="#0D0D0D"/>
      <circle cx="70" cy="51" r="0.8" fill="white"/>
      <circle cx="92" cy="51" r="0.8" fill="white"/>
      {/* Smile */}
      <path d="M72 64 Q80 70 88 64" stroke="#0D0D0D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Neck */}
      <rect x="74" y="84" width="12" height="14" rx="4" fill="#D4956A" stroke="#0D0D0D" strokeWidth="1.5"/>
      {/* Body — military-inspired jacket */}
      <path d="M46 98 C46 98 58 92 80 92 C102 92 114 98 114 98 L118 162 L42 162 Z" fill="#53885E" stroke="#0D0D0D" strokeWidth="2" strokeLinejoin="round"/>
      {/* Jacket collar / lapels */}
      <path d="M72 92 L70 110 L80 104 L90 110 L88 92" fill="white" stroke="#0D0D0D" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Dollar sign badge on chest */}
      <circle cx="98" cy="112" r="10" fill="#53885E" stroke="#0D0D0D" strokeWidth="1.5"/>
      <circle cx="98" cy="112" r="8" fill="#FFFFFF" opacity="0.15"/>
      <text x="98" y="117" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" fontFamily="'Lucky Goldfish', sans-serif">$</text>
      {/* Jacket buttons */}
      <circle cx="80" cy="118" r="2" fill="#0D0D0D" opacity="0.3"/>
      <circle cx="80" cy="128" r="2" fill="#0D0D0D" opacity="0.3"/>
      <circle cx="80" cy="138" r="2" fill="#0D0D0D" opacity="0.3"/>
      {/* Arms */}
      <path d="M46 102 C36 110 30 124 32 140 L40 140 C40 128 44 116 52 110 Z" fill="#53885E" stroke="#0D0D0D" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M114 102 C124 110 130 124 128 140 L120 140 C120 128 116 116 108 110 Z" fill="#53885E" stroke="#0D0D0D" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Hands */}
      <ellipse cx="36" cy="142" rx="6" ry="5" fill="#D4956A" stroke="#0D0D0D" strokeWidth="1.5"/>
      <ellipse cx="124" cy="142" rx="6" ry="5" fill="#D4956A" stroke="#0D0D0D" strokeWidth="1.5"/>
      {/* Legs */}
      <rect x="58" y="160" width="18" height="42" rx="8" fill="#D4956A" stroke="#0D0D0D" strokeWidth="1.5"/>
      <rect x="84" y="160" width="18" height="42" rx="8" fill="#D4956A" stroke="#0D0D0D" strokeWidth="1.5"/>
      {/* Boots */}
      <path d="M55 196 L77 196 L80 204 L52 204 Z" fill="#3D2B1F" stroke="#0D0D0D" strokeWidth="1.2"/>
      <path d="M83 196 L105 196 L108 204 L80 204 Z" fill="#3D2B1F" stroke="#0D0D0D" strokeWidth="1.2"/>
      {/* Name tag */}
      <text x="80" y="218" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#53885E" fontFamily="'Lucky Goldfish', sans-serif">Rachel</text>
    </svg>
  );
}
