// @flow
import React from 'react'
import { Icon as SemanticIcon } from 'semantic-ui-react'

type ApiPropsT = {
  icon: string,
}

export default function Icon({ icon, ...rest }: ApiPropsT) {
  return <SemanticIcon name={icon} {...rest} />
}
