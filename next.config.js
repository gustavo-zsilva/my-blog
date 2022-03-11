/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'media.graphcms.com'],
  },
  env: {
    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
    AUTH_TOKEN: process.env.AUTH_TOKEN,
  }
}

module.exports = nextConfig
