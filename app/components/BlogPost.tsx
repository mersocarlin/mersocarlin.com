import useMdxComponent from '~/hooks/useMdxComponent'
import useUserInteraction from '~/hooks/useUserInteraction'
import type { Post } from '~/types'
import AppLink from './AppLink'
import BlogPostAuthor from './BlogPostAuthor'
import BlogPostDate from './BlogPostDate'
import BlogPostTagLink from './BlogPostTagLink'
import ContributionBox from './ContributionBox'
import Divider from './Divider'
import EditBlogPostLink from './EditBlogPostLink'

function extractString(initialChar: string, endChar: string) {
  return (str: string) => {
    const initialIdx = str.indexOf(initialChar)
    const endIdx = str.indexOf(endChar)
    return str.substring(initialIdx + 1, endIdx)
  }
}

const extractCoverAuthorName = extractString('[', ']')
const extractCoverAuthorUrl = extractString('(', ')')

export default function BlogPost({ post }: { post: Post }) {
  const { trackClickEditLink } = useUserInteraction()
  const Component = useMdxComponent(post.mdxContent)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    datePublished: post.date,
    description: post.excerpt,
    headline: post.title,
    image: `https://mersocarlin.com${post.coverImage.url}`,
    publisher: {
      '@type': 'Organization',
      name: 'mersocarlin.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mersocarlin.com/hemerson-dark.jpg',
      },
    },
    url: `https://mersocarlin.com/blog/${post.slug}`,
  }

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `${JSON.stringify(structuredData)}`,
        }}
      />

      <h1 className="px-4 md:px-0 pb-8 text-2xl font-bold text-center mersocarlin-text-gray">
        {post.title}
      </h1>

      <section className="text-center">
        <img
          alt={post.title}
          className="rounded-none md:rounded mx-auto"
          key={post.title}
          src={post.coverImage.url}
          height={500}
          width={1000}
        />

        {post.coverImage.credit && (
          <span className="mersocarlin-text-gray italic text-sm">
            Photo by{' '}
            <AppLink
              href={extractCoverAuthorUrl(post.coverImage.credit)}
              target="_blank"
            >
              {extractCoverAuthorName(post.coverImage.credit)}
            </AppLink>
          </span>
        )}
      </section>

      <section className="w-full md:w-3/4 m-auto">
        <section className="flex flex-col space-y-2 py-6 text-center text-sm mersocarlin-text-gray">
          <div>
            <span>By {post.author.name}</span>
            <span>
              ・<BlogPostDate date={post.date} />
            </span>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap justify-center">
              {post.tags.map((tag) => (
                <BlogPostTagLink key={tag} tag={tag} />
              ))}
            </div>
          )}

          {post.type === 'blogpost' && (
            <div>
              <span>{post.readTime.text}</span>
              <span>・</span>
              <EditBlogPostLink
                onClick={() => trackClickEditLink('BlogPostHeader')}
                post={post}
              />
            </div>
          )}
        </section>

        {post.type === 'blogpost' && (
          <section className="px-4 md:p-0 prose dark:prose-invert break-words">
            <Component />
          </section>
        )}

        <section className="px-4 md:p-0 mt-8">
          <ContributionBox post={post} />
        </section>

        <Divider size={30} />

        <section className="px-4 md:p-0 mt-8">
          <BlogPostAuthor />
        </section>
      </section>
    </article>
  )
}
