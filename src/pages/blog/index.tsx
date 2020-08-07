import React from 'react'
import styled from 'styled-components'
import { GetStaticProps } from 'next'

import { getPosts } from '@mersocarlin.com/api'
import BlogPostCard from '@mersocarlin.com/components/BlogPostCard'
import BlogPostsGrid from '@mersocarlin.com/components/BlogPostsGrid'
import Divider from '@mersocarlin.com/components/Divider'
import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'
import { Post } from '@mersocarlin.com/types'

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

const Greetings = styled.div`
  padding: 0 var(--padding-large);

  @media (min-width: 768px) {
    padding: 0;
  }

  h1 {
    font-size: var(--font-size-h2);
    margin: var(--padding-large) 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.3;
    margin: 0;
    padding: 0;
  }
`

interface IndexProps {
  posts: Post[]
  gaId: string
}

export default function Blog({ posts, gaId }: IndexProps) {
  return (
    <Layout gaId={gaId}>
      <Meta path="/blog" title="Hemerson Carlin Blog" />

      <Main>
        <Greetings>
          <h1>Thoughts, ideas, tech and stuff!</h1>
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
        </Greetings>

        <Divider size={30} />

        <BlogPostsGrid>
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </BlogPostsGrid>
      </Main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await getPosts(),
      gaId: process.env.GOOGLE_ANALYTICS_ID,
    },
  }
}
