# Kairo — AI Investment Companion

> Your AI-powered investment companion. Understand any market, any language.

Kairo is a zero-cost, full-stack investment platform built with Next.js 14, Supabase, and Tailwind CSS.

## Features

### Phase 1 (MVP — Complete)
- Landing Page — Hero section, features, pricing preview, CTA
- Dashboard — Portfolio overview, performance chart, sector allocation, market indices, news feed
- Market Explorer — Search stocks & crypto, detailed analysis, watchlist
- Learning Academy — Curated investment education with filters
- Pricing Page — Free/Starter/Pro plans with monthly/annual toggle
- Login/Signup — Email + Google/GitHub social login with compliance notice

### Phase 2 (Planned)
- AI-powered stock analysis (Gemini Flash API)
- News impact analysis on your portfolio
- Valuation checks and risk alerts
- Push notifications

### Phase 3 (Planned)
- Strategy backtesting engine
- Simulated trading ($100K virtual)
- Auto-sync with broker APIs
- Multi-language support (Bahasa, 中文)
- Community features

## Tech Stack

| Layer | Technology | Cost |
|-------|-----------|------|
| Frontend | Next.js 14 + TypeScript | Free (Vercel Hobby) |
| Styling | Tailwind CSS v4 | Free |
| Charts | Recharts | Free |
| Backend/Auth | Supabase (PostgreSQL) | Free tier |
| Deployment | Vercel | Free tier |
| Payments | Lemon Squeezy | 5% fee (only when you earn) |
| Data | yfinance, CoinGecko, SEC EDGAR | Free |

**Total cost: $0/month until revenue.**

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Database Schema (Supabase SQL)

```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT NOT NULL,
  risk_level TEXT DEFAULT 'moderate',
  experience_level TEXT DEFAULT 'beginner',
  subscription_tier TEXT DEFAULT 'free',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE holdings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  symbol TEXT NOT NULL,
  name TEXT NOT NULL,
  quantity DECIMAL NOT NULL,
  avg_cost DECIMAL NOT NULL,
  currency TEXT DEFAULT 'USD',
  asset_type TEXT DEFAULT 'stock',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE holdings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own data" ON holdings
  FOR ALL USING (auth.uid() = user_id);
```

## Deployment to Vercel (Free)

1. Push code to GitHub
2. Go to vercel.com → New Project → Import repo
3. Click Deploy (auto-detects Next.js)
4. Add env vars in Vercel Dashboard

Site live at: https://your-project.vercel.app

## Payment Integration

Uses **Lemon Squeezy**:
- Sign up at lemon.squeezy.com
- Create Starter ($4.99/mo) and Pro ($12.99/mo) products
- Handles credit card, PayPal, Apple Pay, Google Pay
- Auto VAT/GST for 100+ countries
- Payouts to Wise → Malaysian bank account

## Compliance

- Information tool only — NOT financial advice
- All AI content includes disclaimers
- No buy/sell recommendations
- Past performance warnings on backtests

## License

MIT © 2026 Kairo
