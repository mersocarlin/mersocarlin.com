import React from 'react'
import { shallow } from 'enzyme'

import { Image, Loader } from '../../src/components'

const IMG_URL = 'http://www.example.com/images/me.png'

describe('components -> image', () => {
  let component
  beforeAll(() => {
    component = shallow(<Image src={IMG_URL} />)
  })

  it('should render Loader in first place', () => {
    expect(component.dive().find(Loader)).toHaveLength(1)
    expect(component.props()).toHaveProperty('isLoading', true)
    expect(component.dive().find('img').props()).toHaveProperty('src', IMG_URL)
  })

  it('should not render Loader after image has been loaded', () => {
    component.dive().find('img').simulate('load')

    expect(component.props()).toHaveProperty('isLoading', false)
    expect(component.dive().find(Loader)).toHaveLength(0)
  })
})
