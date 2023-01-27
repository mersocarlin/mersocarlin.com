import type { Post } from '~/types'
import AppLink from './AppLink'
import BlogPostCard from './BlogPostCard'
import BlogPostsGrid from './BlogPostsGrid'

export default function PreviousBlogPosts({ posts }: { posts: Post[] }) {
  return (
    <section>
      <div className="flex items-center flex-col md:flex-row justify-between mb-8">
        <div className="mersocarlin-text-gray font-bold text-xl mb-4 md:mb-0">
          Previous Blog Posts
        </div>
        <AppLink className="group inline-flex items-center" href="/blog">
          View all blog posts{' '}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </AppLink>
      </div>

      <div className="px-4 md:px-0">
        <BlogPostsGrid>
          {posts.map((post) => (
            <li
              itemProp="blogPost"
              itemScope={true}
              itemType="https://schema.org/BlogPosting"
              key={post.slug}
            >
              <BlogPostCard post={post} />
            </li>
          ))}
        </BlogPostsGrid>
      </div>
    </section>
  )
}
