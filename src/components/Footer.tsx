import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050510] text-gray-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p className="text-[22px] font-extrabold tracking-tight">
              <span className="text-white">ULTRA</span>{" "}
              <span className="gradient-text-blue">US</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              A US-based wholesale distributor of business-grade laptops and consumer electronics.
              Established 2025, backed by 20+ years of industry experience.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[13px] font-bold text-white uppercase tracking-wider mb-5">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-[13px] font-bold text-white uppercase tracking-wider mb-5">Brands</h3>
            <ul className="space-y-3 text-sm">
              <li>Dell</li>
              <li>HP</li>
              <li>Lenovo</li>
              <li>Apple</li>
              <li>ASUS</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[13px] font-bold text-white uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                (800) 555-0199
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                sales@ultra-us.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                Mon – Fri, 9 AM – 6 PM EST
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Ultra US. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
