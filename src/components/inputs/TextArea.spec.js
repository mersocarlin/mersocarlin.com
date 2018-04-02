import React from 'react'
import { mount } from 'enzyme'

import TextArea from './TextArea'

describe('TextArea', () => {
  let component

  beforeEach(() => {
    component = mount(<TextArea />)
  })

  it('should render textarea', () => {
    expect(component.find('textarea')).toHaveLength(1)
  })
})
