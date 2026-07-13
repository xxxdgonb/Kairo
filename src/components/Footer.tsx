import Link from "next/link";
import { TrendingUp, Mail, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Kairo</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">Your AI-powered investment companion.</p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="mailto:hello@kairo.app" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <div><h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/search" className="text-sm text-gray-400 hover:text-white transition-colors">Market Data</Link></li>
              <li><Link href="/learn" className="text-sm text-gray-400 hover:text-white transition-colors">Learn</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div><h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="mailto:support@kairo.app" className="text-sm text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div><h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Twitter / X</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Discord Community</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 Kairo. All rights reserved.</p>
          <p className="text-xs text-gray-600 max-w-md text-center md:text-right">⚠️ Disclaimer: Kairo provides information and educational tools only. Nothing constitutes financial advice.</p>
        </div>
      </div>
    </footer>
  );
}