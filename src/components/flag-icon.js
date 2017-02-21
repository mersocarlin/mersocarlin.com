import React, { PropTypes } from 'react'

const FlagIcon = ({ flag }) => (
  <i className={`flag ${flag}`} />
)

FlagIcon.propTypes = {
  flag: PropTypes.string.isRequired,
}

export default FlagIcon
