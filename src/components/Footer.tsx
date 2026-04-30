import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-[12px]">U</span>
              </div>
              <span className="text-white font-bold text-[16px]">Ultra US</span>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              US-based wholesale laptop distributor serving businesses, resellers, schools, and institutions nationwide.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-2.5 text-[13px] text-gray-500">
              <li><Link href="/" className="hover:text-gray-300 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-300 transition">About Us</Link></li>
              <li><Link href="/brands" className="hover:text-gray-300 transition">Brands</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4">Brands</h3>
            <ul className="space-y-2.5 text-[13px] text-gray-500">
              <li>Dell</li>
              <li>HP</li>
              <li>Lenovo</li>
              <li>Apple</li>
              <li>ASUS</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-2.5 text-[13px] text-gray-500">
              <li><a href="tel:+16463710603" className="hover:text-gray-300 transition">(646) 371-0603</a></li>
              <li><a href="mailto:info@ultraedgehub.com" className="hover:text-gray-300 transition">info@ultraedgehub.com</a></li>
              <li>Mon – Fri, 9–6 PM EST</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-[12px] text-gray-600">
          <span>&copy; {new Date().getFullYear()} Ultra US. All rights reserved.</span>
          <span>Wholesale Laptop Distribution</span>
        </div>
      </div>
    </footer>
  );
}
