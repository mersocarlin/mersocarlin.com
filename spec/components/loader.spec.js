import React from 'react'
import { shallow } from 'enzyme'
import Loader from '../../src/components/loader'

function setup() {
  const enzymeWrapper = shallow(<Loader />)

  return {
    enzymeWrapper
  }
}

describe('components -> loader', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('div').hasClass('ui active centered inline loader')).toBeTruthy()
  })
})
