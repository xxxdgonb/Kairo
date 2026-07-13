"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">Kairo</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/dashboard" className="text-sm text-gray-300 hover:text-white transition-colors">Dashboard</Link>
            <Link href="/search" className="text-sm text-gray-300 hover:text-white transition-colors">Market</Link>
            <Link href="/learn" className="text-sm text-gray-300 hover:text-white transition-colors">Learn</Link>
            <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-300 hover:text-white transition-colors">Sign In</Link>
            <Link href="/login?signup=true" className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">Get Started Free</Link>
          </div>
          <button className="md:hidden text-gray-300" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/5 pt-4">
            <Link href="/dashboard" className="block text-sm text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            <Link href="/search" className="block text-sm text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>Market</Link>
            <Link href="/learn" className="block text-sm text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>Learn</Link>
            <Link href="/pricing" className="block text-sm text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link href="/login" className="text-center text-sm text-gray-300 py-2" onClick={() => setMobileOpen(false)}>Sign In</Link>
              <Link href="/login?signup=true" className="text-center text-sm bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={() => setMobileOpen(false)}>Get Started Free</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}