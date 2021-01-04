import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'

import { getPosts, getPostBySlug } from '@mersocarlin.com/api'
import BlogPost from '@mersocarlin.com/components/BlogPost'
import Divider from '@mersocarlin.com/components/Divider'
import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'
import PreviousBlogPosts from '@mersocarlin.com/components/PreviousBlogPosts'
import { PageProps, Post } from '@mersocarlin.com/types'

interface PostPageProps extends PageProps {
  post?: Post
  previousPosts: Post[]
}

export default function PostPage({
  appVersion,
  gaId,
  post,
  previousPosts,
}: PostPageProps) {
  if (!post || !post.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout appVersion={appVersion} gaId={gaId}>
      <Meta
        description={post.excerpt}
        ogImageUrl={post.images.ogUrl}
        ogType="article"
        title={`${post.title} | Hemerson Carlin`}
      />

      <BlogPost post={post} />
      <Divider size={50} />
      <PreviousBlogPosts posts={previousPosts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const gaId = process.env.GOOGLE_ANALYTICS_ID
  const pkg = require('../../../package.json')

  if (!params) {
    return {
      props: {
        appVersion: pkg.version,
        gaId,
      },
    }
  }

  const post = await getPostBySlug(`${params.slug}`)
  const previousPosts = await Promise.all(post.previousSlugs.map(getPostBySlug))

  return {
    props: {
      appVersion: pkg.version,
      gaId,
      post,
      previousPosts,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
