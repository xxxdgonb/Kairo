# Kairo — Deployment Guide

## Prerequisites Checklist

- [x] GitHub account: cwq4908
- [x] Vercel account (free, connect via GitHub)
- [x] Supabase account (free tier): xxxdgonb@gmail.com
- [x] Lemon Squeezy account (free to create, 5% fee on revenue)
- [x] Resend account (free up to 3000 emails/month)
- [x] OneSignal account (free)
- [x] Sentry account (free up to 5K errors/month)
- [x] Figma account (free)
- [x] CoinGecko API key (free tier, 10 req/min)

---

## Phase 1: Deploy to Production (Zero Cost)

### Step 1: Push to GitHub

```powershell
cd C:\Users\wenqu\Documents\Codex\2026-07-13\y-q\kairo
git add -A
git commit -m "Initial release: Kairo AI Investment Platform MVP"
git branch -M main
git remote add origin https://github.com/cwq4908/kairo.git
git push -u origin main
```

> ⚠️ 如果 gh CLI 无法使用，手动在 GitHub 创建仓库后：
> ```
> git remote add origin https://github.com/USERNAME/kairo.git
> git push -u origin main
> ```

### Step 2: Set Up Supabase

1. 登录 https://supabase.com 用 `xxxdgonb@gmail.com`
2. 创建新项目 → 选择默认区域（Singapore 最佳）
3. 复制 **Project URL** 和 **anon public key**
4. 运行 SQL migration：
   - 进入 SQL Editor → New query
   - 粘贴 `supabase/migrations/001_initial_schema.sql` 内容
   - Run

### Step 3: Configure Environment Variables in Vercel

1. 登录 https://vercel.com
2. Import Git repository → `cwq4908/kairo`
3. 添加 Environment Variables：
   - `NEXT_PUBLIC_SUPABASE_URL` → 从 Supabase 复制
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → 从 Supabase 复制
   - `LEMON_SQUEEZY_STORE_ID` → (留空，稍后配置)
   - `RESEND_API_KEY` → (稍后配置)

### Step 4: Deploy

点击 Deploy → 等待 2-3 分钟 → 访问 `https://kairo.vercel.app`

---

## Phase 2: Payment Integration (When Ready)

### Lemon Squeezy Setup

1. 注册 https://lemonsqueezy.com
2. 创建产品：
   - Starter: $4.99/mo
   - Pro: $12.99/mo
   - Annual options too
3. 获取 Store ID 和 Webhook Secret
4. 添加到 Vercel env vars

### Wise Integration (for MYB withdrawal)

1. 注册 https://wise.com
2. 创建 USD receiving account
3. 连接 Lemon Squeezy payout → Wise → Maybank/CIMB

---

## Phase 3: Email & Notifications

### Resend (Email)

1. 注册 https://resend.com
2. 验证域名（可选，先用 resend 域名）
3. 获取 API Key → 添加到 Vercel env

### OneSignal (Push Notifications)

1. 注册 https://onesignal.com
2. 创建应用 "Kairo"
3. 获取 App ID + REST API Key
4. 集成到 Next.js frontend

---

## Phase 4: Monitoring

### Sentry

1. 注册 https://sentry.io
2. 创建项目 → Next.js
3. 获取 DSN → 添加到 Vercel env
4. 安装 `@sentry/nextjs` → `npm i @sentry/nextjs`

---

## Compliance Notes

- ✅ All pages include financial disclaimer
- ✅ No buy/sell recommendations in AI output
- ✅ Login page includes ToS/Privacy agreement
- ✅ Footer includes copyright and disclaimer
- ✅ Pricing page includes money-back guarantee info

---

## Post-Launch Tasks

1. [ ] Connect custom domain (e.g., kairo.ai or kairo.app)
2. [ ] Set up Google Analytics / Plausible
3. [ ] Add real API data (AlphaVantage or Polygon.io free tier)
4. [ ] Integrate Gemini Flash API for real AI analysis
5. [ ] Create Terms of Service and Privacy Policy pages
6. [ ] Submit to Product Hunt for launch
7. [ ] Set up social media accounts (Twitter/X, LinkedIn)