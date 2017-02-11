import React, { PropTypes } from 'react'
import classNames from 'classnames'


const FormField = ({ children, hasError, label }) => {
  const fieldCssClass = classNames(
    'required field',
    { error: hasError },
  )

  return (
    <div className={fieldCssClass}>
      <label>{label}</label>
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
