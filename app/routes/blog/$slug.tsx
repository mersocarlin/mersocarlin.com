import type { DataFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import BlogPost from '~/components/BlogPost'
import Divider from '~/components/Divider'
import { getPostBySlug } from '~/utils/post.server'

export async function loader({ params }: DataFunctionArgs) {
  const post = await getPostBySlug(params.slug || '')

  if (!post) {
    throw new Response('Post not found', { status: 404 })
  }

  return { post }
}

export default function BlogPostSlug() {
  const { post } = useLoaderData<typeof loader>()

  return (
    <>
      <BlogPost post={post} />

      <Divider size={50} />

      <div>TODO: previous blog posts</div>
    </>
  )
}
