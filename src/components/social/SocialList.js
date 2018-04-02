// @flow
import React from 'react'
import { compose, withProps } from 'recompose'

import SocialItem from './SocialItem'

import type { SocialItemT } from '../../types'

type PropsT = {
  items: Array<SocialItemT>,
}

function SocialList({ items }: PropsT) {
  return (
    <div className="social-list">
      {items.map((item, index) => <SocialItem key={index} item={item} />)}
    </div>
  )
}

export default compose(
  withProps(() => ({
    items: [
      {
        icon: 'linkedin',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mersocarlin/en',
      },
      {
        icon: 'github',
        name: 'Github',
        url: 'https://github.com/mersocarlin',
      },
      {
        className: 'orange',
        icon: 'stack overflow',
        name: 'StackOverflow',
        url: 'https://stackoverflow.com/users/1461131/mersocarlin',
      },
      {
        className: 'google plus',
        icon: 'mail',
        name: 'Email',
        url: 'mailto:mersocarlin@mersocarlin.com',
      },
      {
        icon: 'twitter',
        name: 'Twitter',
        url: 'https://twitter.com/mersocarlin',
      },
    ],
  }))
)(SocialList)
