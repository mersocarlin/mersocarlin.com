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
    };

    const { errorFields } = this.state;
    const error = { ...errorFields };
    Object
      .keys(error)
      .forEach(field => error[field] = false);

    if (!payload.name) error.name = true;
    if (!payload.email) error.email = true;
    if (!payload.subject) error.subject = true;
    if (!payload.message) error.message = true;

    const hasError = Object
      .keys(error)
      .filter(field => error[field])
      .length > 0;

    if (hasError) {
      this.setState({ errorFields: error, hasError });
      return;
    }

    this.props.onSubmit(payload);
  }

  renderErrorMessage ({ error }) {
    if (!error) return null;

    return (
      <div className="ui icon error message">
        <i className="warning sign icon"></i>
        <div className="content">
          <div className="header">
            {Strings.Contact.Form.ErrorHeader}
          </div>
          <p>{error.detail}</p>
        </div>
      </div>
    );
  }

  render () {
    const { isSubmiting } = this.props;
    const { errorFields, hasError } = this.state;
    const {
      name: nameError,
      email: emailError,
      subject: subjectError,
      message: messageError,
    } = errorFields;

    const fieldCssClass = 'required field';
    const formCssClass = classNames('contact-form-component ui form', { 'error': hasError });
    const nameFieldCssClass = classNames(fieldCssClass, { 'error': nameError });
    const emailFieldCssClass = classNames(fieldCssClass, { 'error': emailError });
    const subjectFieldCssClass = classNames(fieldCssClass, { 'error': subjectError });
    const messageFieldCssClass = classNames(fieldCssClass, { 'error': messageError });
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
              name="first-name"
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
            name="subject"
            placeholder={formStrings.Subject.Placeholder}
          />
        </div>
        <div className={messageFieldCssClass}>
          <label>{formStrings.Message.Label}</label>
          <textarea ref="message" rows="4"></textarea>
        </div>
        {this.renderErrorMessage(this.props)}
        <div className={submitCssClass} onClick={::this.onSubmit}>
          {formStrings.Send}
        </div>
      </div>
    );
  }
}
