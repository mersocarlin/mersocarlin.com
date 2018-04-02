import React from 'react'
import { mount } from 'enzyme'

import { Text, TextArea } from '../inputs'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  let component
  let onSubmit

  const getNameInput = () => component.find(Text).at(0)
  const getEmailInput = () => component.find(Text).at(1)
  const getSubjectInput = () => component.find(Text).at(2)
  const getMessageInput = () => component.find(TextArea).at(0)
  const getValidationInput = () => component.find(Text).at(3)

  const setName = value => getNameInput().prop('onChange')('name', value)
  const setEmail = value => getEmailInput().prop('onChange')('email', value)
  const setSubject = value =>
    getSubjectInput().prop('onChange')('subject', value)
  const setMessage = value =>
    getMessageInput().prop('onChange')('message', value)
  const setValidation = value =>
    getValidationInput().prop('onChange')('validation', value)

  beforeEach(() => {
    onSubmit = jest.fn()

    component = mount(<ContactForm onSubmit={onSubmit} />)
  })

  it('should not trigger onSubmit if some of the fields are invalid', () => {
    component.find('button').simulate('click')
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('should highlight name as invalid', () => {
    component.find('button').simulate('click')

    expect(getNameInput().prop('hasError')).toBeTruthy()
  })

  it('should highlight email as invalid', () => {
    setName('My name')

    component.find('button').simulate('click')

    expect(getEmailInput().prop('hasError')).toBeTruthy()
  })

  it('should highlight subject as invalid', () => {
    setName('My name')
    setEmail('mail@me.com')

    component.find('button').simulate('click')

    expect(getSubjectInput().prop('hasError')).toBeTruthy()
  })

  it('should highlight message as invalid', () => {
    setName('My name')
    setEmail('mail@me.com')
    setSubject('Subject')

    component.find('button').simulate('click')

    expect(getMessageInput().prop('hasError')).toBeTruthy()
  })

  it('should highlight validation as invalid', () => {
    setName('My name')
    setEmail('mail@me.com')
    setSubject('Subject')
    setMessage('Message')

    component.find('button').simulate('click')

    expect(getValidationInput().prop('hasError')).toBeTruthy()
  })

  it('should highlight validation if value is different than 8', () => {
    setName('My name')
    setEmail('mail@me.com')
    setSubject('Subject')
    setMessage('Message')
    setValidation('123')

    component.find('button').simulate('click')

    expect(getValidationInput().prop('hasError')).toBeTruthy()
  })

  it('should trigger onSubmit if form is filled correctly', () => {
    setName('My name')
    setEmail('mail@me.com')
    setSubject('Subject test')
    setMessage('message test')
    setValidation('8')

    component.find('button').simulate('click')

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'mail@me.com',
      message: 'message test',
      name: 'My name',
      subject: 'Subject test',
      validation: '8',
    })
  })
})
