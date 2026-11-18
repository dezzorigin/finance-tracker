'use client';
import { useState } from 'react';
import { Mail, Phone, Globe, MapPin, User, Download, Trash2, ShieldCheck } from 'lucide-react';
import { Transaction } from '@/types/finance';
import { loadProfile, saveProfile, profileInitials, Profile } from '@/lib/profile';
import { exportToCSV } from '@/lib/exportCSV';

interface Props {
  transactions: Transaction[];
}

const FIELDS: { key: keyof Profile; label: string; icon: typeof Mail; placeholder: string }[] = [
  { key: 'name', label: 'Nama', icon: User, placeholder: 'Nama kamu' },
  { key: 'title', label: 'Jabatan', icon: User, placeholder: 'Misal: Mahasiswa' },
  { key: 'email', label: 'Email', icon: Mail, placeholder: 'email@contoh.com' },
  { key: 'phone', label: 'Telepon', icon: Phone, placeholder: '+62 812 3456 7890' },
  { key: 'website', label: 'Website', icon: Globe, placeholder: 'contoh.com' },
  { key: 'location', label: 'Lokasi', icon: MapPin, placeholder: 'Kota, Negara' },
];

export default function ProfilePage({ transactions }: Props) {
  const [profile, setProfile] = useState<Profile>(() => loadProfile());
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Profile>(profile);

  const startEdit = () => {
    setDraft(profile);
    setEditing(true);
  };

  const saveEdit = () => {
    const clean: Profile = {
      name: draft.name.trim() || 'Pengguna',
      title: draft.title.trim(),
      email: draft.email.trim(),
      phone: draft.phone.trim(),
      website: draft.website.trim(),
      location: draft.location.trim(),
    };
    saveProfile(clean);
    setProfile(clean);
    setEditing(false);
  };

  const handleWipe = async () => {
    if (!confirm('Hapus SEMUA data (transaksi, target, profil) dari perangkat ini?')) return;
    try {
      const dbs = await indexedDB.databases();
      await Promise.all(dbs.map((d) => d.name ? new Promise<void>((res) => {
        const req = indexedDB.deleteDatabase(d.name as string);
        req.onsuccess = () => res();
        req.onerror = () => res();
        req.onblocked = () => res();
      }) : Promise.resolve()));
    } catch { /* lanjut bersihkan localStorage */ }
    try { localStorage.clear(); } catch { /* abaikan */ }
    window.location.reload();
  };

  return (
    <div className="flex flex-col h-full bg-background animate-in fade-in duration-300">

      {/* 1. Header Navigation */}
      <div className="px-6 pt-8 pb-4 flex justify-between items-center shrink-0">
        <h1 className="text-lg font-semibold text-white">Profil Saya</h1>
        {editing ? (
          <div className="flex gap-2">
            <button onClick={() => setEditing(false)} className="text-zinc-400 text-sm font-bold hover:text-white transition-colors">
              Batal
            </button>
            <button onClick={saveEdit} className="text-primary text-sm font-bold hover:text-[#cbe63d] transition-colors">
              Simpan
            </button>
          </div>
        ) : (
          <button onClick={startEdit} className="text-primary text-sm font-bold hover:text-[#cbe63d] transition-colors">
            Edit
          </button>
        )}
      </div>

      {/* 2. Avatar & Info Utama */}
      <div className="flex flex-col items-center mt-2 mb-8 shrink-0">
        <div className="w-28 h-28 rounded-full border-2 border-zinc-800 overflow-hidden relative bg-primary flex items-center justify-center">
          <span className="text-black font-extrabold text-4xl">{profileInitials(profile.name)}</span>
        </div>
        <h2 className="text-2xl font-bold text-white mt-4">{profile.name}</h2>
        <p className="text-zinc-500 text-sm font-medium mb-1">{profile.title || 'Pengguna Finance Tracker'}</p>
        <p className="text-zinc-600 text-xs">Profil tersimpan lokal di perangkat ini.</p>
      </div>

      {/* 3. Content Area (Scrollable) */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-32 space-y-4">

        {/* Info Pribadi */}
        <div className="bg-card rounded-[24px] border border-zinc-800/50 overflow-hidden">
          {FIELDS.map((f, i) => (
            <div key={f.key} className={`p-5 flex gap-4 items-center group hover:bg-white/[0.02] transition-colors ${i < FIELDS.length - 1 ? 'border-b border-zinc-800/50' : ''}`}>
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0">
                <f.icon size={18} />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">{f.label}</p>
                {editing ? (
                  <input
                    value={draft[f.key]}
                    onChange={(e) => setDraft({ ...draft, [f.key]: e.target.value })}
                    placeholder={f.placeholder}
                    className="w-full bg-transparent text-sm text-white font-medium outline-none placeholder-zinc-600 border-b border-transparent focus:border-primary/50"
                  />
                ) : (
                  <p className="text-sm text-white font-medium truncate">{profile[f.key] || '—'}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Data & Privasi */}
        <div className="bg-card rounded-[24px] border border-zinc-800/50 overflow-hidden">
          <div className="p-5 border-b border-zinc-800/50 flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">Data &amp; Privasi</p>
              <p className="text-sm text-white font-medium">Semua data tersimpan lokal (IndexedDB). Tanpa akun, tanpa server.</p>
            </div>
          </div>
          <button
            onClick={() => exportToCSV(transactions)}
            disabled={transactions.length === 0}
            className="w-full p-5 flex gap-4 items-center text-left hover:bg-white/[0.02] transition-colors border-b border-zinc-800/50 disabled:opacity-40"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0">
              <Download size={18} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-white font-medium">Export Transaksi (CSV)</p>
              <p className="text-zinc-500 text-xs">{transactions.length} transaksi tersimpan</p>
            </div>
          </button>
          <button
            onClick={handleWipe}
            className="w-full p-5 flex gap-4 items-center text-left hover:bg-red-500/5 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-red-400 shrink-0">
              <Trash2 size={18} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-red-400 font-medium">Hapus Semua Data</p>
              <p className="text-zinc-500 text-xs">Menghapus transaksi, target, dan profil dari perangkat ini.</p>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
