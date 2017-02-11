import React, { PropTypes } from 'react'

const Icon = ({ icon, size }) => (
  <i className={`${icon} ${size} icon`} />
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['mini', 'tiny', 'small', '', 'large', 'big', 'huge', 'massive']),
}

Icon.defaultProps = {
  size: '',
}

export default Icon
