import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HeroVideo from "@/components/HeroVideo";

export default function HomePage() {
  return (
    <>
      {/* ── HERO WITH VIDEO ── */}
      <section className="relative min-h-[480px] sm:min-h-[540px] md:min-h-[620px] flex items-center overflow-hidden bg-gray-900">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 w-full">
          <div className="max-w-xl">
            <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 mb-5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-blue-100 text-[12px] font-medium tracking-wide uppercase">Now Accepting Bulk Orders</span>
            </div>
            <h1 className="animate-fade-up animate-fade-up-delay-1 text-[28px] sm:text-[38px] md:text-[50px] font-extrabold text-white leading-[1.1] tracking-tight">
              Wholesale Laptops,<br />
              Delivered Nationwide
            </h1>
            <p className="animate-fade-up animate-fade-up-delay-2 mt-4 text-blue-100/70 text-[15px] sm:text-[16px] leading-relaxed max-w-md">
              Business-grade laptops in bulk from Dell, HP, Lenovo, Apple, and more.
              Competitive pricing backed by 20+ years of experience.
            </p>
            <div className="animate-fade-up animate-fade-up-delay-3 mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="text-center bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-700 transition text-[14px] shadow-lg shadow-blue-600/30">
                Request a Quote
              </Link>
              <a href="tel:+16463710603" className="text-center bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-7 py-3.5 rounded-lg hover:bg-white/20 transition text-[14px]">
                Call (646) 371-0603
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST NUMBERS ── */}
      <section className="bg-white relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { val: "20+", label: "Years Experience", color: "text-blue-600" },
                { val: "5,000+", label: "Clients Served", color: "text-blue-600" },
                { val: "1M+", label: "Units Delivered", color: "text-blue-600" },
                { val: "50", label: "States Covered", color: "text-blue-600" },
              ].map((s, i) => (
                <div key={s.label} className={`py-7 sm:py-8 px-4 text-center ${i < 3 ? "md:border-r md:border-gray-100" : ""} ${i < 2 ? "border-b md:border-b-0 border-gray-100" : ""}`}>
                  <p className={`text-[26px] sm:text-[32px] font-extrabold leading-none ${s.color}`}>{s.val}</p>
                  <p className="mt-1.5 text-[11px] text-gray-400 font-medium uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS MARQUEE ── */}
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-10 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-300">Brands We Distribute</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="marquee-track flex items-center gap-14 sm:gap-20 w-max py-3">
            {[...Array(2)].flatMap(() => ["DELL", "HP", "Lenovo", "Apple", "ASUS", "Acer", "Microsoft", "Samsung"]).map((name, i) => (
              <span key={`${name}-${i}`} className="text-[20px] sm:text-[26px] font-bold text-gray-200 whitespace-nowrap select-none tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Simple Process</span>
              <h2 className="text-[24px] sm:text-[34px] font-extrabold text-gray-900">How Bulk Ordering Works</h2>
              <p className="mt-3 text-gray-400 text-[15px] max-w-lg mx-auto">From first inquiry to doorstep delivery — four simple steps.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {[
              { step: "01", title: "Tell Us What You Need", desc: "Submit an inquiry with brands, models, and quantity.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
              { step: "02", title: "Get Your Quote", desc: "We respond within 24 hours with competitive pricing.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
              { step: "03", title: "Confirm & Pay", desc: "Lock in your order — we start processing immediately.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { step: "04", title: "We Ship It", desc: "Tracked, insured delivery anywhere in the US.", icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 80}>
                <div className="card-lift bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-[12px] font-bold text-blue-600 uppercase tracking-wider">Step {item.step}</span>
                  <h3 className="mt-1 text-[15px] font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-[13px] text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE CARRY ── */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Inventory</span>
              <h2 className="text-[24px] sm:text-[34px] font-extrabold text-gray-900">What We Carry</h2>
              <p className="mt-3 text-gray-400 text-[15px] max-w-lg mx-auto">New and certified refurbished laptops — always ready for bulk purchase.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { src: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80", title: "Business Laptops", desc: "Dell Latitude, HP EliteBook, Lenovo ThinkPad — the machines IT departments trust.", tag: "Most Popular", bg: "bg-blue-50" },
              { src: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=600&q=80", title: "Premium Devices", desc: "MacBook Pro, MacBook Air, Surface Pro — for teams that demand the best.", tag: "High Demand", bg: "bg-violet-50" },
              { src: "https://images.unsplash.com/photo-1587614297882-0954a02d57f7?w=600&q=80", title: "Bulk & Custom", desc: "500+ units? Tiered discounts and custom configurations available.", tag: "Best Value", bg: "bg-amber-50" },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div className={`card-lift group rounded-2xl border border-gray-100 overflow-hidden h-full bg-white shadow-sm`}>
                  <div className={`${card.bg} relative h-[200px] sm:h-[240px] overflow-hidden`}>
                    <Image src={card.src} alt={card.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-2">{card.tag}</span>
                    <h3 className="text-gray-900 font-bold text-[17px]">{card.title}</h3>
                    <p className="mt-2 text-gray-400 text-[14px] leading-relaxed">{card.desc}</p>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 mt-4 text-blue-600 hover:text-blue-700 text-[13px] font-semibold transition-colors group/link">
                      Get pricing
                      <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-14 sm:py-20 md:py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block px-3 py-1 bg-white/10 text-blue-100 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Our Clients</span>
              <h2 className="text-[24px] sm:text-[34px] font-extrabold text-white">Who We Serve</h2>
              <p className="mt-3 text-blue-100/60 text-[15px] max-w-lg mx-auto">We work with organizations across the country that need quality tech at wholesale prices.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "IT Resellers", desc: "Stock your catalog with dependable machines at wholesale cost.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
              { title: "Corporations", desc: "Equip your workforce with quality laptops on schedule.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { title: "Education", desc: "Laptops for classrooms, labs, and 1:1 student programs.", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
              { title: "Government", desc: "Transparent volume pricing for public sector procurement.", icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 h-full hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-[15px]">{item.title}</h3>
                  <p className="mt-2 text-blue-100/50 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ULTRA US ── */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Why Us</span>
                <h2 className="text-[24px] sm:text-[34px] font-extrabold text-gray-900 leading-tight">
                  What Makes<br />Ultra US Different
                </h2>
                <p className="mt-4 text-gray-400 text-[15px] leading-relaxed max-w-md">
                  We&apos;re not a marketplace — we&apos;re a dedicated wholesale partner. Every order gets personal attention from an experienced team.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { title: "Bulk Pricing", desc: "Volume-based pricing that scales with your order.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "Quality Checked", desc: "Every unit inspected before shipping.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                  { title: "Fast Turnaround", desc: "Quotes in 24hrs, orders ship in days.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                  { title: "Deep Inventory", desc: "Thousands of units across major brands.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
                  { title: "All 50 States", desc: "Tracked, insured delivery nationwide.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
                  { title: "Dedicated Support", desc: "Real people, not call centers.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
                ].map((item) => (
                  <div key={item.title} className="card-lift bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <svg className="w-5 h-5 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                    <h3 className="font-bold text-gray-900 text-[13px]">{item.title}</h3>
                    <p className="mt-1 text-[12px] text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-14 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80"
                  alt="Ultra US team"
                  width={600}
                  height={420}
                  className="w-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-6">
                  <div className="flex gap-3">
                    {[
                      { val: "20+", label: "Years" },
                      { val: "5K+", label: "Clients" },
                      { val: "1M+", label: "Units" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/15 backdrop-blur-md rounded-lg px-4 py-2.5 text-center flex-1 border border-white/10">
                        <p className="text-[18px] font-extrabold text-white leading-none">{s.val}</p>
                        <p className="mt-0.5 text-[9px] text-white/50 font-medium uppercase tracking-wider">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">About Us</span>
                <h2 className="text-[24px] sm:text-[32px] font-extrabold text-gray-900 leading-tight">
                  Two Decades of<br />Distribution Experience
                </h2>
                <div className="mt-5 space-y-3 text-[15px] text-gray-500 leading-relaxed">
                  <p>
                    Founded in 2025 and powered by 20+ years in electronics distribution,
                    Ultra US was built for one thing: getting quality laptops to businesses
                    that need them — fast and at the right price.
                  </p>
                  <p>
                    We stock new and certified refurbished machines from the brands your
                    organization already trusts, and deliver them at prices that make
                    bulk procurement simple.
                  </p>
                </div>
                <Link href="/about" className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition text-[14px] shadow-sm shadow-blue-600/20">
                  Learn more about us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=40')] bg-cover bg-center opacity-10" />
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 text-center relative z-10">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-4">Get Started</span>
            <h2 className="text-[26px] sm:text-[38px] font-extrabold text-white leading-tight">
              Ready to Place a<br />Bulk Order?
            </h2>
            <p className="mt-4 text-gray-400 text-[15px] leading-relaxed max-w-md mx-auto">
              Tell us the brands and quantities you need. Our team responds
              with competitive pricing within one business day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition text-[14px] shadow-lg shadow-blue-600/30">
                Request a Quote
              </Link>
              <a href="tel:+16463710603" className="bg-white/10 border border-white/15 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/15 transition text-[14px]">
                Call (646) 371-0603
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
