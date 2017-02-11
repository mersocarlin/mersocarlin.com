import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import FormField from './form-field'
import Icon from './icon'
import { strings } from '../config'


class ContactForm extends Component {
  static propTypes = {
    error: PropTypes.object,
    isSubmiting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: {},
  }

  constructor (props) {
    super(props)

    this.state = {
      errorFields: {
        name: false,
        email: false,
        subject: false,
        message: false,
        validation: false,
      },
      hasError: false,
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit () {
    if (this.props.isSubmiting) return

    const payload = {
      name: this.name.value,
      email: this.email.value,
      subject: this.subject.value,
      message: this.message.value,
      validation: this.validation.value,
    }

    const { errorFields } = this.state
    const error = { ...errorFields }
    Object
      .keys(error)
      .forEach((field) => { error[field] = !payload[field] })

    if (parseInt(payload.validation, 10) !== 8) error.validation = true

    const hasError = Object
      .keys(error)
      .filter(field => error[field])
      .length > 0

    this.setState({ errorFields: error, hasError })

    if (hasError) return

    this.props.onSubmit(payload)
  }

  renderErrorMessage (error) {
    if (!error) return null

    let errorMessage = strings.contact.form.errorMessage
    if (error.message) {
      errorMessage = error.message
    }

    return (
      <div className="ui icon error message">
        <Icon icon="warning sign" />
        <div className="content">
          <div className="header">
            {strings.contact.form.errorHeader}
          </div>
          <p>{errorMessage}</p>
        </div>
      </div>
    )
  }

  render () {
    const { error, isSubmiting } = this.props
    const { errorFields, hasError } = this.state
    const formCssClass = classNames(
      'contact-form-component ui form',
      { error: hasError || error },
    )
    const submitCssClass = classNames(
      'ui green submit button',
      { loading: isSubmiting },
    )
    const formStrings = strings.contact.form

    return (
      <div className={formCssClass}>
        <div className="two fields">
          <FormField label={formStrings.name.label} hasError={errorFields.name}>
            <input
              ref={(name) => { this.name = name }}
              type="text"
              placeholder={formStrings.name.placeholder}
            />
          </FormField>
          <FormField label={formStrings.email.label} hasError={errorFields.email}>
            <input
              ref={(email) => { this.email = email }}
              type="email"
              placeholder={formStrings.email.placeholder}
            />
          </FormField>
        </div>
        <FormField label={formStrings.subject.label} hasError={errorFields.subject}>
          <input
            ref={(subject) => { this.subject = subject }}
            type="text"
            placeholder={formStrings.subject.placeholder}
          />
        </FormField>
        <FormField label={formStrings.message.label} hasError={errorFields.message}>
          <textarea ref={(message) => { this.message = message }} rows="4" />
        </FormField>
        <FormField label={formStrings.validation.label} hasError={errorFields.validation}>
          <input
            ref={(validation) => { this.validation = validation }}
            type="text"
            placeholder={formStrings.validation.placeholder}
          />
        </FormField>
        {this.renderErrorMessage(error)}
        <button className={submitCssClass} onClick={this.onSubmit}>
          {formStrings.send}
        </button>
      </div>
    )
  }
}

export default ContactForm
