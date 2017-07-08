// @flow
import React from 'react'
import classNames from 'classnames'
import { Label } from 'react-app-components'

type PropsT = {
  children?: React$Element<*>,
  hasError: boolean,
  label: string,
}

const FormField = ({ children, hasError, label }: PropsT) => {
  const fieldCssClass = classNames('required field', { error: hasError })

  return (
    <div className={fieldCssClass}>
      <Label>
        {label}
      </Label>
      {children}
    </div>
  )
}

FormField.defaultProps = {
  children: null,
}

export default FormField
