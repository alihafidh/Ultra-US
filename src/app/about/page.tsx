import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us — Ultra US | Wholesale Laptop Distributor",
  description:
    "Learn about Ultra US — established in 2025 with 20+ years of industry experience. A trusted wholesale laptop distributor serving businesses, resellers, schools, and institutions across the United States.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page banner */}
      <section className="animated-gradient noise py-16 relative overflow-hidden">
        <div className="orb-blue absolute top-0 right-[20%] w-[300px] h-[300px] bg-blue-500/[0.08] rounded-full blur-[80px] pointer-events-none" />
        <div className="orb-indigo absolute bottom-0 left-[10%] w-[200px] h-[200px] bg-violet-500/[0.06] rounded-full blur-[60px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-sm font-semibold text-blue-300/60 tracking-wide animate-fade-up">About Us</p>
          <h1 className="mt-2 text-[38px] font-extrabold text-white leading-tight animate-fade-up animate-fade-up-delay-1">
            Who We <span className="text-shimmer">Are</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div>
              <h2 className="text-[28px] font-extrabold text-[#0a0a0a] leading-tight">
                Established 2025. Over 20 Years of <span className="gradient-text">Industry Experience</span>.
              </h2>
              <div className="mt-6 space-y-4 text-[15px] text-gray-500 leading-relaxed">
                <p>
                  Ultra US is a US-based wholesale distributor of business-grade laptops and consumer
                  electronics. Founded in 2025, our company was built on a foundation of over two
                  decades of hands-on experience in the electronics and IT distribution industry.
                </p>
                <p>
                  Our team has been sourcing, distributing, and supporting business-grade technology
                  long before we launched Ultra US — and that deep expertise is what allows us to
                  deliver exceptional service and competitive pricing to every client.
                </p>
                <p>
                  We understand the needs of our customers and offer competitive alternatives to meet
                  the growing demand for quality technology at bulk pricing. Our inventory includes new
                  and certified refurbished units from brands like Dell, HP, Lenovo, Apple, and ASUS —
                  the same machines trusted by enterprises and IT departments worldwide.
                </p>
                <p>
                  Whether you are an IT reseller stocking your catalog, a school district outfitting
                  classrooms, or a corporation rolling out new machines to employees, Ultra US can
                  provide the volume you need at a price that makes sense.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-[200px] ring-1 ring-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80"
                  alt="Team collaboration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold">Our Team</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 text-center">
                  <p className="text-[28px] font-extrabold text-white leading-none">20+</p>
                  <p className="mt-1 text-[11px] text-blue-200/60 font-medium">Years</p>
                </div>
                <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-5 text-center">
                  <p className="text-[28px] font-extrabold text-white leading-none">5K+</p>
                  <p className="mt-1 text-[11px] text-violet-200/60 font-medium">Clients</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-5 text-center">
                  <p className="text-[28px] font-extrabold text-white leading-none">1M+</p>
                  <p className="mt-1 text-[11px] text-indigo-200/60 font-medium">Units</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* What sets us apart */}
        <section className="mt-20">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full tracking-wide uppercase">
              Our Values
            </span>
            <h2 className="mt-3 text-[28px] font-extrabold text-[#0a0a0a]">What Sets Us <span className="gradient-text">Apart</span></h2>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Quality First",
                desc: "Every laptop we sell — whether new or refurbished — goes through a thorough inspection process. We stand behind every unit we ship.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                number: "01",
                gradient: "from-blue-500 to-cyan-400",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden fees, no bait-and-switch. We provide clear, competitive bulk pricing so you can plan your procurement budget with confidence.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                number: "02",
                gradient: "from-green-500 to-emerald-400",
              },
              {
                title: "Reliable Supply",
                desc: "We maintain deep inventory across major business laptop brands so you can count on availability when you need to place an order.",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                number: "03",
                gradient: "from-violet-500 to-purple-400",
              },
              {
                title: "Fast Turnaround",
                desc: "From quote to delivery, we move quickly. Most quotes are returned within hours, and orders are processed and shipped promptly.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                number: "04",
                gradient: "from-amber-500 to-orange-400",
              },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="card-hover group bg-white border border-gray-200/60 rounded-2xl p-7 h-full relative overflow-hidden">
                  <span className="absolute top-4 right-5 text-[72px] font-extrabold text-gray-100 leading-none select-none pointer-events-none group-hover:text-blue-50 transition-colors duration-300">
                    {v.number}
                  </span>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${v.gradient} rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                      </svg>
                    </div>
                    <h3 className="font-extrabold text-[#0a0a0a] text-[16px]">{v.title}</h3>
                    <p className="mt-2.5 text-[14px] text-gray-400 leading-relaxed">{v.desc}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${v.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Who we serve */}
        <section className="mt-20">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full tracking-wide uppercase">
              Our Clients
            </span>
            <h2 className="mt-3 text-[28px] font-extrabold text-[#0a0a0a]">Who We Serve</h2>
          </ScrollReveal>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "IT Resellers & VARs", desc: "Stock your inventory with reliable business laptops at wholesale pricing.", color: "bg-blue-500" },
              { title: "Businesses & Corporations", desc: "Equip your workforce with quality machines for less.", color: "bg-violet-500" },
              { title: "Schools & Universities", desc: "Outfit classrooms and labs with dependable laptops at education-friendly prices.", color: "bg-cyan-500" },
              { title: "Government & Nonprofits", desc: "Stretch your procurement budget with volume pricing from a trusted supplier.", color: "bg-emerald-500" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="card-hover flex items-start gap-4 p-5 bg-white border border-gray-200/60 rounded-xl h-full">
                  <div className={`w-2.5 h-2.5 mt-1.5 ${item.color} rounded-full shrink-0`} />
                  <div>
                    <h3 className="font-bold text-[#0a0a0a]">{item.title}</h3>
                    <p className="mt-1 text-[14px] text-gray-500">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <ScrollReveal>
          <section className="mt-20 animated-gradient noise rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="orb-blue absolute top-0 right-[20%] w-[200px] h-[200px] bg-blue-500/[0.1] rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-[28px] font-extrabold text-white">Let&apos;s Work <span className="text-shimmer">Together</span></h2>
              <p className="mt-4 text-white/40 max-w-lg mx-auto text-[15px]">
                Whether you have a specific order in mind or want to discuss your procurement needs,
                our team is ready to help.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-9 py-3.5 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all text-sm shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Contact Us Now
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </>
  );
}
