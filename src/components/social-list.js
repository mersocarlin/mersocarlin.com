import React, { PropTypes } from 'react'

import SocialItem from './social-item'

const SocialList = ({ items }) => (
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

SocialList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default SocialList
