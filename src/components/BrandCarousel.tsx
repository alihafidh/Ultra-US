"use client";

import { useRef, useEffect, useState } from "react";

const brands = [
  {
    name: "Dell",
    logo: (
      <span className="text-[32px] font-extrabold tracking-tight" style={{ color: "#007DB8" }}>
        DELL
      </span>
    ),
  },
  {
    name: "HP",
    logo: (
      <span className="text-[34px] font-light tracking-tight italic" style={{ color: "#0096D6" }}>
        hp
      </span>
    ),
  },
  {
    name: "Lenovo",
    logo: (
      <span className="text-[26px] font-bold tracking-tight" style={{ color: "#E2231A" }}>
        lenovo
      </span>
    ),
  },
  {
    name: "Apple",
    logo: (
      <svg className="w-9 h-9" viewBox="0 0 24 24" fill="#555555">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    name: "ASUS",
    logo: (
      <span className="text-[26px] font-extrabold tracking-[0.15em]" style={{ color: "#00539B" }}>
        ASUS
      </span>
    ),
  },
  {
    name: "Acer",
    logo: (
      <span className="text-[28px] font-normal tracking-tight" style={{ color: "#83B81A" }}>
        acer
      </span>
    ),
  },
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-2">
        <div className="grid grid-cols-2 gap-[3px] w-5 h-5">
          <div style={{ backgroundColor: "#F25022" }} className="rounded-[1px]" />
          <div style={{ backgroundColor: "#7FBA00" }} className="rounded-[1px]" />
          <div style={{ backgroundColor: "#00A4EF" }} className="rounded-[1px]" />
          <div style={{ backgroundColor: "#FFB900" }} className="rounded-[1px]" />
        </div>
        <span className="text-[22px] font-semibold tracking-tight" style={{ color: "#737373" }}>
          Microsoft
        </span>
      </div>
    ),
  },
  {
    name: "Samsung",
    logo: (
      <span className="text-[22px] font-bold tracking-[0.12em]" style={{ color: "#1428A0" }}>
        SAMSUNG
      </span>
    ),
  },
];

// Double the brands for seamless infinite scroll
const allBrands = [...brands, ...brands];

export default function BrandCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let lastTime = 0;
    const speed = 0.5;

    const step = (timestamp: number) => {
      if (!isPaused && el) {
        if (lastTime) {
          const delta = timestamp - lastTime;
          el.scrollLeft += speed * (delta / 16);

          const halfWidth = el.scrollWidth / 2;
          if (el.scrollLeft >= halfWidth) {
            el.scrollLeft -= halfWidth;
          }
        }
        lastTime = timestamp;
      } else {
        lastTime = 0;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full tracking-wide uppercase">
            Our Partners
          </span>
          <h2 className="mt-4 text-[34px] font-extrabold text-[#0a0a0a]">
            Brands We Distribute
          </h2>
          <p className="mt-3 text-gray-400 text-[15px] max-w-md mx-auto">
            We partner with the world&apos;s leading technology manufacturers to bring you the best selection.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="shrink-0 w-11 h-11 bg-[#0a0a0a] rounded-lg flex items-center justify-center text-white hover:bg-[#1a1a1a] transition-colors duration-200"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrolling brands */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex-1 overflow-hidden"
          >
            <div className="flex items-center gap-0">
              {allBrands.map((brand, i) => (
                <div
                  key={`${brand.name}-${i}`}
                  className="shrink-0 w-[220px] h-[90px] flex items-center justify-center transition-opacity duration-300 hover:opacity-80 select-none"
                >
                  {brand.logo}
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="shrink-0 w-11 h-11 bg-[#0a0a0a] rounded-lg flex items-center justify-center text-white hover:bg-[#1a1a1a] transition-colors duration-200"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
