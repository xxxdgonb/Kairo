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

export type SubscriptionTier = 'free' | 'starter' | 'pro';
export type RiskLevel = 'conservative' | 'moderate' | 'aggressive';
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';