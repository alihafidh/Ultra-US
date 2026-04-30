"use client";

import { useState } from "react";

export default function QuoteForm({ defaultProduct }: { defaultProduct?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900">Inquiry Received</h3>
        <p className="mt-2 text-[14px] text-gray-500">
          Our team will review your request and respond within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition";

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Full Name *</label>
          <input required type="text" placeholder="John Smith" className={inputClass} />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Company *</label>
          <input required type="text" placeholder="Acme Corp" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Email *</label>
          <input required type="email" placeholder="john@acme.com" className={inputClass} />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Phone</label>
          <input type="tel" placeholder="(555) 123-4567" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Product Interest</label>
          <input type="text" defaultValue={defaultProduct || ""} placeholder="e.g. Dell Latitude 5540" className={inputClass} />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Quantity</label>
          <input type="text" placeholder="e.g. 50, 100, 500+" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Message</label>
        <textarea rows={4} placeholder="Tell us about your requirements, timeline, or any questions..." className={`${inputClass} resize-none`} />
      </div>
      <button type="submit" className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition text-[14px] shadow-sm shadow-blue-600/20">
        Submit Inquiry
      </button>
    </form>
  );
}
