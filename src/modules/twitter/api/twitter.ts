import { Tweet, TweetAuthor, TweetEntity } from '@mersocarlin.com/types'

export async function getTweets(ids: string[]): Promise<Tweet[]> {
  if (!process.env.TWITTER_TOKEN) {
    return []
  }

  const query: any = {
    ids,
    'user.fields': 'id,name,profile_image_url,username,verified',
    expansions: 'author_id',
    'tweet.fields': 'author_id,created_at,entities,id,public_metrics,text',
  }
  const queryString = Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join('&')

  const response = await fetch(
    `https://api.twitter.com/2/tweets?${queryString}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
      },
    }
  )

  const tweetsResponse = await response.json()

  const { data, includes } = tweetsResponse

  function getAuthor(authorId: string): TweetAuthor {
    const authorResponse = includes.users.find(
      (author: any) => author.id === authorId
    )

    return {
      name: authorResponse.name,
      profileImageUrl: authorResponse.profile_image_url,
      username: authorResponse.username,
      verified: authorResponse.verified,
    }
  }

  function mapUrls(tweetResponse: any) {
    if (!tweetResponse.entities || !tweetResponse.entities.urls) {
      return []
    }

    return tweetResponse.entities.urls.map((url: any) => ({
      type: 'url',
      start: url.start,
      end: url.end,
      url: url.url,
      images: url.images || [],
      title: url.title || '',
      description: url.description || '',
    }))
  }

  function mapMentions(tweetResponse: any) {
    if (!tweetResponse.entities || !tweetResponse.entities.mentions) {
      return []
    }

    return tweetResponse.entities.mentions.map((mention: any) => ({
      ...mention,
      type: 'mention',
    }))
  }

  return data
    .sort((a: any, b: any) =>
      new Date(a.created_at).getTime() > new Date(b.created_at).getTime()
        ? -1
        : 1
    )
    .map((tweetResponse: any) => {
      const tweet: Tweet = {
        author: getAuthor(tweetResponse.author_id),
        createdAt: tweetResponse.created_at,
        entities: [
          ...mapUrls(tweetResponse),
          ...mapMentions(tweetResponse),
        ].sort((a: TweetEntity, b: TweetEntity) =>
          a.start > b.start ? 1 : -1
        ),
        id: tweetResponse.id,
        likes: tweetResponse.public_metrics.like_count,
        retweets: tweetResponse.public_metrics.retweet_count,
        text: tweetResponse.text,
      }

      return tweet
    })
}
