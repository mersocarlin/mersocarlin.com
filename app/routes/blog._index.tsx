import { useMemo, useState } from 'react'

import { useLoaderData, useSearchParams } from '@remix-run/react'
import { json } from '@remix-run/node'
import type { MetaFunction, LinksFunction } from '@remix-run/node'

import { getAllBlogPosts } from '~/utils/post.server'
import BlogPostsGrid from '~/components/BlogPostsGrid'
import BlogPostCard from '~/components/BlogPostCard'
import BlogSearchEmptyState from '~/components/BlogSearchEmptyState'
import type { Post, QueryOptions } from '~/types'
import Divider from '~/components/Divider'
import BlogSearch from '~/components/BlogSearch'
import useUpdateQueryStringValueWithoutNavigation from '~/hooks/useUpdateQueryStringValueWithoutNavigation'
import { getSocialMeta } from '~/utils/seo'

const PAGE_SIZE = 12

export const links: LinksFunction = () => {
  return [
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      title: 'Hemerson Carlin Blog',
      href: '/blog/rss.xml',
    },
  ]
}

export async function loader() {
  const posts = await getAllBlogPosts()

  return json(
    { posts },
    {
      headers: {
        'Cache-Control': 'max-age=3600',
      },
      status: 200,
    }
  )
}

export const meta: MetaFunction = ({ location }) => {
  return getSocialMeta({
    title: 'Blog - Hemerson Carlin',
    url: location.pathname,
  })
}

export default function Blog() {
  const [searchParams] = useSearchParams()
  const { posts } = useLoaderData<typeof loader>()

  const [indexToShow, setIndexToShow] = useState(PAGE_SIZE)

  const [query, setQuery] = useState<QueryOptions>({
    q: (searchParams.get('q') ?? '').trim(),
    tag: (searchParams.get('tag') ?? '').trim(),
  })

  useUpdateQueryStringValueWithoutNavigation(query)

  const filteredPosts = useMemo(() => {
    function filterByQuery(query?: string) {
      const regSearch = new RegExp(query || '', 'i')

      return (post: Post) => {
        if (!query) {
          return true
        }

        return regSearch.test(post.title)
      }
    }

    function filterByTag(tag?: string) {
      return (post: Post) => {
        if (!tag) {
          return true
        }

        return post.tags.includes(tag)
      }
    }

    return posts.filter(filterByQuery(query.q)).filter(filterByTag(query.tag))
  }, [posts, query.q, query.tag])

  const matchingPosts = useMemo(
    () => filteredPosts.slice(0, indexToShow),
    [filteredPosts, indexToShow]
  )

  const hasMorePosts = useMemo(
    () => indexToShow < filteredPosts.length,
    [filteredPosts.length, indexToShow]
  )

  return (
    <>
      <section className="px-4 md:px-0">
        <BlogSearch
          onChange={(newQuery) => {
            setQuery(newQuery)
            setIndexToShow(PAGE_SIZE)
          }}
          value={query}
        />
      </section>

      <Divider size={20} />

      <section className="px-4 md:px-0">
        {matchingPosts.length ? (
          <BlogPostsGrid>
            {matchingPosts.map((post) => (
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
        ) : (
          <BlogSearchEmptyState q={query.q} tag={query.tag} />
        )}
      </section>

      {hasMorePosts ? (
        <div className="flex mt-16 w-full justify-center">
          <button
            className="border rounded-md p-4 inline-flex items-center mersocarlin-text-gray hover:border-red-800 dark:border:text-red-300"
            onClick={() => setIndexToShow((i) => i + PAGE_SIZE)}
          >
            <span>Load more posts</span>
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 5.75V18.25"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18.25 12L5.75 12"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </>
  )
}
