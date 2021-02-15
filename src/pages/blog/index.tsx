import React, { useMemo } from 'react'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { getAllBlogPostsPreview } from '@blog/api/blog'
import BlogPostCard from '@blog/components/BlogPostCard'
import BlogPostsGrid from '@blog/components/BlogPostsGrid'
import BlogSearch from '@blog/components/BlogSearch'
import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'
import { PageProps, Post } from '@mersocarlin.com/types'

const AsyncBlogSearchEmptyState = dynamic(
  () => import('@blog/components/BlogSearchEmptyState'),
)
interface IndexProps extends PageProps {
  posts: Post[]
}

export default function Blog({ appVersion, posts }: IndexProps) {
  const { query } = useRouter()

  const searchTerm = useMemo(
    () => (query.q && typeof query.q === 'string' ? query.q : ''),
    [query],
  )

  const regSearch = useMemo(() => new RegExp(searchTerm, 'i'), [searchTerm])

  const filteredPosts = posts.filter((post) => {
    if (!searchTerm) {
      return true
    }

    return regSearch.test(post.title)
  })

  return (
    <Layout appVersion={appVersion}>
      <Meta title="Blog - Hemerson Carlin" />

      <section className="px-4 md:px-0">
        <BlogSearch searchTerm={searchTerm} />
      </section>

      <section className="px-4 md:px-0 mt-8">
        {filteredPosts.length ? (
          <BlogPostsGrid>
            {filteredPosts.map((post) => (
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
          <AsyncBlogSearchEmptyState searchTerm={searchTerm} />
        )}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pkg = require('../../../package.json')

  return {
    props: {
      appVersion: pkg.version,
      posts: await getAllBlogPostsPreview(),
    },
  }
}
