interface HotelKeyCharmProps {
  text?: string;
  subtext?: string;
  color?: string;
  size?: number;
  className?: string;
}

export default function HotelKeyCharm({
  text = "REI",
  subtext = "BADDIES",
  color = "#EC99AF",
  size = 100,
  className = "",
}: HotelKeyCharmProps) {
  const s = size / 100;
  return (
    <svg width={size * 0.8} height={size * 1.5} viewBox="0 0 80 150" fill="none" className={className}>
      {/* Key ring */}
      <circle cx="40" cy="12" r="10" fill="none" stroke="#C5A028" strokeWidth="3"/>
      <circle cx="40" cy="12" r="6" fill="none" stroke="#C5A028" strokeWidth="2" opacity="0.5"/>
      {/* Chain link */}
      <line x1="40" y1="22" x2="40" y2="32" stroke="#C5A028" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Tag body — hotel diamond shape */}
      <path
        d="M40 34 L74 60 L74 110 C74 118 58 126 40 126 C22 126 6 118 6 110 L6 60 Z"
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Inner inset */}
      <path
        d="M40 40 L68 63 L68 108 C68 114 55 120 40 120 C25 120 12 114 12 108 L12 63 Z"
        fill="none"
        stroke="white"
        strokeWidth="1"
        opacity="0.3"
      />
      {/* Horizontal rule */}
      <line x1="16" y1="82" x2="64" y2="82" stroke="white" strokeWidth="1" opacity="0.4"/>
      {/* Top text */}
      <text x="40" y="68" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white" fontFamily="'Lucky Goldfish', sans-serif" letterSpacing="1">
        {text}
      </text>
      {/* Sub text */}
      <text x="40" y="96" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="'Lucky Goldfish', sans-serif" letterSpacing="2" opacity="0.9">
        {subtext}
      </text>
      {/* Star accent */}
      <text x="40" y="112" textAnchor="middle" fontSize="8" fill="white" opacity="0.6">✦</text>
      {/* Key shaft */}
      <rect x="37" y="126" width="6" height="20" rx="2" fill="#C5A028" stroke="#0D0D0D" strokeWidth="1.2"/>
      {/* Key teeth */}
      <rect x="43" y="132" width="5" height="3" rx="1" fill="#C5A028" stroke="#0D0D0D" strokeWidth="1"/>
      <rect x="43" y="139" width="4" height="3" rx="1" fill="#C5A028" stroke="#0D0D0D" strokeWidth="1"/>
    </svg>
  );
}
