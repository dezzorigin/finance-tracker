# Arsitektur — Finance Tracker

## Ringkasan

Finance Tracker adalah aplikasi manajemen keuangan pribadi satu halaman
(Next.js 14 App Router, static export) yang berjalan sepenuhnya di sisi
klien. Tidak ada server, tidak ada akun, tidak ada database jarak jauh:
semua data tinggal di perangkat pengguna.

Alur lengkap: lihat [diagrams/app-flow.svg](diagrams/app-flow.svg).

## Lapisan

### 1. Landing (pengguna baru)

`components/LandingPage.tsx` — halaman SaaS: navbar sticky (logo + tautan
Fitur/Cara Kerja + ikon GitHub ke repo + CTA), hero dua kolom (copy +
mockup kartu saldo sebagai preview produk), grid 6 fitur, cara kerja 3
langkah, catatan privasi, CTA band, footer.

Tombol "Buka Aplikasi" menyimpan `ft-entered = '1'` di localStorage dan
menampilkan aplikasi. Pengguna yang kembali langsung masuk aplikasi
(landing dilewati).

### 2. Aplikasi (bingkai ponsel)

`app/page.tsx` adalah satu-satunya route. Setelah masuk, aplikasi tampil
dalam bingkai ponsel (maks. 420px, sudut membulat di desktop, penuh di
ponsel) dengan bottom nav 4 tab:

| Tab | Komponen | Isi |
| --- | --- | --- |
| Beranda | `Header`, `BudgetCard`, `ActivityList` | Sapaan + avatar inisial, kartu Total Saldo + progres budget bulanan, riwayat transaksi, tombol Export CSV |
| Target Tabungan | `WishlistCard`, `AddWishlistModal`, `WishlistDetailModal` | Daftar target + progres, buat target (nama, target Rp, foto opsional max 2MB), detail + top-up tabungan |
| Analisis | `SpendingAnalysis` | Grafik combo Recharts (area pemasukan + bar pengeluaran) 7/30 hari, kategori teratas |
| Profil | `Profile/ProfilePage` | Data diri yang bisa diedit (localStorage), Export CSV, Hapus Semua Data |

Modal tambah transaksi (`AddTransactionModal`): pemilih Pemasukan/
Pengeluaran, nominal, kategori (Makanan, Sewa, Belanja, Transport,
Tagihan, Gaji, Investasi), catatan. Form di-reset setiap kali modal
dibuka, supaya pilihan transaksi sebelumnya tidak terbawa.

Pindah tab menutup modal detail wishlist — modal tidak menutupi tab lain.

### 3. Data (lokal)

- **IndexedDB** (`lib/db.ts`, `idb`, nama DB `finance-tracker-db`):
  store `transactions` (keyPath `id`, autoIncrement, index `by-date`) dan
  store `wishlists` (keyPath `id`, autoIncrement).
- **localStorage** (`lib/profile.ts`): `ft-profile` (nama, jabatan, email,
  telepon, website, lokasi) dan `ft-entered` (penanda sudah masuk aplikasi).
- **Export CSV** (`lib/exportCSV.ts`): mengunduh semua transaksi sebagai
  `finance-data.csv` (Date, Type, Category, Description, Amount).
- **Hapus Semua Data**: menghapus semua database IndexedDB + localStorage,
  lalu reload halaman.

Tidak ada data pribadi siapa pun yang tertanam di repo: profil default
adalah "Pengguna" generik dan foto profil lama sudah dihapus. Avatar
menampilkan inisial nama dari profil.

### 4. Build & deploy

- `next.config.mjs`: `output: 'export'` + `images.unoptimized` — `next build`
  menghasilkan folder `out/` statis yang di-deploy ke Cloudflare Pages
  (direct upload). Tidak ada API route / server action.
- `app/icon.png` + `app/favicon.ico`: ikon lokal (dibangkitkan dari
  `public/icon-192.png`); manifest di `public/manifest.json`
  (nama "Finance Tracker", theme `#09090B`).
- Font Inter via `next/font/google` (diunduh saat build, disajikan lokal).

## Keputusan desain

- **Tema gelap + lime `#D9F154`**: identitas visual asli repo dipertahankan
  (zinc-950 + lime), bukan diganti.
- **Bingkai ponsel**: aplikasi memang dirancang sebagai app ponsel; di
  desktop ia tampil sebagai kartu ponsel di tengah layar hitam.
- **Bahasa Indonesia**: seluruh string antarmuka berbahasa Indonesia.
- **Komponen mati dihapus**: `FilterBar`, `FinanceChart`, `DarkModeToggle`
  tidak pernah dipakai di mana pun (termasuk export CSV yang sebelumnya
  tidak terhubung ke UI). Export CSV kini terhubung ke tombol di Beranda
  dan tab Profil.

## Perbaikan bug saat rebuild (v1.1.0)

1. `BudgetCard` menampilkan **pengeluaran** dengan label "Total Saldo" —
   sekarang menampilkan saldo asli (pemasukan − pengeluaran) dan
   pengeluaran bulan ini sebagai baris terpisah.
2. Modal tambah transaksi tidak me-reset pilihan tipe — transaksi kedua
   dan seterusnya bisa tersimpan dengan tipe yang salah (mis. pengeluaran
   tercatat sebagai pemasukan). Form kini di-reset setiap kali dibuka.
3. Modal detail wishlist tetap terbuka saat pindah tab dan menutupi tab
   lain — pindah tab kini menutup modal.
4. Judul metadata `" Finance"` (spasi di depan) dan nama manifest
   `"Finance "` — diperbaiki jadi "Finance Tracker".
5. `themeColor`/`viewport` di `metadata` memicu warning build Next.js —
   dipindah ke export `viewport`.
6. Tidak ada favicon (404 di console) — ditambah `app/favicon.ico` +
   `app/icon.png` lokal; ikon manifest sebelumnya dari CDN Flaticon
   diganti ikon lokal.
7. Judul "Analisis Pasar" diganti "Analisis Pengeluaran"; empty state
   "No transactions yet." diganti "Belum ada transaksi."

## Pengujian

Play-test end-to-end (headless Chrome, `play-ft.mjs`): 22 cek — landing,
masuk aplikasi, tambah 3 transaksi (saldo Rp4.890.000 terverifikasi),
export CSV (3 baris), grafik analisis, wishlist + top-up 17%, edit profil
(nama berubah, header ikut berubah), manifest, mobile 390px tanpa
horizontal overflow. Nol console/page error.
Video demo: `docs/demo/demo.mp4` (21,7 detik, 1280×900, tanpa suara).
