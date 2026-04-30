import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const brands = [
  { name: "Dell", description: "Latitude, Precision, OptiPlex — the backbone of enterprise IT.", popular: "Latitude, Precision, OptiPlex", color: "bg-blue-50 text-blue-600" },
  { name: "HP", description: "EliteBook and ProBook — commercial-grade durability and security.", popular: "EliteBook, ProBook, ProDesk", color: "bg-sky-50 text-sky-600" },
  { name: "Lenovo", description: "ThinkPad — the gold standard for business laptops.", popular: "ThinkPad, ThinkCentre, IdeaPad", color: "bg-red-50 text-red-600" },
  { name: "Apple", description: "MacBook Pro and Air — premium build meets Apple Silicon power.", popular: "MacBook Pro, MacBook Air, iMac", color: "bg-gray-100 text-gray-600" },
  { name: "ASUS", description: "ExpertBook — enterprise security and manageability.", popular: "ExpertBook, ZenBook, VivoBook", color: "bg-indigo-50 text-indigo-600" },
  { name: "Acer", description: "TravelMate — budget-friendly business laptops that deliver.", popular: "TravelMate, Aspire, Swift", color: "bg-green-50 text-green-600" },
  { name: "Microsoft", description: "Surface — versatile 2-in-1 devices for the modern workplace.", popular: "Surface Pro, Surface Laptop", color: "bg-cyan-50 text-cyan-600" },
  { name: "Samsung", description: "Galaxy Book — lightweight power with stunning displays.", popular: "Galaxy Book, Galaxy Tab", color: "bg-violet-50 text-violet-600" },
];

export default function BrandsPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24">
          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-4 animate-fade-up">Our Brands</span>
          <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-extrabold text-white leading-[1.08] animate-fade-up animate-fade-up-delay-1">Brands We Distribute</h1>
          <p className="mt-4 text-gray-400 text-[15px] max-w-lg animate-fade-up animate-fade-up-delay-2 leading-relaxed">
            Trusted manufacturers. Wholesale prices. Business-grade quality.
          </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brands.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 60}>
                <div className="card-lift bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 h-full shadow-sm group">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`w-14 h-14 ${brand.color} rounded-xl flex items-center justify-center shrink-0 font-extrabold text-[14px] tracking-tight group-hover:scale-105 transition-transform`}>
                      {brand.name}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[17px] font-bold text-gray-900">{brand.name}</h2>
                      <p className="text-[12px] text-gray-400 mt-0.5">Popular: {brand.popular}</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{brand.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 text-center">
            <h2 className="text-[24px] sm:text-[34px] font-extrabold text-white leading-tight">Need Bulk Pricing?</h2>
            <p className="mt-4 text-blue-100/60 text-[15px] max-w-md mx-auto">
              Tell us the brand and quantity — we&apos;ll respond with pricing within one business day.
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
