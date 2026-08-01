# CBSA Company Profile — Progress Report & Notes

**Website**: https://cbsa.co.id/
**Tech Stack**: React 19 + Vite 8, Tailwind CSS v4, shadcn/ui (base-vega), Framer Motion, React Router DOM v7
**Last Updated**: 1 Agustus 2026

---

## 1. STATUS PROYEK SAAT INI

### Sudah Dikerjakan

| # | Kategori | Detail | Status |
|---|----------|--------|--------|
| 1 | Bug Fix | `text-gray` → ditambah `--color-gray` di CSS (40+ tempat) | ✅ Selesai |
| 2 | Bug Fix | Hardcoded `#FF6B00` → `bg-cta` theme variable (3 tempat) | ✅ Selesai |
| 3 | Bug Fix | LoadingScreen z-index `z-100` → `z-[100]` | ✅ Selesai |
| 4 | Bug Fix | Stats.jsx memory leak — `cancelAnimationFrame` cleanup | ✅ Selesai |
| 5 | Bug Fix | Industries.jsx `Container` naming collision → `ContainerIcon` | ✅ Selesai |
| 6 | Bug Fix | Navbar accessibility — `aria-label`, `aria-expanded` | ✅ Selesai |
| 7 | Bug Fix | Footer dead links (6 link `href="#"`) | ✅ Selesai |
| 8 | Bug Fix | SharingLocalKnowledge `hero.png` 404 — import dari assets | ✅ Selesai |
| 9 | Bug Fix | Medical Evacuation icon `Package` → `HeartPulse` | ✅ Selesai |
| 10 | Bug Fix | `aspect-4/3` → `aspect-4/3` untuk Tailwind v4 | ✅ Selesai |
| 11 | Cleanup | Hapus `theme.js` (dead code), `Hero.jsx` (dead component) | ✅ Selesai |
| 12 | Cleanup | Hapus 5 unused images (`home2.jpg`, `home3.jpg`, `home4.jpg`, `LOGOserap.png`, `aboutImg_serap.jpg`) | ✅ Selesai |
| 13 | Cleanup | Hapus import `@fontsource-variable/inter` (ga kepake, Manrope yang dipake) | ✅ Selesai |
| 14 | New Component | `PageHero.jsx` — reusable hero section (full-width bg + overlay + H1 + subtitle) | ✅ Selesai |
| 15 | New Section | `VisualGallery.jsx` — slider foto horizontal dokumentasi lapangan (About page) | ✅ Selesai |
| 16 | New Section | `FAQSection.jsx` — FAQ accordion 5 pertanyaan + callout box (Contact page) | ✅ Selesai |
| 17 | Page Update | 4 halaman (About, Services, Industries, Contact) — tambah Hero section | ✅ Selesai |
| 18 | Page Update | 4 halaman — susun ulang section assembly sesuai referensi DMS | ✅ Selesai |
| 19 | Cleanup | Hapus section Portfolio (page + route `/portfolio`) — permintaan client | ✅ Selesai |
| 20 | Cleanup | Hapus section Testimonials, ClientLogos, FounderStatement (data dummy) | ✅ Selesai |
| 21 | Cleanup | Hapus section ServiceTestimonials (Testimoni Klien) — permintaan client | ✅ Selesai |

### Build & Lint

| Cek | Hasil |
|-----|-------|
| `npm run build` | ✅ Sukses (507ms) |
| `npx eslint src/` | ✅ 0 errors |
| `git commit` | ✅ 2 commits (b67ea60, be83677) |

---

## 2. STRUKTUR HALAMAN SAAT INI

