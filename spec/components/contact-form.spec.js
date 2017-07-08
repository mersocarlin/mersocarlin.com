import React from 'react'

import { mountWithIntl } from '../helpers/intl-enzyme-test-helper'
import ContactForm from '../../src/components/contact-form'

describe('components -> contact-form', () => {
  let component
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      error: null,
      isSubmiting: false,
    }

    component = mountWithIntl(<ContactForm {...defaultProps} />)
  })

  it('should render without error class', () => {
    expect(component.find('FormField')).toHaveLength(5)
    expect(component.find('ErrorMessage')).toHaveLength(0)

    const rootDiv = component.find('.contact-form-component')
    const props = rootDiv.props()
    expect(props).toHaveProperty('className', 'contact-form-component ui form')

    expect(component.find('.submit').hasClass('loading')).toBeFalsy
  })

  it('should render with error class', () => {
    const submit = component.find('.submit')
    submit.simulate('click')

    expect(component.find('.contact-form-component').hasClass('error'))
      .toBeTruthy
  })

  it('should render error message', () => {
    const handleSubmit = jest.fn()
    component.setProps({
      error: {
        message: 'error message',
      },
      onSubmit: handleSubmit,
    })

    expect(handleSubmit).not.toHaveBeenCalled()
    component.find('.submit').simulate('click')

    expect(handleSubmit).toHaveBeenCalledTimes(0)
    expect(component.find('ErrorMessage')).toHaveLength(1)
  })

  it('should submit form', () => {
    const handleSubmit = jest.fn()
    component.setProps({
      onSubmit: handleSubmit,
    })

    component
      .find('FormField')
      .find('Text')
      .at(0)
      .simulate('change', { target: { value: 'Name' } })
    component
      .find('FormField')
      .find('Text')
      .at(1)
      .simulate('change', { target: { value: 'mail@me.com' } })
    component
      .find('FormField')
      .find('Text')
      .at(2)
      .simulate('change', { target: { value: 'Subject' } })
    component
      .find('FormField')
      .find('Textarea')
      .at(0)
      .simulate('change', { target: { value: 'Message' } })
    component
      .find('FormField')
      .find('Text')
      .at(3)
      .simulate('change', { target: { value: '8' } })

    expect(handleSubmit).not.toHaveBeenCalled()
    component.find('.submit').simulate('click')

    expect(handleSubmit).toHaveBeenCalledTimes(1)
    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'Name',
      email: 'mail@me.com',
      subject: 'Subject',
      message: 'Message',
    })
    expect(component.find('ErrorMessage')).toHaveLength(0)
  })
})
