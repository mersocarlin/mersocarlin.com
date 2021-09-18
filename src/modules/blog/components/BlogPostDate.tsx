import React from 'react'

interface BlogPostDateProps {
  date: string
}

export default function BlogPostDate({ date }: BlogPostDateProps) {
  return (
    <time dateTime={date} itemProp="datePublished">
      {new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(date))}
    </time>
  )
}
