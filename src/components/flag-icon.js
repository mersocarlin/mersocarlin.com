import React, { PropTypes } from 'react'

const FlagIcon = ({ flag }) => (
  <span className={`flag flag-${flag}`} />
)

FlagIcon.propTypes = {
  flag: PropTypes.string.isRequired,
}

export default FlagIcon
