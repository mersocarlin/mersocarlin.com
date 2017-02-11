import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
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

    expect(enzymeWrapper.find('div').hasClass('map-component')).to.be.equal(true)
    expect(enzymeWrapper.find('GoogleMap')).to.not.be.null

    const gMapProps = enzymeWrapper.find('GoogleMap').props()
    expect(gMapProps).to.have.property('bootstrapURLKeys')
    expect(gMapProps.bootstrapURLKeys).to.deep.equal({ key: 'abc123', language: 'en' })
    expect(gMapProps).to.have.property('center')
    expect(gMapProps.center).to.deep.equal({ lat: 0, lng: 0 })
    expect(gMapProps).to.have.property('zoom', 15)
  })
})
