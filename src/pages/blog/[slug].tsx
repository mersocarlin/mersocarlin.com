import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import styled from 'styled-components'

import { getPosts, getPostBySlug } from '../../api'
import BlogPost from '../../components/BlogPost'
import Divider from '../../components/Divider'
import Layout from '../../components/Layout'
import Meta from '../../components/Meta'
import PreviousBlogPosts from '../../components/PreviousBlogPosts'
import { Post } from '../../types'

const Main = styled.div`
  padding-top: var(--padding-xlarge);
  width: 100%;
`

interface PostPageProps {
  gaId: string
  post?: Post
}

export default function PostPage({ gaId, post }: PostPageProps) {
  if (!post || !post.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout gaId={gaId}>
      <Meta
        description={post.excerpt}
        ogImageUrl={post.ogImage.url}
        title={`${post.title} | Hemerson Carlin Blog`}
      />

      <Main>
        <BlogPost post={post} />
        <Divider size={50} />
        <PreviousBlogPosts />
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

  return {
    props: {
      gaId,
      post,
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
