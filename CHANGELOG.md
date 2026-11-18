# CHANGELOG — Finance Tracker

Semua perubahan penting dicatat di sini.

## [1.1.0] — 2026-11-18

Rebuild total menjadi proper (repo #6 program P1).

### Ditambahkan

- Landing page SaaS: navbar sticky (logo + tautan Fitur/Cara Kerja + ikon
  GitHub ke repo + CTA), hero dua kolom dengan mockup preview produk,
  grid 6 fitur, cara kerja 3 langkah, catatan privasi, CTA band, footer.
- `next.config.mjs`: static export (`output: 'export'`) untuk deploy
  Cloudflare Pages.
- Profil bisa diedit (`lib/profile.ts`, localStorage): nama, jabatan,
  email, telepon, website, lokasi. Avatar inisial; header ikut berubah.
- Export CSV terhubung ke UI: tombol di Beranda ("Riwayat Transaksi") dan
  tab Profil ("Data & Privasi").
- Hapus Semua Data di tab Profil (hapus IndexedDB + localStorage + reload).
- Favicon (`app/favicon.ico`) + ikon app lokal (`app/icon.png`,
  `public/icon-192/512.png`); manifest diperbaiki.
- `aria-label` di semua tombol bottom nav.
- CI: typecheck + build + Lighthouse (`.github/workflows/ci.yml`).
- Docs: README baru, PRD v2.0, `docs/architecture.md`,
  `docs/diagrams/app-flow.svg`, 7 screenshot, video demo 21,7 detik.

### Diperbaiki

- **Bug saldo**: `BudgetCard` menampilkan pengeluaran dengan label
  "Total Saldo". Sekarang menampilkan saldo asli (pemasukan − pengeluaran)
  + baris pengeluaran bulan ini.
- **Bug modal transaksi**: form tidak di-reset saat dibuka ulang — tipe
  transaksi sebelumnya terbawa (pengeluaran bisa tersimpan sebagai
  pemasukan). Form kini di-reset setiap kali dibuka.
- **Bug modal wishlist**: detail wishlist tetap terbuka saat pindah tab dan
  menutupi tab lain. Pindah tab kini menutup modal.
- Judul metadata `" Finance"` → "Finance Tracker"; nama manifest
  `"Finance "` → "Finance Tracker".
- `themeColor`/`viewport` dipindah dari `metadata` ke export `viewport`
  (menghilangkan warning build Next.js).
- Favicon 404 di console — teratasi.
- Judul "Analisis Pasar" → "Analisis Pengeluaran"; empty state
  "No transactions yet." → "Belum ada transaksi."
- Nama database IndexedDB `finance-tracker-sann404` → `finance-tracker-db`.

### Dihapus

- Data pribadi yang tertanam di repo: nama + foto profil, email, telepon,
  website, dan tautan channel WhatsApp orang lain di `Header`/`ProfilePage`
  (diganti profil generik yang bisa diedit pengguna). Foto
  `public/ae37854e0fddd035f48e05e5a0b63a37.jpg` dihapus dari repo.
- Komponen mati yang tidak pernah dipakai: `FilterBar`, `FinanceChart`,
  `DarkModeToggle`.
- Ikon manifest dari CDN Flaticon — diganti ikon lokal.

## [1.0.0] — 2026-11-05

- Rilis awal: aplikasi Next.js + IndexedDB — transaksi, budget, analisis
  (Recharts), wishlist, profil. README + PRD template.
