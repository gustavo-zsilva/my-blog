/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
        'images.unsplash.com',
        'media.graphcms.com',
        'media.graphassets.com',
        'lh3.googleusercontent.com',
    ],
  },
  env: {
    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
  }
}

module.exports = nextConfig
