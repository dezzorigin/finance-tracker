// Profil pengguna — tersimpan lokal di localStorage, bukan di server.
// Default generik: tidak ada data pribadi siapa pun yang tertanam di repo.
export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  location: string;
}

const KEY = 'ft-profile';

export const defaultProfile: Profile = {
  name: 'Pengguna',
  title: '',
  email: '',
  phone: '',
  website: '',
  location: '',
};

export function loadProfile(): Profile {
  if (typeof window === 'undefined') return defaultProfile;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultProfile;
    return { ...defaultProfile, ...JSON.parse(raw) };
  } catch {
    return defaultProfile;
  }
}

export function saveProfile(p: Profile): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
    window.dispatchEvent(new Event('ft-profile-changed'));
  } catch {
    // penyimpanan penuh / privat — abaikan, profil tetap tampil di sesi ini
  }
}

export function profileInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
