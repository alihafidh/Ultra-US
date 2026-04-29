"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          <Link href="/" className="text-[22px] font-extrabold tracking-tight text-[#0a0a0a]">
            ULTRA <span className="gradient-text-blue">US</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[13px] font-semibold text-gray-500 hover:text-blue-600 transition-colors duration-200 tracking-wide">
              Home
            </Link>
            <Link href="/about" className="text-[13px] font-semibold text-gray-500 hover:text-blue-600 transition-colors duration-200 tracking-wide">
              About Us
            </Link>
            <Link href="/brands" className="text-[13px] font-semibold text-gray-500 hover:text-blue-600 transition-colors duration-200 tracking-wide">
              Brands
            </Link>
            <Link href="/contact" className="text-[13px] font-semibold text-gray-500 hover:text-blue-600 transition-colors duration-200 tracking-wide">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[13px] font-semibold px-6 py-2.5 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Contact Us Now
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-semibold text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-semibold text-gray-600 hover:text-blue-600">About Us</Link>
            <Link href="/brands" onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-semibold text-gray-600 hover:text-blue-600">Brands</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-semibold text-gray-600 hover:text-blue-600">Contact</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition mt-2">
              Contact Us Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
