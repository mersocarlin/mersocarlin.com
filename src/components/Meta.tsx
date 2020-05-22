import React from 'react'
import Head from 'next/head'

const baseDescription = `Hemerson Carlin is a Brazilian Software Engineer. He has experience in designing and developing web applications using microservices architecture alongside ASP.NET platform, NodeJS and ReactJS. Over the course of his carrer, he's been working with projects in Australia, Brazil, Europe, New Zealand and the United States.`

interface MetaProps {
  description?: string
  title?: string
}

export default function Meta({
  description = baseDescription,
  title = 'Hemerson Carlin | About Page',
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="web, webdesign, developer, software, software engineer, Brazil, Ireland, Dublin"
      />
      <meta name="author" content="Hemerson Carlin" />

      <meta property="og:description" content={description} />
      <meta property="og:image" content="/hemerson-dark.jpg" />
      <meta property="og:image:secure_url" content="/hemerson-dark.jpg" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mersocarlin.com/" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@mersocarlin" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content="/hemerson-dark.jpg" />
    </Head>
  )
}
