import React from 'react'
import Head from 'next/head'

const baseDescription = `Hi there! I'm Hemerson Carlin, also known as mersocarlin, and I'm a Software Engineer & Full Stack JavaScript Developer from Brazil based in Dublin, Ireland.`

interface MetaProps {
  description?: string
  ogImageUrl?: string
  title?: string
}

export default function Meta({
  description = baseDescription,
  ogImageUrl = '/hemerson-dark.jpg',
  title = 'Hemerson Carlin | Full Stack Developer',
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
        content="software, javascript, JS, ReactJS, NodeJS, software engineer, full stack, developer, blog, website"
      />
      <meta name="author" content="Hemerson Carlin" />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
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
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  )
}
