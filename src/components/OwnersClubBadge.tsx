interface OwnersClubBadgeProps {
  size?: number;
  className?: string;
}

export default function OwnersClubBadge({ size = 120, className = "" }: OwnersClubBadgeProps) {
  const s = size / 120;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      {/* Outer shield */}
      <path
        d="M60 8 L100 20 L100 70 C100 90 82 106 60 114 C38 106 20 90 20 70 L20 20 Z"
        fill="#53885E"
        stroke="#0D0D0D"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Inner shield inset */}
      <path
        d="M60 16 L94 26 L94 68 C94 86 78 100 60 108 C42 100 26 86 26 68 L26 26 Z"
        fill="none"
        stroke="#EC99AF"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.6"
      />
      {/* Top banner */}
      <path d="M30 36 L90 36 L90 48 L60 44 L30 48 Z" fill="#EC99AF" stroke="#0D0D0D" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* "OWNERS" text on banner */}
      <text x="60" y="46" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="'Lucky Goldfish', sans-serif" letterSpacing="1.5">OWNERS</text>
      {/* Alligator silhouette center */}
      <path
        d="M32 72 C32 64 38 60 46 60 L74 61 C80 61 84 65 84 70 C84 75 80 78 74 78 L40 80 C36 80 32 77 32 73 Z"
        fill="#FFFFFF"
        opacity="0.15"
        stroke="#FFFFFF"
        strokeWidth="1"
      />
      {/* Mini alligator body */}
      <path d="M36 69 C36 65 40 63 46 63 L72 64 C78 64 82 67 82 70 C82 73 78 75 72 75 L42 77 C38 77 36 74 36 71 Z" fill="#FFFFFF" opacity="0.9" stroke="#0D0D0D" strokeWidth="1"/>
      <circle cx="70" cy="63" r="2" fill="white" stroke="#0D0D0D" strokeWidth="0.8"/>
      <circle cx="70.8" cy="63" r="0.8" fill="#0D0D0D"/>
      <path d="M72 64 L82 68 L82 70 C82 70 78 68 72 68 Z" fill="white" stroke="#0D0D0D" strokeWidth="1"/>
      {/* "CLUB" bottom */}
      <text x="60" y="94" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" fontFamily="'Lucky Goldfish', sans-serif" letterSpacing="2">CLUB</text>
      {/* Star accents */}
      <text x="38" y="96" fontSize="8" fill="#EC99AF" opacity="0.8">✦</text>
      <text x="76" y="96" fontSize="8" fill="#EC99AF" opacity="0.8">✦</text>
      {/* Corner laurels */}
      <path d="M28 60 C24 56 22 52 24 48" stroke="#EC99AF" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round"/>
      <path d="M92 60 C96 56 98 52 96 48" stroke="#EC99AF" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round"/>
    </svg>
  );
}
