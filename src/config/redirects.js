// ==========================================
// REDIRECT CONFIG — daftar redirect 301 (SEO)
// ==========================================
// Tambahkan pasangan dari:ke untuk redirect permanen.
// Infrastruktur diaktifkan lewat blok RewriteRule di
// public/.htaccess. Daftar ini dipakai oleh skrip
// generate-redirects (optional) dan dokumentasi.
//
// Contoh:
//   { from: "/vessel-provision", to: "/logistics-forwarding" }
//
// NOTE: Aturan 301 permanen hanya ditambahkan SETELAH URL
// baru terindex di Google (paling cepat 2-4 minggu setelah
// deploy + submit sitemap). Jangan mengaktifkan redirect
// ke URL yang belum pernah ada.

export const redirects = [];
