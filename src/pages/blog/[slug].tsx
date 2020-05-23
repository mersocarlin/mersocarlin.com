import React from 'react'
import { useRouter } from 'next/router'
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
  post: Post
}

export default function PostPage({ gaId, post }: PostPageProps) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
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

export async function getStaticProps({ params }: any) {
  const post = await getPostBySlug(params.slug)

  return {
    props: {
      gaId: process.env.GOOGLE_ANALYTICS_ID,
      post,
    },
  }
}

export async function getStaticPaths() {
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
