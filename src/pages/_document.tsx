import React from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

import { socialListItems } from '@mersocarlin.com/utils/social'

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          href="/rss.xml"
          rel="alternate"
          title="Hemerson Carlin Blog RSS Feed"
          type="application/rss+xml"
        />

        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body, #__next {
                height: 100%;
              }
            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            console.log(
              '\\n\\n\\n\\n',
              'Diving deep into my code? Everything you see here is hosted on GitHub :)',
              '\\n',
              'You can also reach out to me in any of the following links:',
              '\\n\\n',
              '${socialListItems
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((item) => `- ${item.name}: ${item.url}`)
                .join('\\n ')}',
              '\\n\\n',
              'Hemerson Carlin 👋🏼',
              '\\n\\n\\n\\n\\n',
            )
            `,
          }}
          type="text/javascript"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
