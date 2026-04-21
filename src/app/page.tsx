import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";
import Image from "next/image";
import Link from "next/link";
import { getLatestInterviews, getChannelStats } from "@/lib/youtube";

const HERO_VIDEO_ID = "Mw-6dy1thqg";

const stats = [
  { value: "1M+", label: "Total Downloads" },
  { value: "2,500+", label: "5-Star Reviews" },
  { value: "100+", label: "Episodes" },
  { value: "3", label: "Show Formats" },
];

const shows = [
  {
    name: "REI Baddies Talk Show",
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
  const [interviews, channelStats] = await Promise.all([
    getLatestInterviews(3),
    getChannelStats(),
  ]);

  return (
    <>
      <Nav />

      {/* ── Hero — full-screen cinematic video ── */}
      <section className="relative bg-[#0D0D0D] overflow-hidden" style={{ height: "100vh", minHeight: "600px" }}>

        {/* YouTube iframe — 16:9 centered so all people are visible */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=0&rel=0&modestbranding=1&color=white&iv_load_policy=3`}
            title="REI Baddies Talk Show — Featured Episode"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              border: "none",
              width: "177.78vh",   /* 16/9 × 100vh — always wider than viewport */
              minWidth: "100%",
              height: "100%",
              minHeight: "56.25vw", /* 9/16 × 100vw — always taller than viewport */
            }}
          />
        </div>

        {/* Top gradient — protects nav readability */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.7) 0%, transparent 100%)" }}
        />

        {/* Bottom gradient — text overlay area */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "45%", background: "linear-gradient(to top, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.7) 60%, transparent 100%)" }}
        />

        {/* Overlay content — pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-10 pointer-events-none">
          <div className="max-w-7xl mx-auto">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-[#B5D334] text-[#0D0D0D] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border-2 border-[#0D0D0D] mb-5 pointer-events-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <StarAccent size={10} color="#0D0D0D" />
              REI Baddies Talk Show
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black text-white leading-[0.88] mb-5"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(3.5rem, 8vw, 8rem)",
                fontWeight: 900,
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              <span className="block">Real <em className="text-[#E8176A]">Stories.</em></span>
              <span className="block">Real <em className="text-[#B5D334]">Deals.</em></span>
            </h1>

            {/* Sub + CTAs row */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-6 justify-between">
              <p
                className="text-[#F2EDE0]/80 text-lg max-w-xl leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Hosted by <strong className="text-white">Rachel Davis & Kate Baldwin</strong> — operators who do the deals and share the receipts. No fluff.
              </p>

              <div className="flex flex-wrap gap-3 shrink-0 pointer-events-auto">
                <a
                  href={`https://www.youtube.com/watch?v=${HERO_VIDEO_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E8176A] text-white font-semibold px-7 py-3.5 rounded-full border-2 border-[#E8176A] hover:bg-white hover:text-[#0D0D0D] hover:border-white transition-all text-sm hover-lift"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Watch Full Episode →
                </a>
                <Link
                  href="/show"
                  className="bg-transparent text-white font-semibold px-7 py-3.5 rounded-full border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  All Episodes
                </Link>
              </div>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-8 mt-6 pt-5 border-t border-white/10 pointer-events-auto">
              {[
                { value: channelStats.subscribers, label: "Subscribers" },
                { value: channelStats.interviews, label: "Interviews" },
                { value: "Rachel & Kate", label: "Hosts" },
                { value: "Real Estate Investing", label: "Why" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-black text-xl text-[#B5D334] leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                    {s.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-1.5 opacity-40">
          <div className="w-px h-10 bg-white" style={{ animation: "pulse 2s infinite" }} />
          <p className="text-white text-[10px] uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>Scroll</p>
        </div>
      </section>

      {/* ── Welcome Section ── */}
      <section className="bg-[#F2EDE0] py-16 px-6 text-center border-b-2 border-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-sm uppercase tracking-[0.25em] font-semibold text-[#E8176A] mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Welcome Baddie Nation
          </p>
          <h2
            className="font-display font-black leading-none mb-4 uppercase"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
              fontWeight: 900,
            }}
          >
            REI Baddies{" "}
            <em className="text-[#E8176A] not-italic">Talk Show</em>
          </h2>
          <p
            className="font-display italic text-[#0D0D0D]/60"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
          >
            where real estate gets real
          </p>
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
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <StarAccent color="#B5D334" size={24} />
            <p
              className="text-xs uppercase tracking-widest font-semibold text-[#B5D334]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Three Shows. One Community.
            </p>
          </div>
          <h2
            className="font-display font-black mb-14 leading-none uppercase text-white text-center"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(4rem, 10vw, 9rem)",
              fontWeight: 900,
              width: "80%",
              margin: "0 auto 3.5rem auto",
            }}
          >
            Pick Your<br />
            <em className="text-[#E8176A] not-italic">Poison</em>
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
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative grid grid-cols-2 gap-3 h-[480px]">
            <div className="rounded-2xl border-2 border-[#0D0D0D] overflow-hidden relative">
              <Image src="/images/hosts/rachel.jpg" alt="Rachel Davis" fill className="object-cover object-top" />
            </div>
            <div className="rounded-2xl border-2 border-[#0D0D0D] overflow-hidden relative">
              <Image src="/images/hosts/rachel-family.jpg" alt="Rachel with family at Panthers game" fill className="object-cover object-center" />
            </div>
            <div className="rounded-2xl border-2 border-[#0D0D0D] overflow-hidden relative">
              <Image src="/images/hosts/kate-olivia.jpg" alt="Kate and Olivia" fill className="object-cover object-top" />
            </div>
            <div className="rounded-2xl border-2 border-[#0D0D0D] overflow-hidden relative">
              <Image src="/images/hosts/kate.jpg" alt="Kate Baldwin" fill className="object-cover object-top" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E8176A] text-white rounded-full border-2 border-[#0D0D0D] px-5 py-3 text-center z-10 rotate-6">
              <p className="font-display font-black text-sm" style={{ fontFamily: "'Fraunces', serif" }}>The</p>
              <p className="font-display font-black text-2xl italic" style={{ fontFamily: "'Fraunces', serif" }}>Baddies</p>
            </div>
            <StarAccent color="#B5D334" size={36} className="absolute -top-3 -right-3 z-10" />
            <StarAccent color="#E8176A" size={20} className="absolute -bottom-3 -left-3 z-10" />
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-widest font-semibold text-[#B5D334] mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ✦ Your Hosts
            </p>
            <h2
              className="font-display font-black leading-tight mb-6 uppercase text-white"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 900,
              }}
            >
              We Work With{" "}
              <span className="text-[#E8176A]">Goal-Driven</span>{" "}
              Investors Who Are Ready to{" "}
              <span className="text-[#B5D334]">Stop Playing Small</span>
            </h2>
            <p
              className="text-base text-white/60 leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Rachel Davis — Army veteran, Everest trekker, author — closed her first creative deal in Nepal on the way to Base Camp. Kate Baldwin — Key West native, luxury agent, capital raiser — top 3% at BHHS in year one. Two operators. Zero fluff.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#E8176A] text-white font-semibold px-8 py-4 rounded-full border-2 border-[#E8176A] hover:bg-[#B5D334] hover:text-[#0D0D0D] hover:border-[#B5D334] transition-all hover-lift"
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
            Keep in touch with the <span className="text-[#B5D334]">Baddies</span>
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
