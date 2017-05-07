import React from 'react'
import { mount } from 'enzyme'
import FormField from '../../src/components/form-field'

describe('components -> form-field', () => {
  let component
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      label: 'Label field',
      hasError: false,
    }
    component = mount(
      <FormField {...defaultProps} />,
    )
  })

  it('should render without error class', () => {
    expect(component).toBeDefined()

    const props = component.find('div').props()
    expect(props).toHaveProperty('className', 'required field')

    const label = component.find('Label')
    expect(label).toBeDefined()
    expect(label.text()).toBe('Label field')
  })

  it('should render with error class', () => {
    component.setProps({
      hasError: true,
    })

    const divProps = component.find('div').props()
    expect(divProps).toHaveProperty('className', 'required field error')
  })
})
