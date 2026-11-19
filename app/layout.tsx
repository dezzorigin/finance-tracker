import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance Tracker",
  description:
    "Aplikasi manajemen keuangan pribadi — pencatatan transaksi, budget bulanan, analisis pengeluaran, dan target tabungan. Data tersimpan lokal di perangkat, tanpa akun.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Finance Tracker — Lacak Duit",
    description:
      "Aplikasi manajemen keuangan pribadi: catat transaksi, atur budget bulanan, analisis pengeluaran, dan kejar target tabungan. Data tersimpan lokal di perangkat, tanpa akun.",
    type: "website",
    url: "https://lacak-duit.pages.dev/",
    images: [
      {
        url: "https://lacak-duit.pages.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Finance Tracker — Lacak Duit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Tracker — Lacak Duit",
    description:
      "Aplikasi manajemen keuangan pribadi: catat transaksi, atur budget bulanan, analisis pengeluaran, dan kejar target tabungan. Data tersimpan lokal di perangkat, tanpa akun.",
    images: ["https://lacak-duit.pages.dev/og-image.png"],
  },
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
