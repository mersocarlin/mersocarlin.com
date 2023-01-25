import type { LoaderFunction } from '@remix-run/node'
import * as dateFns from 'date-fns'

import { getAllBlogPosts } from '~/utils/post.server'

function cdata(str: string) {
  return `<![CDATA[${str}]]>`
}

function getHost(request: Request) {
  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host')

  if (!host) {
    throw new Error('Could not determine domain URL.')
  }

  const protocol = host.includes('localhost') ? 'http' : 'https'
  return `${protocol}://${host}`
}

function parseDate(dateString: string) {
  return dateFns.add(dateFns.parseISO(dateString), {
    minutes: new Date().getTimezoneOffset(),
  })
}

function formatDate(dateString: string | Date, format = 'PPP') {
  if (typeof dateString !== 'string') {
    dateString = dateString.toISOString()
  }
  return dateFns.format(parseDate(dateString), format)
}

export const loader: LoaderFunction = async ({ request }) => {
  const posts = await getAllBlogPosts()

  const host = getHost(request)
  const blogUrl = `${host}/blog`

  const rss = `
    <rss xmlns:blogChannel="${blogUrl}" version="2.0">
      <channel>
        <title>Hemerson Carlin Blog</title>
        <link>${blogUrl}</link>
        <image>
          <url>${host}/hemerson-dark.jpg</url>
          <title>Hemerson Carlin Blog</title>
          <link>${host}</link>
        </image>
        <description>Personal blog by Hemerson Carlin</description>
        <language>en-us</language>
        <generator>@mersocarlin</generator>
        <ttl>40</ttl>
        ${posts
          .map((post) =>
            `
            <item>
              <title>${cdata(post.title)}</title>
              <description>${cdata(post.excerpt)}</description>
              <pubDate>${formatDate(post.date, 'yyyy-MM-ii')}</pubDate>
              <link>${blogUrl}/${post.slug}</link>
              <guid>${blogUrl}/${post.slug}</guid>
            </item>
          `.trim()
          )
          .join('\n')}
      </channel>
    </rss>
  `.trim()

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Content-Length': String(Buffer.byteLength(rss)),
    },
  })
}
