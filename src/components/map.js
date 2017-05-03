import React from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'

import mapStyle from './map.style'
import './map.scss'

const Map = ({ children, apiKey, center, options, zoom }) => (
  <div className="map-component">
    <GoogleMap
      bootstrapURLKeys={{
        key: apiKey,
        language: 'en',
      }}
      center={center}
      zoom={zoom}
      options={{ styles: mapStyle, ...options }}
    >
      {children}
    </GoogleMap>
  </div>
)

Map.propTypes = {
  apiKey: PropTypes.string.isRequired,
  center: PropTypes.object.isRequired,
  children: PropTypes.element,
  options: PropTypes.object,
  zoom: PropTypes.number,
}

Map.defaultProps = {
  children: null,
  options: { },
  zoom: 13,
}

export default Map
