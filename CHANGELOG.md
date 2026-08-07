# CHANGELOG — CBSA SEO Sprint 1

**Tanggal**: 8 Agustus 2026
**Scope**: Teknis SEO + konten untuk cbsabatam.com (PT. Chantika Bahari Sejahtera Abadi)

Semua commit di bawah berurutan dan sudah melewati `npm run build` (sukses) serta
`npm run lint` (tetap pada baseline 10 error pre-existing, tidak ada error baru).

---

## Sprint 1 — 8 Commit (selesai)

| # | Hash | Commit | Isi |
|---|------|--------|-----|
| 1 | `4c18ef3` | `feat(seo): add reusable SEO infrastructure` | `src/config/seo.js` (SITE + PAGES), komponen `src/components/seo/` (SEO, SchemaOrg, BreadcrumbSchema, FAQSchema, ServiceSchema, Canonical), `src/data/companyFaqs.js` (5 FAQ global bilingual), NAP di `company.js` diverifikasi (geo, hasMap, openingHours, areaServed, sameAs:[]), FAQSection memakai companyFaqs. |
| 2 | `ce62c4e` | `feat(schema): add Organization and LocalBusiness schema` | `src/data/schemas.js` (Organization, WebSite, LocalBusiness, ContactPoint + referensi `@id`), dipasang di Layout.jsx, Home.jsx, Contact.jsx. Meta `keywords` dihapus dari Layout. |
| 3 | `87a0baf` | `feat(service-pages): add service landing page framework` | `ServicePage.jsx` (template: SEO, ServiceSchema, BreadcrumbSchema, PageHero, Breadcrumbs, intro/overview, features, process, whyBatam, FAQ accordion, related, TrustStats, CTASection). Komponen `Breadcrumbs.jsx`, `TrustStats.jsx` (tanpa angka fiktif), `CTASection.jsx`. `serviceLandings.js` berisi 8 halaman layanan. |
| 4 | `0fb9bb3` | `feat(content): add per-service landing content from company profile` | Isi `overview[]` tiap halaman (ID+EN, total 600–1200 kata/halaman) dari company profile + website. Perbaiki slug related `"medical"` → `"offshore-support"`. |
| 5 | `2f5e059` | `feat(routing): add service routes, sitemap URLs, and redirect infra` | 8 route di `App.jsx`, `sitemap.xml` 16 URL, `src/config/redirects.js` (array kosong + dokumentasi), blok RewriteRule 301 dinonaktifkan di `.htaccess`. |
| 6 | `4cc4f22` | `feat(internal-links): link footer, hub cards, and home features to service pages` | Footer 8 link halaman layanan, kartu hub `/services` (14 item dengan slug) jadi link, kartu featured Home (5) jadi link. |
| 7 | `043d359` | `feat(home): replace hero video with image and add USP trust strip` | Menambahkan TrustStats strip di Home + mengganti hero `<video>` → `<img>`. **Catatan**: perubahan media hero pada commit ini kemudian dikembalikan (lihat "Revisi Pasca-Sprint 1"); TrustStats strip tetap dipertahankan. |
| 8 | docs ini | `docs(seo)` | CHANGELOG ini + `docs/seo-baseline.md`, `docs/seo-roadmap.md`, `docs/deployment-checklist.md`. |

---

## Revisi Pasca-Sprint 1 (keputusan change management)

| Hash | Commit | Isi |
|------|--------|-----|
| `3773a81` | `fix(home): restore client-approved hero video and retain SEO enhancements` | Hero Home kembali memakai `LAUTJAYAV2.mov` (keputusan: jangan ubah tampilan yang sudah disetujui client tanpa komunikasi). `TrustStats` strip, seluruh layout, CTA, metadata, dan struktur SEO **tetap dipertahankan**. Optimasi media (konversi MOV → MP4/WebM) menjadi backlog berbasis data — lihat `docs/seo-roadmap.md`. |

## Sebelum Sprint 1

- `cd15919` — "Finalisasi termasuk pengoptimalan SEO" (baseline project).

## Kontak Resmi (keputusan)

- WhatsApp utama: `+6282171477799` (Owner), `+6282121608787` (Admin) — dipakai di schema.
- Email tetap Gmail (`cbsa.batam@gmail.com`) sampai mailbox domain dibuat di cPanel (manual).
- Phone dari PDF (0812-2700-0045) tidak dipakai sebagai kontak utama schema.
