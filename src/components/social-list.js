// @flow
import React from 'react'

import SocialItem from './social-item'
import type { SocialItemT } from '../types'

type PropsT = {
  items: Array<SocialItemT>,
};

const SocialList = ({ items }: PropsT) => (
  <div className="social-list">
    {
      items.map(item => (
        <SocialItem
          key={item.icon}
          item={item}
        />
      ))
    }
  </div>
)

export default SocialList
