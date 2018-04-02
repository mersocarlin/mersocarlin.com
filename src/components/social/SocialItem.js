// @flow
import React from 'react'

import Icon from '../Icon'

import type { SocialItemT } from '../../types'

type PropsT = {
  item: SocialItemT,
}

const SocialItem = ({ item }: PropsT) => (
  <a
    data-content={item.url}
    className={`ui circular icon button ${item.className || item.icon}`}
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon icon={item.icon} />
  </a>
)

export default SocialItem
