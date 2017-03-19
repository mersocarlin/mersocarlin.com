import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
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
      <FormField {...defaultProps} />
    )
  })

  it('should render without error class', () => {
    expect(component).to.exist

    const props = component.find('div').props()
    expect(props).to.have.property('className', 'required field')

    const label = component.find('Label')
    expect(label).to.exist
    expect(label.text()).to.be.equal('Label field')
  })

  it('should render with error class', () => {
    component.setProps({
      hasError: true,
    })

    const divProps = component.find('div').props()
    expect(divProps).to.have.property('className', 'required field error')
  })
})
