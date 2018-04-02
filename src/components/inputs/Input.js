// @flow
import * as React from 'react'
import { compose, mapProps, withHandlers } from 'recompose'
import { Form } from 'semantic-ui-react'

type ApiPropsT = {
  block?: boolean,
  Component: React.Node,
  hasError?: boolean,
  name: string,
  onChange?: (name: string, value: string) => void,
  placeholder?: string,
  required?: boolean,
  type?: string,
}

function Input({ Component, ...rest }) {
  return <Component {...rest} />
}

export default compose(
  withHandlers({
    onChange: ({ name, onChange }: ApiPropsT) => (_: any, data: any) => {
      if (!onChange) {
        return
      }

      onChange(name, data.value)
    },
  }),
  mapProps(({ Component, block, hasError, type, value, ...rest }) => ({
    Component: Component || Form.Input,
    error: hasError,
    fluid: block,
    type: type || 'text',
    value: value || '',
    ...rest,
  }))
)(Input)
