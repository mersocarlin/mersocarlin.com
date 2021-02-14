import React from 'react'
import { GetStaticProps } from 'next'

import BlogPost from '@blog/components/BlogPost'
import { getPageContentBySlug } from '@blog/api/blog'
import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'
import { PageProps, Post } from '@mersocarlin.com/types'

interface Props extends PageProps {
  post: Post
}

export default function Uses({ post, appVersion }: Props) {
  return (
    <Layout appVersion={appVersion}>
      <Meta
        description={post.excerpt}
        ogType="article"
        ogImageUrl={
          post.type === 'blogpost' ? post.ogImage.url : post.coverImage.url
        }
        title="Uses - Hemerson Carlin"
      />

      <BlogPost post={post} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pkg = require('../../package.json')
  const post = await getPageContentBySlug('uses')

  return {
    props: {
      appVersion: pkg.version,
      post,
    },
  }
}
