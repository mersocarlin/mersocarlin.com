import { TagT } from '@mersocarlin.com/types'
import Link from '@common/components/Link'

import BlogPostTag from './BlogPostTag'

type Props = {
  tag: TagT
}

export default function BlogPostTagLink({ tag }: Props) {
  return (
    <Link
      className="mb-2 mr-1"
      hoverStyles="hover:no-underline"
      href={`/blog?tag=${tag}`}
    >
      <BlogPostTag tag={tag} variant="color" />
    </Link>
  )
}
