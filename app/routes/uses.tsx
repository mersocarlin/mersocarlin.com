import { useLoaderData } from '@remix-run/react'
import BlogPost from '~/components/BlogPost'

import { getUses } from '~/utils/post.server'

export async function loader() {
  const post = await getUses()

  if (!post) {
    throw new Response('Page not found', { status: 404 })
  }

  return { post }
}

export default function Uses() {
  const { post } = useLoaderData<typeof loader>()

  return <BlogPost post={post} />
}
