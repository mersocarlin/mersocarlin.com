import React from 'react'
import { shallow } from 'enzyme'
import Image from '../../src/components/image'

function setup() {
  const props = {
    src: 'http://www.example.com/images/me.png',
  }

  const enzymeWrapper = shallow(
    <Image {...props} />
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('components -> image', () => {
  it('should render self and subcomponents with initial state', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('div').hasClass('image-component')).toBeTruthy()
    expect(enzymeWrapper.find('Loader')).not.toBeNull()
    const imgProps = enzymeWrapper.find('img').props()
    expect(imgProps).toHaveProperty('alt', '')
    expect(imgProps).toHaveProperty('className', 'ui medium circular image fadeIn animated hidden')
    expect(imgProps).toHaveProperty('src', 'http://www.example.com/images/me.png')
  })

  it('should render self and subcomponents after image has been loaded', () => {
    const { enzymeWrapper } = setup()

    enzymeWrapper.find('img').simulate('load')

    expect(enzymeWrapper.find('div').hasClass('image-component')).toBeTruthy()
    expect(enzymeWrapper.find('Loader')).toHaveLength(0)

    const imgProps = enzymeWrapper.find('img').props()
    expect(imgProps).toHaveProperty('alt', '')
    expect(imgProps).toHaveProperty('className', 'ui medium circular image fadeIn animated')
    expect(imgProps).toHaveProperty('src', 'http://www.example.com/images/me.png')
  })
})
