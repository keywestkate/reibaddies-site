interface MarqueeProps {
  text?: string[];
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

const defaultItems = [
  "Real Stories",
  "★",
  "Real Deals",
  "★",
  "Real Community",
  "★",
  "SubTo",
  "★",
  "Seller Finance",
  "★",
  "Deal Sauce",
  "★",
  "After Dark",
  "★",
  "Creative Finance",
  "★",
];

export default function Marquee({
  text = defaultItems,
  bgColor = "#E8176A",
  textColor = "#FFFFFF",
  borderColor = "#0D0D0D",
}: MarqueeProps) {
  const repeated = [...text, ...text];

  return (
    <div
      className="overflow-hidden border-y-2 py-3"
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <div className="animate-marquee flex">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-sm font-semibold uppercase tracking-widest px-4 shrink-0"
            style={{ color: textColor, fontFamily: "'DM Sans', sans-serif" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
