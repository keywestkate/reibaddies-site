import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";
import { getLatestInterviews } from "@/lib/youtube";

const platforms = [
  { label: "Apple Podcasts", bg: "#E8176A", text: "#FFFFFF", href: "https://podcasts.apple.com" },
  { label: "Spotify", bg: "#B5D334", text: "#0D0D0D", href: "https://spotify.com" },
  { label: "YouTube", bg: "#0D0D0D", text: "#FFFFFF", href: "https://youtube.com/@reibaddiesshow" },
  { label: "Amazon Music", bg: "#2A5C2E", text: "#FFFFFF", href: "https://music.amazon.com" },
];

const dealSauce = [
  { number: "DS 22", title: "Deal Breakdown: $0 Down SubTo, $1,200/mo Cash Flow", duration: "18 min" },
  { number: "DS 21", title: "Seller Finance Structure That Got Us to the Table", duration: "14 min" },
  { number: "DS 20", title: "Co-Living Math: 3BR House → 6 Rooms → $5,400/mo", duration: "22 min" },
];

const afterDark = [
  { number: "AD 08", title: "After Dark: Live Pitch — Short-Term Rental SubTo", duration: "61 min" },
  { number: "AD 07", title: "After Dark: Pitch Your Novation Deal", duration: "58 min" },
];

