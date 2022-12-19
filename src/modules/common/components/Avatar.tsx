import React from 'react'
import Image from 'next/image'

type Props = {
  size: number
}

function Avatar({ size }: Props) {
  return (
    <div
      className="rounded-full shadow-md overflow-hidden mx-auto"
      style={{
        height: size,
        width: size,
      }}
    >
      <Image
        alt="mersocarlin"
        height={size}
        src="/hemerson-dark.jpg"
        width={size}
      />
    </div>
  )
}

export default Avatar
