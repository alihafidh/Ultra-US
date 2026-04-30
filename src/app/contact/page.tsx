import { Suspense } from "react";
import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import ContactInfo from "./ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us — Ultra US | Request a Quote",
  description: "Get in touch with Ultra US for bulk laptop pricing and procurement needs.",
};

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=30')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-[11px] font-semibold uppercase tracking-widest rounded-full mb-4 animate-fade-up">Get In Touch</span>
          <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-extrabold text-white leading-[1.08] animate-fade-up animate-fade-up-delay-1">Request a Quote</h1>
          <p className="mt-4 text-gray-400 text-[15px] max-w-lg animate-fade-up animate-fade-up-delay-2">
            Tell us what you need — pricing returned within one business day.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-7 md:p-8 shadow-sm">
              <Suspense fallback={<QuoteForm />}>
                <ContactInfo />
              </Suspense>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-blue-600 rounded-2xl p-5 sm:p-6 text-white">
              <h3 className="font-bold text-[15px] mb-5">Contact Information</h3>
              <div className="space-y-4 text-[14px]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[13px]">Phone</p>
                    <a href="tel:+16463710603" className="text-blue-100/70 hover:text-white transition">(646) 371-0603</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[13px]">Email</p>
                    <a href="mailto:info@ultraedgehub.com" className="text-blue-100/70 hover:text-white transition">info@ultraedgehub.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[13px]">Hours</p>
                    <p className="text-blue-100/70">Mon – Fri, 9 AM – 6 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 text-[15px] mb-3">What to Include</h3>
              <ul className="space-y-2.5 text-[13px] text-gray-500">
                {["Brand and model preferences", "Quantity (50, 100, 500+)", "New, refurbished, or either", "Target delivery date", "Special configurations"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-6">
              <h3 className="font-bold text-gray-900 text-[15px] mb-2">Bulk Orders (500+)</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Tiered pricing and custom configurations available. Mention your quantity for a tailored quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
