import React from 'react'
import Image from 'next/image'

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
    className: 'orange',
    icon: 'stack-overflow',
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/1461131/mersocarlin',
  },
  {
    icon: 'github',
    name: 'Github',
    url: 'https://github.com/mersocarlin',
  },
]

export default function SocialList() {
  return (
    <div className="flex">
      {items.map((item) => (
        <a
          className="mx-2 flex items-center"
          href={item.url}
          key={item.icon}
          rel="noopener noreferrer"
          target="_blank"
          title={item.name}
        >
          <Image
            alt={item.name}
            height={40}
            role="img"
            src={`/${item.icon}.svg`}
            width={40}
          />
        </a>
      ))}
    </div>
  )
}
