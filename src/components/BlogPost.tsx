import React from 'react'
import styled from 'styled-components'

import { Post } from '../types'

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
  font-size: 25rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 0 0 var(--padding-xlarge) 0;
  text-align: center;
`

const AdditionalInfo = styled.div`
  color: #757575;
  font-size: 16rem;
  text-align: center;

  span:nth-child(2) {
    padding: 0 var(--padding-normal);
  }
`

const BlogContent = styled.div`
  padding: 0 var(--padding-large);

  @media (min-width: 768px) {
    padding: 0;
  }

  p,
  pre,
  ul,
  ol {
    font-size: 18rem;
    line-height: 1.3;
    margin: var(--padding-large) 0;
    padding: 0;
  }

  ul,
  ol {
    padding-left: var(--padding-xlarge);

    li {
      margin-bottom: var(--padding-normal);
    }
  }

  code {
    font-size: 16rem;
  }

  h2 {
    font-size: 22rem;
    margin: var(--padding-xlarge) 0;
  }

  blockquote {
    margin: var(--padding-xlarge);
  }

  a {
    color: var(--primary-main);

    :visited {
      color: var(--primary-main);
    }

    :hover {
      color: var(--primary-dark);
    }
  }

  .blog-post-image {
    margin: var(--padding-xlarge) auto;

    img {
      border-radius: 5px;
      box-shadow: var(--box-shadow-1);
      display: block;
      margin: 0 auto;
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }
    }

    p {
      font-size: 15rem;
      margin: var(--padding-normal) 0 0 0;
      padding: 0;
      text-align: center;
    }
  }
`

export default function BlogPost({ post }: BlogPostProps) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <Main>
      <BlogImage>
        <img src={post.coverImageUrl} />
      </BlogImage>

      <BlogContainer>
        <BlogHeader>
          <Title>{post.title}</Title>

          <AdditionalInfo>
            <span>By {post.author.name}</span>
            <span>-</span>
            <span>
              {new Intl.DateTimeFormat('en-US', options).format(
                new Date(post.date),
              )}
            </span>
          </AdditionalInfo>
        </BlogHeader>

        <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </BlogContainer>
    </Main>
  )
}
