/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export untuk deploy ke Cloudflare Pages (direct upload).
  // App ini 100% client-side (IndexedDB), tanpa server actions / API routes.
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
