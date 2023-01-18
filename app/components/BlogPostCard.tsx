import type { Post } from '~/types'
import AppLink from './AppLink'
import BlogPostDate from './BlogPostDate'

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <AppLink hoverStyles="hover:no-underline" href={`/blog/${post.slug}`}>
      <div className="group rounded shadow-md cursor-pointer hover:shadow-lg overflow-hidden mersocarlin-bg-white mersocarlin-text-gray">
        <img
          alt={post.title}
          height={500}
          itemProp="image"
          src={post.coverImage.url}
          width={1000}
        />
        <div className="flex flex-col justify-between p-3 h-48">
          <div
            className="text-center text-xl font-bold group-hover:underline"
            itemProp="headline"
          >
            {post.title}
          </div>
          <p
            className="text-ellipsis overflow-hidden text-sm line-clamp-3"
            itemProp="description"
            title={post.excerpt}
          >
            {post.excerpt}
          </p>

          <div className="flex justify-between text-sm mersocarlin-text-gray font-light">
            <div
              itemProp="author"
              itemScope={true}
              itemType="https://schema.org/Person"
            >
              <span itemProp="name">{post.author.name}</span>
            </div>
            <BlogPostDate date={post.date} />
          </div>
        </div>
      </div>
    </AppLink>
  )
}
