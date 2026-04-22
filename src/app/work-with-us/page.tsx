import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";
import Link from "next/link";
import SubToPeaceSign from "@/components/SubToPeaceSign";
import HotelKeyCharm from "@/components/HotelKeyCharm";

const opportunities = [
  {
    title: "Podcast Sponsorship",
    color: "#EC99AF",
    textColor: "#FFFFFF",
    desc: "Get your brand in front of 1M+ creative finance investors. We only partner with brands we actually use and believe in. No fluff. No fake endorsements.",
    includes: [
      "Pre-roll & mid-roll mentions",
      "Dedicated IG stories",
      "Newsletter feature",
      "Episode show notes link",
    ],
    cta: "Inquire →",
  },
  {
    title: "Community Partnership",
    color: "#53885E",
    textColor: "#0D0D0D",
    desc: "Already in SubTo, Gator, or DealSauce? Let&apos;s build something together. We partner with educators and community leaders who share our values.",
    includes: [
      "Cross-promotion to our audience",
      "Co-hosted episodes",
      "Joint newsletter features",
      "Community shoutouts",
    ],
    cta: "Let's Talk →",
  },
  {
    title: "Speaking & Events",
    color: "#53885E",
    textColor: "#FFFFFF",
    desc: "Book Rachel or Kate (or both) for your mastermind, conference, or event. We speak on creative finance, deal structure, community building, and the baddie mindset.",
    includes: [
      "Keynote speaking",
      "Panel participation",
      "Workshop facilitation",
      "Virtual or in-person",
    ],
    cta: "Book Now →",
  },
];

export default function WorkWithUsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-16 bg-[#FFFFFF] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 bg-[#0D0D0D] text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border-2 border-[#0D0D0D] mb-8"
            style={{ fontFamily: "'Lemonilla', sans-serif" }}
          >
            <StarAccent size={12} color="#53885E" />
            Partnerships & Sponsorships
          </div>
          <h1
            className="font-display font-black leading-[0.92] mb-8"
            style={{
              fontFamily: "'Lucky Goldfish', sans-serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 900,
            }}
          >
            <span className="block text-[#0D0D0D]">Work With</span>
            <span className="block text-[#EC99AF] italic">Goal-Driven</span>
            <span className="block text-[#0D0D0D]">Brands</span>
          </h1>
          <p
            className="text-xl text-[#0D0D0D]/70 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Lemonilla', sans-serif" }}
          >
            We partner with brands, educators, and community leaders who are ready to stop playing small and reach an audience of serious real estate investors.
          </p>
        </div>
      </section>

      <Marquee />

      {/* Brand elements strip */}
      <section className="py-10 px-6 bg-white border-b-2 border-[#0D0D0D]">
        <div className="max-w-4xl mx-auto flex items-end justify-center gap-10 flex-wrap">
          <SubToPeaceSign size={80} color="#EC99AF" />
          <HotelKeyCharm text="REI" subtext="BADDIES" color="#53885E" size={90} />
          <HotelKeyCharm text="DEAL" subtext="SAUCE" color="#EC99AF" size={90} />
          <SubToPeaceSign size={80} color="#53885E" />
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-display font-black mb-12 text-center"
            style={{ fontFamily: "'Lucky Goldfish', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
          >
            Ways to Partner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities.map((opp) => (
              <div
                key={opp.title}
                className="rounded-2xl border-2 border-[#0D0D0D] overflow-hidden hover-lift"
              >
                <div className="h-2" style={{ backgroundColor: opp.color }} />
                <div className="p-8">
                  <h3
                    className="font-display font-black text-2xl mb-3"
                    style={{ fontFamily: "'Lucky Goldfish', sans-serif" }}
                  >
                    {opp.title}
                  </h3>
                  <p
                    className="text-sm text-[#0D0D0D]/70 leading-relaxed mb-6"
                    style={{ fontFamily: "'Lemonilla', sans-serif" }}
                  >
                    {opp.desc}
                  </p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {opp.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-[#0D0D0D]"
                        style={{ fontFamily: "'Lemonilla', sans-serif" }}
                      >
                        <StarAccent color={opp.color} size={12} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold px-5 py-2.5 rounded-full border-2 border-[#0D0D0D] hover:text-white transition-all"
                    style={{
                      backgroundColor: opp.color,
                      color: opp.textColor,
                      fontFamily: "'Lemonilla', sans-serif",
                    }}
                  >
                    {opp.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience stats */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest font-semibold text-[#53885E] mb-6"
            style={{ fontFamily: "'Lemonilla', sans-serif" }}
          >
            ✦ Our Audience
          </p>
          <h2
            className="font-display font-black text-white mb-12"
            style={{ fontFamily: "'Lucky Goldfish', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
          >
            Who You&apos;re Reaching
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1M+", label: "Total Downloads" },
              { value: "78%", label: "Ages 25–44" },
              { value: "65%", label: "Active Investors" },
              { value: "42", label: "Avg. States Reached" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="font-display font-black text-4xl text-[#EC99AF] mb-2"
                  style={{ fontFamily: "'Lucky Goldfish', sans-serif" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-xs uppercase tracking-widest text-[#FFFFFF]/50"
                  style={{ fontFamily: "'Lemonilla', sans-serif" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#EC99AF] text-center">
        <StarAccent color="#FFFFFF" size={36} className="mx-auto mb-6" />
        <h2
          className="font-display font-black text-white mb-4"
          style={{ fontFamily: "'Lucky Goldfish', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
        >
          Ready to Partner?
        </h2>
        <p
          className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
          style={{ fontFamily: "'Lemonilla', sans-serif" }}
        >
          We&apos;re selective about who we work with. If your brand serves serious investors, let&apos;s talk.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-[#0D0D0D] font-semibold px-10 py-4 rounded-full border-2 border-[#0D0D0D] hover:bg-[#53885E] transition-all hover-lift"
          style={{ fontFamily: "'Lemonilla', sans-serif" }}
        >
          Get In Touch →
        </Link>
      </section>

      <Marquee bgColor="#53885E" textColor="#0D0D0D" />
      <Footer />
    </>
  );
}
