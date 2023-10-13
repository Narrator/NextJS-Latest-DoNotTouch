/** @type {import('next').NextConfig} */
const nextConfig = {
  assertPrefix: 'https://main.d3co2gtc7jbyrp.amplifyapp.com',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "**.unsplash.com"
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/isr',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=10, stale-while-revalidate=10',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
