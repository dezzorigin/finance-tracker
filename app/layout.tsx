import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance Tracker",
  description:
    "Aplikasi manajemen keuangan pribadi — pencatatan transaksi, budget bulanan, analisis pengeluaran, dan target tabungan. Data tersimpan lokal di perangkat, tanpa akun.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className={`${inter.className} bg-black min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
