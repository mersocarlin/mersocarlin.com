import React from 'react'

interface BlogPostDateProps {
  date: string
}

export default function BlogPostDate({ date }: BlogPostDateProps) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <time dateTime={date} itemProp="datePublished">
      {new Intl.DateTimeFormat('en-US', options).format(new Date(date))}
    </time>
  )
}
