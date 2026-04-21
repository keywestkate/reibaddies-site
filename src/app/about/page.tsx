import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";
import Link from "next/link";

const hosts = [
  {
    name: "Rachel Davis",
    role: "Co-Host & Creative Finance Investor",
    imgSlot: "public/images/hosts/rachel.jpg",
    color: "#E8176A",
    bio: [
      "Rachel Davis is a full-time creative real estate investor specializing in SubTo, seller finance, and novation deals. She started investing with zero cash and now helps others do the same.",
      "A founding member of the Pace Morby community, Rachel has closed 40+ deals using creative financing strategies and has mentored hundreds of investors across the country.",
      "When she's not closing deals or recording the show, you'll find her on the road visiting properties, attending masterminds, and building the REI Baddies community.",
    ],
    stats: [
      { value: "40+", label: "Deals Closed" },
      { value: "3 yrs", label: "Investing" },
      { value: "500+", label: "Students Mentored" },
    ],
    socials: [
      { label: "Instagram", href: "https://instagram.com/racheldavis_rei" },
      { label: "YouTube", href: "https://youtube.com" },
    ],
  },
  {
    name: "Kate Baldwin",
    role: "Co-Host & Real Estate Investor",
    imgSlot: "public/images/hosts/kate.jpg",
    color: "#B5D334",
    bio: [
      "Kate Baldwin is a real estate investor and entrepreneur based in Key West, FL. Known for her straight-talking style and deal-first mindset, Kate brings the receipts to every conversation.",
      "Kate got her start in traditional real estate before discovering creative financing through the SubTo and Gator Method communities. She hasn't looked back since.",
      "As co-host of REI Baddies, Kate makes sure every episode stays grounded in real numbers, real deals, and real talk — no fluff allowed.",
    ],
    stats: [
      { value: "25+", label: "Deals Closed" },
      { value: "5 yrs", label: "RE Experience" },
      { value: "Key West", label: "Based In" },
    ],
    socials: [
      { label: "Instagram", href: "https://instagram.com/katebaldwin_rei" },
      { label: "Website", href: "https://askkeywestkate.com" },
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
          <p
            className="text-xl text-[#0D0D0D]/70 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Two investors. Hundreds of deals. Zero tolerance for fluff. Rachel Davis and Kate Baldwin built REI Baddies to give you the real story behind creative real estate investing.
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
          <div
            className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Photo slot */}
            <div
              className={`relative h-[500px] rounded-3xl border-2 border-[#0D0D0D] overflow-hidden flex items-center justify-center ${
                i % 2 === 1 ? "lg:order-2" : ""
              }`}
              style={{ backgroundColor: host.color + "22" }}
            >
              <div className="text-center text-[#0D0D0D]/30 p-8">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {host.name} photo
                  <br />({host.imgSlot})
                </p>
              </div>
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl border-b-2 border-l-2 border-[#0D0D0D] flex items-center justify-center"
                style={{ backgroundColor: host.color }}
              >
                <StarAccent color="#FFFFFF" size={28} />
              </div>
            </div>

            {/* Text */}
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border-2 border-[#0D0D0D] mb-4"
                style={{ backgroundColor: host.color, color: host.color === "#B5D334" ? "#0D0D0D" : "#FFFFFF", fontFamily: "'DM Sans', sans-serif" }}
              >
                {host.role}
              </span>
              <h2
                className="font-display font-black mb-6 leading-tight"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 900,
                }}
              >
                {host.name}
              </h2>

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
                      className="font-display font-black text-2xl mb-1"
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

              <div className="flex gap-3 flex-wrap">
                {host.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-5 py-2.5 rounded-full border-2 border-[#0D0D0D] hover:text-white transition-all"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      backgroundColor: host.color,
                      color: host.color === "#B5D334" ? "#0D0D0D" : "#FFFFFF",
                    }}
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Community banner */}
      <section className="py-16 px-6 bg-[#0D0D0D] text-center">
        <h2
          className="font-display font-black text-white mb-6"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 900,
          }}
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
