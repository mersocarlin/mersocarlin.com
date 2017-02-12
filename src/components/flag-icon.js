import React, { PropTypes } from 'react'

const FlagIcon = ({ flag }) => (
  <span className={`flag-icon flag-icon-${flag}`} />
)

FlagIcon.propTypes = {
  flag: PropTypes.string.isRequired,
}

export default FlagIcon
