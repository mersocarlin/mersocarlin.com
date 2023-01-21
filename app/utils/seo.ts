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
  return {
    /**
     * Misc
     */
    title,
    description,
    keywords,
    image: imageUrl,

    /**
     * OG
     */
    'og:description': description,
    'og:image': `https://mersocarlin.com${imageUrl}`,
    'og:image:type': 'image/png',
    'og:image:height': '200',
    'og:image:width': '200',
    'og:title': title,
    'og:type': ogType,
    'og:url': removeTrailingSlash(`https://mersocarlin.com${url}`),

    /**
     * Twitter
     */
    'twitter:alt': title,
    'twitter:card': 'summary',
    'twitter:creator': '@mersocarlin',
    'twitter:description': description,
    'twitter:site': '@mersocarlin',
    'twitter:title': title,
  }
}
