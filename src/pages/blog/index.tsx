import React from 'react'
import { GetStaticProps } from 'next'

import { getAllBlogPostsPreview } from '@mersocarlin.com/api/blog'
import BlogPostCard from '@mersocarlin.com/components/BlogPostCard'
import BlogPostsGrid from '@mersocarlin.com/components/BlogPostsGrid'
import Divider from '@mersocarlin.com/components/Divider'
import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'
import { PageProps, Post } from '@mersocarlin.com/types'

interface IndexProps extends PageProps {
  posts: Post[]
}

export default function Blog({ appVersion, posts }: IndexProps) {
  return (
    <Layout appVersion={appVersion}>
      <Meta title="Blog - Hemerson Carlin" />

      <section className="flex flex-col space-y-4 px-4 md:px-0 mersocarlin-text-gray">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Thoughts & ideas!
        </h1>
        <p className="text-lg">Welcome to my personal Blog!</p>

        <p className="text-lg">
          I'm Hemerson Carlin, also known as <em>mersocarlin</em>, a passionate
          and resourceful full-stack Software Engineer with 10+ years of
          experience focused on agile development, architecture and team
          building.
        </p>

        <p className="text-lg">
          This is my space to share the things I like, a couple of ideas and
          some of my work.
        </p>
      </section>

      <Divider size={30} />

      <section className="px-4 md:px-0">
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
