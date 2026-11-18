'use client';
import { Wallet, Plus, BarChart2, Target, Download, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface Props {
  onEnter: () => void;
}

const FEATURES = [
  {
    icon: Plus,
    title: 'Catat Transaksi',
    desc: 'Pemasukan dan pengeluaran tercatat dalam hitungan detik, lengkap dengan kategori dan catatan.',
  },
  {
    icon: Wallet,
    title: 'Budget Bulanan',
    desc: 'Atur batas belanja bulanan dan pantau pemakaiannya lewat progress bar di kartu saldo.',
  },
  {
    icon: BarChart2,
    title: 'Analisis Pengeluaran',
    desc: 'Grafik pemasukan vs pengeluaran 7 atau 30 hari terakhir, plus kategori teratasmu.',
  },
  {
    icon: Target,
    title: 'Target Tabungan',
    desc: 'Buat target impian, pasang foto, dan nabung sedikit demi sedikit sampai 100%.',
  },
  {
    icon: Download,
    title: 'Export CSV',
    desc: 'Semua transaksi bisa diunduh sebagai file CSV kapan pun — datamu tetap milikmu.',
  },
  {
    icon: ShieldCheck,
    title: 'Privasi Lokal',
    desc: 'Tanpa akun, tanpa server. Semua data tersimpan di IndexedDB perangkatmu sendiri.',
  },
];

const STEPS = [
  { n: '1', title: 'Buka aplikasi', desc: 'Tanpa daftar, tanpa login. Langsung masuk ke dasbor keuanganmu.' },
  { n: '2', title: 'Catat pemasukan & pengeluaran', desc: 'Tekan tombol +, pilih kategori, isi nominal — selesai.' },
  { n: '3', title: 'Pantau & capai target', desc: 'Lihat analisis pengeluaran dan progres target tabunganmu.' },
];

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export default function LandingPage({ onEnter }: Props) {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#09090B]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D9F154] text-black">
              <Wallet size={20} strokeWidth={2.5} />
            </span>
            <span className="text-lg font-bold tracking-tight">
              Finance<span className="text-[#D9F154]">Tracker</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-400 md:flex">
            <a href="#fitur" className="transition hover:text-white">Fitur</a>
            <a href="#cara-kerja" className="transition hover:text-white">Cara Kerja</a>
          </nav>
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/dezzorigin/finance-tracker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lihat di GitHub"
              title="Lihat di GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-300 transition hover:border-zinc-600 hover:text-white"
            >
              <GithubIcon />
            </a>
            <button
              onClick={onEnter}
              className="rounded-full bg-[#D9F154] px-4 py-2.5 text-sm font-bold text-black transition hover:bg-[#cbe63d] sm:px-5"
            >
              Buka Aplikasi
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-xs font-semibold text-zinc-300">
            <ShieldCheck size={14} className="text-[#D9F154]" />
            Gratis · Tanpa akun · Data di perangkatmu
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Keuangan pribadi,
            <br />
            <span className="text-[#D9F154]">tercatat rapi.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            Catat transaksi, atur budget bulanan, analisis pengeluaran, dan nabung
            untuk targetmu — semua tersimpan lokal di perangkat, tanpa akun,
            tanpa server.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onEnter}
              className="flex items-center gap-2 rounded-full bg-[#D9F154] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-[#cbe63d]"
            >
              Buka Aplikasi <ArrowRight size={16} />
            </button>
            <a
              href="#cara-kerja"
              className="rounded-full border border-zinc-700 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              Lihat cara kerja
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
            {['Tanpa instalasi', 'Tanpa langganan', 'Export CSV'].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check size={15} className="text-[#D9F154]" /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* PREVIEW PRODUK — mockup statis dari UI asli, bukan screenshot produk lain */}
        <div className="mx-auto w-full max-w-[380px]">
          <div className="rounded-[28px] border border-zinc-800 bg-[#18181B] p-5 shadow-2xl shadow-black/60">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium text-zinc-300 ring-1 ring-white/5">
                Contoh tampilan
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Main Wallet</span>
            </div>
            <p className="text-xs font-medium text-zinc-400">Total Saldo</p>
            <p className="mt-1 text-3xl font-bold tracking-tight">Rp2.450.000</p>
            <div className="mt-5">
              <div className="mb-2 flex justify-between text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                <span>Budget Bulanan</span>
                <span className="text-white">49%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[49%] rounded-full bg-[#D9F154]" />
              </div>
            </div>
            <div className="mt-5 space-y-1 border-t border-zinc-800/60 pt-4">
              {[
                { label: 'Gaji', date: '18 Nov 2026', amount: '+Rp5.000.000', income: true },
                { label: 'Makanan', date: '18 Nov 2026', amount: '-Rp85.000', income: false },
                { label: 'Transport', date: '17 Nov 2026', amount: '-Rp25.000', income: false },
              ].map((t) => (
                <div key={t.label + t.date} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-white">{t.label}</p>
                    <p className="text-[10px] text-zinc-400">{t.date}</p>
                  </div>
                  <p className={`text-sm font-semibold ${t.income ? 'text-[#D9F154]' : 'text-white'}`}>{t.amount}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-zinc-400">Tampilan aplikasi — data contoh untuk ilustrasi.</p>
        </div>
      </section>

      {/* FITUR */}
      <section id="fitur" className="border-t border-zinc-800/60">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Semua yang kamu butuhkan, tanpa yang tidak</h2>
          <p className="mt-2 max-w-xl text-zinc-400">
            Enam fitur inti untuk mengelola uang harian — langsung dari browser, tanpa daftar.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-3xl border border-zinc-800 bg-[#151A2D]/60 p-6 transition hover:border-zinc-700">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D9F154]/10 text-[#D9F154]">
                  <f.icon size={22} />
                </div>
                <h3 className="font-bold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARA KERJA */}
      <section id="cara-kerja" className="border-t border-zinc-800/60">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Cara kerja</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9F154] text-base font-extrabold text-black">
                  {s.n}
                </span>
                <h3 className="mt-4 font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section className="border-t border-zinc-800/60">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Mulai catat keuanganmu hari ini</h2>
          <p className="mx-auto mt-2 max-w-md text-zinc-400">
            Gratis selamanya. Datamu tidak pernah keluar dari perangkatmu.
          </p>
          <button
            onClick={onEnter}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D9F154] px-7 py-3.5 text-sm font-bold text-black transition hover:bg-[#cbe63d]"
          >
            Buka Aplikasi <ArrowRight size={16} />
          </button>
        </div>
        <footer className="border-t border-zinc-800/60">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-zinc-400">
            <span>Finance Tracker — MIT License</span>
            <a
              href="https://github.com/dezzorigin/finance-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <GithubIcon size={16} /> github.com/dezzorigin/finance-tracker
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
