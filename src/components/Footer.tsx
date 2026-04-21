import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-[#F2EDE0] border-t-2 border-[#0D0D0D]">
      {/* Pink bar */}
      <div className="bg-[#E8176A] py-4 px-6 text-center">
        <p className="font-display font-black text-white text-lg italic" style={{ fontFamily: "'Fraunces', serif" }}>
          Real Stories. Real Deals. Real Community. ✦
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display font-black text-3xl mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
            REI<span className="text-[#E8176A]">Baddies</span>
          </p>
          <p className="text-[#F2EDE0]/70 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Hosted by Rachel Davis & Kate Baldwin. Creative financing, real deals, no fluff.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#B5D334] mb-4 font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Navigate</p>
          <ul className="flex flex-col gap-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "The Hosts" },
              { href: "/show", label: "The Show" },
              { href: "/work-with-us", label: "Work With Us" },
              { href: "/be-our-guest", label: "Be Our Guest" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-[#F2EDE0]/70 hover:text-[#B5D334] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#B5D334] mb-4 font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Follow Us</p>
          <ul className="flex flex-col gap-2">
            {[
              { href: "https://youtube.com/@reibaddies", label: "YouTube" },
              { href: "https://instagram.com/reibaddiesshow", label: "Instagram" },
              { href: "https://tiktok.com/@reibaddies", label: "TikTok" },
              { href: "https://podcasts.apple.com", label: "Apple Podcasts" },
              { href: "https://spotify.com", label: "Spotify" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2EDE0]/70 hover:text-[#B5D334] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#F2EDE0]/10 px-6 py-5 text-center">
        <p className="text-xs text-[#F2EDE0]/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          © {new Date().getFullYear()} REI Baddies Show. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
