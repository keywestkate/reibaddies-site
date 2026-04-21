import StarAccent from "@/components/StarAccent";
import Image from "next/image";

const links = [
  { label: "🎙 Listen to REI Baddies Talk Show", href: "#", color: "#E8176A", textColor: "#FFFFFF" },
  { label: "🟢 Watch on YouTube", href: "#", color: "#B5D334", textColor: "#0D0D0D" },
  { label: "🎧 Apple Podcasts", href: "#", color: "#0D0D0D", textColor: "#FFFFFF" },
  { label: "🎵 Spotify", href: "#", color: "#2A5C2E", textColor: "#FFFFFF" },
  { label: "🔥 Deal Sauce Episodes", href: "/show#deal-sauce", color: "#E8176A", textColor: "#FFFFFF" },
  { label: "🌙 After Dark Pitch Room", href: "/show#after-dark", color: "#0D0D0D", textColor: "#FFFFFF" },
  { label: "📩 Join the Newsletter", href: "#", color: "#B5D334", textColor: "#0D0D0D" },
  { label: "🎤 Be a Guest on the Show", href: "/be-our-guest", color: "#2A5C2E", textColor: "#FFFFFF" },
  { label: "🤝 Work With Us", href: "/work-with-us", color: "#E8176A", textColor: "#FFFFFF" },
  { label: "📸 Instagram @reibaddiesshow", href: "https://instagram.com/reibaddiesshow", color: "#0D0D0D", textColor: "#FFFFFF" },
  { label: "🎵 TikTok @reibaddies", href: "https://tiktok.com/@reibaddies", color: "#B5D334", textColor: "#0D0D0D" },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#F2EDE0] flex flex-col items-center py-16 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full border-4 border-[#0D0D0D] mx-auto mb-5 overflow-hidden">
          <Image src="/images/logo.png" alt="REI Baddies Talk Show" fill className="object-cover" />
        </div>
        <h1
          className="font-display font-black text-[#0D0D0D] text-3xl mb-1"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          REI <em className="text-[#E8176A]">Baddies</em>
        </h1>
        <p
          className="text-sm text-[#0D0D0D]/60 mb-3"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          @reibaddiesshow
        </p>
        <p
          className="text-base text-[#0D0D0D]/70 max-w-xs mx-auto leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Real stories. Real deals. Real community. 🏠✨
        </p>

        {/* Stars decoration */}
        <div className="flex justify-center gap-3 mt-4">
          <StarAccent color="#E8176A" size={16} />
          <StarAccent color="#B5D334" size={20} />
          <StarAccent color="#E8176A" size={16} />
        </div>
      </div>

      {/* Links */}
      <div className="w-full max-w-md flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center text-center font-semibold text-sm py-4 px-6 rounded-2xl border-2 border-[#0D0D0D] hover-lift transition-all"
            style={{
              backgroundColor: link.color,
              color: link.textColor,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p
          className="text-xs text-[#0D0D0D]/40"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          © {new Date().getFullYear()} REI Baddies Talk Show · reibaddiesshow.com
        </p>
      </div>
    </div>
  );
}
