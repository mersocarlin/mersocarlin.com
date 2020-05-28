const AVG_WORDS_PER_MINUTE = 225

const stripTags = (string: string) => {
  const pattern = '<\\w+(\\s+("[^"]*"|\\\'[^\\\']*\'|[^>])+)?>|<\\/\\w+>'
  const reg = new RegExp(pattern, 'gi')
  return string.replace(reg, '')
}

const humanize = (time: number) => {
  if (time < 0.5) {
    return 'less than a minute read'
  }
  if (time >= 0.5 && time < 1.5) {
    return '1 min read'
  }
  return `${Math.ceil(time)} min read`
}

const calculateTimeToRead = (content: string) => {
  const strippedContent = stripTags(content)
  const wordCount = strippedContent.split(' ').length

  return {
    timeToRead: humanize(wordCount / AVG_WORDS_PER_MINUTE),
    wordCount,
  }
}

export default calculateTimeToRead
