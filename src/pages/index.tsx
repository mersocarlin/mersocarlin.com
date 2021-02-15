import React from 'react'
import { GetStaticProps } from 'next'

import BlogPostCard from '@blog/components/BlogPostCard'
import BlogPostsGrid from '@blog/components/BlogPostsGrid'
import { getAllBlogPostsPreview } from '@blog/api/blog'
import Link from '@common/components/Link'
import Avatar from '@common/components/Avatar'
import { PageProps, Post } from '@mersocarlin.com/types'
import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'

interface Props extends PageProps {
  posts: Post[]
}

export default function Index({ appVersion, posts }: Props) {
  return (
    <Layout appVersion={appVersion}>
      <Meta />

      <div className="flex flex-col mersocarlin-text-gray px-8 md:p-0">
        <section>
          <Avatar size={150} />

          <h1 className="text-center text-3xl font-bold pt-4">
            Hemerson Carlin
          </h1>
          <h2 className="text-center text-lg">Tech Lead / Software Engineer</h2>
        </section>

        <section className="flex flex-col space-y-4 mt-12">
          <p className="text-lg">Hello there 👋🏼</p>
          <p className="text-lg">
            I'm Hemerson Carlin, also known as <em>mersocarlin</em>, a
            passionate and resourceful full-stack Software Engineer with 10+
            years of experience focused on agile development, architecture and
            team building.
          </p>
          <p className="text-lg">
            I have experience in designing and developing web applications using
            microservices architecture alongside with JavaScript, Node.js and
            React.
          </p>
          <p className="text-lg">
            I'm Technical Lead at{' '}
            <Link href="https://www.hubspot.com/" target="_blank">
              HubSpot
            </Link>{' '}
            and based in Dublin, Ireland.
          </p>
          <p className="text-lg">
            I also created{' '}
            <Link href="https://atomicmoney.app" target="_blank">
              Atomic Money
            </Link>
            : an expense tracker completely free for you to monitor your income
            and expenses.
          </p>
        </section>

        <section className="mt-12">
          <h3 className="mersocarlin-text-gray font-bold text-xl mb-4">
            Featured blog posts
          </h3>

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
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pkg = require('../../package.json')
  const posts = await getAllBlogPostsPreview()

  return {
    props: {
      appVersion: pkg.version,
      posts: posts.slice(0, 3),
    },
  }
}
