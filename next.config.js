/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: 'kau',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    "sizes": [
      100,
      200,
      1920
    ],
    "formats": ["image/jpeg", "image/png", "image/webp", "image/avif"],
    "minimumCacheTTL": 60,
    "dangerouslyAllowSVG": false,
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
