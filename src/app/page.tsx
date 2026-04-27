import Link from "next/link";
import BrandCarousel from "@/components/BrandCarousel";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "5K+", label: "Clients Served" },
  { value: "1M+", label: "Units Delivered" },
  { value: "50", label: "States Covered" },
];

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Sales Focused",
    desc: "Competitive wholesale pricing on business-grade laptops. We work closely with each client to deliver the best value on every bulk order.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Nationwide Distribution",
    desc: "Serving clients across all 50 states — from IT resellers and school districts to corporations and government agencies.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "5,000+ Clients",
    desc: "Decade-long business relationships built on reliability. We are a trusted partner in the wholesale electronics industry.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-[#0a0a0a]">
        {/* Floating orbs */}
        <div className="orb-1 absolute top-20 right-[20%] w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="orb-2 absolute bottom-10 left-[10%] w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 bg-white/[0.06] border border-white/10 rounded-full text-white/50 text-xs font-semibold tracking-wider uppercase mb-6">
                Wholesale Laptop Distributor
              </span>
            </div>
            <h1 className="animate-fade-up animate-fade-up-delay-1 text-[42px] md:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight">
              High-Quality Laptops,{" "}
              <span className="text-white/60">
                Exceptional Service
              </span>
            </h1>
            <p className="animate-fade-up animate-fade-up-delay-2 mt-6 text-[17px] text-white/40 leading-relaxed max-w-lg">
              Ultra US is a US-based wholesale distributor of business-grade laptops
              and consumer electronics with competitive pricing to meet the growing
              demand for quality technology.
            </p>
            <div className="animate-fade-up animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#0a0a0a] font-semibold px-8 py-3.5 rounded-lg hover:bg-white/90 transition-all duration-300 text-sm"
              >
                Contact Us Now
              </Link>
              <Link
                href="/about"
                className="border border-white/15 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative -mt-14 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-black/[0.04] border border-gray-200/60 p-2">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center py-6 px-4 ${i < stats.length - 1 ? "md:border-r md:border-gray-200/60" : ""}`}
              >
                <p className="text-[36px] font-extrabold text-[#0a0a0a] leading-none tracking-tight">{stat.value}</p>
                <p className="mt-1.5 text-[12px] text-gray-400 font-medium tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why do business with us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full tracking-wide uppercase">
                About Us
              </span>
              <h2 className="mt-4 text-[34px] font-extrabold text-[#0a0a0a] leading-tight">
                Why Do Business<br />With Ultra US?
              </h2>
              <div className="mt-6 space-y-4 text-[15px] text-gray-500 leading-relaxed">
                <p>
                  Established in 2025 and backed by over 20 years of industry experience,
                  we specialize in sourcing and distributing quality technology at competitive
                  bulk pricing.
                </p>
                <p>
                  We understand the needs of our customers — from IT resellers and corporations
                  to school districts and government agencies — and we offer reliable solutions
                  with speed, transparency, and trust.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 text-[#0a0a0a] font-semibold text-sm group"
              >
                Get in touch
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Visual grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Quality Assured" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Fast Turnaround" },
                { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Best Pricing" },
                { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Nationwide" },
              ].map((item) => (
                <div key={item.label} className="card-hover group border border-gray-200/60 rounded-2xl">
                  <div className="bg-white rounded-2xl p-7 h-full flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <p className="font-bold text-[#0a0a0a] text-sm">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-[28px] font-extrabold text-white">How Can We Help?</h2>
            <p className="mt-1 text-white/40 text-[15px]">
              Tell us what you need — our team is ready to find the right solution.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-white text-[#0a0a0a] font-semibold px-8 py-3.5 rounded-lg hover:bg-white/90 transition-all duration-300 text-sm"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full tracking-wide uppercase">
              What We Do
            </span>
            <h2 className="mt-4 text-[34px] font-extrabold text-[#0a0a0a]">
              Built for Wholesale
            </h2>
            <p className="mt-3 text-gray-400 text-[15px] max-w-md mx-auto">
              Everything we do is designed to make bulk laptop procurement simple, fast, and affordable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="card-hover bg-white rounded-2xl p-8 border border-gray-200/60"
              >
                <div className="w-14 h-14 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-6 text-white">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0a0a0a]">{pillar.title}</h3>
                <p className="mt-3 text-[14px] text-gray-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <BrandCarousel />

      {/* Final CTA */}
      <section className="bg-[#0a0a0a] relative overflow-hidden">
        <div className="orb-1 absolute top-0 right-[30%] w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
          <h2 className="text-[36px] font-extrabold text-white leading-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-5 text-white/35 text-[15px] leading-relaxed max-w-xl mx-auto">
            Tell us what you need and our team will get back to you with pricing within
            one business day. No obligation, no pressure.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-[#0a0a0a] font-semibold px-9 py-3.5 rounded-lg hover:bg-white/90 transition-all duration-300 text-sm"
            >
              Contact Us Now
            </Link>
            <a
              href="tel:+18005550199"
              className="border border-white/15 text-white font-semibold px-9 py-3.5 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-sm"
            >
              Call (800) 555-0199
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
