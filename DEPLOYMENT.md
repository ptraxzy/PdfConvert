# 🚀 DEPLOYMENT CHECKLIST
# Follow langkah ini untuk deploy ke production

## ✅ LANGKAH 1: Setup Supabase (GRATIS)

1. Buka https://supabase.com
2. Sign in dengan GitHub
3. Create New Project:
   - Name: konversipdf
   - Database Password: (simpan baik-baik)
   - Region: Southeast Asia (Singapore) - terdekat
   - Pricing Plan: FREE
4. Tunggu project dibuat (~2 menit)
5. Buka SQL Editor (ikon 🔧 di sidebar)
6. New Query → Copy paste isi `supabase-schema.sql`
7. Run query (tekan tombol Run)
8. Cek Tables - harusnya ada `tool_usage` dan `rate_limits`
9. Pergi ke Settings > API
10. Copy credentials ini:
    - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
    - anon public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## ✅ LANGKAH 2: Setup Environment Variables

1. Copy file `.env.example` jadi `.env.local`:
   ```bash
   copy .env.example .env.local
   ```

2. Edit `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   NEXT_PUBLIC_ENABLE_RATE_LIMIT=false
   NEXT_PUBLIC_DAILY_REQUEST_LIMIT=100
   ```

3. Test locally:
   ```bash
   npm run dev
   ```

## ✅ LANGKAH 3: Push ke GitHub

1. Init Git (kalau belum):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create repo di GitHub:
   - Buka https://github.com/new
   - Repository name: `konversipdf`
   - Public/Private: terserah
   - JANGAN centang "Add README" (sudah ada)

3. Push code:
   ```bash
   git remote add origin https://github.com/USERNAME/konversipdf.git
   git branch -M main
   git push -u origin main
   ```

## ✅ LANGKAH 4: Deploy ke Vercel (GRATIS)

1. Buka https://vercel.com
2. Sign in dengan GitHub (yang sama)
3. Import Project → pilih repo `konversipdf`
4. Configure Project:
   - Framework Preset: Next.js (auto detect)
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
5. Add Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = (dari Supabase)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (dari Supabase)
   - `NEXT_PUBLIC_ENABLE_RATE_LIMIT` = false
   - `NEXT_PUBLIC_DAILY_REQUEST_LIMIT` = 100
6. Click "Deploy"
7. Tunggu ~2-3 menit
8. SELESAI! 🎉

## ✅ LANGKAH 5: Custom Domain (Optional)

1. Beli domain di Niagahoster/Rumahweb (~50rb/tahun domain .my.id)
2. Di Vercel dashboard → Settings → Domains
3. Add domain: `konversipdf.my.id`
4. Copy DNS records yang dikasih Vercel
5. Paste ke DNS settings di registrar domain kamu
6. Tunggu propagasi (~10 menit - 24 jam)

## 📊 LANGKAH 6: Monitoring (Optional)

### Vercel Analytics (FREE)
1. Di Vercel dashboard → Analytics
2. Enable Analytics (100K events/bulan gratis)

### Supabase Dashboard
1. Lihat usage: Supabase > Home > Usage
2. Lihat data: Table Editor > tool_usage
3. Query analytics:
   ```sql
   SELECT * FROM daily_usage_stats;
   SELECT * FROM popular_tools;
   ```

## 🔧 TROUBLESHOOTING

### Build Error?
- Cek error di Vercel Deployment Logs
- Pastikan semua dependencies ter-install
- Cek `package.json` - semua packages ada?

### CSS Tidak Muncul?
- Hard refresh: Ctrl + Shift + R
- Clear cache browser
- Cek Tailwind config

### Supabase Error?
- Cek env variables sudah benar
- Cek RLS policies di Supabase
- Test connection di browser console

### Rate Limit Issues?
- Disable dulu: `NEXT_PUBLIC_ENABLE_RATE_LIMIT=false`
- Naikkan limit: `NEXT_PUBLIC_DAILY_REQUEST_LIMIT=1000`

## 🎯 DONE!

Website kamu sekarang LIVE dan GRATIS selamanya dengan:
- ✅ Vercel Hobby Plan (bandwidth unlimited)
- ✅ Supabase Free Tier (500MB database, 50k rows/month)
- ✅ Custom domain support
- ✅ Auto SSL (HTTPS)
- ✅ Global CDN
- ✅ Auto deploy dari GitHub push

URL production: https://konversipdf.vercel.app

## 💰 BIAYA

- Vercel: **GRATIS** (Hobby plan)
- Supabase: **GRATIS** (Free tier)
- Domain: **50,000 IDR/tahun** (.my.id domain) - OPTIONAL

TOTAL: **GRATIS** (atau 50k/tahun kalau mau custom domain)
