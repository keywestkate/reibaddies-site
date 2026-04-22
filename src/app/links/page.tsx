import StarAccent from "@/components/StarAccent";
import Image from "next/image";

const links = [
  { label: "🎙 Listen to REI Baddies Talk Show", href: "https://open.spotify.com/show/3t2X6HbjA2c3NokCAnLLhE", color: "#EC99AF", textColor: "#FFFFFF" },
  { label: "📺 Watch on YouTube", href: "https://www.youtube.com/@REIBaddies", color: "#53885E", textColor: "#FFFFFF" },
  { label: "🎵 Spotify", href: "https://open.spotify.com/show/3t2X6HbjA2c3NokCAnLLhE", color: "#0D0D0D", textColor: "#FFFFFF" },
  { label: "🔥 Deal Sauce Episodes", href: "/show#deal-sauce", color: "#EC99AF", textColor: "#FFFFFF" },
  { label: "📅 Book a Film Day", href: "https://api.leadconnectorhq.com/widget/bookings/rei-baddies-booked-your-film-day", color: "#53885E", textColor: "#FFFFFF" },
  { label: "📩 Join the Newsletter", href: "https://reibaddiesshow.com/", color: "#53885E", textColor: "#FFFFFF" },
  { label: "🎤 Be a Guest on the Show", href: "/be-our-guest", color: "#0D0D0D", textColor: "#FFFFFF" },
  { label: "🤝 Work With Us", href: "/work-with-us", color: "#EC99AF", textColor: "#FFFFFF" },
  { label: "📸 Instagram @reibaddies", href: "https://www.instagram.com/reibaddies", color: "#0D0D0D", textColor: "#FFFFFF" },
  { label: "🎵 TikTok @reibaddies", href: "https://www.tiktok.com/@reibaddies", color: "#53885E", textColor: "#FFFFFF" },
  { label: "👥 Facebook", href: "https://www.facebook.com/reibaddies", color: "#EC99AF", textColor: "#FFFFFF" },
  { label: "💼 LinkedIn Community", href: "https://www.linkedin.com/groups/14918025/", color: "#0D0D0D", textColor: "#FFFFFF" },
  { label: "🧪 Deal Sauce Free Trial", href: "https://secure.dealsauce.io/a/trial/4906", color: "#53885E", textColor: "#FFFFFF" },
  { label: "🏠 SubTo", href: "https://join.nre.ai/mzFcINp", color: "#EC99AF", textColor: "#FFFFFF" },
  { label: "🐊 Gator", href: "https://join.nre.ai/mQFzVYF", color: "#0D0D0D", textColor: "#FFFFFF" },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center py-16 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full border-4 border-[#0D0D0D] mx-auto mb-5 overflow-hidden">
          <Image src="/images/logo.png" alt="REI Baddies Talk Show" fill className="object-cover" />
        </div>
        <h1
          className="font-display font-black text-[#0D0D0D] text-3xl mb-1"
          style={{ fontFamily: "'Lucky Goldfish', sans-serif" }}
        >
          REI <em className="text-[#EC99AF]">Baddies</em>
        </h1>
        <p
          className="text-sm text-[#0D0D0D]/60 mb-3"
          style={{ fontFamily: "'Lemonilla', sans-serif" }}
        >
          @reibaddiesshow
        </p>
        <p
          className="text-base text-[#0D0D0D]/70 max-w-xs mx-auto leading-relaxed"
          style={{ fontFamily: "'Lemonilla', sans-serif" }}
        >
          Real stories. Real deals. Real community. 🏠✨
        </p>

        {/* Stars decoration */}
        <div className="flex justify-center gap-3 mt-4">
          <StarAccent color="#EC99AF" size={16} />
          <StarAccent color="#53885E" size={20} />
          <StarAccent color="#EC99AF" size={16} />
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
              fontFamily: "'Lemonilla', sans-serif",
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
          style={{ fontFamily: "'Lemonilla', sans-serif" }}
        >
          © {new Date().getFullYear()} REI Baddies Talk Show · reibaddiesshow.com
        </p>
      </div>
    </div>
  );
}
