import React, { PropTypes } from 'react'
import classNames from 'classnames'

import FlagIcon from './flag-icon'

const items = [
  { flag: 'br', locale: 'pt-BR' },
  { flag: 'gb', locale: 'en' },
]

const FlagMenu = ({ value, onChange }) => (
  <div className="ui dropdown item">
    <FlagIcon flag={value} />
    <div className="menu">
      {
        items.map(({ flag, locale }) => (
          <a key={flag} className={classNames('item', { active: value === flag })} onClick={() => onChange(locale)} tabIndex="-1">
            <FlagIcon flag={flag} />
          </a>
        ))
      }
    </div>
  </div>
)

FlagMenu.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FlagMenu
