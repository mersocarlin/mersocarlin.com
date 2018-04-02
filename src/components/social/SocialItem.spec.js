import React from 'react'
import { shallow } from 'enzyme'

import SocialItem from './SocialItem'

function setup() {
  const props = {
    item: {
      className: 'mail',
      icon: 'mail',
      url: 'http://www.example.com',
    },
  }

  const enzymeWrapper = shallow(<SocialItem {...props} />)

  return {
    props,
    enzymeWrapper,
  }
}

describe('components -> social-item', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('a')).not.toBeNull()

    const socialItemProps = enzymeWrapper.find('a').props()
    expect(socialItemProps).toHaveProperty(
      'data-content',
      'http://www.example.com'
    )
    expect(socialItemProps).toHaveProperty(
      'className',
      'ui circular icon button mail'
    )
    expect(socialItemProps).toHaveProperty('href', 'http://www.example.com')
    expect(socialItemProps).toHaveProperty('target', '_blank')
  })
})
