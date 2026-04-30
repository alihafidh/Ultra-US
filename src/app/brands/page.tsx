import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const brands = [
  {
    name: "Dell",
    tagline: "Enterprise IT backbone",
    description: "Latitude, Precision, and OptiPlex — built for reliability and large-scale deployments trusted by IT departments worldwide.",
    models: ["Latitude", "Precision", "OptiPlex"],
    accent: "#007DB8",
  },
  {
    name: "HP",
    tagline: "Commercial-grade durability",
    description: "EliteBook and ProBook deliver enterprise security with modern design. A staple in corporate environments globally.",
    models: ["EliteBook", "ProBook", "ProDesk"],
    accent: "#0096D6",
  },
  {
    name: "Lenovo",
    tagline: "The ThinkPad standard",
    description: "Iconic keyboard. Legendary durability. ThinkPad is the business laptop that set the standard everyone else follows.",
    models: ["ThinkPad", "ThinkCentre", "IdeaPad"],
    accent: "#E2231A",
  },
  {
    name: "Apple",
    tagline: "Premium performance",
    description: "MacBook Pro and Air combine best-in-class build quality with Apple Silicon. The choice for creative and enterprise teams.",
    models: ["MacBook Pro", "MacBook Air", "iMac"],
    accent: "#555555",
  },
  {
    name: "ASUS",
    tagline: "Enterprise security",
    description: "ExpertBook delivers enterprise-grade security and manageability. ZenBook and VivoBook round out the productivity lineup.",
    models: ["ExpertBook", "ZenBook", "VivoBook"],
    accent: "#00539B",
  },
  {
    name: "Acer",
    tagline: "Budget-friendly business",
    description: "TravelMate offers capable business laptops at great price points. Built for professionals who need value without compromise.",
    models: ["TravelMate", "Aspire", "Swift"],
    accent: "#83B81A",
  },
  {
    name: "Microsoft",
    tagline: "Versatile 2-in-1 devices",
    description: "Surface Pro and Surface Laptop blend versatility and power — perfect for organizations that need flexible form factors.",
    models: ["Surface Pro", "Surface Laptop", "Surface Go"],
    accent: "#00A4EF",
  },
  {
    name: "Samsung",
    tagline: "Lightweight powerhouses",
    description: "Galaxy Book delivers stunning AMOLED displays and all-day battery in a lightweight chassis. Built for mobile-first teams.",
    models: ["Galaxy Book", "Galaxy Tab", "Odyssey"],
    accent: "#1428A0",
  },
];

export default function BrandsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-4 animate-fade-up">Our Brands</span>
            <h1 className="text-[30px] sm:text-[40px] md:text-[50px] font-extrabold text-gray-900 leading-[1.08] animate-fade-up animate-fade-up-delay-1">
              8 Trusted Brands.<br />
              <span className="text-gray-300">One Wholesale Source.</span>
            </h1>
            <p className="mt-5 text-gray-500 text-[15px] sm:text-base max-w-md animate-fade-up animate-fade-up-delay-2 leading-relaxed">
              We stock business-grade laptops from the manufacturers your organization already trusts — all available at competitive bulk pricing.
            </p>
          </div>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap gap-6 sm:gap-10 animate-fade-up animate-fade-up-delay-3">
            {[
              { val: "8", label: "Brands" },
              { val: "100+", label: "Product Lines" },
              { val: "1M+", label: "Units Shipped" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[28px] sm:text-[34px] font-extrabold text-blue-600 leading-none">{s.val}</p>
                <p className="mt-0.5 text-[11px] text-gray-400 font-medium uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-14 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-5">
            {brands.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 40}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div className="flex flex-col sm:flex-row">
                    {/* Left: brand identity */}
                    <div className="sm:w-[200px] md:w-[240px] shrink-0 p-6 sm:p-8 flex flex-col justify-center items-start sm:items-center sm:text-center border-b sm:border-b-0 sm:border-r border-gray-100" style={{ borderBottomColor: brand.accent + "20" }}>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform" style={{ backgroundColor: brand.accent + "10" }}>
                        <span className="text-[16px] font-extrabold tracking-tight" style={{ color: brand.accent }}>{brand.name}</span>
                      </div>
                      <p className="text-[12px] text-gray-400 font-medium">{brand.tagline}</p>
                    </div>

                    {/* Right: content */}
                    <div className="flex-1 p-6 sm:p-8">
                      <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">{brand.description}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] text-gray-300 font-medium uppercase tracking-wider mr-1">Models:</span>
                        {brand.models.map((model) => (
                          <span
                            key={model}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
                            style={{ backgroundColor: brand.accent + "0a", color: brand.accent }}
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 text-center relative">
            <h2 className="text-[24px] sm:text-[34px] font-extrabold text-white leading-tight">
              Need Pricing on a<br />Specific Brand?
            </h2>
            <p className="mt-4 text-gray-400 text-[15px] max-w-md mx-auto">
              Tell us the brand, model, and quantity. Competitive wholesale pricing returned within one business day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition text-[14px] shadow-lg shadow-blue-600/20">
                Request a Quote
              </Link>
              <Link href="/" className="bg-white/[0.06] border border-white/[0.1] text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/[0.1] transition text-[14px]">
                Back to Home
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
