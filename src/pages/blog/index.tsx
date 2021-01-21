import React from 'react'
import { GetStaticProps } from 'next'

import { getAllBlogPosts } from '@mersocarlin.com/api'
import BlogPostCard from '@mersocarlin.com/components/BlogPostCard'
import BlogPostsGrid from '@mersocarlin.com/components/BlogPostsGrid'
import Divider from '@mersocarlin.com/components/Divider'
import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'
import { PageProps, Post } from '@mersocarlin.com/types'

interface IndexProps extends PageProps {
  posts: Post[]
}

export default function Blog({ appVersion, posts, gaId }: IndexProps) {
  return (
    <Layout appVersion={appVersion} gaId={gaId}>
      <Meta title="Blog - Hemerson Carlin" />

      <div className="flex flex-col mersocarlin-text-gray">
        <div className="px-4 md:px-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Thoughts, ideas, tech and stuff!
          </h1>
          <p>Welcome to my personal Blog!</p>
          <p>
            My name is Hemerson Carlin (a.k.a. <em>mersocarlin</em>) and I'm a
            Full Stack JavaScript Developer from Brazil based in Dublin,
            Ireland.
          </p>

          <p>
            This is going to be my space to share the things I like, a couple of
            ideas and some of my work.
          </p>
        </div>

        <Divider size={30} />

        <BlogPostsGrid>
          {posts.map((post) => (
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
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pkg = require('../../../package.json')

  return {
    props: {
      appVersion: pkg.version,
      posts: await getAllBlogPosts(),
      gaId: process.env.GOOGLE_ANALYTICS_ID,
    },
  }
}