export default async function ShowPage() {
  const interviews = await getLatestInterviews(3);
  const featured = interviews[0];

  return (
    <>
      <Nav />

      {/* ── HERO — phone mockup left / episode list right ── */}
      <section className="pt-16 bg-[#F2EDE0] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone shell */}
              <div className="w-64 bg-[#0D0D0D] rounded-[3rem] p-3 shadow-2xl border-4 border-[#0D0D0D]">
                <div className="bg-[#0D0D0D] rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="flex justify-center pt-3 pb-1">
                    <div className="w-16 h-1.5 bg-[#1a1a1a] rounded-full" />
                  </div>

                  {/* Episode art */}
                  <div className="mx-4 mt-2 rounded-2xl overflow-hidden aspect-square bg-[#E8176A] flex items-center justify-center relative border-2 border-[#F2EDE0]/10">
                    {featured?.thumbnail ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={featured.thumbnail} alt={featured.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center p-4">
                        <div className="w-16 h-16 rounded-full bg-white/20 mx-auto mb-2 flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 3a9 9 0 100 18A9 9 0 0012 3zm-1 13V8l6 4-6 4z"/></svg>
                        </div>
                      </div>
                    )}
                    {/* REI Baddies overlay badge */}
                    <div className="absolute bottom-2 left-2 right-2 bg-[#0D0D0D]/80 rounded-xl px-3 py-1.5">
                      <p className="text-[#B5D334] text-[9px] font-semibold uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>REI Baddies Talk Show</p>
                    </div>
                  </div>

                  {/* Track info */}
                  <div className="px-4 pt-4 pb-2 text-center">
                    <p className="font-display font-black text-white text-sm leading-tight line-clamp-2 mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                      {featured?.title ?? "Latest Interview"}
                    </p>
                    <p className="text-[#F2EDE0]/40 text-[10px] uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      REI Baddies Talk Show
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="px-4 pb-2">
                    <div className="h-1 bg-[#F2EDE0]/10 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-[#E8176A] rounded-full" />
                    </div>
                    <div className="flex justify-between text-[9px] text-[#F2EDE0]/30 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <span>17:22</span>
                      <span>57:40</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-5 px-4 pb-5">
                    <button className="text-[#F2EDE0]/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/></svg>
                    </button>
                    <button className="w-12 h-12 rounded-full bg-[#E8176A] flex items-center justify-center border-2 border-[#F2EDE0]/20">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    </button>
                    <button className="text-[#F2EDE0]/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 6h-2v12h2V6zM14.5 12L6 6v12l8.5-6z"/></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements around phone */}
              <div className="absolute -top-6 -right-6 w-14 h-14 rounded-full bg-[#E8176A] border-2 border-[#0D0D0D] flex items-center justify-center">
                <StarAccent color="#FFFFFF" size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-[#B5D334] border-2 border-[#0D0D0D]" />

              {/* "listen now" script text */}
              <p
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[#E8176A] whitespace-nowrap"
                style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 900, fontStyle: "italic" }}
              >
                listen now
              </p>
            </div>
          </div>

          {/* RIGHT — Episode list */}
          <div>
            <p
              className="text-xs uppercase tracking-widest font-semibold text-[#E8176A] mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ✦ Tune in to REI Baddies Talk Show
            </p>
            <h1
              className="font-display font-black leading-[0.9] mb-5"
              style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 900 }}
            >
              <span className="block text-[#0D0D0D]">The Latest</span>
              <span className="block text-[#E8176A] italic">on the Show</span>
            </h1>
            <p
              className="text-base text-[#0D0D0D]/60 mb-8 max-w-md leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Real investors. Real deals. Real numbers. New episodes every week — interviews, deal breakdowns, and live pitch sessions. No fluff, just sauce.
            </p>

            {/* Episode cards */}
            <div className="flex flex-col gap-4 mb-8">
              {interviews.map((ep, i) => (
                <a
                  key={ep.id}
                  href={ep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border-2 border-[#0D0D0D] bg-white hover-lift group"
                >
                  {/* Thumbnail */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border-2 border-[#0D0D0D] bg-[#E8176A]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[10px] font-semibold uppercase tracking-widest text-[#E8176A] mb-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Episode {String(i + 1).padStart(2, "0")}
                    </p>
                    <p
                      className="font-display font-bold text-[#0D0D0D] text-sm leading-tight line-clamp-2 group-hover:text-[#E8176A] transition-colors"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {ep.title}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#B5D334] border-2 border-[#0D0D0D] flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="#0D0D0D">
                      <polygon points="3,1 13,8 3,15" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Platform buttons */}
            <div className="flex flex-wrap gap-3">
              {platforms.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border-2 border-[#0D0D0D] hover-lift transition-all"
                  style={{ backgroundColor: p.bg, color: p.text, fontFamily: "'DM Sans', sans-serif" }}
                >
                  {p.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <Marquee />

      {/* ── Deal Sauce ── */}
      <section id="deal-sauce" className="py-20 px-6 bg-[#B5D334]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border-2 border-[#0D0D0D] bg-[#0D0D0D] text-[#B5D334] mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Deal Sauce
            </span>
            <h2
              className="font-display font-black text-[#0D0D0D] leading-tight mb-4"
              style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}
            >
              Quick Hits.<br />
              <em className="text-[#E8176A]">Real Numbers.</em>
            </h2>
            <p
              className="text-[#0D0D0D]/70 text-base leading-relaxed mb-6 max-w-md"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Under 20 minutes. One deal. Full breakdown — structure, numbers, what went wrong, and what you can steal.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {dealSauce.map((ep) => (
              <div key={ep.number} className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-[#0D0D0D] hover-lift cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-[#B5D334] border-2 border-[#0D0D0D] flex items-center justify-center shrink-0 group-hover:bg-[#E8176A] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="#0D0D0D"><polygon points="3,1 13,8 3,15" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E8176A] mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ep.number}</p>
                  <p className="font-display font-bold text-[#0D0D0D] text-base truncate" style={{ fontFamily: "'Fraunces', serif" }}>{ep.title}</p>
                </div>
                <p className="text-xs text-[#0D0D0D]/50 shrink-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ep.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── After Dark ── */}
      <section id="after-dark" className="py-20 px-6 bg-[#2A5C2E]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border-2 border-[#B5D334] bg-[#B5D334] text-[#0D0D0D] mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              After Dark
            </span>
            <h2
              className="font-display font-black text-white leading-tight mb-4"
              style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}
            >
              Bring Your Deal.<br />
              <em className="text-[#B5D334]">Get Real Feedback.</em>
            </h2>
            <p
              className="text-[#F2EDE0]/70 text-base leading-relaxed mb-6 max-w-md"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              A live pitch room where investors present their real deals and Rachel & Kate give it to them straight. Raw, unfiltered, invaluable.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {afterDark.map((ep) => (
              <div key={ep.number} className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-[#0D0D0D] hover-lift cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-[#2A5C2E] border-2 border-[#0D0D0D] flex items-center justify-center shrink-0 group-hover:bg-[#B5D334] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="white"><polygon points="3,1 13,8 3,15" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#B5D334] mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ep.number}</p>
                  <p className="font-display font-bold text-[#0D0D0D] text-base truncate" style={{ fontFamily: "'Fraunces', serif" }}>{ep.title}</p>
                </div>
                <p className="text-xs text-[#0D0D0D]/50 shrink-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>{ep.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee bgColor="#E8176A" textColor="#FFFFFF" />
      <Footer />
    </>
  );
}
