import { json, redirect } from '@remix-run/node'
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import BlogPost from '~/components/BlogPost'
import Divider from '~/components/Divider'
import PreviousBlogPosts from '~/components/PreviousBlogPosts'
import { getPostBySlug, getPreviousBlogPosts } from '~/utils/post.server'
import { getSocialMeta } from '~/utils/seo'

export async function loader({ params }: LoaderFunctionArgs) {
  const currentSlug = params.slug || ''
  // redirect urls as /blog/some-slug.md to /blog/some-slug
  const [actualSlug, extension] = currentSlug.split('.')

  if (extension) {
    return redirect(`/blog/${actualSlug}`)
  }

  const [post, previousBlogPosts] = await Promise.all([
    getPostBySlug(currentSlug),
    getPreviousBlogPosts(currentSlug),
  ])

  if (!post) {
    throw new Response('Post not found', { status: 404 })
  }

  return json(
    {
      post,
      previousBlogPosts,
    },
    {
      headers: {
        'Cache-Control': 'max-age=3600',
      },
      status: 200,
    }
  )
}

export const meta: MetaFunction<typeof loader> = ({ data, location }) => {
  if (!data) {
    return getSocialMeta({
      ogType: 'article',
      url: location.pathname,
    })
  }

  const { post } = data

  return getSocialMeta({
    description: post.excerpt,
    imageUrl: post.coverImage.url,
    ogType: 'article',
    title: `${post.title} - Hemerson Carlin`,
    url: location.pathname,
  })
}

export default function BlogPostSlug() {
  const { post, previousBlogPosts } = useLoaderData<typeof loader>()

  return (
    <>
      <BlogPost post={post} />

      <Divider size={50} />

      <PreviousBlogPosts posts={previousBlogPosts} />
    </>
  )
}
