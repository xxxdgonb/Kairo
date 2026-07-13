"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, TrendingUp, TrendingDown, Star, ChevronRight, Globe, Bitcoin, ShieldCheck } from "lucide-react";
import { STOCK_DATA, CRYPTO_DATA, STOCK_ANALYSIS_TEMPLATES, StockData, CryptoData } from "@/lib/data";

const TABS = [
  { id: "stocks", label: "Stocks", icon: Globe },
  { id: "crypto", label: "Crypto", icon: Bitcoin },
  { id: "watchlist", label: "Watchlist", icon: Star },
];

export default function SearchPage() {
  const [tab, setTab] = useState("stocks");
  const [query, setQuery] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const [watchlist, setWatchlist] = useState<string[]>(["AAPL", "BTC"]);

  const allAssets = [...STOCK_DATA, ...CRYPTO_DATA];
  const currentData = selectedSymbol ? allAssets.find((d) => d.symbol === selectedSymbol) : null;
  const analysis = selectedSymbol ? STOCK_ANALYSIS_TEMPLATES[selectedSymbol] : null;

  const filteredStocks = STOCK_DATA.filter((s) =>
    s.symbol.toLowerCase().includes(query.toLowerCase()) ||
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCrypto = CRYPTO_DATA.filter((c) =>
    c.symbol.toLowerCase().includes(query.toLowerCase()) ||
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  const toggleWatchlist = (symbol: string) => {
    setWatchlist((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    );
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8"><h1 className="text-3xl font-bold text-white mb-2">Market Explorer</h1><p className="text-gray-400">Search stocks, crypto, and funds from global markets.</p></div>
        <div className="relative mb-6"><Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input type="text" placeholder="Search by ticker or name..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-white/10 rounded-2xl text-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
        </div>
        <div className="flex gap-1 mb-6 bg-slate-900/50 p-1 rounded-xl w-fit">
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === t.id ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
              <t.icon className="w-4 h-4" />{t.label}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="glass-effect rounded-2xl overflow-hidden max-h-[calc(100vh-300px)] overflow-y-auto">
              {tab === "stocks" && filteredStocks.map((stock) => (
                <button key={stock.symbol} onClick={() => setSelectedSymbol(stock.symbol)} className={`w-full flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/[0.03] transition-colors text-left ${selectedSymbol === stock.symbol ? "bg-blue-600/10 border-l-2 border-l-blue-500" : ""}`}>
                  <div><div className="font-semibold text-white">{stock.symbol}</div><div className="text-xs text-gray-400 truncate max-w-[150px]">{stock.name}</div></div>
                  <div className="text-right"><div className="text-sm text-white">${stock.price}</div><div className={`text-xs flex items-center justify-end gap-1 ${stock.changePercent >= 0 ? "text-green-400" : "text-red-400"}`}>{stock.changePercent >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}{stock.changePercent >= 0 ? "+" : ""}{stock.changePercent}%</div></div>
                </button>
              ))}
              {tab === "crypto" && filteredCrypto.map((crypto) => (
                <button key={crypto.symbol} onClick={() => setSelectedSymbol(crypto.symbol)} className={`w-full flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/[0.03] transition-colors text-left ${selectedSymbol === crypto.symbol ? "bg-orange-600/10 border-l-2 border-l-orange-500" : ""}`}>
                  <div><div className="font-semibold text-white">{crypto.symbol}</div><div className="text-xs text-gray-400">{crypto.name}</div></div>
                  <div className="text-right"><div className="text-sm text-white">${crypto.price.toLocaleString()}</div><div className={`text-xs flex items-center justify-end gap-1 ${crypto.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>{crypto.change24h >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}{crypto.change24h >= 0 ? "+" : ""}{crypto.change24h}%</div></div>
                </button>
              ))}
              {tab === "watchlist" && watchlist.map((symbol: string) => {
                const item = allAssets.find((i) => i.symbol === symbol);
                if (!item) return null;
                return (<button key={symbol} onClick={() => setSelectedSymbol(symbol)} className="w-full flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/[0.03] transition-colors text-left"><div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /><div><div className="font-semibold text-white">{symbol}</div><div className="text-xs text-gray-400">{item.name || item.symbol}</div></div></div><ChevronRight className="w-4 h-4 text-gray-500" /></button>);
              })}
            </div>
          </div>
          <div className="lg:col-span-2">
            {currentData ? <AssetDetail data={currentData} analysis={analysis} isWatchlisted={watchlist.includes(currentData.symbol)} onToggleWatchlist={() => toggleWatchlist(currentData.symbol)} /> : <EmptyState />}
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetDetail({ data, analysis, isWatchlisted, onToggleWatchlist }: { data: StockData | CryptoData; analysis: { summary: string; valuation: string; risks: string; opportunities: string } | null | undefined; isWatchlisted: boolean; onToggleWatchlist: () => void }) {
  const stockMetrics = [{ label: "Market Cap", value: data.marketCap }, { label: "P/E Ratio", value: String((data as StockData).pe ?? "N/A") }, { label: "52W High", value: "$" + ((data as StockData).high52w ?? "") }, { label: "52W Low", value: "$" + ((data as StockData).low52w ?? "") }];
  const cryptoMetrics = [{ label: "Market Cap", value: data.marketCap }, { label: "24h Volume", value: (data as CryptoData).volume24h }, { label: "Supply", value: (data as CryptoData).supply }, { label: "Category", value: "Cryptocurrency" }];
  const metrics: { label: string; value: string }[] = "pe" in data ? stockMetrics : cryptoMetrics;
  const changeVal = "changePercent" in data ? data.changePercent : data.change24h;
  const isPositive = changeVal >= 0;

  return (
    <div className="space-y-6">
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div><div className="flex items-center gap-3 mb-1"><h2 className="text-2xl font-bold text-white">{data.symbol}</h2>
            <button onClick={onToggleWatchlist} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"><Star className={`w-5 h-5 ${isWatchlisted ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`} /></button>
          </div><p className="text-gray-400">{data.name}</p></div>
          <div className="text-right"><div className="text-3xl font-bold text-white">${data.price?.toLocaleString()}</div>
            <div className={`flex items-center justify-end gap-1 text-lg ${isPositive ? "text-green-400" : "text-red-400"}`}>
              {isPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />} {isPositive ? "+" : ""}{changeVal}%
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/5">
          {metrics.map((m) => (<div key={m.label} className="p-3 rounded-xl bg-white/[0.02]"><div className="text-xs text-gray-500 mb-1">{m.label}</div><div className="text-sm font-semibold text-white">{m.value}</div></div>))}
        </div>
      </div>

      {analysis && (
        <div className="glass-effect rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4"><ShieldCheck className="w-5 h-5 text-blue-400" /><h3 className="text-lg font-semibold text-white">AI Analysis</h3></div>
          <div className="space-y-4">
            <div><div className="text-sm text-gray-400 mb-1">Summary</div><p className="text-sm text-gray-200 leading-relaxed">{analysis.summary}</p></div>
            <div className="grid sm:grid-cols-2 gap-4"><div><div className="text-sm text-gray-400 mb-1">Valuation</div><p className="text-sm text-gray-200">{analysis.valuation}</p></div><div><div className="text-sm text-gray-400 mb-1">Risks</div><p className="text-sm text-gray-200">{analysis.risks}</p></div></div>
            <div><div className="text-sm text-gray-400 mb-1">Opportunities</div><p className="text-sm text-gray-200">{analysis.opportunities}</p></div>
          </div>
          <div className="mt-4 p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/10"><p className="text-xs text-yellow-400">This analysis is AI-generated and for informational purposes only.</p></div>
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="glass-effect rounded-2xl p-12 text-center"><Search className="w-16 h-16 text-gray-600 mx-auto mb-4" /><h3 className="text-xl font-semibold text-white mb-2">Search for an Asset</h3><p className="text-gray-400 max-w-md mx-auto">Select a stock or cryptocurrency to see detailed information and AI-powered analysis.</p></div>
  );
}
