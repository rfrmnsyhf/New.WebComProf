# Deployment Checklist — cbsabatam.com (SEO Sprint 1)

Checklist deploy ke Rumahweb cPanel (build React/Vite → upload `dist/`).
Centang item yang relevan.

---

## 0. Pra-build (lokal)

- [ ] `npm install` (pastikan `node_modules` sinkron)
- [ ] `npm run build` → pastikan output `✓ built in ...` tanpa error
- [ ] `npm run lint` → pastikan tetap **10 error pre-existing** (bukan error baru)

## 1. Verifikasi lokal sebelum deploy

- [ ] `npm run preview` lalu buka manual:
  - `/` hero video (`LAUTJAYAV2.mov`) tampil dan berjalan, strip USP (TrustStats) terlihat
  - `/services` → 8 kartu hub bisa diklik
  - 8 halaman layanan render: `/ship-agency`, `/ship-chandler`, `/marine-supply`,
    `/bunkering`, `/crew-manning`, `/customs-clearance`, `/offshore-support`,
    `/logistics-forwarding`
  - Breadcrumb + FAQ accordion + Related Services tampil
  - Toggle bahasa ID/EN tidak merusak layout
- [ ] Cek JSON-LD di tiap halaman (DevTools → `<script type="application/ld+json">`):
  - Home: LocalBusiness + Organization + WebSite
  - Halaman layanan: Service + BreadcrumbList + FAQPage
- [ ] Cek `dist/sitemap.xml` berisi 16 URL dengan `https://cbsabatam.com`

## 2. Upload ke cPanel (Rumahweb)

- [ ] Upload isi folder `dist/` ke folder publik situs (mis. `public_html/`)
- [ ] Pastikan file `.htaccess` ikut ter-upload (SPA fallback ke `index.html`)
- [ ] JANGAN aktifkan baris redirect 301 di `.htaccess` (masih dikomentari)
- [ ] Cek semua aset (`.js`, `.css`, gambar) 200 di browser
- [ ] `public/LAUTJAYAV2.mov` **WAJIB ter-upload** — hero Home mereferensikan `src="/LAUTJAYAV2.mov"` (folder yang sama dengan `index.html`)

## 3. Google Search Console

- [ ] Tambah properti `cbsabatam.com` (verifikasi DNS TXT atau meta tag)
- [ ] Submit `https://cbsabatam.com/sitemap.xml`
- [ ] Request indexing:
  - `https://cbsabatam.com/`
  - `https://cbsabatam.com/services`
  - 8 halaman layanan (masing-masing)
- [ ] Catat tanggal submit di CHANGELOG

## 4. Validasi pasca-deploy

- [ ] [Rich Results Test](https://search.google.com/test/rich-results) untuk:
  - Homepage (Organization/LocalBusiness)
  - 1–2 halaman layanan (Service + FAQ)
- [ ] [Schema.org Validator](https://validator.schema.org/) untuk JSON-LD Home
- [ ] Uji crawl: pastikan tidak ada 404 internal (breadcrumb/footer/hub/related)
- [ ] Cek title + metaDescription + canonical unik di tiap halaman layanan

## 5. Tindak lanjut (2–4 minggu)

- [ ] Pantau GSC: kueri, posisi, error indexing, CWV
- [ ] Setelah URL baru terindex → aktifkan redirect 301 (lihat `docs/seo-roadmap.md`)
- [ ] Buat mailbox email domain (manual) → ganti email di kontak + schema
- [ ] Evaluasi hero video hanya jika data (PageSpeed LCP, CWV GSC, analytics) mendukung → konversi MOV → MP4/WebM (lihat `docs/seo-roadmap.md`)

## Kontak referensi

- Owner WA: +6282171477799 · Admin WA: +6282121608787
- Email: cbsa.batam@gmail.com · Alamat: Jl. Duyung RT 003 RW 005, Sungai Jodoh, Batu Ampar, Batam
