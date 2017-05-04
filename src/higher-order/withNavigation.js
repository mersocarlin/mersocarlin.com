import React from 'react'
import { connect } from 'react-redux'
import { push, goBack as goBackAction } from 'react-router-redux'
import { compose } from 'recompose'

export default function withNavigationHOC (WrappedComponent) {
  const withNavigation = props => <WrappedComponent {...props} />

  return compose(
    connect(undefined, {
      navigateTo: push,
      goBack: goBackAction,
    }),
  )(withNavigation)
}
