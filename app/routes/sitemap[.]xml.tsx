import type { LoaderFunction } from '@remix-run/node'
import { getHost } from '~/utils/misc'

import { getAllBlogPosts } from '~/utils/post.server'

function createUrl(url: string) {
  return `
  <url>
    <loc>${url}</loc>
  </url>`
}

export const loader: LoaderFunction = async ({ request, context }) => {
  const posts = await getAllBlogPosts()

  const host = getHost(request)
  const blogUrl = `${host}/blog`

  const rss = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
    ${createUrl(host)}
    ${createUrl(blogUrl)}
    ${createUrl(`${host}/uses`)}
    ${createUrl(`${host}/tweets`)}
    ${posts.map((post) => createUrl(`${blogUrl}/${post.slug}`)).join('\n')}
  </urlset>
  `.trim()

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Content-Length': String(Buffer.byteLength(rss)),
    },
  })
}
