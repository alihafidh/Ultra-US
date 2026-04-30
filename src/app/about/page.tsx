import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us — Ultra US | Wholesale Laptop Distributor",
  description: "Learn about Ultra US — established in 2025 with 20+ years of industry experience.",
};

export default function AboutPage() {
  return (
    <>
      {/* Banner with image */}
      <section className="relative bg-gray-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=60"
          alt="Ultra US team"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center">
          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-4 animate-fade-up">About Us</span>
          <h1 className="text-[30px] sm:text-[42px] md:text-[52px] font-extrabold text-white leading-[1.08] animate-fade-up animate-fade-up-delay-1 max-w-2xl mx-auto">
            Wholesale Laptops,<br />Backed by Experience
          </h1>
          <p className="mt-4 text-gray-400 text-[15px] sm:text-base max-w-md mx-auto animate-fade-up animate-fade-up-delay-2">
            20+ years of IT distribution expertise. 5,000+ clients. One mission: get you the right tech at the right price.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-gray-100">
            {[
              { val: "2025", label: "Founded" },
              { val: "20+", label: "Years Exp." },
              { val: "5K+", label: "Clients" },
              { val: "1M+", label: "Units" },
            ].map((s) => (
              <div key={s.label} className="py-6 sm:py-8 px-2 text-center">
                <p className="text-[20px] sm:text-[28px] font-extrabold text-blue-600 leading-none">{s.val}</p>
                <p className="mt-1 text-[9px] sm:text-[11px] text-gray-400 font-medium uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission — short and visual */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Our Story</span>
                <h2 className="text-[22px] sm:text-[30px] font-extrabold text-gray-900 leading-tight">
                  Built by distributors,<br />for businesses
                </h2>
                <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">
                  Ultra US was founded in 2025 by a team with 20+ years in electronics distribution.
                  We source business-grade laptops from Dell, HP, Lenovo, Apple, and ASUS — and
                  deliver them at wholesale prices to organizations across all 50 states.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition text-[14px]">
                  Work with us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values — icon-driven, minimal text */}
      <section className="py-14 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Why Us</span>
              <h2 className="text-[24px] sm:text-[34px] font-extrabold text-gray-900">What Sets Us Apart</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Quality Checked", desc: "Every unit inspected" },
              { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Fair Pricing", desc: "No hidden fees" },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Fast Quotes", desc: "Within 24 hours" },
              { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", title: "Deep Stock", desc: "Always available" },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="card-lift bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 h-full shadow-sm text-center group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-[14px]">{v.title}</h3>
                  <p className="mt-1 text-[13px] text-gray-400">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-14 sm:py-20 md:py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Our Clients</span>
              <h2 className="text-[24px] sm:text-[34px] font-extrabold text-white">Who We Serve</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "IT Resellers", desc: "Wholesale inventory access.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", color: "bg-blue-500" },
              { title: "Corporations", desc: "Fleet deployments on time.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", color: "bg-violet-500" },
              { title: "Education", desc: "Classroom-ready laptops.", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z", color: "bg-emerald-500" },
              { title: "Government", desc: "Transparent bulk pricing.", icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", color: "bg-amber-500" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 h-full shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`w-11 h-11 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[15px]">{item.title}</h3>
                  <p className="mt-1 text-gray-400 text-[13px]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
            <h2 className="text-[24px] sm:text-[34px] font-extrabold text-white">Let&apos;s Work Together</h2>
            <p className="mt-3 text-gray-500 max-w-sm mx-auto text-[15px]">
              Tell us what you need — our team will handle the rest.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition text-[14px] shadow-lg shadow-blue-600/20">
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
