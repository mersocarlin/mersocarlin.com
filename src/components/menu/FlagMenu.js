// @flow
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const items = [{ flag: 'br', locale: 'pt-BR' }, { flag: 'gb', locale: 'en' }]

type PropsT = {
  value: string,
  onChange: (locale: string) => void,
}

export default function FlagMenu({ value, onChange }: PropsT) {
  return (
    <Dropdown item trigger={<FlagIcon flag={value} />}>
      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item
            key={index}
            active={item.flag === value}
            onClick={() => onChange(item.locale)}
            style={{ border: 'none', textAlign: 'center' }}
          >
            <FlagIcon flag={item.flag} />
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

const FlagIcon = ({ flag }) => <i className={`flag ${flag}`} />
