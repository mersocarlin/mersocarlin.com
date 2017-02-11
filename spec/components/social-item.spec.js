import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import SocialItem from '../../src/components/social-item'

function setup () {
  const props = {
    item: {
      className: 'mail',
      icon: 'mail',
      url: 'http://www.example.com',
    },
  }

  const enzymeWrapper = shallow(
    <SocialItem {...props} />,
  )

  return {
    props,
    enzymeWrapper,
  }
}

describe('components -> social-item', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('a')).to.not.be.null

    const socialItemProps = enzymeWrapper.find('a').props()
    expect(socialItemProps).to.have.property('data-content', 'http://www.example.com')
    expect(socialItemProps).to.have.property('className', 'ui circular icon button mail')
    expect(socialItemProps).to.have.property('href', 'http://www.example.com')
    expect(socialItemProps).to.have.property('target', '_blank')
  })
})
