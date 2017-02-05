import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


class FormField extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired,
  };

  render () {
    const { children, hasError, label } = this.props;

    const fieldCssClass = classNames(
      'required field',
      { 'error': hasError }
    );

    return (
      <div className={fieldCssClass}>
        <label>{label}</label>
        {children}
      </div>
    );
  }
}

export default FormField;
