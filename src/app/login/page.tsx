"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, ArrowRight, Github, ShieldCheck, Zap } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const handleGithubLogin = async () => {
    setLoading(true);
    await supabase.auth.signInWithOAuth({ provider: "github" });
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (isSignUp) {
      await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
    } else {
      await supabase.auth.signInWithPassword({ email, password });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"><Zap className="w-6 h-6 text-white" /></div>
            <span className="text-2xl font-bold text-gradient">Kairo</span>
          </Link>
          <h1 className="text-2xl font-bold text-white">{isSignUp ? "Create your account" : "Welcome back"}</h1>
          <p className="text-gray-400 mt-2">{isSignUp ? "Start your investment journey today." : "Sign in to access your portfolio."}</p>
        </div>

        <div className="space-y-3 mb-6">
          <button onClick={handleGoogleLogin} disabled={loading} className="w-full glass-effect hover:bg-white/5 text-white py-3 rounded-xl flex items-center justify-center gap-3 transition-colors disabled:opacity-50">Continue with Google</button>
          <button onClick={handleGithubLogin} disabled={loading} className="w-full glass-effect hover:bg-white/5 text-white py-3 rounded-xl flex items-center justify-center gap-3 transition-colors disabled:opacity-50"><Github className="w-5 h-5" /> Continue with GitHub</button>
        </div>

        <div className="flex items-center gap-4 mb-6"><div className="flex-1 h-px bg-white/10"></div><span className="text-sm text-gray-500">or continue with email</span><div className="flex-1 h-px bg-white/10"></div></div>

        <form className="space-y-4" onSubmit={handleEmailAuth}>
          {isSignUp && (<div><label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" /></div>)}
          <div><label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label><div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" /></div></div>
          <div><label className="block text-sm font-medium text-gray-300 mb-2">Password</label><div className="relative"><input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 pr-12 bg-slate-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button></div></div>
          {!isSignUp && (<div className="flex items-center justify-between"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded bg-slate-800 border-white/20 text-blue-600 focus:ring-blue-500" /><span className="text-sm text-gray-400">Remember me</span></label><a href="#" className="text-sm text-blue-400 hover:text-blue-300">Forgot password?</a></div>)}
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50">{loading ? "Processing..." : (isSignUp ? "Create Account" : "Sign In")} <ArrowRight className="w-4 h-4" /></button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">{isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}<button type="button" onClick={() => setIsSignUp(!isSignUp)} className="text-blue-400 hover:text-blue-300 font-medium">{isSignUp ? "Sign in" : "Sign up"}</button></p>

        <div className="mt-8 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10"><div className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" /><div><p className="text-xs text-yellow-400/80 leading-relaxed">By creating an account, you agree to our Terms of Service and Privacy Policy. Kairo provides educational tools and information only — not financial advice.</p></div></div></div>
      </div>
    </div>
  );
}