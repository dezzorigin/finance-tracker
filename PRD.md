# PRD — Finance Tracker

## 1. Informasi Proyek

| Field | Nilai |
|---|---|
| Nama Proyek | Finance Tracker |
| Tech Stack | Next.js |
| Status | Dalam pengembangan |
| Penanggung Jawab | Nabil Aulia Dika |
| Live Demo | https://97392e74.finance-tracker-dwi.pages.dev |
| Versi Dokumen | 1.0 |
| Tanggal | 2026 |

## 2. Latar Belakang

Aplikasi manajemen keuangan pribadi — pencatatan transaksi, budget, analisis pengeluaran, dan wishlist. Dibangun dengan Next.js + Recharts.

## 3. Tujuan

Menyediakan solusi digital yang efisien, terukur, dan mudah dipelihara.

## 4. Ruang Lingkup

- Fitur inti aplikasi sesuai struktur repo.
- Setup & konfigurasi pengembangan lokal.
- Dokumentasi (README + PRD).

## 5. Fitur & Persyaratan Fungsional

Struktur proyek:
- .wrangler/
- app/
- components/
- lib/
- public/
- types/
- LICENSE
- PRD.md
- README.md
- next-env.d.ts
- package-lock.json
- package.json
- postcss.config.mjs
- tailwind.config.ts
- tsconfig.json

## 6. Persyaratan Non-Fungsional

- **Performa:** responsif untuk penggunaan normal.
- **Keamanan:** rahasia (`.env`) tidak boleh ter-commit.
- **Maintainability:** kode terstruktur, terdokumentasi.

## 7. Arsitektur & Tech Stack

Next.js

## 8. Milestone

| Fase | Status |
|---|---|
| Inisialisasi & scaffolding | ✅ |
| Pengembangan fitur inti | 🔄 |
| Testing & QA | ⏳ |
| Deployment | ✅ |
| Dokumentasi | ✅ |

## 9. Risiko & Mitigasi

| Risiko | Mitigasi |
|---|---|
| Konfigurasi env bocor | `.gitignore` + `.env.example` |
| Dependency usang | Audit berkala |

## 10. Kriteria Keberhasilan

- Aplikasi berjalan tanpa error di lingkungan dev.
- README & PRD lengkap dan up-to-date.

## 11. Lisensi

MIT (LICENSE)
