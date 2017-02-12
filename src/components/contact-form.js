import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

import FormField from './form-field'
import Icon from './icon'


class ContactForm extends Component {
  static propTypes = {
    error: PropTypes.object,
    intl: intlShape.isRequired,
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

  renderErrorMessage (error, formatMessage) {
    if (!error) return null

    const emailAddress = formatMessage({ id: 'mersocarlin.email' })
    const email = (
      <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">
        {emailAddress}
      </a>
    )
    let errorMessage = (
      <FormattedMessage
        id="contact.form.errorMessage"
        tagName="p"
        values={{ email }}
      />
    )
    if (error.message) {
      errorMessage = (
        <FormattedMessage
          id={error.message}
          defaultMessage={error.message}
          tagName="p"
          values={{ email }}
        />
      )
    }

    return (
      <div className="ui icon error message">
        <Icon icon="warning sign" />
        <div className="content">
          <div className="header">
            {formatMessage({ id: 'contact.form.errorHeader' })}
          </div>
          {errorMessage}
        </div>
      </div>
    )
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
        {this.renderErrorMessage(error, formatMessage)}
        <button className={submitCssClass} onClick={this.onSubmit}>
          {formatMessage({ id: 'contact.form.send' })}
        </button>
      </div>
    )
  }
}

export default injectIntl(ContactForm)
