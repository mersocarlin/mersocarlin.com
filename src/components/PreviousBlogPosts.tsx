import React from 'react'
import styled from 'styled-components'

import { blogPostPlaceholder } from '../utils/constants'
import Link from './Link'
import BlogPostCard from './BlogPostCard'
import BlogPostsGrid from './BlogPostsGrid'

const Main = styled.div`
  font-size: 16rem;
  text-align: right;
`

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: var(--padding-xlarge);

  .title {
    font-size: 20rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export default function PreviousBlogPosts() {
  return (
    <Main>
      <Header>
        <div className="title">Previous Blog Posts</div>
        <Link as="/blog" href="/blog">
          View all blog posts ➡️
        </Link>
      </Header>

      <BlogPostsGrid>
        <BlogPostCard disabled post={blogPostPlaceholder} />
        <BlogPostCard disabled post={blogPostPlaceholder} />
        <BlogPostCard disabled post={blogPostPlaceholder} />
      </BlogPostsGrid>
    </Main>
  )
}
