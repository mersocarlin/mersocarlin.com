// @flow
import React from 'react'
import classNames from 'classnames'

import FlagIcon from './flag-icon'

const items = [{ flag: 'br', locale: 'pt-BR' }, { flag: 'gb', locale: 'en' }]

type PropsT = {
  value: string,
  onChange: (locale: string) => void,
}

const FlagMenu = ({ value, onChange }: PropsT) =>
  <div className="ui dropdown item">
    <FlagIcon flag={value} />
    <div className="menu">
      {items.map(({ flag, locale }) =>
        <a
          key={flag}
          className={classNames('item', { active: value === flag })}
          onClick={() => onChange(locale)}
          role="link"
          tabIndex="-1"
        >
          <FlagIcon flag={flag} />
        </a>
      )}
    </div>
  </div>

export default FlagMenu
