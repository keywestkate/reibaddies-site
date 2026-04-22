import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-[#FFFFFF] border-t-2 border-[#0D0D0D]">
      {/* Pink bar */}
      <div className="bg-[#EC99AF] py-4 px-6 text-center">
        <p className="font-display font-black text-white text-lg italic" style={{ fontFamily: "'Lucky Goldfish', sans-serif" }}>
          Real Stories. Real Deals. Real Community. ✦
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-3">
            <Image src="/images/logo.png" alt="REI Baddies Talk Show" width={64} height={64} className="rounded-full border-2 border-[#FFFFFF]/20" />
          </div>
          <p className="text-[#FFFFFF]/70 text-sm leading-relaxed" style={{ fontFamily: "'Lemonilla', sans-serif" }}>
            Hosted by Rachel Davis & Kate Baldwin. Creative financing, real deals, no fluff.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#53885E] mb-4 font-semibold" style={{ fontFamily: "'Lemonilla', sans-serif" }}>Navigate</p>
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
                <Link href={l.href} className="text-sm text-[#FFFFFF]/70 hover:text-[#53885E] transition-colors" style={{ fontFamily: "'Lemonilla', sans-serif" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#53885E] mb-4 font-semibold" style={{ fontFamily: "'Lemonilla', sans-serif" }}>Follow Us</p>
          <ul className="flex flex-col gap-2">
            {[
              { href: "https://www.youtube.com/@REIBaddies", label: "YouTube" },
              { href: "https://www.instagram.com/reibaddies", label: "Instagram" },
              { href: "https://www.tiktok.com/@reibaddies", label: "TikTok" },
              { href: "https://open.spotify.com/show/3t2X6HbjA2c3NokCAnLLhE", label: "Spotify" },
              { href: "https://www.facebook.com/reibaddies", label: "Facebook" },
              { href: "https://www.linkedin.com/groups/14918025/", label: "LinkedIn" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#FFFFFF]/70 hover:text-[#53885E] transition-colors" style={{ fontFamily: "'Lemonilla', sans-serif" }}>
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#FFFFFF]/10 px-6 py-5 text-center">
        <p className="text-xs text-[#FFFFFF]/40" style={{ fontFamily: "'Lemonilla', sans-serif" }}>
          © {new Date().getFullYear()} REI Baddies Talk Show. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
