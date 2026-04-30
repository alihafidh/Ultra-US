import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us — Ultra US | Wholesale Laptop Distributor",
  description:
    "Learn about Ultra US — established in 2025 with 20+ years of industry experience.",
};

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=30')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24">
          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-4 animate-fade-up">About Us</span>
          <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-extrabold text-white leading-[1.08] animate-fade-up animate-fade-up-delay-1">Who We Are</h1>
          <p className="mt-4 text-gray-400 text-[15px] max-w-lg animate-fade-up animate-fade-up-delay-2 leading-relaxed">
            A wholesale distributor built on 20+ years of hands-on experience in electronics and IT distribution.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {[
              { val: "20+", label: "Years Experience" },
              { val: "5,000+", label: "Clients Served" },
              { val: "1M+", label: "Units Delivered" },
            ].map((s) => (
              <div key={s.label} className="py-7 sm:py-9 px-3 text-center">
                <p className="text-[24px] sm:text-[30px] font-extrabold text-blue-600 leading-none">{s.val}</p>
                <p className="mt-1 text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
            <ScrollReveal direction="left">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80"
                alt="Team collaboration"
                width={600}
                height={420}
                className="w-full object-cover rounded-2xl shadow-lg"
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Our Story</span>
                <h2 className="text-[22px] sm:text-[30px] font-extrabold text-gray-900 leading-tight">
                  Two Decades of Knowledge, One Mission
                </h2>
                <div className="mt-5 space-y-4 text-[15px] text-gray-500 leading-relaxed">
                  <p>Ultra US was founded in 2025, but our roots in electronics and IT distribution go back over 20 years. Our team has been sourcing, distributing, and supporting business-grade technology long before this company was formed.</p>
                  <p>That deep expertise is what allows us to deliver exceptional service and competitive pricing on every order — whether it&apos;s 50 units or 5,000.</p>
                  <p>We specialize in new and certified refurbished laptops from Dell, HP, Lenovo, Apple, and ASUS — the same machines trusted by enterprises worldwide.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Our Values</span>
            <h2 className="text-[22px] sm:text-[30px] font-extrabold text-gray-900">What Sets Us Apart</h2>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { num: "01", title: "Quality First", desc: "Every laptop passes thorough inspection. We stand behind every unit we ship." },
              { num: "02", title: "Transparent Pricing", desc: "No hidden fees. Clear competitive pricing so you can plan your budget." },
              { num: "03", title: "Reliable Supply", desc: "Deep inventory across all major brands — always available when you need it." },
              { num: "04", title: "Fast Turnaround", desc: "Quotes within hours, orders processed and shipped promptly." },
            ].map((v, i) => (
              <ScrollReveal key={v.num} delay={i * 80}>
                <div className="card-lift bg-white border border-gray-100 rounded-2xl p-6 h-full shadow-sm group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <span className="text-blue-600 text-[13px] font-bold">{v.num}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-[15px]">{v.title}</h3>
                  </div>
                  <p className="text-[14px] text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Our Clients</span>
            <h2 className="text-[22px] sm:text-[30px] font-extrabold text-gray-900">Who We Serve</h2>
          </ScrollReveal>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: "IT Resellers & VARs", desc: "Stock inventory at wholesale cost." },
              { title: "Corporations", desc: "Quality machines deployed on schedule." },
              { title: "Schools & Universities", desc: "Affordable laptops for education." },
              { title: "Government & Nonprofits", desc: "Transparent volume pricing." },
            ].map((item) => (
              <div key={item.title} className="card-lift flex items-start gap-3 p-5 border border-gray-100 rounded-xl bg-white shadow-sm">
                <div className="w-2.5 h-2.5 mt-1 bg-blue-600 rounded-full shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 text-[14px]">{item.title}</h3>
                  <p className="mt-1 text-[13px] text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
            <h2 className="text-[24px] sm:text-[32px] font-extrabold text-white">Let&apos;s Work Together</h2>
            <p className="mt-3 text-blue-100/60 max-w-md mx-auto text-[15px]">
              Whether you have a specific order or want to explore options, our team is ready.
            </p>
            <Link href="/contact" className="inline-block mt-7 bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition text-[14px] shadow-lg">
              Request a Quote
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
