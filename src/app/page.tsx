import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";
import Link from "next/link";
import { getLatestInterviews } from "@/lib/youtube";

const HERO_VIDEO_ID = "Mw-6dy1thqg";

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

export default async function Home() {
  const interviews = await getLatestInterviews(3);

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="pt-16 min-h-screen bg-[#F2EDE0] flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT — YouTube embed */}
          <div className="relative bg-[#0D0D0D] min-h-[400px] lg:min-h-0 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0">
              <iframe
                src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=0&rel=0&modestbranding=1&color=white`}
                title="REI Baddies Talk Show — Featured Episode"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>

          {/* RIGHT — Text & CTAs */}
          <div className="flex flex-col justify-center px-8 md:px-14 py-16 lg:py-24">
            <div
              className="inline-flex items-center gap-2 bg-[#B5D334] text-[#0D0D0D] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border-2 border-[#0D0D0D] w-fit mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <StarAccent size={12} color="#0D0D0D" />
              REI Baddies Talk Show
            </div>

            <h1
              className="font-display leading-[0.92] mb-6"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(3rem, 6vw, 6rem)",
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
              <a
                href={`https://www.youtube.com/watch?v=${HERO_VIDEO_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E8176A] text-white font-semibold px-8 py-4 rounded-full border-2 border-[#0D0D0D] hover:bg-[#0D0D0D] transition-all text-base hover-lift"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Watch Now →
              </a>
              <Link
                href="/about"
                className="bg-transparent text-[#0D0D0D] font-semibold px-8 py-4 rounded-full border-2 border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-[#F2EDE0] transition-all text-base"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Meet the Hosts
              </Link>
            </div>

            {/* Channel stats row */}
            <div className="flex gap-8 mt-10 pt-8 border-t-2 border-[#0D0D0D]/10">
              {[
                { value: "100+", label: "Episodes" },
                { value: "1M+", label: "Downloads" },
                { value: "2,500+", label: "Reviews" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="font-display font-black text-2xl text-[#E8176A]"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs uppercase tracking-widest text-[#0D0D0D]/50"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <Marquee />

      {/* ── Latest Interviews ── */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <StarAccent color="#B5D334" size={20} />
                <p
                  className="text-xs uppercase tracking-widest font-semibold text-[#B5D334]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Fresh This Week
                </p>
              </div>
              <h2
                className="font-display font-black text-white leading-tight"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 900,
                }}
              >
                Latest{" "}
                <em className="text-[#E8176A]">Interviews</em>
              </h2>
            </div>
            <a
              href="https://www.youtube.com/playlist?list=PLsqWtY6le6VldvIJAwOmF5QiQoV3BA785"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B5D334] text-[#0D0D0D] font-semibold px-6 py-3 rounded-full border-2 border-[#B5D334] hover:bg-[#E8176A] hover:text-white hover:border-[#E8176A] transition-all w-fit"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Full Playlist →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interviews.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border-2 border-[#F2EDE0]/10 overflow-hidden hover-lift bg-[#1a1a1a]"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-video bg-[#0D0D0D]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#0D0D0D]/40">
                    <div className="w-14 h-14 rounded-full bg-[#E8176A] border-2 border-white flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="white">
                        <polygon points="3,1 13,8 3,15" />
                      </svg>
                    </div>
                  </div>
                  {/* Interview badge */}
                  <div
                    className="absolute top-3 left-3 bg-[#E8176A] text-white text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Interview
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p
                    className="font-display font-bold text-white text-base leading-snug group-hover:text-[#B5D334] transition-colors line-clamp-2"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {video.title}
                  </p>
                  <p
                    className="text-xs text-[#F2EDE0]/40 mt-2 uppercase tracking-widest"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    REI Baddies Talk Show
                  </p>
                </div>
              </a>
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

      {/* ── Stats bar ── */}
      <section className="bg-[#E8176A] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="font-display font-black text-5xl text-white mb-2"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {s.value}
              </p>
              <p
                className="text-sm uppercase tracking-widest text-white/70"
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

      {/* ── Hosts Teaser ── */}
      <section className="py-20 px-6 bg-[#F2EDE0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[480px]">
            <div className="absolute top-0 left-0 w-56 h-72 rounded-2xl bg-[#FADADD] border-2 border-[#0D0D0D] overflow-hidden flex items-center justify-center">
              <div className="text-center text-[#0D0D0D]/30 p-4">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Rachel photo<br />(public/images/hosts/rachel.jpg)
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-56 h-72 rounded-2xl bg-[#B5D334] border-2 border-[#0D0D0D] overflow-hidden flex items-center justify-center">
              <div className="text-center text-[#0D0D0D]/30 p-4">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Kate photo<br />(public/images/hosts/kate.jpg)
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
              <em className="text-[#E8176A]">Goal-Driven</em>{" "}
              Investors Who Are Ready to{" "}
              <em className="text-[#B5D334]">Stop Playing Small</em>
            </h2>
            <p
              className="text-base text-[#0D0D0D]/70 leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Rachel Davis — Army veteran, Everest trekker, author — closed her first creative deal in Nepal on the way to Base Camp. Kate Baldwin — Key West native, luxury agent, capital raiser — top 3% at BHHS in year one. Two operators. Zero fluff.
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

      <Marquee bgColor="#0D0D0D" textColor="#B5D334" borderColor="#0D0D0D" />
      <Footer />
    </>
  );
}
