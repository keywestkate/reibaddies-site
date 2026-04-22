import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";

const contactReasons = [
  { label: "Sponsorship Inquiry", color: "#EC99AF" },
  { label: "Media / Press", color: "#53885E" },
  { label: "Speaking Request", color: "#53885E" },
  { label: "General Question", color: "#0D0D0D" },
];

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section className="pt-16 bg-[#FFFFFF] py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 bg-[#53885E] text-[#0D0D0D] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border-2 border-[#0D0D0D] mb-8"
              style={{ fontFamily: "'Lemonilla', sans-serif" }}
            >
              <StarAccent size={12} color="#0D0D0D" />
              Let&apos;s Connect
            </div>
            <h1
              className="font-display font-black leading-[0.92] mb-6"
              style={{
                fontFamily: "'Lucky Goldfish', sans-serif",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 900,
              }}
            >
              <span className="block text-[#0D0D0D]">Say</span>
              <span className="block text-[#EC99AF] italic">Hey,</span>
              <span className="block text-[#0D0D0D]">Baddie</span>
            </h1>
            <p
              className="text-lg text-[#0D0D0D]/70 leading-relaxed mb-10"
              style={{ fontFamily: "'Lemonilla', sans-serif" }}
            >
              Whether you&apos;re looking to partner, get booked, or just say hi — drop us a line. We read every message personally.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {[
                { href: "mailto:kate@reibaddiesshow.com", icon: "K", bg: "#EC99AF", label: "Kate — Email", value: "kate@reibaddiesshow.com" },
                { href: "tel:3052407828", icon: "K", bg: "#EC99AF", label: "Kate — Call/Text", value: "305-240-7828" },
                { href: "mailto:rachel@reibaddiesshow.com", icon: "R", bg: "#53885E", label: "Rachel — Email", value: "rachel@reibaddiesshow.com" },
                { href: "tel:9103229358", icon: "R", bg: "#53885E", label: "Rachel — Call/Text", value: "910-322-9358" },
                { href: "https://www.instagram.com/reibaddies", icon: "IG", bg: "#0D0D0D", label: "Instagram", value: "@reibaddies", external: true },
                { href: "https://api.leadconnectorhq.com/widget/bookings/rei-baddies-booked-your-film-day", icon: "📅", bg: "#EC99AF", label: "Book a Film Day", value: "Schedule your recording", external: true },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-5 rounded-2xl border-2 border-[#0D0D0D] bg-white hover-lift group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-[#0D0D0D] flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ backgroundColor: item.bg }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#0D0D0D]/50 mb-0.5" style={{ fontFamily: "'Lemonilla', sans-serif" }}>{item.label}</p>
                    <p className="font-semibold text-[#0D0D0D] group-hover:text-[#EC99AF] transition-colors" style={{ fontFamily: "'Lemonilla', sans-serif" }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border-2 border-[#0D0D0D] p-8">
            <h2
              className="font-display font-black text-2xl mb-6"
              style={{ fontFamily: "'Lucky Goldfish', sans-serif" }}
            >
              Send a Message
            </h2>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                {["First Name", "Last Name"].map((f) => (
                  <div key={f}>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                      style={{ fontFamily: "'Lemonilla', sans-serif" }}
                    >
                      {f}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#0D0D0D]/20 focus:border-[#EC99AF] focus:outline-none text-sm bg-[#FFFFFF]"
                      style={{ fontFamily: "'Lemonilla', sans-serif" }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                  style={{ fontFamily: "'Lemonilla', sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#0D0D0D]/20 focus:border-[#EC99AF] focus:outline-none text-sm bg-[#FFFFFF]"
                  style={{ fontFamily: "'Lemonilla', sans-serif" }}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                  style={{ fontFamily: "'Lemonilla', sans-serif" }}
                >
                  Reason for Reaching Out
                </label>
                <div className="flex flex-wrap gap-2">
                  {contactReasons.map((r) => (
                    <label key={r.label} className="cursor-pointer">
                      <input type="radio" name="reason" className="sr-only" />
                      <span
                        className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border-2 border-[#0D0D0D] hover:opacity-80 transition-opacity"
                        style={{
                          backgroundColor: r.color,
                          color: r.color === "#53885E" ? "#0D0D0D" : "#FFFFFF",
                          fontFamily: "'Lemonilla', sans-serif",
                        }}
                      >
                        {r.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                  style={{ fontFamily: "'Lemonilla', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#0D0D0D]/20 focus:border-[#EC99AF] focus:outline-none text-sm bg-[#FFFFFF] resize-none"
                  style={{ fontFamily: "'Lemonilla', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="bg-[#EC99AF] text-white font-semibold px-8 py-4 rounded-full border-2 border-[#0D0D0D] hover:bg-[#0D0D0D] transition-all hover-lift"
                style={{ fontFamily: "'Lemonilla', sans-serif" }}
              >
                Send It →
              </button>
            </form>
          </div>
        </div>
      </section>

      <Marquee />
      <Footer />
    </>
  );
}
