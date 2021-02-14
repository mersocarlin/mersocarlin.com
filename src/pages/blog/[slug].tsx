import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'

import BlogPost from '@blog/components/BlogPost'
import PreviousBlogPosts from '@blog/components/PreviousBlogPosts'
import {
  getAllBlogPostsPreview,
  getBlogPostBySlug,
  getBlogPostPreviewBySlug,
} from '@blog/api/blog'
import Divider from '@mersocarlin.com/components/Divider'
import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'
import { PageProps, Post } from '@mersocarlin.com/types'

interface PostPageProps extends PageProps {
  post?: Post
  previousPosts: Post[]
}

export default function PostPage({
  appVersion,
  post,
  previousPosts,
}: PostPageProps) {
  if (!post || !post.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout appVersion={appVersion}>
      <Meta
        description={post.excerpt}
        ogImageUrl={
          post.type === 'blogpost' ? post.ogImage.url : post.coverImage.url
        }
        ogType="article"
        title={`${post.title} - Hemerson Carlin`}
      />

      <BlogPost post={post} />
      <Divider size={50} />
      <PreviousBlogPosts posts={previousPosts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pkg = require('../../../package.json')

  if (!params) {
    return {
      props: {
        appVersion: pkg.version,
      },
    }
  }

  const post = await getBlogPostBySlug(`${params.slug}`)
  const previousPosts = await Promise.all(
    (post.type === 'blogpost' ? post.previousSlugs || [] : []).map(
      getBlogPostPreviewBySlug,
    ),
  )

  return {
    props: {
      appVersion: pkg.version,
      post,
      previousPosts,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllBlogPostsPreview()

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
