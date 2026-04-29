import Link from "next/link";
import Image from "next/image";
import BrandCarousel from "@/components/BrandCarousel";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "20+", label: "Years of Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "5K+", label: "Clients Served", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { value: "1M+", label: "Units Delivered", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { value: "50", label: "States Covered", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
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
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Nationwide Distribution",
    desc: "Serving clients across all 50 states — from IT resellers and school districts to corporations and government agencies.",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "5,000+ Clients",
    desc: "Decade-long business relationships built on reliability. We are a trusted partner in the wholesale electronics industry.",
    color: "from-pink-500 to-rose-400",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden animated-gradient noise">
        {/* Colored orbs */}
        <div className="orb-blue absolute top-10 right-[15%] w-[500px] h-[500px] bg-blue-500/[0.08] rounded-full blur-[100px] pointer-events-none" />
        <div className="orb-indigo absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-violet-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
        <div className="orb-1 absolute top-[60%] right-[40%] w-[300px] h-[300px] bg-cyan-400/[0.05] rounded-full blur-[60px] pointer-events-none" />

        {/* Spinning decorative rings */}
        <div className="spin-slow absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] border border-blue-400/[0.08] rounded-full pointer-events-none hidden lg:block" />
        <div className="spin-slow-reverse absolute top-1/2 right-[10%] -translate-y-1/2 w-[380px] h-[380px] border border-violet-400/[0.1] rounded-full pointer-events-none hidden lg:block" />

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                  Wholesale Laptop Distributor
                </span>
              </div>
              <h1 className="animate-fade-up animate-fade-up-delay-1 text-[42px] md:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight">
                High-Quality Laptops,{" "}
                <span className="text-shimmer">
                  Exceptional Service
                </span>
              </h1>
              <p className="animate-fade-up animate-fade-up-delay-2 mt-6 text-[17px] text-white/50 leading-relaxed max-w-lg">
                Ultra US is a US-based wholesale distributor of business-grade laptops
                and consumer electronics with competitive pricing to meet the growing
                demand for quality technology.
              </p>
              <div className="animate-fade-up animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  Contact Us Now
                </Link>
                <Link
                  href="/about"
                  className="glass text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="animate-fade-up animate-fade-up-delay-2 hidden lg:flex justify-center relative">
              <div className="pulse-glow absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/10 rounded-full blur-2xl" />
              <div className="hero-image-float relative">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                  alt="Business laptops"
                  width={500}
                  height={350}
                  className="rounded-2xl shadow-2xl shadow-blue-500/10 border border-white/10 ring-1 ring-blue-400/20"
                  priority
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-3 shadow-xl shadow-blue-500/10 animate-fade-up animate-fade-up-delay-4">
                  <p className="text-[24px] font-extrabold gradient-text-blue leading-none">5K+</p>
                  <p className="text-[11px] text-gray-400 font-medium mt-0.5">Happy Clients</p>
                </div>
                {/* Top right floating badge */}
                <div className="absolute -top-3 -right-3 glass rounded-xl px-4 py-2.5 animate-fade-up animate-fade-up-delay-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-[11px] text-white font-semibold">Live Inventory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative -mt-14 z-10 px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale">
          <div className="max-w-5xl mx-auto gradient-border p-2">
            <div className="bg-white rounded-[14px] overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`group text-center py-7 px-4 hover:bg-blue-50/50 transition-colors duration-300 ${i < stats.length - 1 ? "md:border-r md:border-gray-100" : ""}`}
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[36px] font-extrabold gradient-text-blue leading-none tracking-tight">{stat.value}</p>
                    <p className="mt-1.5 text-[12px] text-gray-400 font-medium tracking-wide uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Why do business with us */}
      <section className="py-24 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full tracking-wide uppercase">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  About Us
                </span>
                <h2 className="mt-4 text-[34px] font-extrabold text-[#0a0a0a] leading-tight">
                  Why Do Business<br />With <span className="gradient-text">Ultra US</span>?
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
                  className="inline-flex items-center gap-2 mt-8 text-blue-600 font-semibold text-sm group"
                >
                  Get in touch
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                  alt="Team working with laptops"
                  width={560}
                  height={380}
                  className="rounded-2xl shadow-lg ring-1 ring-black/5"
                />
                {/* Overlay grid badges */}
                <div className="absolute -bottom-6 -left-6 grid grid-cols-2 gap-2">
                  {[
                    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Quality", gradient: "from-blue-500 to-cyan-400" },
                    { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Speed", gradient: "from-amber-500 to-orange-400" },
                    { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Pricing", gradient: "from-green-500 to-emerald-400" },
                    { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Nationwide", gradient: "from-violet-500 to-purple-400" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 flex items-center gap-2 hover:shadow-xl transition-shadow duration-300">
                      <div className={`w-8 h-8 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center text-white shrink-0`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </div>
                      <p className="font-bold text-[#0a0a0a] text-xs">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="animated-gradient noise relative overflow-hidden">
        <div className="orb-blue absolute -top-20 -right-20 w-[300px] h-[300px] bg-blue-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-[28px] font-extrabold text-white">How Can We Help?</h2>
              <p className="mt-1 text-white/40 text-[15px]">
                Tell us what you need — our team is ready to find the right solution.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <Link
              href="/contact"
              className="shrink-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Contact Us Now
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-24 bg-[#fafafa] mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full tracking-wide uppercase">
                What We Do
              </span>
              <h2 className="mt-4 text-[34px] font-extrabold text-[#0a0a0a]">
                Built for <span className="gradient-text">Wholesale</span>
              </h2>
              <p className="mt-3 text-gray-400 text-[15px] max-w-md mx-auto">
                Everything we do is designed to make bulk laptop procurement simple, fast, and affordable.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 150}>
                <div className="card-hover bg-white rounded-2xl p-8 border border-gray-200/60 h-full group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0a0a]">{pillar.title}</h3>
                  <p className="mt-3 text-[14px] text-gray-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product showcase */}
      <section className="py-24 animated-gradient noise relative overflow-hidden">
        <div className="orb-blue absolute top-20 left-[10%] w-[400px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[80px] pointer-events-none" />
        <div className="orb-indigo absolute bottom-0 right-[10%] w-[300px] h-[300px] bg-violet-500/[0.05] rounded-full blur-[60px] pointer-events-none" />
        <div className="spin-slow absolute bottom-0 right-[5%] w-[250px] h-[250px] border border-blue-400/[0.06] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold rounded-full tracking-wide uppercase">
                Our Inventory
              </span>
              <h2 className="mt-4 text-[34px] font-extrabold text-white">
                What We Carry
              </h2>
              <p className="mt-3 text-white/40 text-[15px] max-w-md mx-auto">
                From enterprise workstations to everyday business laptops — we stock it all at wholesale prices.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                src: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&q=80",
                title: "Business Laptops",
                subtitle: "Dell, HP, Lenovo & more",
                tag: "Most Popular",
                tagColor: "from-blue-500 to-cyan-400",
              },
              {
                src: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80",
                title: "Premium Selection",
                subtitle: "MacBooks & Surface Pro",
                tag: "High Demand",
                tagColor: "from-violet-500 to-purple-400",
              },
              {
                src: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&q=80",
                title: "Bulk Orders",
                subtitle: "Volume pricing available",
                tag: "Best Value",
                tagColor: "from-amber-500 to-orange-400",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 150}>
                <div className="group relative rounded-2xl overflow-hidden h-[360px] border border-white/10 cursor-pointer hover:border-blue-400/30 transition-colors duration-500">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 transition-all duration-500" />

                  {/* Tag */}
                  <div className="absolute top-5 left-5">
                    <span className={`px-3 py-1 bg-gradient-to-r ${card.tagColor} text-white text-[11px] font-semibold tracking-wide uppercase rounded-full shadow-lg`}>
                      {card.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="text-white font-extrabold text-xl">{card.title}</h3>
                    <p className="text-white/50 text-sm mt-1.5">{card.subtitle}</p>
                    <div className="mt-4 flex items-center gap-2 text-blue-300 text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <BrandCarousel />

      {/* Final CTA */}
      <section className="animated-gradient noise relative overflow-hidden">
        <div className="orb-blue absolute top-0 right-[30%] w-[300px] h-[300px] bg-blue-500/[0.08] rounded-full blur-[80px] pointer-events-none" />
        <div className="orb-indigo absolute bottom-0 left-[20%] w-[250px] h-[250px] bg-violet-500/[0.06] rounded-full blur-[60px] pointer-events-none" />
        <div className="spin-slow absolute bottom-0 left-[10%] w-[200px] h-[200px] border border-blue-400/[0.06] rounded-full pointer-events-none" />
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
            <h2 className="text-[36px] font-extrabold text-white leading-tight">
              Ready to <span className="text-shimmer">Get Started</span>?
            </h2>
            <p className="mt-5 text-white/40 text-[15px] leading-relaxed max-w-xl mx-auto">
              Tell us what you need and our team will get back to you with pricing within
              one business day. No obligation, no pressure.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-9 py-3.5 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Contact Us Now
              </Link>
              <a
                href="tel:+18005550199"
                className="glass text-white font-semibold px-9 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
              >
                Call (800) 555-0199
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
