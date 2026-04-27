"use client";

import { useSearchParams } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";

export default function ContactInfo() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || undefined;

  return <QuoteForm defaultProduct={product} />;
}
