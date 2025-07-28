/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['perkimtan.sumbar.go.id', 'localhost'], // Domain untuk gambar
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.perkimtan.sumbar.go.id/:path*', // API pemerintah
      },
    ]
  },
}

module.exports = nextConfig