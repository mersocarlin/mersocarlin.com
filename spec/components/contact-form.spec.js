import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import ContactForm from '../../src/components/contact-form'

function setup () {
  const props = {
    error: null,
    isSubmiting: false,
    onSubmit: jest.fn(),
  }

  const enzymeWrapper = shallow(
    <ContactForm {...props} />,
  )

  return {
    props,
    enzymeWrapper,
  }
}

describe('components -> contact-form', () => {
  it('should render without error class', () => {
    const { enzymeWrapper } = setup()

    const rootDiv = enzymeWrapper.find('.contact-form-component')
    expect(rootDiv).to.not.be.null
    expect(rootDiv.find('FormField')).to.have.length(5)
    expect(rootDiv.find('.error.message')).to.have.length(0)

    const props = rootDiv.props()
    expect(props).to.have.property('className', 'contact-form-component ui form')

    const submit = rootDiv.find('.submit')
    expect(submit).to.not.be.null
    expect(submit.hasClass('loading')).to.be.equal(false)
  })

  it('should render with error class', () => {
    const wrapper = mount(
      <ContactForm
        error={null}
        isSubmiting={false}
        onSubmit={jest.fn()}
      />,
    )
    const rootDiv = wrapper.find('.contact-form-component')
    expect(rootDiv).to.not.be.null

    const submit = wrapper.find('.submit')
    submit.simulate('click')

    expect(rootDiv.hasClass('error')).to.be.equal(true)
  })

  it('should render message error', () => {
    const wrapper = mount(
      <ContactForm
        error={{ message: 'error message' }}
        isSubmiting={false}
        onSubmit={jest.fn()}
      />,
    )
    const rootDiv = wrapper.find('.contact-form-component')
    expect(rootDiv).to.not.be.null

    const submit = wrapper.find('.submit')
    submit.simulate('click')

    expect(rootDiv.find('.error.message')).to.have.length(1)
  })
})
