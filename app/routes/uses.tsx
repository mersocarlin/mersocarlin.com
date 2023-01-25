import { json } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import BlogPost from '~/components/BlogPost'
import { getUses } from '~/utils/post.server'
import { getSocialMeta } from '~/utils/seo'

export async function loader() {
  const post = await getUses()

  if (!post) {
    throw new Response('Page not found', { status: 404 })
  }

  return json(
    { post },
    {
      headers: {
        'Cache-Control': 'max-age=3600',
      },
      status: 200,
    }
  )
}

export const meta: MetaFunction = ({ data, parentsData }) => {
  return {
    ...getSocialMeta({
      description: data.post.excerpt,
      imageUrl: data.post.coverImage.url,
      ogType: 'article',
      title: 'Uses - Hemerson Carlin',
      url: parentsData.root.path,
    }),
  }
}

export default function Uses() {
  const { post } = useLoaderData<typeof loader>()

  return <BlogPost post={post} />
}
