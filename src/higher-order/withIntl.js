import React from 'react'
import { injectIntl } from 'react-intl'

export default function withIntlHOC(WrappedComponent) {
  const withIntl = props => <WrappedComponent {...props} />

  return injectIntl(withIntl)
}
