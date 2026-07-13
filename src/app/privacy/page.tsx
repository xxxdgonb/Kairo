import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <ShieldCheck className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: July 14, 2026</p>
        </div>

        <div className="space-y-8">
          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed">
              We collect information you provide directly, such as your name, email address, and investment portfolio data when you create an account. We also automatically collect usage data to improve our services.
            </p>
          </section>

          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>To provide and improve our investment analysis tools</li>
              <li>To send you portfolio updates and market insights</li>
              <li>To personalize your learning experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">3. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement industry-standard security measures to protect your data. All data is encrypted in transit and at rest using Supabase's secure infrastructure.
            </p>
          </section>

          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              We use third-party services including Google OAuth, GitHub authentication, and CoinGecko API. These services have their own privacy policies governing data collection.
            </p>
          </section>

          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">5. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              You have the right to access, correct, or delete your personal data. Contact us at privacy@kairo.app to exercise these rights.
            </p>
          </section>

          <section className="glass-effect rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">6. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at privacy@kairo.app.
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