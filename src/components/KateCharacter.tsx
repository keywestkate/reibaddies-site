interface KateCharacterProps {
  size?: number;
  className?: string;
}

export default function KateCharacter({ size = 160, className = "" }: KateCharacterProps) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 160 224" fill="none" className={className}>
      {/* Hair */}
      <path d="M52 52 C48 30 54 14 80 12 C106 14 112 30 108 52 C110 40 106 28 80 26 C54 28 50 40 52 52 Z" fill="#8B5E3C" stroke="#0D0D0D" strokeWidth="1.5"/>
      <path d="M50 54 C46 70 48 82 50 90 C44 80 40 64 44 50 Z" fill="#8B5E3C" stroke="#0D0D0D" strokeWidth="1"/>
      <path d="M110 54 C114 70 112 82 110 90 C116 80 120 64 116 50 Z" fill="#8B5E3C" stroke="#0D0D0D" strokeWidth="1"/>
      {/* Head */}
      <ellipse cx="80" cy="52" rx="28" ry="32" fill="#F5C5A0" stroke="#0D0D0D" strokeWidth="2"/>
      {/* Glasses (Kate's signature) */}
      <rect x="60" y="46" width="16" height="10" rx="4" fill="none" stroke="#0D0D0D" strokeWidth="2"/>
      <rect x="84" y="46" width="16" height="10" rx="4" fill="none" stroke="#0D0D0D" strokeWidth="2"/>
      <line x1="76" y1="51" x2="84" y2="51" stroke="#0D0D0D" strokeWidth="1.5"/>
      <line x1="56" y1="50" x2="52" y2="48" stroke="#0D0D0D" strokeWidth="1.5"/>
      <line x1="100" y1="50" x2="104" y2="48" stroke="#0D0D0D" strokeWidth="1.5"/>
      {/* Eyes */}
      <circle cx="68" cy="51" r="2" fill="#0D0D0D"/>
      <circle cx="92" cy="51" r="2" fill="#0D0D0D"/>
      {/* Smile */}
      <path d="M72 62 Q80 68 88 62" stroke="#0D0D0D" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Neck */}
      <rect x="74" y="82" width="12" height="14" rx="4" fill="#F5C5A0" stroke="#0D0D0D" strokeWidth="1.5"/>
      {/* Body — preppy polo dress */}
      <path d="M50 96 C50 96 60 90 80 90 C100 90 110 96 110 96 L116 160 L44 160 Z" fill="#EC99AF" stroke="#0D0D0D" strokeWidth="2" strokeLinejoin="round"/>
      {/* Collar */}
      <path d="M72 90 L80 100 L88 90" fill="white" stroke="#0D0D0D" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Polo button stripe */}
      <line x1="80" y1="100" x2="80" y2="130" stroke="#0D0D0D" strokeWidth="1" opacity="0.4"/>
      {/* Alligator on chest */}
      <g transform="translate(55, 108) scale(0.4)">
        <path d="M4 22 C4 14 10 10 20 10 L48 12 C56 12 62 16 62 22 C62 28 56 32 48 32 L12 34 C8 34 4 30 4 26 Z" fill="#53885E" stroke="#0D0D0D" strokeWidth="2"/>
        <path d="M48 12 L62 18 L62 22 C62 22 56 20 48 20 Z" fill="#53885E" stroke="#0D0D0D" strokeWidth="2"/>
        <circle cx="44" cy="11" r="3" fill="white" stroke="#0D0D0D" strokeWidth="1.2"/>
        <circle cx="44.8" cy="11" r="1.2" fill="#0D0D0D"/>
        <path d="M12 34 C8 36 2 36 1 32 C0 28 6 26 12 28" fill="#53885E" stroke="#0D0D0D" strokeWidth="1.5"/>
      </g>
      {/* Arms */}
      <path d="M50 100 C40 108 34 120 36 136 L44 136 C44 124 48 114 56 108 Z" fill="#EC99AF" stroke="#0D0D0D" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M110 100 C120 108 126 120 124 136 L116 136 C116 124 112 114 104 108 Z" fill="#EC99AF" stroke="#0D0D0D" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Hands */}
      <ellipse cx="40" cy="138" rx="6" ry="5" fill="#F5C5A0" stroke="#0D0D0D" strokeWidth="1.5"/>
      <ellipse cx="120" cy="138" rx="6" ry="5" fill="#F5C5A0" stroke="#0D0D0D" strokeWidth="1.5"/>
      {/* Legs */}
      <rect x="58" y="158" width="18" height="40" rx="8" fill="#F5C5A0" stroke="#0D0D0D" strokeWidth="1.5"/>
      <rect x="84" y="158" width="18" height="40" rx="8" fill="#F5C5A0" stroke="#0D0D0D" strokeWidth="1.5"/>
      {/* Shoes */}
      <ellipse cx="67" cy="200" rx="12" ry="6" fill="#0D0D0D" stroke="#0D0D0D" strokeWidth="1"/>
      <ellipse cx="93" cy="200" rx="12" ry="6" fill="#0D0D0D" stroke="#0D0D0D" strokeWidth="1"/>
      {/* Name tag */}
      <text x="80" y="218" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EC99AF" fontFamily="'Lucky Goldfish', sans-serif">Kate</text>
    </svg>
  );
}
