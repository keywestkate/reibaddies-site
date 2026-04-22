interface AlligatorIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function AlligatorIcon({ size = 32, color = "#53885E", className = "" }: AlligatorIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 40"
      fill="none"
      className={className}
    >
      {/* Body */}
      <path
        d="M4 22 C4 14 10 10 20 10 L48 12 C56 12 62 16 62 22 C62 28 56 32 48 32 L12 34 C8 34 4 30 4 26 Z"
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Snout */}
      <path
        d="M48 12 L62 18 L62 22 C62 22 56 20 48 20 Z"
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Upper jaw ridge */}
      <path d="M48 12 L62 16" stroke="#0D0D0D" strokeWidth="1" opacity="0.4" />
      {/* Eye */}
      <circle cx="44" cy="11" r="3" fill="white" stroke="#0D0D0D" strokeWidth="1.2" />
      <circle cx="44.8" cy="11" r="1.2" fill="#0D0D0D" />
      {/* Tail */}
      <path
        d="M12 34 C8 36 2 36 1 32 C0 28 6 26 12 28"
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Legs */}
      <line x1="20" y1="32" x2="18" y2="40" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="33" x2="28" y2="40" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="32" x2="36" y2="39" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
      {/* Scale texture lines */}
      <path d="M20 16 Q24 14 28 16" stroke="#0D0D0D" strokeWidth="0.8" opacity="0.3" fill="none"/>
      <path d="M28 15 Q32 13 36 15" stroke="#0D0D0D" strokeWidth="0.8" opacity="0.3" fill="none"/>
    </svg>
  );
}
