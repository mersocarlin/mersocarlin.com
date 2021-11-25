// next.config.js
module.exports = {
  images: {
    domains: ['pbs.twimg.com'],
  },
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/create-rss')
      require('./scripts/create-sitemap')
    }

    return config
  },
}
