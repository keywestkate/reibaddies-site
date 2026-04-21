import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";
import Image from "next/image";
import Link from "next/link";

const hosts = [
  {
    name: "Rachel Davis",
    role: "Co-Host & Creative Finance Investor",
    imgSlot: "images/hosts/rachel.jpg",
    color: "#E8176A",
    tagText: "#FFFFFF",
    headline: "Veteran. Everest Trekker. Deal Closer.",
    bio: [
      "Army veteran (two tours in Afghanistan), Everest trekker, author, and systems builder. Wife to Michael; mom to RJ and stepmom to Joshua and Jacob. Rachel closed her first creative deal in Nepal on the way to Everest Base Camp — and then wrote a book about it.",
      "Charlotte-based operator who turns buy boxes into pipelines — and rookies into closers. She brings military precision and genuine warmth to every deal, every call, and every episode of REI Baddies Talk Show.",
    ],
    funFacts: [
      "Fur idiots (self-described): Nixon and Truffles",
      "RJ just broke his school's 5K record — at 12 years old 🏃",
      "Swiftie during underwriting",
      "Hemingway on the nightstand",
      "Fluent in DealSauce, calm seller calls, and clear buy-box logic",
      "Loves this country — served two tours in Afghanistan",
    ],
    stats: [
      { value: "2", label: "Tours Served" },
      { value: "29,032 ft", label: "Everest Base Camp Trek" },
      { value: "Charlotte", label: "Based In" },
    ],
    socials: [
      { label: "Instagram", href: "https://instagram.com/racheldavis_rei" },
      { label: "YouTube", href: "https://youtube.com/@reibaddiesshow" },
    ],
  },
  {
    name: "Kate Baldwin",
    role: "Co-Host, Luxury Agent & Capital Raiser",
    imgSlot: "images/hosts/kate.jpg",
    color: "#B5D334",
    tagText: "#0D0D0D",
    headline: "Key West Native. Entrepreneur. Baddie.",
    bio: [
      "Key West native and luxury real estate agent who pairs capital raising with clear, human deal structures. A born entrepreneur, Kate launched her first company at 20 and spent 15 years as an A-list destination wedding planner before transitioning to real estate — earning top 3% at BHHS in her first year.",
      "Mom to Olivia, anchored by God, family, and friends. She follows policy from local to global because informed decisions beat impulsive ones — then catches the sunset, camera ready.",
    ],
    funFacts: [
      "Mom to Olivia; anchored by God, family, and friends",
      "Key West native; luxury real estate agent and capital raiser",
      "Launched first company at 20; 15 years as an A-list destination wedding planner",
      "Top 3% at BHHS in year one of real estate",
      "Policy-watcher — local, U.S., and global",
      "Fishing days, small-venue nights with a great band",
      "Still takes a photo of every sunset (there are 9 photos inside the folders)",
    ],
    stats: [
      { value: "Top 3%", label: "BHHS Year One" },
      { value: "15 yrs", label: "Wedding Planning" },
      { value: "Key West", label: "Based In" },
    ],
    socials: [
      { label: "Instagram", href: "https://instagram.com/katebaldwin_rei" },
      { label: "AskKeyWestKate.com", href: "https://askkeywestkate.com" },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-16 bg-[#F2EDE0]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div
            className="inline-flex items-center gap-2 bg-[#E8176A] text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border-2 border-[#0D0D0D] mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <StarAccent size={12} color="#FFFFFF" />
            Meet the Hosts
          </div>
          <h1
            className="font-display font-black leading-[0.92] mb-6"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 900,
            }}
          >
            <span className="block text-[#0D0D0D]">The</span>
            <span className="block text-[#E8176A] italic">Baddies</span>
            <span className="block text-[#0D0D0D]">Behind</span>
            <span className="block text-[#B5D334] italic">the Show</span>
          </h1>
          <div className="relative w-72 h-72 mx-auto mb-8 rounded-3xl border-2 border-[#0D0D0D] overflow-hidden">
            <Image src="/images/hosts/rachel-and-kate.png" alt="Rachel Davis and Kate Baldwin at the Super Bowl" fill className="object-cover object-center" />
          </div>
          <p
            className="text-xl text-[#0D0D0D]/70 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            An Army veteran who closed a deal at Everest Base Camp. A Key West native who went top 3% in real estate year one. Together, they built REI Baddies Talk Show — with receipts, not fluff.
          </p>
        </div>
      </section>

      <Marquee />

      {/* Hosts */}
      {hosts.map((host, i) => (
        <section
          key={host.name}
          className={`py-20 px-6 ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE0]"}`}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo slot */}
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative w-full aspect-[3/4] rounded-3xl border-2 border-[#0D0D0D] overflow-hidden max-w-sm mx-auto lg:mx-0">
                <Image src={`/${host.imgSlot}`} alt={host.name} fill className="object-cover object-top" />
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl border-b-2 border-l-2 border-[#0D0D0D] flex items-center justify-center"
                  style={{ backgroundColor: host.color }}
                >
                  <StarAccent color={host.tagText === "#FFFFFF" ? "#FFFFFF" : "#0D0D0D"} size={24} />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border-2 border-[#0D0D0D] mb-3"
                style={{ backgroundColor: host.color, color: host.tagText, fontFamily: "'DM Sans', sans-serif" }}
              >
                {host.role}
              </span>
              <h2
                className="font-display font-black mb-1 leading-tight"
                style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 900 }}
              >
                {host.name}
              </h2>
              <p
                className="font-display italic text-xl mb-6"
                style={{ fontFamily: "'Fraunces', serif", color: host.color }}
              >
                {host.headline}
              </p>

              {host.bio.map((para, j) => (
                <p
                  key={j}
                  className="text-base text-[#0D0D0D]/70 leading-relaxed mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {para}
                </p>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 my-8 p-6 rounded-2xl border-2 border-[#0D0D0D] bg-[#F2EDE0]">
                {host.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p
                      className="font-display font-black text-xl mb-1 leading-tight"
                      style={{ fontFamily: "'Fraunces', serif", color: host.color }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="text-xs uppercase tracking-wider text-[#0D0D0D]/60"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Fun Facts */}
              <div className="mb-8">
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-4"
                  style={{ color: host.color, fontFamily: "'DM Sans', sans-serif" }}
                >
                  ✦ Fun Facts
                </p>
                <ul className="flex flex-col gap-2">
                  {host.funFacts.map((fact, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-[#0D0D0D]/70"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <StarAccent color={host.color} size={12} className="mt-0.5 shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 flex-wrap">
                {host.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-5 py-2.5 rounded-full border-2 border-[#0D0D0D] hover:opacity-80 transition-all"
                    style={{ backgroundColor: host.color, color: host.tagText, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0D0D0D] text-center">
        <h2
          className="font-display font-black text-white mb-6"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
        >
          Want to be on the show?
        </h2>
        <p
          className="text-[#F2EDE0]/70 text-lg mb-8 max-w-xl mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          If you have a creative finance deal worth talking about, we want to hear it.
        </p>
        <Link
          href="/be-our-guest"
          className="inline-flex items-center gap-2 bg-[#E8176A] text-white font-semibold px-8 py-4 rounded-full border-2 border-[#E8176A] hover:bg-[#B5D334] hover:text-[#0D0D0D] hover:border-[#B5D334] transition-all hover-lift"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Apply to Be a Guest →
        </Link>
      </section>

      <Marquee bgColor="#E8176A" textColor="#FFFFFF" />
      <Footer />
    </>
  );
}
