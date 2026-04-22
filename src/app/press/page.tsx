import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";
import Link from "next/link";

const pressItems = [
  {
    outlet: "BiggerPockets",
    headline: "\"The Creative Finance Podcast You Need to Hear\"",
    date: "March 2025",
    type: "Feature",
  },
  {
    outlet: "SubTo Community",
    headline: "\"REI Baddies Talk Show Brings Real Deals to the Forefront\"",
    date: "January 2025",
    type: "Feature",
  },
  {
    outlet: "Creative RE Investor",
    headline: "\"Two Women Changing How Investors Learn About Creative Finance\"",
    date: "November 2024",
    type: "Interview",
  },
];

const speakingTopics = [
  { title: "Creative Finance 101", desc: "SubTo, seller finance, and novations explained for any audience." },
  { title: "Building a REI Community", desc: "How we grew REI Baddies Talk Show from zero to 1M+ downloads." },
  { title: "The Baddie Mindset", desc: "Showing up authentically in a male-dominated space." },
  { title: "Deal Anatomy", desc: "Breaking down a real creative finance deal live on stage." },
];

export default function PressPage() {
  return (
    <>
      <Nav />

      <section className="pt-16 bg-[#53885E] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <StarAccent color="#0D0D0D" size={40} className="mx-auto mb-6" />
          <h1
            className="font-display font-black text-[#0D0D0D] leading-[0.92] mb-6"
            style={{ fontFamily: "'Lucky Goldfish', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900 }}
          >
            <span className="block">Press &</span>
            <span className="block italic text-[#EC99AF]">Speaking</span>
          </h1>
          <p
            className="text-[#0D0D0D]/70 text-xl max-w-2xl mx-auto"
            style={{ fontFamily: "'Lemonilla', sans-serif" }}
          >
            Rachel and Kate are available for media features, podcast interviews, masterminds, and conference speaking.
          </p>
        </div>
      </section>

      <Marquee bgColor="#0D0D0D" textColor="#53885E" borderColor="#0D0D0D" />

      {/* Press */}
      <section className="py-20 px-6 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display font-black mb-10"
            style={{ fontFamily: "'Lucky Goldfish', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900 }}
          >
            In the Press
          </h2>
          <div className="flex flex-col gap-5">
            {pressItems.map((p, i) => (
              <div key={i} className="flex gap-6 items-center p-6 bg-white rounded-2xl border-2 border-[#0D0D0D] hover-lift">
                <div
                  className="w-14 h-14 rounded-2xl border-2 border-[#0D0D0D] flex items-center justify-center shrink-0 font-display font-black text-xs text-center leading-tight"
                  style={{ backgroundColor: i % 2 === 0 ? "#EC99AF" : "#53885E", color: i % 2 === 0 ? "#FFFFFF" : "#0D0D0D", fontFamily: "'Lucky Goldfish', sans-serif" }}
                >
                  {p.outlet.split(" ")[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#EC99AF] mb-1" style={{ fontFamily: "'Lemonilla', sans-serif" }}>
                    {p.outlet} · {p.type} · {p.date}
                  </p>
                  <p className="font-display font-bold text-lg text-[#0D0D0D]" style={{ fontFamily: "'Lucky Goldfish', sans-serif" }}>
                    {p.headline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#53885E] mb-4" style={{ fontFamily: "'Lemonilla', sans-serif" }}>
            ✦ Book Rachel & Kate
          </p>
          <h2
            className="font-display font-black text-white mb-12"
            style={{ fontFamily: "'Lucky Goldfish', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
          >
            Speaking Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {speakingTopics.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl border-2 border-[#FFFFFF]/10 bg-[#FFFFFF]/5">
                <StarAccent color="#53885E" size={20} className="mb-3" />
                <h3 className="font-display font-black text-xl text-white mb-2" style={{ fontFamily: "'Lucky Goldfish', sans-serif" }}>
                  {t.title}
                </h3>
                <p className="text-sm text-[#FFFFFF]/60" style={{ fontFamily: "'Lemonilla', sans-serif" }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#EC99AF] text-white font-semibold px-10 py-4 rounded-full border-2 border-[#EC99AF] hover:bg-[#53885E] hover:text-[#0D0D0D] hover:border-[#53885E] transition-all hover-lift"
              style={{ fontFamily: "'Lemonilla', sans-serif" }}
            >
              Book a Speaking Slot →
            </Link>
          </div>
        </div>
      </section>

      <Marquee />
      <Footer />
    </>
  );
}
