"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, TrendingDown, Plus, Search, Bell, ChevronRight, BarChart3, Shield, BookOpen, ArrowUpRight, ArrowDownLeft, RefreshCw, DollarSign } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from "recharts";
import { MOCK_HOLDINGS, MARKET_INDICES, NEWS_ITEMS, PORTFOLIO_STATS } from "@/lib/data";

const CHART_DATA = [
  { date: "Jan", value: 10000 },
  { date: "Feb", value: 10800 },
  { date: "Mar", value: 10200 },
  { date: "Apr", value: 11500 },
  { date: "May", value: 12100 },
  { date: "Jun", value: 11800 },
  { date: "Jul", value: 13200 },
];

const SECTOR_DATA = [
  { name: "Technology", value: 45, color: "#3b82f6" },
  { name: "Financial", value: 25, color: "#8b5cf6" },
  { name: "Crypto", value: 15, color: "#f59e0b" },
  { name: "Other", value: 15, color: "#10b981" },
];

const TABS = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "holdings", label: "Holdings", icon: DollarSign },
  { id: "news", label: "News & Analysis", icon: BookOpen },
];

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="border-b border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Welcome back, Investor</h1>
              <p className="text-sm text-gray-400 mt-1">Here is your portfolio overview for today.</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Search stocks, crypto..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full sm:w-64 pl-10 pr-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <button className="p-2 glass-effect rounded-xl hover:bg-white/5 transition-colors relative"><Bell className="w-5 h-5 text-gray-400" /><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span></button>
              <button className="p-2 glass-effect rounded-xl hover:bg-white/5 transition-colors"><RefreshCw className="w-5 h-5 text-gray-400" /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-1 mb-6 bg-slate-900/50 p-1 rounded-xl w-fit">
          {TABS.map((tab) => (
            <button key={tab.id} onClick={() => setSelectedTab(tab.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedTab === tab.id ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
              <tab.icon className="w-4 h-4" />{tab.label}
            </button>
          ))}
        </div>

        {selectedTab === "overview" && OverviewContent()}
        {selectedTab === "holdings" && HoldingsTable()}
        {selectedTab === "news" && NewsFeed()}
      </div>
    </div>
  );
}

