const fs = require('fs')
const globby = require('globby')

function getRouteFromPage(page) {
  const route = page
    .replace('src/pages', '')
    .replace('data', '')
    .replace('.tsx', '')
    .replace('.mdx', '')
    .replace(/[0-9]{4}-[0-9]{2}-[0-9]{2}-/, '')

  return route === '/index' ? '' : route
}

function getSitemapRoutes(pages) {
  return [...new Set(pages.map(getRouteFromPage))]
}

function createUrl(url) {
  return `
  <url>
    <loc>https://mersocarlin.com${url}</loc>
  </url>`
}

async function createSitemap() {
  const pages = await globby([
    'src/pages/*.tsx',
    '!src/pages/_*.tsx',
    'data/**/*.mdx',
    '!data/**/YYYY-MM-DD-blog-post-template.mdx',
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${getSitemapRoutes(pages).map(createUrl).join('')}
  </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

createSitemap()
