import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";
import Link from "next/link";

const stats = [
  { value: "1M+", label: "Total Downloads" },
  { value: "2,500+", label: "5-Star Reviews" },
  { value: "100+", label: "Episodes" },
  { value: "3", label: "Show Formats" },
];

const shows = [
  {
    name: "REI Baddies",
    tag: "Main Show",
    tagBg: "#E8176A",
    tagText: "#FFFFFF",
    desc: "Deep dives into creative financing deals — SubTo, seller finance, novations, and beyond. Real operators sharing real numbers.",
    href: "/show",
  },
  {
    name: "Deal Sauce",
    tag: "Breakdowns",
    tagBg: "#B5D334",
    tagText: "#0D0D0D",
    desc: "Quick-hit deal breakdowns under 20 minutes. The exact structure, the numbers, the lessons learned. No fluff, just sauce.",
    href: "/show#deal-sauce",
  },
  {
    name: "After Dark",
    tag: "Live Pitch Room",
    tagBg: "#2A5C2E",
    tagText: "#FFFFFF",
    desc: "A live pitch room where investors bring their deals and get real feedback from Rachel & Kate. Raw, unfiltered, and invaluable.",
    href: "/show#after-dark",
  },
];

const latestEpisodes = [
  {
    number: "EP 112",
    title: "How She Did a SubTo Deal With Zero Dollars Down",
    guest: "Sarah M.",
    duration: "48 min",
  },
  {
    number: "EP 111",
    title: "Seller Finance 101: Getting Your First Deal Done",
    guest: "Marcus T.",
    duration: "55 min",
  },
  {
    number: "EP 110",
    title: "Co-Living: $8K/Month on a Single Family Home",
    guest: "Priya K.",
    duration: "41 min",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="pt-16 min-h-screen bg-[#F2EDE0] flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
          {/* Left — Text */}
          <div className="flex flex-col justify-center px-8 md:px-14 py-16 lg:py-24">
            <div
              className="inline-flex items-center gap-2 bg-[#B5D334] text-[#0D0D0D] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border-2 border-[#0D0D0D] w-fit mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <StarAccent size={12} color="#0D0D0D" />
              The #1 Show for Creative REI
            </div>

            <h1
              className="font-display leading-[0.92] mb-6"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 900,
              }}
            >
              <span className="block text-[#0D0D0D]">Real</span>
              <span className="block text-[#E8176A] italic">Stories.</span>
              <span className="block text-[#0D0D0D]">Real</span>
              <span className="block text-[#B5D334] italic">Deals.</span>
            </h1>

            <p
              className="text-lg text-[#0D0D0D]/70 mb-10 max-w-md leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Hosted by <strong>Rachel Davis & Kate Baldwin</strong> — two operators
              who&apos;ve done the deals, made the mistakes, and lived to tell you
              about it. With receipts, not fluff.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/show"
                className="bg-[#E8176A] text-white font-semibold px-8 py-4 rounded-full border-2 border-[#0D0D0D] hover:bg-[#0D0D0D] transition-all text-base hover-lift"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Listen Now →
              </Link>
              <Link
                href="/about"
                className="bg-transparent text-[#0D0D0D] font-semibold px-8 py-4 rounded-full border-2 border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-[#F2EDE0] transition-all text-base"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Meet the Hosts
              </Link>
            </div>
          </div>

          {/* Right — Hero image slot */}
          <div className="relative bg-[#E8176A] min-h-[500px] lg:min-h-0 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/30 p-8">
                <div className="w-32 h-32 rounded-full border-4 border-white/20 mx-auto mb-4 flex items-center justify-center text-5xl">
                  📸
                </div>
                <p className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Drop hero photo here
                  <br />
                  (public/images/hero.jpg)
                </p>
              </div>
            </div>
            {/* Oversized background text */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
              <p
                className="font-display font-black text-white/10 whitespace-nowrap"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(5rem, 14vw, 12rem)",
                  fontWeight: 900,
                }}
              >
                BADDIES
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee 1 ── */}
      <Marquee />

      {/* ── Stats ── */}
      <section className="bg-[#0D0D0D] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="font-display font-black text-5xl text-[#B5D334] mb-2"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {s.value}
              </p>
              <p
                className="text-sm uppercase tracking-widest text-[#F2EDE0]/60"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Shows ── */}
      <section className="py-20 px-6 bg-[#F2EDE0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <StarAccent color="#E8176A" size={24} />
            <p
              className="text-xs uppercase tracking-widest font-semibold text-[#E8176A]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Three Shows. One Community.
            </p>
          </div>
          <h2
            className="font-display font-black mb-14 leading-tight"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 900,
            }}
          >
            Pick Your Poison
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shows.map((show) => (
              <Link
                href={show.href}
                key={show.name}
                className="group rounded-2xl border-2 border-[#0D0D0D] overflow-hidden hover-lift"
              >
                <div className="h-3" style={{ backgroundColor: show.tagBg }} />
                <div className="p-8 bg-white">
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-[#0D0D0D] mb-4"
                    style={{
                      backgroundColor: show.tagBg,
                      color: show.tagText,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {show.tag}
                  </span>
                  <h3
                    className="font-display font-black text-2xl mb-3 group-hover:text-[#E8176A] transition-colors"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {show.name}
                  </h3>
                  <p
                    className="text-sm text-[#0D0D0D]/70 leading-relaxed mb-6"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {show.desc}
                  </p>
                  <span
                    className="text-sm font-semibold text-[#E8176A]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Watch Now →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee 2 — lime ── */}
      <Marquee
        bgColor="#B5D334"
        textColor="#0D0D0D"
        text={[
          "SubTo","✦","Seller Finance","✦","Novations","✦",
          "Co-Living","✦","Creative Finance","✦","No Fluff","✦","Real Deals","✦",
        ]}
      />

      {/* ── Latest Episodes ── */}
      <section className="py-20 px-6 bg-[#E8176A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p
                className="text-xs uppercase tracking-widest font-semibold text-white/70 mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Fresh Drops
              </p>
              <h2
                className="font-display font-black text-white leading-tight"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 900,
                }}
              >
                Latest Episodes
              </h2>
            </div>
            <Link
              href="/show"
              className="inline-flex items-center gap-2 bg-white text-[#0D0D0D] font-semibold px-6 py-3 rounded-full border-2 border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white transition-all w-fit"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              All Episodes →
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {latestEpisodes.map((ep, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-white rounded-2xl border-2 border-[#0D0D0D] p-6 hover-lift cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8176A] border-2 border-[#0D0D0D] flex items-center justify-center shrink-0 group-hover:bg-[#B5D334] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                    <polygon points="3,1 13,8 3,15" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest text-[#E8176A] mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
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
                    with {ep.guest}
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
        </div>
      </section>

      {/* ── Hosts Teaser ── */}
      <section className="py-20 px-6 bg-[#F2EDE0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo collage */}
          <div className="relative h-[480px]">
            <div className="absolute top-0 left-0 w-56 h-72 rounded-2xl bg-[#FADADD] border-2 border-[#0D0D0D] overflow-hidden flex items-center justify-center">
              <div className="text-center text-[#0D0D0D]/30 p-4">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Rachel photo
                  <br />
                  (public/images/hosts/rachel.jpg)
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-56 h-72 rounded-2xl bg-[#B5D334] border-2 border-[#0D0D0D] overflow-hidden flex items-center justify-center">
              <div className="text-center text-[#0D0D0D]/30 p-4">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Kate photo
                  <br />
                  (public/images/hosts/kate.jpg)
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8176A] text-white rounded-full border-2 border-[#0D0D0D] px-5 py-3 text-center z-10 rotate-6">
              <p className="font-display font-black text-sm" style={{ fontFamily: "'Fraunces', serif" }}>The</p>
              <p className="font-display font-black text-2xl italic" style={{ fontFamily: "'Fraunces', serif" }}>Baddies</p>
            </div>
            <StarAccent color="#B5D334" size={36} className="absolute top-4 right-4" />
            <StarAccent color="#E8176A" size={20} className="absolute bottom-20 left-10" />
          </div>

          {/* Text */}
          <div>
            <p
              className="text-xs uppercase tracking-widest font-semibold text-[#E8176A] mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ✦ Your Hosts
            </p>
            <h2
              className="font-display font-black leading-tight mb-6"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                fontWeight: 900,
              }}
            >
              We Work With{" "}
              <em className="text-[#E8176A]">Goal-Driven</em> Investors Who Are Ready
              to <em className="text-[#B5D334]">Stop Playing Small</em>
            </h2>
            <p
              className="text-base text-[#0D0D0D]/70 leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Rachel Davis and Kate Baldwin evolved their weekly Pace Morby community
              interviews into a full-scale creative finance platform. They break down
              deals, mindsets, mistakes, and strategies — with receipts, not fluff.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#0D0D0D] text-white font-semibold px-8 py-4 rounded-full border-2 border-[#0D0D0D] hover:bg-[#E8176A] transition-all hover-lift"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Meet Rachel & Kate →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-20 px-6 bg-[#2A5C2E]">
        <div className="max-w-3xl mx-auto text-center">
          <StarAccent color="#B5D334" size={40} className="mx-auto mb-6" />
          <h2
            className="font-display font-black text-white mb-4"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
            }}
          >
            Join the <em className="text-[#B5D334]">Baddies</em> Community
          </h2>
          <p
            className="text-[#F2EDE0]/80 text-lg mb-10 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Weekly deals, strategies, and the inside scoop from our SubTo, Gator,
            and DealSauce networks. Drop your email — no spam, just sauce.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-full border-2 border-[#0D0D0D] text-[#0D0D0D] bg-white focus:outline-none focus:border-[#B5D334] text-base"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
            <button
              type="submit"
              className="bg-[#E8176A] text-white font-semibold px-8 py-4 rounded-full border-2 border-[#0D0D0D] hover:bg-[#B5D334] hover:text-[#0D0D0D] transition-all shrink-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I&apos;m In →
            </button>
          </form>
        </div>
      </section>

      {/* ── Final Marquee ── */}
      <Marquee bgColor="#0D0D0D" textColor="#B5D334" borderColor="#0D0D0D" />

      <Footer />
    </>
  );
}
