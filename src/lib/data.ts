export interface StockData {
  symbol: string; name: string; price: number; change: number;
  changePercent: number; volume: string; marketCap: string;
  pe: number; high52w: number; low52w: number; sector: string;
}

export interface CryptoData {
  symbol: string; name: string; price: number; change24h: number;
  marketCap: string; volume24h: string; supply: string;
}

export const MOCK_HOLDINGS = [
  { symbol: "AAPL", name: "Apple Inc.", price: 198.11, quantity: 25, avgCost: 175.50, currency: "USD", type: "stock" as const, pnl: 567.75, pnlPercent: 12.91, change: 1.19 },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 135.58, quantity: 50, avgCost: 120.00, currency: "USD", type: "stock" as const, pnl: 779.00, pnlPercent: 12.98, change: -2.07 },
  { symbol: "BTC", name: "Bitcoin", price: 97250, quantity: 0.05, avgCost: 65000, currency: "USD", type: "crypto" as const, pnl: 1612.50, pnlPercent: 49.62, change: 2.30 },
  { symbol: "ETH", name: "Ethereum", price: 3420, quantity: 2.5, avgCost: 2800, currency: "USD", type: "crypto" as const, pnl: 1550.00, pnlPercent: 22.14, change: -1.20 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 432.68, quantity: 10, avgCost: 380.00, currency: "USD", type: "stock" as const, pnl: 526.80, pnlPercent: 13.86, change: -0.28 },
  { symbol: "MAYBANK.KL", name: "Malayan Banking", price: 9.42, quantity: 1000, avgCost: 8.80, currency: "MYR", type: "stock" as const, pnl: 620.00, pnlPercent: 7.05, change: 0.53 },
  { symbol: "SOL", name: "Solana", price: 172, quantity: 30, avgCost: 120, currency: "USD", type: "crypto" as const, pnl: 1560.00, pnlPercent: 43.33, change: 5.20 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 176.49, quantity: 15, avgCost: 155.00, currency: "USD", type: "stock" as const, pnl: 322.35, pnlPercent: 13.86, change: 1.80 },
];

export const PORTFOLIO_STATS = {
  totalValue: 132450,
  totalReturn: 23.5,
  totalPnl: 24890,
  todayPnl: 1245,
  todayPnlPercent: 0.95,
  riskScore: 42,
  riskLevel: "Moderate",
};

export const STOCK_DATA: StockData[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 198.11, change: 2.34, changePercent: 1.19, volume: "52.3M", marketCap: "3.08T", pe: 31.2, high52w: 201.20, low52w: 143.90, sector: "Technology" },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 432.68, change: -1.23, changePercent: -0.28, volume: "18.7M", marketCap: "3.21T", pe: 36.8, high52w: 468.35, low52w: 309.45, sector: "Technology" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 176.49, change: 3.12, changePercent: 1.80, volume: "22.1M", marketCap: "2.17T", pe: 25.4, high52w: 191.75, low52w: 120.21, sector: "Technology" },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 211.82, change: 4.56, changePercent: 2.20, volume: "41.5M", marketCap: "2.21T", pe: 58.3, high52w: 221.45, low52w: 142.20, sector: "Consumer Cyclical" },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 135.58, change: -2.87, changePercent: -2.07, volume: "312.4M", marketCap: "3.33T", pe: 55.2, high52w: 153.13, low52w: 76.50, sector: "Technology" },
  { symbol: "TSLA", name: "Tesla Inc.", price: 352.56, change: 8.92, changePercent: 2.60, volume: "98.2M", marketCap: "1.12T", pe: 105.3, high52w: 488.54, low52w: 227.20, sector: "Consumer Cyclical" },
  { symbol: "META", name: "Meta Platforms", price: 587.20, change: 6.45, changePercent: 1.11, volume: "15.8M", marketCap: "1.49T", pe: 28.7, high52w: 602.95, low52w: 370.20, sector: "Technology" },
  { symbol: "JPM", name: "JPMorgan Chase", price: 248.35, change: 1.23, changePercent: 0.50, volume: "7.2M", marketCap: "712B", pe: 12.1, high52w: 255.68, low52w: 170.20, sector: "Financial" },
  { symbol: "V", name: "Visa Inc.", price: 312.45, change: -0.89, changePercent: -0.28, volume: "5.8M", marketCap: "605B", pe: 30.5, high52w: 318.75, low52w: 252.00, sector: "Financial" },
  { symbol: "MAYBANK.KL", name: "Malayan Banking", price: 9.42, change: 0.05, changePercent: 0.53, volume: "45.2M", marketCap: "120B MYR", pe: 11.2, high52w: 10.10, low52w: 8.50, sector: "Financial" },
  { symbol: "GENTING.KL", name: "Genting Malaysia", price: 5.18, change: -0.08, changePercent: -1.52, volume: "22.1M", marketCap: "22B MYR", pe: 28.5, high52w: 5.80, low52w: 3.90, sector: "Consumer Cyclical" },
  { symbol: "TENAGA.KL", name: "Tenaga Nasional", price: 10.25, change: 0.12, changePercent: 1.18, volume: "18.5M", marketCap: "38B MYR", pe: 18.3, high52w: 11.50, low52w: 8.20, sector: "Utilities" },
];

