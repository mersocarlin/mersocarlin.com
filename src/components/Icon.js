// @flow
import React from 'react'
import { Icon as SemanticIcon } from 'semantic-ui-react'

type ApiPropsT = {
  icon: string,
  size?: string,
}

export default function Icon({ icon, size }: ApiPropsT) {
  return <SemanticIcon name={icon} size={size} />
}
