import { Suspense } from "react";
import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import ContactInfo from "./ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us — Ultra US | Request a Quote",
  description:
    "Get in touch with Ultra US for bulk laptop pricing, inventory questions, or custom procurement needs. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page banner */}
      <section className="animated-gradient noise py-16 relative overflow-hidden">
        <div className="orb-blue absolute top-0 right-[20%] w-[300px] h-[300px] bg-blue-500/[0.08] rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-sm font-semibold text-blue-300/60 tracking-wide animate-fade-up">Get In Touch</p>
          <h1 className="mt-2 text-[38px] font-extrabold text-white leading-tight animate-fade-up animate-fade-up-delay-1">
            Contact <span className="text-shimmer">Us</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-[24px] font-extrabold text-[#0a0a0a]">Request a <span className="gradient-text">Quote</span></h2>
            <p className="mt-2 text-[15px] text-gray-500">
              Tell us what you need and our sales team will get back to you with pricing
              within one business day.
            </p>
            <div className="mt-8 bg-white border border-gray-200/60 rounded-xl p-6 md:p-8 shadow-sm">
              <Suspense fallback={<QuoteForm />}>
                <ContactInfo />
              </Suspense>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="animated-gradient noise rounded-xl p-7 text-white relative overflow-hidden">
              <div className="orb-blue absolute top-0 right-0 w-[150px] h-[150px] bg-blue-500/[0.1] rounded-full blur-[40px] pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold">Contact Information</h3>
                <div className="mt-6 space-y-5 text-[14px]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-white/50">(646) 371-0603</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-white/50">info@ultraedgehub.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Hours</p>
                      <p className="text-white/50">Monday – Friday</p>
                      <p className="text-white/50">9:00 AM – 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-[#0a0a0a]">Why Contact Us?</h3>
              <ul className="mt-4 space-y-3 text-[14px] text-gray-500">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom pricing based on your volume
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time availability confirmation
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Dedicated account support
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No obligation, no pressure
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-100/50 rounded-xl p-6">
              <h3 className="font-bold text-[#0a0a0a]">Bulk Orders (500+ units)</h3>
              <p className="mt-2 text-[14px] text-gray-500">
                For orders over 500 units, we offer additional volume discounts
                and can arrange custom configurations. Mention your quantity and
                we&apos;ll include tiered pricing in your quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
