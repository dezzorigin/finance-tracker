'use client';
import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import { loadProfile, profileInitials } from '@/lib/profile';

export default function Header() {
 const [name, setName] = useState('Pengguna');

 useEffect(() => {
   setName(loadProfile().name || 'Pengguna');
   // Perbarui nama kalau profil diubah di tab Profil (sesi yang sama)
   const refresh = () => setName(loadProfile().name || 'Pengguna');
   window.addEventListener('ft-profile-changed', refresh);
   window.addEventListener('storage', refresh);
   return () => {
     window.removeEventListener('ft-profile-changed', refresh);
     window.removeEventListener('storage', refresh);
   };
 }, []);

 return (
 <div className="flex justify-between items-center px-6 pt-8 pb-2 bg-background shrink-0">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 relative bg-primary flex items-center justify-center">
 <span className="text-black font-extrabold text-sm">{profileInitials(name)}</span>
 </div>
 <div>
 <p className="text-zinc-400 text-[10px] font-medium tracking-wide uppercase">Selamat datang</p>
 <h1 className="text-lg font-semibold text-white tracking-tight">{name}</h1>
 </div>
 </div>

 <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-white hover:bg-white/5 transition" aria-label="Notifikasi">
 <Bell size={18} className="text-zinc-300" />
 </button>
 </div>
 );
}
