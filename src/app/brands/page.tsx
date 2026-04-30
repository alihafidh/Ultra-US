import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const brands = [
  {
    name: "Dell",
    description: "The backbone of enterprise IT. Dell's Latitude and Precision lines are built for reliability, manageability, and the demands of large-scale deployments.",
    models: ["Latitude", "Precision", "OptiPlex"],
    color: "bg-blue-500",
    lightColor: "bg-blue-50 text-blue-600",
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80",
  },
  {
    name: "HP",
    description: "EliteBook and ProBook deliver commercial-grade durability with enterprise security. A staple in corporate IT environments worldwide.",
    models: ["EliteBook", "ProBook", "ProDesk"],
    color: "bg-sky-500",
    lightColor: "bg-sky-50 text-sky-600",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80",
  },
  {
    name: "Lenovo",
    description: "ThinkPad is the gold standard for business laptops — iconic keyboard, legendary durability, and performance that IT departments trust.",
    models: ["ThinkPad", "ThinkCentre", "IdeaPad"],
    color: "bg-red-500",
    lightColor: "bg-red-50 text-red-600",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
  },
  {
    name: "Apple",
    description: "MacBook Pro and Air combine premium build quality with Apple Silicon power. The choice for creative professionals and forward-thinking enterprises.",
    models: ["MacBook Pro", "MacBook Air", "iMac"],
    color: "bg-gray-700",
    lightColor: "bg-gray-100 text-gray-600",
    img: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=400&q=80",
  },
  {
    name: "ASUS",
    description: "ExpertBook delivers enterprise-grade security and manageability. ZenBook and VivoBook cover a full range of business and productivity needs.",
    models: ["ExpertBook", "ZenBook", "VivoBook"],
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50 text-indigo-600",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
  },
  {
    name: "Acer",
    description: "TravelMate offers budget-friendly yet capable business laptops built for professionals on the move. Swift and Aspire round out the lineup.",
    models: ["TravelMate", "Aspire", "Swift"],
    color: "bg-green-500",
    lightColor: "bg-green-50 text-green-600",
    img: "https://images.unsplash.com/photo-1587614297882-0954a02d57f7?w=400&q=80",
  },
  {
    name: "Microsoft",
    description: "Surface Pro and Surface Laptop blend versatility and performance — ideal for organizations that need flexible 2-in-1 form factors.",
    models: ["Surface Pro", "Surface Laptop", "Surface Go"],
    color: "bg-cyan-500",
    lightColor: "bg-cyan-50 text-cyan-600",
    img: "https://images.unsplash.com/photo-1617071952237-4df851083994?w=400&q=80",
  },
  {
    name: "Samsung",
    description: "Galaxy Book delivers lightweight laptops with stunning AMOLED displays and all-day battery life. Perfect for mobile-first teams.",
    models: ["Galaxy Book", "Galaxy Tab", "Odyssey"],
    color: "bg-violet-500",
    lightColor: "bg-violet-50 text-violet-600",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80",
  },
];

export default function BrandsPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24">
          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-4 animate-fade-up">Our Brands</span>
          <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-extrabold text-white leading-[1.08] animate-fade-up animate-fade-up-delay-1">
            Brands We Distribute
          </h1>
          <p className="mt-4 text-gray-400 text-[15px] sm:text-base max-w-lg animate-fade-up animate-fade-up-delay-2 leading-relaxed">
            We partner with the world&apos;s most trusted technology manufacturers to deliver business-grade laptops at wholesale prices.
          </p>
          {/* Brand pills */}
          <div className="mt-8 flex flex-wrap gap-2 animate-fade-up animate-fade-up-delay-3">
            {brands.map((b) => (
              <span key={b.name} className="px-3 py-1.5 bg-white/[0.06] border border-white/[0.08] rounded-full text-[13px] text-gray-300 font-medium">
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {[
              { val: "8", label: "Major Brands" },
              { val: "100+", label: "Product Lines" },
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

      {/* Brands grid */}
      <section className="py-14 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-3">Catalog</span>
              <h2 className="text-[24px] sm:text-[34px] font-extrabold text-gray-900">Explore Our Brands</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {brands.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 60}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden h-full shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative h-[140px] sm:h-[160px] overflow-hidden">
                    <Image
                      src={brand.img}
                      alt={brand.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className={`${brand.color} px-3 py-1 rounded-lg`}>
                        <span className="text-white text-[13px] font-bold">{brand.name}</span>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">{brand.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {brand.models.map((model) => (
                        <span key={model} className={`${brand.lightColor} text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded`}>
                          {model}
                        </span>
                      ))}
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-1 mt-4 text-blue-600 hover:text-blue-700 text-[13px] font-semibold transition-colors group/link">
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

      {/* CTA */}
      <section className="bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 text-center relative">
            <h2 className="text-[24px] sm:text-[34px] font-extrabold text-white leading-tight">Need Bulk Pricing?</h2>
            <p className="mt-4 text-gray-400 text-[15px] max-w-md mx-auto">
              Tell us the brand, model, and quantity — we&apos;ll respond with competitive wholesale pricing within one business day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition text-[14px] shadow-lg shadow-blue-600/20">
                Request a Quote
              </Link>
              <Link href="/" className="bg-white/[0.06] border border-white/[0.12] text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/[0.1] transition text-[14px]">
                Back to Home
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
