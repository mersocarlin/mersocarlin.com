import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { injectIntl, intlShape } from 'react-intl'

import ErrorMessage from './error-message'
import FormField from './form-field'


class ContactForm extends Component {
  static propTypes = {
    error: PropTypes.object,
    intl: intlShape.isRequired,
    isSubmiting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
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

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
    if (this.props.isSubmiting) return

    const payload = {
      name: this.name.value,
      email: this.email.value,
      subject: this.subject.value,
      message: this.message.value,
      validation: this.validation.value,
    }

    const error = { ...this.state.errorFields }

    Object
      .keys(error)
      .forEach(field => (error[field] = !payload[field]))

    if (parseInt(payload.validation, 10) !== 8) {
      error.validation = true
    }

    const hasError = Object
      .keys(error)
      .filter(field => error[field])
      .length > 0

    this.setState({ errorFields: error, hasError })

    if (hasError) return

    this.props.onSubmit(payload)
  }

  render () {
    const { error, intl: { formatMessage }, isSubmiting } = this.props
    const { errorFields, hasError } = this.state
    const formCssClass = classNames(
      'contact-form-component ui form',
      { error: hasError || error },
    )
    const submitCssClass = classNames(
      'ui green submit button',
      { loading: isSubmiting },
    )

    return (
      <div className={formCssClass}>
        <div className="two fields">
          <FormField
            label={formatMessage({ id: 'contact.form.name.label' })}
            hasError={errorFields.name}
          >
            <input
              ref={(name) => { this.name = name }}
              type="text"
              placeholder={formatMessage({ id: 'contact.form.name.placeholder' })}
            />
          </FormField>
          <FormField
            label={formatMessage({ id: 'contact.form.email.label' })}
            hasError={errorFields.email}
          >
            <input
              ref={(email) => { this.email = email }}
              type="email"
              placeholder={formatMessage({ id: 'contact.form.email.placeholder' })}
            />
          </FormField>
        </div>
        <FormField
          label={formatMessage({ id: 'contact.form.subject.label' })}
          hasError={errorFields.subject}
        >
          <input
            ref={(subject) => { this.subject = subject }}
            type="text"
            placeholder={formatMessage({ id: 'contact.form.subject.placeholder' })}
          />
        </FormField>
        <FormField
          label={formatMessage({ id: 'contact.form.message.label' })}
          hasError={errorFields.message}
        >
          <textarea ref={(message) => { this.message = message }} rows="4" />
        </FormField>
        <FormField
          label={formatMessage({ id: 'contact.form.validation.label' })}
          hasError={errorFields.validation}
        >
          <input
            ref={(validation) => { this.validation = validation }}
            type="text"
            placeholder=""
          />
        </FormField>
        { error && <ErrorMessage error={error} /> }
        <button className={submitCssClass} onClick={this.handleSubmit}>
          {formatMessage({ id: 'contact.form.send' })}
        </button>
      </div>
    )
  }
}

export default injectIntl(ContactForm)
