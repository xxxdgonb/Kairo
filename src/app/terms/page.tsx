import Link from "next/link";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: July 14, 2026</p>
        </div>

        <div className="space-y-8">
          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using Kairo, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">2. No Financial Advice</h2>
            <p className="text-gray-300 leading-relaxed">
              Kairo provides educational tools and information only. Nothing on this platform constitutes financial, investment, or trading advice. Always consult a qualified financial advisor before making investment decisions.
            </p>
          </section>

          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">3. User Accounts</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You must provide accurate and complete information</li>
              <li>We reserve the right to suspend accounts violating these terms</li>
            </ul>
          </section>

          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">4. Subscription & Payments</h2>
            <p className="text-gray-300 leading-relaxed">
              Paid subscriptions are billed through Lemon Squeezy. Refunds are available within 30 days of purchase. You may cancel anytime, and access continues until the end of the billing period.
            </p>
          </section>

          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              Kairo shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our platform. Investment data may have delays and should not be relied upon for trading decisions.
            </p>
          </section>

          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">6. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these terms at any time. Continued use after changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}