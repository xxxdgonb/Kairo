export interface Holding {
  id?: string;
  symbol: string;
  name: string;
  quantity: number;
  avgCost: number;
  currency: string;
  type: 'stock' | 'crypto' | 'fund';
  addedAt?: string;
}

export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  marketCap: string;
  pe: number;
  high52w: number;
  low52w: number;
  sector: string;
}

export interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: string;
  volume24h: string;
  supply: string;
}

export type SubscriptionTier = 'free' | 'starter' | 'pro';
export type RiskLevel = 'conservative' | 'moderate' | 'aggressive';
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';