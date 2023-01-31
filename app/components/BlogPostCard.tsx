import clsx from 'clsx'

import type { Post } from '~/types'
import AppLink from './AppLink'
import BlogPostDate from './BlogPostDate'
import { CalendarIcon } from './Icons'

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <AppLink hoverStyles="hover:no-underline" href={`/blog/${post.slug}`}>
      <div className="group overflow-hidden shadow-md hover:shadow-2xl rounded-lg cursor-pointer m-auto relative h-[344px]">
        <div className="h-40 overflow-hidden group-hover:blur-sm transition duration-300 group-hover:scale-110">
          <img
            alt={post.title}
            height={post.coverImage.height}
            itemProp="image"
            src={post.coverImage.url}
            width={post.coverImage.width}
          />
        </div>

        <div
          className={clsx(
            'h-56 mersocarlin-bg-white mersocarlin-text-gray w-full p-4 absolute bottom-14',
            // animation classes
            'translate-y-24 group-hover:translate-y-0 transition duration-300'
          )}
        >
          <div className="h-24 mb-4 flex items-center">
            <p className="text-2xl font-medium" itemProp="headline">
              {post.title}
            </p>
          </div>
          <p className="mersocarlin-text-gray font-light text-md line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="absolute bottom-0 w-full mersocarlin-bg-white mersocarlin-text-gray h-14 p-4">
          <div className="inline-flex">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <p className="text-sm font-medium">
              <BlogPostDate date={post.date} />
            </p>
          </div>
        </div>
      </div>
    </AppLink>
  )
}
