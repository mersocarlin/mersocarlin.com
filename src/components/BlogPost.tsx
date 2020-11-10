import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { Post } from '@mersocarlin.com/types'

import Content from './BlogPost/Content'
import BlogPostDate from './BlogPostDate'

interface BlogPostProps {
  post: Post
}

const Main = styled.article`
  background: var(--background-main);
  width: 100%;
`
const BlogImage = styled.div`
  img {
    border-radius: 0;
    width: 100%;

    @media (min-width: 768px) {
      border-radius: 5px;
    }
  }
`

const BlogContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 70%;
  }
`

const BlogHeader = styled.div`
  padding: var(--padding-xlarge) 0;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 0 0 var(--padding-xlarge) 0;
  text-align: center;
`

const AdditionalInfo = styled.div`
  color: var(--gray-600);
  font-size: 1rem;
  text-align: center;

  span:nth-child(3) {
    display: none;

    @media (min-width: 768px) {
      display: inline-block;
    }
  }

  span:nth-child(4) {
    display: block;
    margin-top: var(--padding-normal);

    @media (min-width: 768px) {
      display: inline-block;
      margin-top: 0;
    }
  }
`

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <Main>
      <BlogImage>
        <Image src={post.coverImageUrl} height={500} width={1000} />
      </BlogImage>

      <BlogContainer>
        <BlogHeader>
          <Title>{post.title}</Title>

          <AdditionalInfo>
            <span>By {post.author.name}</span>
            <span>
              ・<BlogPostDate post={post} />
            </span>
            <span>・</span>
            <span>{post.timeToRead}</span>
          </AdditionalInfo>
        </BlogHeader>

        <Content post={post} />
      </BlogContainer>
    </Main>
  )
}
