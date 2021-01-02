import React from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'

import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'
import { PageProps } from '@mersocarlin.com/types'

export default function Index({ gaId, appVersion }: PageProps) {
  return (
    <Layout appVersion={appVersion} centerContent gaId={gaId}>
      <Meta />

      <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-200 w-full md:w-3/5 md:m-auto p-8 md:p-0">
        <div className="rounded-full shadow-md border-4 border-gray-500 overflow-hidden">
          <Image
            alt="mersocarlin"
            height={200}
            src="/hemerson-dark.jpg"
            width={200}
          />
        </div>

        <h1 className="text-center text-2xl md:text-3xl font-bold py-4">
          Hello there 👋🏼
        </h1>
        <h2 className="text-center text-xl md:text-2xl">
          I'm Hemerson Carlin, also known as <em>mersocarlin</em>, and I'm a
          Full Stack JavaScript Developer from Brazil based in Dublin, Ireland.
        </h2>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pkg = require('../../package.json')

  return {
    props: {
      appVersion: pkg.version,
      gaId: process.env.GOOGLE_ANALYTICS_ID,
    },
  }
}
