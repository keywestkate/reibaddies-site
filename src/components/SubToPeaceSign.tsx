interface SubToPeaceSignProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function SubToPeaceSign({ size = 80, color = "#EC99AF", className = "" }: SubToPeaceSignProps) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 80 96" fill="none" className={className}>
      {/* Palm */}
      <path
        d="M18 60 C16 48 14 36 16 26 C17 20 22 17 27 19 C28 14 33 12 37 15 C39 10 44 9 47 13 C50 9 55 11 56 17 C58 24 58 34 56 48 L54 64 C52 72 46 76 40 76 C34 76 28 72 26 64 Z"
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Index finger */}
      <path
        d="M27 19 C26 10 26 4 29 2 C32 0 35 2 35 8 L35 30"
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Middle finger */}
      <path
        d="M37 15 C36 6 37 0 40 0 C43 0 44 6 43 15 L43 30"
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Ring finger tucked */}
      <path
        d="M47 13 C47 18 48 24 48 30"
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Pinky tucked */}
      <path
        d="M56 17 C56 22 57 28 56 34"
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Thumb */}
      <path
        d="M18 40 C12 38 8 36 8 32 C8 28 12 27 16 30"
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Knuckle lines */}
      <path d="M28 42 Q32 40 36 42" stroke="#0D0D0D" strokeWidth="1" opacity="0.3" fill="none"/>
      <path d="M37 40 Q40 38 43 40" stroke="#0D0D0D" strokeWidth="1" opacity="0.3" fill="none"/>
      {/* Nail polish on index */}
      <ellipse cx="31" cy="5" rx="3" ry="2" fill="#EC99AF" stroke="#0D0D0D" strokeWidth="0.8" opacity="0.6"/>
      {/* Nail polish on middle */}
      <ellipse cx="40" cy="3" rx="3" ry="2" fill="#EC99AF" stroke="#0D0D0D" strokeWidth="0.8" opacity="0.6"/>
      {/* "SubTo" text below */}
      <text x="40" y="90" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0D0D0D" fontFamily="'Lucky Goldfish', sans-serif" letterSpacing="1">
        SubTo
      </text>
    </svg>
  );
}
