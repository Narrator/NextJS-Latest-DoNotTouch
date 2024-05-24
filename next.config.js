/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        source: '/ssg',
        headers: [
          {
            key: 'x-custom-header',
            value: 'kaushik',
          },
        ],
      }
    ]
  },
}

module.exports = nextConfig
