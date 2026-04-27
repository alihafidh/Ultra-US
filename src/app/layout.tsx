import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ultra US — Wholesale Laptop Distributor | Bulk Electronics Supply",
  description:
    "Ultra US is a US-based wholesale distributor of business-grade laptops and consumer electronics. 20+ years of experience serving businesses, resellers, schools, and institutions nationwide.",
  keywords: "wholesale laptops, bulk laptops, laptop distributor, business electronics, IT procurement, bulk electronics, wholesale electronics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
