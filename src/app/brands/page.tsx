import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const brands = [
  {
    name: "Dell",
    color: "#007DB8",
    logo: <span className="text-[20px] font-extrabold tracking-tight">DELL</span>,
    description:
      "A global leader in business laptops, desktops, and enterprise solutions. Dell's Latitude and Precision lines are trusted by businesses worldwide.",
    categories: ["Laptops", "Desktops", "Workstations"],
    popular: "Latitude, Precision, Optiplex",
  },
  {
    name: "HP",
    color: "#0096D6",
    logo: <span className="text-[24px] font-light tracking-tight italic">hp</span>,
    description:
      "HP delivers reliable commercial notebooks and desktops. The EliteBook and ProBook series are designed for the modern enterprise workforce.",
    categories: ["Laptops", "Desktops", "Printers"],
    popular: "EliteBook, ProBook, ProDesk",
  },
  {
    name: "Lenovo",
    color: "#E2231A",
    logo: <span className="text-[16px] font-bold tracking-tight">lenovo</span>,
    description:
      "Lenovo's ThinkPad series is the gold standard for business laptops, known for durability, performance, and iconic keyboard design.",
    categories: ["Laptops", "Desktops", "Tablets"],
    popular: "ThinkPad, ThinkCentre, IdeaPad",
  },
  {
    name: "Apple",
    color: "#555555",
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    description:
      "Apple's MacBook lineup combines premium build quality with the power of Apple Silicon. A top choice for creative professionals and enterprises.",
    categories: ["Laptops", "Desktops", "Tablets"],
    popular: "MacBook Pro, MacBook Air, iMac",
  },
  {
    name: "ASUS",
    color: "#00539B",
    logo: <span className="text-[16px] font-extrabold tracking-[0.12em]">ASUS</span>,
    description:
      "ASUS offers a wide range of business and consumer laptops. The ExpertBook series delivers enterprise-grade security and manageability.",
    categories: ["Laptops", "Desktops", "Monitors"],
    popular: "ExpertBook, ZenBook, VivoBook",
  },
  {
    name: "Acer",
    color: "#83B81A",
    logo: <span className="text-[18px] font-normal tracking-tight">acer</span>,
    description:
      "Acer provides budget-friendly yet capable business laptops. The TravelMate series is built for professionals on the move.",
    categories: ["Laptops", "Desktops", "Chromebooks"],
    popular: "TravelMate, Aspire, Swift",
  },
  {
    name: "Microsoft",
    color: "#737373",
    logo: (
      <div className="flex flex-col items-center gap-1">
        <div className="grid grid-cols-2 gap-[2px] w-5 h-5">
          <div style={{ backgroundColor: "#F25022" }} className="rounded-[1px]" />
          <div style={{ backgroundColor: "#7FBA00" }} className="rounded-[1px]" />
          <div style={{ backgroundColor: "#00A4EF" }} className="rounded-[1px]" />
          <div style={{ backgroundColor: "#FFB900" }} className="rounded-[1px]" />
        </div>
        <span className="text-[11px] font-semibold tracking-tight">Microsoft</span>
      </div>
    ),
    description:
      "Microsoft Surface devices blend versatility and performance. Ideal for businesses that need flexible 2-in-1 laptops and tablets.",
    categories: ["Laptops", "Tablets", "Accessories"],
    popular: "Surface Pro, Surface Laptop, Surface Go",
  },
  {
    name: "Samsung",
    color: "#1428A0",
    logo: <span className="text-[13px] font-bold tracking-[0.1em]">SAMSUNG</span>,
    description:
      "Samsung's Galaxy Book series offers lightweight, powerful laptops with stunning displays — perfect for mobile professionals.",
    categories: ["Laptops", "Tablets", "Monitors"],
    popular: "Galaxy Book, Galaxy Tab, Odyssey",
  },
];

