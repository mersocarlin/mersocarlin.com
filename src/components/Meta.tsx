import React from 'react'

const description = `Hemerson Carlin is a Brazilian Software Engineer. He has experience in designing and developing web applications using microservices architecture alongside ASP.NET platform, NodeJS and ReactJS. Over the course of his carrer, he's been working with projects in Australia, Brazil, England, Germany, Ireland, New Zealand and United States.`

interface MetaProps {
  title: string
}

export default function Meta({ title }: MetaProps) {
  return (
    <React.Fragment>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="web, webdesign, developer, software, software engineer, Brazil, Ireland, Dublin"
      />
      <meta name="author" content="Hemerson Carlin" />

      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo-180px.png" />
      <meta property="og:image:secure_url" content="/logo-180px.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="180" />
      <meta property="og:image:height" content="180" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mersocarlin.com/" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@mersocarlin" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content="/logo-180px.png" />
    </React.Fragment>
  )
}
