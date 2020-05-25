import React from 'react'
import styled from 'styled-components'

import { Post } from '../types'
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
  font-size: 25rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 0 0 var(--padding-xlarge) 0;
  text-align: center;
`

const AdditionalInfo = styled.div`
  color: var(--gray-600);
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

  del {
    font-style: italic;
  }

  h2 {
    font-size: 22rem;
    margin: var(--padding-xlarge) 0;
  }

  h3 {
    font-size: 18rem;
    margin: var(--padding-xlarge) 0;
  }

  blockquote {
    padding: var(--padding-large);
    border-left: 3px solid var(--background-text);
    margin: 0;
  }

  a {
    color: var(--primary-main);

    :visited {
      color: var(--primary-main);
    }

    :hover {
      color: var(--primary-dark);
      text-decoration: underline;
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
              <BlogPostDate post={post} />
            </span>
          </AdditionalInfo>
        </BlogHeader>

        <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </BlogContainer>
    </Main>
  )
}