export const CRYPTO_DATA: CryptoData[] = [
  { symbol: "BTC", name: "Bitcoin", price: 97250, change24h: 2.3, marketCap: "1.92T", volume24h: "38.5B", supply: "19.7M" },
  { symbol: "ETH", name: "Ethereum", price: 3420, change24h: -1.2, marketCap: "411B", volume24h: "15.2B", supply: "120M" },
  { symbol: "BNB", name: "BNB", price: 725, change24h: 0.8, marketCap: "108B", volume24h: "1.8B", supply: "149M" },
  { symbol: "SOL", name: "Solana", price: 172, change24h: 5.2, marketCap: "81B", volume24h: "4.2B", supply: "471M" },
  { symbol: "XRP", name: "XRP", price: 2.48, change24h: -0.5, marketCap: "136B", volume24h: "5.1B", supply: "55B" },
  { symbol: "ADA", name: "Cardano", price: 0.78, change24h: 3.1, marketCap: "27B", volume24h: "890M", supply: "35B" },
];

export const MARKET_INDICES = [
  { name: "S&P 500", value: "5,892.45", change: "+0.85%", positive: true },
  { name: "NASDAQ", value: "19,234.12", change: "+1.12%", positive: true },
  { name: "DOW JONES", value: "43,567.89", change: "-0.23%", positive: false },
  { name: "FTSE Bursa KL", value: "1,598.34", change: "+0.45%", positive: true },
  { name: "HSI", value: "24,892.56", change: "-0.67%", positive: false },
  { name: "NIKKEI 225", value: "40,123.45", change: "+0.92%", positive: true },
];

export const NEWS_ITEMS = [
  { id: 1, title: "Fed signals potential rate cut in September meeting", source: "Reuters", time: "2h ago", category: "macro", sentiment: "positive" as const },
  { id: 2, title: "NVIDIA earnings beat expectations, revenue up 94% YoY", source: "Bloomberg", time: "4h ago", category: "earnings", sentiment: "positive" },
  { id: 3, title: "China property sector faces continued pressure", source: "SCMP", time: "5h ago", category: "macro", sentiment: "negative" },
  { id: 4, title: "Malaysia GDP growth hits 4.1% in Q2, above forecasts", source: "Bernama", time: "6h ago", category: "macro", sentiment: "positive" },
  { id: 5, title: "Bitcoin ETF inflows reach record $1.2B in single day", source: "CoinDesk", time: "8h ago", category: "crypto", sentiment: "positive" },
  { id: 6, title: "Tech layoffs continue as Meta cuts 10,000 jobs", source: "CNBC", time: "10h ago", category: "tech", sentiment: "negative" },
];

export const LEARNING_ARTICLES = [
  { id: 1, title: "Stock Market 101: What Every Beginner Should Know", slug: "stock-market-101", category: "basics", level: "beginner" as const, readTime: 8, summary: "Learn the fundamentals of stock markets, how to read quotes, and basic investment principles." },
  { id: 2, title: "Understanding P/E Ratio and Valuation", slug: "pe-ratio-guide", category: "analysis", level: "beginner", readTime: 6, summary: "Deep dive into P/E ratios, how to use them to evaluate stocks, and common pitfalls." },
  { id: 3, title: "Portfolio Diversification Strategies", slug: "diversification", category: "strategy", level: "intermediate", readTime: 10, summary: "How to build a diversified portfolio across asset classes, sectors, and geographies." },
  { id: 4, title: "Technical Analysis Basics: Support & Resistance", slug: "support-resistance", category: "technical", level: "beginner", readTime: 7, summary: "Learn to identify key support and resistance levels on price charts." },
  { id: 5, title: "Reading Financial Statements Like a Pro", slug: "financial-statements", category: "analysis", level: "intermediate", readTime: 12, summary: "Master the balance sheet, income statement, and cash flow statement." },
  { id: 6, title: "Cryptocurrency Investment Guide", slug: "crypto-guide", category: "crypto", level: "beginner", readTime: 9, summary: "Everything you need to know about investing in Bitcoin, Ethereum, and altcoins." },
  { id: 7, title: "Risk Management for Individual Investors", slug: "risk-management", category: "strategy", level: "intermediate", readTime: 8, summary: "Position sizing, stop losses, and other risk management techniques." },
  { id: 8, title: "Dividend Investing Strategy", slug: "dividend-strategy", category: "strategy", level: "intermediate", readTime: 10, summary: "Build passive income through dividend-paying stocks." },
];

export const STOCK_ANALYSIS_TEMPLATES: Record<string, { summary: string; valuation: string; risks: string; opportunities: string }> = {
  "AAPL": {
    summary: "Apple continues to show strong services revenue growth, offsetting modest iPhone sales decline.",
    valuation: "Current PE of 31.2x is above 5-year average of 28x, suggesting slight overvaluation.",
    risks: "Regulatory scrutiny in EU and China market challenges.",
    opportunities: "AI integration in iOS could drive upgrade cycle.",
  },
  "BTC": {
    summary: "Bitcoin approaching all-time highs as institutional adoption accelerates.",
    valuation: "On-chain metrics suggest accumulation phase continues.",
    risks: "Regulatory uncertainty remains key risk factor.",
    opportunities: "Layer 2 scaling solutions driving ecosystem growth.",
  },
};