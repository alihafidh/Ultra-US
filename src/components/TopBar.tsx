export default function TopBar() {
  return (
    <div className="bg-[#0a0a0a] text-white/70 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
        <div className="flex items-center gap-6">
          <a href="tel:+18005550199" className="flex items-center gap-1.5 hover:text-white transition">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            (800) 555-0199
          </a>
          <a href="mailto:sales@ultra-us.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            sales@ultra-us.com
          </a>
        </div>
        <span className="hidden md:block text-white/50">Mon – Fri, 9 AM – 6 PM EST</span>
      </div>
    </div>
  );
}
