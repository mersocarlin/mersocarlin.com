import React from 'react'
import Image from 'next/image'

interface Props {
  alt: string
  height: string
  priority?: boolean
  src: string
  title: string
  width: string
}

export default function BlogPostImage({
  alt,
  height,
  priority,
  src,
  title,
  width,
}: Props) {
  return (
    <div className="my-8 text-center">
      <Image
        alt={alt}
        className="rounded-md shadow-md mb-2"
        height={height}
        priority={priority}
        src={src}
        title={title}
        width={width}
      />
      <p className="text-sm">{title}</p>
    </div>
  )
}
