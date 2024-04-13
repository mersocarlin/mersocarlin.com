const BASE_DESCRIPTION = `Hi there! I'm Hemerson Carlin, also known as mersocarlin, a passionate and resourceful full-stack Software Engineer with 10+ years of experience focused on agile development, architecture and team building. I have experience in designing and developing web applications using microservices architecture alongside with JavaScript, Node.js and React.`

function removeTrailingSlash(url: string) {
  return url.endsWith('/') ? url.slice(0, -1) : url
}

export function getSocialMeta({
  url = '',
  title = 'Hemerson Carlin - Tech Lead / Software Engineer',
  description = BASE_DESCRIPTION,
  keywords = 'software, javascript, JS, ReactJS, NodeJS, software engineer, full stack, developer, blog, website',
  ogType = 'website',
  imageUrl = '/hemerson-dark.jpg',
}: {
  image?: string
  url?: string
  title?: string
  description?: string
  keywords?: string
  ogType?: 'article' | 'website'
  imageUrl?: string
} = {}) {
  return [
    /**
     * Misc
     */
    { name: 'title', content: title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'image', content: imageUrl },

    /**
     * OG
     */
    { name: 'og:description', content: description },
    { name: 'og:image', content: `https://mersocarlin.com${imageUrl}` },
    { name: 'og:image:type', content: 'image/png' },
    { name: 'og:image:height', content: '200' },
    { name: 'og:image:width', content: '200' },
    { name: 'og:title', content: title },
    { name: 'og:type', content: ogType },
    {
      name: 'og:url',
      content: removeTrailingSlash(`https://mersocarlin.com${url}`),
    },

    /**
     * Twitter
     */
    { name: 'twitter:alt', content: title },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@mersocarlin' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:site', content: '@mersocarlin' },
    { name: 'twitter:title', content: title },
  ]
}
