import React from 'react'
import styled from 'styled-components'
import hydrate from 'next-mdx-remote/hydrate'

import { Post } from '@mersocarlin.com/types'

import Components from './Components'

interface Props {
  post: Post
}

const StyledBlogContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.5;
  padding: 0 var(--padding-large);

  @media (min-width: 768px) {
    padding: 0;
  }

  p {
    &:first-child {
      margin-top: 0;
    }
  }

  p,
  ul,
  ol {
    margin: 0 0 var(--padding-large) 0;
    padding: 0;

    code {
      background: var(--gray-200);
      border-radius: 6px;
      font-size: 1rem;
      margin: 0;
      padding: 0.2em 0.4em;
    }
  }

  ul,
  ol {
    padding-left: var(--padding-xlarge);

    li {
      margin-bottom: var(--padding-normal);
    }
  }

  del {
    font-style: italic;
  }

  blockquote {
    padding: var(--padding-large);
    border-left: 3px solid var(--background-text);
    margin: 0;
  }

  table {
    border-collapse: collapse;
    width: 100%;

    tr {
      background-color: var(--background-main);
      border-top: 1px solid var(--background-text);
    }

    tr:nth-child(even) {
      background-color: var(--background-main-level1);
    }

    td,
    th {
      padding: var(--padding-normal);
      border: 1px solid var(--gray-300);
    }

    th {
      font-weight: bold;
    }
  }
`

export default function BlogContent({ post }: Props) {
  const content = hydrate(post.content, { components: Components })

  return <StyledBlogContent>{content}</StyledBlogContent>
}
