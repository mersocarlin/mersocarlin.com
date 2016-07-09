import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


import { Strings } from '../constants';


export default class ContactForm extends Component {
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
  }

  onSubmit () {
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

    let errorMessage = Strings.Contact.Form.ErrorMessage;
    if (error.message) {
      errorMessage = error.message;
    }

    return (
      <div className="ui icon error message">
        <i className="warning sign icon"></i>
        <div className="content">
          <div className="header">
            {Strings.Contact.Form.ErrorHeader}
          </div>
          <p dangerouslySetInnerHTML={{ __html: errorMessage }}></p>
        </div>
      </div>
    );
  }

  render () {
    const { error, isSubmiting } = this.props;
    const { errorFields, hasError } = this.state;
    const {
      name: nameError,
      email: emailError,
      subject: subjectError,
      message: messageError,
      validation: validationError,
    } = errorFields;

    const fieldCssClass = 'required field';
    const formCssClass = classNames(
      'contact-form-component ui form',
      { 'error': hasError || error }
    );
    const nameFieldCssClass = classNames(fieldCssClass, { 'error': nameError });
    const emailFieldCssClass = classNames(fieldCssClass, { 'error': emailError });
    const subjectFieldCssClass = classNames(fieldCssClass, { 'error': subjectError });
    const messageFieldCssClass = classNames(fieldCssClass, { 'error': messageError });
    const validationFieldCssClass = classNames(fieldCssClass, { 'error': validationError });
    const submitCssClass = classNames('ui green submit button', { 'loading': isSubmiting });
    const formStrings = Strings.Contact.Form;

    return (
      <div className={formCssClass}>
        <div className="two fields">
          <div className={nameFieldCssClass}>
            <label>{formStrings.Name.Label}</label>
            <input
              ref="name"
              type="text"
              placeholder={formStrings.Name.Placeholder}
            />
          </div>
          <div className={emailFieldCssClass}>
            <label>{formStrings.Email.Label}</label>
            <input
              ref="email"
              type="email"
              placeholder={formStrings.Email.Placeholder}
            />
          </div>
        </div>
        <div className={subjectFieldCssClass}>
          <label>{formStrings.Subject.Label}</label>
          <input
            ref="subject"
            type="text"
            placeholder={formStrings.Subject.Placeholder}
          />
        </div>
        <div className={messageFieldCssClass}>
          <label>{formStrings.Message.Label}</label>
          <textarea ref="message" rows="4"></textarea>
        </div>
        <div className={validationFieldCssClass}>
          <label>{formStrings.Validation.Label}</label>
          <input
            ref="validation"
            type="text"
            placeholder={formStrings.Validation.Placeholder}
          />
        </div>
        {this.renderErrorMessage(error)}
        <div className={submitCssClass} onClick={::this.onSubmit}>
          {formStrings.Send}
        </div>
      </div>
    );
  }
}
