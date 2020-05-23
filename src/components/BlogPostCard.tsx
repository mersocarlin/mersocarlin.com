import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import { Post } from '../types'

interface BlogPostCardProps {
  disabled?: boolean
  post: Post
}

const Title = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 20rem;
  font-weight: bold;
  height: 70rem;
  justify-content: center;
  letter-spacing: 0.05em;
  line-height: 22rem;
  margin-bottom: var(--padding-normal);
`

const Main = styled.div`
  background: var(--background-main-level1);
  border-radius: 5px;
  box-shadow: var(--box-shadow-1);
  color: var(--background-text);
  cursor: pointer;
  overflow: hidden;
  width: 100%;

  &[data-disabled='true'] {
    cursor: default;
    -webkit-filter: blur(2px);
    filter: blur(2px);
  }

  &[data-disabled='false'] {
    :hover {
      box-shadow: var(--box-shadow-5);

      ${Title} {
        text-decoration: underline;
      }
    }
  }
`

const BlogPostImage = styled.div`
  img {
    height: 150rem;
    width: 100%;
  }
`

const BlogContent = styled.div`
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  height: 190rem;
  padding: var(--padding-large);
`

const Excerpt = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  font-size: 14rem;
  height: 45px;
  margin-bottom: var(--padding-large);
  overflow: hidden;
`

const Footer = styled.div`
  color: #757575;
  display: flex;
  font-size: 14rem;
  justify-content: space-between;
`

export default function BlogPostCard({ disabled, post }: BlogPostCardProps) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const blogContent = (
    <Main data-disabled={Boolean(disabled)}>
      <BlogPostImage>
        <img src={post.coverImageUrl} />
      </BlogPostImage>
      <BlogContent>
        <Title>{post.title}</Title>
        <Excerpt title={post.excerpt}>{post.excerpt}</Excerpt>

        <Footer>
          <div>{post.author.name}</div>
          <div>
            {new Intl.DateTimeFormat('en-US', options).format(
              new Date(post.date),
            )}
          </div>
        </Footer>
      </BlogContent>
    </Main>
  )

  if (disabled) {
    return blogContent
  }

  return (
    <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
      <a>{blogContent}</a>
    </Link>
  )
}
