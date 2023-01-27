import AppLink from './AppLink'
import BlogPostTag from './BlogPostTag'

export default function BlogPostTagLink({ tag }: { tag: string }) {
  return (
    <AppLink
      className="mb-2 mr-1"
      hoverStyles="hover:no-underline"
      href={`/blog?tag=${tag}`}
    >
      <BlogPostTag tag={tag} variant="color" />
    </AppLink>
  )
}
