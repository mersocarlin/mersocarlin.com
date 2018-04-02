import React from 'react'
import { shallow } from 'enzyme'

import Map from './map'

describe('components -> map', () => {
  let component
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      apiKey: 'abc123',
      center: { lat: 0, lng: 0 },
      zoom: 15,
    }

    component = shallow(<Map {...defaultProps} />)
  })

  it('should render self and subcomponents', () => {
    expect(component.find('GoogleMap')).not.toBeNull()

    const gMapProps = component.find('GoogleMap').props()
    expect(gMapProps).toHaveProperty('bootstrapURLKeys')
    expect(gMapProps.bootstrapURLKeys).toEqual({
      key: 'abc123',
      language: 'en',
    })
    expect(gMapProps).toHaveProperty('center')
    expect(gMapProps.center).toEqual({ lat: 0, lng: 0 })
    expect(gMapProps).toHaveProperty('zoom', 15)
  })
})
