# PRD — Finance Tracker

## 1. Informasi Proyek

| Field | Nilai |
|---|---|
| Nama Proyek | Finance Tracker |
| Tech Stack | Next.js 14 (App Router, static export) + React 18 + TypeScript + Tailwind CSS + Recharts |
| Status | Live |
| Penanggung Jawab | Nabil Aulia Dika |
| Live Demo | https://finance-tracker.pages.dev |
| Repo | https://github.com/dezzorigin/finance-tracker |
| Versi Dokumen | 2.0 |
| Tanggal | 2026-11-18 |

## 2. Latar Belakang

Aplikasi manajemen keuangan pribadi untuk pengguna Indonesia: pencatatan
transaksi harian, budget bulanan, analisis pengeluaran, dan target
tabungan. Dirancang sebagai aplikasi ponsel (bingkai 420px) yang dibuka
lewat landing page SaaS. Semua data tersimpan lokal di perangkat —
tanpa akun, tanpa server, tanpa biaya.

## 3. Tujuan

- Satu tempat mencatat uang masuk dan keluar dengan cepat.
- Memberi gambaran saldo, pemakaian budget, dan pola pengeluaran.
- Membantu menabung lewat target yang progresnya terlihat.
- Menjaga privasi: data tidak pernah keluar dari perangkat pengguna.

## 4. Ruang Lingkup

### Termasuk

- Landing page SaaS (navbar + GitHub, hero + preview, fitur, cara kerja).
- Aplikasi 4 tab: Beranda, Target Tabungan, Analisis, Profil.
- Transaksi: tambah (pemasukan/pengeluaran, 7 kategori, catatan), hapus.
- Budget bulanan Rp5.000.000 dengan kartu saldo + progres.
- Analisis: grafik combo 7/30 hari + kategori teratas.
- Wishlist: buat target (foto opsional), top-up, hapus.
- Profil: data diri bisa diedit, export CSV, hapus semua data.
- PWA manifest + ikon lokal, favicon.

### Tidak termasuk

- Akun / login / sinkronisasi antar perangkat.
- Backend / API / database server.
- Pengingat / notifikasi.
- Multi-mata uang (hanya IDR).

## 5. Fitur & Persyaratan Fungsional

| # | Fitur | Perilaku |
|---|---|---|
| 1 | Landing page | Tampil untuk pengguna baru; tombol "Buka Aplikasi" menyimpan `ft-entered` dan masuk aplikasi; pengguna kembali langsung masuk aplikasi |
| 2 | Tambah transaksi | Modal: tipe (Pengeluaran/Pemasukan), nominal wajib > 0, kategori, catatan opsional; form di-reset setiap kali dibuka |
| 3 | Hapus transaksi | Konfirmasi `confirm()`; saldo dan riwayat diperbarui |
| 4 | Kartu saldo | Menampilkan Total Saldo = pemasukan − pengeluaran; baris pengeluaran bulan ini; progres budget (pengeluaran / Rp5.000.000) |
| 5 | Riwayat transaksi | Urut tanggal terbaru dulu; ikon per kategori; tombol Export CSV (nonaktif jika kosong) |
| 6 | Analisis | Grafik area pemasukan + bar pengeluaran (Recharts), rentang 7/30 hari; Top Kategori 4 teratas dengan persentase |
| 7 | Target tabungan | Buat target (nama, target Rp, foto max 2MB opsional); detail target: progres %, sisa, top-up, hapus; badge "Tercapai" di 100% |
| 8 | Profil | Nama, jabatan, email, telepon, website, lokasi — bisa diedit, tersimpan di localStorage; avatar inisial; header ikut berubah |
| 9 | Export CSV | Mengunduh `finance-data.csv` (Date, Type, Category, Description, Amount) |
| 10 | Hapus semua data | Konfirmasi; menghapus IndexedDB + localStorage, lalu reload |

## 6. Persyaratan Non-Fungsional

- **Performa:** static export; halaman pertama < 200 KB JS inti; grafik render < 1 detik setelah data ada.
- **Privasi:** tidak ada request jaringan ke server mana pun saat memakai aplikasi (selain memuat halaman pertama); tidak ada data pribadi tertanam di repo.
- **Keamanan:** rahasia (`.env`) tidak boleh ter-commit; tidak ada secret di repo.
- **Aksesibilitas:** tombol navigasi ber-`aria-label`; kontras teks-putih di atas tombol lime terjaga; zoom diizinkan di landing.
- **Responsif:** landing + aplikasi tanpa horizontal overflow di 390px.

## 7. Arsitektur & Tech Stack

Lihat [docs/architecture.md](docs/architecture.md) dan
[docs/diagrams/app-flow.svg](docs/diagrams/app-flow.svg).

- Next.js 14 App Router, `output: 'export'` → folder `out/` statis.
- Penyimpanan: IndexedDB (`idb`, DB `finance-tracker-db`, store
  `transactions` + `wishlists`) dan localStorage (profil + penanda masuk).
- Deploy: Cloudflare Pages (direct upload `out/`).
- CI: typecheck (`tsc --noEmit`) + `next build` + Lighthouse.

## 8. Milestone

| Fase | Status |
|---|---|
| Inisialisasi & scaffolding | ✅ |
| Pengembangan fitur inti | ✅ |
| Landing page SaaS | ✅ |
| Perbaikan bug (saldo, modal, profil) | ✅ |
| Testing & QA (play-test 22 cek) | ✅ |
| Deployment (Cloudflare Pages) | ✅ |
| Dokumentasi (README + PRD + arsitektur + video) | ✅ |

## 9. Risiko & Mitigasi

| Risiko | Mitigasi |
|---|---|
| Data hilang jika pengguna menghapus data browser | Export CSV berkala; tombol hapus data memakai konfirmasi |
| Konfigurasi env bocor | `.gitignore` + `.env.example` (tidak ada secret di repo) |
| Dependency usang (`next: latest`) | Kunci versi lewat `package-lock.json`; audit berkala |
| Nama Pages diambil orang lain | Nama adalah namespace global — fallback disiapkan saat create |

## 10. Kriteria Keberhasilan

- Aplikasi berjalan tanpa error di lingkungan dev dan live.
- Play-test end-to-end semua fitur inti lolos (22/22, 0 console error).
- README menampilkan screenshot tampilan asli + video demo.
- CI hijau (typecheck + build + Lighthouse).

## 11. Lisensi

MIT (LICENSE)
