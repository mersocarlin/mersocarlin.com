import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import FormField from './form-field';
import { strings } from '../config';


class ContactForm extends Component {
  static propTypes = {
    error: PropTypes.object,
    isSubmiting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  constructor (props) {
    super(props);

    this.state = {
      errorFields: {
        name: false,
        email: false,
        subject: false,
        message: false,
        validation: false,
      },
      hasError: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit () {
    if (this.props.isSubmiting) return;

    const payload = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      subject: this.refs.subject.value,
      message: this.refs.message.value,
      validation: this.refs.validation.value,
    };

    const { errorFields } = this.state;
    const error = { ...errorFields };
    Object
      .keys(error)
      .forEach(field => { error[field] = !payload[field]; });

    if (parseInt(payload.validation, 10) !== 8) error.validation = true;

    const hasError = Object
      .keys(error)
      .filter(field => error[field])
      .length > 0;

    this.setState({ errorFields: error, hasError });

    if (hasError) return;

    this.props.onSubmit(payload);
  }

  renderErrorMessage (error) {
    if (!error) return null;

    let errorMessage = strings.contact.form.errorMessage;
    if (error.message) {
      errorMessage = error.message;
    }

    return (
      <div className="ui icon error message">
        <i className="warning sign icon"></i>
        <div className="content">
          <div className="header">
            {strings.contact.form.errorHeader}
          </div>
          <p dangerouslySetInnerHTML={{ __html: errorMessage }}></p>
        </div>
      </div>
    );
  }

  render () {
    const { error, isSubmiting } = this.props;
    const { errorFields, hasError } = this.state;
    const formCssClass = classNames(
      'contact-form-component ui form',
      { 'error': hasError || error }
    );
    const submitCssClass = classNames(
      'ui green submit button',
      { 'loading': isSubmiting }
    );
    const formStrings = strings.contact.form;

    return (
      <div className={formCssClass}>
        <div className="two fields">
          <FormField label={formStrings.name.label} hasError={errorFields.name}>
            <input
              ref="name"
              type="text"
              placeholder={formStrings.name.placeholder}
            />
          </FormField>
          <FormField label={formStrings.email.label} hasError={errorFields.email}>
            <input
              ref="email"
              type="email"
              placeholder={formStrings.email.placeholder}
            />
          </FormField>
        </div>
        <FormField label={formStrings.subject.label} hasError={errorFields.subject}>
          <input
            ref="subject"
            type="text"
            placeholder={formStrings.subject.placeholder}
          />
        </FormField>
        <FormField label={formStrings.message.label} hasError={errorFields.message}>
          <textarea ref="message" rows="4"></textarea>
        </FormField>
        <FormField label={formStrings.validation.label} hasError={errorFields.validation}>
          <input
            ref="validation"
            type="text"
            placeholder={formStrings.validation.placeholder}
          />
        </FormField>
        {this.renderErrorMessage(error)}
        <div className={submitCssClass} onClick={this.onSubmit}>
          {formStrings.send}
        </div>
      </div>
    );
  }
}

export default ContactForm;
