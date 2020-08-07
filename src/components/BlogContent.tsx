import React from 'react'
import styled from 'styled-components'

const StyledBlogContent = styled.div`
  padding: 0 var(--padding-large);

  @media (min-width: 768px) {
    padding: 0;
  }

  p,
  ul,
  ol {
    font-size: 1.125rem;
    line-height: 1.5;
    margin: var(--padding-large) 0;
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

  pre {
    code {
      border-radius: 5px;

      .line-number {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        color: #abb2bf;
        display: inline-block;
        padding: 0 20px 0 10px;
        min-width: 50px;
        text-align: right;
      }
    }

    font-size: 1rem;
    /*
      Atom One Dark by Daniel Gamage
      Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax
      base:    #282c34
      mono-1:  #abb2bf
      mono-2:  #818896
      mono-3:  #5c6370
      hue-1:   #56b6c2
      hue-2:   #61aeee
      hue-3:   #c678dd
      hue-4:   #98c379
      hue-5:   #e06c75
      hue-5-2: #be5046
      hue-6:   #d19a66
      hue-6-2: #e6c07b
    */

    .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em;
      color: #abb2bf;
      background: #282c34;
    }

    .hljs-comment,
    .hljs-quote {
      color: #5c6370;
      font-style: italic;
    }

    .hljs-doctag,
    .hljs-keyword,
    .hljs-formula {
      color: #c678dd;
    }

    .hljs-section,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-deletion,
    .hljs-subst {
      color: #e06c75;
    }

    .hljs-literal {
      color: #56b6c2;
    }

    .hljs-string,
    .hljs-regexp,
    .hljs-addition,
    .hljs-attribute,
    .hljs-meta-string {
      color: #98c379;
    }

    .hljs-built_in,
    .hljs-class .hljs-title {
      color: #e6c07b;
    }

    .hljs-attr,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-type,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-number {
      color: #d19a66;
    }

    .hljs-symbol,
    .hljs-bullet,
    .hljs-link,
    .hljs-meta,
    .hljs-selector-id,
    .hljs-title {
      color: #61aeee;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: bold;
    }

    .hljs-link {
      text-decoration: underline;
    }
  }

  del {
    font-style: italic;
  }

  h2 {
    font-size: var(--font-size-h2);
    margin: var(--padding-xlarge) 0;
  }

  h3 {
    font-size: var(--font-size-h3);
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
      font-size: 0.875rem;
      margin: var(--padding-normal) 0 0 0;
      padding: 0;
      text-align: center;
    }
  }
`

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <StyledBlogContent
      dangerouslySetInnerHTML={{ __html: content }}
    ></StyledBlogContent>
  )
}
