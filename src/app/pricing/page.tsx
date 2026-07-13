"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, ArrowRight, ShieldCheck, Zap, Globe, Crown } from "lucide-react";

const FEATURES_LABELS = [
  "Market data access", "Portfolio tracking", "Daily briefings", "Learning library", "Community forum",
  "AI stock analysis", "News impact analysis", "Strategy backtesting", "Simulated trading", "Priority support"
];

const FAQS = [
  { q: "Can I cancel anytime?", a: "Yes! Cancel your subscription at any time." },
  { q: "Is there a free trial?", a: "All paid plans come with a 14-day free trial." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay." },
  { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money-back guarantee." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    { name: "Free", price: 0, annualPrice: 0, description: "Forever free. No credit card required.", icon: <Globe className="w-6 h-6 text-green-400" />, features: [true, true, true, true, true, false, false, false, false, false], cta: "Get Started Free", popular: false },
    { name: "Starter", price: 4.99, annualPrice: 4.10, description: "For serious individual investors.", icon: <Zap className="w-6 h-6 text-blue-400" />, features: [true, true, true, true, true, true, true, false, false, true], cta: "Start Free Trial", popular: true },
    { name: "Pro", price: 12.99, annualPrice: 8.30, description: "For power users and active traders.", icon: <Crown className="w-6 h-6 text-purple-400" />, features: [true, true, true, true, true, true, true, true, true, true], cta: "Start Free Trial", popular: false },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">Start free. Upgrade when you are ready.</p>
          <div className="inline-flex items-center gap-3 glass-effect rounded-full p-1">
            <button onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!annual ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${annual ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}>Annual <span className={`text-xs px-2 py-0.5 rounded-full ${annual ? "bg-yellow-400/20 text-yellow-400" : "bg-gray-600 text-gray-300"}`}>Save up to 36%</span></button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`glass-effect rounded-2xl p-6 flex flex-col relative transition-all hover:border-white/15 ${plan.popular ? "border-blue-500/30 ring-1 ring-blue-500/20" : ""}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full font-medium">Most Popular</div>}
              <div className="mb-6"><div className="flex items-center gap-3 mb-2">{plan.icon}<h3 className="text-xl font-bold text-white">{plan.name}</h3></div><p className="text-sm text-gray-400">{plan.description}</p></div>
              <div className="mb-6"><div className="flex items-baseline gap-1"><span className="text-4xl font-bold text-white">${annual && plan.price > 0 ? plan.annualPrice.toFixed(2) : plan.price.toFixed(2)}</span>{plan.price > 0 && <span className="text-gray-400">/mo</span>}</div>{annual && plan.price > 0 && <p className="text-xs text-gray-500 mt-1">Billed ${Math.round(plan.annualPrice * 12)}/year</p>}</div>
              <ul className="space-y-3 mb-8 flex-1">{plan.features.map((included, i) => (<li key={i} className="flex items-start gap-3"><span className={included ? "text-green-400" : "text-gray-600"}>{included ? "✓" : "✗"}</span><span className={`text-sm ${included ? "text-gray-200" : "text-gray-600"}`}>{FEATURES_LABELS[i]}</span></li>))}</ul>
              <Link href="/login?signup=true" className={`block w-full text-center py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "glass-effect hover:bg-white/10 text-white"}`}>{plan.cta} <ArrowRight className="w-4 h-4" /></Link>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="glass-effect rounded-xl p-5"><h3 className="font-semibold text-white mb-2">{faq.q}</h3><p className="text-sm text-gray-400">{faq.a}</p></div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center"><div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3"><ShieldCheck className="w-5 h-5 text-green-400" /><span className="text-sm text-gray-300">30-day money-back guarantee — No questions asked</span></div></div>
      </div>
    </div>
  );
}