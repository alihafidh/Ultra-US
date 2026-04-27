"use client";

import { useState } from "react";

export default function QuoteForm({ defaultProduct }: { defaultProduct?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-3xl mb-3">&#10003;</div>
        <h3 className="text-lg font-bold text-green-800">Thank you for your inquiry</h3>
        <p className="mt-2 text-sm text-green-700">
          Our sales team will review your request and get back to you within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
          <input required type="text" placeholder="John Smith" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Company *</label>
          <input required type="text" placeholder="Acme Corp" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
          <input required type="email" placeholder="john@acme.com" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
          <input type="tel" placeholder="(555) 123-4567" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Product Interest</label>
          <input type="text" defaultValue={defaultProduct || ""} placeholder="e.g. Dell Latitude 5540" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Quantity Needed</label>
          <input type="text" placeholder="e.g. 50, 100, 500+" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
        <textarea rows={4} placeholder="Tell us about your requirements, timeline, or any questions..." className={`${inputClass} resize-none`} />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-[#0a0a0a] text-white font-semibold px-9 py-3 rounded-lg hover:bg-[#1a1a1a] transition text-sm"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
