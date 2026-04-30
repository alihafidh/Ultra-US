"use client";

const brands = [
  "DELL", "HP", "Lenovo", "Apple", "ASUS", "Acer", "Microsoft", "Samsung",
];

export default function BrandCarousel() {
  return (
    <section className="py-10 sm:py-14 border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <p className="text-center text-[12px] font-semibold uppercase tracking-widest text-neutral-400">
          Authorized Brands
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex items-center gap-12 sm:gap-16 w-max">
          {[...brands, ...brands].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-[18px] sm:text-[22px] font-bold text-neutral-300 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
