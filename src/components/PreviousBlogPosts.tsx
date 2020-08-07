import React from 'react'
import styled from 'styled-components'

import { Post } from '@mersocarlin.com/types'

import Link from './Link'
import BlogPostCard from './BlogPostCard'
import BlogPostsGrid from './BlogPostsGrid'

interface PreviousBlogPostsProps {
  posts: Post[]
}

const Main = styled.div`
  font-size: 1rem;
  text-align: right;
`

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: var(--padding-xlarge);

  .title {
    font-size: 1.25rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export default function PreviousBlogPosts({ posts }: PreviousBlogPostsProps) {
  return (
    <Main>
      <Header>
        <div className="title">Previous Blog Posts</div>
        <Link as="/blog" href="/blog">
          View all blog posts ➡️
        </Link>
      </Header>

      <BlogPostsGrid>
        {posts.map((post) => (
          <BlogPostCard
            disabled={post.content === ''}
            key={post.slug}
            post={post}
          />
        ))}
      </BlogPostsGrid>
    </Main>
  )
}
