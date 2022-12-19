import React from 'react'
import Image from 'next/legacy/image'

import Link from '@common/components/Link'
import { socialListItems } from '@mersocarlin.com/utils/social'

type Props = {
  size?: number
}

export default function SocialList({ size = 30 }: Props) {
  return (
    <div className="flex justify-between">
      {socialListItems.map((item) => (
        <Link
          className="mx-2 flex items-center"
          key={item.icon}
          href={item.url}
          target="_blank"
          title={item.name}
        >
          <Image
            alt={item.name}
            key={item.icon}
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
