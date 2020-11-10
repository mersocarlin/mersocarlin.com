import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  margin: var(--padding-xlarge) auto;
  text-align: center;

  > div {
    border-radius: 5px;
    box-shadow: var(--box-shadow-5);
  }

  p {
    font-size: 0.875rem;
    margin: var(--padding-normal) 0 0 0;
    padding: 0;
    text-align: center;
  }
`

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
    <ImageWrapper>
      <Image alt={alt} src={src} title={title} width={width} height={height} />
      <p>{title}</p>
    </ImageWrapper>
  )
}
