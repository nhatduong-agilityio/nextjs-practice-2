/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
    minimumCacheTTL: 60,
    deviceSizes: [480, 1280, 1920],
    imageSizes: [40, 128],
  },
}

module.exports = nextConfig
