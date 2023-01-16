export default function BlogPostDate({ date }: { date: string }) {
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
