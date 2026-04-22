interface PennantProps {
  text: string;
  color?: string;
  textColor?: string;
  rotate?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Pennant({
  text,
  color = "#EC99AF",
  textColor = "#FFFFFF",
  rotate = 0,
  className = "",
  size = "md",
}: PennantProps) {
  const dims = { sm: { w: 120, h: 60, fs: 9 }, md: { w: 180, h: 88, fs: 11 }, lg: { w: 260, h: 128, fs: 14 } }[size];

  return (
    <svg
      width={dims.w}
      height={dims.h + 20}
      viewBox={`0 0 ${dims.w} ${dims.h + 20}`}
      style={{ transform: `rotate(${rotate}deg)`, display: "inline-block" }}
      className={className}
    >
      {/* Pole */}
      <rect x="4" y="0" width="3" height={dims.h + 18} rx="1.5" fill="#8B6914" />
      {/* Pennant body */}
      <polygon
        points={`7,8 ${dims.w},${dims.h / 2} 7,${dims.h}`}
        fill={color}
        stroke="#0D0D0D"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Fringe dots */}
      {[0.2, 0.35, 0.5, 0.65, 0.8].map((t) => {
        const y = 8 + t * (dims.h - 8);
        const x = 7 + t * (dims.w - 7) * 0.08;
        return <circle key={t} cx={x} cy={y + dims.h * 0.02} r="2" fill="#0D0D0D" opacity="0.3" />;
      })}
      {/* Text */}
      <text
        x={dims.w * 0.38}
        y={dims.h / 2 + dims.fs * 0.38}
        textAnchor="middle"
        fontSize={dims.fs}
        fontWeight="bold"
        fill={textColor}
        fontFamily="'Lucky Goldfish', sans-serif"
        letterSpacing="0.5"
      >
        {text}
      </text>
    </svg>
  );
}