function OverviewContent() {
  const statsCards = [
    { label: "Total Value", value: "$" + PORTFOLIO_STATS.totalValue.toLocaleString(), change: "+" + PORTFOLIO_STATS.totalReturn + "%", icon: DollarSign, color: "from-blue-500 to-cyan-500" },
    { label: "Today P&L", value: "$" + PORTFOLIO_STATS.todayPnl.toLocaleString(), change: PORTFOLIO_STATS.todayPnlPercent + "%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { label: "Total Return", value: "+" + PORTFOLIO_STATS.totalReturn + "%", change: "$" + PORTFOLIO_STATS.totalPnl.toLocaleString(), icon: TrendingUp, color: "from-purple-500 to-pink-500" },
    { label: "Risk Score", value: PORTFOLIO_STATS.riskScore + "/100", change: PORTFOLIO_STATS.riskLevel, icon: Shield, color: "from-orange-500 to-red-500" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statsCards.map((card, i) => (
          <div key={i} className="glass-effect rounded-2xl p-5 hover:border-white/15 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-400">{card.label}</span>
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                <card.icon className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{card.value}</div>
            <div className="flex items-center gap-1 text-sm text-green-400"><ArrowUpRight className="w-3 h-3" />{card.change}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 glass-effect rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div><h3 className="text-lg font-semibold text-white">Portfolio Performance</h3><p className="text-sm text-gray-400">Last 7 months</p></div>
            <div className="flex gap-2">{["1M", "3M", "6M", "1Y"].map((period) => (<button key={period} className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${period === "6M" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>{period}</button>))}</div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={CHART_DATA}>
              <defs><linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/><stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} tickFormatter={(v) => "$" + Math.round(v/1000) + "k"} />
              <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff" }} />
              <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fill="url(#valueGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Sector Allocation</h3>
          <ResponsiveContainer width="100%" height={180}>
            <RePieChart>
              <Pie data={SECTOR_DATA} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={5} dataKey="value">
                {SECTOR_DATA.map((entry, index) => (<Cell key={"cell-" + index} fill={entry.color} />))}
              </Pie>
            </RePieChart>
          </ResponsiveContainer>
          <div className="space-y-3 mt-4">
            {SECTOR_DATA.map((sector) => (
              <div key={sector.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: sector.color }}></div><span className="text-sm text-gray-300">{sector.name}</span></div>
                <span className="text-sm font-medium text-white">{sector.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Market Indices</h3>
          <div className="space-y-3">
            {MARKET_INDICES.map((idx) => (
              <div key={idx.name} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <span className="text-sm font-medium text-gray-300">{idx.name}</span>
                <div className="text-right"><div className="text-sm text-white">{idx.value}</div><div className={`text-xs ${idx.positive ? "text-green-400" : "text-red-400"}`}>{idx.change}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-effect rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4"><h3 className="text-lg font-semibold text-white">Latest News</h3><Link href="/search" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></Link></div>
          <div className="space-y-3">
            {NEWS_ITEMS.slice(0, 5).map((news) => (
              <div key={news.id} className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0"><h4 className="text-sm text-gray-200 group-hover:text-white transition-colors line-clamp-2">{news.title}</h4><div className="flex items-center gap-2 mt-2"><span className="text-xs text-gray-500">{news.source}</span><span className="text-xs text-gray-600">{"•"}</span><span className="text-xs text-gray-500">{news.time}</span></div></div>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400 flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function HoldingsTable() {
  return (
    <div className="glass-effect rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <div><h3 className="text-lg font-semibold text-white">Your Holdings</h3><p className="text-sm text-gray-400">{MOCK_HOLDINGS.length} assets tracked</p></div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"><Plus className="w-4 h-4" /> Add Holding</button>
      </div>
      <div className="overflow-x-auto"><table className="w-full">
        <thead><tr className="border-b border-white/5">
          <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">Asset</th>
          <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">Price</th>
          <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">Holdings</th>
          <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">P&L</th>
          <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">Change</th>
          <th className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">Action</th>
        </tr></thead>
        <tbody>
          {MOCK_HOLDINGS.map((holding) => (
            <tr key={holding.symbol} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
              <td className="px-6 py-4"><div className="flex items-center gap-3"><div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${holding.type === "crypto" ? "bg-orange-500/20 text-orange-400" : "bg-blue-500/20 text-blue-400"}`}>{holding.symbol.slice(0, 2)}</div><div><div className="text-sm font-medium text-white">{holding.symbol}</div><div className="text-xs text-gray-400">{holding.name}</div></div></div></td>
              <td className="px-6 py-4 text-right"><div className="text-sm text-white">{"$" + holding.price?.toFixed(2)}</div></td>
              <td className="px-6 py-4 text-right"><div className="text-sm text-white">{holding.quantity}</div><div className="text-xs text-gray-400">Avg {"$" + holding.avgCost}</div></td>
              <td className="px-6 py-4 text-right"><div className={`text-sm font-medium ${holding.pnl >= 0 ? "text-green-400" : "text-red-400"}`}>{(holding.pnl >= 0 ? "+" : "") + "$" + holding.pnl.toFixed(2)}</div><div className="text-xs text-gray-400">{(holding.pnlPercent >= 0 ? "+" : "") + holding.pnlPercent.toFixed(2) + "%"}</div></td>
              <td className="px-6 py-4 text-right"><div className={`inline-flex items-center gap-1 text-sm ${holding.change >= 0 ? "text-green-400" : "text-red-400"}`}>{holding.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}{(holding.change >= 0 ? "+" : "") + holding.change.toFixed(2) + "%"}</div></td>
              <td className="px-6 py-4 text-center"><button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Details</button></td>
            </tr>
          ))}
        </tbody>
      </table></div>
    </div>
  );
}

function NewsFeed() {
  return (
    <div className="space-y-4">
      {NEWS_ITEMS.map((news) => (
        <div key={news.id} className="glass-effect rounded-2xl p-6 hover:border-white/15 transition-all cursor-pointer group">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2"><span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">{news.category}</span><span className="text-xs text-gray-500">{news.source} {"•"} {news.time}</span></div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">{news.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">AI-powered analysis will show impact on your portfolio, historical context, and actionable insights.</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
          </div>
        </div>
      ))}
    </div>
  );
}