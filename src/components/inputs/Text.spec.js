import React from 'react'
import { mount } from 'enzyme'

import Text from './Text'

describe('Text', () => {
  let component

  beforeEach(() => {
    component = mount(<Text />)
  })

  it('should render input[type"text"]', () => {
    expect(component.find('input[type="text"]')).toHaveLength(1)
  })
})
