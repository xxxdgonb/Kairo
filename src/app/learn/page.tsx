"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Clock, ChevronRight, Star, Filter, Trophy } from "lucide-react";
import { LEARNING_ARTICLES } from "@/lib/data";

export default function LearnPage() {
  const [levelFilter, setLevelFilter] = useState<"all" | "beginner" | "intermediate" | "advanced">("all");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "basics" | "analysis" | "strategy" | "technical" | "crypto">("all");

  const filteredArticles = LEARNING_ARTICLES.filter(article => {
    const levelMatch = levelFilter === "all" || article.level === levelFilter;
    const categoryMatch = categoryFilter === "all" || article.category === categoryFilter;
    return levelMatch && categoryMatch;
  });

  const levels = [{ value: "all" as const, label: "All Levels", color: "bg-gray-600" }, { value: "beginner" as const, label: "Beginner", color: "bg-green-500" }, { value: "intermediate" as const, label: "Intermediate", color: "bg-yellow-500" }, { value: "advanced" as const, label: "Advanced", color: "bg-red-500" }];
  const categories = [{ value: "all" as const, label: "All Topics" }, { value: "basics" as const, label: "Basics" }, { value: "analysis" as const, label: "Analysis" }, { value: "strategy" as const, label: "Strategy" }, { value: "technical" as const, label: "Technical" }, { value: "crypto" as const, label: "Crypto" }];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8"><h1 className="text-3xl font-bold text-white mb-2">Investment Academy</h1><p className="text-gray-400">Learn investing at your own pace. From basics to advanced strategies.</p></div>

        <div className="glass-effect rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center"><Trophy className="w-6 h-6 text-white" /></div><div><h3 className="font-semibold text-white">Your Learning Progress</h3><p className="text-sm text-gray-400">0 of {LEARNING_ARTICLES.length} articles completed</p></div></div>
            <div className="w-full sm:w-48"><div className="h-2 bg-slate-700 rounded-full overflow-hidden"><div className="h-full w-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div></div><p className="text-xs text-gray-400 mt-1 text-right">0% complete</p></div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap"><Filter className="w-4 h-4 text-gray-400" /><span className="text-sm text-gray-400 mr-2">Level:</span>{levels.map((l) => (<button key={l.value} onClick={() => setLevelFilter(l.value)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${levelFilter === l.value ? `${l.color} text-white` : "bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700"}`}>{l.label}</button>))}</div>
          <div className="flex items-center gap-2 flex-wrap"><span className="text-sm text-gray-400 mr-2">Topic:</span>{categories.map((c) => (<button key={c.value} onClick={() => setCategoryFilter(c.value)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${categoryFilter === c.value ? "bg-blue-600 text-white" : "bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700"}`}>{c.label}</button>))}</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article key={article.id} className="glass-effect rounded-2xl p-6 hover:border-white/15 transition-all group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${article.level === "beginner" ? "bg-green-500/10 text-green-400" : article.level === "intermediate" ? "bg-yellow-500/10 text-yellow-400" : "bg-red-500/10 text-red-400"}`}>{article.level}</span>
                <div className="flex items-center gap-1 text-gray-400 text-sm"><Clock className="w-4 h-4" />{article.readTime} min</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{article.title}</h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">{article.summary}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5"><span className="text-xs text-gray-500 capitalize">{article.category}</span><button className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors">Read Article <ChevronRight className="w-4 h-4" /></button></div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (<div className="text-center py-16"><BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" /><h3 className="text-xl font-semibold text-white mb-2">No articles found</h3><p className="text-gray-400">Try adjusting your filters.</p></div>)}

        <div className="mt-12 glass-effect rounded-2xl p-8 text-center">
          <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Unlock AI-Powered Learning</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">Get personalized learning paths, interactive quizzes, and AI tutor that adapts to your level.</p>
          <Link href="/pricing" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-colors">Upgrade to Pro — $4.99/mo</Link>
        </div>
      </div>
    </div>
  );
}