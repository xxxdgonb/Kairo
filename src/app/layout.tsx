import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kairo – AI Investment Companion",
  description: "Your AI-powered investment companion for global markets. Track portfolios, analyze stocks, and make informed decisions.",
  keywords: ["investment", "AI", "stocks", "crypto", "portfolio tracking", "financial analysis"],
  authors: [{ name: "Kairo Team" }],
  creator: "Kairo",
  publisher: "Kairo",
  robots: "index, follow",
  openGraph: {
    title: "Kairo – AI Investment Companion",
    description: "Track portfolios, analyze stocks, and make informed decisions with AI.",
    type: "website",
    locale: "en_US",
    siteName: "Kairo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairo – AI Investment Companion",
    description: "Your AI-powered investment companion for global markets.",
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}