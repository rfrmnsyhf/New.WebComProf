# SEO Baseline — cbsabatam.com

**Tanggal**: 8 Agustus 2026
**Status**: Implementasi Sprint 1 selesai, belum deploy ke server, GSC belum disetup.

Dokumen ini adalah catatan kondisi SEO saat ini setelah Sprint 1. Semua klaim konten
berasal dari company profile (PDF "Guide 1, Company Profile CBSA") + website —
**tidak ada** statistik/klien/tahun yang dikarang.

---

## 1. Infrastruktur SEO

| Item | Lokasi | Catatan |
|------|--------|---------|
| Config SEO terpusat | `src/config/seo.js` | `SITE` + `PAGES` untuk halaman statis |
| Meta per halaman | `src/components/seo/SEO.jsx` | title, description, canonical, OG, JSON-LD via Helmet |
| Canonical | `src/components/seo/Canonical.jsx` | URL absolut `https://cbsabatam.com/...` |
| JSON-LD render | `src/components/seo/SchemaOrg.jsx` | injeksi `<script type="application/ld+json">` |
| Redirect config | `src/config/redirects.js` | array kosong (lihat roadmap) |

## 2. Schema.org yang terpasang

| Schema | Halaman | Catatan |
|--------|---------|---------|
| Organization | Semua (Layout) | `@id: https://cbsabatam.com/#organization` |
| WebSite | Semua (Layout) | |
| LocalBusiness | Home, Contact | `geo`, `hasMap`, `openingHoursSpecification` (Mo-Su 00:00-24:00), `areaServed` 7 area, `sameAs: []` |
| ContactPoint | Contact | WhatsApp Owner + Admin |
| Service | 8 halaman layanan | dari `ServiceSchema.jsx` + `serviceLandings.js` |
| BreadcrumbList | Semua halaman bertingkat | visual breadcrumb + schema konsisten |
| FAQPage | Contact + 8 halaman layanan | dari `companyFaqs.js` + FAQ tiap layanan |

Validasi manual via [Rich Results Test](https://search.google.com/test/rich-results) setelah deploy.

## 3. Halaman layanan (8 landing page)

| Slug | Keyword | 
|------|---------|
| `/ship-agency` | Ship Agency Batam |
| `/ship-chandler` | Ship Chandler Batam (Provision = subsection) |
| `/marine-supply` | Marine Supply Batam |
| `/bunkering` | Bunkering Batam |
| `/crew-manning` | Crew Change & Manning Batam |
| `/customs-clearance` | Customs Clearance Vessel Batam |
| `/offshore-support` | Offshore Marine Support Batam |
| `/logistics-forwarding` | Logistics & Forwarding Batam |

Setiap halaman: H1 unik, title + metaDescription unik (ID/EN), canonical, OG,
ServiceSchema, BreadcrumbSchema, FAQ schema, internal link terkait, CTA, TrustStats.
Konten: min 600 / target 800 / maks ±1200 kata per halaman (ID+EN gabungan).

## 4. Sitemap

- `public/sitemap.xml` — **16 URL** (1 home + about + services + 8 layanan + industries + contact + whatsapp + privacy + terms).
- `lastmod` diperbarui ke 2026-08-08.

## 5. Internal linking

- Footer: 8 link halaman layanan.
- `/services`: 14 kartu hub menjadi link ke halaman layanan.
- Home: 5 kartu featured menjadi link.
- Related services tiap halaman layanan.

## 6. Homepage

- Hero: `<video>` → `<img>` (LCP dioptimalkan, `fetchPriority="high"`).
- Strip USP 4 klaim tanpa angka (24/7 Operations, Fast Response, Experienced Team, Serving Indonesian Waters).
- File `public/LAUTJAYAV2.mov` tetap tersimpan (tidak dihapus), tidak lagi direferensikan.

## 7. Kontak resmi (dipakai schema & website)

- WhatsApp Owner: +6282171477799
- WhatsApp Admin: +6282121608787
- Email: cbsa.batam@gmail.com (+ email2), sampai mailbox domain aktif di cPanel
- Alamat: Jalan Duyung RT 003 RW 005, Sungai Jodoh, Batu Ampar, Kota Batam

## 8. Kualitas kode

- `npm run build` ✅ (warning chunk > 500 kB — pre-existing, roadmap)
- `npm run lint`: **10 error pre-existing** di `sections/About`, `sections/LocalKnowledge`,
  `sections/Philosophy`, `sections/Services` (unused imports). Bukan bagian sprint ini, tidak disentuh.

## 9. Yang BELUM ada (pra-deploy)

- [ ] Submit sitemap ke Google Search Console
- [ ] Request indexing homepage + 8 halaman layanan + `/services`
- [ ] Validasi Rich Results di domain produksi
- [ ] Mailbox email domain (manual di cPanel)
- [ ] Redirect 301 aktif (sengaja dinonaktifkan — lihat roadmap)
