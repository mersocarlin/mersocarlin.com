import React, { PropTypes } from 'react'

import Icon from './icon'

const SocialItem = ({ item }) => (
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

SocialItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default SocialItem
