import { json } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Divider from '~/components/Divider'
import TweetCard from '~/components/TweetCard'
import { getSocialMeta } from '~/utils/seo'

import { getTweets } from '~/utils/twitter.server'

export async function loader() {
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
    '1375481247544266752',
  ])

  return json(
    { tweets },
    {
      headers: {
        'Cache-Control': 'max-age=3600',
      },
      status: 200,
    }
  )
}

export const meta: MetaFunction = ({ parentsData }) => {
  return {
    ...getSocialMeta({
      title: 'Tweets - Hemerson Carlin',
      url: parentsData.root.path,
    }),
  }
}

export default function Tweets() {
  const { tweets } = useLoaderData<typeof loader>()

  return (
    <>
      <h1 className="px-4 md:px-0 pb-8 text-2xl font-bold text-center mersocarlin-text-gray">
        Tweets
      </h1>

      <div className="px-4 md:p-0">
        <section className="w-full md:w-3/4 m-auto mersocarlin-text-gray">
          <p className="mb-3 leading-7">{`Collection of tweets I've liked.`}</p>

          <p className="mb-3 leading-7">
            Mostly tech related but you can find one or two that also make me
            laugh.
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
    </>
  )
}