### Home (`/`)
```
Hero (YouTube video background + H1 + CTA)
→ Value Props (3 kartu: Profesionalisme, 24/7, Berpengalaman)
→ About Ringkas (gambar + floating badge "25+ Years" + deskripsi)
→ Stats (animated counters: 18+ Layanan, 11 Jenis Kapal, 7 Mitra, 24/7)
→ Featured Services (5 kartu)
→ Industries (11 vessel types + 7 stakeholders)
→ Certifications (6 sertifikasi)
→ BottomCTA ("Kapal Anda di Perairan Batam?")
```
```

### About (`/about`)
```
PageHero ("Melayani Perairan Strategis Indonesia")
→ About (deskripsi perusahaan + stats)
→ Philosophy (Visi + Misi + 4 nilai filosofi)
→ WhyChooseUs (8 keunggulan kompetitif)
→ VisualGallery (slider foto horizontal) ← BARU
→ LocalKnowledge (Sharing Local Knowledge + Our Aim + Our Expertise)
```

### Services (`/services`)
```
PageHero ("Layanan Kami")
→ Services (18 layanan grid)
→ RangeOfServices (checklist 12 item)
→ OperationalServices (9 aktivitas operasional grid)
→ SharingLocalKnowledge (4 knowledge cards + Our Aim)
```

### Industries (`/industries`)
```
PageHero ("Sektor Yang Kami Layani")
→ Industries (11 vessel types + 7 stakeholders)
→ VesselTypes (9 foto kartu jenis kapal)
```

### Contact (`/contact`)
```
PageHero ("Kontak Kami")
→ FAQSection (5 FAQ accordion + callout box) ← BARU
→ Contact (form + info kontak + Google Maps)
→ BottomCTA ("Kapal Anda di Perairan Batam?")
```

---

## 3. DATA YANG MASIH MENGGUNAKAN PLACEHOLDER

### 🔴 KRITIS — Harus diganti dengan data asli

| # | Section/File | Data Placeholder | Yang Dibutuhkan |
|---|-------------|-----------------|-----------------|
| 1 | `Certifications.jsx` | 6 sertifikasi (ISM Code, ISO 9001, SIUP, API, Bendera NKRI, SOLAS) | **Konfirmasi sertifikasi yang benar dimiliki CBSA** — ada yang perlu ditambah/dihapus? |
| 2 | `Footer.jsx` | Social media links pakai placeholder `https://instagram.com/` | **URL sosmed asli CBSA** — Instagram, Facebook, LinkedIn, YouTube (kalau ada) |
| 3 | `About.jsx` | Floating badge "25+ Years of Experience" | **Konfirmasi tahun berdiri CBSA** — apakah memang 25+ tahun? |
| 4 | `VisualGallery.jsx` | 5 foto dari assets yang ada (bukan foto dokumentasi asli) | **Foto-foto dokumentasi operasional lapangan asli CBSA** — minimal 5-8 foto aktivitas nyata di pelabuhan |

### 🟡 PENTING — Perlu diperbarui

| # | Section/File | Data Placeholder | Yang Dibutuhkan |
|---|-------------|-----------------|-----------------|
| 6 | `Company Logo` | `LOGO.png` (mungkin bukan logo final) | **Logo CBSA resolusi tinggi** — format PNG/SVG dengan background transparan |
| 7 | `Home.jsx` Hero | Video `LAUTJAYAV2.mov` | **Konfirmasi video hero** — apakah ini video yang tepat? Atau perlu diganti? |
| 8 | `Contact.jsx` | Google Maps embed URL pakai alamat umum | **Pin location GPS yang tepat** untuk kantor CBSA di Jalan Duyung Sungai Jodoh |
| 9 | `company.js` | Data kontak | **Verifikasi**: Email (cbsa.batam@gmail.com), Alamat lengkap |
| 10 | `Services.jsx` + `OperationalServices.jsx` | Deskripsi layanan umum | **Review deskripsi 18 layanan** — apakah sudah sesuai dengan definisi internal CBSA? |
| 11 | `Industries.jsx` | Deskripsi per jenis kapal | **Review deskripsi 11 jenis kapal** — apakah sudah sesuai dengan pengalaman operasional? |
| 12 | `VesselTypes.jsx` | 9 foto jenis kapal | **Ganti dengan foto asli armada** yang pernah ditangani CBSA (kalau ada) |

### 🟢 Nice-to-Have

