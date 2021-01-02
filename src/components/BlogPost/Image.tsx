import React from 'react'
import Image from 'next/image'

interface Props {
  alt: string
  height: string
  src: string
  title: string
  width: string
}

export default function BlogPostImage({
  alt,
  height,
  src,
  title,
  width,
}: Props) {
  return (
    <div className="my-8 text-center">
      <Image
        alt={alt}
        className="rounded-md shadow-md mb-2"
        src={src}
        title={title}
        width={width}
        height={height}
      />
      <p className="text-sm">{title}</p>
    </div>
  )
}
