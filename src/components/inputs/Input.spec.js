import React from 'react'
import { mount } from 'enzyme'

import Input from './Input'

describe('Input', () => {
  let component
  let onChange

  beforeEach(() => {
    onChange = jest.fn()

    component = mount(<Input name="firstName" onChange={onChange} />)
  })

  it('should render input[type"text"] by default', () => {
    expect(component.find('input[type="text"]')).toHaveLength(1)
  })

  it('should map props', () => {
    let input = component.find('input')
    expect(input.prop('required')).toBeUndefined()

    component.setProps({
      required: true,
    })

    input = component.find('input')

    expect(input.prop('required')).toBeTruthy()
  })

  it('should handle onChange', () => {
    component
      .find('input')
      .simulate('change', { target: { value: 'new text' } })
    expect(onChange).toHaveBeenLastCalledWith('firstName', 'new text')
  })
})
