import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import styled from 'styled-components'

import { getPosts, getPostBySlug } from '@mersocarlin.com/api'
import BlogPost from '@mersocarlin.com/components/BlogPost'
import Divider from '@mersocarlin.com/components/Divider'
import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'
import PreviousBlogPosts from '@mersocarlin.com/components/PreviousBlogPosts'
import { Post } from '@mersocarlin.com/types'

const Main = styled.div`
  width: 100%;
`

interface PostPageProps {
  gaId: string
  post?: Post
  previousPosts: Post[]
}

export default function PostPage({ gaId, post, previousPosts }: PostPageProps) {
  if (!post || !post.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout gaId={gaId}>
      <Meta
        description={post.excerpt}
        ogImageUrl={post.ogImage.url}
        path={`/blog/${post.slug}`}
        title={`${post.title} | Hemerson Carlin Blog`}
      />

      <Main>
        <BlogPost post={post} />
        <Divider size={50} />
        <PreviousBlogPosts posts={previousPosts} />
      </Main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const gaId = process.env.GOOGLE_ANALYTICS_ID

  if (!params) {
    return {
      props: {
        gaId,
      },
    }
  }

  const post = await getPostBySlug(`${params.slug}`)
  const previousPosts = await Promise.all(post.previousSlugs.map(getPostBySlug))

  return {
    props: {
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
