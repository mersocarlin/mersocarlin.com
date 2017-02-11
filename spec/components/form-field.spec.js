import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import FormField from '../../src/components/form-field'

function setup (hasError) {
  const props = {
    label: 'Label field',
    hasError,
  }

  const enzymeWrapper = shallow(
    <FormField {...props} />
  )

  return {
    props,
    enzymeWrapper,
  }
}

describe('components -> form-field', () => {
  it('should render without error class', () => {
    const { enzymeWrapper } = setup(false)
    expect(enzymeWrapper.find('div')).to.not.be.null

    const divProps = enzymeWrapper.find('div').props()
    expect(divProps).to.have.property('className', 'required field')

    const label = enzymeWrapper.find('label')
    expect(label).to.not.be.null
    expect(label.text()).to.be.equal('Label field')
  })

  it('should render with error class', () => {
    const { enzymeWrapper } = setup(true)
    expect(enzymeWrapper.find('div')).to.not.be.null

    const divProps = enzymeWrapper.find('div').props()
    expect(divProps).to.have.property('className', 'required field error')
  })
})
