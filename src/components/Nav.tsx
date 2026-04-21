"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "The Hosts" },
  { href: "/show", label: "The Show" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/be-our-guest", label: "Be Our Guest" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F2EDE0] border-b-2 border-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="REI Baddies Talk Show" width={44} height={44} className="rounded-full" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium tracking-wide uppercase text-[#0D0D0D] hover:text-[#E8176A] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/show"
          className="hidden lg:inline-flex items-center gap-2 bg-[#B5D334] text-[#0D0D0D] font-semibold text-sm px-5 py-2.5 rounded-full border-2 border-[#0D0D0D] hover:bg-[#E8176A] hover:text-white transition-all"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Listen Now →
        </Link>

        {/* Mobile burger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#0D0D0D] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0D0D0D] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0D0D0D] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#F2EDE0] border-t-2 border-[#0D0D0D] px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium uppercase tracking-wide text-[#0D0D0D] hover:text-[#E8176A] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/show"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center gap-2 bg-[#B5D334] text-[#0D0D0D] font-semibold px-5 py-3 rounded-full border-2 border-[#0D0D0D] w-fit"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Listen Now →
          </Link>
        </div>
      )}
    </nav>
  );
}
