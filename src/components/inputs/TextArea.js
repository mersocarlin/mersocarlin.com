// @flow
import { compose, mapProps } from 'recompose'
import { Form } from 'semantic-ui-react'

import Input from './Input'

export default compose(
  mapProps(props => ({
    Component: Form.TextArea,
    ...props,
  }))
)(Input)
