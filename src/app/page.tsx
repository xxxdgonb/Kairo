"use client";

import Link from "next/link";
import { TrendingUp, Shield, Globe, Zap, BarChart3, BookOpen, Users, ArrowRight, CheckCircle } from "lucide-react";

const FEATURES = [
  { icon: BarChart3, title: "Portfolio Tracking", desc: "Manually or auto-sync your holdings. Track real-time P&L across stocks, crypto, and funds.", color: "from-blue-500 to-cyan-500" },
  { icon: TrendingUp, title: "AI Analysis", desc: "Get instant stock analysis, valuation checks, and risk assessments powered by AI.", color: "from-purple-500 to-pink-500" },
  { icon: Globe, title: "Global Markets", desc: "Access data from NYSE, NASDAQ, HKEX, Bursa Malaysia, and more.", color: "from-green-500 to-emerald-500" },
  { icon: Shield, title: "Risk Management", desc: "Get alerts on concentration risk, sector exposure, and portfolio volatility.", color: "from-orange-500 to-red-500" },
  { icon: BookOpen, title: "Learn & Grow", desc: "Curated investment education tailored to your level.", color: "from-indigo-500 to-blue-500" },
  { icon: Users, title: "Multi-Language", desc: "English, Bahasa, Chinese, and more.", color: "from-pink-500 to-rose-500" },
];

const STEPS = [
  { step: "01", title: "Create Account", desc: "Sign up with email or Google. Takes 30 seconds." },
  { step: "02", title: "Add Your Holdings", desc: "Manually enter your stocks, crypto, or funds." },
  { step: "03", title: "Get AI Insights", desc: "Receive daily briefings, analysis, and learning recommendations." },
];

const FREE_FEATURES = ["Basic market data", "Manual portfolio tracking", "Daily briefing email", "Learning library access"];
const STARTER_FEATURES = ["Everything in Free", "AI stock analysis", "News impact analysis", "Valuation checks", "Priority support"];
const PRO_FEATURES = ["Everything in Starter", "Strategy backtesting", "Simulated trading", "Advanced risk tools", "Multi-device sync", "API access"];

export default function HomePage() {
  return (
    <div className="gradient-hero">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">AI-Powered Investment Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Your AI Investment{" "}
              <span className="text-gradient">Companion</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Understand any market. Any language. Kairo uses AI to help you track portfolios,
              analyze stocks, and make informed decisions — all in one beautiful platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/login?signup=true" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:scale-105 flex items-center justify-center gap-2">
                Start Free — No Credit Card
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/dashboard" className="w-full sm:w-auto glass-effect hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                View Demo
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">Free forever plan available — Setup in 30 seconds</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-2xl md:text-3xl font-bold text-white">50M+</div><div className="text-sm text-gray-400 mt-1">Retail Investors Worldwide</div></div>
            <div><div className="text-2xl md:text-3xl font-bold text-white">95%</div><div className="text-sm text-gray-400 mt-1">Never Make Profit</div></div>
            <div><div className="text-2xl md:text-3xl font-bold text-white">$10K+</div><div className="text-sm text-gray-400 mt-1">Avg. Bloomberg Terminal Cost</div></div>
            <div><div className="text-2xl md:text-3xl font-bold text-gradient">$4.99</div><div className="text-sm text-gray-400 mt-1">Kairo Starter Plan</div></div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Everything you need to understand your investments, powered by AI.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="glass-effect rounded-2xl p-6 hover:border-white/15 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}>
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start in 3 Minutes</h2>
            <p className="text-gray-400">No complicated setup. No credit card required.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-gradient mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400">Start free. Upgrade when you are ready.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-1">Free</h3>
              <div className="text-3xl font-bold text-white mb-1">$0<span className="text-base font-normal text-gray-400">/mo</span></div>
              <p className="text-sm text-gray-400 mb-6">Forever free</p>
              <ul className="space-y-3 mb-8">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/login?signup=true" className="block w-full text-center glass-effect hover:bg-white/10 text-white py-2.5 rounded-xl text-sm font-medium transition-colors">Get Started</Link>
            </div>

            <div className="glass-effect rounded-2xl p-6 border-blue-500/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</div>
              <h3 className="text-lg font-semibold text-white mb-1">Starter</h3>
              <div className="text-3xl font-bold text-white mb-1">$4.99<span className="text-base font-normal text-gray-400">/mo</span></div>
              <p className="text-sm text-gray-400 mb-6">or $49/year (save 18%)</p>
              <ul className="space-y-3 mb-8">
                {STARTER_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/login?signup=true" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-medium transition-colors">Start Free Trial</Link>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-1">Pro</h3>
              <div className="text-3xl font-bold text-white mb-1">$12.99<span className="text-base font-normal text-gray-400">/mo</span></div>
              <p className="text-sm text-gray-400 mb-6">or $99/year (save 36%)</p>
              <ul className="space-y-3 mb-8">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/login?signup=true" className="block w-full text-center glass-effect hover:bg-white/10 text-white py-2.5 rounded-xl text-sm font-medium transition-colors">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="glass-effect rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Invest Smarter?</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Join thousands of investors using Kairo to understand markets and build better portfolios.</p>
            <Link href="/login?signup=true" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all hover:scale-105">
              Start Free Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}