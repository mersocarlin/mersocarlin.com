const fs = require('fs')
const matter = require('gray-matter')
const path = require('path')
const RSS = require('rss')

const POSTS_DIRECTORY = path.join(__dirname, '../data/blog')
const ALL_BLOG_POSTS = fs.readdirSync(POSTS_DIRECTORY)

async function getBlogPostData(blogPost) {
  const contet = fs.readFileSync(path.join(POSTS_DIRECTORY, blogPost))
  const { data, content } = matter(contet)
  return data
}

async function createRSS() {
  const rss = new RSS({
    copyright: `${new Date().getFullYear()} Hemerson Carlin`,
    description: 'Personal blog by Hemerson Carlin.',
    feed_url: 'https://mersocarlin.com/rss.xml',
    image_url: 'https://mersocarlin.com/hemerson-dark.jpg',
    site_url: 'https://mersocarlin.com',
    title: 'Hemerson Carlin Blog RSS Feed',
  })

  for (const blogPost of ALL_BLOG_POSTS) {
    const { title, excerpt } = await getBlogPostData(blogPost)

    rss.item({
      author: 'Hemerson Carlin',
      date: `${blogPost.substring(0, 10)}T00:00:00.000Z`,
      description: excerpt,
      url: `https://mersocarlin.com/blog/${blogPost
        .substring(11)
        .replace('.mdx', '')}`,
      title,
    })
  }

  fs.writeFileSync('public/rss.xml', rss.xml({ indent: true }))
}

createRSS()
