/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
      // config.node = {
      //   fs: 'empty'
      // }
    config.resolve.fallback = { fs: false }
    return config
  }
}

module.exports = nextConfig
