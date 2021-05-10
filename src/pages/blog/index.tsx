import React, { useMemo } from 'react'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'

import { getAllBlogPostsPreview } from '@blog/api/blog'
import BlogPostCard from '@blog/components/BlogPostCard'
import BlogPostsGrid from '@blog/components/BlogPostsGrid'
import BlogSearch from '@blog/components/BlogSearch'
import searchBlogPosts from '@blog/utils/searchBlogPosts'
import useBlogQuery from '@blog/hooks/useBlogQuery'
import Divider from '@common/components/Divider'
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
  const { query, updateQuery } = useBlogQuery()

  const filteredPosts = useMemo(
    () =>
      searchBlogPosts(posts, {
        q: query.q,
        tag: query.tag,
      }),
    [query],
  )

  return (
    <Layout appVersion={appVersion}>
      <Meta title="Blog - Hemerson Carlin" />

      <section className="px-4 md:px-0">
        <BlogSearch onChange={updateQuery} value={query} />
      </section>

      <Divider size={20} />

      <section className="px-4 md:px-0">
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
          <AsyncBlogSearchEmptyState q={query.q} tag={query.tag} />
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
