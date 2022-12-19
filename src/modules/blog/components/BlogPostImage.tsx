import React from 'react'
import Image from 'next/legacy/image'

export default function BlogPostImage({
  alt,
  height,
  priority,
  src,
  title,
  width,
}: {
  alt: string
  height: number
  priority?: boolean
  src: string
  title: string
  width: number
}) {
  return (
    <div className="my-8 text-center">
      <Image
        alt={alt}
        className="rounded-md shadow-md mb-2"
        height={`${height}`}
        priority={priority}
        src={src}
        title={title}
        width={`${width}`}
      />
      <p className="text-sm">{title}</p>
    </div>
  )
}
