import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Post } from '@mersocarlin.com/types'
import { trackClickEditLink } from '@mersocarlin.com/utils/events'

import BlogPostContent from './BlogPostContent'
import EditLink from './EditLink'
import BlogPostDate from './BlogPostDate'
import ContributionBox from './ContributionBox'
import Link from '../../../components/Link'

function extractString(initialChar: string, endChar: string) {
  return (str: string) => {
    const intialIdx = str.indexOf(initialChar)
    const endIdx = str.indexOf(endChar)
    return str.substring(intialIdx + 1, endIdx)
  }
}

const extractCoverAuthorName = extractString('[', ']')
const extractCoverAuthorUrl = extractString('(', ')')

interface BlogPostProps {
  post: Post
}

export default function BlogPost({ post }: BlogPostProps) {
  const router = useRouter()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    datePublished: post.date,
    description: post.excerpt,
    headline: post.title,
    image: `https://mersocarlin.com${post.coverImage.url}`,
    publisher: {
      '@type': 'Organization',
      name: 'mersocarlin.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mersocarlin.com/hemerson-dark.jpg',
      },
    },
    url: `https://mersocarlin.com${router.asPath}`,
  }

  return (
    <article>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${JSON.stringify(structuredData)}`,
          }}
        />
      </Head>

      <h1 className="px-4 md:px-0 pb-8 text-2xl font-bold text-center mersocarlin-text-gray">
        {post.title}
      </h1>

      <div className="text-center">
        <Image
          className="rounded-none md:rounded"
          key={post.title}
          src={post.coverImage.url}
          height={post.coverImage.height}
          width={post.coverImage.width}
        />

        {post.coverImage.credit && (
          <span className="mersocarlin-text-gray italic text-sm">
            Photo by{' '}
            <Link
              href={extractCoverAuthorUrl(post.coverImage.credit)}
              target="_blank"
            >
              {extractCoverAuthorName(post.coverImage.credit)}
            </Link>
          </span>
        )}
      </div>

      <div className="w-full md:w-3/4 m-auto">
        <div className="py-6 text-center text-sm mersocarlin-text-gray">
          <div>
            <span>By {post.author.name}</span>
            <span>
              ・<BlogPostDate date={post.date} />
            </span>
          </div>

          {post.type === 'blogpost' && (
            <div className="pt-2">
              <span>{post.timeToRead}</span>
              <span>・</span>
              <EditLink
                onClick={() => trackClickEditLink('BlogPostHeader')}
                post={post}
              />
            </div>
          )}
        </div>

        {post.type === 'blogpost' && (
          <div className="px-4 md:p-0">
            <BlogPostContent mdxSource={post.content} />
          </div>
        )}

        <div className="px-4 md:p-0 mt-8">
          <ContributionBox post={post} />
        </div>
      </div>
    </article>
  )
}
