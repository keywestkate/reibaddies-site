import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";
import Image from "next/image";
import Link from "next/link";
import KateCharacter from "@/components/KateCharacter";
import RachelCharacter from "@/components/RachelCharacter";
import OwnersClubBadge from "@/components/OwnersClubBadge";
import Pennant from "@/components/Pennant";

const hosts = [
  {
    name: "Rachel Davis",
    role: "Co-Host & Creative Finance Investor",
    imgSlot: "images/hosts/rachel.jpg",
    color: "#EC99AF",
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
    secondaryImg: "images/hosts/rachel-family.jpg",
    secondaryAlt: "Rachel with her family at a Carolina Panthers game",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/theracheldavisrealestate" },
      { label: "YouTube", href: "https://www.youtube.com/@REIBaddies" },
    ],
  },
  {
    name: "Kate Baldwin",
    role: "Co-Host, Luxury Agent & Capital Raiser",
    imgSlot: "images/hosts/kate.jpg",
    color: "#53885E",
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
    secondaryImg: "images/hosts/kate-olivia.jpg",
    secondaryAlt: "Kate with her daughter Olivia",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/askkeywestkate" },
      { label: "AskKeyWestKate.com", href: "https://askkeywestkate.com" },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-16 bg-[#0D0D0D] relative overflow-hidden" style={{ minHeight: "85vh" }}>
        {/* Full-bleed photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/hosts/rachel-and-kate.png"
            alt="Rachel Davis and Kate Baldwin"
            fill
            className="object-cover object-center"
            style={{ opacity: 0.65 }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.15) 40%, rgba(13,13,13,0.92) 100%)" }}
          />
        </div>

        {/* Text pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-12">
          <div className="max-w-7xl mx-auto">
            <p
              className="text-xs uppercase tracking-widest font-semibold text-[#53885E] mb-4"
              style={{ fontFamily: "'Lemonilla', sans-serif" }}
            >
              ✦ Rachel Davis & Kate Baldwin
            </p>
            <h1
              className="font-display font-black text-white leading-[0.85]"
              style={{ fontFamily: "'Lucky Goldfish', sans-serif", fontSize: "clamp(5rem, 14vw, 13rem)", fontWeight: 900 }}
            >
              <span className="block">The</span>
              <span className="block italic text-[#EC99AF] -mt-2">Baddies</span>
            </h1>
            <p
              className="text-[#FFFFFF]/70 text-lg mt-4 max-w-lg"
              style={{ fontFamily: "'Lemonilla', sans-serif" }}
            >
              Two operators. Real deals. No fluff.
            </p>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Hosts */}
      {hosts.map((host, i) => (
        <section
          key={host.name}
          className={`py-20 px-6 ${i % 2 === 0 ? "bg-white" : "bg-[#FFFFFF]"}`}
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
              <div className="relative w-full aspect-[4/3] rounded-3xl border-2 border-[#0D0D0D] overflow-hidden max-w-sm mx-auto lg:mx-0 mt-4">
                <Image src={`/${host.secondaryImg}`} alt={host.secondaryAlt} fill className="object-cover object-center" />
              </div>
            </div>

            {/* Text */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border-2 border-[#0D0D0D] mb-3"
                style={{ backgroundColor: host.color, color: host.tagText, fontFamily: "'Lemonilla', sans-serif" }}
              >
                {host.role}
              </span>
              <h2
                className="font-display font-black mb-1 leading-tight"
                style={{ fontFamily: "'Lucky Goldfish', sans-serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 900 }}
              >
                {host.name}
              </h2>
              <p
                className="font-display italic text-xl mb-6"
                style={{ fontFamily: "'Lucky Goldfish', sans-serif", color: host.color }}
              >
                {host.headline}
              </p>

              {host.bio.map((para, j) => (
                <p
                  key={j}
                  className="text-base text-[#0D0D0D]/70 leading-relaxed mb-4"
                  style={{ fontFamily: "'Lemonilla', sans-serif" }}
                >
                  {para}
                </p>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 my-8 p-6 rounded-2xl border-2 border-[#0D0D0D] bg-[#FFFFFF]">
                {host.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p
                      className="font-display font-black text-xl mb-1 leading-tight"
                      style={{ fontFamily: "'Lucky Goldfish', sans-serif", color: host.color }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="text-xs uppercase tracking-wider text-[#0D0D0D]/60"
                      style={{ fontFamily: "'Lemonilla', sans-serif" }}
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
                  style={{ color: host.color, fontFamily: "'Lemonilla', sans-serif" }}
                >
                  ✦ Fun Facts
                </p>
                <ul className="flex flex-col gap-2">
                  {host.funFacts.map((fact, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-[#0D0D0D]/70"
                      style={{ fontFamily: "'Lemonilla', sans-serif" }}
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
                    style={{ backgroundColor: host.color, color: host.tagText, fontFamily: "'Lemonilla', sans-serif" }}
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Characters + Owners Club */}
      <section className="py-16 px-6 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-2">
            <RachelCharacter size={140} />
            <Pennant text="RACHEL" color="#53885E" textColor="#FFFFFF" size="sm" rotate={-4} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <OwnersClubBadge size={130} />
            <p className="text-xs uppercase tracking-widest text-[#0D0D0D]/50 mt-2" style={{ fontFamily: "'Lemonilla', sans-serif" }}>Owners Club</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <KateCharacter size={140} />
            <Pennant text="KATE" color="#EC99AF" textColor="#FFFFFF" size="sm" rotate={4} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0D0D0D] text-center">
        <h2
          className="font-display font-black text-white mb-6"
          style={{ fontFamily: "'Lucky Goldfish', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
        >
          Want to be on the show?
        </h2>
        <p
          className="text-[#FFFFFF]/70 text-lg mb-8 max-w-xl mx-auto"
          style={{ fontFamily: "'Lemonilla', sans-serif" }}
        >
          If you have a creative finance deal worth talking about, we want to hear it.
        </p>
        <Link
          href="/be-our-guest"
          className="inline-flex items-center gap-2 bg-[#EC99AF] text-white font-semibold px-8 py-4 rounded-full border-2 border-[#EC99AF] hover:bg-[#53885E] hover:text-[#0D0D0D] hover:border-[#53885E] transition-all hover-lift"
          style={{ fontFamily: "'Lemonilla', sans-serif" }}
        >
          Apply to Be a Guest →
        </Link>
      </section>

      <Marquee bgColor="#EC99AF" textColor="#FFFFFF" />
      <Footer />
    </>
  );
}