| # | Section/File | Data | Keterangan |
|---|-------------|------|-----------|
| 13 | `Footer.jsx` | Privacy Policy & Syarat Ketentuan | Buat halaman hukum atau remove link |
| 14 | `Footer.jsx` | Sosmed URLs | Isi URL asli atau remove ikon sosmed |

---

## 4. PERBANDINGAN: CBSA vs REFERENSI DMS

### Yang sudah sesuai

| Aspek | Status |
|-------|--------|
| Hero section di semua halaman | ✅ Sudah ditambah |
| Value Props (3 kartu) di Home | ✅ Sudah ada |
| Services grid | ✅ Sudah ada (18 layanan) |
| Vessel Types grid | ✅ Sudah ada (11 jenis) |
| Stakeholders grid | ✅ Sudah ada (7 mitra) |
| Bottom CTA | ✅ Sudah ada |
| FAQ Section di Contact | ✅ Sudah ditambah |
| Visual Gallery di About | ✅ Sudah ditambah |
| Mid CTA di Services | ✅ Sudah ditambah |

### Yang masih perlu perbaikan

| Aspek | DMS (Referensi) | CBSA (Sekarang) | Yang Perlu |
|-------|-----------------|-----------------|------------|
| Layanan Utama | 5 pilar layanan + **carousel foto operasional** | Grid 18 layanan (tanpa foto) | Pertimbangkan tambah foto per layanan |
| Gallery Carousel | Slider foto horizontal dokumentasi lapangan | Sudah ada (menggunakan foto yang tersedia) | Ganti dengan foto dokumentasi asli |
| Social Media | Ada di footer | Ada tapi link placeholder | Isi URL asli |

---

## 5. CATATAN TEKNIS

### Tailwind CSS v4

| Class | Keterangan |
|-------|-----------|
| `text-gray` | Harus define `--color-gray` di `@theme inline` (sudah dilakukan) |
| `bg-cta` / `bg-cta-hover` | Custom color variables (sudah ditambah di `index.css`) |
| `aspect-4/3` | Pakai arbitrary value, bukan `aspect-4/3` |
| `bg-linear-to-*` | Canonical v4 class (bukan `bg-gradient-to-*`) |
| `z-[100]` | Pakai arbitrary value untuk z-index non-standard |

### Font

- **Body**: Manrope (di-import via `@fontsource/manrope` di `main.jsx`)
- **CSS Variable**: `--font-sans: 'Manrope', sans-serif` di `index.css`
- **Note**: `@fontsource-variable/inter` sudah dihapus (ga kepake)

### Color Theme

| Variable | Nilai | Kegunaan |
|----------|-------|----------|
| `--primary` | `oklch(0.145 0.017 285.823)` | Warna utama (navy gelap) |
| `--secondary` | `oklch(0.546 0.245 262.881)` | Warna aksen (biru) |
| `--accent` | `oklch(0.827 0.109 235.029)` | Warna pendukung (biru muda) |
| `--color-gray` | `var(--muted-foreground)` | Warna teks deskripsi (abu-abu) |
| `--color-cta` | `oklch(0.65 0.2 40)` | Warna tombol CTA (oranye) |
| `--color-cta-hover` | `oklch(0.58 0.2 40)` | Warna tombol CTA hover |

---

## 6. REKOMENDASI LANGKAH SELANJUTNYA

### Prioritas 1 — Data Asli (MENENTUKAN kualitas website)

1. **Konfirmasi sertifikasi** yang benar dimiliki CBSA
2. **Mintal foto-foto** dokumentasi lapangan (minimal 10-15 foto)
3. **Mintal logo CBSA** resolusi tinggi format PNG transparan

### Prioritas 2 — Fitur Tambahan

1. **SEO Optimization** — meta tags, Open Graph, sitemap.xml, robots.txt
2. **Performance** — lazy loading gambar, code splitting per route
3. **Analytics** — integrasi Google Analytics / Tag Manager
4. **Contact Form** — pertimbangkan pakai Formspree/EmailJS (sekarang pakai mailto)
5. **Blog/News** — section berita atau artikel maritim (opsional)
6. **Bahasa** — pertimbangkan toggle EN/ID (client internasional)

