import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";

const episodes = [
  { number: "EP 112", title: "How She Did a SubTo Deal With Zero Dollars Down", guest: "Sarah M.", duration: "48 min", show: "main" },
  { number: "EP 111", title: "Seller Finance 101: Getting Your First Deal Done", guest: "Marcus T.", duration: "55 min", show: "main" },
  { number: "EP 110", title: "Co-Living: $8K/Month on a Single Family Home", guest: "Priya K.", duration: "41 min", show: "main" },
  { number: "EP 109", title: "Novation Nation: When to Use It and When Not To", guest: "Derek W.", duration: "52 min", show: "main" },
  { number: "DS 22", title: "Deal Breakdown: $0 Down SubTo, $1,200/mo CF", guest: "Rachel & Kate", duration: "18 min", show: "deal-sauce" },
  { number: "DS 21", title: "Seller Finance Structure That Got Us to the Table", guest: "Rachel & Kate", duration: "14 min", show: "deal-sauce" },
  { number: "DS 20", title: "Co-Living Math: 3BR House → 6 Rooms → $5,400/mo", guest: "Rachel & Kate", duration: "22 min", show: "deal-sauce" },
  { number: "AD 08", title: "After Dark: Live Pitch — Short-Term Rental SubTo", guest: "Community Pitch", duration: "61 min", show: "after-dark" },
  { number: "AD 07", title: "After Dark: Pitch Your Novation Deal", guest: "Community Pitch", duration: "58 min", show: "after-dark" },
];

const showMeta = {
  main: { label: "Main Show", color: "#E8176A", textColor: "#FFFFFF", desc: "Deep dives with real investors doing creative finance deals." },
  "deal-sauce": { label: "Deal Sauce", color: "#B5D334", textColor: "#0D0D0D", desc: "Quick-hit deal breakdowns — structure, numbers, and lessons." },
  "after-dark": { label: "After Dark", color: "#2A5C2E", textColor: "#FFFFFF", desc: "Live pitch room — bring your deal and get real feedback." },
};

export default function ShowPage() {
  const mainEps = episodes.filter((e) => e.show === "main");
  const sauceEps = episodes.filter((e) => e.show === "deal-sauce");
  const darkEps = episodes.filter((e) => e.show === "after-dark");

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-16 bg-[#0D0D0D] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="inline-flex items-center gap-2 bg-[#B5D334] text-[#0D0D0D] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border-2 border-[#B5D334] mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <StarAccent size={12} color="#0D0D0D" />
            Three Formats. One Mission.
          </div>
          <h1
            className="font-display font-black text-white leading-[0.92] mb-6"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 900,
            }}
          >
            <span className="block">Listen to</span>
            <span className="block text-[#E8176A] italic">All Episodes</span>
            <span className="block">in One Place</span>
          </h1>
          <p
            className="text-[#F2EDE0]/70 text-xl max-w-2xl leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Using TikTok to Market Your Deals. How to Build an Irresistible Offer. Should You Hire a Mentor? It&apos;s all here — raw, real, and with receipts.
          </p>

          {/* Platform links */}
          <div className="flex flex-wrap gap-3 mt-10">
            {["YouTube", "Apple Podcasts", "Spotify", "Amazon Music"].map((p) => (
              <a
                key={p}
                href="#"
                className="text-sm font-semibold px-5 py-2.5 rounded-full border-2 border-[#F2EDE0]/30 text-[#F2EDE0] hover:bg-[#E8176A] hover:border-[#E8176A] transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {p} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* Main Show */}
      <section id="main" className="py-20 px-6 bg-[#F2EDE0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-4 h-4 rounded-full bg-[#E8176A] border-2 border-[#0D0D0D]" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-[#E8176A]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Main Show
            </span>
          </div>
          <h2
            className="font-display font-black mb-2 leading-tight"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
          >
            REI Baddies
          </h2>
          <p
            className="text-[#0D0D0D]/60 mb-10 text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {showMeta.main.desc}
          </p>
          <EpisodeList episodes={mainEps} accentColor="#E8176A" />
        </div>
      </section>

      {/* Deal Sauce */}
      <section id="deal-sauce" className="py-20 px-6 bg-[#B5D334]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-4 h-4 rounded-full bg-[#0D0D0D] border-2 border-[#0D0D0D]" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-[#0D0D0D]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Deal Sauce
            </span>
          </div>
          <h2
            className="font-display font-black mb-2 leading-tight text-[#0D0D0D]"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
          >
            Deal Sauce
          </h2>
          <p
            className="text-[#0D0D0D]/60 mb-10 text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {showMeta["deal-sauce"].desc}
          </p>
          <EpisodeList episodes={sauceEps} accentColor="#0D0D0D" />
        </div>
      </section>

      {/* After Dark */}
      <section id="after-dark" className="py-20 px-6 bg-[#2A5C2E]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-4 h-4 rounded-full bg-[#B5D334] border-2 border-[#B5D334]" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-[#B5D334]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              After Dark
            </span>
          </div>
          <h2
            className="font-display font-black mb-2 leading-tight text-white"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
          >
            After Dark
          </h2>
          <p
            className="text-[#F2EDE0]/60 mb-10 text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {showMeta["after-dark"].desc}
          </p>
          <EpisodeList episodes={darkEps} accentColor="#B5D334" dark />
        </div>
      </section>

      <Marquee bgColor="#E8176A" textColor="#FFFFFF" />
      <Footer />
    </>
  );
}

type Episode = { number: string; title: string; guest: string; duration: string; show: string };

function EpisodeList({
  episodes,
  accentColor,
  dark = false,
}: {
  episodes: Episode[];
  accentColor: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      {episodes.map((ep, i) => (
        <div
          key={i}
          className="flex items-center gap-6 bg-white rounded-2xl border-2 border-[#0D0D0D] p-6 hover-lift cursor-pointer group"
        >
          <div
            className="w-12 h-12 rounded-full border-2 border-[#0D0D0D] flex items-center justify-center shrink-0 transition-colors"
            style={{ backgroundColor: accentColor }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill={dark ? "#0D0D0D" : "white"}>
              <polygon points="3,1 13,8 3,15" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: accentColor, fontFamily: "'DM Sans', sans-serif" }}
            >
              {ep.number}
            </p>
            <p
              className="font-display font-bold text-lg text-[#0D0D0D] truncate"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {ep.title}
            </p>
            <p
              className="text-sm text-[#0D0D0D]/60 mt-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {ep.guest}
            </p>
          </div>
          <p
            className="shrink-0 text-sm font-medium text-[#0D0D0D]/60"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {ep.duration}
          </p>
        </div>
      ))}
    </div>
  );
}