export default function BrandsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative animated-gradient noise overflow-hidden">
        <div className="orb-blue absolute top-20 right-[20%] w-[400px] h-[400px] bg-blue-500/[0.08] rounded-full blur-[80px] pointer-events-none" />
        <div className="orb-indigo absolute bottom-10 left-[10%] w-[300px] h-[300px] bg-violet-500/[0.06] rounded-full blur-[60px] pointer-events-none" />
        <div className="spin-slow absolute top-1/2 right-[15%] -translate-y-1/2 w-[400px] h-[400px] border border-blue-400/[0.06] rounded-full pointer-events-none hidden lg:block" />
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              Our Brands
            </span>
            <h1 className="text-[32px] sm:text-[42px] md:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight animate-fade-up animate-fade-up-delay-1">
              Brands We{" "}
              <span className="text-shimmer">Distribute</span>
            </h1>
            <p className="mt-6 text-[17px] text-white/50 leading-relaxed max-w-lg animate-fade-up animate-fade-up-delay-2">
              We partner with the world&apos;s most trusted technology manufacturers to
              deliver high-quality laptops and electronics at wholesale prices.
            </p>
          </div>

          {/* Floating brand logos preview in hero */}
          <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 animate-fade-up animate-fade-up-delay-3">
            {brands.slice(0, 4).map((brand) => (
              <div
                key={brand.name}
                className="w-16 h-16 rounded-xl glass flex items-center justify-center"
                style={{ color: brand.color }}
              >
                <span className="text-[14px] font-bold text-white/80">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand count bar */}
      <section className="relative -mt-8 z-10 px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale">
          <div className="max-w-3xl mx-auto gradient-border p-2">
            <div className="bg-white rounded-[14px] overflow-hidden">
              <div className="grid grid-cols-3">
                <div className="text-center py-5 px-4 border-r border-gray-100">
                  <p className="text-[32px] font-extrabold gradient-text-blue leading-none">8</p>
                  <p className="mt-1 text-[11px] text-gray-400 font-medium tracking-wide uppercase">Major Brands</p>
                </div>
                <div className="text-center py-5 px-4 border-r border-gray-100">
                  <p className="text-[32px] font-extrabold gradient-text-blue leading-none">100+</p>
                  <p className="mt-1 text-[11px] text-gray-400 font-medium tracking-wide uppercase">Product Lines</p>
                </div>
                <div className="text-center py-5 px-4">
                  <p className="text-[32px] font-extrabold gradient-text-blue leading-none">1M+</p>
                  <p className="mt-1 text-[11px] text-gray-400 font-medium tracking-wide uppercase">Units Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Brands grid */}
      <section className="py-16 md:py-24 mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brands.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="card-hover group bg-white rounded-2xl border border-gray-200/60 overflow-hidden h-full relative">
                  {/* Top colored accent bar */}
                  <div className="h-1 w-full" style={{ backgroundColor: brand.color }} />

                  <div className="p-5 md:p-8">
                    <div className="flex items-start gap-5 mb-5">
                      {/* Logo box */}
                      <div
                        className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center shrink-0 border overflow-hidden group-hover:scale-110 transition-transform duration-300"
                        style={{
                          color: brand.color,
                          backgroundColor: `${brand.color}08`,
                          borderColor: `${brand.color}20`,
                        }}
                      >
                        {brand.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-extrabold text-[#0a0a0a]">{brand.name}</h2>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {brand.categories.map((cat) => (
                            <span
                              key={cat}
                              className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-lg"
                              style={{ backgroundColor: `${brand.color}0a`, color: brand.color }}
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-[14px] text-gray-400 leading-relaxed">
                      {brand.description}
                    </p>

                    {/* Popular models */}
                    <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-3">
                      <span className="text-[11px] font-semibold text-gray-300 uppercase tracking-wide shrink-0">Popular:</span>
                      <p className="text-[13px] text-gray-500 font-medium">{brand.popular}</p>
                    </div>
                  </div>

                  {/* Bottom hover accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: brand.color }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="py-16 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full tracking-wide uppercase">
                Authorized Distribution
              </span>
              <h2 className="mt-4 text-[28px] font-extrabold text-[#0a0a0a]">
                All Brands at a <span className="gradient-text">Glance</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="scale">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="group bg-white rounded-2xl border border-gray-200/60 p-6 flex flex-col items-center justify-center text-center h-[140px] hover:border-gray-300 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300"
                >
                  <div
                    className="mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: brand.color }}
                  >
                    {brand.logo}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="animated-gradient noise relative overflow-hidden">
        <div className="orb-blue absolute top-0 right-[30%] w-[300px] h-[300px] bg-blue-500/[0.08] rounded-full blur-[80px] pointer-events-none" />
        <div className="spin-slow absolute bottom-0 left-[10%] w-[200px] h-[200px] border border-blue-400/[0.06] rounded-full pointer-events-none" />
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white leading-tight">
              Need <span className="text-shimmer">Bulk Pricing</span>?
            </h2>
            <p className="mt-5 text-white/40 text-[15px] leading-relaxed max-w-xl mx-auto">
              Tell us the brand and quantity you need — our team will get back to you
              with competitive wholesale pricing within one business day.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-9 py-3.5 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Contact Us Now
              </Link>
              <Link
                href="/"
                className="glass text-white font-semibold px-9 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
