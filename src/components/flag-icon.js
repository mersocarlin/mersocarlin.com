import React from 'react'
import PropTypes from 'prop-types'

const FlagIcon = ({ flag }) => (
  <i className={`flag ${flag}`} />
)

FlagIcon.propTypes = {
  flag: PropTypes.string.isRequired,
}

export default FlagIcon
