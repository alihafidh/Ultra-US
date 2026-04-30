import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const brands = [
  { name: "Dell", models: "Latitude · Precision · OptiPlex", accent: "#007DB8", logo: "https://cdn.worldvectorlogo.com/logos/dell-2.svg" },
  { name: "HP", models: "EliteBook · ProBook · ProDesk", accent: "#0096D6", logo: "https://cdn.worldvectorlogo.com/logos/hp-2.svg" },
  { name: "Lenovo", models: "ThinkPad · ThinkCentre · IdeaPad", accent: "#E2231A", logo: "https://cdn.worldvectorlogo.com/logos/lenovo-2.svg" },
  { name: "Apple", models: "MacBook Pro · MacBook Air · iMac", accent: "#555555", logo: "https://cdn.worldvectorlogo.com/logos/apple-13.svg" },
  { name: "ASUS", models: "ExpertBook · ZenBook · VivoBook", accent: "#00539B", logo: "https://cdn.worldvectorlogo.com/logos/asus-4.svg" },
  { name: "Acer", models: "TravelMate · Aspire · Swift", accent: "#83B81A", logo: "https://cdn.worldvectorlogo.com/logos/acer-2.svg" },
  { name: "Microsoft", models: "Surface Pro · Surface Laptop · Surface Go", accent: "#00A4EF", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-6.svg" },
  { name: "Samsung", models: "Galaxy Book · Galaxy Tab · Odyssey", accent: "#1428A0", logo: "https://cdn.worldvectorlogo.com/logos/samsung-8.svg" },
];

export default function BrandsPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative bg-gray-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1400&q=50"
          alt="Business laptops"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 text-center">
          <h1 className="text-[32px] sm:text-[44px] md:text-[56px] font-extrabold text-white leading-[1.05] animate-fade-up">
            The Brands You Trust
          </h1>
          <p className="mt-4 text-gray-400 text-[15px] sm:text-[17px] max-w-md mx-auto animate-fade-up animate-fade-up-delay-1">
            All available at wholesale prices, ready for bulk order.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap animate-fade-up animate-fade-up-delay-2">
            <Link href="/contact" className="bg-blue-600 text-white font-semibold px-7 py-3 rounded-lg hover:bg-blue-700 transition text-[14px] shadow-lg shadow-blue-600/25">
              Get Bulk Pricing
            </Link>
            <a href="tel:+16463710603" className="bg-white/10 border border-white/15 text-white font-medium px-7 py-3 rounded-lg hover:bg-white/15 transition text-[14px]">
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Brand logos grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-[24px] sm:text-[34px] font-extrabold text-gray-900">8 Brands, One Source</h2>
              <p className="mt-2 text-gray-400 text-[15px]">Every major business laptop manufacturer under one roof.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {brands.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 50}>
                <Link href="/contact" className="block group">
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 text-center hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center">
                    {/* Logo */}
                    <div className="h-10 sm:h-12 flex items-center justify-center mb-5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-h-full max-w-[120px] sm:max-w-[140px] object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                    {/* Models */}
                    <p className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed">{brand.models}</p>
                    {/* Hover CTA */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-blue-600 text-[13px] font-semibold">Get Pricing →</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we stock */}
      <section className="py-16 sm:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Inventory</span>
                <h2 className="text-[24px] sm:text-[32px] font-extrabold text-gray-900 leading-tight">
                  New & Refurbished.<br />Always in Stock.
                </h2>
                <p className="mt-4 text-gray-500 text-[15px] leading-relaxed max-w-md">
                  We maintain deep inventory across all eight brands — from entry-level business machines to premium workstations. Every refurbished unit is certified and inspection-backed.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { val: "100+", label: "Models" },
                    { val: "1M+", label: "Shipped" },
                    { val: "50", label: "States" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-[24px] sm:text-[28px] font-extrabold text-blue-600 leading-none">{s.val}</p>
                      <p className="mt-0.5 text-[11px] text-gray-400 font-medium uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { src: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80", label: "Business" },
                  { src: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=400&q=80", label: "Premium" },
                  { src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80", label: "Workstation" },
                  { src: "https://images.unsplash.com/photo-1587614297882-0954a02d57f7?w=400&q=80", label: "2-in-1" },
                ].map((img) => (
                  <div key={img.label} className="relative rounded-xl overflow-hidden aspect-square group">
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-white text-[13px] font-semibold">{img.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
            <h2 className="text-[24px] sm:text-[34px] font-extrabold text-white leading-tight">
              Ready for a Quote?
            </h2>
            <p className="mt-3 text-blue-100/60 text-[15px] max-w-md mx-auto">
              Tell us the brand and quantity — competitive pricing returned within one business day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition text-[14px] shadow-lg">
                Request a Quote
              </Link>
              <Link href="/" className="bg-white/10 border border-white/20 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/15 transition text-[14px]">
                Back to Home
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
