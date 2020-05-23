import React from 'react'
import styled from 'styled-components'

import { getPosts } from '../../api'
import BlogPostCard from '../../components/BlogPostCard'
import Divider from '../../components/Divider'
import Layout from '../../components/Layout'
import { Post } from '../../types'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--padding-xlarge);
`

const Greetings = styled.div`
  font-size: 16rem;
  padding: 0 var(--padding-large);

  @media (min-width: 768px) {
    padding: 0;
  }

  h1 {
    font-size: var(--font-size-h2);
    margin: var(--padding-large) 0;
  }

  p {
    font-size: 18rem;
    line-height: 1.3;
    margin: 0;
    padding: 0;
  }
`

const BlogPosts = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`

interface IndexProps {
  posts: Post[]
  gaId: string
}

const placeholder = {
  author: {
    name: 'Hemerson Carlin',
    imageUrl: '/hemerson-dark.jpg',
  },
  content: '',
  coverImageUrl: '/assets/blog/blog-post-placeholder.jpg',
  date: new Date().toISOString(),
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ogImage: {
    url: '/assets/blog/blog-post-placeholder.jpg',
  },
  slug: '',
  title: '🔜 Coming soon 🔜',
}

export default function Blog({ posts, gaId }: IndexProps) {
  return (
    <Layout fullHeight gaId={gaId}>
      <Main>
        <Greetings>
          <h1>Thoughts, ideas, tech and stuff!</h1>
          <p>Welcome to my personal Blog!</p>
          <p>
            My name is Hemerson Carlin (a.k.a. <em>mersocarlin</em>) and I'm a
            Senior Software Engineer based in Dublin, Ireland 🇮🇪.
          </p>

          <p>
            This is going to be my own space to share the things I like, a
            couple of ideias and some of my work.
          </p>
        </Greetings>

        <Divider size={30} />

        <BlogPosts>
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}

          <BlogPostCard disabled post={placeholder} />
          <BlogPostCard disabled post={placeholder} />
          <BlogPostCard disabled post={placeholder} />
        </BlogPosts>
      </Main>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
      gaId: process.env.GOOGLE_ANALYTICS_ID,
    },
  }
}
