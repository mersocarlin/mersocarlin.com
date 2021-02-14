import React from 'react'
import { GetStaticProps } from 'next'

import { PageProps, Tweet } from '@mersocarlin.com/types'
import Divider from '@common/components/Divider'
import Header from '@common/components/Header'
import Link from '@common/components/Link'
import { getTweets } from '@twitter/api/twitter'
import TweetCard from '@twitter/components/TweetCard'
import Layout from '@mersocarlin.com/components/Layout'
import Meta from '@mersocarlin.com/components/Meta'

interface Props extends PageProps {
  tweets: Tweet[]
}

export default function Tweets({ appVersion, tweets }: Props) {
  return (
    <Layout appVersion={appVersion}>
      <Meta title="Tweets - Hemerson Carlin" />

      <h1 className="px-4 md:px-0 pb-8 text-2xl font-bold text-center mersocarlin-text-gray">
        Tweets
      </h1>

      <div className="px-4 md:p-0">
        <section className="w-full md:w-3/4 m-auto mersocarlin-text-gray text-lg">
          <p className="mb-3 leading-7">Collection of tweets I've liked.</p>

          <p className="mb-3 leading-7">
            Mostly tech related but you can find one or two that also make me
            laugh.
          </p>

          <Header as="h2">🚀 How do I generate this page?</Header>

          <p className="mb-3 leading-7">
            I'm using Static Generation (SSG) so every tweet you see here is
            created when I release a new version of my site.
          </p>

          <p className="mb-3 leading-7">
            Which means I don't have to fetch tweets from Twitter API everytime
            someone visits <Link href="/tweets">/tweets</Link> on my site.
          </p>

          <p className="mb-3 leading-7">
            Neat trick thanks to NextJS, SSG and a little bit of CSS 🤙🏼
          </p>
        </section>

        <Divider size={30} />

        <ul className="flex flex-col space-y-4 items-center">
          {tweets.map((tweet) => (
            <li className="w-full md:w-2/4" key={tweet.id}>
              <TweetCard tweet={tweet} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pkg = require('../../package.json')

  const tweets = await getTweets([
    '1338748126107234305',
    '1330209138283073541',
    '1206288480382283776',
    '1083472984252260352',
    '864992970994368512',
    '1347221702279917572',
    '1352535583982198784',
    '1090617583433404416',
    '935065532121931776',
    '1301504618921447424',
  ])

  return {
    props: {
      appVersion: pkg.version,
      tweets,
    },
  }
}
