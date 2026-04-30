"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-[14px]">U</span>
            </div>
            <span className="text-[19px] font-bold tracking-tight text-gray-900">Ultra US</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Brands", href: "/brands" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors font-medium">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-blue-600 text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20">
              Request a Quote
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2 text-gray-500 relative z-[60]" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-0 z-50 bg-white flex flex-col">
          {/* Header row */}
          <div className="flex items-center justify-between h-[64px] px-4 border-b border-gray-100">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-[14px]">U</span>
              </div>
              <span className="text-[19px] font-bold tracking-tight text-gray-900">Ultra US</span>
            </Link>
            <button onClick={() => setOpen(false)} className="p-2 -mr-2 text-gray-500" aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 flex flex-col justify-center px-8">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Brands", href: "/brands" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-[28px] font-bold text-gray-900 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bottom CTA + contact */}
          <div className="px-8 pb-10 space-y-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-blue-600 text-white font-semibold py-4 rounded-xl text-[16px] shadow-lg shadow-blue-600/20"
            >
              Request a Quote
            </Link>
            <div className="flex items-center justify-center gap-6 text-[14px] text-gray-400">
              <a href="tel:+16463710603" className="hover:text-gray-600 transition">(646) 371-0603</a>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <a href="mailto:info@ultraedgehub.com" className="hover:text-gray-600 transition">Email us</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
