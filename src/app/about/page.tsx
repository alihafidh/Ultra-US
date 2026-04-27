import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Ultra US | Wholesale Laptop Distributor",
  description:
    "Learn about Ultra US — established in 2025 with 20+ years of industry experience. A trusted wholesale laptop distributor serving businesses, resellers, schools, and institutions across the United States.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page banner */}
      <section className="bg-[#0a0a0a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-white/40 tracking-wide">About Us</p>
          <h1 className="mt-2 text-[38px] font-extrabold text-white leading-tight">Who We Are</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          <div className="lg:col-span-3">
            <h2 className="text-[28px] font-extrabold text-[#0a0a0a] leading-tight">
              Established 2025. Over 20 Years of Industry Experience.
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

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#0a0a0a] rounded-2xl p-7 text-center">
              <p className="text-[40px] font-extrabold text-white leading-none">20+</p>
              <p className="mt-2 text-[13px] text-white/40 font-medium">Years of Industry Experience</p>
            </div>
            <div className="bg-[#0a0a0a] rounded-2xl p-7 text-center">
              <p className="text-[40px] font-extrabold text-white leading-none">5,000+</p>
              <p className="mt-2 text-[13px] text-white/40 font-medium">Clients Served</p>
            </div>
            <div className="bg-[#0a0a0a] rounded-2xl p-7 text-center">
              <p className="text-[40px] font-extrabold text-white leading-none">1M+</p>
              <p className="mt-2 text-[13px] text-white/40 font-medium">Units Delivered</p>
            </div>
          </div>
        </div>

        {/* What sets us apart */}
        <section className="mt-20">
          <p className="text-sm font-semibold text-gray-400 tracking-wide">Our Values</p>
          <h2 className="mt-2 text-[28px] font-extrabold text-[#0a0a0a]">What Sets Us Apart</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Quality First", desc: "Every laptop we sell — whether new or refurbished — goes through a thorough inspection process. We stand behind every unit we ship." },
              { title: "Transparent Pricing", desc: "No hidden fees, no bait-and-switch. We provide clear, competitive bulk pricing so you can plan your procurement budget with confidence." },
              { title: "Reliable Supply", desc: "We maintain deep inventory across major business laptop brands so you can count on availability when you need to place an order." },
              { title: "Fast Turnaround", desc: "From quote to delivery, we move quickly. Most quotes are returned within hours, and orders are processed and shipped promptly." },
            ].map((v) => (
              <div key={v.title} className="bg-[#fafafa] border border-gray-200/60 rounded-xl p-6">
                <h3 className="font-bold text-[#0a0a0a]">{v.title}</h3>
                <p className="mt-2 text-[14px] text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who we serve */}
        <section className="mt-20">
          <p className="text-sm font-semibold text-gray-400 tracking-wide">Our Clients</p>
          <h2 className="mt-2 text-[28px] font-extrabold text-[#0a0a0a]">Who We Serve</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "IT Resellers & VARs", desc: "Stock your inventory with reliable business laptops at wholesale pricing." },
              { title: "Businesses & Corporations", desc: "Equip your workforce with quality machines for less." },
              { title: "Schools & Universities", desc: "Outfit classrooms and labs with dependable laptops at education-friendly prices." },
              { title: "Government & Nonprofits", desc: "Stretch your procurement budget with volume pricing from a trusted supplier." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 bg-white border border-gray-200/60 rounded-xl">
                <div className="w-2 h-2 mt-2 bg-[#0a0a0a] rounded-full shrink-0" />
                <div>
                  <h3 className="font-bold text-[#0a0a0a]">{item.title}</h3>
                  <p className="mt-1 text-[14px] text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 bg-[#0a0a0a] rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-[28px] font-extrabold text-white">Let&apos;s Work Together</h2>
          <p className="mt-4 text-white/35 max-w-lg mx-auto text-[15px]">
            Whether you have a specific order in mind or want to discuss your procurement needs,
            our team is ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-[#0a0a0a] font-semibold px-9 py-3.5 rounded-lg hover:bg-white/90 transition text-sm"
          >
            Contact Us Now
          </Link>
        </section>
      </div>
    </>
  );
}
