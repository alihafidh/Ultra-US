import Link from "next/link";

const brands = [
  {
    name: "Dell",
    color: "#007DB8",
    logo: <span className="text-[42px] font-extrabold tracking-tight">DELL</span>,
    description:
      "A global leader in business laptops, desktops, and enterprise solutions. Dell's Latitude and Precision lines are trusted by businesses worldwide.",
    categories: ["Laptops", "Desktops", "Workstations"],
  },
  {
    name: "HP",
    color: "#0096D6",
    logo: <span className="text-[46px] font-light tracking-tight italic">hp</span>,
    description:
      "HP delivers reliable commercial notebooks and desktops. The EliteBook and ProBook series are designed for the modern enterprise workforce.",
    categories: ["Laptops", "Desktops", "Printers"],
  },
  {
    name: "Lenovo",
    color: "#E2231A",
    logo: <span className="text-[34px] font-bold tracking-tight">lenovo</span>,
    description:
      "Lenovo's ThinkPad series is the gold standard for business laptops, known for durability, performance, and iconic keyboard design.",
    categories: ["Laptops", "Desktops", "Tablets"],
  },
  {
    name: "Apple",
    color: "#555555",
    logo: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    description:
      "Apple's MacBook lineup combines premium build quality with the power of Apple Silicon. A top choice for creative professionals and enterprises.",
    categories: ["Laptops", "Desktops", "Tablets"],
  },
  {
    name: "ASUS",
    color: "#00539B",
    logo: <span className="text-[34px] font-extrabold tracking-[0.15em]">ASUS</span>,
    description:
      "ASUS offers a wide range of business and consumer laptops. The ExpertBook series delivers enterprise-grade security and manageability.",
    categories: ["Laptops", "Desktops", "Monitors"],
  },
  {
    name: "Acer",
    color: "#83B81A",
    logo: <span className="text-[36px] font-normal tracking-tight">acer</span>,
    description:
      "Acer provides budget-friendly yet capable business laptops. The TravelMate series is built for professionals on the move.",
    categories: ["Laptops", "Desktops", "Chromebooks"],
  },
  {
    name: "Microsoft",
    color: "#737373",
    logo: (
      <div className="flex items-center gap-3">
        <div className="grid grid-cols-2 gap-[3px] w-7 h-7">
          <div style={{ backgroundColor: "#F25022" }} className="rounded-[2px]" />
          <div style={{ backgroundColor: "#7FBA00" }} className="rounded-[2px]" />
          <div style={{ backgroundColor: "#00A4EF" }} className="rounded-[2px]" />
          <div style={{ backgroundColor: "#FFB900" }} className="rounded-[2px]" />
        </div>
        <span className="text-[30px] font-semibold tracking-tight">Microsoft</span>
      </div>
    ),
    description:
      "Microsoft Surface devices blend versatility and performance. Ideal for businesses that need flexible 2-in-1 laptops and tablets.",
    categories: ["Laptops", "Tablets", "Accessories"],
  },
  {
    name: "Samsung",
    color: "#1428A0",
    logo: <span className="text-[28px] font-bold tracking-[0.12em]">SAMSUNG</span>,
    description:
      "Samsung's Galaxy Book series offers lightweight, powerful laptops with stunning displays — perfect for mobile professionals.",
    categories: ["Laptops", "Tablets", "Monitors"],
  },
];

export default function BrandsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="orb-1 absolute top-20 right-[20%] w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
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
            <span className="inline-block px-4 py-1.5 bg-white/[0.06] border border-white/10 rounded-full text-white/50 text-xs font-semibold tracking-wider uppercase mb-6">
              Our Brands
            </span>
            <h1 className="text-[42px] md:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight">
              Brands We{" "}
              <span className="text-white/60">Distribute</span>
            </h1>
            <p className="mt-6 text-[17px] text-white/40 leading-relaxed max-w-lg">
              We partner with the world&apos;s most trusted technology manufacturers to
              deliver high-quality laptops and electronics at wholesale prices.
            </p>
          </div>
        </div>
      </section>

      {/* Brands grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="card-hover group bg-white rounded-2xl border border-gray-200/60 p-8 flex flex-col"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center shrink-0"
                    style={{ color: brand.color, backgroundColor: `${brand.color}08` }}
                  >
                    {brand.logo}
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-[#0a0a0a]">{brand.name}</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {brand.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[14px] text-gray-400 leading-relaxed flex-1">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] relative overflow-hidden">
        <div className="orb-1 absolute top-0 right-[30%] w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
          <h2 className="text-[36px] font-extrabold text-white leading-tight">
            Need Bulk Pricing?
          </h2>
          <p className="mt-5 text-white/35 text-[15px] leading-relaxed max-w-xl mx-auto">
            Tell us the brand and quantity you need — our team will get back to you
            with competitive wholesale pricing within one business day.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-[#0a0a0a] font-semibold px-9 py-3.5 rounded-lg hover:bg-white/90 transition-all duration-300 text-sm"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
