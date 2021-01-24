import React from 'react'
import Image from 'next/image'

import Link from './Link'

const items = [
  {
    icon: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/mersocarlin',
  },
  {
    icon: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mersocarlin/en',
  },
  {
    icon: 'stack-overflow',
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/1461131/mersocarlin',
  },
  {
    icon: 'github',
    name: 'GitHub',
    url: 'https://github.com/mersocarlin',
  },
]

type Props = {
  size?: number
}

export default function SocialList({ size = 30 }: Props) {
  return (
    <div className="flex justify-between">
      {items.map((item) => (
        <Link
          className="mx-2 flex items-center"
          key={item.icon}
          href={item.url}
          target="_blank"
          title={item.name}
        >
          <Image
            alt={item.name}
            height={size}
            role="img"
            src={`/${item.icon}.svg`}
            width={size}
          />
        </Link>
      ))}
    </div>
  )
}
