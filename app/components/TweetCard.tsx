import { useState } from 'react'

import type { Tweet } from '~/types'
import AppLink from './AppLink'

type Props = {
  tweet: Tweet
}

function formatTweetStat(value: number) {
  if (value < 1000) {
    return value
  }

  return `${(value / 1000).toFixed(1)}K`
}

function TweetHeader({ tweet }: Props) {
  return (
    <AppLink
      hoverStyles="hover:none"
      href={`https://twitter.com/${tweet.author.username}`}
      target="_blank"
      title={tweet.author.name}
    >
      <div className="flex">
        <img
          alt={tweet.author.name}
          className="rounded-full"
          height={50}
          src={tweet.author.profileImageUrl}
          width={50}
        />

        <div className="flex flex-col flex-1 justify-center ml-2">
          <span className="flex items-center space-x-1">
            <span className="text-gray-700 dark:text-gray-200">
              {tweet.author.name}
            </span>
            {tweet.author.verified && (
              <svg
                aria-label="Verified Account"
                className="fill-current text-blue-500 dark:text-white inline h-4 w-4"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                </g>
              </svg>
            )}
          </span>
          <span className="text-gray-400">@{tweet.author.username}</span>
        </div>
      </div>
    </AppLink>
  )
}

function TweetText({ tweet }: Props) {
  /**
   * Split @content in \n and create a paragraph for each item
   * Adds a line break element for each \n\n
   * In case there's no \n in @content, create a span for inline block content
   * @param content
   */
  const makeSpan = (content: string) => {
    if (content.includes('\n')) {
      const lines = content.split('\n')
      return lines
        .map((paragraph, index) => {
          if (paragraph) {
            return (
              <p
                key={index}
                className="text-gray-700 dark:text-gray-200"
                dangerouslySetInnerHTML={{
                  __html: paragraph,
                }}
              />
            )
          } else if (index !== lines.length - 1) {
            return <br key={index} />
          }
          return null
        })
        .filter(Boolean)
    }

    return [
      <span
        key={new Date().getTime() + content.length}
        className="text-gray-700 dark:text-gray-200"
      >
        {content}
      </span>,
    ]
  }

  let tweetContent: any = []
  let startPosition = 0
  /**
   * Replace links and mentions from @tweet.text
   *
   * For each url entity type:
   *   1 - Add to final string (@tweetContent) whatever is before url
   *   2 - Add link to final string
   *   3 - Add whatever comes after (entity.end) to final string
   *
   * For each mention entity type:
   *   1 - Add to final string (@tweetContent) whatever is before mention
   *   2 - Add link with mention url
   *   3 - Add whatever comes after (entity.end) to final string
   */
  tweet.entities.forEach((entity) => {
    if (entity.type === 'url') {
      tweetContent.push(
        ...makeSpan(tweet.text.substring(startPosition, entity.start))
      )

      if (entity.images.length === 0) {
        tweetContent.push(
          <AppLink
            key={entity.url}
            fontStyles="text-lg"
            href={entity.url}
            target="_blank"
          >
            {entity.url}
          </AppLink>
        )
      }
    } else if (entity.type === 'mention') {
      tweetContent.push(
        ...makeSpan(tweet.text.substring(startPosition, entity.start))
      )

      tweetContent.push(
        <AppLink
          key={entity.username}
          fontStyles="text-lg"
          href={`https://twitter.com/${entity.username}`}
          target="_blank"
        >
          @{entity.username}
        </AppLink>
      )
    }

    if (entity.end + 1 === tweet.text.length) {
      startPosition = entity.end + 1
    } else {
      startPosition = entity.end
    }
  })

  tweetContent.push(...makeSpan(tweet.text.substring(startPosition)))

  return <div>{tweetContent}</div>
}

function TweetImage({ tweet }: Props) {
  /**
   * Some of the URLs are broken (404 status code).
   * I'm manually hiding those in case that happens.
   */
  const [visible, setVisible] = useState(true)
  let image

  /**
   * Looks for images attached to urls in the @tweet.text
   * Twitter API does not provide all images in a tweet
   */
  for (const entity of tweet.entities) {
    if (image) {
      break
    }

    if (entity.type !== 'url' || entity.images.length === 0) {
      continue
    }

    const [firstImage] = entity.images

    image = (
      <AppLink
        hoverStyles="hover:none"
        href={entity.url}
        target="_blank"
        title={entity.title}
      >
        <img
          alt={entity.title}
          height={firstImage.height}
          src={firstImage.url}
          width={firstImage.width}
          onError={() => setVisible(false)}
        />

        <div className="py-2 px-4">
          <p className="text-gray-700 dark:text-gray-200">{entity.title}</p>
          <p className="text-gray-500 dark:text-gray-400">
            {entity.description}
          </p>
        </div>
      </AppLink>
    )
  }

  if (!image || !visible) {
    return null
  }

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
      {image}
    </div>
  )
}

function TweetDateAndTime({ tweet }: Props) {
  return (
    <AppLink
      href={`https://twitter.com/${tweet.author.username}/status/${tweet.id}`}
      target="_blank"
    >
      <p className="text-gray-500 dark:text-gray-400">
        <time dateTime={tweet.createdAt}>
          {new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date(tweet.createdAt))}
        </time>

        <span className="px-1">·</span>
        <time dateTime={tweet.createdAt}>
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }).format(new Date(tweet.createdAt))}
        </time>
      </p>
    </AppLink>
  )
}

function TweetStats({ tweet }: Props) {
  return (
    <div className="border-t border-b border-gray-300 dark:border-gray-600 py-4 flex space-x-4">
      <div className="flex space-x-1">
        <span className="text-gray-700 dark:text-gray-200">
          {formatTweetStat(tweet.retweets)}
        </span>
        <span className="text-gray-500 dark:text-gray-400">Retweets</span>
      </div>

      <div className="flex space-x-1">
        <span className="text-gray-700 dark:text-gray-200">
          {formatTweetStat(tweet.likes)}
        </span>
        <span className="text-gray-500 dark:text-gray-400">Likes</span>
      </div>
    </div>
  )
}

export default function TweetCard({ tweet }: Props) {
  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 flex flex-col space-y-4">
      <TweetHeader tweet={tweet} />
      <TweetText tweet={tweet} />
      <TweetImage tweet={tweet} />
      <TweetDateAndTime tweet={tweet} />
      <TweetStats tweet={tweet} />
    </div>
  )
}
