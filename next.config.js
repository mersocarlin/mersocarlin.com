// next.config.js
module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['pbs.twimg.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/create-rss')
      require('./scripts/create-sitemap')
    }

    return config
  },
}
