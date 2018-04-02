// @flow
import React from 'react'

type ApiPropsT = {
  icon: string,
  size?: string,
}

export default function Icon({ icon, size = '' }: ApiPropsT) {
  return <i className={`${icon} ${size} icon`} />
}
