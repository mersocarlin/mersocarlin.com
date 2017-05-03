import React from 'react'
import PropTypes from 'prop-types'

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
