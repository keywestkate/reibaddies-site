import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";

const contactReasons = [
  { label: "Sponsorship Inquiry", color: "#E8176A" },
  { label: "Media / Press", color: "#B5D334" },
  { label: "Speaking Request", color: "#2A5C2E" },
  { label: "General Question", color: "#0D0D0D" },
];

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section className="pt-16 bg-[#F2EDE0] py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 bg-[#B5D334] text-[#0D0D0D] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border-2 border-[#0D0D0D] mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <StarAccent size={12} color="#0D0D0D" />
              Let&apos;s Connect
            </div>
            <h1
              className="font-display font-black leading-[0.92] mb-6"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 900,
              }}
            >
              <span className="block text-[#0D0D0D]">Say</span>
              <span className="block text-[#E8176A] italic">Hey,</span>
              <span className="block text-[#0D0D0D]">Baddie</span>
            </h1>
            <p
              className="text-lg text-[#0D0D0D]/70 leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Whether you&apos;re looking to partner, get booked, or just say hi — drop us a line. We read every message personally.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@reibaddiesshow.com"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-[#0D0D0D] bg-white hover-lift group"
              >
                <div className="w-10 h-10 rounded-full bg-[#E8176A] border-2 border-[#0D0D0D] flex items-center justify-center text-white font-bold text-sm">
                  @
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest text-[#0D0D0D]/50 mb-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Email
                  </p>
                  <p
                    className="font-semibold text-[#0D0D0D] group-hover:text-[#E8176A] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    hello@reibaddiesshow.com
                  </p>
                </div>
              </a>

              <a
                href="https://instagram.com/reibaddiesshow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-[#0D0D0D] bg-white hover-lift group"
              >
                <div className="w-10 h-10 rounded-full bg-[#B5D334] border-2 border-[#0D0D0D] flex items-center justify-center font-bold text-sm">
                  IG
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest text-[#0D0D0D]/50 mb-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Instagram
                  </p>
                  <p
                    className="font-semibold text-[#0D0D0D] group-hover:text-[#E8176A] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    @reibaddiesshow
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border-2 border-[#0D0D0D] p-8">
            <h2
              className="font-display font-black text-2xl mb-6"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Send a Message
            </h2>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                {["First Name", "Last Name"].map((f) => (
                  <div key={f}>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {f}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#0D0D0D]/20 focus:border-[#E8176A] focus:outline-none text-sm bg-[#F2EDE0]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#0D0D0D]/20 focus:border-[#E8176A] focus:outline-none text-sm bg-[#F2EDE0]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
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
                          color: r.color === "#B5D334" ? "#0D0D0D" : "#FFFFFF",
                          fontFamily: "'DM Sans', sans-serif",
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
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#0D0D0D]/20 focus:border-[#E8176A] focus:outline-none text-sm bg-[#F2EDE0] resize-none"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="bg-[#E8176A] text-white font-semibold px-8 py-4 rounded-full border-2 border-[#0D0D0D] hover:bg-[#0D0D0D] transition-all hover-lift"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
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
