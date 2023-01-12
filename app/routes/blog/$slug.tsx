import type { DataFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getPostBySlug } from '~/models/post.server'

export async function loader({ params }: DataFunctionArgs) {
  const postContents = getPostBySlug(params.slug || '')
  return { postContents, slug: params.slug }
}

export default function BlogPost() {
  const { postContents, slug } = useLoaderData<typeof loader>()

  return (
    <div>
      <div>Blog Post: {`${slug}`}</div>

      <div dangerouslySetInnerHTML={{ __html: postContents || '' }} />
    </div>
  )
}