### Prioritas 3 — Maintenance

1. **Hosting & Domain** — pastikan cbsa.co.id pointing ke deployment
2. **SSL Certificate** — pastikan HTTPS aktif
3. **Backup** — setup otomatis backup database (kalau ada)
4. **Monitoring** — error tracking (Sentry/LogRocket)
5. **Update Dependencies** — jadwal update npm packages berkala

---

## 7. FILE STRUCTURE

```
src/
├── assets/images/         — 20 gambar (logo, hero, vessel types, layanan, dokumentasi; PNG foto sudah dikonversi ke JPG via sharp ±1.9 MB total)
├── components/
│   ├── common/
│   │   ├── LoadingScreen.jsx    — Loading screen dengan animasi logo
│   │   └── PageHero.jsx         — Reusable hero section [BARU]
│   ├── layout/
│   │   ├── Container.jsx        — Container wrapper
│   │   ├── Footer.jsx           — Footer 6 kolom
│   │   ├── Layout.jsx           — Layout wrapper (Navbar + Outlet + Footer)
│   │   └── Navbar.jsx           — Fixed navbar dengan mobile menu
│   └── ui/
│       └── button.jsx           — shadcn Button component
├── constants/
│   └── company.js               — Data perusahaan (nama, HP, email, alamat)
├── data/
│   ├── navigation.js            — Menu navigasi
│   └── services.js              — 18 layanan lengkap
├── pages/
│   ├── About.jsx                — Page: Tentang Kami
│   ├── Contact.jsx              — Page: Kontak
│   ├── Home.jsx                 — Page: Beranda
│   ├── Industries.jsx           — Page: Sektor
│   ├── NotFound.jsx             — Page: 404
│   ├── Services.jsx             — Page: Layanan
│   └── Whatsapp.jsx             — Page: WhatsApp
├── sections/
│   ├── About/
│   │   ├── About.jsx            — Deskripsi perusahaan + stats
│   │   └── VisualGallery.jsx    — Slider foto horizontal [BARU]
│   ├── BottomCTA/
│   │   └── BottomCTA.jsx        — CTA "Kapal Anda di Batam?"
│   ├── Certifications/
│   │   └── Certifications.jsx   — 6 sertifikasi
│   ├── Contact/
│   │   ├── Contact.jsx          — Form + info + maps
│   │   └── FAQSection.jsx       — FAQ accordion [BARU]
│   ├── Industries/
│   │   └── Industries.jsx       — 11 vessel types + 7 stakeholders
│   ├── LocalKnowledge/
│   │   ├── LocalKnowledge.jsx   — Sharing Local Knowledge (About page)
│   │   └── SharingLocalKnowledge.jsx — Detail SLK (Services page)
│   ├── OperationalServices/
│   │   └── OperationalServices.jsx — 9 aktivitas operasional
│   ├── Philosophy/
│   │   └── Philosophy.jsx       — Visi + Misi + 4 nilai
│   ├── RangeOfServices/
│   │   └── RangeOfServices.jsx  — Checklist 12 layanan
│   ├── Services/
│   │   ├── CorePillars.jsx      — 3 pilar layanan
│   │   └── Services.jsx         — 18 layanan grid
│   ├── Stats/
│   │   └── Stats.jsx            — Animated counters (4 stat)
│   ├── VesselTypes/
│   │   └── VesselTypes.jsx      — 9 foto kartu jenis kapal
│   └── WhyChooseUs/
│       └── WhyChooseUs.jsx      — 8 keunggulan kompetitif
├── App.jsx                      — Router setup
├── index.css                    — Tailwind v4 config + custom theme
└── main.jsx                     — Entry point
```

---

## 8. COMMANDS

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npx eslint src/ --ext .jsx,.js

# Preview build
npm run preview
```

---

## 9. GIT HISTORY

```
be83677  chore: add remaining tracked files and image assets
b67ea60  feat: full upgrade website CBSA — fix bugs, add hero sections, missing sections
9601fe1  Initial commit
```

**Branch**: `main` (2 commits ahead of `origin/main`)
