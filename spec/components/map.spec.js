import React from 'react'
import { shallow } from 'enzyme'
import Map from '../../src/components/map'

function setup () {
  const props = {
    apiKey: 'abc123',
    center: { lat: 0, lng: 0 },
    zoom: 15,
  }

  const enzymeWrapper = shallow(
    <Map {...props} />,
  )

  return {
    props,
    enzymeWrapper,
  }
}

describe('components -> map', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('div').hasClass('map-component')).toBeTruthy()
    expect(enzymeWrapper.find('GoogleMap')).not.toBeNull()

    const gMapProps = enzymeWrapper.find('GoogleMap').props()
    expect(gMapProps).toHaveProperty('bootstrapURLKeys')
    expect(gMapProps.bootstrapURLKeys).toEqual({ key: 'abc123', language: 'en' })
    expect(gMapProps).toHaveProperty('center')
    expect(gMapProps.center).toEqual({ lat: 0, lng: 0 })
    expect(gMapProps).toHaveProperty('zoom', 15)
  })
})
