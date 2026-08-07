# SEO Roadmap — cbsabatam.com

Roadmap pasca Sprint 1. Prioritas berdasarkan dampak vs biaya. Semua item di bawah
belum dikerjakan dan menunggu keputusan user sebelum dieksekusi.

---

## Fase A — Stabilisasi (0–4 minggu setelah deploy)

1. **Setup Google Search Console**
   - Verifikasi domain (DNS TXT) atau prefix via meta tag.
   - Submit `sitemap.xml` (16 URL).
   - Request indexing: homepage, `/services`, 8 halaman layanan.

2. **Pantau (mingguan)**
   - Kesan/klik per halaman layanan, posisi rata-rata keyword.
   - Error indexing di GSC (404, duplicate tanpa canonical, dll).
   - Validasi ulang Rich Results setelah deploy (schema Service, FAQ, LocalBusiness).

3. **Core Web Vitals**
   - Perhatikan LCP/FCP/INP di GSC "Core Web Vitals".
   - Existing: warning chunk JS > 500 kB — pertimbangkan code-splitting (dynamic
     import) per route layanan via `React.lazy` di `App.jsx`.

## Fase B — Optimasi lanjutan (4–12 minggu)

4. **Aktifkan redirect 301** — HANYA setelah URL baru terindex (2–4 minggu):
   - Buka `public/.htaccess`, aktifkan baris RewriteRule contoh.
   - Daftar redirect dikelola di `src/config/redirects.js` (jaga konsistensi + dokumentasi).
   - Contoh mapping lama → baru: `/vessel-provision` → `/logistics-forwarding`,
     `/crew-change` → `/crew-manning`.

5. **Perkaya schema**
   - Tambah `WebSite.sameAs` jika ada profil sosial/bisnis asli.
   - Evaluasi `ItemList` untuk hub `/services`.
   - `aggregateRating`/`review` **hanya** bila ada ulasan asli (jangan dikarang).

6. **Konten**
   - Blog/artikel (EN) tentang topik layanan: ship agency, chandler, bunkering,
     crew change di Batam — beri internal link ke landing page.
   - Perbarui `lastmod` sitemap saat konten berubah.

7. **Kontak**
   - Buat mailbox domain (manual di cPanel), ganti email di `company.js`,
     `serviceLandings.js` CTA, schema ContactPoint.

## Fase C — Ekspansi (opsional, v2.0)

8. **URL per bahasa** (hreflang) — roadmap v2.0. Saat ini bilingual via toggle JS
   (LanguageContext), URL tetap satu. Implementasi: `/id/...` & `/en/...` + `<link rel="alternate" hreflang>`.
9. **Struktur folder konten** — pindah `serviceLandings.js` ke per-file markdown/JSON
   agar konten bisa di-edit tanpa menyentuh kode (CMS ringan).
10. **Local SEO** — tambah halaman/kanal "Areas" per area (Batu Ampar, Sekupang, Kabil,
    Tanjung Uncang) bila relevan; usahakan Google Business Profile konsisten dengan NAP.

## Aturan yang tetap berlaku

- JANGAN mengarang statistik, klien, sertifikasi, atau tahun (sumber: company profile + website).
- Jangan hapus `public/LAUTJAYAV2.mov` (diputuskan dipertahankan).
- Redirect 301 hanya diaktifkan setelah URL baru terindex.
- Setiap perubahan besar → buat commit terpisah + build + lint.
