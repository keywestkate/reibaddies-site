import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import StarAccent from "@/components/StarAccent";

const requirements = [
  "You&apos;ve closed at least one creative finance deal (SubTo, seller finance, novation, co-living, etc.)",
  "You can share real numbers — purchase price, terms, cash flow, equity",
  "You&apos;re willing to talk about what went wrong, not just what went right",
  "You have a story worth telling and aren&apos;t just looking for a promo spot",
];

export default function BeOurGuestPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-16 bg-[#E8176A] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <StarAccent color="#FFFFFF" size={40} className="mx-auto mb-6" />
          <h1
            className="font-display font-black text-white leading-[0.92] mb-6"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 900,
            }}
          >
            <span className="block">Want to Be</span>
            <span className="block italic text-[#B5D334]">on the Show?</span>
          </h1>
          <p
            className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            If you&apos;ve done a creative finance deal and have receipts to prove it, we want to hear your story. No polished pitches. No fluff. Just the real deal.
          </p>
        </div>
      </section>

      <Marquee bgColor="#0D0D0D" textColor="#B5D334" borderColor="#0D0D0D" />

      {/* What we look for */}
      <section className="py-20 px-6 bg-[#F2EDE0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs uppercase tracking-widest font-semibold text-[#E8176A] mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ✦ What We&apos;re Looking For
            </p>
            <h2
              className="font-display font-black leading-tight mb-8"
              style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
            >
              We Want Operators, Not{" "}
              <em className="text-[#E8176A]">Promoters</em>
            </h2>

            <ul className="flex flex-col gap-5">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#B5D334] border-2 border-[#0D0D0D] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-display font-black text-sm" style={{ fontFamily: "'Fraunces', serif" }}>
                      {i + 1}
                    </span>
                  </div>
                  <p
                    className="text-base text-[#0D0D0D]/80 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: req }}
                  />
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 rounded-2xl bg-[#0D0D0D] text-[#F2EDE0]">
              <p
                className="text-xs uppercase tracking-widest font-semibold text-[#B5D334] mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                FYI
              </p>
              <p
                className="text-sm leading-relaxed text-[#F2EDE0]/80"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                We review every application personally. If your deal fits our show, we&apos;ll reach out within 2 weeks. We don&apos;t do paid placements — you&apos;re on because your story is worth telling.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border-2 border-[#0D0D0D] p-8">
            <h3
              className="font-display font-black text-2xl mb-6"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Apply to Be a Guest
            </h3>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Rachel"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#0D0D0D]/20 focus:border-[#E8176A] focus:outline-none text-sm bg-[#F2EDE0]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Davis"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#0D0D0D]/20 focus:border-[#E8176A] focus:outline-none text-sm bg-[#F2EDE0]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              </div>

              {[
                { label: "Email", type: "email", placeholder: "you@email.com" },
                { label: "Instagram Handle", type: "text", placeholder: "@yourhandle" },
              ].map((f) => (
                <div key={f.label}>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#0D0D0D]/20 focus:border-[#E8176A] focus:outline-none text-sm bg-[#F2EDE0]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Deal Type
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#0D0D0D]/20 focus:border-[#E8176A] focus:outline-none text-sm bg-[#F2EDE0]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <option value="">Select deal type...</option>
                  <option>SubTo (Subject-To)</option>
                  <option>Seller Finance</option>
                  <option>Novation</option>
                  <option>Co-Living / House Hacking</option>
                  <option>Wrap / AITD</option>
                  <option>Other Creative Finance</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/60 mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Tell Us About Your Deal
                </label>
                <textarea
                  rows={5}
                  placeholder="Give us the basics: what was the deal, how was it structured, what were the numbers, and what made it interesting? No polish needed — just be real."
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#0D0D0D]/20 focus:border-[#E8176A] focus:outline-none text-sm bg-[#F2EDE0] resize-none"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="bg-[#E8176A] text-white font-semibold px-8 py-4 rounded-full border-2 border-[#0D0D0D] hover:bg-[#0D0D0D] transition-all hover-lift mt-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Submit My Application →
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
