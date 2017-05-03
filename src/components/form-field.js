import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Label } from 'react-app-components'

const FormField = ({ children, hasError, label }) => {
  const fieldCssClass = classNames(
    'required field',
    { error: hasError },
  )

  return (
    <div className={fieldCssClass}>
      <Label>{label}</Label>
      {children}
    </div>
  )
}

FormField.propTypes = {
  children: PropTypes.element,
  hasError: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
}

FormField.defaultProps = {
  children: null,
}

export default FormField
